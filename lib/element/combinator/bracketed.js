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
const _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class BracketedCombinator extends _combinator.default {
    getBracketedCombinatorNode() {
        const node = this.getNode(), bracketedCombinatorNode = node; ///
        return bracketedCombinatorNode;
    }
    unifyStatement(statement, stated, context) {
        let statementUnifies;
        const statementString = statement.getString();
        context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);
        statementUnifies = super.unifyStatement(statement, stated, context);
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
        }
        return statementUnifies;
    }
    static name = "BracketedCombinator";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbWJpbmF0b3IgZXh0ZW5kcyBDb21iaW5hdG9yIHtcbiAgZ2V0QnJhY2tldGVkQ29tYmluYXRvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvck5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN1cGVyLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgYnJhY2tldGVkIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkQ29tYmluYXRvclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJnZXRCcmFja2V0ZWRDb21iaW5hdG9yTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvck5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlZCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O21FQUp1QjswQkFFQTs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsNEJBQTRCQyxtQkFBVTtJQUNoRUMsNkJBQTZCO1FBQzNCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywwQkFBMEJGLE1BQU0sR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRUFDLGVBQWVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7UUFDekMsSUFBSUM7UUFFSixNQUFNQyxrQkFBa0JKLFVBQVVLLFNBQVM7UUFFM0NILFFBQVFJLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUYsZ0JBQWdCLDRDQUE0QyxDQUFDO1FBRTVGRCxtQkFBbUIsS0FBSyxDQUFDSixlQUFlQyxXQUFXQyxRQUFRQztRQUUzRCxJQUFJQyxrQkFBa0I7WUFDcEJELFFBQVFLLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxnQkFBZ0IsMENBQTBDLENBQUM7UUFDOUY7UUFFQSxPQUFPRDtJQUNUO0lBRUEsT0FBT0ssT0FBTyxzQkFBc0I7QUFDdEMifQ==