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
                        const properties = this.getProperties(), typePrefix = context.getTypePrefix(), prefixName = typePrefix.getPrefixName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmNvbnN0IHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eURlY2xhcmF0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5wcm9wZXJ0eURlY2xhcmF0aW9ucyA9IHByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLnJlZHVjZSgocHJvcGVydGllcywgcHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eURlY2xhcmF0aW9uLmdldFByb3BlcnR5KCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvcGVydHlEZWNsYXJhdGlzb25zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCksXG4gICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXRQcmVmaXhOYW1lKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcm92aXNpb25hbCh0aGlzLnByb3Zpc2lvbmFsKTtcblxuICAgICAgICAgICAgdGhpcy50eXBlLnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcywgY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXVwZSA9IGJhc2VUeXBlOyAgLy8vXG5cbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHl1cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9wZXJ0eURlY2xhcmF0aXNvbnMoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLCBhc3luYyAocHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmVzID0gYXdhaXQgcHJvcGVydHlEZWNsYXJhdGlvbi52ZXJpZnkocHJvcGVydGllcywgdGhpcy50eXBlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSdzIHByb3BlcnR5IGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsInByb3BlcnR5RGVjbGFyYXRpb25zIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbnMiLCJnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVkdWNlIiwicHJvcGVydHlEZWNsYXJhdGlvbiIsInByb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJwdXNoIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSIsInZlcmlmeVByb3BlcnR5RGVjbGFyYXRpc29ucyIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwicHJlZml4TmFtZSIsImdldFByZWZpeE5hbWUiLCJzZXRQcm92aXNpb25hbCIsInNldFByb3BlcnRpZXMiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsImV2ZXJ5Iiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInN1cGVyVHl1cGUiLCJzZXRTdXBlclR5cGVzIiwidHlwZVByZWZpeGVkIiwiaXNQcmVmaXhlZCIsInByb3BlcnR5VmVyaWZlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O29FQVR3QjtnQ0FFYzswQkFFZjtzQkFDYTs7Ozs7O0FBRXBDLE1BQU0sRUFBRUEsVUFBVSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU1QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLCtCQUErQkMsb0JBQVc7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxvQkFBb0IsQ0FBRTtRQUNqRyxLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQ0osb0JBQW9CO0lBQ2xDO0lBRUFLLGdDQUFnQztRQUM5QixNQUFNVixPQUFPLElBQUksQ0FBQ1csT0FBTyxJQUNuQkMsNkJBQTZCWixNQUFNLEdBQUc7UUFFNUMsT0FBT1k7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxhQUFhLElBQUksQ0FBQ1Qsb0JBQW9CLENBQUNVLE1BQU0sQ0FBQyxDQUFDRCxZQUFZRTtZQUMvRCxNQUFNQyxXQUFXRCxvQkFBb0JFLFdBQVc7WUFFaEQsSUFBSUQsYUFBYSxNQUFNO2dCQUNyQkgsV0FBV0ssSUFB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