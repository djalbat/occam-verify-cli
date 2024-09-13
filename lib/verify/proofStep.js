"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyProofStep;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../proofStep"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("../verify/subproof"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/subproof!"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), qualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/qualifiedStatement!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/unqualifiedStatement!");
function verifyProofStep(proofStepNode, substitutions, localContext) {
    var proofStepVerified = false;
    var subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode);
    var proofStep = null;
    if (subproofNode !== null) {
        var subproofVerified;
        subproofVerified = (0, _subproof.default)(subproofNode, substitutions, localContext);
        if (subproofVerified) {
            proofStep = _proofStep.default.fromSubproofNode(subproofNode);
        }
    } else {
        var derived = false, assignments = [];
        var statementVerified = false;
        if (qualifiedStatementNode !== null) {
            var qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, substitutions, assignments, derived, localContext);
            statementVerified = qualifiedStatementVerified; ///
        }
        if (unqualifiedStatementNode !== null) {
            var unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments, derived, localContext);
            statementVerified = unqualifiedStatementVerified; ///
        }
        if (statementVerified) {
            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
            if (assignmentsAssigned) {
                var statementNode = statementNodeQuery(unqualifiedStatementNode);
                proofStep = _proofStep.default.fromStatementNode(statementNode);
            }
        }
    }
    if (proofStep !== null) {
        localContext.addProofStep(proofStep);
        proofStepVerified = true;
    }
    return proofStepVerified;
}
Object.assign(_shim.default, {
    verifyProofStep: verifyProofStep
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvc3VicHJvb2YhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3F1YWxpZmllZFN0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVByb29mU3RlcChwcm9vZlN0ZXBOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByb29mU3RlcFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpO1xuXG4gIGxldCBwcm9vZlN0ZXAgPSBudWxsO1xuXG4gIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZDtcblxuICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW107XG5cbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgIHByb29mU3RlcFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZlN0ZXBWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVByb29mU3RlcFxufSk7XG4iXSwibmFtZXMiOlsidmVyaWZ5UHJvb2ZTdGVwIiwic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInByb29mU3RlcE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJzdWJwcm9vZk5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZTdGVwIiwic3VicHJvb2ZWZXJpZmllZCIsInZlcmlmeVN1YnByb29mIiwiUHJvb2ZTdGVwIiwiZnJvbVN1YnByb29mTm9kZSIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhZGRQcm9vZlN0ZXAiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzsyREFkUDtnRUFDSzsrREFDSztnRUFDVTtrRUFDRTtxQkFFYjsyQkFDUTs7Ozs7O0FBRWxDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyxpREFDeENHLGdDQUFnQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRixnQkFBZ0JNLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQ2hGLElBQUlDLG9CQUFvQjtJQUV4QixJQUFNQyxlQUFlVCxrQkFBa0JLLGdCQUNqQ0sseUJBQXlCUCw0QkFBNEJFLGdCQUNyRE0sMkJBQTJCUCw4QkFBOEJDO0lBRS9ELElBQUlPLFlBQVk7SUFFaEIsSUFBSUgsaUJBQWlCLE1BQU07UUFDekIsSUFBSUk7UUFFSkEsbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDTCxjQUFjSCxlQUFlQztRQUUvRCxJQUFJTSxrQkFBa0I7WUFDcEJELFlBQVlHLGtCQUFTLENBQUNDLGdCQUFnQixDQUFDUDtRQUN6QztJQUNGLE9BQU87UUFDTCxJQUFNUSxVQUFVLE9BQ1ZDLGNBQWMsRUFBRTtRQUV0QixJQUFJQyxvQkFBb0I7UUFFeEIsSUFBSVQsMkJBQTJCLE1BQU07WUFDbkMsSUFBTVUsNkJBQTZCQyxJQUFBQSxrQkFBd0IsRUFBQ1gsd0JBQXdCSixlQUFlWSxhQUFhRCxTQUFTVjtZQUV6SFksb0JBQW9CQyw0QkFBNEIsR0FBRztRQUNyRDtRQUVBLElBQUlULDZCQUE2QixNQUFNO1lBQ3JDLElBQU1XLCtCQUErQkMsSUFBQUEsb0JBQTBCLEVBQUNaLDBCQUEwQk8sYUFBYUQsU0FBU1Y7WUFFaEhZLG9CQUFvQkcsOEJBQThCLEdBQUc7UUFDdkQ7UUFFQSxJQUFJSCxtQkFBbUI7WUFDckIsSUFBTUssc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ1AsYUFBYVg7WUFFM0QsSUFBSWlCLHFCQUFxQjtnQkFDdkIsSUFBTUUsZ0JBQWdCeEIsbUJBQW1CUztnQkFFekNDLFlBQVlHLGtCQUFTLENBQUNZLGlCQUFpQixDQUFDRDtZQUMxQztRQUNGO0lBQ0Y7SUFFQSxJQUFJZCxjQUFjLE1BQU07UUFDdEJMLGFBQWFxQixZQUFZLENBQUNoQjtRQUUxQkosb0JBQW9CO0lBQ3RCO0lBRUEsT0FBT0E7QUFDVDtBQUVBcUIsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJoQyxpQkFBQUE7QUFDRiJ9