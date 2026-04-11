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
const _occamlanguages = require("occam-languages");
const _elements = require("../../elements");
const _type = require("../../utilities/type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class ComplexTypeDeclaration extends _declaration.default {
    constructor(context, string, node, lineIndex, type, superTypes, provisional, propertyDeclarations){
        super(context, string, node, lineIndex);
        this.type = type;
        this.superTypes = superTypes;
        this.provisional = provisional;
        this.propertyDeclarations = propertyDeclarations;
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
    getPropertyDeclarations() {
        return this.propertyDeclarations;
    }
    getComplexTypeDeclarationNode() {
        const node = this.getNode(), complexTypeDeclarationNode = node; ///
        return complexTypeDeclarationNode;
    }
    getProperties() {
        const properties = this.propertyDeclarations.reduce((properties, propertyDeclaration)=>{
            const property = propertyDeclaration.getProperty();
            if (property !== null) {
                properties.push(property);
            }
            return properties;
        }, []);
        return properties;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);
        const typeVerifies = this.verifyType(context);
        if (typeVerifies) {
            const superTypesVerify = this.verifySuperTypes(context);
            if (superTypesVerify) {
                const typePrefixVerifies = this.verifyTypePrefix(context);
                if (typePrefixVerifies) {
                    const propertyDeclarationsVerify = await this.verifyPropertyDeclaratisons(context);
                    if (propertyDeclarationsVerify) {
                        const properties = this.getProperties(), typePrefix = context.getTypePrefix(), prefixName = typePrefix !== null ? typePrefix.getPrefixName() : null;
                        this.type.setProvisional(this.provisional);
                        this.type.setProperties(properties);
                        this.type.setPrefixName(prefixName);
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
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type...`);
        const typeName = this.type.getName(), includeRelease = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease);
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
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type`);
        }
        return typeVerifies;
    }
    verifySuperType(superType, superTypes, context) {
        let superTypeVerifies = false;
        const superTypeString = superType.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type...`);
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
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type.`);
        }
        return superTypeVerifies;
    }
    verifySuperTypes(context) {
        let superTypesVerify;
        const superTypes = [], complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's super-types...`);
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
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's super-types.`);
        }
        return superTypesVerify;
    }
    verifyTypePrefix(context) {
        let typePrefixVerifies = false;
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix...`);
        const typePrefixed = this.type.isPrefixed();
        if (!typePrefixed) {
            typePrefixVerifies = true;
        } else {
            context.debug(`The '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type is prefixed.`);
        }
        if (typePrefixVerifies) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix.`);
        }
        return typePrefixVerifies;
    }
    async verifyPropertyDeclaratisons(context) {
        let propertyDeclarationsVerify;
        const typeString = this.type.getString(), complexTypeDeclarationString = this.getString(); ///
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's property declarations...`);
        const properties = this.getProperties();
        propertyDeclarationsVerify = await asyncEvery(this.propertyDeclarations, async (propertyDeclaration)=>{
            const propertyVerifes = await propertyDeclaration.verify(properties, this.type, context);
            if (propertyVerifes) {
                return true;
            }
        });
        if (propertyDeclarationsVerify) {
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's property declarations.`);
        }
        return propertyDeclarationsVerify;
    }
    static name = "ComplexTypeDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmNvbnN0IHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eURlY2xhcmF0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5wcm9wZXJ0eURlY2xhcmF0aW9ucyA9IHByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLnJlZHVjZSgocHJvcGVydGllcywgcHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eURlY2xhcmF0aW9uLmdldFByb3BlcnR5KCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvcGVydHlEZWNsYXJhdGlzb25zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCksXG4gICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gKHR5cGVQcmVmaXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVQcmVmaXguZ2V0UHJlZml4TmFtZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgdGhpcy50eXBlLnNldFByZWZpeE5hbWUocHJlZml4TmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLnR5cGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBzdXBlclR5cGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyB0eXBlJ3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMuc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeChjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVQcmVmaXhWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByZWZpeC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeGVkID0gdGhpcy50eXBlLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmICghdHlwZVByZWZpeGVkKSB7XG4gICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb3BlcnR5RGVjbGFyYXRpc29ucyhjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnR5IGRlY2xhcmF0aW9ucy4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgcHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMucHJvcGVydHlEZWNsYXJhdGlvbnMsIGFzeW5jIChwcm9wZXJ0eURlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmZXMgPSBhd2FpdCBwcm9wZXJ0eURlY2xhcmF0aW9uLnZlcmlmeShwcm9wZXJ0aWVzLCB0aGlzLnR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJvcGVydHkgZGVjbGFyYXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwic3VwZXJUeXBlcyIsInByb3Zpc2lvbmFsIiwicHJvcGVydHlEZWNsYXJhdGlvbnMiLCJnZXRUeXBlIiwiZ2V0U3VwZXJUeXBlcyIsImlzUHJvdmlzaW9uYWwiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9ucyIsImdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZWR1Y2UiLCJwcm9wZXJ0eURlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInB1c2giLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsInByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5IiwidmVyaWZ5UHJvcGVydHlEZWNsYXJhdGlzb25zIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJwcmVmaXhOYW1lIiwiZ2V0UHJlZml4TmFtZSIsInNldFByb3Zpc2lvbmFsIiwic2V0UHJvcGVydGllcyIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwicHJvcGVydHlWZXJpZmVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7b0VBVHdCO2dDQUVjOzBCQUVmO3NCQUNhOzs7Ozs7QUFFcEMsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsK0JBQStCQyxvQkFBVztJQUNwRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLG9CQUFvQixDQUFFO1FBQ2pHLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFdBQVc7SUFDekI7SUFFQUssMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7SUFDbEM7SUFFQUssZ0NBQWdDO1FBQzlCLE1BQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyw2QkFBNkJaLE1BQU0sR0FBRztRQUU1QyxPQUFPWTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWEsSUFBSSxDQUFDVCxvQkFB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