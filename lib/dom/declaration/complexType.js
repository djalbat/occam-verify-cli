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
                var propertyVerifies = false;
                var propertyString = property.getString();
                this.context.trace("Verifying the '".concat(propertyString, "' property..."), this.node);
                var propertyNameVerifies = this.verifyPropertyName(property, properties);
                if (propertyNameVerifies) {
                    var propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);
                    if (propertyNominalTypeNameVerifies) {
                        propertyVerifies = true;
                    }
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
            key: "verifyPropertyName",
            value: function verifyPropertyName(property, properties) {
                var propertyNameVerifies = false;
                var propertyString = property.getString();
                this.context.trace("Verifying the '".concat(propertyString, "' property's name..."), this.node);
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
                    var superTypes = this.type.getSuperTypes(), superType = superTypes.find(function(superType) {
                        var superTypeProperties = superType.getProperties(), propertyNameMatches = superTypeProperties.some(function(superTypeProperty) {
                            var propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);
                            if (propertyNameMatches) {
                                return true;
                            }
                        });
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superType !== null) {
                        var superTypeString = superType.getString();
                        this.context.debug("The '".concat(superTypeString, "' super-type has the same property."), this.node);
                    } else {
                        propertyNameVerifies = true;
                    }
                }
                if (propertyNameVerifies) {
                    this.context.debug("...verified the '".concat(propertyString, "' property's name."), this.node);
                }
                return propertyNameVerifies;
            }
        },
        {
            key: "verifyPropertyNominalTypeName",
            value: function verifyPropertyNominalTypeName(property) {
                var propertyNominalTypeNameVerifies = false;
                var propertyString = property.getString(), propertyNominalTypeName = property.getNominalTypeName();
                this.context.trace("Verifying the '".concat(propertyString, "' property's '").concat(propertyNominalTypeName, "' nominal type name..."), this.node);
                var typeName = this.type.getName(), typeNameMatches = propertyType.matchTypeName(typeName);
                if (typeNameMatches) {
                    propertyNominalTypeNameVerifies = true;
                    property.setType(this.type);
                } else {
                    var nominalTypeName = propertyType.getNominalTypeName();
                    propertyType = this.context.findTypeByNominalTypeName(nominalTypeName);
                    var propertyTypePresent = propertyType !== null;
                    if (propertyTypePresent) {
                        var type = propertyType; ///
                        property.setType(type);
                        propertyNominalTypeNameVerifies = true;
                    }
                }
                if (propertyNominalTypeNameVerifies) {
                    this.context.debug("...verified the '".concat(propertyString, "' property's '").concat(propertyNominalTypeName, "' nominal type name."), this.node);
                }
                return propertyNominalTypeNameVerifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy50eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgbWF0Y2hlcyB0aGUgJHt0eXBlTmFtZX0nIGNvbXBsZXggdHlwZSdzIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmAsIHRoaXMubm9kZSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZU1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHkuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke3Byb3BlcnR5Tm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IHByb3BlcnR5VHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgICBwcm9wZXJ0eS5zZXRUeXBlKHRoaXMudHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgY29uc3QgcHJvcGVydHlUeXBlUHJlc2VudCA9IChwcm9wZXJ0eVR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke3Byb3BlcnR5Tm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgcHJlZml4ZWQgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUsIHByZWZpeGVkKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInR5cGUiLCJwcmVmaXhlZCIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwicHJlZml4TmFtZSIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsIm9sZFN1cGVyVHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsImV2ZXJ5IiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5TmFtZSIsInByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzb21lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZSIsInByb3BlcnR5VHlwZSIsInNldFR5cGUiLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUc4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lB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