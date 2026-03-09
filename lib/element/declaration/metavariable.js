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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhVHlwZSgpO1xuXG4gICAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGFUeXBlKCkge1xuICAgIGxldCBtZXRhVHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IHRoaXMubWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLi4uYCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgIGlmIChtZXRhVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhVHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YVR5cGVWZXJpZmllcyIsInZlcmlmeU1ldGFUeXBlIiwiYWRkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0NBQWdDQyxvQkFBVztJQUNyRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksQ0FB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