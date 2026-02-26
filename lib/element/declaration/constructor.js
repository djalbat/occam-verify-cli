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
            const constructorVerifies = this.verifyConstructor();
            if (constructorVerifies) {
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
    verifyConstructor() {
        let constructorVerifies;
        const context = this.getContext(), constructorString = this.constructor.getString(), constructorDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor...`);
        constructorVerifies = this.constructor.verify(context);
        if (constructorVerifies) {
            context.debug(`...verified the '${constructorDeclarationString}' constructor declaration's '${constructorString}' constructor.`);
        }
        return constructorVerifies;
    }
    static name = "ConstructorDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcm92aXNpb25hbCwgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uJ3MgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllcyA9IHRoaXMuY29uc3RydWN0b3IudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24ncyAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInByb3Zpc2lvbmFsIiwiY29uc3RydWN0b3IiLCJnZXRUeXBlIiwiaXNQcm92aXNpb25hbCIsImdldENvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3IiLCJzZXRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsImNvbnN0cnVjdG9yU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywrQkFBK0JDLG9CQUFXO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxXQUFXLENBQUU7UUFDakUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBR0M7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxXQUFXO0lBQ3pCO0lBRUFJLGlCQUFpQjtR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