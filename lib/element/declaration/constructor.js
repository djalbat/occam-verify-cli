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
const _default = (0, _elements.define)(class ConstructorDeclaration extends _declaration.default {
    constructor(context, string, node, lineIndex, type, provisional, constructor){
        super(context, string, node, lineIndex);
        this.type = type;
        this.provisional = provisional;
        this.constructor = constructor;
    }
    getType() {
        return this.type;
    }
    isProvisional() {
        return this.provisional;
    }
    getConstructor() {
        return this.constructor;
    }
    getConstructorDeclarationNode() {
        const node = this.getNode(), constructorDeclarationNode = node; ///
        return constructorDeclarationNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const constructorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);
        const typeVerified = this.verifyType(context);
        if (typeVerified) {
            const constructorValidates = this.validateConstructor(context);
            if (constructorValidates) {
                this.constructor.setType(this.type);
                context.addConstructor(this.constructor);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
        }
        return verifies;
    }
    verifyType(context) {
        let typeVerifies = false;
        const typeString = this.type.getString(), constructorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${typeString}' type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
        if (type !== null) {
            const provisional = this.isProvisional(), typeComparesToProvisional = type.compareProvisional(provisional);
            if (!typeComparesToProvisional) {
                provisional ? context.debug(`The '${typeString}' type is present but not provisional.`) : context.debug(`The '${typeString}' type is present but provisional.`);
            } else {
                this.type = type;
                typeVerifies = true;
            }
        } else {
            context.debug(`The '${typeString}' type is not present.`);
        }
        if (typeVerifies) {
            context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${typeString}' type.`);
        }
        return typeVerifies;
    }
    validateConstructor(context) {
        let constructorValidates;
        const includeType = false, constructorString = this.constructor.getString(includeType), constructorDeclarationString = this.getString(); ///
        context.trace(`Validating the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor...`);
        constructorValidates = this.constructor.validate(context);
        if (constructorValidates) {
            context.debug(`...validated the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor.`);
        }
        return constructorValidates;
    }
    static name = "ConstructorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUNvbnN0cnVjdG9yKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgY29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlQ29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclZhbGlkYXRlcztcblxuICAgIGNvbnN0IGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZyhpbmNsdWRlVHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy5jb25zdHJ1Y3Rvci52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJwcm92aXNpb25hbCIsImNvbnN0cnVjdG9yIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRDb25zdHJ1Y3RvciIsImdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJjb25zdHJ1Y3RvclZhbGlkYXRlcyIsInZhbGlkYXRlQ29uc3RydWN0b3IiLCJzZXRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsImluY2x1ZGVUeXBlIiwiY29uc3RydWN0b3JTdHJpbmciLCJ2YWxpZGF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsK0JBQStCQyxvQkFBVztJQUNwRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxXQUFXLENBQUU7UUFDNUUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBR0M7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8s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