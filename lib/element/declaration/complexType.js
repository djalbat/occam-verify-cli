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
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);
        if (this.prefixed) {
            const typeString = this.type.getString();
            context.trace(`The '${typeString}' type is prefixed.`);
        } else {
            const typeVerifies = this.verifyType(context);
            if (typeVerifies) {
                const superTypesVerify = this.verifySuperTypes(context);
                if (superTypesVerify) {
                    const propertiesVerify = this.verifyProperties(context);
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
    verifyType(context) {
        let typeVerifies = false;
        const typeString = this.type.getString();
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
    verifySuperType(context, superType) {
        let superTypeVerifies = false;
        const superTypeString = superType.getString();
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
    verifySuperTypes(context) {
        let superTypesVerify;
        const typeString = this.type.getString();
        context.trace(`Verifying the '${typeString}' complex type's super-types...`);
        const typeBasic = this.type.isBasic();
        if (typeBasic) {
            superTypesVerify = true;
            context.trace(`The '${typeString}' complex type is basic.`);
        } else {
            const superTypes = this.type.getSuperTypes();
            superTypesVerify = superTypes.every((superType)=>{
                const superTypeVerifies = this.verifySuperType(context, superType);
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
    verifyProperty(context, property, properties) {
        let propertyVerifies = false;
        const propertyString = property.getString();
        context.trace(`Verifying the '${propertyString}' property...`);
        const propertyNameVerifies = this.verifyPropertyName(context, property, properties);
        if (propertyNameVerifies) {
            const propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(context, property, properties);
            if (propertyNominalTypeNameVerifies) {
                propertyVerifies = true;
            }
        }
        if (propertyVerifies) {
            context.debug(`...verified the '${propertyString}' property.`);
        }
        return propertyVerifies;
    }
    verifyProperties(context) {
        let propertiesVerify;
        const typeString = this.type.getString();
        context.trace(`Verifying the '${typeString}' complex type's properties...`);
        const includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
        propertiesVerify = properties.every((property)=>{
            const propertyVerifies = this.verifyProperty(context, property, properties);
            if (propertyVerifies) {
                return true;
            }
        });
        if (propertiesVerify) {
            context.debug(`...verified the '${typeString}' complex type's properties.`);
        }
        return propertiesVerify;
    }
    verifyPropertyName(context, property, properties) {
        let propertyNameVerifies = false;
        const propertyString = property.getString();
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
    verifyPropertyNominalTypeName(context, property) {
        let propertyNominalTypeNameVerifies = false;
        const propertyString = property.getString(), nominalTypeName = property.getNominalTypeName();
        context.trace(`Verifying the '${propertyString}' property's nominal type name...`);
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
            context.debug(`...verifies the '${propertyString}' property's nominal type name.`);
        }
        return propertyNominalTypeNameVerifies;
    }
    static name = "ComplexTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMucHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgdGhpcy50eXBlLnNldFByZWZpeE5hbWUocHJlZml4TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKGNvbnRleHQsIHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUncyBuYW1lLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmApXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKGNvbnRleHQsIHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCwgcHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5TmFtZShjb250ZXh0LCBwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKGNvbnRleHQsIHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcyhjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0LCBwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5TmFtZShjb250ZXh0LCBwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZXMuZmluZCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShjb250ZXh0LCBwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3Mgbm9taW5hbCB0eXBlIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5vbWluYWwgdHlwZSBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByZWZpeGVkIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJwcmVmaXhOYW1lIiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwiZXZlcnkiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJzb21lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztvRUFKd0I7MEJBRUQ7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsZ0NBQWdDO1FBQzlCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyw2QkFBNkJSLE1BQU8sR0FBRztRQUU3QyxPQUFPUTtJQUNUO0lBRUEsTUFBTUMsT0FBT1gsT0FBTyxFQUFFO1FBQ3BCLElBQUlZLFdBQVc7UUFFZixNQUFN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