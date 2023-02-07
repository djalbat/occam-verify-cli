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
function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, proofContext) {
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
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assignments, derived, context);
            unqualifiedStatementVerified = statementVerified; ///
        }
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgbGV0IHN0YXRlbWVudE1hdGNoZXMgPSB0cnVlO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIHN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZkNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsInByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7OERBTkk7cUJBRUY7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUMvRyxJQUFJQywrQkFBK0IsS0FBSztJQUV4QyxJQUFNQyxnQkFBZ0JQLG1CQUFtQkU7SUFFekMsSUFBSUssa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ0Y7UUFFbERGLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLCtCQUE2Qk47UUFFbEYsSUFBSVMsbUJBQW1CLElBQUk7UUFFM0IsSUFBSVAsU0FBUztZQUNYTyxtQkFBbUJOLGFBQWFPLGNBQWMsQ0FBQ0w7UUFDakQsQ0FBQztRQUVELElBQUlJLGtCQUFrQjtZQUNwQixJQUFNRSxVQUFVUixjQUNWUyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNSLGVBQWVKLGFBQWFDLFNBQVNTO1lBRS9FUCwrQkFBK0JRLG1CQUFvQixHQUFHO1FBQ3hELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1I7QUFDVCJ9