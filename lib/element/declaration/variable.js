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
                this.variable.setProvisional(this.provisional);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHZhcmlhYmxlLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmVkVmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMucHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzRGVjbGFyZWRWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKGRlY2xhcmVkVmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyBkZWNsYXJlZCB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJ2YXJpYWJsZSIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldFZhcmlhYmxlIiwiaXNQcm92aXNpb25hbCIsImdldFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJ2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5VmFyaWFibGUiLCJkZWNsYXJlZFZhcmlhYmxlIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImRlYnVnIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwidHlwZVN0cmluZyIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwic2V0UHJvdmlzaW9uYWwiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJkZWNsYXJlZFZhcmlhYmxlUHJlc2VudCIsImlzRGVjbGFyZWRWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsNEJBQTRCQyxvQkFBVztJQUNqRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLENBQUU7UUFDekUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUksNkJBQTZCO1FBQzNCLE1BQU1SLE9BQU8sSUFBSSxDQUFDUyxPQUFPLElBQ25CQywwQkFBMEJWLE1BQU0sR0FBRztRQUV6QyxPQUFPVTtJQUNUO0lBRUEsTUFBTUMsT0FBT2IsT0FBTyxFQUFFO1FBQ3BCLElBQUljLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDZjtRQUVqQixNQUFNZ0IsNEJBQTRCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdkRqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiwwQkFBMEIseUJBQXlCLENBQUM7UUFFcEYsTUFBTUcsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ3BCO1FBRXJDLElBQUltQixjQUFjO1lBQ2hCLE1BQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ3RCO1lBRTdDLElBQUlxQixrQkFBa0I7Z0JBQ3BCLE1BQU1FLG1CQUFtQixJQUFJLENBQUNsQixRQUFRO2dCQUV0Q0wsUUFBUXdCLG1CQUFtQixDQUFDRDtnQkFFNUJULFdBQVc7WUFDYjtRQUNGO1FBRUEsSUFBSUEsVUFBVTtZQUNaZCxRQUFReUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDBCQUEwQix1QkFBdUIsQ0FBQztRQUN0RjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQU0sV0FBV3BCLE9BQU8sRUFBRTtRQUNsQixJQUFJbUIsZUFBZTtRQUVuQixNQUFNSCw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV2RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDBCQUEwQixnQ0FBZ0MsQ0FBQztRQUUzRixNQUFNVSxrQkFBa0IsSUFBSSxDQUFDdEIsSUFBSSxDQUFDdUIsa0JBQWtCLElBQzlDdkIsT0FBT0osUUFBUTRCLHlCQUF5QixDQUFDRixrQkFDekNHLGNBQWV6QixTQUFTO1FBRTlCLElBQUksQ0FBQ3lCLGFBQWE7WUFDaEIsTUFBTUMsYUFBYSxJQUFJLENBQUMxQixJQUFJLENBQUNhLFNBQVM7WUFFdENqQixRQUFReUIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFSyxXQUFXLHNCQUFzQixDQUFDO1FBQzFELE9BQU87WUFDTCxNQUFNQyw0QkFBNEIzQixLQUFLNEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDMUIsV0FBVztZQUUxRSxJQUFJLENBQUN5QiwyQkFBMkI7Z0JBQzlCLE1BQU1ELGFBQWEsSUFBSSxDQUFDMUIsSUFBSSxDQUFDYSxTQUFTO2dCQUV0QyxJQUFJLENBQUNYLFdBQVcsR0FDZE4sUUFBUXlCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVQsMEJBQTBCLDBCQUEwQixFQUFFYyxXQUFXLHNDQUFzQyxDQUFDLElBQzVIOUIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVQsMEJBQTBCLDBCQUEwQixFQUFFYyxXQUFXLGtDQUFrQyxDQUFDO1lBQ2hJLE9BQU87Z0JBQ0wsSUFBSSxDQUFDekIsUUFBUSxDQUFDNEIsT0FBTyxDQUFDN0I7Z0JBRXRCLElBQUksQ0FBQ0MsUUFBUSxDQUFDNkIsY0FBYyxDQUFDLElBQUksQ0FBQzVCLFdBQVc7Z0JBRTdDYSxlQUFlO1lBQ2pCO1FBQ0Y7UUFFQSxJQUFJQSxjQUFjO1lBQ2hCbkIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVCwwQkFBMEIsOEJBQThCLENBQUM7UUFDN0Y7UUFFQSxPQUFPRztJQUNUO0lBRUFHLGVBQWV0QixPQUFPLEVBQUU7UUFDdEIsSUFBS3FCLG1CQUFtQjtRQUV4QixNQUFNYyxpQkFBaUIsSUFBSSxDQUFDOUIsUUFBUSxDQUFDWSxTQUFTLElBQ3hDRCw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV2RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDBCQUEwQiwwQkFBMEIsRUFBRW1CLGVBQWUsYUFBYSxDQUFDO1FBRW5ILE1BQU1DLHFCQUFxQixJQUFJLENBQUMvQixRQUFRLENBQUNnQyxhQUFhLElBQ2hEQywwQkFBMEJ0QyxRQUFRdUMsNkNBQTZDLENBQUNIO1FBRXRGLElBQUlFLHlCQUF5QjtZQUMzQnRDLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVVLGVBQWUsdUNBQXVDLENBQUM7UUFDL0UsT0FBTztZQUNMZCxtQkFBbUI7UUFDckI7UUFFQSxJQUFJQSxrQkFBa0I7WUFDcEJyQixRQUFReUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULDBCQUEwQiwwQkFBMEIsRUFBRW1CLGVBQWUsV0FBVyxDQUFDO1FBQ3JIO1FBRUEsT0FBT2Q7SUFDVDtJQUVBLE9BQU9tQixPQUFPLHNCQUFzQjtBQUN0QyJ9