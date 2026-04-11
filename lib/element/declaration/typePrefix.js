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
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const typePrefixDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${typePrefixDeclarationString}' type prefix declaration...`);
        const includeRelease = false, types = context.getTypes(includeRelease), typesLength = types.length;
        if (typesLength === 0) {
            const typePrefixVerifies = this.typePrefix.verify(context);
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
    static name = "TypePrefixDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlUHJlZml4KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVzID0gY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSksXG4gICAgICAgICAgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudHlwZVByZWZpeC52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5hZGRUeXBlUHJlZml4KHRoaXMudHlwZVByZWZpeCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbiBiZWNhdXNlIHR5cGVzIGhhdmUgYWxyZWFkeSBiZWVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImluY2x1ZGVSZWxlYXNlIiwidHlwZXMiLCJnZXRUeXBlcyIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwidHlwZVByZWZpeFZlcmlmaWVzIiwiYWRkVHlwZVByZWZpeCIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLG9CQUFXO0lBQ25FLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLCtCQUErQjtRQUM3QixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsNEJBQTRCTixNQUFNLEdBQUc7UUFFM0MsT0FBT007SUFDVDtJQUVBLE1BQU1DLE9BQU9ULE9BQU8sRUFBRTtRQUNwQixJQUFJVSxXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1g7UUFFakIsTUFBTVksOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURiLFFBQVFjLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDRCQUE0QixDQUFDO1FBRXpGLE1BQU1HLGlCQUFpQixPQUNqQkMsUUFBUWhCLFFBQVFpQixRQUFRLENBQUNGLGlCQUN6QkcsY0FBY0YsTUFBTUcsTUFBTTtRQUVoQyxJQUFJRCxnQkFBZ0IsR0FBRztZQUNyQixNQUFNRSxxQkFBcUIsSUFBSSxDQUFDaEIsVUFBVSxDQUFDSyxNQUFNLENBQUNUO1lBRWxELElBQUlvQixvQkFBb0I7Z0JBQ3RCcEIsUUFBUXFCLGFBQWEsQ0FBQyxJQUFJLENBQUNqQixVQUFVO2dCQUVyQ00sV0FBVztZQUNiO1FBQ0YsT0FBTztZQUNMVixRQUFRc0IsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEVBQUVWLDRCQUE0QixtRUFBbUUsQ0FBQztRQUN6STtRQUVBLElBQUlGLFVBQVU7WUFDWlYsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFViw0QkFBNEIsMEJBQTBCLENBQUM7UUFDM0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT2EsT0FBTyx3QkFBd0I7QUFDeEMifQ==