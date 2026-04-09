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
        const superTypes = [], simpleTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's super-types...`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeChjb250ZXh0KTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllcykge1xuICAgICAgICAgICAgY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMudHlwZS5zZXRQcm92aXNpb25hbCh0aGlzLnByb3Zpc2lvbmFsKTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoY29udGV4dCwgc3VwZXJUeXBlLCBzdXBlclR5cGVzKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyB0eXBlJ3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShjb250ZXh0LCBzdXBlclR5cGUsIHN1cGVyVHlwZXMpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXVwZSA9IGJhc2VUeXBlOyAgLy8vXG5cbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHl1cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZWQgPSB0aGlzLnR5cGUuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKCF0eXBlUHJlZml4ZWQpIHtcbiAgICAgIHR5cGVQcmVmaXhWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeSA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0aWVzLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICB0aGlzLnR5cGUuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnRpZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2ltcGxlVHlwZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiaXNQcm92aXNpb25hbCIsImdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJwcm9wZXJ0aWVzVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwicHVzaCIsImV2ZXJ5Iiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInN1cGVyVHl1cGUiLCJzZXRTdXBlclR5cGVzIiwidHlwZVByZWZpeGVkIiwiaXNQcmVmaXhlZCIsInByb3BlcnRpZXNWZXJpZnkiLCJwcm9wZXJ0aWVzIiwic2V0UHJvcGVydGllcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O29FQUx3QjswQkFFRDtzQkFDYTs7Ozs7O01BRXBDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxvQkFBVztJQUNuRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDM0UsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBSSwrQkFBK0I7UUFDN0IsTUFBTVIsT0FBTyxJQUFJLENBQUNTLE9BQU8sSUFDbkJDLDRCQUE0QlYsTUFBTSxHQUFHO1FBRTNDLE9BQU9VO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPYixPQUFPLEVBQUU7UUFDcEIsSUFBSWMsV0FBVztRQUVmLE1B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