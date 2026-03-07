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
            const metavariableTypeVerified = this.verifyMetavariableType();
            if (metavariableTypeVerified) {
                this.metavariable.setMetaType(this.metaType);
                context.addMetavariable(this.metavariable);
                verifies = true;
            }
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
        if (termNode === null) {
            const metavariableName = this.metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
            if (!metavariablePresent) {
                metavariableVerifies = true;
            } else {
                context.debug(`The '${metavariableName}' metavariable is already present.`);
            }
        } else {
            context.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
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
            if (type === null) {
                this.metavariable.setType(type);
                metavariableTypeVerified = true;
            } else {
                context.debug(`The '${metavariableTypeString}' type is not present.`);
            }
            if (metavariableTypeVerified) {
                context.debug(`...verified the '${metavariableDeclarationString}' metavariable declaration's '${metavariableTypeString}' metavariable type.`);
            }
        }
        return metavariableTypeVerified;
    }
    static name = "MetavariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZVR5cGUoKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQSB0ZXJtIHdhcyBmb3VuZCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVHlwZSA9PT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVHlwZVN0cmluZyA9IG1ldGF2YXJpYWJsZVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlVHlwZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IG1ldGF2YXJpYWJsZVR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWV0YXZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlVHlwZSIsInNldE1ldGFUeXBlIiwiYWRkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsIm1ldGF2YXJpYWJsZVR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5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