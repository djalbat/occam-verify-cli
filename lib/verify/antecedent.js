"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAntecedent;
    }
});
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../step/proof"));
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("../antecedent"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
var _statement = /*#__PURE__*/ _interopRequireDefault(require("./statement"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/antecedent/unqualifiedStatement!/statement!");
function verifyAntecedent(antecedentNode, antecedents, proofContext) {
    var antecedentVerified;
    proofContext.begin(antecedentNode);
    var antecedentString = (0, _string.nodeAsString)(antecedentNode);
    proofContext.debug("Verifying the ".concat(antecedentString, " antecedent..."));
    var statementNode = statementNodeQuery(antecedentNode);
    if (statementNode !== null) {
        var qualified = false, statementVerified = (0, _statement.default)(statementNode, qualified, proofContext);
        if (statementVerified) {
            var proofStep = _proof.default.fromStatementNode(statementNode), antecedent = _antecedent.default.fromStatementNode(statementNode);
            antecedents.push(antecedent);
            proofContext.addProofStep(proofStep);
        }
        antecedentVerified = true;
    }
    antecedentVerified ? proofContext.complete(antecedentNode) : proofContext.halt(antecedentNode);
    return antecedentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYW50ZWNlZGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IEFudGVjZWRlbnQgZnJvbSBcIi4uL2FudGVjZWRlbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB2ZXJpZnlTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbnRlY2VkZW50L3VucXVhbGlmaWVkU3RhdGVtZW50IS9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlBbnRlY2VkZW50KGFudGVjZWRlbnROb2RlLCBhbnRlY2VkZW50cywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBhbnRlY2VkZW50VmVyaWZpZWQ7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKGFudGVjZWRlbnROb2RlKTtcblxuICBjb25zdCBhbnRlY2VkZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKGFudGVjZWRlbnROb2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJHthbnRlY2VkZW50U3RyaW5nfSBhbnRlY2VkZW50Li4uYCk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShhbnRlY2VkZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBxdWFsaWZpZWQsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGFudGVjZWRlbnQgPSBBbnRlY2VkZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBhbnRlY2VkZW50cy5wdXNoKGFudGVjZWRlbnQpO1xuXG4gICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG4gICAgfVxuXG4gICAgYW50ZWNlZGVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGFudGVjZWRlbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKGFudGVjZWRlbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChhbnRlY2VkZW50Tm9kZSk7XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBbnRlY2VkZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYW50ZWNlZGVudE5vZGUiLCJhbnRlY2VkZW50cyIsInByb29mQ29udGV4dCIsImFudGVjZWRlbnRWZXJpZmllZCIsImJlZ2luIiwiYW50ZWNlZGVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwicHJvb2ZTdGVwIiwiUHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhbnRlY2VkZW50IiwiQW50ZWNlZGVudCIsInB1c2giLCJhZGRQcm9vZlN0ZXAiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MERBVEY7K0RBQ0M7cUJBRUc7c0JBQ0c7OERBQ0Q7Ozs7OztBQUU1QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsaUJBQWlCRyxjQUFjLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFO0lBQ2xGLElBQUlDO0lBRUpELGFBQWFFLEtBQUssQ0FBQ0o7SUFFbkIsSUFBTUssbUJBQW1CQyxJQUFBQSxvQkFBWSxFQUFDTjtJQUV0Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsaUJBQWlDLE9BQWpCRixrQkFBaUI7SUFFckQsSUFBTUcsZ0JBQWdCVixtQkFBbUJFO0lBRXpDLElBQUlRLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsWUFBWSxLQUFLLEVBQ2pCQyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNILGVBQWVDLFdBQVdQO1FBRXBFLElBQUlRLG1CQUFtQjtZQUNyQixJQUFNRSxZQUFZQyxjQUFTLENBQUNDLGlCQUFpQixDQUFDTixnQkFDeENPLGFBQWFDLG1CQUFVLENBQUNGLGlCQUFpQixDQUFDTjtZQUVoRFAsWUFBWWdCLElBQUksQ0FBQ0Y7WUFFakJiLGFBQWFnQixZQUFZLENBQUNOO1FBQzVCLENBQUM7UUFFRFQscUJBQXFCLElBQUk7SUFDM0IsQ0FBQztJQUVEQSxxQkFDRUQsYUFBYWlCLFFBQVEsQ0FBQ25CLGtCQUNwQkUsYUFBYWtCLElBQUksQ0FBQ3BCLGVBQWU7SUFFckMsT0FBT0c7QUFDVCJ9