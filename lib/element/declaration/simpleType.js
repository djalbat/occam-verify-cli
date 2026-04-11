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
    getProperties() {
        const properties = [];
        return properties;
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
                    const properties = this.getProperties(), typePrefix = context.getTypePrefix(), prefixName = typePrefix.getPrefixName();
                    this.type.setProvisional(this.provisional);
                    this.type.setProperties(properties);
                    this.type.setPrefixName(prefixName);
                    context.addType(this.type);
                    verifies = true;
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
    static name = "SimpleTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCksXG4gICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0UHJlZml4TmFtZSgpO1xuXG4gICAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgICAgdGhpcy50eXBlLnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcywgY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy5zdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBzdXBlclR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgIHN1cGVyVHl1cGUgPSBiYXNlVHlwZTsgIC8vL1xuXG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5dXBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50eXBlLnNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeChjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVQcmVmaXhWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByZWZpeC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeGVkID0gdGhpcy50eXBlLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmICghdHlwZVByZWZpeGVkKSB7XG4gICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJzdXBlclR5cGVzIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImlzUHJvdmlzaW9uYWwiLCJnZXRTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInByZWZpeE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwicHVzaCIsImV2ZXJ5Iiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInN1cGVyVHl1cGUiLCJzZXRTdXBlclR5cGVzIiwidHlwZVByZWZpeGVkIiwiaXNQcmVmaXhlZCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O29FQUx3QjswQkFFRDtzQkFDYTs7Ozs7O01BRXBDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFB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