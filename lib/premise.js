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
var _assignments = require("./utilities/assignments");
var _verification = require("./utilities/verification");
var _json = require("./utilities/json");
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
var Premise = /*#__PURE__*/ function() {
    function Premise(string, statement) {
        _class_call_check(this, Premise);
        this.string = string;
        this.statement = statement;
    }
    _create_class(Premise, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                var premise = this, premiseString = premise.getString();
                specificContext.trace("Unifying the '".concat(premiseString, "' premise independently..."));
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
                if (unifiedIndependently) {
                    specificContext.trace("...unified the '".concat(premiseString, "' premise independently."));
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, generalContext, specificContext) {
                var proofStepUnified = false;
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                var subproofUnified = false, statementUnified = false;
                if (false) {
                ///
                } else if (subproof !== null) {
                    subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                } else if (statement !== null) {
                    statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (subproofUnified || statementUnified) {
                    substitutions.resolve(generalContext, specificContext);
                    proofStepUnified = true;
                }
                var context = specificContext; ///
                proofStepUnified ? substitutions.continue() : substitutions.rollback(context);
                return proofStepUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var context = generalContext, statement = this.statement.getStatement(), subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var premiseString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(premiseString, "' premise..."));
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var ProofStep = _shim.default.ProofStep, proofStep = ProofStep.fromStatement(this.statement);
                            context.addProofStep(proofStep);
                            verified = true;
                        }
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(premiseString, "' premise."));
                    }
                } else {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), premise = new Premise(string, statement);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(suppositionNode, fileContext) {
                var Statement = _shim.default.Statement, statement = Statement.fromPremiseNode(premiseNode, fileContext), node = suppositionNode, string = fileContext.nodeAsString(node), premise = new Premise(string, statement);
                return premise;
            }
        }
    ]);
    return Premise;
}();
Object.assign(_shim.default, {
    Premise: Premise
});
var _default = Premise;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQgfHwgc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50KTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByZW1pc2Vcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcmVtaXNlO1xuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInByZW1pc2UiLCJwcmVtaXNlU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRleHQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50U3RyaW5nIiwiZGVidWciLCJzdWJwcm9vZlN0cmluZyIsInByZW1pc2VTdGF0ZW1lbnQiLCJwcmVtaXNlU3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJzaGltIiwiZnJvbVN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbVByZW1pc2VOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3RhdGVtZW50IiwicHJlbWlzZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwTEE7OztlQUFBOzs7MkRBeExpQjsyQkFFaUI7NEJBQ2E7b0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNRQyxNQUFNLEVBQUVDLFNBQVM7Z0NBRHpCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSGZGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDL0QsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVSxJQUFJLEVBQ2RDLGdCQUFnQkQsUUFBUVAsU0FBUztnQkFFdkNLLGdCQUFnQkksS0FBSyxDQUFDLEFBQUMsaUJBQThCLE9BQWRELGVBQWM7Z0JBRXJELElBQU1FLGlDQUFpQyxJQUFJLENBQUNYLFNBQVMsQ0FBQ0csa0JBQWtCLENBQUNDLGVBQWVDLGdCQUFnQkM7Z0JBRXhHQyx1QkFBdUJJLGdDQUFpQyxHQUFHO2dCQUUzRCxJQUFJSixzQkFBc0I7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