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
var _shim = /*#__PURE__*/ _interop_require_default(require("../../shim"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsVariable(term, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var Variable = _shim.default.Variable, termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNode(variableNode, localContext);
    if (variable !== null) {
        var termString = term.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi8uLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmNvbnN0IHZlcmlmeU1peGlucyA9IFtcbiAgdmVyaWZ5VGVybUFzVmFyaWFibGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeU1peGlucztcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidGVybSIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsIlZhcmlhYmxlIiwic2hpbSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2ZXJpZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStDQTs7O2VBQUE7OzsyREE3Q2lCO3FCQUVTOzs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLHFCQUFxQkMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDM0QsSUFBSUMseUJBQXlCO0lBRTdCLElBQU0sQUFBRUMsV0FBYUMsYUFBSSxDQUFqQkQsVUFDRkUsV0FBV04sS0FBS08sT0FBTyxJQUN2QkMsZUFBZVgsa0JBQWtCUyxXQUNqQ0csV0FBV0wsU0FBU00sZ0JBQWdCLENBQUNGLGNBQWNQO0lBRXpELElBQUlRLGFBQWEsTUFBTTtRQUNyQixJQUFNRSxhQUFhWCxLQUFLWSxTQUFTO1FBRWpDWCxhQUFhWSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztRQUVoRCxJQUFNRyxtQkFBbUJMLFNBQVNNLE1BQU0sQ0FBQ2Q7UUFFekMsSUFBSWEsa0JBQWtCO1lBQ3BCLElBQUlFO1lBRUosSUFBTUMsT0FBT1IsU0FBU1MsT0FBTztZQUU3QmxCLEtBQUttQixPQUFPLENBQUNGO1lBRWJELGdCQUFnQmQ7WUFFaEJDLHlCQUF5QmEsZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSWIsd0JBQXdCO1lBQzFCRixhQUFhbUIsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVc7UUFDcEQ7SUFDRjtJQUVBLE9BQU9SO0FBQ1Q7QUFFQSxJQUFNa0IsZUFBZTtJQUNuQnRCO0NBQ0Q7SUFFRCxXQUFlc0IifQ==