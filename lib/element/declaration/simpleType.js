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
const _string = require("../../utilities/string");
const _type = require("../../utilities/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class SimpleTypeDeclaration extends _declaration.default {
    constructor(context, string, node, type, superTypes, provisional){
        super(context, string, node);
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
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`);
        const typeVerifies = this.verifyType();
        if (typeVerifies) {
            const superTypesVerify = this.verifySuperTypes();
            if (superTypesVerify) {
                const typePrefixVerifies = this.verifyTypePrefix();
                if (typePrefixVerifies) {
                    const propertiesVerifies = this.verifyProperties();
                    if (propertiesVerifies) {
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
    verifyType() {
        let typeVerifies = false;
        const context = this.getContext(), typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type...`);
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
            context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type`);
        }
        return typeVerifies;
    }
    verifySuperType(superType, superTypes) {
        let superTypeVerifies = false;
        const context = this.getContext(), superTypeString = superType.getString(), simpleTypeDeclarationString = this.getString(); ///;
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
    verifySuperTypes() {
        let superTypesVerify;
        const context = this.getContext(), superTypes = [], superTypesString = (0, _string.superTypesStringFromSuperTypes)(this.superTypes), simpleTypeDeclarationString = this.getString(); ///;
        superTypesString !== null ? context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types...`) : context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's super-types...`);
        superTypesVerify = this.superTypes.every((superType)=>{
            const superTypeVerifies = this.verifySuperType(superType, superTypes);
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
            superTypesString !== null ? context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types.`) : context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's super-types.`);
        }
        return superTypesVerify;
    }
    verifyTypePrefix() {
        let typePrefixVerifies = false;
        const context = this.getContext(), typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///;
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
    verifyProperties() {
        let propertiesVerify = true; ///
        const context = this.getContext(), typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHtiYXNlVHlwZUZyb21Ob3RoaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXModGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZXNTdHJpbmd9JyBzdXBlci10eXBlcy4uLmApIDpcbiAgICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy5zdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBzdXBlclR5cGVzKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgIHN1cGVyVHl1cGUgPSBiYXNlVHlwZTsgIC8vL1xuXG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5dXBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50eXBlLnNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZXNTdHJpbmd9JyBzdXBlci10eXBlcy5gKSA6XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnkgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0aWVzLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICB0aGlzLnR5cGUuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnRpZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2ltcGxlVHlwZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiaXNQcm92aXNpb25hbCIsImdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwicHJvcGVydGllc1ZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInNldFByb3Zpc2lvbmFsIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInB1c2giLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwicHJvcGVydGllc1ZlcmlmeSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7b0VBTndCOzBCQUVEO3dCQUN3QjtzQkFDYjs7Ozs7O01BRWxDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNuRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ2hFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFVBQVU7SUFDeEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUksK0JBQStCO1FBQzdCLE1BQU1QLE9BQU8sSUFBSSxDQUFDUSxPQUFPLElBQ25CQyw0QkFBNEJULE1BQU0sR0FBRztRQUUzQyxPQUFPUztJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDLFdBQVc7UUFFZixNQUFNYixVQUFVLElBQUksQ0FBQ2MsVUFBVTtRQUUvQixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDZjtRQUVqQixNQUFNZ0IsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiw0QkFBNEIsNEJBQTRCLENBQUM7UUFFekYsTUFBTUcsZUFBZSxJQUFJLENBQUNDLFVBQVU7UUFFcEMsSUFBSUQsY0FBYztZQUNoQixNQUFNRSxt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