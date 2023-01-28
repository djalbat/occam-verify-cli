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
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../statement"));
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext) {
    var unqualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode);
        proofContext.debug("Verifying the '".concat(statementString, "' unqualified statement..."), unqualifiedStatementNode);
        var statementMatches = true;
        if (derived) {
            statementMatches = proofContext.matchStatement(statementNode);
        }
        if (statementMatches) {
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assertions, derived, context);
            unqualifiedStatementVerified = statementVerified; ///
        }
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcyA9IHRydWU7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mQ29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJhc3NlcnRpb25zIiwiZGVyaXZlZCIsInByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7OERBTkk7cUJBRUY7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUM5RyxJQUFJQywrQkFBK0IsS0FBSztJQUV4QyxJQUFNQyxnQkFBZ0JQLG1CQUFtQkU7SUFFekMsSUFBSUssa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ0Y7UUFFbERGLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLCtCQUE2Qk47UUFFbEYsSUFBSVMsbUJBQW1CLElBQUk7UUFFM0IsSUFBSVAsU0FBUztZQUNYTyxtQkFBbUJOLGFBQWFPLGNBQWMsQ0FBQ0w7UUFDakQsQ0FBQztRQUVELElBQUlJLGtCQUFrQjtZQUNwQixJQUFNRSxVQUFVUixjQUNWUyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNSLGVBQWVKLFlBQVlDLFNBQVNTO1lBRTlFUCwrQkFBK0JRLG1CQUFvQixHQUFHO1FBQ3hELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1I7QUFDVCJ9