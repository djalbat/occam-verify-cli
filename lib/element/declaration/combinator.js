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
        const combinatorDeclarationString = this.getString(); ///
        context.trace(`Validating the '${combinatorDeclarationString}' combinator declaration's combinator...`);
        combinatorValidates = this.combinator.validate(context);
        if (combinatorValidates) {
            context.debug(`...validated the '${combinatorDeclarationString}' combinator declaration's combinator.`);
        }
        return combinatorValidates;
    }
    static name = "CombinatorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBjb21iaW5hdG9yKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQ29tYmluYXRvcihjb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVDb21iaW5hdG9yKGNvbnRleHQpIHtcbiAgICBsZXQgY29tYmluYXRvclZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24ncyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb21iaW5hdG9yVmFsaWRhdGVzID0gdGhpcy5jb21iaW5hdG9yLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbidzIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvckRlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiY29tYmluYXRvciIsImdldENvbWJpbmF0b3IiLCJnZXRDb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmFsaWRhdGVzIiwidmFsaWRhdGVDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwidmFsaWRhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMsb0JBQVc7SUFDbkUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVLENBQUU7UUFDeEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsK0JBQStCO1FBQzdCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyw0QkFBNEJOLE1BQU0sR0FBRztRQUUzQyxPQUFPTTtJQUNUO0lBRUEsTUFBTUMsT0FBT1QsT0FBTyxFQUFFO1FBQ3BCLElBQUlVLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWDtRQUVqQixNQUFNWSw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsMkJBQTJCLENBQUM7UUFFeEYsTUFBTUcsc0JBQXNCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNoQjtRQUVwRCxJQUFJZSxxQkFBcUI7WUFDdkJmLFFBQVFpQixhQUFhLENBQUMsSUFBSSxDQUFDYixVQUFVO1lBRXJDTSxXQUFXO1FBQ2I7UUFFQSxJQUFJQSxVQUFVO1lBQ1pWLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU4sNEJBQTRCLHlCQUF5QixDQUFDO1FBQzFGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBTSxtQkFBbUJoQixPQUFPLEVBQUU7UUFDMUIsSUFBSWU7UUFFSixNQUFNSCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLDRCQUE0Qix3Q0FBd0MsQ0FBQztRQUV0R0csc0JBQXNCLElBQUksQ0FBQ1gsVUFBVSxDQUFDZSxRQUFRLENBQUNuQjtRQUUvQyxJQUFJZSxxQkFBcUI7WUFDdkJmLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sNEJBQTRCLHNDQUFzQyxDQUFDO1FBQ3hHO1FBRUEsT0FBT0c7SUFDVDtJQUVBLE9BQU9LLE9BQU8sd0JBQXdCO0FBQ3hDIn0=