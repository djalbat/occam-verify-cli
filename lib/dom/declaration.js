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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
var _brackets = require("../utilities/brackets");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Declaration;
var statementNodeQuery = (0, _query.nodeQuery)("/declaration/statement");
var _default = (0, _dom.domAssigned)((_Declaration = /*#__PURE__*/ function() {
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
                var substitutions = Substitutions.fromNothing(), referenceUnified = metaLemmaMetatheorem.unifyReference(this.reference, substitutions, context);
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
                var referenceVerified = this.verifyReference(frame, assignments, stated, context);
                if (referenceVerified) {
                    var statementVerified = this.verifyStatement(assignments, stated, context);
                    verified = statementVerified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerified;
                var statementString = this.statement.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(statementString, "' statement..."));
                stated = true; ///
                assignments = null; ///
                statementVerified = this.statement.verify(assignments, stated, context);
                if (statementVerified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(statementString, "' statement."));
                }
                return statementVerified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(frame, assignments, stated, context) {
                var referenceVerified;
                var referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference..."));
                var referenceVerifiedWhenStated = false, referenceVerifiedWhenDerived = false;
                if (stated) {
                    referenceVerifiedWhenStated = this.verifyReferenceWhenStated(context);
                    referenceVerified = referenceVerifiedWhenStated; ///
                } else {
                    referenceVerifiedWhenDerived = this.verifyReferenceWhenDerived(frame, context);
                    referenceVerified = referenceVerifiedWhenDerived; ///
                }
                if (referenceVerified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        },
        {
            key: "verifyReferenceWhenStated",
            value: function verifyReferenceWhenStated(context) {
                var _this = this;
                var referenceVerifiedWhenStated;
                var referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration's '").concat(referenceString, "' reference..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    referenceVerifiedWhenStated = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    if (metaLemmaMetatheoremUnified) {
                        referenceVerifiedWhenStated = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                referenceVerifiedWhenStated = true;
                            }
                        }
                    }
                }
                if (referenceVerifiedWhenStated) {
                    context.trace("...verified the '".concat(declarationString, "' stated declaration's '").concat(referenceString, "' reference."));
                }
                return referenceVerifiedWhenStated;
            }
        },
        {
            key: "verifyReferenceWhenDerived",
            value: function verifyReferenceWhenDerived(frame, context) {
                var _this = this;
                var referenceVerifiedWhenDerived;
                var referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration's '").concat(referenceString, "' reference..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    referenceVerifiedWhenDerived = true;
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
                        referenceVerifiedWhenDerived = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                referenceVerifiedWhenDerived = true;
                            }
                        }
                    }
                }
                if (referenceVerifiedWhenDerived) {
                    context.trace("...verified the '".concat(declarationString, "' derived declaration's '").concat(referenceString, "' reference."));
                }
                return referenceVerifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var Reference = _dom.default.Reference, Statement = _dom.default.Statement, node = declarationNode, string = context.nodeAsString(node);
                var statementNode;
                statementNode = statementNodeQuery(declarationNode);
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var reference = Reference.fromDeclarationNode(declarationNode, context), statement = Statement.fromStatementNode(statementNode, context), declaration = new Declaration(string, reference, statement);
                return declaration;
            }
        }
    ]);
    return Declaration;
}(), _define_property(_Declaration, "name", "Declaration"), _Declaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS51bmlmeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVW5pZmllZCA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShmcmFtZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICByZWZlcmVuY2VWZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVkKSB7XG4gICAgICByZWZlcmVuY2VWZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZVdoZW5TdGF0ZWQoY29udGV4dCk7XG5cbiAgICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gcmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZVdoZW5EZXJpdmVkKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgcmVmZXJlbmNlVmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgcmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxlbW1hcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBbXG4gICAgICAgICAgICAgIC4uLm1ldGFMZW1tYXMsXG4gICAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5zb21lKChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0aGlzLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgICAgcmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZVdoZW5EZXJpdmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFzID0gY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLnNvbWUoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmcmFtZS51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlID0gY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0aGlzLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgICAgcmVmZXJlbmNlVmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFJlZmVyZW5jZSwgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgbGV0IHN0YXRlbWVudE5vZGU7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImRlYnVnIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwiZGVjbGFyYXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJtZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJyZWZlcmVuY2VVbmlmaWVkIiwidW5pZnlSZWZlcmVuY2UiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJ2ZXJpZnkiLCJmcmFtZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwicmVmZXJlbmNlVmVyaWZpZWRXaGVuU3RhdGVkIiwicmVmZXJlbmNlVmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVJlZmVyZW5jZVdoZW5TdGF0ZWQiLCJ2ZXJpZnlSZWZlcmVuY2VXaGVuRGVyaXZlZCIsIm1ldGFMZW1tYXMiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1zIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwic29tZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTt3QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLGdDQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEVEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8s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