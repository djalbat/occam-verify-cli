"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatement;
    }
});
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../verify/equality"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, proofContext) {
    var statementVerified = false;
    proofContext.begin(statementNode);
    var equalityNode = equalityNodeQuery(statementNode), statementString = (0, _string.nodeAsString)(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode);
    proofContext.debug("Verifying the '".concat(statementString, "' statement..."));
    if (false) {
    ///
    } else if (equalityNode !== null) {
        var equalityVerified = (0, _equality.default)(equalityNode, proofContext);
        statementVerified = equalityVerified; ///
    } else if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, proofContext);
        statementVerified = typeAssertionVerified; ///
    } else {
        debugger;
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG4gIH0gZWxzZSBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJlcXVhbGl0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsImVxdWFsaXR5Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZGVidWciLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5RXF1YWxpdHkiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzZEQVRHO3lEQUNLO3FCQUVOO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLGdCQUFnQkksYUFBYSxFQUFFQyxZQUFZLEVBQUU7SUFDbkUsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0JELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksZUFBZVAsa0JBQWtCRyxnQkFDakNLLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQ04sZ0JBQy9CTyxvQkFBb0JSLHVCQUF1QkM7SUFFakRDLGFBQWFPLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkgsaUJBQWdCO0lBRXJELElBQUksS0FBSyxFQUFFO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUQsaUJBQWlCLElBQUksRUFBRTtRQUNoQyxJQUFNSyxtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNOLGNBQWNIO1FBRXREQyxvQkFBb0JPLGtCQUFrQixHQUFHO0lBQzNDLE9BQU8sSUFBSUYsc0JBQXNCLElBQUksRUFBRTtRQUNyQyxJQUFNSSx3QkFBd0JDLElBQUFBLGFBQW1CLEVBQUNMLG1CQUFtQk47UUFFckVDLG9CQUFvQlMsdUJBQXVCLEdBQUc7SUFDaEQsT0FBTztRQUNMLFFBQVE7SUFDVixDQUFDO0lBRURULG9CQUNFRCxhQUFhWSxRQUFRLENBQUNiLGlCQUNwQkMsYUFBYWEsSUFBSSxDQUFDZCxjQUFjO0lBRXBDLE9BQU9FO0FBQ1QifQ==