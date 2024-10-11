"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../../variable"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable");
function verifyTermAsVariable(term, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = _variable.default.fromVariableNode(variableNode, localContext);
    if (variable !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variableVerified = variable.verify(localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType();
            term.setType(type);
            verifiedAhead = verifyAhead();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
var verifyMixins = [
    verifyTermAsVariable
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5jb25zdCB2ZXJpZnlNaXhpbnMgPSBbXG4gIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm0iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2ZXJpZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThDQTs7O2VBQUE7OzsrREE1Q3FCO3FCQUVLOzs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLHFCQUFxQkMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDM0QsSUFBSUMseUJBQXlCO0lBRTdCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLGVBQWVULGtCQUFrQk8sV0FDakNHLFdBQVdDLGlCQUFRLENBQUNDLGdCQUFnQixDQUFDSCxjQUFjTDtJQUV6RCxJQUFJTSxhQUFhLE1BQU07UUFDckIsSUFBTUcsYUFBYVQsYUFBYVUsWUFBWSxDQUFDUDtRQUU3Q0gsYUFBYVcsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsNEJBQTBCTjtRQUUxRSxJQUFNUyxtQkFBbUJOLFNBQVNPLE1BQU0sQ0FBQ2I7UUFFekMsSUFBSVksa0JBQWtCO1lBQ3BCLElBQUlFO1lBRUosSUFBTUMsT0FBT1QsU0FBU1UsT0FBTztZQUU3QmpCLEtBQUtrQixPQUFPLENBQUNGO1lBRWJELGdCQUFnQmI7WUFFaEJDLHlCQUF5QlksZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSVosd0JBQXdCO1lBQzFCRixhQUFha0IsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVcsMEJBQXdCTjtRQUM1RTtJQUNGO0lBRUEsT0FBT0Q7QUFDVDtBQUVBLElBQU1pQixlQUFlO0lBQ25CckI7Q0FDRDtJQUVELFdBQWVxQiJ9