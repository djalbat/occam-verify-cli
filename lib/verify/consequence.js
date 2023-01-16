"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyConsequence;
    }
});
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("../consequence"));
var _statement = /*#__PURE__*/ _interopRequireDefault(require("./statement"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/consequence/unqualifiedStatement!/statement!");
function verifyConsequence(consequenceNode, consequences, proofContext) {
    var consequenceVerified = false;
    proofContext.begin(consequenceNode);
    var consequenceString = (0, _string.nodeAsString)(consequenceNode);
    proofContext.debug("Verifying the ".concat(consequenceString, " consequence..."));
    var statementNode = statementNodeQuery(consequenceNode);
    if (statementNode !== null) {
        var qualified = false, statementVerified = (0, _statement.default)(statementNode, qualified, proofContext);
        if (statementVerified) {
            var consequence = _consequence.default.fromStatementNode(statementNode);
            consequences.push(consequence);
            consequenceVerified = true;
        }
    }
    consequenceVerified ? proofContext.complete(consequenceNode) : proofContext.halt(consequenceNode);
    return consequenceVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uc2VxdWVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zZXF1ZW5jZSBmcm9tIFwiLi4vY29uc2VxdWVuY2VcIjtcbmltcG9ydCB2ZXJpZnlTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zZXF1ZW5jZS91bnF1YWxpZmllZFN0YXRlbWVudCEvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgY29uc2VxdWVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihjb25zZXF1ZW5jZU5vZGUpO1xuXG4gIGNvbnN0IGNvbnNlcXVlbmNlU3RyaW5nID0gbm9kZUFzU3RyaW5nKGNvbnNlcXVlbmNlTm9kZSk7XG5cbiAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICR7Y29uc2VxdWVuY2VTdHJpbmd9IGNvbnNlcXVlbmNlLi4uYCk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb25zZXF1ZW5jZU5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcXVhbGlmaWVkLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZSA9IENvbnNlcXVlbmNlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBjb25zZXF1ZW5jZXMucHVzaChjb25zZXF1ZW5jZSk7XG5cbiAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNlcXVlbmNlVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShjb25zZXF1ZW5jZU5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KGNvbnNlcXVlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbmNlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29uc2VxdWVuY2UiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZXMiLCJwcm9vZkNvbnRleHQiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwiYmVnaW4iLCJjb25zZXF1ZW5jZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiY29uc2VxdWVuY2UiLCJDb25zZXF1ZW5jZSIsImZyb21TdGF0ZW1lbnROb2RlIiwicHVzaCIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OztnRUFSQTs4REFDSTtxQkFFRjtzQkFDRzs7Ozs7O0FBRTdCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRixrQkFBa0JHLGVBQWUsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUU7SUFDckYsSUFBSUMsc0JBQXNCLEtBQUs7SUFFL0JELGFBQWFFLEtBQUssQ0FBQ0o7SUFFbkIsSUFBTUssb0JBQW9CQyxJQUFBQSxvQkFBWSxFQUFDTjtJQUV2Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsaUJBQWtDLE9BQWxCRixtQkFBa0I7SUFFdEQsSUFBTUcsZ0JBQWdCVixtQkFBbUJFO0lBRXpDLElBQUlRLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsWUFBWSxLQUFLLEVBQ2pCQyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNILGVBQWVDLFdBQVdQO1FBRXBFLElBQUlRLG1CQUFtQjtZQUNyQixJQUFNRSxjQUFjQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0FBQ047WUFFbERQLGFBQWFjLElBQUksQ0FBQ0g7WUFFbEJULHNCQUFzQixJQUFJO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRURBLHNCQUNFRCxhQUFhYyxRQUFRLENBQUNoQixtQkFDcEJFLGFBQWFlLElBQUksQ0FBQ2pCLGdCQUFnQjtJQUV0QyxPQUFPRztBQUNUIn0=