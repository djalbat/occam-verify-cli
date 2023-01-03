"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyQualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement!"), referenceNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/qualification!/reference!");
function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
    var qualifiedStatementVerified = false;
    proofContext.begin(qualifiedStatementNode);
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var referenceNode = referenceNodeQuery(qualifiedStatementNode);
        if (referenceNode === null) {
            var statementVerified = (0, _statement.default)(statementNode, proofContext);
            qualifiedStatementVerified = statementVerified; ///
        } else {
            var referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode);
            debugger;
        }
    }
    qualifiedStatementVerified ? proofContext.complete(qualifiedStatementNode) : proofContext.halt(qualifiedStatementNode);
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9xdWFsaWZpY2F0aW9uIS9yZWZlcmVuY2UhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZWZlcmVuY2VOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTmFtZSA9IHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgZGVidWdnZXJcbiAgICB9XG4gIH1cblxuICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInN0YXRlbWVudE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzhEQVBJO3FCQUU4Qjs7Ozs7O0FBRTFELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDL0JDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRix5QkFBeUJJLHNCQUFzQixFQUFFQyxZQUFZLEVBQUU7SUFDckYsSUFBSUMsNkJBQTZCLEtBQUs7SUFFdENELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksZ0JBQWdCUCxtQkFBbUJHO0lBRXpDLElBQUlJLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsZ0JBQWdCTixtQkFBbUJDO1FBRXpDLElBQUlLLGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDSCxlQUFlSDtZQUV6REMsNkJBQTZCSSxtQkFBbUIsR0FBRztRQUNyRCxPQUFPO1lBQ0wsSUFBTUUsZ0JBQWdCQyxJQUFBQSxxQ0FBOEIsRUFBQ0o7WUFFckQsUUFBUTtRQUNWLENBQUM7SUFDSCxDQUFDO0lBRURILDZCQUNFRCxhQUFhUyxRQUFRLENBQUNWLDBCQUNwQkMsYUFBYVUsSUFBSSxDQUFDWCx1QkFBdUI7SUFFN0MsT0FBT0U7QUFDVCJ9