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
    verifyMetaType() {
        let metaTypeVerifies = true;
        const context = this.getContext(), metaTypeString = this.metaType.getString(), metaTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType...`);
        this.metavariable.setMetaType(this.metaType);
        if (metaTypeVerifies) {
            context.debug(`...verified the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType.`);
        }
        return metaTypeVerifies;
    }
    verifyMetavariable() {
        let metavariableVerifies = false;
        const context = this.getContext(), metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration's '${metavariableString}' metavariable...`);
        const metavariableName = this.metavariable.getName(), declaredMetavariablePresent = context.isDeclaredMetavariablePresentByMetavariableName(metavariableName);
        if (!declaredMetavariablePresent) {
            metavariableVerifies = this.metavariable.verify(context);
        } else {
            context.debug(`The '${metavariableName}' declared metavariable is already present.`);
        }
        if (metavariableVerifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableString}' metavariable.`);
        }
        return metavariableVerifies;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhVHlwZSgpO1xuXG4gICAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YVR5cGUoKSB7XG4gICAgbGV0IG1ldGFUeXBlVmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gdGhpcy5tZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLi4uYCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgIGlmIChtZXRhVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YVR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMubWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBkZWNsYXJlZCBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YVR5cGVWZXJpZmllcyIsInZlcmlmeU1ldGFUeXBlIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGREZWNsYXJlZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nIiwic2V0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibmFt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