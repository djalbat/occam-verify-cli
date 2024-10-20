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
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing();
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
                var Subproof = _shim.default.Subproof, QualifiedStatement = _shim.default.QualifiedStatement, UnqualifiedStatement = _shim.default.UnqualifiedStatement, subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode), subproof = Subproof.fromSubproofNode(subproofNode, fileContext), qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdWJwcm9vZlZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gdGhpczsgLy8vXG5cbiAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnByb29mLCBRdWFsaWZpZWRTdGF0ZW1lbnQsIFVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IFF1YWxpZmllZFN0YXRlbWVudC5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN1YnByb29mVmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcCIsImFkZFByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0IiwiU3VicHJvb2YiLCJRdWFsaWZpZWRTdGF0ZW1lbnQiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN1YnByb29mTm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tU3VicHJvb2ZOb2RlIiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1SUE7OztlQUFBOzs7MkRBcklpQjtxQkFFUzsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCQyw4QkFBOEJELElBQUFBLGdCQUFT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