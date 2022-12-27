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
        var statementVerified = (0, _statement.default)(statementNode, proofContext);
        if (statementVerified) {
            unqualifiedStatementVerified = true;
        }
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozs4REFOSTtxQkFFRjs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRiwyQkFBMkJHLHdCQUF3QixFQUFFQyxZQUFZLEVBQUU7SUFDekYsSUFBSUMsK0JBQStCLEtBQUs7SUFFeENELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksZ0JBQWdCTixtQkFBbUJFO0lBRXpDLElBQUlJLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlSDtRQUV6RCxJQUFJSSxtQkFBbUI7WUFDckJILCtCQUErQixJQUFJO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRURBLCtCQUNFRCxhQUFhTSxRQUFRLENBQUNQLDRCQUNwQkMsYUFBYU8sSUFBSSxDQUFDUix5QkFBeUI7SUFFL0MsT0FBT0U7QUFDVCJ9