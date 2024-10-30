"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _reference = /*#__PURE__*/ _interop_require_default(require("./reference"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _brackets = require("./utilities/brackets");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var referenceNodeQuery = (0, _query.nodeQuery)("/declaration/reference"), statementNodeQuery = (0, _query.nodeQuery)("/declaration/statement");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(string, reference, statement) {
        _class_call_check(this, Declaration);
        this.string = string;
        this.reference = reference;
        this.statement = statement;
    }
    _create_class(Declaration, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString(), declarationStatementString = this.statement.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                statementUnified = statementNodeMatches; ///
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnified;
                var referenceString = this.reference.getString(), metavariableString = metavariable.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableNode = metavariable.getNode(), metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);
                metavariableUnified = metavariableNodeMatches; ///
                if (metavariableUnified) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, context) {
                var substitutionUnified;
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementUnified = this.unifyStatement(statement, context), metavariableUnified = this.unifyMetavariable(metavariable, context);
                substitutionUnified = metavariableUnified && statementUnified;
                if (substitutionUnified) {
                    context.debug("...unified the '".concat(declarationString, "' substitution with the '").concat(substitutionString, "' declaration."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnified = false;
                var declarationString = this.string, metalemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metalemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), referenceUnified = metaLemmaMetatheorem.unifyReference(this.reference, substitutions, context);
                if (referenceUnified) {
                    var statementUnified = metaLemmaMetatheorem.unifyStatement(this.statement, substitutions, context);
                    if (statementUnified) {
                        metaLemmaMetatheoremUnified = true;
                    }
                }
                if (metaLemmaMetatheoremUnified) {
                    context.debug("...unified the '".concat(metalemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration."));
                }
                return metaLemmaMetatheoremUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var declarationString = this.string, axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(declarationString, "' declaration..."));
                var referenceUnified = axiomLemmaTheoremConjecture.unifyReference(this.reference, context);
                if (referenceUnified) {
                    var statementUnified = axiomLemmaTheoremConjecture.unifyStatement(this.statement, context);
                    if (statementUnified) {
                        axiomLemmaTheoremConjectureUnified = true;
                    }
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(declarationString, "' declaration."));
                }
                return axiomLemmaTheoremConjectureUnified;
            }
        },
        {
            key: "verify",
            value: function verify(frame, assignments, stated, context) {
                var verified = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                var statementVerified = this.verifyStatement(this.statement, assignments, stated, context);
                if (statementVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(frame, context);
                    }
                    verified = verifiedWhenStated || verifiedWhenDerived;
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(statement, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statementVerified = statement.verify(assignments, stated, context);
                return statementVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(context) {
                var _this = this;
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    if (metaLemmaMetatheoremUnified) {
                        verifiedWhenStated = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                verifiedWhenStated = true;
                            }
                        }
                    }
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(frame, context) {
                var _this = this;
                var verifiedWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    verifiedWhenDerived = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = true;
                        if (metaLemmaMetatheoremUnified) {
                            metaLemmaMetatheoremUnified = frame.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        }
                        if (metaLemmaMetatheoremUnified) {
                            metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        }
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    if (metaLemmaMetatheoremUnified) {
                        verifiedWhenDerived = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                verifiedWhenDerived = true;
                            }
                        }
                    }
                }
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var declaration = null;
                if (declarationNode !== null) {
                    var Statement = _shim.default.Statement, referenceNode = referenceNodeQuery(declarationNode);
                    var statementNode = statementNodeQuery(declarationNode);
                    statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                    var reference = _reference.default.fromReferenceNode(referenceNode, context), statement = Statement.fromStatementNode(statementNode, context), node = declarationNode, string = context.nodeAsString(node);
                    declaration = new Declaration(string, reference, statement);
                }
                return declaration;
            }
        }
    ]);
    return Declaration;
}();
Object.assign(_shim.default, {
    Declaration: Declaration
});
var _default = Declaration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCByZWZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vcmVmZXJlbmNlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0udW5pZnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS51bmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YWxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShmcmFtZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChmcmFtZSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVkID0gKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFzID0gY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLnNvbWUoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IGNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuc29tZSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IGZyYW1lLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IGNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VOb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgICAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgIC8vL1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24oc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBEZWNsYXJhdGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERlY2xhcmF0aW9uO1xuIl0sIm5hbWVzIjpbInJlZmVyZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZGVidWciLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJyZWZlcmVuY2VVbmlmaWVkIiwidW5pZnlSZWZlcmVuY2UiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJ2ZXJpZnkiLCJmcmFtZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsIm1ldGFMZW1tYXMiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1zIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwic29tZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbiIsIlN0YXRlbWVudCIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJmcm9tUmVmZXJlbmNlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1VBOzs7ZUFBQTs7OzJEQXBVaUI7Z0VBQ0s7NERBQ0c7cUJBRUM7d0JBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsMkJBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSw0QkFBTjthQUFNQSxZQUNRQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEcENIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSmZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosU0FBUyxFQUFFSyxPQUFPO2dCQUMvQixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JQLFVBQVVDLFNBQVMsSUFDckNPLDZCQUE2QixJQUFJLENBQUNSLFNBQVMsQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRWxFSSxRQUFRSSxLQUFLLENB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