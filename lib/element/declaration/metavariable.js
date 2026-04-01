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
    constructor(context, string, node, lineIndex, metaType, metavariable){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGFUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVR5cGVWZXJpZmllcyA9IHRydWU7XG5cbiAgICBjb25zdCBtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyBtZXRhVHlwZS4uLmApO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUodGhpcy5tZXRhVHlwZSk7XG5cbiAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyBtZXRhVHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCFkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIGRlY2xhcmVkIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJtZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhVHlwZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdDQUFnQ0Msb0JBQVc7SUFDckUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksQ0FBRTtRQUNwRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBLE1BQU1HLE9BQU9SLE9BQU8sRUFBRTtRQUNwQixJQUFJUztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGdDQUFnQyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDhCQUE4Qiw2QkFBNkIsQ0FBQztRQUU1RixNQUFNRyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2Y7UUFFckQsSUFBSWMsc0JBQXNCO1lBQ3hCLE1BQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ2pCO1lBRTdDLElBQUlnQixrQkFBa0I7Z0JBQ3BCLE1BQU1FLHVCQUF1QixJQUFJLENBQUNiLFlBQVksRUFBRSxHQUFHO2dCQUVuREwsUUFBUW1CLHVCQUF1QixDQUFDRDtnQkFFaENULFdBQVc7WUFDYjtRQUNGO1FBRUEsSUFBSUEsVUFBVTtZQUNaVCxRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDhCQUE4QiwyQkFBMkIsQ0FBQztRQUM5RjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQVEsZUFBZWpCLE9BQU8sRUFBRTtRQUN0QixJQUFJZ0IsbUJBQW1CO1FBRXZCLE1BQU1LLDRCQUE0QixJQUFJLENBQUNULFNBQVMsSUFBSSxHQUFHO1FBRXZEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVRLDBCQUEwQix3Q0FBd0MsQ0FBQztRQUVuRyxJQUFJLENBQUNoQixZQUFZLENBQUNpQixXQUFXLENBQUMsSUFBSSxDQUFDbEIsUUFBUTtRQUUzQyxJQUFJWSxrQkFBa0I7WUFDcEJoQixRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVDLDBCQUEwQixzQ0FBc0MsQ0FBQztRQUNyRztRQUVBLE9BQU9MO0lBQ1Q7SUFFQUQsbUJBQW1CZixPQUFPLEVBQUU7UUFDMUIsSUFBSWMsdUJBQXVCO1FBRTNCLE1BQU1ILGdDQUFnQyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDhCQUE4Qiw0Q0FBNEMsQ0FBQztRQUUzRyxNQUFNWSxtQkFBbUIsSUFBSSxDQUFDbEIsWUFBWSxDQUFDbUIsT0FBTyxJQUM1Q0MsOEJBQThCekIsUUFBUTBCLCtDQUErQyxDQUFDSDtRQUU1RixJQUFJLENBQUNFLDZCQUE2QjtZQUNoQ1gsdUJBQXVCLElBQUksQ0FBQ1QsWUFBWSxDQUFDRyxNQUFNLENBQUNSO1FBQ2xELE9BQU87WUFDTEEsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUcsaUJBQWlCLDJDQUEyQyxDQUFDO1FBQ3JGO1FBRUEsSUFBSVQsc0JBQXNCO1lBQ3hCZCxRQUFRb0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDhCQUE4QiwwQ0FBMEMsQ0FBQztRQUM3RztRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPYSxPQUFPLDBCQUEwQjtBQUMxQyJ9