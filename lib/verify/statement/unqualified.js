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
function verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext) {
    var unqualifiedStatementVerified = false;
    proofContext.begin(unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = (0, _string.nodeAsString)(statementNode);
        proofContext.debug("Verifying the ".concat(statementString, " unqualified statement..."));
        var statementMatches = true;
        if (derived) {
            statementMatches = proofContext.matchStatement(statementNode);
        }
        if (statementMatches) {
            var statementVerified = (0, _statement.default)(statementNode, assertions, proofContext);
            unqualifiedStatementVerified = statementVerified; ///
        }
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICR7c3RhdGVtZW50U3RyaW5nfSB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gdHJ1ZTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZDb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9XG4gIH1cblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7Ozs4REFQSTtxQkFFRjtzQkFDRzs7Ozs7O0FBRTdCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRiwyQkFBMkJHLHdCQUF3QixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQzlHLElBQUlDLCtCQUErQixLQUFLO0lBRXhDRCxhQUFhRSxLQUFLLENBQUNMO0lBRW5CLElBQU1NLGdCQUFnQlIsbUJBQW1CRTtJQUV6QyxJQUFJTSxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU1DLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQ0Y7UUFFckNILGFBQWFNLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkYsaUJBQWdCO1FBRXBELElBQUlHLG1CQUFtQixJQUFJO1FBRTNCLElBQUlSLFNBQVM7WUFDWFEsbUJBQW1CUCxhQUFhUSxjQUFjLENBQUNMO1FBQ2pELENBQUM7UUFFRCxJQUFJSSxrQkFBa0I7WUFDcEIsSUFBTUUsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDUCxlQUFlTCxZQUFZRTtZQUVyRUMsK0JBQStCUSxtQkFBb0IsR0FBRztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQUVEUiwrQkFDRUQsYUFBYVcsUUFBUSxDQUFDZCw0QkFDcEJHLGFBQWFZLElBQUksQ0FBQ2YseUJBQXlCO0lBRS9DLE9BQU9JO0FBQ1QifQ==