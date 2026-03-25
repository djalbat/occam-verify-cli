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
        const context = this.getContext();
        const typeString = this.type.getString(), variableDeclarationString = this.getString(); ///
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
        const variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
        if (variablePresent) {
            context.debug(`The '${variableString}' variable is already present.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMudmFyaWFibGU7XG5cbiAgICAgICBjb250ZXh0LmFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICB0aGlzLnByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJ2YXJpYWJsZSIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldFZhcmlhYmxlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwidmFyaWFibGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlIiwiZGVjbGFyZWRWYXJpYWJsZSIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJ0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwic2V0VHlwZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VB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