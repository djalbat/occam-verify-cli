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
        const types = context.getTypes(), typesLength = types.length;
        if (typesLength === 0) {
            const typePrefixVerifies = this.verifyTypePrefix(context);
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
    verifyTypePrefix(context) {
        let typePrefixVerifies = false;
        const typePrefixString = this.typePrefix.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlUHJlZml4KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlcyA9IGNvbnRleHQuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24gYmVjYXVzZSB0eXBlcyBoYXZlIGFscmVhZHkgYmVlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgcGFja2FnZSBhbHJlYWR5IGhhcyBhICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZXMiLCJnZXRUeXBlcyIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsImFkZFR5cGVQcmVmaXgiLCJkZWJ1ZyIsInR5cGVQcmVmaXhTdHJpbmciLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMsb0JBQVc7SUFDbkUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVLENBQUU7UUFDeEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsK0JBQStCO1FBQzdCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyw0QkFBNEJOLE1BQU0sR0FBRztRQUUzQyxPQUFPTTtJQUNUO0lBRUEsTUFBTUMsT0FBT1QsT0FBTyxFQUFFO1FBQ3BCLElBQUlVLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWDtRQUVqQixNQUFNWSw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsNEJBQTRCLENBQUM7UUFFekYsTUFBTUcsUUFBUWYsUUFBUWdCLFFBQVEsSUFDeEJDLGNBQWNGLE1BQU1HLE1BQU07UUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7WUFDckIsTUFBTUUscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNwQjtZQUVqRCxJQUFJbUIsb0JBQW9CO2dCQUN0Qm5CLFFBQVFxQixhQUFhLENBQUMsSUFBSSxDQUFDakIsVUFBVTtnQkFFckNNLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTFYsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFFViw0QkFBNEIsbUVBQW1FLENBQUM7UUFDekk7UUFFQSxJQUFJRixVQUFVO1lBQ1pWLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVYsNEJBQTRCLDBCQUEwQixDQUFDO1FBQzNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBVSxpQkFBaUJwQixPQUFPLEVBQUU7UUFDeEIsSUFBSW1CLHFCQUFxQjtRQUV6QixNQUFNSSxtQkFBbUIsSUFBSSxDQUFDbkIsVUFBVSxDQUFDUyxTQUFTO1FBRWxEYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVTLGlCQUFpQixnQkFBZ0IsQ0FBQztRQUVsRSxNQUFNbkIsYUFBYUosUUFBUUssYUFBYTtRQUV4QyxJQUFJRCxlQUFlLE1BQU07WUFDdkJKLFFBQVFjLEtBQUssQ0FBQyxDQUFDLDJCQUEyQixFQUFFUyxpQkFBaUIsY0FBYyxDQUFDO1FBQzlFLE9BQU87WUFFTCxNQUFNQyxpQkFBaUIsSUFBSSxDQUFDcEIsVUFBVSxDQUFDcUIsT0FBTyxJQUN4Q0Msb0JBQW9CMUIsUUFBUTJCLG1DQUFtQyxDQUFDSDtZQUV0RSxJQUFJRSxtQkFBbUI7Z0JBQ3JCMUIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUMsaUJBQWlCLGlDQUFpQyxDQUFDO1lBQzNFLE9BQU87Z0JBQ0wsTUFBTUssa0JBQWtCSixnQkFDbEJLLGNBQWM3QixRQUFROEIsOEJBQThCLENBQUNGO2dCQUUzRCxJQUFJQyxhQUFhO29CQUNmN0IsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUMsaUJBQWlCLDBCQUEwQixDQUFDO2dCQUNwRSxPQUFPO29CQUNMSixxQkFBcUI7Z0JBQ3ZCO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLG9CQUFvQjtZQUN0Qm5CLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUMsaUJBQWlCLGNBQWMsQ0FBQztRQUNwRTtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPWSxPQUFPLHdCQUF3QjtBQUN4QyJ9