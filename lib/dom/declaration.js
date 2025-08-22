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
var _unification = require("../utilities/unification");
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
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches;
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualTo(metavariable);
                substitutionMatches = referenceMetavariableEqualToMetavariable && statementEqualToStatement;
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(declarationString, "' substitution against the '").concat(substitutionString, "' declaration."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                var referenceVerified = this.verifyReference(assignments, stated, context);
                if (referenceVerified) {
                    var statementVerified = this.verifyStatement(assignments, stated, context);
                    if (statementVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(context);
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
                var referenceString = this.reference.getString();
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerified;
                var statementString = this.statement.getString();
                context.trace("Verifying the '".concat(statementString, "' statement..."));
                stated = true; ///
                assignments = null; ///
                statementVerified = this.statement.verify(assignments, stated, context);
                if (statementVerified) {
                    context.debug("...verified the '".concat(statementString, "' statement."));
                }
                return statementVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnifies = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnifies = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnifies) {
                            return true;
                        }
                    });
                    verifiedWhenStated = metaLemmaMetatheoremsUnifies; ///
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiedWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(this.reference);
                verifiedWhenDerived = metaLemmaMetatheoremPresent; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var context = generalContext, statementString = statement.getString(), declarationStatementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                var generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unification.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                statementUnifies = statementUUnifiesIntrinsically; ///
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyLabelWithReference",
            value: function unifyLabelWithReference(label, substitutions, generalContext, specificContext) {
                var labelUnifiesWithReference;
                var context = generalContext, labelString = label.getString(), referenceString = this.reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var labelUnifies = this.reference.unifyLabel(label, substitutions, context);
                labelUnifiesWithReference = labelUnifies; ///
                if (labelUnifiesWithReference) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnifiesWithReference;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnifies = false;
                var declarationString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                var fileContext = metaLemmaMetatheorem.getFileContext(), generalContext = context, specificContext = fileContext, labelSubstitutions = _substitutions.default.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifiesWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);
                if (labelUnifiesWithReference) {
                    var statementSubstitutions = _substitutions.default.fromNothing(), statement = metaLemmaMetatheorem.getStatement(), substitutions1 = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions1, generalContext, specificContext);
                    if (statementUUnifies) {
                        var labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                        if (labelSubstitutionsCorrelateStatementSubstitutions) {
                            metaLemmaMetatheoremUnifies = true; ///
                        }
                    }
                }
                if (metaLemmaMetatheoremUnifies) {
                    context.trace("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                }
                return metaLemmaMetatheoremUnifies;
            }
        }
    ], [
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var declarationNode = judgementNode.getDeclarationNode(), declaration = declarationFromDeclarationNode(declarationNode, context);
                return declaration;
            }
        },
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var declaration = declarationFromDeclarationNode(declarationNode, context);
                return declaration;
            }
        }
    ]);
    return Declaration;
}(), _define_property(_Declaration, "name", "Declaration"), _Declaration));
function declarationFromDeclarationNode(declarationNode, context) {
    var Declaration = _dom.default.Declaration, Reference = _dom.default.Reference, Statement = _dom.default.Statement, node = declarationNode, string = context.nodeAsString(node), reference = Reference.fromDeclarationNode(declarationNode, context), statement = Statement.fromDeclarationNode(declarationNode, context), declaration = new Declaration(string, reference, statement);
    return declaration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgJiYgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZpZXMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuZXZlcnkoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgc3RhdGVkIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50ID0gY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlcml2ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZShsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbSB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBmaWxlQ29udGV4dCxcbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0aGlzLnVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldERlY2xhcmF0aW9uTm9kZSgpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uRnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uLCBSZWZlcmVuY2UsIFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb247XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInJlZmVyZW5jZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZpZXMiLCJldmVyeSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwibGFiZWxTdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsImdldERlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm5hbWUiLCJkb20iLCJSZWZlcmVuY2UiLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0VBQ1U7MkJBR2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QyxXQUFlQSxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsT0FBTztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1YsTUFBTSxFQUMvQlcscUJBQXFCSixhQUFhSixTQUFTO2dCQUVqREssUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWlFRixPQUFqREMsb0JBQW1CLGdDQUFnRCxPQUFsQkQsbUJBQWtCO2dCQUVsRyxJQUFNUixZQUFZSyxhQUFhRixZQUFZLElBQ3JDUSxlQUFlTixhQUFhTyxlQUFlLElB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