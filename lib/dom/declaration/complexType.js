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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHtzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMsIHN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGV9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbXBsZXhUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllZCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0eXBlUmVmaW5lZCA9IHRoaXMudHlwZS5pc1JlZmluZWQoKTtcblxuICAgICAgaWYgKHR5cGVSZWZpbmVkKSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpLFxuICAgICAgICAgIHR5cGVSZWZpbmVkID0gdGhpcy50eXBlLmlzUmVmaW5lZCgpO1xuXG4gICAgaWYgKHR5cGVCYXNpYyB8fCB0eXBlUmVmaW5lZCkge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuLi5gKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmaWVkID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBlclR5cGVPYmplY3RUeXBlID0gKHN1cGVyVHlwZSA9PT0gb2JqZWN0VHlwZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlT2JqZWN0VHlwZSkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVkID0gc3VwZXJUeXBlUHJlc2VudDsgLy8vXG5cbiAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gcHJvcGVydHkuZ2V0TmFtZXMoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZXNNYXRjaCA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZXNNYXRjaCkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlTdHJpbmcgPSBzdXBlclR5cGVQcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlci10eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb3BlcnR5VHlwZTsgIC8vL1xuXG4gICAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYHZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmaWVkID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKSB7XG4gICAgbGV0IHByb3BlcnR5VHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAocHJvcGVydHlUeXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAodHlwZU5hbWUgPT09IHByb3BlcnR5VHlwZU5hbWUpIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZpZWQiLCJ2ZXJpZnlTdXBlclR5cGVzIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJtYXAiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydGllc1ZlcmlmaWVkIiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVSZWZpbmVkIiwiaXNSZWZpbmVkIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJldmVyeSIsInN1cGVyVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlT2JqZWN0VHlwZSIsIm9iamVjdFR5cGUiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlIiwic3VwZXJUeXBlUHJlc2VudCIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllZCIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lcyIsImdldE5hbWVzIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVzTWF0Y2giLCJtYXRjaFByb3BlcnR5TmFtZXMiLCJzdXBlclR5cGVQcm9wZXJ0eSIsImZpbmQiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29CQUVXO3FCQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNFLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE5IO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLCtCQUErQixJQUFJLENBQUNKLFNBQVM7Z0JBRW5ELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QjtnQkFFdEUsSUFBTUUsZUFBZSxJQUFJLENBQUNDLFVBQVU7Z0JBRXBDLElBQUlELGNBQWM7b0JBQ2hCLElBQU1FLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQjtvQkFFaEQsSUFBSUQsb0JBQW9CO3dCQUN0QixJQUFJRTt3QkFFSkEsYUFBYSxJQUFJLENBQUNaLElBQUksQ0FBQ2EsYUFBYTt3QkFFcENELGFBQWFBLFdBQVdFLEdBQUcsQ0FBQyxTQUFDQzs0QkFDM0IsSUFBTUMsZ0JBQWdCRCxVQUFVRSxPQUFPOzRCQUV2Q0YsWUFBWSxNQUFLakIsV0FBVyxDQUFDb0Isa0JBQWtCLENBQUNGOzRCQUVoRCxPQUFPRDt3QkFDVDt3QkFFQSxJQUFJLENBQUNmLElBQUksQ0FBQ21CLGFBQWEsQ0FBQ1A7d0JBRXhCLElBQU1RLG9CQUFvQixPQUNwQkMsYUFBYSxJQUFJLENBQUNyQixJQUFJLENBQUNzQixhQUFhLENBQUNGLG9CQUNyQ0cscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNIO3dCQUVqRCxJQUFJRSxvQkFBb0I7NEJBQ3RCLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQzJCLE9BQU8sQ0FBQyxJQUFJLENBQUN6QixJQUFJOzRCQUVsQ0ssV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1AsV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCcEIsOEJBQTZCO2dCQUMxRTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELGVBQWU7Z0JBRW5CLElBQU1tQixXQUFXLElBQUksQ0FBQzNCLElBQUksQ0FBQ2lCLE9BQU87Z0JBRWxDLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQTBCLE9BQVRvQixVQUFTO2dCQUVsRCxJQUFNQyxjQUFjLElBQUksQ0FBQzlCLFdBQVcsQ0FBQytCLHVCQUF1QixDQUFDRjtnQkFFN0QsSUFBSUMsYUFBYTtvQkFDZixJQUFNRSxjQUFjLElBQUksQ0FBQzlCLElBQUksQ0FBQytCLFNBQVM7b0JBRXZDLElBQUlELGFBQWE7d0JBQ2Z0QixlQUFlO29CQUNqQixPQUFPO3dCQUNMLElBQUksQ0FBQ1YsV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsYUFBcUIsT0FBVEMsVUFBUztvQkFDL0M7Z0JBQ0YsT0FBTztvQkFDTG5CLGVBQWU7Z0JBQ2pCO2dCQUVBLElBQUlBLGNBQWM7b0JBQ2hCLElBQUksQ0FBQ1YsV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsb0JBQTRCLE9BQVRDLFVBQVM7Z0JBQ3REO2dCQUVBLE9BQU9uQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJRDtnQkFFSixJQUFNc0IsWUFBWSxJQUFJLENBQUNoQyxJQUFJLENBQUNpQyxPQUFPLElBQzdCSCxjQUFjLElBQUksQ0FBQzlCLElBQUksQ0FBQytCLFNBQVM7Z0JBRXZDLElBQUlDLGFBQWFGLGFBQWE7b0JBQzVCcEIscUJBQXFCO2dCQUN2QixPQUFPO29CQUNMLElBQU1pQixXQUFXLElBQUksQ0FBQzNCLElBQUksQ0FBQ2lCLE9BQU8sSUFDNUJMLGFBQWEsSUFBSSxDQUFDWixJQUFJLENBQUNhLGFBQWEsSUFDcENxQixtQkFBbUJDLElBQUFBLHFDQUE4QixFQUFDdkI7b0JBRXhELElBQUksQ0FBQ2QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBcUMyQixPQUFwQlAsVUFBUyxhQUE0QixPQUFqQk8sa0JBQWlCO29CQUU5RXhCLHFCQUFxQkUsV0FBV3dCLEtBQUssQ0FBQyxTQUFDckI7d0JBQ3JDLElBQU1zQixvQkFBb0IsTUFBS0MsZUFBZSxDQUFDdkI7d0JBRS9DLElBQUlzQixtQkFBbUI7NEJBQ3JCLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRUEsSUFBSTNCLG9CQUFvQjt3QkFDdEIsSUFBSSxDQUFDWixXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxvQkFBdUNRLE9BQXBCUCxVQUFTLGFBQTRCLE9BQWpCTyxrQkFBaUI7b0JBQ2xGO2dCQUNGO2dCQUVBLE9BQU94QjtZQUNUOzs7WUFFQTRCLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0J2QixTQUFTO2dCQUN2QixJQUFJc0I7Z0JBRUosSUFBTUUsc0JBQXVCeEIsY0FBY3lCLGdCQUFVO2dCQUVyRCxJQUFJRCxxQkFBcUI7b0JBQ3ZCRixvQkFBb0I7Z0JBQ3RCLE9BQU87b0JBQ0wsSUFBTVYsV0FBVyxJQUFJLENBQUMzQixJQUFJLENBQUNFLFNBQVMsSUFDOUJ1QyxrQkFBa0JDLElBQUFBLG1DQUE0QixFQUFDM0I7b0JBRXJELElBQUksQ0FBQ2pCLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQXNDa0MsT0FBckJkLFVBQVMsY0FBNEIsT0FBaEJjLGlCQUFnQjtvQkFFOUUsSUFBTXpCLGdCQUFnQkQsVUFBVUUsT0FBTyxJQUNqQzBCLG1CQUFtQixJQUFJLENBQUM3QyxXQUFXLENBQUMrQix1QkFBdUIsQ0FBQ2I7b0JBRWxFcUIsb0JBQW9CTSxrQkFBa0IsR0FBRztvQkFFekMsSUFBSU4sbUJBQW1CO3dCQUNyQixJQUFJLENBQUN2QyxXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxvQkFBd0NlLE9BQXJCZCxVQUFTLGNBQTRCLE9BQWhCYyxpQkFBZ0I7b0JBQ2xGO2dCQUNGO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsUUFBUSxFQUFFeEIsVUFBVSxFQUFFeUIsbUJBQW1CO2dCQUN0RCxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLGlCQUFpQkgsU0FBUzNDLFNBQVM7Z0JBRXpDLElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZnlDLGdCQUFlO2dCQUV4RCxJQUFNQyxnQkFBZ0JKLFNBQVNLLFFBQVEsSUFDakNDLFFBQVE5QixXQUFXK0IsTUFBTSxDQUFDLFNBQUNELE9BQU9OO29CQUNoQyxJQUFNUSxxQkFBcUJSLFNBQVNTLGtCQUFrQixDQUFDTDtvQkFFdkQsSUFBSUksb0JBQW9CO3dCQUN0QkY7b0JBQ0Y7b0JBRUEsT0FBT0E7Z0JBQ1QsR0FBRztnQkFFVCxJQUFJQSxRQUFRLEdBQUc7b0JBQ2IsSUFBSSxDQUFDckQsV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsUUFBc0IsT0FBZnNCLGdCQUFlO2dCQUNoRCxPQUFPO29CQUNMLElBQU1PLG9CQUFvQlQsb0JBQW9CVSxJQUFJLENBQUMsU0FBQ0Q7d0JBQ2xELElBQU1FLHNCQUFzQkYsa0JBQWtCRCxrQkFBa0IsQ0FBQ0w7d0JBRWpFLElBQUlRLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRixNQUFNO29CQUVOLElBQUlGLHNCQUFzQixNQUFNO3dCQUM5QixJQUFNRywwQkFBMEJILGtCQUFrQnJELFNBQVM7d0JBRTNELElBQUksQ0FBQ0osV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsUUFBNkRnQyxPQUF0RFYsZ0JBQWUseUNBQStELE9BQXhCVSx5QkFBd0I7b0JBQy9HLE9BQU87d0JBQ0wsSUFBSUM7d0JBRUpBLGVBQWVkLFNBQVMxQyxPQUFPO3dCQUUvQixJQUFNeUQsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGO3dCQUVyRCxJQUFJQyxzQkFBc0I7NEJBQ3hCLElBQU1FLG1CQUFtQkgsYUFBYTFDLE9BQU87NEJBRTdDMEMsZUFBZSxJQUFJLENBQUM3RCxXQUFXLENBQUNvQixrQkFBa0IsQ0FBQzRDOzRCQUVuRCxJQUFNOUQsT0FBTzJELGNBQWUsR0FBRzs0QkFFL0JkLFNBQVNrQixPQUFPLENBQUMvRDs0QkFFakIrQyxtQkFBbUI7d0JBQ3JCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLGtCQUFrQjtvQkFDcEIsSUFBSSxDQUFDakQsV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsaUJBQStCLE9BQWZzQixnQkFBZTtnQkFDekQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUF2QixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSCxVQUFVOztnQkFDekIsSUFBSUU7Z0JBRUosSUFBTVgsYUFBYSxJQUFJLENBQUNaLElBQUksQ0FBQ2EsYUFBYTtnQkFFMUNVLHFCQUFxQlgsV0FBV3dCLEtBQUssQ0FBQyxTQUFDckI7b0JBQ3JDLElBQU0rQixzQkFBc0IvQixVQUFVTyxhQUFhLElBQzdDQyxxQkFBcUJGLFdBQVdlLEtBQUssQ0FBQyxTQUFDUzt3QkFDckMsSUFBTUUsbUJBQW1CLE1BQUtILGNBQWMsQ0FBQ0MsVUFBVXhCLFlBQVl5Qjt3QkFFbkUsSUFBSUMsa0JBQWtCOzRCQUNwQixPQUFPO3dCQUNUO29CQUNGO29CQUVOLElBQUl4QixvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFzQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRixZQUFZO2dCQUM3QixJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQUlELGlCQUFpQm5CLGdCQUFVLEVBQUU7b0JBQy9Cb0IsdUJBQXVCO2dCQUN6QixPQUFPO29CQUNMLElBQU1qQyxXQUFXLElBQUksQ0FBQzNCLElBQUksQ0FBQ2lCLE9BQU8sSUFDNUI2QyxtQkFBbUJILGFBQWExQyxPQUFPO29CQUU3QyxJQUFJVSxhQUFhbUMsa0JBQWtCO3dCQUNqQ0YsdUJBQXVCO29CQUN6QixPQUFRO3dCQUNOLElBQU1JLHFCQUFxQkwsYUFBYXpELFNBQVMsSUFBSSxHQUFHO3dCQUV4RCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CeUQsb0JBQW1CO3dCQUU1RCxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDbkUsV0FBVyxDQUFDK0IsdUJBQXVCLENBQUNpQzt3QkFFckUsSUFBSSxDQUFDRyxxQkFBcUI7NEJBQ3hCLElBQU1ELHNCQUFxQkwsYUFBYXpELFNBQVM7NEJBRWpELElBQUksQ0FBQ0osV0FBVyxDQUFDNEIsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJzQyxxQkFBbUI7d0JBQ3BELE9BQU87NEJBQ0xKLHVCQUF1Qjt3QkFDekI7d0JBRUEsSUFBSUEsc0JBQXNCOzRCQUN4QixJQUFJLENBQUM5RCxXQUFXLENBQUM0QixLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJzQyxvQkFBbUI7d0JBQ2hFO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9KO1lBQ1Q7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRXJFLFdBQVc7Z0JBQzNFLElBQU0sQUFBRXNFLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsT0FBT0gsNEJBQ1BwRSxTQUFTRCxZQUFZeUUsWUFBWSxDQUFDRCxPQUNsQ3RFLE9BQU9vRSxLQUFLRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCckUsY0FDdkUwRSx5QkFBeUIsSUFBSTNFLHVCQUF1QkMsYUFBYUMsUUFBUUM7Z0JBRS9FLE9BQU93RTtZQUNUOzs7O0tBVkEsMENBQU9DLFFBQU8ifQ==