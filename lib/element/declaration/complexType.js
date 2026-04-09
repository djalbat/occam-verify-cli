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
const _type = require("../../utilities/type");
const _string = require("../../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class ComplexTypeDeclaration extends _declaration.default {
    constructor(context, string, node, lineIndex, type, superTypes, provisional, propertyDeclarations){
        super(context, string, node, lineIndex);
        this.type = type;
        this.superTypes = superTypes;
        this.provisional = provisional;
        this.propertyDeclarations = propertyDeclarations;
    }
    getType() {
        return this.type;
    }
    getSuperTypes() {
        return this.superTypes;
    }
    isProvisional() {
        return this.provisional;
    }
    getPropertyDeclarations() {
        return this.propertyDeclarations;
    }
    getComplexTypeDeclarationNode() {
        const node = this.getNode(), complexTypeDeclarationNode = node; ///
        return complexTypeDeclarationNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);
        const typeVerifies = this.verifyType(context);
        if (typeVerifies) {
            const superTypesVerify = this.verifySuperTypes(context);
            if (superTypesVerify) {
                const typePrefixVerifies = this.verifyTypePrefix(context);
                if (typePrefixVerifies) {
                    const propertiesVerifies = this.verifyProperties(context);
                    if (propertiesVerifies) {
                        context.addType(this.type);
                        verifies = true;
                    }
                }
            }
        }
        if (verifies) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
        }
        return verifies;
    }
    verifyType(context) {
        let typeVerifies = false;
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type...`);
        const typeName = this.type.getName(), includeRelease = true, typePresent = context.isTypePresentByTypeName(typeName, includeRelease);
        if (!typePresent) {
            const prefixedTypeName = typeName, typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
            if (!typePresent) {
                this.type.setProvisional(this.provisional);
                typeVerifies = true;
            } else {
                context.debug(`The '${typeString}' type is already present.`);
            }
        } else {
            context.debug(`The '${typeString}' type is already present.`);
        }
        if (typeVerifies) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type`);
        }
        return typeVerifies;
    }
    verifySuperType(context, superType, superTypes) {
        let superTypeVerifies = false;
        const superTypeString = superType.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type...`);
        const nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
        if (!typeComparesToTypeName) {
            superType = context.findTypeByNominalTypeName(nominalTypeName);
            if (superType !== null) {
                superTypes.push(superType);
                superTypeVerifies = true;
            } else {
                context.debug(`The '${superTypeString}' super-type is not present.`);
            }
        } else {
            context.debug(`The '${superTypeString}' super-type's name compares to the ${typeName}' type's name.`);
        }
        if (superTypeVerifies) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type.`);
        }
        return superTypeVerifies;
    }
    verifySuperTypes(context) {
        let superTypesVerify;
        const superTypes = [], superTypesString = (0, _string.superTypesStringFromSuperTypes)(this.superTypes), complexTypeDeclarationString = this.getString(); ///
        superTypesString !== null ? context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${superTypesString}' super-types...`) : context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's super-types...`);
        superTypesVerify = this.superTypes.every((superType)=>{
            const superTypeVerifies = this.verifySuperType(context, superType, superTypes);
            if (superTypeVerifies) {
                return true;
            }
        });
        if (superTypesVerify) {
            const superTypesLength = superTypes.length;
            if (superTypesLength === 0) {
                const baseType = (0, _type.baseTypeFromNothing)(), superTyupe = baseType; ///
                superTypes.push(superTyupe);
            }
            this.type.setSuperTypes(superTypes);
            superTypesString !== null ? context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${superTypesString}' super-types.`) : context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's super-types.`);
        }
        return superTypesVerify;
    }
    verifyTypePrefix(context) {
        let typePrefixVerifies = false;
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix...`);
        const typePrefixed = this.type.isPrefixed();
        if (!typePrefixed) {
            typePrefixVerifies = true;
        } else {
            context.debug(`The '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type is prefixed.`);
        }
        if (typePrefixVerifies) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix.`);
        }
        return typePrefixVerifies;
    }
    verifyProperties(context) {
        let propertiesVerify;
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's properties...`);
        const properties = this.type.getProperties();
        propertiesVerify = properties.every((property)=>{
            const propertyVerifes = property.verify(properties, context);
            if (propertyVerifes) {
                return true;
            }
        });
        if (propertiesVerify) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's properties.`);
        }
        return propertiesVerify;
    }
    static name = "ComplexTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYmFzZVR5cGVGcm9tTm90aGluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbXBsZXhUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCwgcHJvcGVydHlEZWNsYXJhdGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICAgIHRoaXMucHJvcGVydHlEZWNsYXJhdGlvbnMgPSBwcm9wZXJ0eURlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRQcm9wZXJ0eURlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eURlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydGllcyhjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMudHlwZS5zZXRQcm92aXNpb25hbCh0aGlzLnByb3Zpc2lvbmFsKTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShjb250ZXh0LCBzdXBlclR5cGUsIHN1cGVyVHlwZXMpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICghdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlJ3MgbmFtZSBjb21wYXJlcyB0byB0aGUgJHt0eXBlTmFtZX0nIHR5cGUncyBuYW1lLmApO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXModGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlc1N0cmluZ30nIHN1cGVyLXR5cGVzLi4uYCkgOlxuICAgICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMuc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKGNvbnRleHQsIHN1cGVyVHlwZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZXNTdHJpbmd9JyBzdXBlci10eXBlcy5gKSA6XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0aWVzLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmVzID0gcHJvcGVydHkudmVyaWZ5KHByb3BlcnRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0aWVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsInByb3BlcnR5RGVjbGFyYXRpb25zIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbnMiLCJnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwicHJvcGVydGllc1ZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInNldFByb3Zpc2lvbmFsIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInB1c2giLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwicHJvcGVydGllc1ZlcmlmeSIsInByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHkiLCJwcm9wZXJ0eVZlcmlmZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztvRUFOd0I7MEJBRUQ7c0JBQ2E7d0JBQ1c7Ozs7OztNQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxvQkFBb0IsQ0FBRTtRQUNqRyxLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxD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