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
const _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class CombinatorDeclaration extends _declaration.default {
    constructor(context, string, node, combinator){
        super(context, string, node);
        this.combinator = combinator;
    }
    getCombinator() {
        return this.combinator;
    }
    getCombinatorDeclarationNode() {
        const node = this.getNode(), combinatorDeclarationNode = node; ///
        return combinatorDeclarationNode;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const combinatorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);
        const combinatorVerifies = this.verifyCombinator();
        if (combinatorVerifies) {
            context.addCombinator(this.combinator);
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
        }
        return verifies;
    }
    verifyCombinator() {
        let combinatorVerifies;
        const context = this.getContext(), combinatorString = this.combinator.getString(), combinatorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator...`);
        combinatorVerifies = this.combinator.verify(context);
        if (combinatorVerifies) {
            context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator.`);
        }
        return combinatorVerifies;
    }
    static name = "CombinatorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbWJpbmF0b3IoKTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb21iaW5hdG9yKCkge1xuICAgIGxldCBjb21iaW5hdG9yVmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuY29tYmluYXRvci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24ncyAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29tYmluYXRvclZlcmlmaWVzID0gdGhpcy5jb21iaW5hdG9yLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJjb21iaW5hdG9yIiwiZ2V0Q29tYmluYXRvciIsImdldENvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmVyaWZpZXMiLCJ2ZXJpZnlDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwiY29tYmluYXRvclN0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNuRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDN0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsK0JBQStCO1FBQzdCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyw0QkFBNEJMLE1BQU0sR0FBRztRQUUzQyxPQUFPSztJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDLFdBQVc7UUFFZixNQUFNVCxVQUFVLElBQUksQ0FBQ1UsVUFBVTtRQUUvQixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWDtRQUVqQixNQUFNWSw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsMkJBQTJCLENBQUM7UUFFeEYsTUFBTUcscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRWhELElBQUlELG9CQUFvQjtZQUN0QmYsUUFBUWlCLGFBQWEsQ0FBQyxJQUFJLENBQUNkLFVBQVU7WUFFckNNLFdBQVc7UUFDYjtRQUVBLElBQUlBLFVBQVU7WUFDWlQsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTiw0QkFBNEIseUJBQXlCLENBQUM7UUFDMUY7UUFFQSxPQUFPSDtJQUNUO0lBRUFPLG1CQUFtQjtRQUNqQixJQUFJRDtRQUVKLE1BQU1mLFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCUyxtQkFBbUIsSUFBSSxDQUFDaEIsVUFBVSxDQUFDVSxTQUFTLElBQzVDRCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsNEJBQTRCLEVBQUVPLGlCQUFpQixlQUFlLENBQUM7UUFFM0hKLHFCQUFxQixJQUFJLENBQUNaLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDUjtRQUU1QyxJQUFJZSxvQkFBb0I7WUFDdEJmLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU4sNEJBQTRCLDRCQUE0QixFQUFFTyxpQkFBaUIsYUFBYSxDQUFDO1FBQzdIO1FBRUEsT0FBT0o7SUFDVDtJQUVBLE9BQU9LLE9BQU8sd0JBQXdCO0FBQ3hDIn0=