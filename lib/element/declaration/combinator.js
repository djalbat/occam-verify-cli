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
    constructor(context, string, node, lineIndex, combinator){
        super(context, string, node, lineIndex);
        this.combinator = combinator;
    }
    getCombinator() {
        return this.combinator;
    }
    getCombinatorDeclarationNode() {
        const node = this.getNode(), combinatorDeclarationNode = node; ///
        return combinatorDeclarationNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const combinatorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`);
        const combinatorValidates = this.validateCombinator(context);
        if (combinatorValidates) {
            context.addCombinator(this.combinator);
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
        }
        return verifies;
    }
    validateCombinator(context) {
        let combinatorValidates;
        const combinatorString = this.combinator.getString(), combinatorDeclarationString = this.getString(); ///
        context.trace(`Validating the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator...`);
        combinatorValidates = this.combinator.validate(context);
        if (combinatorValidates) {
            context.debug(`...validated the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator.`);
        }
        return combinatorValidates;
    }
    static name = "CombinatorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBjb21iaW5hdG9yKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQ29tYmluYXRvcihjb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVDb21iaW5hdG9yKGNvbnRleHQpIHtcbiAgICBsZXQgY29tYmluYXRvclZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbidzICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb21iaW5hdG9yVmFsaWRhdGVzID0gdGhpcy5jb21iaW5hdG9yLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbidzICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9yVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImNvbWJpbmF0b3IiLCJnZXRDb21iaW5hdG9yIiwiZ2V0Q29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tYmluYXRvclZhbGlkYXRlcyIsInZhbGlkYXRlQ29tYmluYXRvciIsImFkZENvbWJpbmF0b3IiLCJkZWJ1ZyIsImNvbWJpbmF0b3JTdHJpbmciLCJ2YWxpZGF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNuRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsQ0FBRTtRQUN4RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSwrQkFBK0I7UUFDN0IsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLDRCQUE0Qk4sTUFBTSxHQUFHO1FBRTNDLE9BQU9NO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPVCxPQUFPLEVBQUU7UUFDcEIsSUFBSVUsV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNYO1FBRWpCLE1BQU1ZLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0QiwyQkFBMkIsQ0FBQztRQUV4RixNQUFNRyxzQkFBc0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2hCO1FBRXBELElBQUllLHFCQUFxQjtZQUN2QmYsUUFBUWlCLGFBQWEsQ0FBQyxJQUFJLENBQUNiLFVBQVU7WUFFckNNLFdBQVc7UUFDYjtRQUVBLElBQUlBLFVBQVU7WUFDWlYsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTiw0QkFBNEIseUJBQXlCLENBQUM7UUFDMUY7UUFFQSxPQUFPRjtJQUNUO0lBRUFNLG1CQUFtQmhCLE9BQU8sRUFBRTtRQUMxQixJQUFJZTtRQUVKLE1BQU1JLG1CQUFtQixJQUFJLENBQUNmLFVBQVUsQ0FBQ1MsU0FBUyxJQUM1Q0QsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURiLFFBQVFjLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiw0QkFBNEIsNEJBQTRCLEVBQUVPLGlCQUFpQixlQUFlLENBQUM7UUFFNUhKLHNCQUFzQixJQUFJLENBQUNYLFVBQVUsQ0FBQ2dCLFFBQVEsQ0FBQ3BCO1FBRS9DLElBQUllLHFCQUFxQjtZQUN2QmYsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTiw0QkFBNEIsNEJBQTRCLEVBQUVPLGlCQUFpQixhQUFhLENBQUM7UUFDOUg7UUFFQSxPQUFPSjtJQUNUO0lBRUEsT0FBT00sT0FBTyx3QkFBd0I7QUFDeEMifQ==