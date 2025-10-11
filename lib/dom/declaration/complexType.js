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
    function ComplexTypeDeclaration(context, node, string, type, prefixed) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.type = type;
        this.prefixed = prefixed;
    }
    _create_class(ComplexTypeDeclaration, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
            key: "isPrefixed",
            value: function isPrefixed() {
                return this.prefixed;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.context.getReleaseContext();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var complexTypeDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."), this.node);
                if (this.prefixed) {
                    var typeString = this.type.getString();
                    this.context.trace("The '".concat(typeString, "' type is prefixed."));
                } else {
                    var typeVerifies = this.verifyType();
                    if (typeVerifies) {
                        var superTypesVerify = this.verifySuperTypes();
                        if (superTypesVerify) {
                            var propertiesVerify = this.verifyProperties();
                            if (propertiesVerify) {
                                this.context.addType(this.type);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' complex type..."), this.node);
                var typeName = this.type.getName(), typePresent = this.context.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is already present in the package."), this.node);
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' complex type."), this.node);
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var superTypeString = superType.getString();
                this.context.trace("Verifying the '".concat(superTypeString, "' super-type..."), this.node);
                var typeName = this.type.getName(), superTypeName = superTypeString, typeNameMatches = typeName === superTypeName;
                if (typeNameMatches) {
                    this.context.trace("The super-type's name matches the ".concat(typeName, "' complex type's name."), this.node);
                } else {
                    var oldSuperType = superType; ///
                    superType = this.context.findTypeByTypeName(superTypeName);
                    var superTypePresent = superType !== null;
                    if (superTypePresent) {
                        var newSuperType = superType; ///
                        this.type.replaceSuperType(oldSuperType, newSuperType);
                        superTypeVerifies = true;
                    }
                }
                if (superTypeVerifies) {
                    this.context.debug("...verified the '".concat(superTypeString, "' super-type."), this.node);
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var typeString = this.type.getString();
                this.context.trace("Verifying the super-types of the '".concat(typeString, "' complex type..."), this.node);
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    this.context.trace("The '".concat(typeString, "' complex type is basic."), this.node);
                } else {
                    var superTypes = this.type.getSuperTypes();
                    superTypesVerify = superTypes.every(function(superType) {
                        var superTypeVerifies = _this.verifySuperType(superType);
                        if (superTypeVerifies) {
                            return true;
                        }
                    });
                }
                if (superTypesVerify) {
                    this.context.debug("...verified the super-types of the '".concat(typeString, "' complex type."), this.node);
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerifies = false;
                var propertyString = property.getString();
                this.context.trace("Verifying the '".concat(propertyString, "' property..."), this.node);
                var propertyName = property.getName(), count = properties.reduce(function(count, property) {
                    var propertyNameMatches = property.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.context.debug("The '".concat(propertyString, "' property appears more than once."), this.node);
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.context.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."), this.node);
                    } else {
                        var propertyType;
                        propertyType = property.getType();
                        var propertyTypeVerifies = this.verifyPropertyType(propertyType);
                        if (propertyTypeVerifies) {
                            var propertyTypeName = propertyType.getName();
                            propertyType = this.context.findTypeByTypeName(propertyTypeName);
                            var type = propertyType; ///
                            property.setType(type);
                            propertyVerifies = true;
                        }
                    }
                }
                if (propertyVerifies) {
                    var typeName = this.type.getName(), prefixed = true, typeNameMatches = property.matchTypeName(typeName, prefixed, this.context);
                    if (typeNameMatches) {
                        property.setType(this.type);
                    }
                    this.context.debug("verifies the '".concat(propertyString, "' property."), this.node);
                }
                return propertyVerifies;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerify;
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes), superTypes = this.type.getSuperTypes();
                propertiesVerify = superTypes.every(function(superType) {
                    var superTypeProperties = superType.getProperties(), propertiesVerify = properties.every(function(property) {
                        var propertyVerifies = _this.verifyProperty(property, properties, superTypeProperties);
                        if (propertyVerifies) {
                            return true;
                        }
                    });
                    if (propertiesVerify) {
                        return true;
                    }
                });
                return propertiesVerify;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(propertyType) {
                var propertyTypeVerifies = false;
                var typeEqualToPropertyType = this.type.isEqualTo(propertyType);
                if (typeEqualToPropertyType) {
                    propertyTypeVerifies = true;
                } else {
                    var propertyTypeString = propertyType.getString(); ///
                    this.context.trace("Verifying the '".concat(propertyTypeString, "' property type..."), this.node);
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.context.isTypePresentByTypeName(propertyTypeName);
                    if (!propertyTypePresent) {
                        var propertyTypeString1 = propertyType.getString();
                        this.context.debug("The '".concat(propertyTypeString1, "' property type is not present."), this.node);
                    } else {
                        propertyTypeVerifies = true;
                    }
                    if (propertyTypeVerifies) {
                        this.context.debug("...verified the '".concat(propertyTypeString, "' property type."), this.node);
                    }
                }
                return propertyTypeVerifies;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var Type = _dom.default.Type, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), node = complexTypeDeclarationNode, prefixed = complexTypeDeclarationNode.isPrefixed(), typePrefixName = complexTypeDeclarationNode.getTypePrefixName(), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), complexTypeDeclaration = new ComplexTypeDeclaration(context, node, string, type, prefixed);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBwYWNrYWdlLmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZVN0cmluZywgIC8vL1xuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9ICh0eXBlTmFtZSA9PT0gc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSBzdXBlci10eXBlJ3MgbmFtZSBtYXRjaGVzIHRoZSAke3R5cGVOYW1lfScgY29tcGxleCB0eXBlJ3MgbmFtZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7IC8vL1xuXG4gICAgICBzdXBlclR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdXBlci10eXBlcyBvZiB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgdGhpcy5ub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgc3VwZXItdHlwZXMgb2YgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5ID0gc3VwZXJUeXBlUHJvcGVydGllcy5maW5kKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gc3VwZXJUeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlTdHJpbmcgPSBzdXBlclR5cGVQcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvcGVydHlUeXBlO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb3BlcnR5VHlwZTsgIC8vL1xuXG4gICAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoVHlwZU5hbWUodHlwZU5hbWUsIHByZWZpeGVkLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHByb3BlcnR5LnNldFR5cGUodGhpcy50eXBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGB2ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKVxuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvKHByb3BlcnR5VHlwZSk7XG5cbiAgICBpZiAodHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXByb3BlcnR5VHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHByZWZpeGVkID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlIiwicHJlZml4ZWQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJpc1ByZWZpeGVkIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsImV2ZXJ5IiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsImZpbmQiLCJzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlTmFtZSIsInNldFR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGxCTDtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FB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