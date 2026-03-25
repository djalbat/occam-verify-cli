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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMudmFyaWFibGU7XG5cbiAgICAgICAgY29udGV4dC5hZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbClcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgdGhpcy5wcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidmFyaWFibGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRWYXJpYWJsZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZSIsImRlY2xhcmVkVmFyaWFibGUiLCJhZGREZWNsYXJlZFZhcmlhYmxlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsInNldFR5cGUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7Oztl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