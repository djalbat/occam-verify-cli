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
                var generalContext = context; ///
                context = metaLemmaMetatheorem.getContext();
                var specificContext = context, labelSubstitutions = _substitutions.default.fromNothing(), label = metaLemmaMetatheorem.getLabel(), substitutions = labelSubstitutions, labelUnifiesWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgJiYgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLmV2ZXJ5KChtZXRhTGVtbWFNZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGFiZWwgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0aGlzLnVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldERlY2xhcmF0aW9uTm9kZSgpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uRnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVjbGFyYXRpb25Gcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uLCBSZWZlcmVuY2UsIFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihzdHJpbmcsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb247XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJEZWNsYXJhdGlvbiIsInN0cmluZyIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJyZWZlcmVuY2VWZXJpZmllcyIsInZlcmlmeVJlZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVzIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInJlZmVyZW5jZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsV2l0aFJlZmVyZW5jZSIsImxhYmVsIiwibGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwiZ2V0Q29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJnZXREZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uRnJvbURlY2xhcmF0aW9uTm9kZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwiZG9tIiwiUmVmZXJlbmNlIiwiU3RhdGVtZW50Iiwibm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29FQUNVOzJCQUdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUMsV0FBZUEsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURUSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZLEVBQUVDLE9BQU87Z0JBQ3JDLElBQUlDO2dCQUVKLElBQU1DLG9CQUFvQixJQUFJLENBQUNWLE1BQU0sRUFDL0JXLHFCQUFxQkosYUFBYUosU0FBUztnQkFFakRLLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFpRUYsT0FBakRDLG9CQUFtQixnQ0FBZ0QsT0FBbEJELG1CQUFrQjtnQkFFbEcsSUFBTVIsWUFBWUssYUFBYUYsWUFBWSxJQUNyQ1EsZUFBZU4sYUFBYU8sZUFBZSxJQUMzQ0MsNEJBQTRCLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxTQUFT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