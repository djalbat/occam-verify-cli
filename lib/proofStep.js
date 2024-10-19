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
var _subproof = /*#__PURE__*/ _interop_require_default(require("./subproof"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("./statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _query = require("./utilities/query");
var _assignments = require("./utilities/assignments");
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
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/subproof"), qualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/qualifiedStatement"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/unqualifiedStatement");
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproof, qualifiedStatement, unqualifiedStatement) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.qualifiedStatement = qualifiedStatement;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
            }
        },
        {
            key: "getQualifiedStatement",
            value: function getQualifiedStatement() {
                return this.qualifiedStatement;
            }
        },
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                if (this.qualifiedStatement !== null) {
                    statement = this.qualifiedStatement.getStatement();
                }
                if (this.unqualifiedStatement !== null) {
                    statement = this.unqualifiedStatement.getStatement();
                }
                return statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing();
                if (this.qualifiedStatement !== null) {
                    var localContextA = localContext, localContextB = localContext; ///
                    statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                }
                if (this.unqualifiedStatement !== null) {
                    var localContextA1 = localContext, localContextB1 = localContext; ///
                    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA1, localContextB1);
                }
                var substitutionsLength = substitutions.getLength();
                if (substitutionsLength > 0) {
                    statementUnified = false;
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, localContext) {
                var verified = false;
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, localContext);
                    verified = subproofVerified; ///
                } else if (this.qualifiedStatement !== null) {
                    var qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, localContext);
                    verified = qualifiedStatementVerified; ///
                } else if (this.unqualifiedStatement !== null) {
                    var stated = false, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    if (unqualifiedStatementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        if (assignmentsAssigned) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    var proofStep = this; ///
                    localContext.addProofStep(proofStep);
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode), subproof = _subproof.default.fromSubproofNode(subproofNode, fileContext), qualifiedStatement = _qualified.default.fromQualifiedStatementNode(qualifiedStatementNode, fileContext), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
                return proofStep;
            }
        },
        {
            key: "fromUnqualifiedStatement",
            value: function fromUnqualifiedStatement(unqualifiedStatement) {
                var subproof = null, qualifiedStatement = null, proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();
Object.assign(_shim.default, {
    ProofStep: ProofStep
});
var _default = ProofStep;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdWJwcm9vZlwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvc3VicHJvb2ZcIiksXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvcXVhbGlmaWVkU3RhdGVtZW50XCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdWJwcm9vZiA9IHN1YnByb29mO1xuICAgIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ID0gcXVhbGlmaWVkU3RhdGVtZW50O1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1YnByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mO1xuICB9XG5cbiAgZ2V0UXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdWJwcm9vZlZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gdGhpczsgLy8vXG5cbiAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBRdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3VicHJvb2YgPSBudWxsLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZiwgcXVhbGlmaWVkU3RhdGVtZW50LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBQcm9vZlN0ZXBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZlN0ZXA7Il0sIm5hbWVzIjpbInN1YnByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJQcm9vZlN0ZXAiLCJzdWJwcm9vZiIsInF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3VicHJvb2YiLCJnZXRRdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN1YnByb29mVmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcCIsImFkZFByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlN1YnByb29mIiwiZnJvbVN1YnByb29mTm9kZSIsIlF1YWxpZmllZFN0YXRlbWVudCIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUlBOzs7ZUFBQTs7OzJEQXZJaUI7K0RB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