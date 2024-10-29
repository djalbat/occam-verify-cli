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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3JlZmVyZW5jZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YWxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLnVuaWZ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0udW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVkID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLnVuaWZ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllZCA9ICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxlbW1hcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBbXG4gICAgICAgICAgICAgIC4uLm1ldGFMZW1tYXMsXG4gICAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5zb21lKChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0aGlzLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFzID0gY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLnNvbWUoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmcmFtZS51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0aGlzLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRGVjbGFyYXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGlvbjtcbiJdLCJuYW1lcyI6WyJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImRlYnVnIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwiZGVjbGFyYXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJtZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwic3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicmVmZXJlbmNlVW5pZmllZCIsInVuaWZ5UmVmZXJlbmNlIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidmVyaWZ5IiwiZnJhbWUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJtZXRhTGVtbWFzIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtcyIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsInNvbWUiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwibGVtbWEiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsInRoZW9yZW0iLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiY29uamVjdHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb24iLCJTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFVQTs7O2VBQUE7OzsyREFuVWlCO2dFQUNLO3FCQUVJO3dCQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMvQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUUsNEJBQU47YUFBTUEsWUFDUUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHBDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpmSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVKLFNBQVMsRUFBRUssT0FBTztnQkFDL0IsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCUCxVQUFVQyxTQUFTLElBQ3JDTyw2QkFBNkIsSUFBSSxDQUFDUixTQUFTLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUVsRUksUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQXdERCxPQUF4Q0QsaUJBQWdCLDBCQUFtRCxPQUEzQkMsNEJBQTJCO2dCQUVsRyxJQUFJRSxnQkFBZ0JWLFVBQVVXLE9BQU87Z0JBRXJDRCxnQkFBZ0JFLElBQUFBLHdDQUE4QixFQUFDRixnQkFBZ0IsR0FBRztnQkFFbEUsSUFBTUcsdUJBQXVCLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxrQkFBa0IsQ0FBQ0o7Z0JBRS9ESixtQkFBbUJPLHNCQUF1QixHQUFHO2dCQUU3QyxJQUFJUCxrQkFBa0I7b0JBQ3BCRCxRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBMERQLE9BQXhDRCxpQkFBZ0IsMEJBQW1ELE9BQTNCQyw0QkFBMkI7Z0JBQ3RHO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVaLE9BQU87Z0JBQ3JDLElBQUlhO2dCQUVKLElBQU1DLGtCQUFrQixJQUFJLENBQUNwQixTQUFTLENBQUNFLFNBQVMsSUFDMUNtQixxQkFBcUJILGFBQWFoQixTQUFTO2dCQUVqREksUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQThEVSxPQUE5Q0Msb0JBQW1CLDZCQUEyQyxPQUFoQkQsaUJBQWdCO2dCQUU3RixJQUFNRSxtQkFBbUJKLGFBQWFOLE9BQU8sSUFDdkNXLDBCQUEwQixJQUFJLENBQUN2QixTQUFTLENBQUN3QixxQkFBcUIsQ0FBQ0Y7Z0JBRXJFSCxzQkFBc0JJLHlCQUEwQixHQUFHO2dCQUVuRCxJQUFJSixxQkFBcUI7b0JBQ3ZCYixRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBZ0VJLE9BQTlDQyxvQkFBbUIsNkJBQTJDLE9BQWhCRCxpQkFBZ0I7Z0JBQ2pHO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVwQixPQUFPO2dCQUNyQyxJQUFJcUI7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQzdCLE1BQU0sRUFDL0I4QixxQkFBcUJILGFBQWF4QixTQUFTO2dCQUVqREksUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQThEa0IsT0FBOUNDLG9CQUFtQiw2QkFBNkMsT0FBbEJELG1CQUFrQjtnQkFFL0YsSUFBTTNCLFlBQVl5QixhQUFhdEIsWUFBWSxJQUNyQ2MsZUFBZVEsYUFBYUksZUFBZSxJQUMzQ3ZCLG1CQUFtQixJQUFJLENBQUNGLGNBQWMsQ0FBQ0osV0FBV0ssVUFDbERhLHNCQUFzQixJQUFJLENBQUNGLGlCQUFpQixDQUFDQyxjQUFjWjtnQkFFakVxQixzQkFBdUJSLHVCQUF1Qlo7Z0JBRTlDLElBQUlvQixxQkFBcUI7b0JBQ3ZCckIsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQStEYSxPQUE3Q0QsbUJBQWtCLDZCQUE4QyxPQUFuQkMsb0JBQW1CO2dCQUNuRztnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsb0JBQW9CLEVBQUUxQixPQUFPO2dCQUNyRCxJQUFJMkIsOEJBQThCO2dCQUVsQyxJQUFNTCxvQkFBb0IsSUFBSSxDQUFDN0IsTUFBTSxFQUMvQm1DLDZCQUE2QkYscUJBQXFCOUIsU0FBUztnQkFFakVJLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFtRmtCLE9BQW5FTSw0QkFBMkIsMENBQTBELE9BQWxCTixtQkFBa0I7Z0JBRXBILElBQU0sQUFBRU8sZ0JBQWtCQyxhQUFJLENBQXRCRCxlQUNGRSxnQkFBZ0JGLGNBQWNHLFdBQVcsSUFDekNDLG1CQUFtQlAscUJBQXFCUSxjQUFjLENBQUMsSUFBSSxDQUFDeEMsU0FBUyxFQUFFcUMsZUFBZS9CO2dCQUU1RixJQUFJaUMsa0JBQWtCO29CQUNwQixJQUFNaEMsbUJBQW1CeUIscUJBQXFCM0IsY0FBYyxDQUFDLElBQUksQ0FBQ0osU0FBUyxFQUFFb0MsZUFBZS9CO29CQUU1RixJQUFJQyxrQkFBa0I7d0JBQ3BCMEIsOEJBQThCO29CQUNoQztnQkFDRjtnQkFFQSxJQUFJQSw2QkFBNkI7b0JBQy9CM0IsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQXFGWSxPQUFuRU0sNEJBQTJCLDBDQUEwRCxPQUFsQk4sbUJBQWtCO2dCQUN4SDtnQkFFQSxPQUFPSztZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGlDQUFpQ0MsMkJBQTJCLEVBQUVwQyxPQUFPO2dCQUNuRSxJQUFJcUMscUNBQXFDO2dCQUV6QyxJQUFNZixvQkFBb0IsSUFBSSxDQUFDN0IsTUFBTSxFQUMvQjZDLG9DQUFvQ0YsNEJBQTRCeEMsU0FBUztnQkFFL0VJLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFvR2tCLE9BQXBGZ0IsbUNBQWtDLG9EQUFvRSxPQUFsQmhCLG1CQUFrQjtnQkFFckksSUFBTVcsbUJBQW1CRyw0QkFBNEJGLGNBQWMsQ0FBQyxJQUFJLENBQUN4QyxTQUFTLEVBQUVNO2dCQUVwRixJQUFJaUMsa0JBQWtCO29CQUNwQixJQUFNaEMsbUJBQW1CbUMsNEJBQTRCckMsY0FBYyxDQUFDLElBQUksQ0FBQ0osU0FBUyxFQUFFSztvQkFFcEYsSUFBSUMsa0JBQWtCO3dCQUNwQm9DLHFDQUFxQztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsSUFBSUEsb0NBQW9DO29CQUN0Q3JDLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUFzR1ksT0FBcEZnQixtQ0FBa0Msb0RBQW9FLE9BQWxCaEIsbUJBQWtCO2dCQUN6STtnQkFFQSxPQUFPZTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUUxQyxPQUFPO2dCQUN4QyxJQUFJMkMsV0FBVztnQkFFZixJQUFNckIsb0JBQW9CLElBQUksQ0FBQzdCLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ08sUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCa0IsbUJBQWtCO2dCQUVsRCxJQUFNc0Isb0JBQW9CLElBQUksQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQ2xELFNBQVMsRUFBRThDLGFBQWFDLFFBQVExQztnQkFFcEYsSUFBSTRDLG1CQUFtQjtvQkFDckIsSUFBSUUscUJBQXFCLE9BQ3JCQyxzQkFBc0I7b0JBRTFCLElBQUlMLFFBQVE7d0JBQ1ZJLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDaEQ7b0JBQzdDLE9BQU87d0JBQ0wrQyxzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ1QsT0FBT3hDO29CQUN0RDtvQkFFQTJDLFdBQVlHLHNCQUFzQkM7Z0JBQ3BDO2dCQUVBLElBQUlKLFVBQVU7b0JBQ1ozQyxRQUFRVSxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJZLG1CQUFrQjtnQkFDdEQ7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCbEQsU0FBUyxFQUFFOEMsV0FBVyxFQUFFQyxNQUFNLEVBQUUxQyxPQUFPO2dCQUNyRDBDLFNBQVMsTUFBTyxHQUFHO2dCQUVuQkQsY0FBYyxNQUFNLEdBQUc7Z0JBRXZCLElBQU1HLG9CQUFvQmpELFVBQVU0QyxNQUFNLENBQUNFLGFBQWFDLFFBQVExQztnQkFFaEUsT0FBTzRDO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCaEQsT0FBTzs7Z0JBQ3RCLElBQUk4QztnQkFFSixJQUFNeEIsb0JBQW9CLElBQUksQ0FBQzdCLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ08sUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCa0IsbUJBQWtCO2dCQUVsRCxJQUFNNEIsb0JBQW9CLElBQUksQ0FBQ3hELFNBQVMsQ0FBQzZDLE1BQU0sQ0FBQ3ZDO2dCQUVoRCxJQUFJa0QsbUJBQW1CO29CQUNyQkoscUJBQXFCO2dCQUN2QixPQUFPO29CQUNMLElBQU1LLGFBQWFuRCxRQUFRb0QseUJBQXlCLENBQUMsSUFBSSxDQUFDMUQsU0FBUyxHQUM3RDJELGVBQWVyRCxRQUFRc0QsMkJBQTJCLENBQUMsSUFBSSxDQUFDNUQsU0FBUyxHQUNqRTZELHdCQUF3QixBQUN0QixxQkFBR0osbUJBQ0gscUJBQUdFLGdCQUVMMUIsOEJBQThCNEIsc0JBQXNCQyxJQUFJLENBQUMsU0FBQzlCO3dCQUN4RCxJQUFNQyw4QkFBOEIsTUFBS0YseUJBQXlCLENBQUNDLHNCQUFzQjFCO3dCQUV6RixJQUFJMkIsNkJBQTZCOzRCQUMvQixPQUFPO3dCQUNUO29CQUNGO29CQUVOLElBQUlBLDZCQUE2Qjt3QkFDL0JtQixxQkFBcUI7b0JBQ3ZCLE9BQU87d0JBQ0wsSUFBTVcsUUFBUXpELFFBQVEwRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUNoRSxTQUFTLEdBQ25EaUUsUUFBUTNELFFBQVE0RCxvQkFBb0IsQ0FBQyxJQUFJLENBQUNsRSxTQUFTLEdBQ25EbUUsVUFBVTdELFFBQVE4RCxzQkFBc0IsQ0FBQyxJQUFJLENBQUNwRSxTQUFTLEdBQ3ZEcUUsYUFBYS9ELFFBQVFnRSx5QkFBeUIsQ0FBQyxJQUFJLENBQUN0RSxTQUFTLEdBQzdEMEMsOEJBQStCcUIsU0FBU0UsU0FBU0UsV0FBV0U7d0JBRWxFLElBQUkzQixnQ0FBZ0MsTUFBTTs0QkFDeEMsSUFBTUMscUNBQXFDLElBQUksQ0FBQ0YsZ0NBQWdDLENBQUNDLDZCQUE2QnBDOzRCQUU5RyxJQUFJcUMsb0NBQW9DO2dDQUN0Q1MscUJBQXFCOzRCQUN2Qjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCOUMsUUFBUVUsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCWSxtQkFBa0I7Z0JBQ3REO2dCQUVBLE9BQU93QjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlQsS0FBSyxFQUFFeEMsT0FBTzs7Z0JBQzlCLElBQUkrQztnQkFFSixJQUFNekIsb0JBQW9CLElBQUksQ0FBQzdCLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ08sUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCa0IsbUJBQWtCO2dCQUVsRCxJQUFNNEIsb0JBQW9CLElBQUksQ0FBQ3hELFNBQVMsQ0FBQzZDLE1BQU0sQ0FBQ3ZDO2dCQUVoRCxJQUFJa0QsbUJBQW1CO29CQUNyQkgsc0JBQXNCO2dCQUN4QixPQUFPO29CQUNMLElBQU1JLGFBQWFuRCxRQUFRb0QseUJBQXlCLENBQUMsSUFBSSxDQUFDMUQsU0FBUyxHQUM3RDJELGVBQWVyRCxRQUFRc0QsMkJBQTJCLENBQUMsSUFBSSxDQUFDNUQsU0FBUyxHQUNqRTZELHdCQUF3QixBQUN0QixxQkFBR0osbUJBQ0gscUJBQUdFLGdCQUVMMUIsOEJBQThCNEIsc0JBQXNCQyxJQUFJLENBQUMsU0FBQzlCO3dCQUN4RCxJQUFJQyw4QkFBOEI7d0JBRWxDLElBQUlBLDZCQUE2Qjs0QkFDL0JBLDhCQUE4QmEsTUFBTWYseUJBQXlCLENBQUNDLHNCQUFzQjFCO3dCQUN0Rjt3QkFFQSxJQUFJMkIsNkJBQTZCOzRCQUMvQkEsOEJBQThCLE1BQUtGLHlCQUF5QixDQUFDQyxzQkFBc0IxQjt3QkFDckY7d0JBRUEsSUFBSTJCLDZCQUE2Qjs0QkFDL0IsT0FBTzt3QkFDVDtvQkFDRjtvQkFFTixJQUFJQSw2QkFBNkI7d0JBQy9Cb0Isc0JBQXNCO29CQUN4QixPQUFPO3dCQUNMLElBQU1VLFFBQVF6RCxRQUFRMEQsb0JBQW9CLENBQUMsSUFBSSxDQUFDaEUsU0FBUyxHQUNuRGlFLFFBQVEzRCxRQUFRNEQsb0JBQW9CLENBQUMsSUFBSSxDQUFDbEUsU0FBUyxHQUNuRG1FLFVBQVU3RCxRQUFROEQsc0JBQXNCLENBQUMsSUFBSSxDQUFDcEUsU0FBUyxHQUN2RHFFLGFBQWEvRCxRQUFRZ0UseUJBQXlCLENBQUMsSUFBSSxDQUFDdEUsU0FBUyxHQUM3RDBDLDhCQUErQnFCLFNBQVNFLFNBQVNFLFdBQVdFO3dCQUVsRSxJQUFJM0IsZ0NBQWdDLE1BQU07NEJBQ3hDLElBQU1DLHFDQUFxQyxJQUFJLENBQUNGLGdDQUFnQyxDQUFDQyw2QkFBNkJwQzs0QkFFOUcsSUFBSXFDLG9DQUFvQztnQ0FDdENVLHNCQUFzQjs0QkFDeEI7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEscUJBQXFCO29CQUN2Qi9DLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQlksbUJBQWtCO2dCQUN0RDtnQkFFQSxPQUFPeUI7WUFDVDs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVsRSxPQUFPO2dCQUNqRCxJQUFJbUUsY0FBYztnQkFFbEIsSUFBSUQsb0JBQW9CLE1BQU07b0JBQzVCLElBQU0sQUFBRUUsWUFBY3RDLGFBQUksQ0FBbEJzQyxXQUNGQyxnQkFBZ0JoRixtQkFBbUI2RTtvQkFFekMsSUFBSTdELGdCQUFnQmQsbUJBQW1CMkU7b0JBRXZDN0QsZ0JBQWdCRSxJQUFBQSx3Q0FBOEIsRUFBQ0YsZ0JBQWlCLEdBQUc7b0JBRW5FLElBQU1YLFlBQVk0RSxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0YsZUFBZXJFLFVBQ3ZETCxZQUFZeUUsVUFBVUksaUJBQWlCLENBQUNuRSxlQUFlTCxVQUN2RHlFLE9BQU9QLGlCQUNQekUsU0FBU08sUUFBUTBFLFlBQVksQ0FBQ0Q7b0JBRXBDTixjQUFjLElBL1NkM0UsWUErUzhCQyxRQUFRQyxXQUFXQztnQkFDbkQ7Z0JBRUEsT0FBT3dFO1lBQ1Q7OztXQW5USTNFOztBQXNUTm1GLE9BQU9DLE1BQU0sQ0FBQzlDLGFBQUksRUFBRTtJQUNsQnRDLGFBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9