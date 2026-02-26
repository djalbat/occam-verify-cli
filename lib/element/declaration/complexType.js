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
const _default = (0, _elements.define)(class ComplexTypeDeclaration extends _declaration.default {
    constructor(context, string, node, type, superTypes){
        super(context, string, node);
        this.type = type;
        this.superTypes = superTypes;
    }
    getType() {
        return this.type;
    }
    getSuperTypes() {
        return this.superTypes;
    }
    getComplexTypeDeclarationNode() {
        const node = this.getNode(), complexTypeDeclarationNode = node; ///
        return complexTypeDeclarationNode;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);
        if (this.prefixed) {
            const typeString = this.type.getString();
            context.trace(`The '${typeString}' type is prefixed.`);
        } else {
            const typeVerifies = this.verifyType();
            if (typeVerifies) {
                const superTypesVerify = this.verifySuperTypes();
                if (superTypesVerify) {
                    const propertiesVerify = this.verifyProperties();
                    if (propertiesVerify) {
                        const typePrefix = context.getTypePrefix();
                        if (typePrefix !== null) {
                            const typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
                            this.type.setPrefixName(prefixName);
                        }
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
    verifyType() {
        let typeVerifies = false;
        const context = this.getContext(), typeString = this.type.getString();
        context.trace(`Verifying the '${typeString}' complex type...`);
        const typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
        if (typePresent) {
            context.debug(`The '${typeString}' type is already present.`);
        } else {
            const prefixedTypeName = typeName, typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
            if (typePresent) {
                context.debug(`The '${typeString}' type is already present.`);
            } else {
                typeVerifies = true;
            }
        }
        if (typeVerifies) {
            context.debug(`...verified the '${typeString}' complex type.`);
        }
        return typeVerifies;
    }
    verifySuperType(superType) {
        let superTypeVerifies = false;
        const context = this.getContext(), superTypeString = superType.getString();
        context.trace(`Verifying the '${superTypeString}' super-type...`);
        const nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
        if (typeComparesToTypeName) {
            context.trace(`The super-type's name compares to the ${typeName}' complex type's name.`);
        } else {
            const oldSuperType = superType;
            superType = context.findTypeByNominalTypeName(nominalTypeName);
            const superTypePresent = superType !== null;
            if (superTypePresent) {
                const newSuperType = superType; ///
                this.type.replaceSuperType(oldSuperType, newSuperType);
                superTypeVerifies = true;
            }
        }
        if (superTypeVerifies) {
            context.debug(`...verified the '${superTypeString}' super-type.`);
        }
        return superTypeVerifies;
    }
    verifySuperTypes() {
        let superTypesVerify;
        const context = this.getContext(), typeString = this.type.getString();
        context.trace(`Verifying the '${typeString}' complex type's super-types...`);
        const typeBasic = this.type.isBasic();
        if (typeBasic) {
            superTypesVerify = true;
            context.trace(`The '${typeString}' complex type is basic.`);
        } else {
            const superTypes = this.type.getSuperTypes();
            superTypesVerify = superTypes.every((superType)=>{
                const superTypeVerifies = this.verifySuperType(superType);
                if (superTypeVerifies) {
                    return true;
                }
            });
        }
        if (superTypesVerify) {
            context.debug(`...verified the '${typeString}' complex type's super-types.`);
        }
        return superTypesVerify;
    }
    verifyProperty(property, properties) {
        let propertyVerifies = false;
        const context = this.getContext(), propertyString = property.getString();
        context.trace(`Verifying the '${propertyString}' property...`);
        const propertyNameVerifies = this.verifyPropertyName(property, properties);
        if (propertyNameVerifies) {
            const propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);
            if (propertyNominalTypeNameVerifies) {
                propertyVerifies = true;
            }
        }
        if (propertyVerifies) {
            context.debug(`...verified the '${propertyString}' property.`);
        }
        return propertyVerifies;
    }
    verifyProperties() {
        let propertiesVerify;
        const context = this.getContext(), typeString = this.type.getString();
        context.trace(`Verifying the '${typeString}' complex type's properties...`);
        const includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
        propertiesVerify = properties.every((property)=>{
            const propertyVerifies = this.verifyProperty(property, properties);
            if (propertyVerifies) {
                return true;
            }
        });
        if (propertiesVerify) {
            context.debug(`...verified the '${typeString}' complex type's properties.`);
        }
        return propertiesVerify;
    }
    verifyPropertyName(property, properties) {
        let propertyNameVerifies = false;
        const context = this.getContext(), propertyString = property.getString();
        context.trace(`Verifying the '${propertyString}' property's name...`);
        const propertyName = property.getName(), count = properties.reduce((count, property)=>{
            const propertyComparesToPropertyName = property.comparePropertyName(propertyName);
            if (propertyComparesToPropertyName) {
                count++;
            }
            return count;
        }, 0);
        if (count > 1) {
            context.debug(`The '${propertyString}' property appears more than once.`);
        } else {
            const superTypes = this.type.getSuperTypes(), superType = superTypes.find((superType)=>{
                const superTypeProperties = superType.getProperties(), superTypePropertyComparesToPropertyName = superTypeProperties.some((superTypeProperty)=>{
                    const superTypePropertyComparesToPropertyName = superTypeProperty.comparePropertyName(propertyName);
                    if (superTypePropertyComparesToPropertyName) {
                        return true;
                    }
                });
                if (superTypePropertyComparesToPropertyName) {
                    return true;
                }
            }) || null;
            if (superType !== null) {
                const superTypeString = superType.getString();
                context.debug(`The '${superTypeString}' super-type has the same property.`);
            } else {
                propertyNameVerifies = true;
            }
        }
        if (propertyNameVerifies) {
            context.debug(`...verified the '${propertyString}' property's name.`);
        }
        return propertyNameVerifies;
    }
    verifyPropertyNominalTypeName(property) {
        let propertyNominalTypeNameVerifies = false;
        const context = this.getContext(), propertyString = property.getString(), nominalTypeName = property.getNominalTypeName();
        context.trace(`Verifying the '${propertyString}' property's '${nominalTypeName}' nominal type name...`);
        const typeComparesToNominalTypeName = this.type.compareNominalTypeName(nominalTypeName);
        if (typeComparesToNominalTypeName) {
            propertyNominalTypeNameVerifies = true;
        } else {
            const typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                propertyNominalTypeNameVerifies = true;
            }
        }
        if (propertyNominalTypeNameVerifies) {
            context.debug(`...verifies the '${propertyString}' property's '${nominalTypeName}' nominal type name.`);
        }
        return propertyNominalTypeNameVerifies;
    }
    static name = "ComplexTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUncyBuYW1lLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmApXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuc29tZSgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaGFzIHRoZSBzYW1lIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5KSB7XG4gICAgbGV0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke25vbWluYWxUeXBlTmFtZX0nIG5vbWluYWwgdHlwZSBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInN1cGVyVHlwZXMiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcmVmaXhlZCIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwicHJlZml4TmFtZSIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsIm9sZFN1cGVyVHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInNvbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O29FQUp3QjswQkFFRDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsK0JBQStCQyxvQkFBVztJQUNwRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FB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