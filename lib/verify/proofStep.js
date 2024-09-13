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
        if (qualifiedStatementNode !== null) {
            var derived = false, assignments = [], qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, substitutions, assignments, derived, localContext);
            if (qualifiedStatementVerified) {
                var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                if (assignmentsAssigned) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode);
                    proofStep = _proofStep.default.fromStatementNode(statementNode);
                }
            }
        }
        if (unqualifiedStatementNode !== null) {
            var derived1 = true, assignments1 = [], unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments1, derived1, localContext);
            if (unqualifiedStatementVerified) {
                var assignmentsAssigned1 = (0, _assignments.assignAssignments)(assignments1, localContext);
                if (assignmentsAssigned1) {
                    var statementNode1 = statementNodeQuery(unqualifiedStatementNode);
                    proofStep = _proofStep.default.fromStatementNode(statementNode1);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvc3VicHJvb2YhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3F1YWxpZmllZFN0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVByb29mU3RlcChwcm9vZlN0ZXBOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByb29mU3RlcFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpO1xuXG4gIGxldCBwcm9vZlN0ZXAgPSBudWxsO1xuXG4gIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZDtcblxuICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAocXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgcHJvb2ZTdGVwVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHByb29mU3RlcFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgdmVyaWZ5UHJvb2ZTdGVwXG59KTtcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwicHJvb2ZTdGVwTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJwcm9vZlN0ZXBWZXJpZmllZCIsInN1YnByb29mTm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJwcm9vZlN0ZXAiLCJzdWJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzsyREFkUDtnRUFDSzsrREFDSztnRUFDVTtrRUFDRTtxQkFFYjsyQkFDUTs7Ozs7O0FBRWxDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyxpREFDeENHLGdDQUFnQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRixnQkFBZ0JNLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO0lBQ2hGLElBQUlDLG9CQUFvQjtJQUV4QixJQUFNQyxlQUFlVCxrQkFBa0JLLGdCQUNqQ0sseUJBQXlCUCw0QkFBNEJFLGdCQUNyRE0sMkJBQTJCUCw4QkFBOEJDO0lBRS9ELElBQUlPLFlBQVk7SUFFaEIsSUFBSUgsaUJBQWlCLE1BQU07UUFDekIsSUFBSUk7UUFFSkEsbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDTCxjQUFjSCxlQUFlQztRQUUvRCxJQUFJTSxrQkFBa0I7WUFDcEJELFlBQVlHLGtCQUFTLENBQUNDLGdCQUFnQixDQUFDUDtRQUN6QztJQUNGLE9BQU87UUFDTCxJQUFJQywyQkFBMkIsTUFBTTtZQUNuQyxJQUFNTyxVQUFVLE9BQ1ZDLGNBQWMsRUFBRSxFQUNoQkMsNkJBQTZCQyxJQUFBQSxrQkFBd0IsRUFBQ1Ysd0JBQXdCSixlQUFlWSxhQUFhRCxTQUFTVjtZQUV6SCxJQUFJWSw0QkFBNEI7Z0JBQzlCLElBQU1FLHNCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNKLGFBQWFYO2dCQUUzRCxJQUFJYyxxQkFBcUI7b0JBQ3ZCLElBQU1FLGdCQUFnQnJCLG1CQUFtQlE7b0JBRXpDRSxZQUFZRyxrQkFBUyxDQUFDUyxpQkFBaUIsQ0FBQ0Q7Z0JBQzFDO1lBQ0Y7UUFDRjtRQUVBLElBQUlaLDZCQUE2QixNQUFNO1lBQ3JDLElBQU1NLFdBQVUsTUFDVkMsZUFBYyxFQUFFLEVBQ2hCTywrQkFBK0JDLElBQUFBLG9CQUEwQixFQUFDZiwwQkFBMEJPLGNBQWFELFVBQVNWO1lBRWhILElBQUlrQiw4QkFBOEI7Z0JBQ2hDLElBQU1KLHVCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNKLGNBQWFYO2dCQUUzRCxJQUFJYyxzQkFBcUI7b0JBQ3ZCLElBQU1FLGlCQUFnQnJCLG1CQUFtQlM7b0JBRXpDQyxZQUFZRyxrQkFBUyxDQUFDUyxpQkFBaUIsQ0FBQ0Q7Z0JBQzFDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSVgsY0FBYyxNQUFNO1FBQ3RCTCxhQUFhb0IsWUFBWSxDQUFDZjtRQUUxQkosb0JBQW9CO0lBQ3RCO0lBRUEsT0FBT0E7QUFDVDtBQUVBb0IsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEIvQixpQkFBQUE7QUFDRiJ9