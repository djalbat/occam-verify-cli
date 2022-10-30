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
function verifyStatement(statementNode, context) {
    var statementVerified = false;
    context.begin(statementNode);
    var equalityNode = equalityNodeQuery(statementNode), statementString = (0, _string.nodeAsString)(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode);
    context.debug("Verifying the '".concat(statementString, "' statement..."));
    if (false) {
    ///
    } else if (equalityNode !== null) {
        var equalityVerified = (0, _equality.default)(equalityNode, context);
        statementVerified = equalityVerified; ///
    } else if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, context);
        statementVerified = typeAssertionVerified; ///
    } else {
        debugger;
    }
    statementVerified ? context.complete(statementNode) : context.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnRleHQuYmVnaW4oc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuICB9IGVsc2UgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKHN0YXRlbWVudE5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwiZXF1YWxpdHlOb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZUFzc2VydGlvbk5vZGUiLCJkZWJ1ZyIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7NkRBVEc7eURBQ0s7cUJBRU47c0JBQ0c7Ozs7OztBQUU3QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsU0FBU0YsZ0JBQWdCSSxhQUFhLEVBQUVDLE9BQU8sRUFBRTtJQUM5RCxJQUFJQyxvQkFBb0IsS0FBSztJQUU3QkQsUUFBUUUsS0FBSyxDQUFDSDtJQUVkLElBQU1JLGVBQWVQLGtCQUFrQkcsZ0JBQ2pDSyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNOLGdCQUMvQk8sb0JBQW9CUix1QkFBdUJDO0lBRWpEQyxRQUFRTyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJILGlCQUFnQjtJQUVoRCxJQUFJLEtBQUssRUFBRTtJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlELGlCQUFpQixJQUFJLEVBQUU7UUFDaEMsSUFBTUssbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDTixjQUFjSDtRQUV0REMsb0JBQW9CTyxrQkFBa0IsR0FBRztJQUMzQyxPQUFPLElBQUlGLHNCQUFzQixJQUFJLEVBQUU7UUFDckMsSUFBTUksd0JBQXdCQyxJQUFBQSxhQUFtQixFQUFDTCxtQkFBbUJOO1FBRXJFQyxvQkFBb0JTLHVCQUF1QixHQUFHO0lBQ2hELE9BQU87UUFDTCxRQUFRO0lBQ1YsQ0FBQztJQUVEVCxvQkFDRUQsUUFBUVksUUFBUSxDQUFDYixpQkFDZkMsUUFBUWEsSUFBSSxDQUFDZCxjQUFjO0lBRS9CLE9BQU9FO0FBQ1QifQ==