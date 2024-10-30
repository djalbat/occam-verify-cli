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
            key: "resolveIndependently",
            value: function resolveIndependently(substitutions, generalContext, specificContext) {
                var resolvedIndependently;
                var supposition = this, suppositionString = supposition.getString();
                specificContext.trace("Resolving the '".concat(suppositionString, "' supposition independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, generalContext, specificContext);
                resolvedIndependently = unqualifiedStatementResolvedIndependently; ///
                if (resolvedIndependently) {
                    specificContext.trace("...resolved the '".concat(suppositionString, "' supposition independently."));
                }
                return resolvedIndependently;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OLCB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgcmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXNvbHZlZEluZGVwZW5kZW50bHkgPSB1bnF1YWxpZmllZFN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuXG4gICAgaWYgKHJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zaXRpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24odW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24odW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN1cHBvc2l0aW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcG9zaXRpb247XG4iXSwibmFtZXMiOlsidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJTdXBwb3NpdGlvbiIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJyZXNvbHZlSW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInJlc29sdmVkSW5kZXBlbmRlbnRseSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdHJpbmciLCJ0cmFjZSIsInVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwic3VicHJvb2YiLCJnZXRTdWJwcm9vZiIsInN0YXRlbWVudCIsInNuYXBzaG90Iiwic3VicHJvb2ZVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0YXRlbWVudCIsInJlc29sdmUiLCJjb250ZXh0IiwiY29udGludWUiLCJyb2xsYmFjayIsInN0YXRlbWVudFN0cmluZyIsImRlYnVnIiwic3VicHJvb2ZTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsInNoaW0iLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0xBOzs7ZUFBQTs7OzJEQXBMaUI7cUJBRVM7MkJBQ1E7NEJBQ2E7b0JBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQU1BLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVoRCxJQUFBLEFBQU1DLDRCQUFOO2FBQU1BLFlBQ1FDLG9CQUFvQjtnQ0FENUJEO1FBRUYsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUYxQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Qsb0JBQW9CO1lBQ2xDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixvQkFBb0IsQ0FBQ0UsU0FBUztZQUFJOzs7WUFFNURDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNILG9CQUFvQixDQUFDRyxZQUFZO1lBQUk7OztZQUVsRUMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2pFLElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxFQUNsQkMsb0JBQW9CRCxZQUFZUCxTQUFTO2dCQUUvQ0ssZ0JBQWdCSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJELG1CQUFrQjtnQkFFMUQsSUFBTUUsNENBQTRDLElBQUksQ0FBQ1osb0JBQW9CLENBQUNJLG9CQUFvQixDQUFDQyxlQUFlQyxnQkFBZ0JDO2dCQUVoSUMsd0JBQXdCSSwyQ0FBNEMsR0FBRztnQkFFdkUsSUFBSUosdUJBQXVCO29CQUN6QkQsZ0JBQWdCSSxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJELG1CQUFrQjtnQkFDOUQ7Z0JBRUEsT0FBT0Y7WUFD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