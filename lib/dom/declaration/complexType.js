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
                var typeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeString);
                if (typePresent) {
                    var typeRefined = this.type.isRefined();
                    if (typeRefined) {
                        typeVerified = true;
                    } else {
                        this.fileContext.debug("The type '".concat(typeString, "' is already present."));
                    }
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeString, "' type."));
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
                    var typeString = this.type.getString(), superTypes = this.type.getSuperTypes(), superTypesString = superTypesStringFromSuperTypes(superTypes);
                    this.fileContext.trace("Verifying the '".concat(typeString, "' type's ").concat(superTypesString, " super-types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeVerified = _this.verifySuperType(superType);
                        if (superTypeVerified) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        this.fileContext.debug("...verified the '".concat(typeString, "' type's ").concat(superTypesString, " super-types."));
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
                    var typeString = this.type.getString(), superTypeString = superType.getString();
                    this.fileContext.trace("Verifying the '".concat(typeString, "' type's '").concat(superTypeString, "' super-type..."));
                    var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                    superTypeVerified = superTypePresent; ///
                    if (superTypeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeString, "' type's '").concat(superTypeString, "' super-type."));
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
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        var superTypeString = superType.getString();
        superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHN1cGVyVHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50eXBlLnNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKSxcbiAgICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZWQpIHtcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVTdHJpbmcpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0eXBlUmVmaW5lZCA9IHRoaXMudHlwZS5pc1JlZmluZWQoKTtcblxuICAgICAgaWYgKHR5cGVSZWZpbmVkKSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKSxcbiAgICAgICAgICB0eXBlUmVmaW5lZCA9IHRoaXMudHlwZS5pc1JlZmluZWQoKTtcblxuICAgIGlmICh0eXBlQmFzaWMgfHwgdHlwZVJlZmluZWQpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUncyAke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSdzICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBlclR5cGVPYmplY3RUeXBlID0gKHN1cGVyVHlwZSA9PT0gb2JqZWN0VHlwZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlT2JqZWN0VHlwZSkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBzdXBlclR5cGVWZXJpZmllZCA9IHN1cGVyVHlwZVByZXNlbnQ7IC8vL1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gcHJvcGVydHkuZ2V0TmFtZXMoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZXNNYXRjaCA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZXNNYXRjaCkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlTdHJpbmcgPSBzdXBlclR5cGVQcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlci10eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb3BlcnR5VHlwZTsgIC8vL1xuXG4gICAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYHZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmaWVkID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKSB7XG4gICAgbGV0IHByb3BlcnR5VHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAocHJvcGVydHlUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUbyhwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUpIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3VwZXJUeXBlc1N0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICcke3N1cGVyVHlwZVN0cmluZ30nYDtcblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZXMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsIm1hcCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlcyIsImluY2x1ZGVTdXBlclR5cGVzIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUmVmaW5lZCIsImlzUmVmaW5lZCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJzdXBlclR5cGVWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZU9iamVjdFR5cGUiLCJvYmplY3RUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlUHJlc2VudCIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllZCIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lcyIsImdldE5hbWVzIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVzTWF0Y2giLCJtYXRjaFByb3BlcnR5TmFtZXMiLCJzdXBlclR5cGVQcm9wZXJ0eSIsImZpbmQiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwidHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUczQixXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQywrQkFBK0IsSUFBSSxDQUFDSixTQUFTO2dCQUVuRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCRCw4QkFBNkI7Z0JBRXRFLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxVQUFVO2dCQUVwQyxJQUFJRCxjQUFjO29CQUNoQixJQUFNRSxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0I7b0JBRWhELElBQUlELG9CQUFvQjt3QkFDdEIsSUFBSUU7d0JBRUpBLGFBQWEsSUFBSSxDQUFDWixJQUFJLENBQUNhLGFBQWE7d0JBRXBDRCxhQUFhQSxXQUFXRSxHQUFHLENBQUMsU0FBQ0M7NEJBQzNCLElBQU1DLGdCQUFnQkQsVUFBVUUsT0FBTzs0QkFFdkNGLFlBQVksTUFBS2pCLFdBQVcsQ0FBQ29CLGtCQUFrQixDQUFDRjs0QkFFaEQsT0FBT0Q7d0JBQ1Q7d0JBRUEsSUFBSSxDQUFDZixJQUFJLENBQUNtQixhQUFhLENBQUNQO3dCQUV4QixJQUFNUSxvQkFBb0IsT0FDcEJDLGFBQWEsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsYUFBYSxDQUFDRixvQkFDckNHLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSDt3QkFFakQsSUFBSUUsb0JBQW9COzRCQUN0QixJQUFJLENBQUN6QixXQUFXLENBQUMyQixPQUFPLENBQUMsSUFBSSxDQUFDekIsSUFBSTs0QkFFbENLLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNQLFdBQVcsQ0FBQzRCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QnBCLDhCQUE2QjtnQkFDMUU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxlQUFlO2dCQUVuQixJQUFNbUIsYUFBYSxJQUFJLENBQUMzQixJQUFJLENBQUNFLFNBQVM7Z0JBRXRDLElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWG9CLFlBQVc7Z0JBRXBELElBQU1DLGNBQWMsSUFBSSxDQUFDOUIsV0FBVyxDQUFDK0IsdUJBQXVCLENBQUNGO2dCQUU3RCxJQUFJQyxhQUFhO29CQUNmLElBQU1FLGNBQWMsSUFBSSxDQUFDOUIsSUFBSSxDQUFDK0IsU0FBUztvQkFFdkMsSUFBSUQsYUFBYTt3QkFDZnRCLGVBQWU7b0JBQ2pCLE9BQU87d0JBQ0wsSUFBSSxDQUFDVixXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxhQUF1QixPQUFYQyxZQUFXO29CQUNqRDtnQkFDRixPQUFPO29CQUNMbkIsZUFBZTtnQkFDakI7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEIsSUFBSSxDQUFDVixXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEMsWUFBVztnQkFDeEQ7Z0JBRUEsT0FBT25CO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlEO2dCQUVKLElBQU1zQixZQUFZLElBQUksQ0FBQ2hDLElBQUksQ0FBQ2lDLE9BQU8sSUFDN0JILGNBQWMsSUFBSSxDQUFDOUIsSUFBSSxDQUFDK0IsU0FBUztnQkFFdkMsSUFBSUMsYUFBYUYsYUFBYTtvQkFDNUJwQixxQkFBcUI7Z0JBQ3ZCLE9BQU87b0JBQ0wsSUFBTWlCLGFBQWEsSUFBSSxDQUFDM0IsSUFBSSxDQUFDRSxTQUFTLElBQ2hDVSxhQUFhLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxhQUFhLElBQ3BDcUIsbUJBQW1CQywrQkFBK0J2QjtvQkFFeEQsSUFBSSxDQUFDZCxXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUF1QzJCLE9BQXRCUCxZQUFXLGFBQTRCLE9BQWpCTyxrQkFBaUI7b0JBRWhGeEIscUJBQXFCRSxXQUFXd0IsS0FBSyxDQUFDLFNBQUNyQjt3QkFDckMsSUFBTXNCLG9CQUFvQixNQUFLQyxlQUFlLENBQUN2Qjt3QkFFL0MsSUFBSXNCLG1CQUFtQjs0QkFDckIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJM0Isb0JBQW9CO3dCQUN0QixJQUFJLENBQUNaLFdBQVcsQ0FBQzRCLEtBQUssQ0FBQyxBQUFDLG9CQUF5Q1EsT0FBdEJQLFlBQVcsYUFBNEIsT0FBakJPLGtCQUFpQjtvQkFDcEY7Z0JBQ0Y7Z0JBRUEsT0FBT3hCO1lBQ1Q7OztZQUVBNEIsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQnZCLFNBQVM7Z0JBQ3ZCLElBQUlzQjtnQkFFSixJQUFNRSxzQkFBdUJ4QixjQUFjeUIsZ0JBQVU7Z0JBRXJELElBQUlELHFCQUFxQjtvQkFDdkJGLG9CQUFvQjtnQkFDdEIsT0FBTztvQkFDTCxJQUFNVixhQUFhLElBQUksQ0FBQzNCLElBQUksQ0FBQ0UsU0FBUyxJQUNoQ3VDLGtCQUFrQjFCLFVBQVViLFNBQVM7b0JBRTNDLElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBd0NrQyxPQUF2QmQsWUFBVyxjQUE0QixPQUFoQmMsaUJBQWdCO29CQUVoRixJQUFNekIsZ0JBQWdCRCxVQUFVRSxPQUFPLElBQ2pDeUIsbUJBQW1CLElBQUksQ0FBQzVDLFdBQVcsQ0FBQytCLHVCQUF1QixDQUFDYjtvQkFFbEVxQixvQkFBb0JLLGtCQUFrQixHQUFHO29CQUV6QyxJQUFJTCxtQkFBbUI7d0JBQ3JCLElBQUksQ0FBQ3ZDLFdBQVcsQ0FBQzRCLEtBQUssQ0FBQyxBQUFDLG9CQUEwQ2UsT0FBdkJkLFlBQVcsY0FBNEIsT0FBaEJjLGlCQUFnQjtvQkFDcEY7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxRQUFRLEVBQUV2QixVQUFVLEVBQUV3QixtQkFBbUI7Z0JBQ3RELElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsaUJBQWlCSCxTQUFTMUMsU0FBUztnQkFFekMsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmd0MsZ0JBQWU7Z0JBRXhELElBQU1DLGdCQUFnQkosU0FBU0ssUUFBUSxJQUNqQ0MsUUFBUTdCLFdBQVc4QixNQUFNLENBQUMsU0FBQ0QsT0FBT047b0JBQ2hDLElBQU1RLHFCQUFxQlIsU0FBU1Msa0JBQWtCLENBQUNMO29CQUV2RCxJQUFJSSxvQkFBb0I7d0JBQ3RCRjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHO2dCQUVULElBQUlBLFFBQVEsR0FBRztvQkFDYixJQUFJLENBQUNwRCxXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmcUIsZ0JBQWU7Z0JBQ2hELE9BQU87b0JBQ0wsSUFBTU8sb0JBQW9CVCxvQkFBb0JVLElBQUksQ0FBQyxTQUFDRDt3QkFDbEQsSUFBTUUsc0JBQXNCRixrQkFBa0JELGtCQUFrQixDQUFDTDt3QkFFakUsSUFBSVEscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGLE1BQU07b0JBRU4sSUFBSUYsc0JBQXNCLE1BQU07d0JBQzlCLElBQU1HLDBCQUEwQkgsa0JBQWtCcEQsU0FBUzt3QkFFM0QsSUFBSSxDQUFDSixXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxRQUE2RCtCLE9BQXREVixnQkFBZSx5Q0FBK0QsT0FBeEJVLHlCQUF3QjtvQkFDL0csT0FBTzt3QkFDTCxJQUFJQzt3QkFFSkEsZUFBZWQsU0FBU3pDLE9BQU87d0JBRS9CLElBQU13RCx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0Y7d0JBRXJELElBQUlDLHNCQUFzQjs0QkFDeEIsSUFBTUUsbUJBQW1CSCxhQUFhekMsT0FBTzs0QkFFN0N5QyxlQUFlLElBQUksQ0FBQzVELFdBQVcsQ0FBQ29CLGtCQUFrQixDQUFDMkM7NEJBRW5ELElBQU03RCxPQUFPMEQsY0FBZSxHQUFHOzRCQUUvQmQsU0FBU2tCLE9BQU8sQ0FBQzlEOzRCQUVqQjhDLG1CQUFtQjt3QkFDckI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsa0JBQWtCO29CQUNwQixJQUFJLENBQUNoRCxXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZnFCLGdCQUFlO2dCQUN6RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQXRCLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJILFVBQVU7O2dCQUN6QixJQUFJRTtnQkFFSixJQUFNWCxhQUFhLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxhQUFhO2dCQUUxQ1UscUJBQXFCWCxXQUFXd0IsS0FBSyxDQUFDLFNBQUNyQjtvQkFDckMsSUFBTThCLHNCQUFzQjlCLFVBQVVPLGFBQWEsSUFDN0NDLHFCQUFxQkYsV0FBV2UsS0FBSyxDQUFDLFNBQUNRO3dCQUNyQyxJQUFNRSxtQkFBbUIsTUFBS0gsY0FBYyxDQUFDQyxVQUFVdkIsWUFBWXdCO3dCQUVuRSxJQUFJQyxrQkFBa0I7NEJBQ3BCLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRU4sSUFBSXZCLG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQXFDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLFlBQVk7Z0JBQzdCLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBSUQsaUJBQWlCbEIsZ0JBQVUsRUFBRTtvQkFDL0JtQix1QkFBdUI7Z0JBQ3pCLE9BQU87b0JBQ0wsSUFBTUksMEJBQTBCLElBQUksQ0FBQy9ELElBQUksQ0FBQ2dFLFNBQVMsQ0FBQ047b0JBRXBELElBQUlLLHlCQUF5Qjt3QkFDM0JKLHVCQUF1QjtvQkFDekIsT0FBUTt3QkFDTixJQUFNTSxxQkFBcUJQLGFBQWF4RCxTQUFTLElBQUksR0FBRzt3QkFFeEQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQjBELG9CQUFtQjt3QkFFNUQsSUFBTUosbUJBQW1CSCxhQUFhekMsT0FBTyxJQUN2Q2lELHNCQUFzQixJQUFJLENBQUNwRSxXQUFXLENBQUMrQix1QkFBdUIsQ0FBQ2dDO3dCQUVyRSxJQUFJLENBQUNLLHFCQUFxQjs0QkFDeEIsSUFBTUQsc0JBQXFCUCxhQUFheEQsU0FBUzs0QkFFakQsSUFBSSxDQUFDSixXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxRQUEwQixPQUFuQnVDLHFCQUFtQjt3QkFDcEQsT0FBTzs0QkFDTE4sdUJBQXVCO3dCQUN6Qjt3QkFFQSxJQUFJQSxzQkFBc0I7NEJBQ3hCLElBQUksQ0FBQzdELFdBQVcsQ0FBQzRCLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQnVDLG9CQUFtQjt3QkFDaEU7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFdEUsV0FBVztnQkFDM0UsSUFBTSxBQUFFdUUsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxPQUFPSCw0QkFDUHJFLFNBQVNELFlBQVkwRSxZQUFZLENBQUNELE9BQ2xDdkUsT0FBT3FFLEtBQUtGLDhCQUE4QixDQUFDQyw0QkFBNEJ0RSxjQUN2RTJFLHlCQUF5QixJQUFJNUUsdUJBQXVCQyxhQUFhQyxRQUFRQztnQkFFL0UsT0FBT3lFO1lBQ1Q7Ozs7S0FWQSwwQ0FBT0MsUUFBTztBQWFoQixTQUFTdkMsK0JBQStCdkIsVUFBVTtJQUNoRCxJQUFNc0IsbUJBQW1CdEIsV0FBV3VDLE1BQU0sQ0FBQyxTQUFDakIsa0JBQWtCbkI7UUFDNUQsSUFBTTBCLGtCQUFrQjFCLFVBQVViLFNBQVM7UUFFM0NnQyxtQkFBbUIsQUFBQ0EscUJBQXFCLE9BQ3JCLEFBQUMsSUFBbUIsT0FBaEJPLGlCQUFnQixPQUNsQixBQUFDLEdBQXdCQSxPQUF0QlAsa0JBQWlCLE9BQXFCLE9BQWhCTyxpQkFBZ0I7UUFFL0QsT0FBT1A7SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVCJ9