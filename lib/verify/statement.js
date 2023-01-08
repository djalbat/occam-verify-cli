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
var _string = require("../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyStatement(statementNode, proofContext) {
    var statementVerified = false;
    proofContext.begin(statementNode);
    var statementString = (0, _string.nodeAsString)(statementNode);
    proofContext.debug("Verifying the '".concat(statementString, "' statement..."));
    if (!statementVerified) {
        var equalityVerifiedAsEquality = (0, _statementAsEquality.default)(statementNode, proofContext);
        statementVerified = equalityVerifiedAsEquality; ///
    }
    if (!statementVerified) {
        var statementTypeAssertionVerified = (0, _statementTypeAssertion.default)(statementNode, proofContext);
        statementVerified = statementTypeAssertionVerified; ///
    }
    if (!statementVerified) {
        statementVerified = true; ///
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEFzRXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlTdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50VHlwZUFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gZXF1YWxpdHlWZXJpZmllZEFzRXF1YWxpdHk7IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudFR5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7IC8vL1xuICB9XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsImVxdWFsaXR5VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInN0YXRlbWVudFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudFR5cGVBc3NlcnRpb24iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7d0VBTGM7MkVBQ0c7c0JBRVo7Ozs7OztBQUVkLFNBQVNBLGdCQUFnQkMsYUFBYSxFQUFFQyxZQUFZLEVBQUU7SUFDbkUsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0JELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDTDtJQUVyQ0MsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0I7SUFFckQsSUFBSSxDQUFDRixtQkFBbUI7UUFDdEIsSUFBTUssNkJBQTZCQyxJQUFBQSw0QkFBeUIsRUFBQ1IsZUFBZUM7UUFFNUVDLG9CQUFvQkssNEJBQTRCLEdBQUc7SUFDckQsQ0FBQztJQUVELElBQUksQ0FBQ0wsbUJBQW1CO1FBQ3RCLElBQU1PLGlDQUFpQ0MsSUFBQUEsK0JBQTRCLEVBQUNWLGVBQWVDO1FBRW5GQyxvQkFBb0JPLGdDQUFnQyxHQUFHO0lBQ3pELENBQUM7SUFFRCxJQUFJLENBQUNQLG1CQUFtQjtRQUN0QkEsb0JBQW9CLElBQUksRUFBRSxHQUFHO0lBQy9CLENBQUM7SUFFREEsb0JBQ0VELGFBQWFVLFFBQVEsQ0FBQ1gsaUJBQ3BCQyxhQUFhVyxJQUFJLENBQUNaLGNBQWM7SUFFcEMsT0FBT0U7QUFDVCJ9