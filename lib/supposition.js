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
var Supposition = /*#__PURE__*/ function() {
    function Supposition(string, statement) {
        _class_call_check(this, Supposition);
        this.string = string;
        this.statement = statement;
    }
    _create_class(Supposition, [
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
                var supposition = this, suppositionString = supposition.getString();
                specificContext.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
                if (unifiedIndependently) {
                    specificContext.trace("...unified the '".concat(suppositionString, "' supposition independently."));
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
                var supposition = this, suppositionString = supposition.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var context = generalContext, statement = this.statement.getStatement(), subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var suppositionString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
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
                        context.debug("...verified the '".concat(suppositionString, "' supposition."));
                    }
                } else {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."));
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
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), supposition = new Supposition(string, statement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var Statement = _shim.default.Statement, statement = Statement.fromSuppositionNode(suppositionNode, fileContext), node = suppositionNode, string = fileContext.nodeAsString(node), supposition = new Supposition(string, statement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();
Object.assign(_shim.default, {
    Supposition: Supposition
});
var _default = Supposition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCB8fCBzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHByb29mU3RlcFVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50KTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdXBwb3NpdGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHBvc2l0aW9uO1xuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRleHQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50U3RyaW5nIiwiZGVidWciLCJzdWJwcm9vZlN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsInNoaW0iLCJmcm9tU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3RhdGVtZW50Iiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMExBOzs7ZUFBQTs7OzJEQXhMaUI7MkJBRWlCOzRCQUNhO29CQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUUMsTUFBTSxFQUFFQyxTQUFTO2dDQUR6QkY7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhmRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQy9ELElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxFQUNsQkMs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