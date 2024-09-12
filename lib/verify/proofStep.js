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
            var assignmentAssigned = (0, _assignments.assignAssignment)(assignments, localContext);
            if (assignmentAssigned) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZiFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvcXVhbGlmaWVkU3RhdGVtZW50IVwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3VucXVhbGlmaWVkU3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UHJvb2ZTdGVwKHByb29mU3RlcE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgcHJvb2ZTdGVwVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgbGV0IHByb29mU3RlcCA9IG51bGw7XG5cbiAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkO1xuXG4gICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXTtcblxuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50QXNzaWduZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgcHJvb2ZTdGVwVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHByb29mU3RlcFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgdmVyaWZ5UHJvb2ZTdGVwXG59KTtcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwicHJvb2ZTdGVwTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJwcm9vZlN0ZXBWZXJpZmllZCIsInN1YnByb29mTm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJwcm9vZlN0ZXAiLCJzdWJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsImFzc2lnbm1lbnRBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhZGRQcm9vZlN0ZXAiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzsyREFkUDtnRUFDSzsrREFDSztnRUFDVTtrRUFDRTtxQkFFYjsyQkFDTzs7Ozs7O0FBRWpDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyxpREFDeENHLGdDQUFnQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRixnQkFBZ0JNLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQ2hGLElBQUlDLG9CQUFvQjtJQUV4QixJQUFNQyxlQUFlVCxrQkFBa0JLLGdCQUNqQ0sseUJBQXlCUCw0QkFBNEJFLGdCQUNyRE0sMkJBQTJCUCw4QkFBOEJDO0lBRS9ELElBQUlPLFlBQVk7SUFFaEIsSUFBSUgsaUJBQWlCLE1BQU07UUFDekIsSUFBSUk7UUFFSkEsbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDTCxjQUFjSCxlQUFlQztRQUUvRCxJQUFJTSxrQkFBa0I7WUFDcEJELFlBQVlHLGtCQUFTLENBQUNDLGdCQUFnQixDQUFDUDtRQUN6QztJQUNGLE9BQU87UUFDTCxJQUFNUSxVQUFVLE9BQ1ZDLGNBQWMsRUFBRTtRQUV0QixJQUFJQyxvQkFBb0I7UUFFeEIsSUFBSVQsMkJBQTJCLE1BQU07WUFDbkMsSUFBTVUsNkJBQTZCQyxJQUFBQSxrQkFBd0IsRUFBQ1gsd0JBQXdCSixlQUFlWSxhQUFhRCxTQUFTVjtZQUV6SFksb0JBQW9CQyw0QkFBNEIsR0FBRztRQUNyRDtRQUVBLElBQUlULDZCQUE2QixNQUFNO1lBQ3JDLElBQU1XLCtCQUErQkMsSUFBQUEsb0JBQTBCLEVBQUNaLDBCQUEwQk8sYUFBYUQsU0FBU1Y7WUFFaEhZLG9CQUFvQkcsOEJBQThCLEdBQUc7UUFDdkQ7UUFFQSxJQUFJSCxtQkFBbUI7WUFDckIsSUFBTUsscUJBQXFCQyxJQUFBQSw2QkFBZ0IsRUFBQ1AsYUFBYVg7WUFFekQsSUFBSWlCLG9CQUFvQjtnQkFDdEIsSUFBTUUsZ0JBQWdCeEIsbUJBQW1CUztnQkFFekNDLFlBQVlHLGtCQUFTLENBQUNZLGlCQUFpQixDQUFDRDtZQUMxQztRQUNGO0lBQ0Y7SUFFQSxJQUFJZCxjQUFjLE1BQU07UUFDdEJMLGFBQWFxQixZQUFZLENBQUNoQjtRQUUxQkosb0JBQW9CO0lBQ3RCO0lBRUEsT0FBT0E7QUFDVDtBQUVBcUIsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJoQyxpQkFBQUE7QUFDRiJ9