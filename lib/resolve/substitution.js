"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resolveSubstitution;
    }
});
var _complexSubstitutionAgainstSimpleSubstitution = /*#__PURE__*/ _interop_require_default(require("../resolve/complexSubstitutionAgainstSimpleSubstitution"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resolveSubstitution(substitution, substitutions, localContextA, localContextB) {
    var complexSubstitutionResolved = false;
    var metavariableNode = substitution.getMetavariableNode(), simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);
    if (simpleSubstitution !== null) {
        var complexSubstitution = substitution, complexSubstitutionResolvedAgainstSimpleSubstitution = (0, _complexSubstitutionAgainstSimpleSubstitution.default)(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB);
        complexSubstitutionResolved = complexSubstitutionResolvedAgainstSimpleSubstitution; ///
    }
    return complexSubstitutionResolved;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlL3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlc29sdmVDb21wbGV4U3Vic3RpdHV0aW9uQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vcmVzb2x2ZS9jb21wbGV4U3Vic3RpdHV0aW9uQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbiA9IHJlc29sdmVDb21wbGV4U3Vic3RpdHV0aW9uQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBzaW1wbGVTdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkID0gY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbjsgLy8vXG4gIH1cblxuICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkO1xufVxuIl0sIm5hbWVzIjpbInJlc29sdmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvblJlc29sdmVkQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbiIsInJlc29sdmVDb21wbGV4U3Vic3RpdHV0aW9uQWdhaW5zdFNpbXBsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzttR0FGd0M7Ozs7OztBQUVqRCxTQUFTQSxvQkFBb0JDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7SUFDbkcsSUFBSUMsOEJBQThCO0lBRWxDLElBQU1DLG1CQUFtQkwsYUFBYU0sbUJBQW1CLElBQ25EQyxxQkFBcUJOLGNBQWNPLHdDQUF3QyxDQUFDSDtJQUVsRixJQUFJRSx1QkFBdUIsTUFBTTtRQUMvQixJQUFNRSxzQkFBc0JULGNBQ3RCVSx1REFBdURDLElBQUFBLHFEQUFtRCxFQUFDRixxQkFBcUJGLG9CQUFvQk4sZUFBZUMsZUFBZUM7UUFFeExDLDhCQUE4Qk0sc0RBQXNELEdBQUc7SUFDekY7SUFFQSxPQUFPTjtBQUNUIn0=