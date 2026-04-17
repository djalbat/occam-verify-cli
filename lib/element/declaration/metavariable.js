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
const _default = (0, _elements.define)(class MetavariableDeclaration extends _declaration.default {
    constructor(context, string, node, breakPoint, metaType, metavariable){
        super(context, string, node, breakPoint);
        this.metaType = metaType;
        this.metavariable = metavariable;
    }
    getMetaType() {
        return this.metaType;
    }
    getMetavariable() {
        return this.metavariable;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration...`);
        const metavariableVerifies = this.verifyMetavariable(context);
        if (metavariableVerifies) {
            const metaTypeVerifies = this.verifyMetaType(context);
            if (metaTypeVerifies) {
                const declaredMetavariable = this.metavariable; ///
                context.addDeclaredMetavariable(declaredMetavariable);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
        }
        return verifies;
    }
    verifyMetaType(context) {
        let metaTypeVerifies = true;
        const metaTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metaTypeDeclarationString}' metavariable declaration's metaType...`);
        this.metavariable.setMetaType(this.metaType);
        if (metaTypeVerifies) {
            context.debug(`...verified the '${metaTypeDeclarationString}' metavariable declaration's metaType.`);
        }
        return metaTypeVerifies;
    }
    verifyMetavariable(context) {
        let metavariableVerifies = false;
        const metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration's metavariable...`);
        const metavariableName = this.metavariable.getName(), declaredMetavariablePresent = context.isDeclaredMetavariablePresentByMetavariableName(metavariableName);
        if (!declaredMetavariablePresent) {
            metavariableVerifies = this.metavariable.verify(context);
        } else {
            context.debug(`The '${metavariableName}' declared metavariable is already present.`);
        }
        if (metavariableVerifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's metavariable.`);
        }
        return metavariableVerifies;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGFUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YVR5cGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhVHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzIG1ldGFUeXBlLi4uYCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgIGlmIChtZXRhVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzIG1ldGFUeXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIWRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgZGVjbGFyZWQgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJtZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhVHlwZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdDQUFnQ0Msb0JBQVc7SUFDckUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksQ0FBRTtRQUNyRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBLE1BQU1HLE9BQU9SLE9BQU8sRUFBRTtRQUNwQixJQUFJUztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGdDQUFnQyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDhCQUE4Qiw2QkFBNkIsQ0FBQztRQUU1RixNQUFNRyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2Y7UUFFckQsSUFBSWMsc0JBQXNCO1lBQ3hCLE1BQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ2pCO1lBRTdDLElBQUlnQixrQkFBa0I7Z0JBQ3BCLE1BQU1FLHVCQUF1QixJQUFJLENBQUNiLFlBQVksRUFBRSxHQUFHO2dCQUVuREwsUUFBUW1CLHVCQUF1QixDQUFDRDtnQkFFaENULFdBQVc7WUFDYjtRQUNGO1FBRUEsSUFBSUEsVUFBVTtZQUNaVCxRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDhCQUE4QiwyQkFBMkIsQ0FBQztRQUM5RjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQVEsZUFBZWpCLE9BQU8sRUFBRTtRQUN0QixJQUFJZ0IsbUJBQW1CO1FBRXZCLE1BQU1LLDRCQUE0QixJQUFJLENBQUNULFNBQVMsSUFBSSxHQUFHO1FBRXZEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVRLDBCQUEwQix3Q0FBd0MsQ0FBQztRQUVuRyxJQUFJLENBQUNoQixZQUFZLENBQUNpQixXQUFXLENBQUMsSUFBSSxDQUFDbEIsUUFBUTtRQUUzQyxJQUFJWSxrQkFBa0I7WUFDcEJoQixRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVDLDBCQUEwQixzQ0FBc0MsQ0FBQztRQUNyRztRQUVBLE9BQU9MO0lBQ1Q7SUFFQUQsbUJBQW1CZixPQUFPLEVBQUU7UUFDMUIsSUFBSWMsdUJBQXVCO1FBRTNCLE1BQU1ILGdDQUFnQyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDhCQUE4Qiw0Q0FBNEMsQ0FBQztRQUUzRyxNQUFNWSxtQkFBbUIsSUFBSSxDQUFDbEIsWUFBWSxDQUFDbUIsT0FBTyxJQUM1Q0MsOEJBQThCekIsUUFBUTBCLCtDQUErQyxDQUFDSDtRQUU1RixJQUFJLENBQUNFLDZCQUE2QjtZQUNoQ1gsdUJBQXVCLElBQUksQ0FBQ1QsWUFBWSxDQUFDRyxNQUFNLENBQUNSO1FBQ2xELE9BQU87WUFDTEEsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUcsaUJBQWlCLDJDQUEyQyxDQUFDO1FBQ3JGO1FBRUEsSUFBSVQsc0JBQXNCO1lBQ3hCZCxRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDhCQUE4QiwwQ0FBMEMsQ0FBQztRQUM3RztRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPYSxPQUFPLDBCQUEwQjtBQUMxQyJ9