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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _elements = require("../../elements");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ComplexTypeDeclaration;
var _default = (0, _elements.define)((_ComplexTypeDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(ComplexTypeDeclaration, Declaration);
    function ComplexTypeDeclaration(context, string, node, type, prefixed) {
        _class_call_check(this, ComplexTypeDeclaration);
        var _this;
        _this = _call_super(this, ComplexTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.prefixed = prefixed;
        return _this;
    }
    _create_class(ComplexTypeDeclaration, [
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
                var node = this.getNode(), context = this.getContext(), complexTypeDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."), node);
                if (this.prefixed) {
                    var typeString = this.type.getString();
                    context.trace("The '".concat(typeString, "' type is prefixed."));
                } else {
                    var typeVerifies = this.verifyType();
                    if (typeVerifies) {
                        var superTypesVerify = this.verifySuperTypes();
                        if (superTypesVerify) {
                            var propertiesVerify = this.verifyProperties();
                            if (propertiesVerify) {
                                var typePrefix = context.getTypePrefix();
                                if (typePrefix !== null) {
                                    var typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
                                    this.type.setPrefixName(prefixName);
                                }
                                context.addType(this.type);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var node = this.getNode(), context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type..."), node);
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    context.trace("The '".concat(typeString, "' type is already present."), node);
                } else {
                    var prefixedTypeName = typeName, typePresent1 = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        context.trace("The '".concat(typeString, "' type is already present."), node);
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    context.trace("...verified the '".concat(typeString, "' complex type."), node);
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var node = this.getNode(), context = this.getContext(), superTypeString = superType.getString();
                context.trace("Verifying the '".concat(superTypeString, "' super-type..."), node);
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeNameMatches = this.type.matchTypeName(typeName);
                if (typeNameMatches) {
                    context.trace("The super-type's name matches the ".concat(typeName, "' complex type's name."), node);
                } else {
                    var oldSuperType = superType;
                    superType = context.findTypeByNominalTypeName(nominalTypeName);
                    var superTypePresent = superType !== null;
                    if (superTypePresent) {
                        var newSuperType = superType; ///
                        this.type.replaceSuperType(oldSuperType, newSuperType);
                        superTypeVerifies = true;
                    }
                }
                if (superTypeVerifies) {
                    context.debug("...verified the '".concat(superTypeString, "' super-type."), node);
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var node = this.getNode(), context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type's super-types..."), node);
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    context.trace("The '".concat(typeString, "' complex type is basic."), node);
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
                    context.debug("...verified the '".concat(typeString, "' complex type's super-types."), node);
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties) {
                var propertyVerifies = false;
                var node = this.getNode(), context = this.getContext(), propertyString = property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property..."), node);
                var propertyNameVerifies = this.verifyPropertyName(property, properties);
                if (propertyNameVerifies) {
                    var propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);
                    if (propertyNominalTypeNameVerifies) {
                        propertyVerifies = true;
                    }
                }
                if (propertyVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property."), node);
                }
                return propertyVerifies;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerify;
                var node = this.getNode(), context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type's properties..."), node);
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
                propertiesVerify = properties.every(function(property) {
                    var propertyVerifies = _this.verifyProperty(property, properties);
                    if (propertyVerifies) {
                        return true;
                    }
                });
                if (propertiesVerify) {
                    context.debug("...verified the '".concat(typeString, "' complex type's properties."), node);
                }
                return propertiesVerify;
            }
        },
        {
            key: "verifyPropertyName",
            value: function verifyPropertyName(property, properties) {
                var propertyNameVerifies = false;
                var node = this.getNode(), context = this.getContext(), propertyString = property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property's name..."), node);
                var propertyName = property.getName(), count = properties.reduce(function(count, property) {
                    var propertyNameMatches = property.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    context.debug("The '".concat(propertyString, "' property appears more than once."), node);
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
                        context.debug("The '".concat(superTypeString, "' super-type has the same property."), node);
                    } else {
                        propertyNameVerifies = true;
                    }
                }
                if (propertyNameVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property's name."), node);
                }
                return propertyNameVerifies;
            }
        },
        {
            key: "verifyPropertyNominalTypeName",
            value: function verifyPropertyNominalTypeName(property) {
                var propertyNominalTypeNameVerifies = false;
                var node = this.getNode(), context = this.getContext(), propertyString = property.getString(), nominalTypeName = property.getNominalTypeName();
                context.trace("Verifying the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name..."), node);
                var nominalTypeNameMatches = this.type.matchNominalTypeName(nominalTypeName);
                if (nominalTypeNameMatches) {
                    propertyNominalTypeNameVerifies = true;
                } else {
                    var typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (typePresent) {
                        propertyNominalTypeNameVerifies = true;
                    }
                }
                if (propertyNominalTypeNameVerifies) {
                    context.debug("...verifies the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name."), node);
                }
                return propertyNominalTypeNameVerifies;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(_declaration.default), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4ZWQ7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgaWYgKHRoaXMucHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgdGhpcy50eXBlLnNldFByZWZpeE5hbWUocHJlZml4TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgbWF0Y2hlcyB0aGUgJHt0eXBlTmFtZX0nIGNvbXBsZXggdHlwZSdzIG5hbWUuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3U3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmAsIG5vZGUpXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgY29uc3QgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3MgcHJvcGVydGllcy5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZU1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBoYXMgdGhlIHNhbWUgcHJvcGVydHkuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUocHJvcGVydHkpIHtcbiAgICBsZXQgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2hOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmIChub21pbmFsVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInByZWZpeGVkIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJwcmVmaXhOYW1lIiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwib2xkU3VwZXJUeXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJuZXdTdXBlclR5cGUiLCJyZXBsYWNlU3VwZXJUeXBlIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwiZXZlcnkiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInNvbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsIm5vbWluYWxUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7a0VBSndCO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMkNBQUM7O2FBQU1DLHVCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRHZCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJ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