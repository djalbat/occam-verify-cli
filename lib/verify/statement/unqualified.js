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
    var unqualifiedStatementString = (0, _string.nodeAsString)(unqualifiedStatementNode);
    proofContext.debug("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
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
    if (unqualifiedStatementVerified) {
        proofContext.info("Verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbih1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHByb29mQ29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uTWF0Y2hlcyA9IHByb29mQ29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBwcm9vZkNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICB9XG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwiYXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50IiwiaW5mbyIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7Ozs4REFQSTtxQkFFRjtzQkFDRzs7Ozs7O0FBRTdCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRiwyQkFBMkJHLHdCQUF3QixFQUFFQyxZQUFZLEVBQUU7SUFDekYsSUFBSUMsK0JBQStCLEtBQUs7SUFFeENELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksNkJBQTZCQyxJQUFBQSxvQkFBWSxFQUFDTDtJQUVoREMsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRiw0QkFBMkI7SUFFaEUsSUFBTUcsZ0JBQWdCVCxtQkFBbUJFO0lBRXpDLElBQUlPLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlTjtRQUV6RCxJQUFJTyxtQkFBbUI7WUFDckIsSUFBTUUsVUFBVVQsYUFBYVUsU0FBUztZQUV0QyxJQUFJRCxTQUFTO2dCQUNYLElBQU1FLG1CQUFtQlgsYUFBYVksY0FBYyxDQUFDTjtnQkFFckRMLCtCQUErQlUsa0JBQW1CLEdBQUc7WUFDdkQsT0FBTztnQkFDTFYsK0JBQStCLElBQUk7WUFDckMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsOEJBQThCO1FBQ2hDRCxhQUFhYSxJQUFJLENBQUMsQUFBQyxpQkFBMkMsT0FBM0JWLDRCQUEyQjtJQUNoRSxDQUFDO0lBRURGLCtCQUNFRCxhQUFhYyxRQUFRLENBQUNmLDRCQUNwQkMsYUFBYWUsSUFBSSxDQUFDaEIseUJBQXlCO0lBRS9DLE9BQU9FO0FBQ1QifQ==