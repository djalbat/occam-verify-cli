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
        const typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHtiYXNlVHlwZUZyb21Ob3RoaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMudHlwZS5zZXRQcm92aXNpb25hbCh0aGlzLnByb3Zpc2lvbmFsKTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBzdXBlclR5cGVzKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vLztcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICghdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlJ3MgbmFtZSBjb21wYXJlcyB0byB0aGUgJHt0eXBlTmFtZX0nIHR5cGUncyBuYW1lLmApO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVzU3RyaW5nfScgc3VwZXItdHlwZXMuLi5gKSA6XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMuc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVzU3RyaW5nfScgc3VwZXItdHlwZXMuYCkgOlxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZWQgPSB0aGlzLnR5cGUuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKCF0eXBlUHJlZml4ZWQpIHtcbiAgICAgIHR5cGVQcmVmaXhWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgdGhpcy50eXBlLnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0aWVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJzdXBlclR5cGVzIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImlzUHJvdmlzaW9uYWwiLCJnZXRTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsInByb3BlcnRpZXNWZXJpZmllcyIsInZlcmlmeVByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwicHVzaCIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJldmVyeSIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJzdXBlclR5dXBlIiwic2V0U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhlZCIsImlzUHJlZml4ZWQiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwicHJvcGVydGllcyIsInNldFByb3BlcnRpZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztvRUFOd0I7MEJBRUQ7d0JBQ3dCO3NCQUNiOzs7Ozs7TUFFbEMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLG9CQUFXO0lBQ25FLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDaEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBSSwrQkFBK0I7UUFDN0IsTUFBTVAsT0FBTyxJQUFJLENBQUNRLE9BQU8sSUFDbkJDLDRCQUE0QlQsTUFBTSxHQUFHO1FBRTNDLE9BQU9TO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUMsV0FBVztRQUVmLE1BQU1iLFVBQVUsSUFBSSxDQUFDYyxVQUFVO1FBRS9CLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNmO1FBRWpCLE1BQU1nQiw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVG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