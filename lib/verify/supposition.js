"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifySupposition;
    }
});
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../proofStep"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("../supposition"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../verify/statement"));
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement!");
function verifySupposition(suppositionNode, suppositions, localContext) {
    var suppositionVerified = false;
    var suppositionString = localContext.nodeAsString(suppositionNode);
    localContext.trace("Verifying the '".concat(suppositionString, "' supposition..."), suppositionNode);
    var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode);
    if (unqualifiedStatementNode !== null) {
        var stated = true, assignments = [], statementNode = statementNodeQuery(unqualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, stated, localContext);
        if (statementVerified) {
            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
            if (assignmentsAssigned) {
                var supposition = _supposition.default.fromStatementNode(statementNode), proofStep = _proofStep.default.fromStatementNode(statementNode);
                suppositions.push(supposition);
                localContext.addProofStep(proofStep);
                suppositionVerified = true;
            }
        }
    }
    if (suppositionVerified) {
        localContext.debug("...verified the '".concat(suppositionString, "' supposition."), suppositionNode);
    }
    return suppositionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZlN0ZXAgZnJvbSBcIi4uL3Byb29mU3RlcFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuLi9zdXBwb3NpdGlvblwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uTm9kZSwgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3VwcG9zaXRpb25Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmAsIHN1cHBvc2l0aW9uTm9kZSk7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKTtcblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBzdXBwb3NpdGlvbnMucHVzaChzdXBwb3NpdGlvbik7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gLCBzdXBwb3NpdGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3VwcG9zaXRpb24iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9ucyIsImxvY2FsQ29udGV4dCIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJzdXBwb3NpdGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJzdXBwb3NpdGlvbiIsIlN1cHBvc2l0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7Z0VBVkY7a0VBQ0U7Z0VBQ0k7cUJBRUY7MkJBQ1E7Ozs7OztBQUVsQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUNBQy9CQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0Ysa0JBQWtCSSxlQUFlLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtJQUNuRixJQUFJQyxzQkFBc0I7SUFFMUIsSUFBTUMsb0JBQW9CRixhQUFhRyxZQUFZLENBQUNMO0lBRXBERSxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQixxQkFBbUJKO0lBRTFFLElBQU1PLDJCQUEyQlIsOEJBQThCQztJQUUvRCxJQUFJTyw2QkFBNkIsTUFBTTtRQUNyQyxJQUFNQyxTQUFTLE1BQ1RDLGNBQWMsRUFBRSxFQUNoQkMsZ0JBQWdCYixtQkFBbUJVLDJCQUNuQ0ksb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlRCxhQUFhRCxRQUFRTjtRQUU5RSxJQUFJUyxtQkFBbUI7WUFDckIsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ0wsYUFBYVA7WUFFM0QsSUFBSVcscUJBQXFCO2dCQUN2QixJQUFNRSxjQUFjQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0FBQ1AsZ0JBQzVDUSxZQUFZQyxrQkFBUyxDQUFDRixpQkFBaUIsQ0FBQ1A7Z0JBRTlDVCxhQUFhbUIsSUFBSSxDQUFDTDtnQkFFbEJiLGFBQWFtQixZQUFZLENBQUNIO2dCQUUxQmYsc0JBQXNCO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLHFCQUFxQjtRQUN2QkQsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQmxCLG1CQUFrQixtQkFBaUJKO0lBQzVFO0lBRUEsT0FBT0c7QUFDVCJ9