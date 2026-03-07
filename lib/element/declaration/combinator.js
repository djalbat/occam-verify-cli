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
        const combinatorValidates = this.validateCombinator();
        if (combinatorValidates) {
            context.addCombinator(this.combinator);
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`);
        }
        return verifies;
    }
    validateCombinator() {
        let combinatorValidates;
        const context = this.getContext(), combinatorString = this.combinator.getString(), combinatorDeclarationString = this.getString(); ///
        context.trace(`Validating the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator...`);
        combinatorValidates = this.combinator.validate(context);
        if (combinatorValidates) {
            context.debug(`...validated the '${combinatorDeclarationString}' combinator declaration's '${combinatorString}' combinator.`);
        }
        return combinatorValidates;
    }
    static name = "CombinatorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgY29tYmluYXRvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUNvbWJpbmF0b3IoKTtcblxuICAgIGlmIChjb21iaW5hdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVDb21iaW5hdG9yKCkge1xuICAgIGxldCBjb21iaW5hdG9yVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbidzICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb21iaW5hdG9yVmFsaWRhdGVzID0gdGhpcy5jb21iaW5hdG9yLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbidzICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9yVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImNvbWJpbmF0b3IiLCJnZXRDb21iaW5hdG9yIiwiZ2V0Q29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbWJpbmF0b3JWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUNvbWJpbmF0b3IiLCJhZGRDb21iaW5hdG9yIiwiZGVidWciLCJjb21iaW5hdG9yU3RyaW5nIiwidmFsaWRhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMsb0JBQVc7SUFDbkUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQzdDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLCtCQUErQjtRQUM3QixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsNEJBQTRCTCxNQUFNLEdBQUc7UUFFM0MsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLFNBQVM7UUFDYixJQUFJQyxXQUFXO1FBRWYsTUFBTVQsVUFBVSxJQUFJLENBQUNVLFVBQVU7UUFFL0IsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1g7UUFFakIsTUFBTVksOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURiLFFBQVFjLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDJCQUEyQixDQUFDO1FBRXhGLE1BQU1HLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQjtRQUVuRCxJQUFJRCxxQkFBcUI7WUFDdkJmLFFBQVFpQixhQUFhLENBQUMsSUFBSSxDQUFDZCxVQUFVO1lBRXJDTSxXQUFXO1FBQ2I7UUFFQSxJQUFJQSxVQUFVO1lBQ1pULFFBQVFrQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU4sNEJBQTRCLHlCQUF5QixDQUFDO1FBQzFGO1FBRUEsT0FBT0g7SUFDVDtJQUVBTyxxQkFBcUI7UUFDbkIsSUFBSUQ7UUFFSixNQUFNZixVQUFVLElBQUksQ0FBQ1UsVUFBVSxJQUN6QlMsbUJBQW1CLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ1UsU0FBUyxJQUM1Q0QsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURiLFFBQVFjLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiw0QkFBNEIsNEJBQTRCLEVBQUVPLGlCQUFpQixlQUFlLENBQUM7UUFFNUhKLHNCQUFzQixJQUFJLENBQUNaLFVBQVUsQ0FBQ2lCLFFBQVEsQ0FBQ3BCO1FBRS9DLElBQUllLHFCQUFxQjtZQUN2QmYsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTiw0QkFBNEIsNEJBQTRCLEVBQUVPLGlCQUFpQixhQUFhLENBQUM7UUFDOUg7UUFFQSxPQUFPSjtJQUNUO0lBRUEsT0FBT00sT0FBTyx3QkFBd0I7QUFDeEMifQ==