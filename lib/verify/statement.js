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
var _necessary = require("necessary");
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
var log = _necessary.loggingUtilities.log;
function verifyStatement(statementNode, context) {
    var statementVerified = false;
    var statementString = (0, _string.nodeAsString)(statementNode);
    log.debug("Verifying the '".concat(statementString, "' statement..."));
    var equalityNode = equalityNodeQuery(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode);
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
    if (statementVerified) {
        log.info("Verified the '".concat(statementString, "' statement."));
    }
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsb2dnaW5nVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9nLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuICB9IGVsc2UgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvZy5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsImxvZyIsImxvZ2dpbmdVdGlsaXRpZXMiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJlcXVhbGl0eU5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQXdCQTs7O3lCQWJTOzZEQUVOO3lEQUNLO3FCQUVOO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLElBQU0sQUFBRUUsTUFBUUMsMkJBQWdCLENBQXhCRDtBQUVPLFNBQVNKLGdCQUFnQk0sYUFBYSxFQUFFQyxPQUFPLEVBQUU7SUFDOUQsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0IsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDSjtJQUVyQ0YsSUFBSU8sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0I7SUFFNUMsSUFBTUcsZUFBZVgsa0JBQWtCSyxnQkFDakNPLG9CQUFvQlYsdUJBQXVCRztJQUVqRCxJQUFJLEtBQUssRUFBRTtJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlNLGlCQUFpQixJQUFJLEVBQUU7UUFDaEMsSUFBTUUsbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDSCxjQUFjTDtRQUV0REMsb0JBQW9CTSxrQkFBa0IsR0FBRztJQUMzQyxPQUFPLElBQUlELHNCQUFzQixJQUFJLEVBQUU7UUFDckMsSUFBTUcsd0JBQXdCQyxJQUFBQSxhQUFtQixFQUFDSixtQkFBbUJOO1FBRXJFQyxvQkFBb0JRLHVCQUF1QixHQUFHO0lBQ2hELE9BQU87UUFDTCxRQUFRO0lBQ1YsQ0FBQztJQUVELElBQUlSLG1CQUFtQjtRQUNyQkosSUFBSWMsSUFBSSxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCVCxpQkFBZ0I7SUFDNUMsQ0FBQztJQUVELE9BQU9EO0FBQ1QifQ==