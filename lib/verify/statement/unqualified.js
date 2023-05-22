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
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, proofContext) {
    var unqualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode);
        proofContext.debug("Verifying the '".concat(statementString, "' unqualified statement..."), unqualifiedStatementNode);
        if (derived) {
            var statementMatches = proofContext.matchStatement(statementNode);
            unqualifiedStatementVerified = statementMatches; ///
        }
        if (!unqualifiedStatementVerified) {
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assignments, derived, context);
            unqualifiedStatementVerified = statementVerified; ///
        }
    }
    if (unqualifiedStatementVerified) {
        var statementString1 = proofContext.nodeAsString(statementNode);
        proofContext.info("Verified the '".concat(statementString1, "' unqualified statement."), unqualifiedStatementNode);
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZkNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJvb2ZDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwicHJvb2ZDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudCIsImNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkk7cUJBRUY7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGtCQUFVO0FBRXRCLFNBQVNGLDJCQUEyQkcsd0JBQXdCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzdHLElBQUlDLCtCQUErQjtJQUVuQyxJQUFNQyxnQkFBZ0JQLG1CQUFtQkU7SUFFekMsSUFBSUssa0JBQWtCLE1BQU07UUFDMUIsSUFBTUMsa0JBQWtCSCxhQUFhSSxhQUFhRjtRQUVsREYsYUFBYUssTUFBTSxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLCtCQUE2Qk47UUFFbEYsSUFBSUUsU0FBUztZQUNYLElBQU1PLG1CQUFtQk4sYUFBYU8sZUFBZUw7WUFFckRELCtCQUErQkssa0JBQW1CLEdBQUc7UUFDdkQ7UUFFQSxJQUFJLENBQUNMLDhCQUE4QjtZQUNqQyxJQUFNTyxVQUFVUixjQUNWUyxvQkFBb0JDLElBQUFBLG9CQUFnQlIsZUFBZUosYUFBYUMsU0FBU1M7WUFFL0VQLCtCQUErQlEsbUJBQW9CLEdBQUc7UUFDeEQ7SUFDRjtJQUVBLElBQUlSLDhCQUE4QjtRQUNoQyxJQUFNRSxtQkFBa0JILGFBQWFJLGFBQWFGO1FBRWxERixhQUFhVyxLQUFLLEFBQUMsaUJBQWdDLE9BQWhCUixrQkFBZ0IsNkJBQTJCTjtJQUNoRjtJQUVBLE9BQU9JO0FBQ1QifQ==