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
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variable = _variable.default.fromVariableNode(variableNode, localContext), variableVerified = variable.verify(localContext);
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
function verifyVariable(variableNode, variables, localContext) {
    var variableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variable = localContext.findVariableByVariableNode(variableNode);
    if (variable === null) {
        localContext.trace("The '".concat(variableString, "' variable is not present."), variableNode);
    } else {
        variables.push(variable);
        variableVerified = true;
    }
    if (variableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5jb25zdCB2ZXJpZnlNaXhpbnMgPSBbXG4gIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG5cbmZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5IiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZVN0cmluZyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7OytEQTVDcUI7cUJBRUs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0MscUJBQXFCQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUMzRCxJQUFJQyx5QkFBeUI7SUFFN0IsSUFBTUMsV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsZUFBZVQsa0JBQWtCTztJQUV2QyxJQUFJRSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNQyxhQUFhTixhQUFhTyxZQUFZLENBQUNKO1FBRTdDSCxhQUFhUSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyw0QkFBMEJIO1FBRTFFLElBQU1NLFdBQVdDLGlCQUFRLENBQUNDLGdCQUFnQixDQUFDTixjQUFjTCxlQUNuRFksbUJBQW1CSCxTQUFTSSxNQUFNLENBQUNiO1FBRXpDLElBQUlZLGtCQUFrQjtZQUNwQixJQUFJRTtZQUVKLElBQU1DLE9BQU9OLFNBQVNPLE9BQU87WUFFN0JqQixLQUFLa0IsT0FBTyxDQUFDRjtZQUViRCxnQkFBZ0JiO1lBRWhCQyx5QkFBeUJZLGVBQWUsR0FBRztRQUM3QztRQUVBLElBQUlaLHdCQUF3QjtZQUMxQkYsYUFBYWtCLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYWixZQUFXLDBCQUF3Qkg7UUFDNUU7SUFDRjtJQUVBLE9BQU9EO0FBQ1Q7QUFFQSxJQUFNaUIsZUFBZTtJQUNuQnJCO0NBQ0Q7SUFFRCxXQUFlcUI7QUFFZixTQUFTQyxlQUFlZixZQUFZLEVBQUVnQixTQUFTLEVBQUVyQixZQUFZO0lBQzNELElBQUlZLG1CQUFtQjtJQUV2QixJQUFNVSxpQkFBaUJ0QixhQUFhTyxZQUFZLENBQUNGO0lBRWpETCxhQUFhUSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZmMsZ0JBQWUsa0JBQWdCakI7SUFFcEUsSUFBTUksV0FBV1QsYUFBYXVCLDBCQUEwQixDQUFDbEI7SUFFekQsSUFBSUksYUFBYSxNQUFNO1FBQ3JCVCxhQUFhUSxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmYyxnQkFBZSwrQkFBNkJqQjtJQUN6RSxPQUFPO1FBQ0xnQixVQUFVRyxJQUFJLENBQUNmO1FBRWZHLG1CQUFtQjtJQUNyQjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQlosYUFBYWtCLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmSSxnQkFBZSxnQkFBY2pCO0lBQ3RFO0lBRUEsT0FBT087QUFDVCJ9