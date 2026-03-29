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
const _default = (0, _elements.define)(class TypePrefixDeclaration extends _declaration.default {
    constructor(context, string, node, lineIndex, typePrefix){
        super(context, string, node, lineIndex);
        this.typePrefix = typePrefix;
    }
    getTypePrefix() {
        return this.typePrefix;
    }
    getTypePrefixDeclarationNode() {
        const node = this.getNode(), typePrefixDeclarationNode = node; ///
        return typePrefixDeclarationNode;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const typePrefixDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`);
        const types = context.getTypes(), typesLength = types.length;
        if (typesLength === 0) {
            const typePrefixVerifies = this.verifyTypePrefix();
            if (typePrefixVerifies) {
                context.addTypePrefix(this.typePrefix);
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${typePrefixDeclarationString}' type prefix declaration because types have already been declared.`);
        }
        if (verifies) {
            context.debug(`...verified the '${typePrefixDeclarationString}' type prefix declaration.`);
        }
        return verifies;
    }
    verifyTypePrefix() {
        let typePrefixVerifies = false;
        const context = this.getContext(), typePrefixString = this.typePrefix.getString();
        context.trace(`Verifying the '${typePrefixString}' type prefix...`);
        const typePrefix = context.getTypePrefix();
        if (typePrefix !== null) {
            context.trace(`The package already has a '${typePrefixString}' type prefix.`);
        } else {
            const typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            if (typePrefixPresent) {
                context.debug(`The '${typePrefixString}' type prefix is already present.`);
            } else {
                const nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    context.debug(`The '${typePrefixString}' type is already present.`);
                } else {
                    typePrefixVerifies = true;
                }
            }
        }
        if (typePrefixVerifies) {
            context.debug(`...verified the '${typePrefixString}' type prefix.`);
        }
        return typePrefixVerifies;
    }
    static name = "TypePrefixDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlUHJlZml4KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVzID0gY29udGV4dC5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFR5cGVQcmVmaXgodGhpcy50eXBlUHJlZml4KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMudHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLnR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwidHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlcyIsImdldFR5cGVzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwiYWRkVHlwZVByZWZpeCIsImRlYnVnIiwidHlwZVByZWZpeFN0cmluZyIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNuRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsQ0FBRTtRQUN4RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSwrQkFBK0I7UUFDN0IsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLDRCQUE0Qk4sTUFBTSxHQUFHO1FBRTNDLE9BQU9NO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUMsV0FBVztRQUVmLE1BQU1WLFVBQVUsSUFBSSxDQUFDVyxVQUFVO1FBRS9CLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNaO1FBRWpCLE1BQU1hLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw0QkFBNEIsQ0FBQztRQUV6RixNQUFNRyxRQUFRaEIsUUFBUWlCLFFBQVEsSUFDeEJDLGNBQWNGLE1BQU1HLE1BQU07UUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7WUFDckIsTUFBTUUscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCO1lBRWhELElBQUlELG9CQUFvQjtnQkFDdEJwQixRQUFRc0IsYUFBYSxDQUFDLElBQUksQ0FBQ2xCLFVBQVU7Z0JBRXJDTSxXQUFXO1lBQ2I7UUFDRixPQUFPO1lBQ0xWLFFBQVF1QixLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRVYsNEJBQTRCLG1FQUFtRSxDQUFDO1FBQ3pJO1FBRUEsSUFBSUgsVUFBVTtZQUNaVixRQUFRdUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVWLDRCQUE0QiwwQkFBMEIsQ0FBQztRQUMzRjtRQUVBLE9BQU9IO0lBQ1Q7SUFFQVcsbUJBQW1CO1FBQ2pCLElBQUlELHFCQUFxQjtRQUV6QixNQUFNcEIsVUFBVSxJQUFJLENBQUNXLFVBQVUsSUFDekJhLG1CQUFtQixJQUFJLENBQUNwQixVQUFVLENBQUNVLFNBQVM7UUFFbERkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRVMsaUJBQWlCLGdCQUFnQixDQUFDO1FBRWxFLE1BQU1wQixhQUFhSixRQUFRSyxhQUFhO1FBRXhDLElBQUlELGVBQWUsTUFBTTtZQUN2QkosUUFBUWUsS0FBSyxDQUFDLENBQUMsMkJBQTJCLEVBQUVTLGlCQUFpQixjQUFjLENBQUM7UUFDOUUsT0FBTztZQUVMLE1BQU1DLGlCQUFpQixJQUFJLENBQUNyQixVQUFVLENBQUNzQixPQUFPLElBQ3hDQyxvQkFBb0IzQixRQUFRNEIsbUNBQW1DLENBQUNIO1lBRXRFLElBQUlFLG1CQUFtQjtnQkFDckIzQixRQUFRdUIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFQyxpQkFBaUIsaUNBQWlDLENBQUM7WUFDM0UsT0FBTztnQkFDTCxNQUFNSyxrQkFBa0JKLGdCQUNsQkssY0FBYzlCLFFBQVErQiw4QkFBOEIsQ0FBQ0Y7Z0JBRTNELElBQUlDLGFBQWE7b0JBQ2Y5QixRQUFRdUIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFQyxpQkFBaUIsMEJBQTBCLENBQUM7Z0JBQ3BFLE9BQU87b0JBQ0xKLHFCQUFxQjtnQkFDdkI7WUFDRjtRQUNGO1FBRUEsSUFBSUEsb0JBQW9CO1lBQ3RCcEIsUUFBUXVCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFQyxpQkFBaUIsY0FBYyxDQUFDO1FBQ3BFO1FBRUEsT0FBT0o7SUFDVDtJQUVBLE9BQU9ZLE9BQU8sd0JBQXdCO0FBQ3hDIn0=