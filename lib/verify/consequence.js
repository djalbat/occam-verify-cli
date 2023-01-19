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
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("./statement/unqualified"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/consequence/unqualifiedStatement!");
function verifyConsequence(consequenceNode, consequences, proofContext) {
    var consequenceVerified = false;
    proofContext.begin(consequenceNode);
    var consequenceString = (0, _string.nodeAsString)(consequenceNode);
    proofContext.debug("Verifying the ".concat(consequenceString, " consequence..."));
    var derived = false, assertions = [], unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequenceNode), unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assertions, derived, proofContext);
    if (unqualifiedStatementVerified) {
        var statementNode = statementNodeQuery(unqualifiedStatementNode), consequence = _consequence.default.fromStatementNode(statementNode);
        consequences.push(consequence);
        consequenceVerified = true;
    }
    consequenceVerified ? proofContext.complete(consequenceNode) : proofContext.halt(consequenceNode);
    return consequenceVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uc2VxdWVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zZXF1ZW5jZSBmcm9tIFwiLi4vY29uc2VxdWVuY2VcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zZXF1ZW5jZS91bnF1YWxpZmllZFN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnNlcXVlbmNlKGNvbnNlcXVlbmNlTm9kZSwgY29uc2VxdWVuY2VzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGNvbnNlcXVlbmNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4oY29uc2VxdWVuY2VOb2RlKTtcblxuICBjb25zdCBjb25zZXF1ZW5jZVN0cmluZyA9IG5vZGVBc1N0cmluZyhjb25zZXF1ZW5jZU5vZGUpO1xuXG4gIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAke2NvbnNlcXVlbmNlU3RyaW5nfSBjb25zZXF1ZW5jZS4uLmApO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShjb25zZXF1ZW5jZU5vZGUpLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpO1xuXG4gIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbmNlID0gQ29uc2VxdWVuY2UuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zZXF1ZW5jZXMucHVzaChjb25zZXF1ZW5jZSk7XG5cbiAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnNlcXVlbmNlVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShjb25zZXF1ZW5jZU5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KGNvbnNlcXVlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIGNvbnNlcXVlbmNlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29uc2VxdWVuY2UiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlcyIsInByb29mQ29udGV4dCIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJiZWdpbiIsImNvbnNlcXVlbmNlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJkZXJpdmVkIiwiYXNzZXJ0aW9ucyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW5jZSIsIkNvbnNlcXVlbmNlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJwdXNoIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7O2dFQVRBO2dFQUNlO3FCQUViO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHFDQUMvQkMsZ0NBQWdDRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLFNBQVNGLGtCQUFrQkksZUFBZSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRTtJQUNyRixJQUFJQyxzQkFBc0IsS0FBSztJQUUvQkQsYUFBYUUsS0FBSyxDQUFDSjtJQUVuQixJQUFNSyxvQkFBb0JDLElBQUFBLG9CQUFZLEVBQUNOO0lBRXZDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxpQkFBa0MsT0FBbEJGLG1CQUFrQjtJQUV0RCxJQUFNRyxVQUFVLEtBQUssRUFDZkMsYUFBYSxFQUFFLEVBQ2ZDLDJCQUEyQlgsOEJBQThCQyxrQkFDekRXLCtCQUErQkMsSUFBQUEsb0JBQTBCLEVBQUNGLDBCQUEwQkQsWUFBWUQsU0FBU047SUFFL0csSUFBSVMsOEJBQThCO1FBQ2hDLElBQU1FLGdCQUFnQmhCLG1CQUFtQmEsMkJBQ25DSSxjQUFjQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFbERaLGFBQWFnQixJQUFJLENBQUNIO1FBRWxCWCxzQkFBc0IsSUFBSTtJQUM1QixDQUFDO0lBRURBLHNCQUNFRCxhQUFhZ0IsUUFBUSxDQUFDbEIsbUJBQ3BCRSxhQUFhaUIsSUFBSSxDQUFDbkIsZ0JBQWdCO0lBRXRDLE9BQU9HO0FBQ1QifQ==