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
var _query = require("./utilities/query");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(unqualifiedStatement) {
        _class_call_check(this, Supposition);
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Supposition, [
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.unqualifiedStatement.getString();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.unqualifiedStatement.getStatement();
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                var supposition = this, suppositionString = supposition.getString();
                specificContext.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = unqualifiedStatementResolvedIndependently; ///
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
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
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
                var context = generalContext, statement = this.unqualifiedStatement.getStatement(), subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
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
                var suppositionString = this.getString(); ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
                if (unqualifiedStatementVerified) {
                    var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                    if (assignmentsAssigned) {
                        var ProofStep = _shim.default.ProofStep, proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);
                        context.addProofStep(proofStep);
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(suppositionString, "' supposition."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var unqualifiedStatementJSON = (0, _json.unqualifiedStatementToUnqualifiedStatementJSON)(this.unqualifiedStatement), unqualifiedStatement = unqualifiedStatementJSON, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var unqualifiedStatement = (0, _json.unqualifiedStatementFromJSON)(json, fileContext), supposition = new Supposition(unqualifiedStatement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var UnqualifiedStatement = _shim.default.UnqualifiedStatement, unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OLCB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQgfHwgc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbih1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBVbnF1YWxpZmllZFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbih1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25cbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3VwcG9zaXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdXBwb3NpdGlvbjtcbiJdLCJuYW1lcyI6WyJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlN1cHBvc2l0aW9uIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRJbmRlcGVuZGVudGx5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0cmluZyIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRleHQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50U3RyaW5nIiwiZGVidWciLCJzdWJwcm9vZlN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwic2hpbSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzTEE7OztlQUFBOzs7MkRBcExpQjtxQkFFUzsyQkFDUTs0QkFDYTtvQkFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBTUEsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhELElBQUEsQUFBTUMsNEJBQU47YUFBTUEsWUFDUUMsb0JBQW9CO2dDQUQ1QkQ7UUFFRixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTs7a0JBRjFCRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxvQkFBb0I7WUFDbEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLG9CQUFvQixDQUFDRSxTQUFTO1lBQUk7OztZQUU1REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFlBQVk7WUFBSTs7O1lBRWxFQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDL0QsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLEVBQ2xCQyxvQkFBb0JELFlBQVlQLFNBQVM7Z0JBRS9DSyxnQkFBZ0JJLEtBQUssQ0FBQyxBQUFDLGlCQUFrQyxPQUFsQkQsbUJBQWtCO2dCQUV6RCxJQUFNRSw0Q0FBNEMsSUFBSSxDQUFDWixvQkFBb0IsQ0FBQ0ksa0JBQWtCLENBQUNDLGVBQWVDLGdCQUFnQkM7Z0JBRTlIQyx1QkFBdUJJLDJDQUE0QyxHQUFHO2dCQUV0RSxJQUFJSixzQkFBc0I7b0JBQ3hCRCxnQkFBZ0JJLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQkQsbUJBQWtCO2dCQUM3RDtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUssS0FB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