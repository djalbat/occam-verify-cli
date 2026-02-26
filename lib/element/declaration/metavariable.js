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
            context.addMetavariable(this.metavariable);
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration.`);
        }
        return verifies;
    }
    verifyMetavariable() {
        let metavariableVerifies = false;
        const context = this.getContext(), metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable...`);
        const metavariableNode = this.metavariable.getNode(), termNode = metavariableNode.getTermNode();
        if (termNode !== null) {
            context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
        } else {
            const metavariableName = this.metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
            if (metavariablePresent) {
                context.debug(`The '${metavariableName}' metavariable is already present.`);
            } else {
                const metavariableTypeVerified = this.verifyMetavariableType();
                if (metavariableTypeVerified) {
                    this.metavariable.setMetaType(this.metaType);
                    metavariableVerifies = true;
                }
            }
        }
        if (metavariableVerifies) {
            context.debug(`...verified the '${metavariableDeclarationString}' variable declaration's '${metavariableString}' metavariable.`);
        }
        return metavariableVerifies;
    }
    verifyMetavariableType() {
        let metavariableTypeVerified = false;
        const context = this.getContext(), metavariableType = this.metavariable.getType();
        if (metavariableType === null) {
            metavariableTypeVerified = true;
        } else {
            const metavariableTypeString = metavariableType.getString(), metavariableDeclarationString = this.getString(); ///
            context.trace(`Verifying the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type...`);
            const nominalTypeName = metavariableType.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                context.debug(`The '${metavariableTypeString}' type is not present.`);
            } else {
                this.metavariable.setType(type);
                metavariableTypeVerified = true;
            }
            if (metavariableTypeVerified) {
                context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type.`);
            }
        }
        return metavariableTypeVerified;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlVHlwZSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVUeXBlID09PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVUeXBlU3RyaW5nID0gbWV0YXZhcmlhYmxlVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gbWV0YXZhcmlhYmxlVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVR5cGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhVHlwZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZVR5cGUiLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwibWV0YXZhcmlhYmxlVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJm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