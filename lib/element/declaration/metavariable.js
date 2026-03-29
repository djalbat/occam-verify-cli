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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3QgbWV0YVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YVR5cGUoKTtcblxuICAgICAgaWYgKG1ldGFUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGFUeXBlKCkge1xuICAgIGxldCBtZXRhVHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IHRoaXMubWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhVHlwZS4uLmApO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUodGhpcy5tZXRhVHlwZSk7XG5cbiAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIWRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgZGVjbGFyZWQgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm1ldGFUeXBlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhVHlwZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZyIsInNldE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlh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