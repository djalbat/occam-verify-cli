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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi8uLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZWQgPSB2YXJpYWJsZS52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5jb25zdCB2ZXJpZnlNaXhpbnMgPSBbXG4gIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm0iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJWYXJpYWJsZSIsInNoaW0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5IiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwidmVyaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErQ0E7OztlQUFBOzs7MkRBN0NpQjtxQkFFUzs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTQyxxQkFBcUJDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzNELElBQUlDLHlCQUF5QjtJQUU3QixJQUFNLEFBQUVDLFdBQWFDLGFBQUksQ0FBakJELFVBQ0ZFLFdBQVdOLEtBQUtPLE9BQU8sSUFDdkJDLGVBQWVYLGtCQUFrQlMsV0FDakNHLFdBQVdMLFNBQVNNLGdCQUFnQixDQUFDRixjQUFjUDtJQUV6RCxJQUFJUSxhQUFhLE1BQU07UUFDckIsSUFBTUUsYUFBYVYsYUFBYVcsWUFBWSxDQUFDTjtRQUU3Q0wsYUFBYVksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7UUFFaEQsSUFBTUcsbUJBQW1CTCxTQUFTTSxNQUFNLENBQUNkO1FBRXpDLElBQUlhLGtCQUFrQjtZQUNwQixJQUFJRTtZQUVKLElBQU1DLE9BQU9SLFNBQVNTLE9BQU87WUFFN0JsQixLQUFLbUIsT0FBTyxDQUFDRjtZQUViRCxnQkFBZ0JkO1lBRWhCQyx5QkFBeUJhLGVBQWUsR0FBRztRQUM3QztRQUVBLElBQUliLHdCQUF3QjtZQUMxQkYsYUFBYW1CLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYVCxZQUFXO1FBQ3BEO0lBQ0Y7SUFFQSxPQUFPUjtBQUNUO0FBRUEsSUFBTWtCLGVBQWU7SUFDbkJ0QjtDQUNEO0lBRUQsV0FBZXNCIn0=