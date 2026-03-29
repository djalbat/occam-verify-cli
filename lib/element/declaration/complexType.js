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
    constructor(context, string, node, lineIndex, type, superTypes){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUncyBuYW1lLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmApXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuc29tZSgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaGFzIHRoZSBzYW1lIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5KSB7XG4gICAgbGV0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke25vbWluYWxUeXBlTmFtZX0nIG5vbWluYWwgdHlwZSBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcmVmaXhlZCIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwicHJlZml4TmFtZSIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwib2xkU3VwZXJUeXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJuZXdTdXBlclR5cGUiLCJyZXBsYWNlU3VwZXJUeXBlIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsImV2ZXJ5IiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5TmFtZSIsInByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsImZpbmQiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwic29tZSIsInN1cGVyVHlwZVByb3BlcnR5IiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7b0VBSndCOzBCQUVEOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywrQkFBK0JDLG9CQUFXO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDOUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJ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