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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmNvbnN0IHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHN1cGVyVHlwZXMsIHByb3Zpc2lvbmFsLCBwcm9wZXJ0eURlY2xhcmF0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gICAgdGhpcy5wcm9wZXJ0eURlY2xhcmF0aW9ucyA9IHByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLnJlZHVjZSgocHJvcGVydGllcywgcHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eURlY2xhcmF0aW9uLmdldFByb3BlcnR5KCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvcGVydHlEZWNsYXJhdGlzb25zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcywgY29udGV4dCkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXVwZSA9IGJhc2VUeXBlOyAgLy8vXG5cbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHl1cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoY29udGV4dCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9wZXJ0eURlY2xhcmF0aXNvbnMoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eURlY2xhcmF0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnByb3BlcnR5RGVjbGFyYXRpb25zLCBhc3luYyAocHJvcGVydHlEZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmVzID0gYXdhaXQgcHJvcGVydHlEZWNsYXJhdGlvbi52ZXJpZnkocHJvcGVydGllcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5RGVjbGFyYXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJzdXBlclR5cGVzIiwicHJvdmlzaW9uYWwiLCJwcm9wZXJ0eURlY2xhcmF0aW9ucyIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiaXNQcm92aXNpb25hbCIsImdldFByb3BlcnR5RGVjbGFyYXRpb25zIiwiZ2V0Q29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlZHVjZSIsInByb3BlcnR5RGVjbGFyYXRpb24iLCJwcm9wZXJ0eSIsImdldFByb3BlcnR5IiwicHVzaCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwicHJvcGVydHlEZWNsYXJhdGlvbnNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0eURlY2xhcmF0aXNvbnMiLCJzZXRQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwicHJvcGVydHlWZXJpZmVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7b0VBVHdCO2dDQUVjOzBCQUVmO3NCQUNhOzs7Ozs7QUFFcEMsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsK0JBQStCQyxvQkFBVztJQUNwRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFX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