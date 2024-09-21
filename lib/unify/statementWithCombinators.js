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
    stated = true; ///
    statementUnifiedWithCombinators = combinators.some(function(combinator) {
        var statementUnifiedWithCombinator = (0, _statementWithCombinator.default)(statementNode, combinator, assignments, stated, localContext);
        if (statementUnifiedWithCombinator) {
            return true;
        }
    });
    return statementUnifiedWithCombinators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdGF0ZW1lbnRXaXRoQ29tYmluYXRvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIGZyb20gXCIuLi91bmlmeS9zdGF0ZW1lbnRXaXRoQ29tYmluYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcnM7XG5cbiAgY29uc3QgY29tYmluYXRvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcnM7XG59XG4iXSwibmFtZXMiOlsidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcnMiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsInNvbWUiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozs4RUFGaUI7Ozs7OztBQUUxQixTQUFTQSw4QkFBOEJDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDcEcsSUFBSUM7SUFFSixJQUFNQyxjQUFjRixhQUFhRyxjQUFjO0lBRS9DTCxjQUFjLE1BQU0sR0FBRztJQUV2QkMsU0FBUyxNQUFPLEdBQUc7SUFFbkJFLGtDQUFrQ0MsWUFBWUUsSUFBSSxDQUFDLFNBQUNDO1FBQ2xELElBQU1DLGlDQUFpQ0MsSUFBQUEsZ0NBQTRCLEVBQUNWLGVBQWVRLFlBQVlQLGFBQWFDLFFBQVFDO1FBRXBILElBQUlNLGdDQUFnQztZQUNsQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9MO0FBQ1QifQ==