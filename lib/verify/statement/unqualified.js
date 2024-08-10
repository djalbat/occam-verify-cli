"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interop_require_default(require("../../verify/statement"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
    var unqualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' unqualified statement..."), unqualifiedStatementNode);
        if (derived) {
            var statementMatches = localContext.matchStatement(statementNode);
            unqualifiedStatementVerified = statementMatches; ///
        }
        if (!unqualifiedStatementVerified) {
            var statementVerified = (0, _statement.default)(statementNode, assignments, derived, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            unqualifiedStatementVerified = statementVerified; ///
        }
        if (unqualifiedStatementVerified) {
            localContext.debug("...verified the '".concat(statementString, "' unqualified statement."), unqualifiedStatementNode);
        }
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gbG9jYWxDb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZEFoZWFkIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkk7cUJBRUY7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0csSUFBSUMsK0JBQStCO0lBRW5DLElBQU1DLGdCQUFnQlAsbUJBQW1CRTtJQUV6QyxJQUFJSyxrQkFBa0IsTUFBTTtRQUMxQixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ0Y7UUFFbERGLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLCtCQUE2Qk47UUFFbEYsSUFBSUUsU0FBUztZQUNYLElBQU1PLG1CQUFtQk4sYUFBYU8sY0FBYyxDQUFDTDtZQUVyREQsK0JBQStCSyxrQkFBbUIsR0FBRztRQUN2RDtRQUVBLElBQUksQ0FBQ0wsOEJBQThCO1lBQ2pDLElBQU1PLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ1AsZUFBZUosYUFBYUMsU0FBU0MsY0FBYztnQkFDckYsSUFBTVUsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU5ULCtCQUErQk8sbUJBQW9CLEdBQUc7UUFDeEQ7UUFFQSxJQUFJUCw4QkFBOEI7WUFDaENELGFBQWFXLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlIsaUJBQWdCLDZCQUEyQk47UUFDcEY7SUFDRjtJQUVBLE9BQU9JO0FBQ1QifQ==