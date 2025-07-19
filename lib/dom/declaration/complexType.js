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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _type = require("../../utilities/type");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _ComplexTypeDeclaration;
var _default = (0, _dom.domAssigned)((_ComplexTypeDeclaration = /*#__PURE__*/ function() {
    function ComplexTypeDeclaration(fileContext, string, type) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.type = type;
    }
    _create_class(ComplexTypeDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var complexTypeDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
                var typeVerified = this.verifyType();
                if (typeVerified) {
                    var superTypesVerified = this.verifySuperTypes();
                    if (superTypesVerified) {
                        var propertiesVerified = this.verifyProperties();
                        if (propertiesVerified) {
                            this.fileContext.addType(this.type);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerified = false;
                var typeName = this.type.getName(), complexTypeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeString, "' complex type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(complexTypeString, "' is already present."));
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(complexTypeString, "' complex type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerified;
                var superTypeString = superType.getString();
                this.fileContext.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                superTypeVerified = superTypePresent; ///
                if (superTypeVerified) {
                    this.fileContext.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerified;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified;
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerified = true;
                } else {
                    var superTypes;
                    superTypes = this.type.getSuperTypes();
                    var superTypesString = (0, _type.superTypesStringFromSuperTypes)(superTypes);
                    this.fileContext.trace("Verifying the '".concat(superTypesString, " super-types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeVerified = _this.verifySuperType(superType);
                        if (superTypeVerified) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        superTypes = superTypes.map(function(superType) {
                            var superTypeName = superType.getName();
                            superType = _this.fileContext.findTypeByTypeName(superTypeName);
                            return superType;
                        });
                        this.type.setSuperTypes(superTypes);
                        this.fileContext.debug("...verified the' '".concat(superTypesString, " super-types."));
                    }
                }
                return superTypesVerified;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerified = false;
                var propertyString = property.getString();
                this.fileContext.trace("Verifying the '".concat(propertyString, "' property..."));
                var propertyNames = property.getNames(), count = properties.reduce(function(count, property) {
                    var propertyNamesMatch = property.matchPropertyNames(propertyNames);
                    if (propertyNamesMatch) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.fileContext.debug("The '".concat(propertyString, "' property appears more than once."));
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyNameMatches = superTypeProperty.matchPropertyNames(propertyNames);
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.fileContext.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."));
                    } else {
                        var propertyType;
                        propertyType = property.getType();
                        var propertyTypeVerified = this.verifyPropertyType(propertyType);
                        if (propertyTypeVerified) {
                            var propertyTypeName = propertyType.getName();
                            propertyType = this.fileContext.findTypeByTypeName(propertyTypeName);
                            var type = propertyType; ///
                            property.setType(type);
                            propertyVerified = true;
                        }
                    }
                }
                if (propertyVerified) {
                    this.fileContext.debug("verified the '".concat(propertyString, "' property."));
                }
                return propertyVerified;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerified;
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes), superTypes = this.type.getSuperTypes();
                propertiesVerified = superTypes.every(function(superType) {
                    var superTypeProperties = superType.getProperties(), propertiesVerified = properties.every(function(property) {
                        var propertyVerified = _this.verifyProperty(property, properties, superTypeProperties);
                        if (propertyVerified) {
                            return true;
                        }
                    });
                    if (propertiesVerified) {
                        return true;
                    }
                });
                return propertiesVerified;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(propertyType) {
                var propertyTypeVerified = false;
                var typeEqualToPropertyType = this.type.isEqualTo(propertyType);
                if (typeEqualToPropertyType) {
                    propertyTypeVerified = true;
                } else {
                    var propertyTypeString = propertyType.getString(); ///
                    this.fileContext.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);
                    if (!propertyTypePresent) {
                        var propertyTypeString1 = propertyType.getString();
                        this.fileContext.debug("The '".concat(propertyTypeString1, "' property type is not present."));
                    } else {
                        propertyTypeVerified = true;
                    }
                    if (propertyTypeVerified) {
                        this.fileContext.debug("...verified the '".concat(propertyTypeString, "' property type."));
                    }
                }
                return propertyTypeVerified;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, node = complexTypeDeclarationNode, string = fileContext.nodeAsString(node), type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllZCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBzdXBlclR5cGVWZXJpZmllZCA9IHN1cGVyVHlwZVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZScgJyR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBwcm9wZXJ0eS5nZXROYW1lcygpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lc01hdGNoID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lc01hdGNoKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5ID0gc3VwZXJUeXBlUHJvcGVydGllcy5maW5kKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gc3VwZXJUeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgdmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKClcblxuICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzVmVyaWZpZWQgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvKHByb3BlcnR5VHlwZSk7XG5cbiAgICBpZiAodHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXByb3BlcnR5VHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmaWVkIiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZmllZCIsInZlcmlmeVByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJjb21wbGV4VHlwZVN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllZCIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImV2ZXJ5IiwibWFwIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlcyIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZWQiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZXMiLCJnZXROYW1lcyIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lc01hdGNoIiwibWF0Y2hQcm9wZXJ0eU5hbWVzIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwic2V0VHlwZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUcrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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