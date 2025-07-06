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
var _type = require("../type");
var _type1 = require("../declaration/type");
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
                var _this = this;
                var verified = false;
                var complexTypeDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
                var typeVerified = this.verifyType();
                if (typeVerified) {
                    var superTypesVerified = this.verifySuperTypes();
                    if (superTypesVerified) {
                        var superTypes;
                        superTypes = this.type.getSuperTypes();
                        superTypes = superTypes.map(function(superType) {
                            var superTypeName = superType.getName();
                            superType = _this.fileContext.findTypeByTypeName(superTypeName);
                            return superType;
                        });
                        this.type.setSuperTypes(superTypes);
                        var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes), propertiesVerified = this.verifyProperties(properties);
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
                var typeName = this.type.getName();
                this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    var typeRefined = this.type.isRefined();
                    if (typeRefined) {
                        typeVerified = true;
                    } else {
                        this.fileContext.debug("The type '".concat(typeName, "' is already present."));
                    }
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified;
                var typeBasic = this.type.isBasic(), typeRefined = this.type.isRefined();
                if (typeBasic || typeRefined) {
                    superTypesVerified = true;
                } else {
                    var typeName = this.type.getName(), superTypes = this.type.getSuperTypes(), superTypesString = (0, _type1.superTypesStringFromSuperTypes)(superTypes);
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type's ").concat(superTypesString, " super-types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeVerified = _this.verifySuperType(superType);
                        if (superTypeVerified) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type's ").concat(superTypesString, " super-types."));
                    }
                }
                return superTypesVerified;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerified;
                var superTypeObjectType = superType === _type.objectType;
                if (superTypeObjectType) {
                    superTypeVerified = true;
                } else {
                    var typeName = this.type.getString(), superTypeString = (0, _type1.superTypeStringFromSuperType)(superType);
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type..."));
                    var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                    superTypeVerified = superTypePresent; ///
                    if (superTypeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type."));
                    }
                }
                return superTypeVerified;
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
            value: function verifyProperties(properties) {
                var _this = this;
                var propertiesVerified;
                var superTypes = this.type.getSuperTypes();
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
                if (propertyType === _type.objectType) {
                    propertyTypeVerified = true;
                } else {
                    var typeName = this.type.getName(), propertyTypeName = propertyType.getName();
                    if (typeName === propertyTypeName) {
                        propertyTypeVerified = true;
                    } else {
                        var propertyTypeString = propertyType.getString(); ///
                        this.fileContext.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                        var propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlU3RyaW5nRnJvbVN1cGVyVHlwZSwgc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmaWVkKSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHR5cGVSZWZpbmVkID0gdGhpcy50eXBlLmlzUmVmaW5lZCgpO1xuXG4gICAgICBpZiAodHlwZVJlZmluZWQpIHtcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCksXG4gICAgICAgICAgdHlwZVJlZmluZWQgPSB0aGlzLnR5cGUuaXNSZWZpbmVkKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljIHx8IHR5cGVSZWZpbmVkKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU9iamVjdFR5cGUgPSAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKTtcblxuICAgIGlmIChzdXBlclR5cGVPYmplY3RUeXBlKSB7XG4gICAgICBzdXBlclR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlU3RyaW5nRnJvbVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSBzdXBlclR5cGVQcmVzZW50OyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBwcm9wZXJ0eS5nZXROYW1lcygpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lc01hdGNoID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lc01hdGNoKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5ID0gc3VwZXJUeXBlUHJvcGVydGllcy5maW5kKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gc3VwZXJUeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgdmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZpZWQgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmaWVkID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcGVydGllc1ZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpIHtcbiAgICBsZXQgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmICh0eXBlTmFtZSA9PT0gcHJvcGVydHlUeXBlTmFtZSkge1xuICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2UgIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuLi5gKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICBpZiAoIXByb3BlcnR5VHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZXMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsIm1hcCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlcyIsImluY2x1ZGVTdXBlclR5cGVzIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVJlZmluZWQiLCJpc1JlZmluZWQiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImV2ZXJ5Iiwic3VwZXJUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGVPYmplY3RUeXBlIiwib2JqZWN0VHlwZSIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUiLCJzdXBlclR5cGVQcmVzZW50IiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVkIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWVzIiwiZ2V0TmFtZXMiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5TmFtZXNNYXRjaCIsIm1hdGNoUHJvcGVydHlOYW1lcyIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVZlcmlmaWVkIiwidmVyaWZ5UHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlTmFtZSIsInNldFR5cGUiLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRVc7cUJBRWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0UsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FETkg7UUFFN0IsSUFBSSxDQUFD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