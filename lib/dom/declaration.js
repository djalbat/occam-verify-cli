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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _query = require("../utilities/query");
var _unification = require("../utilities/unification");
var _brackets = require("../utilities/brackets");
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
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnified = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    verifiedWhenStated = metaLemmaMetatheoremsUnified; ///
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
                //           metaLemmaMetatheoremUnified = frame.matchetaLemmaMetatheorem(metaLemmaMetatheorem, context);
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
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var context = generalContext, statementString = statement.getString(), declarationString = this.string, declarationStatementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationString, "' declaration's '").concat(declarationStatementString, "' statement..."));
                var generalStatement = this.statement, specificStatement = statement, statementUUnifiedIntrinsically = (0, _unification.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                statementUnified = statementUUnifiedIntrinsically; ///
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationString, "' declaration's '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyLabelWithReference",
            value: function unifyLabelWithReference(label, substitutions, generalContext, specificContext) {
                var labelUnifiedWithReference;
                var context = generalContext, labelString = label.getString(), referenceString = this.reference.getString(), declarationString = this.string; ///
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration's '").concat(referenceString, "' reference..."));
                var labelUnified = this.reference.unifyLabel(label, substitutions, context);
                labelUnifiedWithReference = labelUnified; ///
                if (labelUnifiedWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(declarationString, "' declaration's '").concat(referenceString, "' reference."));
                }
                return labelUnifiedWithReference;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnified;
                var declarationString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                var fileContext = metaLemmaMetatheorem.getFileContext(), generalContext = context, specificContext = fileContext, labelSubstitutions = _substitutions.default.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifiedWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);
                if (labelUnifiedWithReference) {
                    var statementSubstitutions = _substitutions.default.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnified = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnified) {
                        var labelSubstitutionsMatchStatementSubstitutions = labelSubstitutions.matchSubstitutions(statementSubstitutions);
                        metaLemmaMetatheoremUnified = labelSubstitutionsMatchStatementSubstitutions; ///
                    }
                }
                if (metaLemmaMetatheoremUnified) {
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                }
                return metaLemmaMetatheoremUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQ7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChmcmFtZSwgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICAvLyBjb25zdCBtZXRhTGVtbWFzID0gY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICBtZXRhdGhlb3JlbXMgPSBjb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gW1xuICAgIC8vICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAvLyAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgIC8vICAgICAgIF0sXG4gICAgLy8gICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLnNvbWUoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gdHJ1ZTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgIC8vICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBmcmFtZS5tYXRjaGV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy9cbiAgICAvLyBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgLy8gICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIGxlbW1hID0gY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgLy8gICAgICAgICB0aGVvcmVtID0gY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAvLyAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgIC8vICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG4gICAgLy9cbiAgICAvLyAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgIC8vICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbidzICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllZEludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVVbmlmaWVkSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZShsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllZCA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gZmlsZUNvbnRleHQsXG4gICAgICAgICAgbGFiZWxTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxhYmVsID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbGFiZWxTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlID0gdGhpcy51bmlmeUxhYmVsV2l0aFJlZmVyZW5jZShsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VVVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVVW5pZmllZCkge1xuICAgICAgICBjb25zdCBsYWJlbFN1YnN0aXR1dGlvbnNNYXRjaFN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMubWF0Y2hTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IGxhYmVsU3Vic3RpdHV0aW9uc01hdGNoU3RhdGVtZW50U3Vic3RpdHV0aW9uczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmVmZXJlbmNlLCBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiZnJhbWUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwicmVmZXJlbmNlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZmllZCIsImV2ZXJ5IiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllZEludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZSIsImxhYmVsIiwibGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwibGFiZWxVbmlmaWVkIiwidW5pZnlMYWJlbCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVkIiwibGFiZWxTdWJzdGl0dXRpb25zTWF0Y2hTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsIlJlZmVyZW5jZSIsImRvbSIsIlN0YXRlbWVudCIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtvRUFDVTtxQkFFQTsyQkFFa0I7d0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUVyQyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUN4QyxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLG9CQUFvQixJQUFJLENBQUNaLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ1UsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCRCxtQkFBa0I7Z0JBRWxE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