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
                        const properties = this.getProperties();
                        this.type.setProperties(properties);
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
            context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type`);
        }
        return typeVerifies;
    }
    verifySuperType(context, superType, superTypes) {
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
            const propertyVerifes = await propertyDeclaration.verify(properties, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmNvbnN0IHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eURlY2xhcmF0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5wcm9wZXJ0eURlY2xhcmF0aW9ucyA9IHByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLnJlZHVjZSgocHJvcGVydGllcywgcHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eURlY2xhcmF0aW9uLmdldFByb3BlcnR5KCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvcGVydHlEZWNsYXJhdGlzb25zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLnR5cGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoY29udGV4dCwgc3VwZXJUeXBlLCBzdXBlclR5cGVzKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyB0eXBlJ3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMuc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKGNvbnRleHQsIHN1cGVyVHlwZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeChjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVQcmVmaXhWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByZWZpeC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeGVkID0gdGhpcy50eXBlLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmICghdHlwZVByZWZpeGVkKSB7XG4gICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb3BlcnR5RGVjbGFyYXRpc29ucyhjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnR5IGRlY2xhcmF0aW9ucy4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgcHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMucHJvcGVydHlEZWNsYXJhdGlvbnMsIGFzeW5jIChwcm9wZXJ0eURlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmZXMgPSBhd2FpdCBwcm9wZXJ0eURlY2xhcmF0aW9uLnZlcmlmeShwcm9wZXJ0aWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnR5IGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsInByb3BlcnR5RGVjbGFyYXRpb25zIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbnMiLCJnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVkdWNlIiwicHJvcGVydHlEZWNsYXJhdGlvbiIsInByb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJwdXNoIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSIsInZlcmlmeVByb3BlcnR5RGVjbGFyYXRpc29ucyIsInNldFByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJzZXRQcm92aXNpb25hbCIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJldmVyeSIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJzdXBlclR5dXBlIiwic2V0U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhlZCIsImlzUHJlZml4ZWQiLCJwcm9wZXJ0eVZlcmlmZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztvRUFUd0I7Z0NBRWM7MEJBRWY7c0JBQ2E7Ozs7OztBQUVwQyxNQUFNLEVBQUVBLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywrQkFBK0JDLG9CQUFXO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcs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