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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBjb21iaW5hdG9yKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVDb21iaW5hdG9yKCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5hZGRDb21iaW5hdG9yKHRoaXMuY29tYmluYXRvcik7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlQ29tYmluYXRvcigpIHtcbiAgICBsZXQgY29tYmluYXRvclZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5jb21iaW5hdG9yLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24ncyAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29tYmluYXRvclZhbGlkYXRlcyA9IHRoaXMuY29tYmluYXRvci52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24ncyAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvclZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJjb21iaW5hdG9yIiwiZ2V0Q29tYmluYXRvciIsImdldENvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmFsaWRhdGVzIiwidmFsaWRhdGVDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwiY29tYmluYXRvclN0cmluZyIsInZhbGlkYXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLG9CQUFXO0lBQ25FLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLCtCQUErQjtRQUM3QixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsNEJBQTRCTixNQUFNLEdBQUc7UUFFM0MsT0FBT007SUFDVDtJQUVBLE1BQU1DLFNBQVM7UUFDYixJQUFJQyxXQUFXO1FBRWYsTUFBTVYsVUFBVSxJQUFJLENBQUNXLFVBQVU7UUFFL0IsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1o7UUFFakIsTUFBTWEsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDJCQUEyQixDQUFDO1FBRXhGLE1BQU1HLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQjtRQUVuRCxJQUFJRCxxQkFBcUI7WUFDdkJoQixRQUFRa0IsYUFBYSxDQUFDLElBQUksQ0FBQ2QsVUFBVTtZQUVyQ00sV0FBVztRQUNiO1FBRUEsSUFBSUEsVUFBVTtZQUNaVixRQUFRbUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVOLDRCQUE0Qix5QkFBeUIsQ0FBQztRQUMxRjtRQUVBLE9BQU9IO0lBQ1Q7SUFFQU8scUJBQXFCO1FBQ25CLElBQUlEO1FBRUosTUFBTWhCLFVBQVUsSUFBSSxDQUFDVyxVQUFVLElBQ3pCUyxtQkFBbUIsSUFBSSxDQUFDaEIsVUFBVSxDQUFDVSxTQUFTLElBQzVDRCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGQsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLDRCQUE0Qiw0QkFBNEIsRUFBRU8saUJBQWlCLGVBQWUsQ0FBQztRQUU1SEosc0JBQXNCLElBQUksQ0FBQ1osVUFBVSxDQUFDaUIsUUFBUSxDQUFDckI7UUFFL0MsSUFBSWdCLHFCQUFxQjtZQUN2QmhCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sNEJBQTRCLDRCQUE0QixFQUFFTyxpQkFBaUIsYUFBYSxDQUFDO1FBQzlIO1FBRUEsT0FBT0o7SUFDVDtJQUVBLE9BQU9NLE9BQU8sd0JBQXdCO0FBQ3hDIn0=