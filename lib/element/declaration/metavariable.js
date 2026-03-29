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
        const metaTypeString = this.metaType.getString(), metaTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType...`);
        this.metavariable.setMetaType(this.metaType);
        if (metaTypeVerifies) {
            context.debug(`...verified the '${metaTypeDeclarationString}' metavariable declaration's '${metaTypeString}' metaType.`);
        }
        return metaTypeVerifies;
    }
    verifyMetavariable(context) {
        let metavariableVerifies = false;
        const metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGFUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVR5cGVWZXJpZmllcyA9IHRydWU7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IHRoaXMubWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhVHlwZS4uLmApO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUodGhpcy5tZXRhVHlwZSk7XG5cbiAgICBpZiAobWV0YVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGFUeXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIWRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLm1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgZGVjbGFyZWQgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm1ldGFUeXBlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YVR5cGVWZXJpZmllcyIsInZlcmlmeU1ldGFUeXBlIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGREZWNsYXJlZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZURlY2xhcmF0aW9uU3RyaW5nIiwic2V0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FB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