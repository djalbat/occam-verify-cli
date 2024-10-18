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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuY29uc3QgdmVyaWZ5TWl4aW5zID0gW1xuICB2ZXJpZnlUZXJtQXNWYXJpYWJsZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5TWl4aW5zO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5IiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwidmVyaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4Q0E7OztlQUFBOzs7K0RBNUNxQjtxQkFFSzs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTQyxxQkFBcUJDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzNELElBQUlDLHlCQUF5QjtJQUU3QixJQUFNQyxXQUFXSixLQUFLSyxPQUFPLElBQ3ZCQyxlQUFlVCxrQkFBa0JPLFdBQ2pDRyxXQUFXQyxpQkFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsY0FBY0w7SUFFekQsSUFBSU0sYUFBYSxNQUFNO1FBQ3JCLElBQU1HLGFBQWFULGFBQWFVLFlBQVksQ0FBQ1A7UUFFN0NILGFBQWFXLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXO1FBRWhELElBQU1HLG1CQUFtQk4sU0FBU08sTUFBTSxDQUFDYjtRQUV6QyxJQUFJWSxrQkFBa0I7WUFDcEIsSUFBSUU7WUFFSixJQUFNQyxPQUFPVCxTQUFTVSxPQUFPO1lBRTdCakIsS0FBS2tCLE9BQU8sQ0FBQ0Y7WUFFYkQsZ0JBQWdCYjtZQUVoQkMseUJBQXlCWSxlQUFlLEdBQUc7UUFDN0M7UUFFQSxJQUFJWix3QkFBd0I7WUFDMUJGLGFBQWFrQixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFQsWUFBVztRQUNwRDtJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVBLElBQU1pQixlQUFlO0lBQ25CckI7Q0FDRDtJQUVELFdBQWVxQiJ9