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
    verifySuperType(context, superType, superTypes) {
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
        const superTypes = [], superTypesString = (0, _string.superTypesStringFromSuperTypes)(this.superTypes), simpleTypeDeclarationString = this.getString(); ///
        superTypesString !== null ? context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types...`) : context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's super-types...`);
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
            superTypesString !== null ? context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types.`) : context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's super-types.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2ltcGxlVHlwZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgc3VwZXJUeXBlcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydGllcyhjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLnR5cGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKGNvbnRleHQsIHN1cGVyVHlwZSwgc3VwZXJUeXBlcykge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXModGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlc1N0cmluZ30nIHN1cGVyLXR5cGVzLi4uYCkgOlxuICAgICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShjb250ZXh0LCBzdXBlclR5cGUsIHN1cGVyVHlwZXMpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXVwZSA9IGJhc2VUeXBlOyAgLy8vXG5cbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHl1cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlc1N0cmluZ30nIHN1cGVyLXR5cGVzLmApIDpcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHRoaXMudHlwZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJvcGVydGllcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaW1wbGVUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwic3VwZXJUeXBlcyIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsInByb3BlcnRpZXNWZXJpZmllcyIsInZlcmlmeVByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJzZXRQcm92aXNpb25hbCIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJwdXNoIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImV2ZXJ5Iiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInN1cGVyVHl1cGUiLCJzZXRTdXBlclR5cGVzIiwidHlwZVByZWZpeGVkIiwiaXNQcmVmaXhlZCIsInByb3BlcnRpZXNWZXJpZnkiLCJwcm9wZXJ0aWVzIiwic2V0UHJvcGVydGllcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFB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