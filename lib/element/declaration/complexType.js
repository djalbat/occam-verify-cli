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
var _occamfurtle = require("occam-furtle");
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
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
var define = _occamfurtle.elements.define;
var _default = define((_ComplexTypeDeclaration = /*#__PURE__*/ function(Declaration) {
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
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
                if (typeComparesToTypeName) {
                    context.trace("The super-type's name compares to the ".concat(typeName, "' complex type's name."), node);
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
                    var propertyComparesToPropertyName = property.comparePropertyName(propertyName);
                    if (propertyComparesToPropertyName) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    context.debug("The '".concat(propertyString, "' property appears more than once."), node);
                } else {
                    var superTypes = this.type.getSuperTypes(), superType = superTypes.find(function(superType) {
                        var superTypeProperties = superType.getProperties(), superTypePropertyComparesToPropertyName = superTypeProperties.some(function(superTypeProperty) {
                            var superTypePropertyComparesToPropertyName = superTypeProperty.comparePropertyName(propertyName);
                            if (superTypePropertyComparesToPropertyName) {
                                return true;
                            }
                        });
                        if (superTypePropertyComparesToPropertyName) {
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
                var typeComparesToNominalTypeName = this.type.compareNominalTypeName(nominalTypeName);
                if (typeComparesToNominalTypeName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcmVmaXhlZCA9IHByZWZpeGVkO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhlZDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUncyBuYW1lLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSBpcyBiYXNpYy5gLCBub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZXMuZmluZCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHkuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwicHJlZml4ZWQiLCJnZXRUeXBlIiwiaXNQcmVmaXhlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlU3RyaW5nIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwicHJvcGVydGllc1ZlcmlmeSIsInZlcmlmeVByb3BlcnRpZXMiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInByZWZpeE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInNvbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFB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