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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsVariable(term, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = _variable.default.fromVariableNode(variableNode, localContext);
    if (variable !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."));
        var variableVerified = variable.verify(localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType();
            term.setType(type);
            verifiedAhead = verifyAhead();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."));
        }
    }
    return termVerifiedAsVariable;
}
var verifyMixins = [
    verifyTermAsVariable
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmNvbnN0IHZlcmlmeU1peGlucyA9IFtcbiAgdmVyaWZ5VGVybUFzVmFyaWFibGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeU1peGlucztcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidGVybSIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsInZlcmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7OytEQTVDcUI7cUJBRUs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0MscUJBQXFCQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUMzRCxJQUFJQyx5QkFBeUI7SUFFN0IsSUFBTUMsV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsZUFBZVQsa0JBQWtCTyxXQUNqQ0csV0FBV0MsaUJBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNILGNBQWNMO0lBRXpELElBQUlNLGFBQWEsTUFBTTtRQUNyQixJQUFNRyxhQUFhVCxhQUFhVSxZQUFZLENBQUNQO1FBRTdDSCxhQUFhVyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztRQUVoRCxJQUFNRyxtQkFBbUJOLFNBQVNPLE1BQU0sQ0FBQ2I7UUFFekMsSUFBSVksa0JBQWtCO1lBQ3BCLElBQUlFO1lBRUosSUFBTUMsT0FBT1QsU0FBU1UsT0FBTztZQUU3QmpCLEtBQUtrQixPQUFPLENBQUNGO1lBRWJELGdCQUFnQmI7WUFFaEJDLHlCQUF5QlksZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSVosd0JBQXdCO1lBQzFCRixhQUFha0IsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVc7UUFDcEQ7SUFDRjtJQUVBLE9BQU9QO0FBQ1Q7QUFFQSxJQUFNaUIsZUFBZTtJQUNuQnJCO0NBQ0Q7SUFFRCxXQUFlcUIifQ==