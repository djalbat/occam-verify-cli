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
    constructor(context, string, node, type, provisional, constructor){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcm92aXNpb25hbCwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICBjb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgICAgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgaW5jbHVkZVR5cGUgPSBmYWxzZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKGluY2x1ZGVUeXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3RydWN0b3JWYWxpZGF0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInByb3Zpc2lvbmFsIiwiY29uc3RydWN0b3IiLCJnZXRUeXBlIiwiaXNQcm92aXNpb25hbCIsImdldENvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJjb25zdHJ1Y3RvclZhbGlkYXRlcyIsInZhbGlkYXRlQ29uc3RydWN0b3IiLCJzZXRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsImluY2x1ZGVUeXBlIiwiY29uc3RydWN0b3JTdHJpbmciLCJ2YWxpZGF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsK0JBQStCQyxvQkFBVztJQUNwRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxDQUFFO1FBQ2pFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUdDO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixP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