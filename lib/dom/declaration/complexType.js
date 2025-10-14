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
                var propertyString = property.getString(), nominalTypeName = property.getNominalTypeName();
                this.context.trace("Verifying the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name..."), this.node);
                var nominalTypeNameMatches = this.type.matchNominalTypeName(nominalTypeName);
                if (nominalTypeNameMatches) {
                    propertyNominalTypeNameVerifies = true;
                } else {
                    var typePresent = this.context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (typePresent) {
                        propertyNominalTypeNameVerifies = true;
                    }
                }
                if (propertyNominalTypeNameVerifies) {
                    this.context.debug("...verifies the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name."), this.node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy50eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgbWF0Y2hlcyB0aGUgJHt0eXBlTmFtZX0nIGNvbXBsZXggdHlwZSdzIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmAsIHRoaXMubm9kZSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZU1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gdGhpcy50eXBlLm1hdGNoTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAobm9taW5hbFR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZXMgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBwcmVmaXhlZCA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSwgcHJlZml4ZWQpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidHlwZSIsInByZWZpeGVkIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNQcmVmaXhlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJwcmVmaXhOYW1lIiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwib2xkU3VwZXJUeXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJuZXdTdXBlclR5cGUiLCJyZXBsYWNlU3VwZXJUeXBlIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwiZXZlcnkiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInNvbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsIm5vbWluYWxUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImdldFR5cGVQcmVmaXhOYW1lIiwic3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFHOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5RCxXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEbEJMO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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