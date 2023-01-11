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
var _statementAsEquality = /*#__PURE__*/ _interopRequireDefault(require("../verify/statementAsEquality"));
var _statementTypeAssertion = /*#__PURE__*/ _interopRequireDefault(require("../verify/statementTypeAssertion"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyStatement(statementNode, proofContext) {
    var statementVerified = false;
    proofContext.begin(statementNode);
    if (!statementVerified) {
        var equalityVerifiedAsEquality = (0, _statementAsEquality.default)(statementNode, proofContext);
        statementVerified = equalityVerifiedAsEquality; ///
    }
    if (!statementVerified) {
        var statementTypeAssertionVerified = (0, _statementTypeAssertion.default)(statementNode, proofContext);
        statementVerified = statementTypeAssertionVerified; ///
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEFzRXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlTdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50VHlwZUFzc2VydGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZEFzRXF1YWxpdHkgPSB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGVxdWFsaXR5VmVyaWZpZWRBc0VxdWFsaXR5OyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH1cblxuICBzdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsImVxdWFsaXR5VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInN0YXRlbWVudFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudFR5cGVBc3NlcnRpb24iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7d0VBSGM7MkVBQ0c7Ozs7OztBQUUxQixTQUFTQSxnQkFBZ0JDLGFBQWEsRUFBRUMsWUFBWSxFQUFFO0lBQ25FLElBQUlDLG9CQUFvQixLQUFLO0lBRTdCRCxhQUFhRSxLQUFLLENBQUNIO0lBRW5CLElBQUksQ0FBQ0UsbUJBQW1CO1FBQ3RCLElBQU1FLDZCQUE2QkMsSUFBQUEsNEJBQXlCLEVBQUNMLGVBQWVDO1FBRTVFQyxvQkFBb0JFLDRCQUE0QixHQUFHO0lBQ3JELENBQUM7SUFFRCxJQUFJLENBQUNGLG1CQUFtQjtRQUN0QixJQUFNSSxpQ0FBaUNDLElBQUFBLCtCQUE0QixFQUFDUCxlQUFlQztRQUVuRkMsb0JBQW9CSSxnQ0FBZ0MsR0FBRztJQUN6RCxDQUFDO0lBRURKLG9CQUNFRCxhQUFhTyxRQUFRLENBQUNSLGlCQUNwQkMsYUFBYVEsSUFBSSxDQUFDVCxjQUFjO0lBRXBDLE9BQU9FO0FBQ1QifQ==