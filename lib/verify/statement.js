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
    if (!statementVerified) {
        statementVerified = true; ///
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEFzRXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlTdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50VHlwZUFzc2VydGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZEFzRXF1YWxpdHkgPSB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGVxdWFsaXR5VmVyaWZpZWRBc0VxdWFsaXR5OyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoc3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwiZXF1YWxpdHlWZXJpZmllZEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5Iiwic3RhdGVtZW50VHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50VHlwZUFzc2VydGlvbiIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt3RUFIYzsyRUFDRzs7Ozs7O0FBRTFCLFNBQVNBLGdCQUFnQkMsYUFBYSxFQUFFQyxZQUFZLEVBQUU7SUFDbkUsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0JELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBSSxDQUFDRSxtQkFBbUI7UUFDdEIsSUFBTUUsNkJBQTZCQyxJQUFBQSw0QkFBeUIsRUFBQ0wsZUFBZUM7UUFFNUVDLG9CQUFvQkUsNEJBQTRCLEdBQUc7SUFDckQsQ0FBQztJQUVELElBQUksQ0FBQ0YsbUJBQW1CO1FBQ3RCLElBQU1JLGlDQUFpQ0MsSUFBQUEsK0JBQTRCLEVBQUNQLGVBQWVDO1FBRW5GQyxvQkFBb0JJLGdDQUFnQyxHQUFHO0lBQ3pELENBQUM7SUFFRCxJQUFJLENBQUNKLG1CQUFtQjtRQUN0QkEsb0JBQW9CLElBQUksRUFBRSxHQUFHO0lBQy9CLENBQUM7SUFFREEsb0JBQ0VELGFBQWFPLFFBQVEsQ0FBQ1IsaUJBQ3BCQyxhQUFhUSxJQUFJLENBQUNULGNBQWM7SUFFcEMsT0FBT0U7QUFDVCJ9