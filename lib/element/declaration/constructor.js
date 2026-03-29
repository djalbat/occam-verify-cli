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
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const constructorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);
        const typeVerified = this.verifyType();
        if (typeVerified) {
            const constructorValidates = this.validateConstructor();
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
    verifyType() {
        let typeVerifies = false;
        const context = this.getContext(), typeString = this.type.getString(), constructorDeclarationString = this.getString(); ///
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
    validateConstructor() {
        let constructorValidates;
        const context = this.getContext(), includeType = false, constructorString = this.constructor.getString(includeType), constructorDeclarationString = this.getString(); ///
        context.trace(`Validating the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor...`);
        constructorValidates = this.constructor.validate(context);
        if (constructorValidates) {
            context.debug(`...validated the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor.`);
        }
        return constructorValidates;
    }
    static name = "ConstructorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgY29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlQ29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGluY2x1ZGVUeXBlID0gZmFsc2UsXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZyhpbmNsdWRlVHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy5jb25zdHJ1Y3Rvci52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJwcm92aXNpb25hbCIsImNvbnN0cnVjdG9yIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRDb25zdHJ1Y3RvciIsImdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwiY29uc3RydWN0b3JWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUNvbnN0cnVjdG9yIiwic2V0VHlwZSIsImFkZENvbnN0cnVjdG9yIiwiZGVidWciLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJpbmNsdWRlVHlwZSIsImNvbnN0cnVjdG9yU3RyaW5nIiwidmFsaWRhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxDQUFFO1FBQzVFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdB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