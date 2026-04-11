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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class SimpleTypeDeclaration extends _declaration.default {
    constructor(context, string, node, lineIndex, type, superTypes, provisional){
        super(context, string, node, lineIndex);
        this.type = type;
        this.superTypes = superTypes;
        this.provisional = provisional;
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
    getSimpleTypeDeclarationNode() {
        const node = this.getNode(), simpleTypeDeclarationNode = node; ///
        return simpleTypeDeclarationNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`);
        const typeVerifies = this.verifyType(context);
        if (typeVerifies) {
            const superTypesVerify = this.verifySuperTypes(context);
            if (superTypesVerify) {
                const typePrefixVerifies = this.verifyTypePrefix(context);
                if (typePrefixVerifies) {
                    const propertiesVerifies = this.verifyProperties(context);
                    if (propertiesVerifies) {
                        const typePrefix = context.getTypePrefix(), prefixName = typePrefix.getPrefixName();
                        this.type.setProvisional(this.provisional);
                        this.type.setPrefixName(prefixName);
                        context.addType(this.type);
                        verifies = true;
                    }
                }
            }
        }
        if (verifies) {
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`);
        }
        return verifies;
    }
    verifyType(context) {
        let typeVerifies = false;
        const typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type...`);
        const typeName = this.type.getName(), typePresent = context.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            const prefixedTypeName = typeName, typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
            if (!typePresent) {
                typeVerifies = true;
            } else {
                context.debug(`The '${typeString}' type is already present.`);
            }
        } else {
            context.debug(`The '${typeString}' type is already present.`);
        }
        if (typeVerifies) {
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type`);
        }
        return typeVerifies;
    }
    verifySuperType(superType, superTypes, context) {
        let superTypeVerifies = false;
        const superTypeString = superType.getString(), simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypeString}' super-type...`);
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
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypeString}' super-type.`);
        }
        return superTypeVerifies;
    }
    verifySuperTypes(context) {
        let superTypesVerify;
        const superTypes = [], simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's super-types...`);
        superTypesVerify = this.superTypes.every((superType)=>{
            const superTypeVerifies = this.verifySuperType(superType, superTypes, context);
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
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's super-types.`);
        }
        return superTypesVerify;
    }
    verifyTypePrefix(context) {
        let typePrefixVerifies = false;
        const typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's prefix...`);
        const typePrefixed = this.type.isPrefixed();
        if (!typePrefixed) {
            typePrefixVerifies = true;
        } else {
            context.debug(`The '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type is prefixed.`);
        }
        if (typePrefixVerifies) {
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's prefix.`);
        }
        return typePrefixVerifies;
    }
    verifyProperties(context) {
        let propertiesVerify = true; ///
        const typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's properties...`);
        const properties = [];
        this.type.setProperties(properties);
        if (propertiesVerify) {
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's properties.`);
        }
        return propertiesVerify;
    }
    static name = "SimpleTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeChjb250ZXh0KTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpLFxuICAgICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0UHJlZml4TmFtZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICghdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlJ3MgbmFtZSBjb21wYXJlcyB0byB0aGUgJHt0eXBlTmFtZX0nIHR5cGUncyBuYW1lLmApO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMuc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHRoaXMudHlwZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJvcGVydGllcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaW1wbGVUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwic3VwZXJUeXBlcyIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsInByb3BlcnRpZXNWZXJpZmllcyIsInZlcmlmeVByb3BlcnRpZXMiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInByZWZpeE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJwdXNoIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwicHJvcGVydGllc1ZlcmlmeSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7b0VBTHdCOzBCQUVEO3NCQUNhOzs7Ozs7TUFFcEMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLG9CQUFXO0lBQ25FLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsQ0FBRTtRQUMzRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxVQUFVO0lBQ3hCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxXQUFXO0lBQ3pCO0lBRUFJLCtCQUErQjtRQUM3QixNQUFNUixPQUFPLElBQUksQ0FBQ1MsT0FBTyxJQUNuQkMsNEJBQTRCVixNQUFNLEdBQUc7UUFFM0MsT0FBT1U7SUFDVDtJQUVBLE1BQU1DLE9BQU9iLE9BQU8sRUFBRTtRQUNwQixJQUFJYyxXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ2Y7UUFFakIsTUFBTWdCLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDRCQUE0QixDQUFDO1FBRXpGLE1BQU1HLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNwQjtRQUVyQyxJQUFJbUIsY0FBYztZQUNoQixNQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3RCO1lBRS9DLElBQUlxQixrQkFBa0I7Z0JBQ3BCLE1BQU1FLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDeEI7Z0JBRWpELElBQUl1QixvQkFBb0I7b0JBQ3RCLE1BQU1FLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDMUI7b0JBRWpELElBQUl5QixvQkFBb0I7d0JBQ3RCLE1BQU1FLGFBQWEzQixRQUFRNEIsYUFBYSxJQUNsQ0MsYUFBYUYsV0FBV0csYUFBYTt3QkFFM0MsSUFBSSxDQUFDMUIsSUFBSSxDQUFDMkIsY0FBYyxDQUFDLElBQUksQ0FBQ3pCLFdBQVc7d0JBRXpDLElBQUksQ0FBQ0YsSUFBSSxDQUFDNEIsYUFBYSxDQUFDSDt3QkFFeEI3QixRQUFRaUMsT0FBTyxDQUFDLElBQUksQ0FBQzdCLElBQUk7d0JBRXpCVSxXQUFXO29CQUNiO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLFVBQVU7WUFDWmQsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFbEIsNEJBQTRCLDBCQUEwQixDQUFDO1FBQzNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBTSxXQUFXcEIsT0FBTyxFQUFFO1FBQ2xCLElBQUltQixlQUFlO1FBRW5CLE1BQU1nQixhQUFhLElBQUksQ0FBQy9CLElBQUksQ0FBQ2EsU0FBUyxJQUNoQ0QsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFekRqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsNkJBQTZCLEVBQUVtQixXQUFXLFNBQVMsQ0FBQztRQUVoSCxNQUFNQyxXQUFXLElBQUksQ0FBQ2hDLElBQUksQ0FBQ2lDLE9BQU8sSUFDNUJDLGNBQWN0QyxRQUFRdUMsdUJBQXVCLENBQUNIO1FBRXBELElBQUksQ0FBQ0UsYUFBYTtZQUNoQixNQUFNRSxtQkFBbUJKLFVBQ25CRSxjQUFjdEMsUUFBUXlDLCtCQUErQixDQUFDRDtZQUU1RCxJQUFJLENBQUNGLGFBQWE7Z0JBQ2hCbkIsZUFBZTtZQUNqQixPQUFPO2dCQUNMbkIsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUMsV0FBVywwQkFBMEIsQ0FBQztZQUM5RDtRQUNGLE9BQU87WUFDTG5DLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVDLFdBQVcsMEJBQTBCLENBQUM7UUFDOUQ7UUFFQSxJQUFJaEIsY0FBYztZQUNoQm5CLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWxCLDRCQUE0Qiw2QkFBNkIsRUFBRW1CLFdBQVcsTUFBTSxDQUFDO1FBQ2pIO1FBRUEsT0FBT2hCO0lBQ1Q7SUFFQXVCLGdCQUFnQkMsU0FBUyxFQUFFdEMsVUFBVSxFQUFFTCxPQUFPLEVBQUU7UUFDOUMsSUFBSTRDLG9CQUFvQjtRQUV4QixNQUFNQyxrQkFBa0JGLFVBQVUxQixTQUFTLElBQ3JDRCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw2QkFBNkIsRUFBRTZCLGdCQUFnQixlQUFlLENBQUM7UUFFM0gsTUFBTUMsa0JBQWtCSCxVQUFVSSxrQkFBa0IsSUFDOUNYLFdBQVdVLGlCQUNYRSx5QkFBeUIsSUFBSSxDQUFDNUMsSUFBSSxDQUFDNkMsZUFBZSxDQUFDYjtRQUV6RCxJQUFJLENBQUNZLHdCQUF3QjtZQUMzQkwsWUFBWTNDLFFBQVFrRCx5QkFBeUIsQ0FBQ0o7WUFFOUMsSUFBSUgsY0FBYyxNQUFNO2dCQUN0QnRDLFdBQVc4QyxJQUFJLENBQUNSO2dCQUVoQkMsb0JBQW9CO1lBQ3RCLE9BQU87Z0JBQ0w1QyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVyxnQkFBZ0IsNEJBQTRCLENBQUM7WUFDckU7UUFDRixPQUFPO1lBQ0w3QyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVyxnQkFBZ0Isb0NBQW9DLEVBQUVULFNBQVMsY0FBYyxDQUFDO1FBQ3RHO1FBRUEsSUFBSVEsbUJBQW1CO1lBQ3JCNUMsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFbEIsNEJBQTRCLDZCQUE2QixFQUFFNkIsZ0JBQWdCLGFBQWEsQ0FBQztRQUM3SDtRQUVBLE9BQU9EO0lBQ1Q7SUFFQXRCLGlCQUFpQnRCLE9BQU8sRUFBRTtRQUN4QixJQUFJcUI7UUFFSixNQUFNaEIsYUFBYSxFQUFFLEVBQ2ZXLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXpEakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDBDQUEwQyxDQUFDO1FBRXZHSyxtQkFBbUIsSUFBSSxDQUFDaEIsVUFBVSxDQUFDK0MsS0FBSyxDQUFDLENBQUNUO1lBQ3hDLE1BQU1DLG9CQUFvQixJQUFJLENBQUNGLGVBQWUsQ0FBQ0MsV0FBV3RDLFlBQVlMO1lBRXRFLElBQUk0QyxtQkFBbUI7Z0JBQ3JCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSXZCLGtCQUFrQjtZQUNwQixNQUFNZ0MsbUJBQW1CaEQsV0FBV2lELE1BQU07WUFFMUMsSUFBSUQscUJBQXFCLEdBQUc7Z0JBQzFCLE1BQU1FLFdBQVdDLElBQUFBLHlCQUFtQixLQUM5QkMsYUFBYUYsVUFBVyxHQUFHO2dCQUVqQ2xELFdBQVc4QyxJQUFJLENBQUNNO1lBQ2xCO1lBRUEsSUFBSSxDQUFDckQsSUFBSSxDQUFDc0QsYUFBYSxDQUFDckQ7WUFFeEJMLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWxCLDRCQUE0Qix3Q0FBd0MsQ0FBQztRQUN6RztRQUVBLE9BQU9LO0lBQ1Q7SUFFQUcsaUJBQWlCeEIsT0FBTyxFQUFFO1FBQ3hCLElBQUl1QixxQkFBcUI7UUFFekIsTUFBTVksYUFBYSxJQUFJLENBQUMvQixJQUFJLENBQUNhLFNBQVMsSUFDaENELDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXpEakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDZCQUE2QixFQUFFbUIsV0FBVyxrQkFBa0IsQ0FBQztRQUV6SCxNQUFNd0IsZUFBZSxJQUFJLENBQUN2RCxJQUFJLENBQUN3RCxVQUFVO1FBRXpDLElBQUksQ0FBQ0QsY0FBYztZQUNqQnBDLHFCQUFxQjtRQUN2QixPQUFPO1lBQ0x2QixRQUFRa0MsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFbEIsNEJBQTRCLDZCQUE2QixFQUFFbUIsV0FBVyxtQkFBbUIsQ0FBQztRQUNsSDtRQUVBLElBQUlaLG9CQUFvQjtZQUN0QnZCLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWxCLDRCQUE0Qiw2QkFBNkIsRUFBRW1CLFdBQVcsZ0JBQWdCLENBQUM7UUFDM0g7UUFFQSxPQUFPWjtJQUNUO0lBRUFHLGlCQUFpQjFCLE9BQU8sRUFBRTtRQUN4QixJQUFJNkQsbUJBQW1CLE1BQU8sR0FBRztRQUVqQyxNQUFNMUIsYUFBYSxJQUFJLENBQUMvQixJQUFJLENBQUNhLFNBQVMsSUFDaENELDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXpEakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDZCQUE2QixFQUFFbUIsV0FBVyxzQkFBc0IsQ0FBQztRQUU3SCxNQUFNMkIsYUFBYSxFQUFFO1FBRXJCLElBQUksQ0FBQzFELElBQUksQ0FBQzJELGFBQWEsQ0FBQ0Q7UUFFeEIsSUFBSUQsa0JBQWtCO1lBQ3BCN0QsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFbEIsNEJBQTRCLDZCQUE2QixFQUFFbUIsV0FBVyxvQkFBb0IsQ0FBQztRQUMvSDtRQUVBLE9BQU8wQjtJQUNUO0lBRUEsT0FBT0csT0FBTyx3QkFBd0I7QUFDeEMifQ==