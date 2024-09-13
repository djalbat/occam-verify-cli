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
        var derived = true, assignments = null;
        if (qualifiedStatementNode !== null) {
            var qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, substitutions, assignments, derived, localContext);
            if (qualifiedStatementVerified) {
                var statementNode = statementNodeQuery(qualifiedStatementNode);
                proofStep = _proofStep.default.fromStatementNode(statementNode);
            }
        }
        if (unqualifiedStatementNode !== null) {
            var unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments, derived, localContext);
            if (unqualifiedStatementVerified) {
                var statementNode1 = statementNodeQuery(unqualifiedStatementNode);
                proofStep = _proofStep.default.fromStatementNode(statementNode1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1YnByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3N1YnByb29mIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQcm9vZlN0ZXAocHJvb2ZTdGVwTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBwcm9vZlN0ZXBWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKTtcblxuICBsZXQgcHJvb2ZTdGVwID0gbnVsbDtcblxuICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQ7XG5cbiAgICBzdWJwcm9vZlZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICBwcm9vZlN0ZXBWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJvb2ZTdGVwVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlQcm9vZlN0ZXBcbn0pO1xuIl0sIm5hbWVzIjpbInZlcmlmeVByb29mU3RlcCIsInN1YnByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJwcm9vZlN0ZXBOb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInByb29mU3RlcFZlcmlmaWVkIiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInByb29mU3RlcCIsInN1YnByb29mVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZiIsIlByb29mU3RlcCIsImZyb21TdWJwcm9vZk5vZGUiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBd0JBOzs7MkRBYlA7Z0VBQ0s7K0RBQ0s7Z0VBQ1U7a0VBQ0U7cUJBRWI7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsd0RBQy9CRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMsaURBQ3hDRyxnQ0FBZ0NILElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsZ0JBQWdCTSxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNoRixJQUFJQyxvQkFBb0I7SUFFeEIsSUFBTUMsZUFBZVQsa0JBQWtCSyxnQkFDakNLLHlCQUF5QlAsNEJBQTRCRSxnQkFDckRNLDJCQUEyQlAsOEJBQThCQztJQUUvRCxJQUFJTyxZQUFZO0lBRWhCLElBQUlILGlCQUFpQixNQUFNO1FBQ3pCLElBQUlJO1FBRUpBLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0wsY0FBY0gsZUFBZUM7UUFFL0QsSUFBSU0sa0JBQWtCO1lBQ3BCRCxZQUFZRyxrQkFBUyxDQUFDQyxnQkFBZ0IsQ0FBQ1A7UUFDekM7SUFDRixPQUFPO1FBQ0wsSUFBTVEsVUFBVSxNQUNWQyxjQUFjO1FBRXBCLElBQUlSLDJCQUEyQixNQUFNO1lBQ25DLElBQU1TLDZCQUE2QkMsSUFBQUEsa0JBQXdCLEVBQUNWLHdCQUF3QkosZUFBZVksYUFBYUQsU0FBU1Y7WUFFekgsSUFBSVksNEJBQTRCO2dCQUM5QixJQUFNRSxnQkFBZ0JuQixtQkFBbUJRO2dCQUV6Q0UsWUFBWUcsa0JBQVMsQ0FBQ08saUJBQWlCLENBQUNEO1lBQzFDO1FBQ0Y7UUFFQSxJQUFJViw2QkFBNkIsTUFBTTtZQUNyQyxJQUFNWSwrQkFBK0JDLElBQUFBLG9CQUEwQixFQUFDYiwwQkFBMEJPLGFBQWFELFNBQVNWO1lBRWhILElBQUlnQiw4QkFBOEI7Z0JBQ2hDLElBQU1GLGlCQUFnQm5CLG1CQUFtQlM7Z0JBRXpDQyxZQUFZRyxrQkFBUyxDQUFDTyxpQkFBaUIsQ0FBQ0Q7WUFDMUM7UUFDRjtJQUNGO0lBRUEsSUFBSVQsY0FBYyxNQUFNO1FBQ3RCTCxhQUFha0IsWUFBWSxDQUFDYjtRQUUxQkosb0JBQW9CO0lBQ3RCO0lBRUEsT0FBT0E7QUFDVDtBQUVBa0IsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEI3QixpQkFBQUE7QUFDRiJ9