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
        const typeName = this.type.getName(), includeRelease = true, typePresent = context.isTypePresentByTypeName(typeName, includeRelease);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBzdXBlci10eXBlJ3MgbmFtZSBjb21wYXJlcyB0byB0aGUgJHt0eXBlTmFtZX0nIGNvbXBsZXggdHlwZSdzIG5hbWUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3U3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVzLmZpbmQoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydGllcy5zb21lKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBoYXMgdGhlIHNhbWUgcHJvcGVydHkuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUocHJvcGVydHkpIHtcbiAgICBsZXQgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHkuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwic3VwZXJUeXBlcyIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByZWZpeGVkIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJwcmVmaXhOYW1lIiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwiZXZlcnkiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJzb21lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFB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