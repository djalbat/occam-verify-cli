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
const _verify = require("../../process/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class MetavariableDeclaration extends _declaration.default {
    constructor(context, string, node, metaType, metavariable){
        super(context, string, node);
        this.metaType = metaType;
        this.metavariable = metavariable;
    }
    getMetaType() {
        return this.metaType;
    }
    getMetavariable() {
        return this.metavariable;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);
        const metavariableVerifies = this.verifyMetavariable();
        if (metavariableVerifies) {
            const metaTypeVerifies = this.verifyMetaType();
            if (metaTypeVerifies) {
                context.addMetavariable(this.metavariable);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
        }
        return verifies;
    }
    verifyMetaType() {
        let metaTypeVerifies = true;
        const context = this.getContext(), metaTypeString = this.metaType.getString(), metaTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metaTypeDeclarationString}' variable declaration's '${metaTypeString}' metaType...`);
        this.metavariable.setMetaType(this.metaType);
        if (metaTypeVerifies) {
            context.debug(`...verified the '${metaTypeDeclarationString}' variable declaration's '${metaTypeString}' metaType.`);
        }
        return metaTypeVerifies;
    }
    verifyMetavariable() {
        let metavariableVerifies = false;
        const context = this.getContext(), metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable...`);
        const metavariableName = this.metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
        if (!metavariablePresent) {
            metavariableVerifies = this.metavariable.verify(context);
        } else {
            context.debug(`The '${metavariableName}' metavariable is already present.`);
        }
        if (metavariableVerifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable.`);
        }
        return metavariableVerifies;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZlcmlmeU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGFUeXBlKCk7XG5cbiAgICAgIGlmIChtZXRhVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YVR5cGUoKSB7XG4gICAgbGV0IG1ldGFUeXBlVmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gdGhpcy5tZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YVR5cGUuLi5gKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlLnNldE1ldGFUeXBlKHRoaXMubWV0YVR5cGUpO1xuXG4gICAgaWYgKG1ldGFUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJtZXRhVHlwZVZlcmlmaWVzIiwidmVyaWZ5TWV0YVR5cGUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZyIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7b0VBTHdCOzBCQUVEO3dCQUNZOzs7Ozs7TUFFbkMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQ0FBZ0NDLG9CQUFXO0lBQ3JFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtJQUN0QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO0lBQzFCO0lBRUEsTUFBTUcsU0FBUztRQUNiLElBQUlDO1FBRUosTUFBTVIsVUFBVSxJQUFJLENBQUNTLFVBQVU7UUFFL0IsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1Y7UUFFakIsTUFBTVcsZ0NBQWdDLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFM0RaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsOEJBQThCLDZCQUE2QixDQUFDO1FBRTVGLE1BQU1HLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQjtRQUVwRCxJQUFJRCxzQkFBc0I7WUFDeEIsTUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYztZQUU1QyxJQUFJRCxrQkFBa0I7Z0JBQ3BCaEIsUUFBUWtCLGVBQWUsQ0FBQyxJQUFJLENBQUNkLFlBQVk7Z0JBRXpDSSxXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUlBLFVBQVU7WUFDWlIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFUiw4QkFBOEIsMkJBQTJCLENBQUM7UUFDOUY7UUFFQSxPQUFPSDtJQUNUO0lBRUFTLGlCQUFpQjtRQUNmLElBQUlELG1CQUFtQjtRQUV2QixNQUFNaEIsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJXLGlCQUFpQixJQUFJLENBQUNqQixRQUFRLENBQUNTLFNBQVMsSUFDeENTLDRCQUE0QixJQUFJLENBQUNULFNBQVMsSUFBSSxHQUFHO1FBRXZEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVRLDBCQUEwQiwwQkFBMEIsRUFBRUQsZUFBZSxhQUFhLENBQUM7UUFFbkgsSUFBSSxDQUFDaEIsWUFBWSxDQUFDa0IsV0FBVyxDQUFDLElBQUksQ0FBQ25CLFFBQVE7UUFFM0MsSUFBSWEsa0JBQWtCO1lBQ3BCaEIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRSwwQkFBMEIsMEJBQTBCLEVBQUVELGVBQWUsV0FBVyxDQUFDO1FBQ3JIO1FBRUEsT0FBT0o7SUFDVDtJQUVBRCxxQkFBcUI7UUFDbkIsSUFBSUQsdUJBQXVCO1FBRTNCLE1BQU1kLFVBQVUsSUFBSSxDQUFDUyxVQUFVLElBQ3pCYyxxQkFBcUIsSUFBSSxDQUFDbkIsWUFBWSxDQUFDUSxTQUFTLElBQ2hERCxnQ0FBZ0MsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUzRFosUUFBUWEsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw4QkFBOEIsMEJBQTBCLEVBQUVZLG1CQUFtQixpQkFBaUIsQ0FBQztRQUUvSCxNQUFNQyxtQkFBbUIsSUFBSSxDQUFDcEIsWUFBWSxDQUFDcUIsT0FBTyxJQUM1Q0Msc0JBQXNCMUIsUUFBUTJCLHVDQUF1QyxDQUFDSDtRQUU1RSxJQUFJLENBQUNFLHFCQUFxQjtZQUN4QlosdUJBQXVCLElBQUksQ0FBQ1YsWUFBWSxDQUFDRyxNQUFNLENBQUNQO1FBQ2xELE9BQU87WUFDTEEsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUssaUJBQWlCLGtDQUFrQyxDQUFDO1FBQzVFO1FBRUEsSUFBSVYsc0JBQXNCO1lBQ3hCZCxRQUFRbUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVSLDhCQUE4QiwwQkFBMEIsRUFBRVksbUJBQW1CLGVBQWUsQ0FBQztRQUNqSTtRQUVBLE9BQU9UO0lBQ1Q7SUFFQSxPQUFPYyxPQUFPLDBCQUEwQjtBQUMxQyJ9