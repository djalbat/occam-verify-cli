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
                var verifies = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                var referenceVerifies = this.verifyReference(assignments, stated, context);
                if (referenceVerifies) {
                    var statementVerifies = this.verifyStatement(assignments, stated, context);
                    if (statementVerifies) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.verifyWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerifies;
                var referenceString = this.reference.getString();
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                referenceVerifies = this.reference.verify(context);
                if (referenceVerifies) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return referenceVerifies;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerifies;
                var statementString = this.statement.getString();
                context.trace("Verifying the '".concat(statementString, "' statement..."));
                stated = true; ///
                assignments = null; ///
                statementVerifies = this.statement.verify(assignments, stated, context);
                if (statementVerifies) {
                    context.debug("...verified the '".concat(statementString, "' statement."));
                }
                return statementVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var metavariablePresent = context.isMetavariablePresentByReference(this.reference);
                if (metavariablePresent) {
                    verifiesWhenStated = true;
                } else {
                    var metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference), metaLemmaMetatheoremsUnify = metaLemmaMetatheorems.every(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnifies = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnifies) {
                            return true;
                        }
                    });
                    verifiesWhenStated = metaLemmaMetatheoremsUnify; ///
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(this.reference);
                verifiesWhenDerived = metaLemmaMetatheoremPresent; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiesWhenDerived;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgJiYgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLmV2ZXJ5KChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGZpbGVDb250ZXh0LFxuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsYWJlbCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRoaXMudW5pZnlMYWJlbFdpdGhSZWZlcmVuY2UobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlKCksXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbkZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24sIFJlZmVyZW5jZSwgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHN0cmluZywgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsImRlY2xhcmF0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUbyIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmVyaWZ5UmVmZXJlbmNlIiwic3RhdGVtZW50VmVyaWZpZXMiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwicmVmZXJlbmNlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zVW5pZnkiLCJldmVyeSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwibGFiZWxTdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsImdldERlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm5hbWUiLCJkb20iLCJSZWZlcmVuY2UiLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0VBQ1U7MkJBR2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QyxXQUFlQSxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsT0FBTztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1YsTUFBTSxFQUMvQlcscUJBQXFCSixhQUFhSixTQUFTO2dCQUVqREssUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWlFRixPQUFqREMsb0JBQW1CLGdDQUFnRCxPQUFsQkQsbUJBQWtCO2dCQUVsRyxJQUFNUixZQUFZSyxhQUFhRixZQUFZLElBQ3JDUSxlQUFlTixhQUFhTyxlQUFlLElBQzNDQyw0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