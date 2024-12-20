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
                var referenceVerified = this.verifyReference(assignments, stated, context);
                if (referenceVerified) {
                    var statementVerified = this.verifyStatement(assignments, stated, context);
                    if (statementVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(frame, assignments, context);
                            verified = verifiedWhenStated; ///
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(context);
                            verified = verifiedWhenDerived; ///
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified;
                var referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference..."));
                referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
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
            key: "verifyWhenStated",
            value: function verifyWhenStated(frame, assignments, context) {
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems));
                }
                //       metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some((metaLemmaMetatheorem) => {
                //         const metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                //
                //         if (metaLemmaMetatheoremUnified) {
                //           return true;
                //         }
                //       });
                //
                // if (metaLemmaMetatheoremUnified) {
                //   verifiedWhenStated = true;
                // } else {
                //   const axiom = context.findAxiomByReference(this.reference),
                //         lemma = context.findLemmaByReference(this.reference),
                //         theorem = context.findTheoremByReference(this.reference),
                //         conjecture = context.findConjectureByReference(this.reference),
                //         axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);
                //
                //   if (axiomLemmaTheoremConjecture !== null) {
                //     const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                //
                //     if (axiomLemmaTheoremConjectureUnified) {
                //       verifiedWhenStated = true;
                //     }
                //   }
                // }
                if (verifiedWhenStated) {
                    context.trace("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(frame, context) {
                var verifiedWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                debugger;
                // const metaLemmas = context.findMetaLemmasByReference(this.reference),
                //       metatheorems = context.findMetatheoremsByReference(this.reference),
                //       metaLemmaMetatheorems = [
                //         ...metaLemmas,
                //         ...metatheorems
                //       ],
                //       metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some((metaLemmaMetatheorem) => {
                //         let metaLemmaMetatheoremUnified = true;
                //
                //         if (metaLemmaMetatheoremUnified) {
                //           metaLemmaMetatheoremUnified = frame.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                //         }
                //
                //         if (metaLemmaMetatheoremUnified) {
                //           metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                //         }
                //
                //         if (metaLemmaMetatheoremUnified) {
                //           return true;
                //         }
                //       });
                //
                // if (metaLemmaMetatheoremUnified) {
                //   verifiedWhenDerived = true;
                // } else {
                //   const axiom = context.findAxiomByReference(this.reference),
                //         lemma = context.findLemmaByReference(this.reference),
                //         theorem = context.findTheoremByReference(this.reference),
                //         conjecture = context.findConjectureByReference(this.reference),
                //         axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);
                //
                //   if (axiomLemmaTheoremConjecture !== null) {
                //     const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                //
                //     if (axiomLemmaTheoremConjectureUnified) {
                //       verifiedWhenDerived = true;
                //     }
                //   }
                // }
                if (verifiedWhenDerived) {
                    context.trace("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiedWhenDerived;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS51bmlmeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlVW5pZmllZCA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQ7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICAgIF07XG4gICAgfVxuXG5cbiAgICAvLyAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuc29tZSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy9cbiAgICAvLyBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgY29uamVjdHVyZSA9IGNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gdGhpcy51bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgLy8gICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgLy8gY29uc3QgbWV0YUxlbW1hcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgbWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAvLyAgICAgICAgIC4uLm1ldGFMZW1tYXMsXG4gICAgLy8gICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAvLyAgICAgICBdLFxuICAgIC8vICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtcy5zb21lKChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgIC8vICAgICAgICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRydWU7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gZnJhbWUudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gdGhpcy51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgIC8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9KTtcbiAgICAvL1xuICAgIC8vIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIHRoZW9yZW0gPSBjb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgY29uamVjdHVyZSA9IGNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gdGhpcy51bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgLy8gICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmVmZXJlbmNlLCBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZGVidWciLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInJlZmVyZW5jZVVuaWZpZWQiLCJ1bmlmeVJlZmVyZW5jZSIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInZlcmlmeSIsImZyYW1lIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5UmVmZXJlbmNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hcyIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbXMiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXMiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwiU3RhdGVtZW50Iiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21TdGF0ZW1lbnROb2RlIiwiZGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7d0JBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUVyQyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixTQUFTLEVBQUVLLE9BQU87Z0JBQy9CLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQlAsVUFBVUMsU0FBUyxJQUNyQ08sNkJBQTZCLElBQUksQ0FBQ1IsU0FBUyxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFbEVJLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUF3REQsT0FBeENELGlCQUFnQiwwQkFBbUQsT0FBM0JDLDRCQUEyQjtnQkFF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