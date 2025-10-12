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
                                var propertyTypesVerify = this.verifyPropertyTypes();
                                if (propertyTypesVerify) {
                                    var typePrefix = this.context.getTypePrefix();
                                    if (typePrefix !== null) {
                                        var typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
                                        this.type.setPrefixName(prefixName);
                                    }
                                    this.context.addType(this.type);
                                    verifies = true;
                                }
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
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    this.context.trace("The '".concat(typeString, "' type is already present."), this.node);
                } else {
                    var prefixedTypeName = typeName, typePresent1 = this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        this.context.trace("The '".concat(typeString, "' type is already present."), this.node);
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    this.context.trace("...verified the '".concat(typeString, "' complex type."), this.node);
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
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeNameMatches = this.type.matchTypeName(typeName);
                if (typeNameMatches) {
                    this.context.trace("The super-type's name matches the ".concat(typeName, "' complex type's name."), this.node);
                } else {
                    var oldSuperType = superType;
                    superType = this.context.findTypeByNominalTypeName(nominalTypeName);
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
                this.context.trace("Verifying the '".concat(typeString, "' complex type's super-types..."), this.node);
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
                    this.context.debug("...verified the '".concat(typeString, "' complex type's super-types."), this.node);
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties) {
                var _this = this;
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
                    var superTypes = this.type.getSuperTypes();
                    propertyVerifies = superTypes.every(function(superType) {
                        var superTypeProperties = superType.getProperties(), superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                            var propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);
                            if (propertyNameMatches) {
                                return true;
                            }
                        }) || null;
                        if (superTypeProperty !== null) {
                            var superTypePropertyString = superTypeProperty.getString();
                            _this.context.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."), _this.node);
                        } else {
                            return true;
                        }
                    });
                }
                if (propertyVerifies) {
                    this.context.debug("...verified the '".concat(propertyString, "' property."), this.node);
                }
                return propertyVerifies;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerify;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' complex type's properties..."), this.node);
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
                propertiesVerify = properties.every(function(property) {
                    var propertyVerifies = _this.verifyProperty(property, properties);
                    if (propertyVerifies) {
                        return true;
                    }
                });
                if (propertiesVerify) {
                    this.context.debug("...verified the '".concat(typeString, "' complex type's properties."), this.node);
                }
                return propertiesVerify;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(property) {
                var propertyTypeVerifies = false;
                var propertyType = property.getType();
                var propertyTypeString = propertyType.getString();
                this.context.trace("Verifying the '".concat(propertyTypeString, "' property type..."), this.node);
                var typeName = this.type.getName(), typeNameMatches = propertyType.matchTypeName(typeName);
                if (typeNameMatches) {
                    propertyTypeVerifies = true;
                    property.setType(this.type);
                } else {
                    var nominalTypeName = propertyType.getNominalTypeName();
                    propertyType = this.context.findTypeByNominalTypeName(nominalTypeName);
                    var propertyTypePresent = propertyType !== null;
                    if (propertyTypePresent) {
                        var type = propertyType; ///
                        property.setType(type);
                        propertyTypeVerifies = true;
                    }
                }
                if (propertyTypeVerifies) {
                    this.context.debug("...verified the '".concat(propertyTypeString, "' property type."), this.node);
                }
                return propertyTypeVerifies;
            }
        },
        {
            key: "verifyPropertyTypes",
            value: function verifyPropertyTypes() {
                var _this = this;
                var propertyTypesVerify;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' complex type's property types..."), this.node);
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
                propertyTypesVerify = properties.every(function(property) {
                    var propertyVerifies = _this.verifyPropertyType(property);
                    if (propertyVerifies) {
                        return true;
                    }
                });
                if (propertyTypesVerify) {
                    this.context.debug("...verified the '".concat(typeString, "' complex type's property types."), this.node);
                }
                return propertyTypesVerify;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGVzKCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSBzdXBlci10eXBlJ3MgbmFtZSBtYXRjaGVzIHRoZSAke3R5cGVOYW1lfScgY29tcGxleCB0eXBlJ3MgbmFtZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3U3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgdGhpcy5ub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXBlUHJvcGVydHkgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLmZpbmQoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgbGV0IHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBwcm9wZXJ0eVR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG5cbiAgICAgIHByb3BlcnR5LnNldFR5cGUodGhpcy50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gKHByb3BlcnR5VHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGVzKCkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydHkgdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpO1xuXG4gICAgcHJvcGVydHlUeXBlc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydHkgdHlwZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUsIHByZWZpeGVkKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInR5cGUiLCJwcmVmaXhlZCIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJnZXRSZWxlYXNlQ29udGV4dCIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlc1ZlcmlmeSIsInZlcmlmeVByb3BlcnR5VHlwZXMiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInByZWZpeE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVN0cmluZyIsInNldFR5cGUiLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUc4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlELFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNu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