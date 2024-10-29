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
    var Variable = _shim.default.Variable, context = localContext, termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNode(variableNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi8uLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuY29uc3QgdmVyaWZ5TWl4aW5zID0gW1xuICB2ZXJpZnlUZXJtQXNWYXJpYWJsZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5TWl4aW5zO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiVmFyaWFibGUiLCJzaGltIiwiY29udGV4dCIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2ZXJpZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdEQTs7O2VBQUE7OzsyREE5Q2lCO3FCQUVTOzs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLHFCQUFxQkMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDM0QsSUFBSUMseUJBQXlCO0lBRTdCLElBQU0sQUFBRUMsV0FBYUMsYUFBSSxDQUFqQkQsVUFDRkUsVUFBVUwsY0FDVk0sV0FBV1AsS0FBS1EsT0FBTyxJQUN2QkMsZUFBZVosa0JBQWtCVSxXQUNqQ0csV0FBV04sU0FBU08sZ0JBQWdCLENBQUNGLGNBQWNIO0lBRXpELElBQUlJLGFBQWEsTUFBTTtRQUNyQixJQUFNRSxhQUFhWixLQUFLYSxTQUFTO1FBRWpDWixhQUFhYSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztRQUVoRCxJQUFNRyxtQkFBbUJMLFNBQVNNLE1BQU0sQ0FBQ2Y7UUFFekMsSUFBSWMsa0JBQWtCO1lBQ3BCLElBQUlFO1lBRUosSUFBTUMsT0FBT1IsU0FBU1MsT0FBTztZQUU3Qm5CLEtBQUtvQixPQUFPLENBQUNGO1lBRWJELGdCQUFnQmY7WUFFaEJDLHlCQUF5QmMsZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSWQsd0JBQXdCO1lBQzFCRixhQUFhb0IsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVc7UUFDcEQ7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFQSxJQUFNbUIsZUFBZTtJQUNuQnZCO0NBQ0Q7SUFFRCxXQUFldUIifQ==