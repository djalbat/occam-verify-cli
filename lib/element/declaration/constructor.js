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
        const constructorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's type...`);
        const nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
        if (type !== null) {
            const provisional = this.isProvisional(), typeComparesToProvisional = type.compareProvisional(provisional);
            if (!typeComparesToProvisional) {
                const typeString = this.type.getString();
                provisional ? context.debug(`The '${typeString}' type is present but not provisional.`) : context.debug(`The '${typeString}' type is present but provisional.`);
            } else {
                this.type = type;
                typeVerifies = true;
            }
        } else {
            const typeString = this.type.getString();
            context.debug(`The '${typeString}' type is not present.`);
        }
        if (typeVerifies) {
            context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's type.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHByb3Zpc2lvbmFsLCBjb25zdHJ1Y3Rvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUNvbnN0cnVjdG9yKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgY29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgIHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZUNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBpbmNsdWRlVHlwZSA9IGZhbHNlLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoaW5jbHVkZVR5cGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCk7XG5cbiAgICBjb25zdHJ1Y3RvclZhbGlkYXRlcyA9IHRoaXMuY29uc3RydWN0b3IudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwicHJvdmlzaW9uYWwiLCJjb25zdHJ1Y3RvciIsImdldFR5cGUiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0Q29uc3RydWN0b3IiLCJnZXRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwiY29uc3RydWN0b3JWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUNvbnN0cnVjdG9yIiwic2V0VHlwZSIsImFkZENvbnN0cnVjdG9yIiwiZGVidWciLCJ0eXBlVmVyaWZpZXMiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsInR5cGVTdHJpbmciLCJpbmNsdWRlVHlwZSIsImNvbnN0cnVjdG9yU3RyaW5nIiwidmFsaWRhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxDQUFFO1FBQzVFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUdDO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNs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