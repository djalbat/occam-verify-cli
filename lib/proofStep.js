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
                    verified = unqualifiedStatementVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdWJwcm9vZlwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVmVyaWZpZWQgPSB0aGlzLnN1YnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN1YnByb29mVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSB0aGlzOyAvLy9cblxuICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IFF1YWxpZmllZFN0YXRlbWVudC5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsInZlcmlmeSIsInZlcmlmaWVkIiwic3VicHJvb2ZWZXJpZmllZCIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwicHJvb2ZTdGVwIiwiYWRkUHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZk5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiU3VicHJvb2YiLCJmcm9tU3VicHJvb2ZOb2RlIiwiUXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrSUE7OztlQUFBOzs7MkRBaElpQjsrREFDSTtvRUFDSztnRUFDSztrRUFDRTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCQyw4QkFBOEJELElBQUFBLGdCQUFTLEVBQUMsZ0RBQ3hDRSxnQ0FBZ0NGLElBQUFBLGdCQUFTLEVBQUM7QUFFaEQsSUFBQSxBQUFNRywwQkFBTjthQUFNQSxVQUNRQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxvQkFBb0I7Z0NBRDFESDtRQUVGLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJ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