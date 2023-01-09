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
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _query = require("../../utilities/query");
var _string = require("../../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
    var unqualifiedStatementVerified = false;
    proofContext.begin(unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = (0, _string.nodeAsString)(statementNode);
        proofContext.debug("Verifying the ".concat(statementString, " unqualified statement..."));
        var statementVerified = (0, _statement.default)(statementNode, proofContext);
        if (statementVerified) {
            var derived = proofContext.isDerived();
            if (derived) {
                var assertionMatches = proofContext.matchStatement(statementNode);
                unqualifiedStatementVerified = assertionMatches; ///
            } else {
                unqualifiedStatementVerified = true;
            }
        }
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbih1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAke3N0YXRlbWVudFN0cmluZ30gdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gcHJvb2ZDb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRpb25NYXRjaGVzID0gcHJvb2ZDb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NlcnRpb25NYXRjaGVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwiYXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50IiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzhEQVBJO3FCQUVGO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLDJCQUEyQkcsd0JBQXdCLEVBQUVDLFlBQVksRUFBRTtJQUN6RixJQUFJQywrQkFBK0IsS0FBSztJQUV4Q0QsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxnQkFBZ0JOLG1CQUFtQkU7SUFFekMsSUFBSUksa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNGO1FBRXJDSCxhQUFhTSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJGLGlCQUFnQjtRQUVwRCxJQUFNRyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNMLGVBQWVIO1FBRXpELElBQUlPLG1CQUFtQjtZQUNyQixJQUFNRSxVQUFVVCxhQUFhVSxTQUFTO1lBRXRDLElBQUlELFNBQVM7Z0JBQ1gsSUFBTUUsbUJBQW1CWCxhQUFhWSxjQUFjLENBQUNUO2dCQUVyREYsK0JBQStCVSxrQkFBbUIsR0FBRztZQUN2RCxPQUFPO2dCQUNMViwrQkFBK0IsSUFBSTtZQUNyQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFREEsK0JBQ0VELGFBQWFhLFFBQVEsQ0FBQ2QsNEJBQ3BCQyxhQUFhYyxJQUFJLENBQUNmLHlCQUF5QjtJQUUvQyxPQUFPRTtBQUNUIn0=