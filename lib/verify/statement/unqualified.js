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
var _string = require("../../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, derived, proofContext) {
    var unqualifiedStatementVerified = false;
    proofContext.begin(unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = (0, _string.nodeAsString)(statementNode);
        proofContext.debug("Verifying the ".concat(statementString, " unqualified statement..."));
        if (derived) {
            var assertionMatches = proofContext.matchStatement(statementNode);
            unqualifiedStatementVerified = assertionMatches; ///
        } else {
            var qualified = false, statementVerified = (0, _statement.default)(statementNode, qualified, proofContext);
            unqualifiedStatementVerified = statementVerified; ///
        }
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICR7c3RhdGVtZW50U3RyaW5nfSB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25NYXRjaGVzID0gcHJvb2ZDb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHF1YWxpZmllZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJhc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJxdWFsaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7Ozs4REFQSTtxQkFFRjtzQkFDRzs7Ozs7O0FBRTdCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRiwyQkFBMkJHLHdCQUF3QixFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUNsRyxJQUFJQywrQkFBK0IsS0FBSztJQUV4Q0QsYUFBYUUsS0FBSyxDQUFDSjtJQUVuQixJQUFNSyxnQkFBZ0JQLG1CQUFtQkU7SUFFekMsSUFBSUssa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNGO1FBRXJDSCxhQUFhTSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJGLGlCQUFnQjtRQUVwRCxJQUFJTCxTQUFTO1lBQ1gsSUFBTVEsbUJBQW1CUCxhQUFhUSxjQUFjLENBQUNMO1lBRXJERiwrQkFBK0JNLGtCQUFtQixHQUFHO1FBQ3ZELE9BQU87WUFDTCxJQUFNRSxZQUFZLEtBQUssRUFDakJDLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ1IsZUFBZU0sV0FBV1Q7WUFFcEVDLCtCQUErQlMsbUJBQW9CLEdBQUc7UUFDeEQsQ0FBQztJQUNILENBQUM7SUFFRFQsK0JBQ0VELGFBQWFZLFFBQVEsQ0FBQ2QsNEJBQ3BCRSxhQUFhYSxJQUFJLENBQUNmLHlCQUF5QjtJQUUvQyxPQUFPRztBQUNUIn0=