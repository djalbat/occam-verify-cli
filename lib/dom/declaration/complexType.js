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
                var typeName = this.type.getName(), typeNameMatches = superType.matchTypeName(typeName);
                if (typeNameMatches) {
                    this.context.trace("The super-type's name matches the ".concat(typeName, "' complex type's name."), this.node);
                } else {
                    var oldSuperType = superType, nominalTypeName = superType.getNominalTypeName();
                    superType = this.context.findTypeByNominalTypeName(nominalTypeName);
                    var newSuperType = superType, superTypePresent = superType !== null;
                    if (superTypePresent) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGVzKCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBzdXBlclR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSBzdXBlci10eXBlJ3MgbmFtZSBtYXRjaGVzIHRoZSAke3R5cGVOYW1lfScgY29tcGxleCB0eXBlJ3MgbmFtZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICBzdXBlclR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBuZXdTdXBlclR5cGUgPSBzdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IChzdXBlclR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgdGhpcy5ub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXBlUHJvcGVydHkgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLmZpbmQoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgbGV0IHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBwcm9wZXJ0eVR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG5cbiAgICAgIHByb3BlcnR5LnNldFR5cGUodGhpcy50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gKHByb3BlcnR5VHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGVzKCkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydHkgdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpO1xuXG4gICAgcHJvcGVydHlUeXBlc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydHkgdHlwZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUsIHByZWZpeGVkKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInR5cGUiLCJwcmVmaXhlZCIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJnZXRSZWxlYXNlQ29udGV4dCIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlc1ZlcmlmeSIsInZlcmlmeVByb3BlcnR5VHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibmV3U3VwZXJUeXBlIiwic3VwZXJUeXBlUHJlc2VudCIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVN0cmluZyIsInNldFR5cGUiLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwidHlwZVByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4TmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGxCTDtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElB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