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
    constructor(context, string, node, typePrefix){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZXMgPSBjb250ZXh0LmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24gYmVjYXVzZSB0eXBlcyBoYXZlIGFscmVhZHkgYmVlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgcGFja2FnZSBhbHJlYWR5IGhhcyBhICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVzIiwiZ2V0VHlwZXMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJhZGRUeXBlUHJlZml4IiwiZGVidWciLCJ0eXBlUHJlZml4U3RyaW5nIiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLG9CQUFXO0lBQ25FLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM3QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSwrQkFBK0I7UUFDN0IsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLDRCQUE0QkwsTUFBTSxHQUFHO1FBRTNDLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUMsV0FBVztRQUVmLE1BQU1ULFVBQVUsSUFBSSxDQUFDVSxVQUFVO1FBRS9CLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNYO1FBRWpCLE1BQU1ZLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw0QkFBNEIsQ0FBQztRQUV6RixNQUFNRyxRQUFRZixRQUFRZ0IsUUFBUSxJQUN4QkMsY0FBY0YsTUFBTUcsTUFBTTtRQUVoQyxJQUFJRCxnQkFBZ0IsR0FBRztZQUNyQixNQUFNRSxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0I7WUFFaEQsSUFBSUQsb0JBQW9CO2dCQUN0Qm5CLFFBQVFxQixhQUFhLENBQUMsSUFBSSxDQUFDbEIsVUFBVTtnQkFFckNNLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTFQsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFFViw0QkFBNEIsbUVBQW1FLENBQUM7UUFDekk7UUFFQSxJQUFJSCxVQUFVO1lBQ1pULFFBQVFzQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVYsNEJBQTRCLDBCQUEwQixDQUFDO1FBQzNGO1FBRUEsT0FBT0g7SUFDVDtJQUVBVyxtQkFBbUI7UUFDakIsSUFBSUQscUJBQXFCO1FBRXpCLE1BQU1uQixVQUFVLElBQUksQ0FBQ1UsVUFBVSxJQUN6QmEsbUJBQW1CLElBQUksQ0FBQ3BCLFVBQVUsQ0FBQ1UsU0FBUztRQUVsRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFUyxpQkFBaUIsZ0JBQWdCLENBQUM7UUFFbEUsTUFBTXBCLGFBQWFILFFBQVFJLGFBQWE7UUFFeEMsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCSCxRQUFRYyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRVMsaUJBQWlCLGNBQWMsQ0FBQztRQUM5RSxPQUFPO1lBRUwsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLE9BQU8sSUFDeENDLG9CQUFvQjFCLFFBQVEyQixtQ0FBbUMsQ0FBQ0g7WUFFdEUsSUFBSUUsbUJBQW1CO2dCQUNyQjFCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVDLGlCQUFpQixpQ0FBaUMsQ0FBQztZQUMzRSxPQUFPO2dCQUNMLE1BQU1LLGtCQUFrQkosZ0JBQ2xCSyxjQUFjN0IsUUFBUThCLDhCQUE4QixDQUFDRjtnQkFFM0QsSUFBSUMsYUFBYTtvQkFDZjdCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVDLGlCQUFpQiwwQkFBMEIsQ0FBQztnQkFDcEUsT0FBTztvQkFDTEoscUJBQXFCO2dCQUN2QjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSxvQkFBb0I7WUFDdEJuQixRQUFRc0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVDLGlCQUFpQixjQUFjLENBQUM7UUFDcEU7UUFFQSxPQUFPSjtJQUNUO0lBRUEsT0FBT1ksT0FBTyx3QkFBd0I7QUFDeEMifQ==