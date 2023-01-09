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
var _string = require("../../utilities/string");
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
        var statementString = (0, _string.nodeAsString)(statementNode);
        proofContext.debug("Verifying the ".concat(statementString, " qualified statement..."));
        var referenceNode = referenceNodeQuery(qualifiedStatementNode);
        if (referenceNode === null) {
            var statementVerified = (0, _statement.default)(statementNode, proofContext);
            qualifiedStatementVerified = statementVerified; ///
        } else {
            var referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode), rule = proofContext.findRuleByReferenceName(referenceName);
            if (rule !== null) {
                var ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);
                qualifiedStatementVerified = ruleMatchesStatement; ///
            }
        }
    }
    qualifiedStatementVerified ? proofContext.complete(qualifiedStatementNode) : proofContext.halt(qualifiedStatementNode);
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvcXVhbGlmaWNhdGlvbiEvcmVmZXJlbmNlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4ocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAke3N0YXRlbWVudFN0cmluZ30gcXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZWZlcmVuY2VOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTmFtZSA9IHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICAgIHJ1bGUgPSBwcm9vZkNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzU3RhdGVtZW50ID0gcnVsZS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gcnVsZU1hdGNoZXNTdGF0ZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInJlZmVyZW5jZU5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc1N0YXRlbWVudCIsIm1hdGNoU3RhdGVtZW50IiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzhEQVJJO3NCQUVDO3FCQUM2Qjs7Ozs7O0FBRTFELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDL0JDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRix5QkFBeUJJLHNCQUFzQixFQUFFQyxZQUFZLEVBQUU7SUFDckYsSUFBSUMsNkJBQTZCLEtBQUs7SUFFdENELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksZ0JBQWdCUCxtQkFBbUJHO0lBRXpDLElBQUlJLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDRjtRQUVyQ0gsYUFBYU0sS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRixpQkFBZ0I7UUFFcEQsSUFBTUcsZ0JBQWdCVCxtQkFBbUJDO1FBRXpDLElBQUlRLGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDTixlQUFlSDtZQUV6REMsNkJBQTZCTyxtQkFBbUIsR0FBRztRQUNyRCxPQUFPO1lBQ0wsSUFBTUUsZ0JBQWdCQyxJQUFBQSxxQ0FBOEIsRUFBQ0osZ0JBQy9DSyxPQUFPWixhQUFhYSx1QkFBdUIsQ0FBQ0g7WUFFbEQsSUFBSUUsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCLElBQU1FLHVCQUF1QkYsS0FBS0csY0FBYyxDQUFDWixlQUFlSDtnQkFFaEVDLDZCQUE2QmEsc0JBQXVCLEdBQUc7WUFDekQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRURiLDZCQUNFRCxhQUFhZ0IsUUFBUSxDQUFDakIsMEJBQ3BCQyxhQUFhaUIsSUFBSSxDQUFDbEIsdUJBQXVCO0lBRTdDLE9BQU9FO0FBQ1QifQ==