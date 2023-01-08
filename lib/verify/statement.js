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
        statementVerified = true;
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG4gIH0gZWxzZSBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoc3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwiZXF1YWxpdHlOb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZUFzc2VydGlvbk5vZGUiLCJkZWJ1ZyIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7NkRBVEc7eURBQ0s7cUJBRU47c0JBQ0c7Ozs7OztBQUU3QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsU0FBU0YsZ0JBQWdCSSxhQUFhLEVBQUVDLFlBQVksRUFBRTtJQUNuRSxJQUFJQyxvQkFBb0IsS0FBSztJQUU3QkQsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxlQUFlUCxrQkFBa0JHLGdCQUNqQ0ssa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDTixnQkFDL0JPLG9CQUFvQlIsdUJBQXVCQztJQUVqREMsYUFBYU8sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCSCxpQkFBZ0I7SUFFckQsSUFBSSxLQUFLLEVBQUU7SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJRCxpQkFBaUIsSUFBSSxFQUFFO1FBQ2hDLElBQU1LLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ04sY0FBY0g7UUFFdERDLG9CQUFvQk8sa0JBQWtCLEdBQUc7SUFDM0MsT0FBTyxJQUFJRixzQkFBc0IsSUFBSSxFQUFFO1FBQ3JDLElBQU1JLHdCQUF3QkMsSUFBQUEsYUFBbUIsRUFBQ0wsbUJBQW1CTjtRQUVyRUMsb0JBQW9CUyx1QkFBdUIsR0FBRztJQUNoRCxPQUFPO1FBQ0xULG9CQUFvQixJQUFJO0lBQzFCLENBQUM7SUFFREEsb0JBQ0VELGFBQWFZLFFBQVEsQ0FBQ2IsaUJBQ3BCQyxhQUFhYSxJQUFJLENBQUNkLGNBQWM7SUFFcEMsT0FBT0U7QUFDVCJ9