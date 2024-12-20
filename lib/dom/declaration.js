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
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("./metaLemma"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var _this = this;
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremsVerifiedWhenStated = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremVerifiedWhenStated = metaLemmaMetatheorem.verifyWhenStated(_this.statement, _this.reference, context);
                        if (metaLemmaMetatheoremVerifiedWhenStated) {
                            return true;
                        }
                    });
                    verifiedWhenStated = metaLemmaMetatheoremsVerifiedWhenStated; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCBtZXRhTGVtbWEgZnJvbSBcIi4vbWV0YUxlbW1hXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQ7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXNWZXJpZmllZFdoZW5TdGF0ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVmVyaWZpZWRXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0udmVyaWZ5V2hlblN0YXRlZCh0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVmVyaWZpZWRXaGVuU3RhdGVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgZGVidWdnZXJcblxuICAgIC8vIGNvbnN0IG1ldGFMZW1tYXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgIG1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBbXG4gICAgLy8gICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgIC8vICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgLy8gICAgICAgXSxcbiAgICAvLyAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuc29tZSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IGZyYW1lLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy9cbiAgICAvLyBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgICB0aGVvcmVtID0gY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG4gICAgLy9cbiAgICAvLyAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgIC8vICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBSZWZlcmVuY2UsIFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24oc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiRGVjbGFyYXRpb24iLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJmcmFtZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwiZGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5UmVmZXJlbmNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFzIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtcyIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1ZlcmlmaWVkV2hlblN0YXRlZCIsImV2ZXJ5IiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVZlcmlmaWVkV2hlblN0YXRlZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtxQkFFVTt3QkFFcUI7Z0VBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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