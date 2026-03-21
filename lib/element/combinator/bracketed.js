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
    unifyStatement(statement, context) {
        let statementUnifies;
        const statementString = statement.getString();
        context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);
        statementUnifies = super.unifyStatement(statement, context);
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
        }
        return statementUnifies;
    }
    static name = "BracketedCombinator";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbWJpbmF0b3IgZXh0ZW5kcyBDb21iaW5hdG9yIHtcbiAgZ2V0QnJhY2tldGVkQ29tYmluYXRvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvck5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgYnJhY2tldGVkIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdXBlci51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRDb21iaW5hdG9yXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwiQ29tYmluYXRvciIsImdldEJyYWNrZXRlZENvbWJpbmF0b3JOb2RlIiwibm9kZSIsImdldE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yTm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7bUVBSnVCOzBCQUVBOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw0QkFBNEJDLG1CQUFVO0lBQ2hFQyw2QkFBNkI7UUFDM0IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLDBCQUEwQkYsTUFBTSxHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQUMsZUFBZUMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7UUFDakMsSUFBSUM7UUFFSixNQUFNQyxrQkFBa0JILFVBQVVJLFNBQVM7UUFFM0NILFFBQVFJLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUYsZ0JBQWdCLDRDQUE0QyxDQUFDO1FBRTVGRCxtQkFBbUIsS0FBSyxDQUFDSCxlQUFlQyxXQUFXQztRQUVuRCxJQUFJQyxrQkFBa0I7WUFDcEJELFFBQVFLLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxnQkFBZ0IsMENBQTBDLENBQUM7UUFDOUY7UUFFQSxPQUFPRDtJQUNUO0lBRUEsT0FBT0ssT0FBTyxzQkFBc0I7QUFDdEMifQ==