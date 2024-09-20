"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyStatementWithCombinators;
    }
});
var _statementWithCombinator = /*#__PURE__*/ _interop_require_default(require("../unify/statementWithCombinator"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyStatementWithCombinators(statementNode, assignments, stated, localContext) {
    var statementUnifiedWithCombinators;
    var combinators = localContext.getCombinators();
    assignments = null; ///
    statementUnifiedWithCombinators = combinators.some(function(combinator) {
        var statementUnifiedWithCombinator = (0, _statementWithCombinator.default)(statementNode, combinator, assignments, stated, localContext);
        if (statementUnifiedWithCombinator) {
            return true;
        }
    });
    return statementUnifiedWithCombinators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdGF0ZW1lbnRXaXRoQ29tYmluYXRvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIGZyb20gXCIuLi91bmlmeS9zdGF0ZW1lbnRXaXRoQ29tYmluYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcnM7XG5cbiAgY29uc3QgY29tYmluYXRvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9ycyIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwic29tZSIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzhFQUZpQjs7Ozs7O0FBRTFCLFNBQVNBLDhCQUE4QkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUNwRyxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGFBQWFHLGNBQWM7SUFFL0NMLGNBQWMsTUFBTSxHQUFHO0lBRXZCRyxrQ0FBa0NDLFlBQVlFLElBQUksQ0FBQyxTQUFDQztRQUNsRCxJQUFNQyxpQ0FBaUNDLElBQUFBLGdDQUE0QixFQUFDVixlQUFlUSxZQUFZUCxhQUFhQyxRQUFRQztRQUVwSCxJQUFJTSxnQ0FBZ0M7WUFDbEMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUIn0=