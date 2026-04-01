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
    constructor(context, string, node, lineIndex, type, variable, provisional){
        super(context, string, node, lineIndex);
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
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const variableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);
        const typeVerifies = this.verifyType(context);
        if (typeVerifies) {
            const variableVerifies = this.verifyVariable(context);
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
    verifyType(context) {
        let typeVerifies = false;
        const variableDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${variableDeclarationString}' variable declaration's type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
        if (!typePresent) {
            const typeString = this.type.getString();
            context.debug(`The '${typeString}' type is not present.`);
        } else {
            const typeComparesToProvisional = type.compareProvisional(this.provisional);
            if (!typeComparesToProvisional) {
                const typeString = this.type.getString();
                this.provisional ? context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but not provisional.`) : context.debug(`The '${variableDeclarationString}' variable declaration's '${typeString}' type is present but provisional.`);
            } else {
                this.variable.setType(type);
                typeVerifies = true;
            }
        }
        if (typeVerifies) {
            context.debug(`...verified the '${variableDeclarationString}' variable declaration's type.`);
        }
        return typeVerifies;
    }
    verifyVariable(context) {
        let variableVerifies = false;
        const variableString = this.variable.getString(), variableDeclarationString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmVkVmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMucHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgIHZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgZGVjbGFyZWQgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwidmFyaWFibGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRWYXJpYWJsZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwidmFyaWFibGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlIiwiZGVjbGFyZWRWYXJpYWJsZSIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJkZWJ1ZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsInR5cGVTdHJpbmciLCJ0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwic2V0VHlwZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImRlY2xhcmVkVmFyaWFibGVQcmVzZW50IiwiaXNEZWNsYXJlZFZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JB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