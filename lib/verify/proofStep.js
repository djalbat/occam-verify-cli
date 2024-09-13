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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vcHJvb2ZTdGVwXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3VicHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvc3VicHJvb2YhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3F1YWxpZmllZFN0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVByb29mU3RlcChwcm9vZlN0ZXBOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByb29mU3RlcFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpO1xuXG4gIGxldCBwcm9vZlN0ZXAgPSBudWxsO1xuXG4gIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZDtcblxuICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgIHByb29mU3RlcFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcm9vZlN0ZXBWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVByb29mU3RlcFxufSk7XG4iXSwibmFtZXMiOlsidmVyaWZ5UHJvb2ZTdGVwIiwic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInByb29mU3RlcE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJzdWJwcm9vZk5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZTdGVwIiwic3VicHJvb2ZWZXJpZmllZCIsInZlcmlmeVN1YnByb29mIiwiUHJvb2ZTdGVwIiwiZnJvbVN1YnByb29mTm9kZSIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBd0JBOzs7MkRBZFA7Z0VBQ0s7K0RBQ0s7Z0VBQ1U7a0VBQ0U7cUJBRWI7MkJBQ1E7Ozs7OztBQUVsQyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsd0RBQy9CRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMsaURBQ3hDRyxnQ0FBZ0NILElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsZ0JBQWdCTSxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNoRixJQUFJQyxvQkFBb0I7SUFFeEIsSUFBTUMsZUFBZVQsa0JBQWtCSyxnQkFDakNLLHlCQUF5QlAsNEJBQTRCRSxnQkFDckRNLDJCQUEyQlAsOEJBQThCQztJQUUvRCxJQUFJTyxZQUFZO0lBRWhCLElBQUlILGlCQUFpQixNQUFNO1FBQ3pCLElBQUlJO1FBRUpBLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0wsY0FBY0gsZUFBZUM7UUFFL0QsSUFBSU0sa0JBQWtCO1lBQ3BCRCxZQUFZRyxrQkFBUyxDQUFDQyxnQkFBZ0IsQ0FBQ1A7UUFDekM7SUFDRixPQUFPO1FBQ0wsSUFBSUMsMkJBQTJCLE1BQU07WUFDbkMsSUFBTU8sVUFBVSxPQUNWQyxjQUFjLEVBQUUsRUFDaEJDLDZCQUE2QkMsSUFBQUEsa0JBQXdCLEVBQUNWLHdCQUF3QkosZUFBZVksYUFBYUQsU0FBU1Y7WUFFekgsSUFBSVksNEJBQTRCO2dCQUM5QixJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDSixhQUFhWDtnQkFFM0QsSUFBSWMscUJBQXFCO29CQUN2QixJQUFNRSxnQkFBZ0JyQixtQkFBbUJRO29CQUV6Q0UsWUFBWUcsa0JBQVMsQ0FBQ1MsaUJBQWlCLENBQUNEO2dCQUMxQztZQUNGO1FBQ0Y7UUFFQSxJQUFJWiw2QkFBNkIsTUFBTTtZQUNyQyxJQUFNTSxXQUFVLE1BQ1ZDLGVBQWMsRUFBRSxFQUNoQk8sK0JBQStCQyxJQUFBQSxvQkFBMEIsRUFBQ2YsMEJBQTBCTyxjQUFhRCxVQUFTVjtZQUVoSCxJQUFJa0IsOEJBQThCO2dCQUNoQyxJQUFNSix1QkFBc0JDLElBQUFBLDhCQUFpQixFQUFDSixjQUFhWDtnQkFFM0QsSUFBSWMsc0JBQXFCO29CQUN2QixJQUFNRSxpQkFBZ0JyQixtQkFBbUJTO29CQUV6Q0MsWUFBWUcsa0JBQVMsQ0FBQ1MsaUJBQWlCLENBQUNEO2dCQUMxQztZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlYLGNBQWMsTUFBTTtRQUN0QkwsYUFBYW9CLFlBQVksQ0FBQ2Y7UUFFMUJKLG9CQUFvQjtJQUN0QjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQW9CLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCL0IsaUJBQUFBO0FBQ0YifQ==