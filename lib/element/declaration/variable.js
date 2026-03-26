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
const _default = (0, _elements.define)(class VariableDeclaration extends _declaration.default {
    constructor(context, string, node, type, variable, provisional){
        super(context, string, node);
        this.type = type;
        this.variable = variable;
        this.provisional = provisional;
    }
    getType() {
        return this.type;
    }
    getVariable() {
        return this.variable;
    }
    isProvisional() {
        return this.provisional;
    }
    getVariableDeclarationNode() {
        const node = this.getNode(), variableDeclarationNode = node; ///
        return variableDeclarationNode;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const variableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);
        const typeVerifies = this.verifyType();
        if (typeVerifies) {
            const variableVerifies = this.verifyVariable();
            if (variableVerifies) {
                const declaredVariable = this.variable;
                context.addDeclaredVariable(declaredVariable);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
        }
        return verifies;
    }
    verifyType() {
        let typeVerifies = false;
        const context = this.getContext(), typeString = this.type.getString(), variableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${variableDeclarationString}' variable declaration's '${typeString}' type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
        if (!typePresent) {
            context.debug(`The '${typeString}' type is not present.`);
        } else {
            const typeComparesToProvisional = type.compareProvisional(this.provisional);
            if (!typeComparesToProvisional) {
                this.provisional ? context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but not provisional.`) : context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but provisional.`);
            } else {
                this.variable.setType(type);
                typeVerifies = true;
            }
        }
        if (typeVerifies) {
            context.debug(`...verified the '${variableDeclarationString}' variable declaration's '${typeString}' type.`);
        }
        return typeVerifies;
    }
    verifyVariable() {
        let variableVerifies = false;
        const context = this.getContext(), variableString = this.variable.getString(), variableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${variableDeclarationString}' variable declaration's '${variableString}' variable...`);
        const variableIdentifier = this.variable.getIdentifier(), declaredVariablePresent = context.isDeclaredVariablePresentByVariableIdentifier(variableIdentifier);
        if (declaredVariablePresent) {
            context.debug(`The '${variableString}' declared variable is already present.`);
        } else {
            variableVerifies = true;
        }
        if (variableVerifies) {
            context.debug(`...verified the '${variableDeclarationString}' variable declaration's '${variableString}' variable.`);
        }
        return variableVerifies;
    }
    static name = "VariableDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMudmFyaWFibGU7XG5cbiAgICAgICAgY29udGV4dC5hZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbCh0aGlzLnByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHRoaXMucHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZSgpIHtcbiAgICBsZXQgIHZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZFZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAoZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIGRlY2xhcmVkIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInZhcmlhYmxlIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiZ2V0VmFyaWFibGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJ2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5VmFyaWFibGUiLCJkZWNsYXJlZFZhcmlhYmxlIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImRlYnVnIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQiLCJpc0RlY2xhcmVkVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlk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