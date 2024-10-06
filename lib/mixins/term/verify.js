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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5jb25zdCB2ZXJpZnlNaXhpbnMgPSBbXG4gIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm0iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2ZXJpZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThDQTs7O2VBQUE7OzsrREE1Q3FCO3FCQUVLOzs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLHFCQUFxQkMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDM0QsSUFBSUMseUJBQXlCO0lBRTdCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLGVBQWVULGtCQUFrQk87SUFFdkMsSUFBSUUsaUJBQWlCLE1BQU07UUFDekIsSUFBTUMsYUFBYU4sYUFBYU8sWUFBWSxDQUFDSjtRQUU3Q0gsYUFBYVEsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsNEJBQTBCSDtRQUUxRSxJQUFNTSxXQUFXQyxpQkFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ04sY0FBY0wsZUFDbkRZLG1CQUFtQkgsU0FBU0ksTUFBTSxDQUFDYjtRQUV6QyxJQUFJWSxrQkFBa0I7WUFDcEIsSUFBSUU7WUFFSixJQUFNQyxPQUFPTixTQUFTTyxPQUFPO1lBRTdCakIsS0FBS2tCLE9BQU8sQ0FBQ0Y7WUFFYkQsZ0JBQWdCYjtZQUVoQkMseUJBQXlCWSxlQUFlLEdBQUc7UUFDN0M7UUFFQSxJQUFJWix3QkFBd0I7WUFDMUJGLGFBQWFrQixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFosWUFBVywwQkFBd0JIO1FBQzVFO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUO0FBRUEsSUFBTWlCLGVBQWU7SUFDbkJyQjtDQUNEO0lBRUQsV0FBZXFCIn0=