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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
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
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, complexTypeDeclarationString, typeString, typeVerifies, superTypesVerify, propertiesVerify, typePrefix, typePrefixName, prefixName;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        node = this.getNode(), context = this.getContext(), complexTypeDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."), node);
                        if (this.prefixed) {
                            typeString = this.type.getString();
                            context.trace("The '".concat(typeString, "' type is prefixed."));
                        } else {
                            typeVerifies = this.verifyType();
                            if (typeVerifies) {
                                superTypesVerify = this.verifySuperTypes();
                                if (superTypesVerify) {
                                    propertiesVerify = this.verifyProperties();
                                    if (propertiesVerify) {
                                        typePrefix = context.getTypePrefix();
                                        if (typePrefix !== null) {
                                            typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
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
                        return [
                            2,
                            verifies
                        ];
                    });
                }).call(this);
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(_declaration.default), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4ZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgY29tcGxleCB0eXBlJ3MgbmFtZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJlc2VudCA9IChzdXBlclR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBuZXdTdXBlclR5cGUgPSBzdXBlclR5cGU7IC8vL1xuXG4gICAgICAgIHRoaXMudHlwZS5yZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgbm9kZSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBwcm9wZXJ0aWVzLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBwcm9wZXJ0aWVzLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVzLmZpbmQoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydGllcy5zb21lKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBoYXMgdGhlIHNhbWUgcHJvcGVydHkuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUocHJvcGVydHkpIHtcbiAgICBsZXQgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke25vbWluYWxUeXBlTmFtZX0nIG5vbWluYWwgdHlwZSBuYW1lLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJwcmVmaXhlZCIsImdldFR5cGUiLCJpc1ByZWZpeGVkIiwidmVyaWZ5VHlwZSIsInR5cGVWZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwib2xkU3VwZXJUeXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJuZXdTdXBlclR5cGUiLCJyZXBsYWNlU3VwZXJUeXBlIiwiZGVidWciLCJ2ZXJpZnlTdXBlclR5cGVzIiwic3VwZXJUeXBlc1ZlcmlmeSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsImV2ZXJ5IiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5TmFtZSIsInByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZSIsInZlcmlmeVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJzb21lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0eXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJwcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeCIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwyQ0FBQzs7YUFBTUMsdUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEdkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGVBQWU7Z0JBRW5CLElBQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CVCxVQUFVLElBQUksQ0FBQ1UsVUFBVSxJQUN6QkMsYUFBYSxJQUFJLENBQUNSLElBQUksQ0FBQ1MsU0FBUztnQkFFdENaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLHNCQUFvQlQ7Z0JBRS9ELElBQU1ZLFdBQVcsSUFBSSxDQUFDWCxJQUFJLENBQUNZLE9BQU8sSUFDNUJDLGlCQUFpQixNQUNqQkMsc0JBQXNCLE9BQ3RCQyxjQUFjbEIsUUFBUW1CLHVCQUF1QixDQUFDTCxVQUFVRSxnQkFBZ0JDO2dCQUU5RSxJQUFJQyxhQUFhO29CQUNmbEIsUUFBUWEsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEYsWUFBVywrQkFBNkJUO2dCQUNoRSxPQUFPO29CQUNMLElBQU1rQixtQkFBbUJOLFVBQ25CSSxlQUFjbEIsUUFBUXFCLCtCQUErQixDQUFDRDtvQkFFNUQsSUFBSUYsY0FBYTt3QkFDZmxCLFFBQVFhLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhGLFlBQVcsK0JBQTZCVDtvQkFDaEUsT0FBTzt3QkFDTE0sZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEJSLFFBQVFhLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYRixZQUFXLG9CQUFrQlQ7Z0JBQ2pFO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxTQUFTO2dCQUN2QixJQUFJQyxvQkFBb0I7Z0JBRXhCLElBQU10QixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQlQsVUFBVSxJQUFJLENBQUNVLFVBQVUsSUFDekJlLGtCQUFrQkYsVUFBVVgsU0FBUztnQkFFM0NaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQlksaUJBQWdCLG9CQUFrQnZCO2dCQUVsRSxJQUFNd0Isa0JBQWtCSCxVQUFVSSxrQkFBa0IsSUFDOUNiLFdBQVdZLGlCQUNYRSx5QkFBeUIsSUFBSSxDQUFDekIsSUFBSSxDQUFDMEIsZUFBZSxDQUFDZjtnQkFFekQsSUFBSWMsd0JBQXdCO29CQUMxQjVCLFFBQVFhLEtBQUssQ0FBQyxBQUFDLHlDQUFpRCxPQUFUQyxVQUFTLDJCQUF5Qlo7Z0JBQzNGLE9BQU87b0JBQ0wsSUFBTTRCLGVBQWVQO29CQUVyQkEsWUFBWXZCLFFBQVErQix5QkFBeUIsQ0FBQ0w7b0JBRTlDLElBQU1NLG1CQUFvQlQsY0FBYztvQkFFeEMsSUFBSVMsa0JBQWtCO3dCQUNwQixJQUFNQyxlQUFlVixXQUFXLEdBQUc7d0JBRW5DLElBQUksQ0FBQ3BCLElBQUksQ0FBQytCLGdCQUFnQixDQUFDSixjQUFjRzt3QkFFekNULG9CQUFvQjtvQkFDdEI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsbUJBQW1CO29CQUNyQnhCLFFBQVFtQyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJWLGlCQUFnQixrQkFBZ0J2QjtnQkFDcEU7Z0JBRUEsT0FBT3NCO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlDO2dCQUVKLElBQU1uQyxPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQlQsVUFBVSxJQUFJLENBQUNVLFVBQVUsSUFDekJDLGFBQWEsSUFBSSxDQUFDUixJQUFJLENBQUNTLFNBQVM7Z0JBRXRDWixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxvQ0FBa0NUO2dCQUU3RSxJQUFNb0MsWUFBWSxJQUFJLENBQUNuQyxJQUFJLENBQUNvQyxPQUFPO2dCQUVuQyxJQUFJRCxXQUFXO29CQUNiRCxtQkFBbUI7b0JBRW5CckMsUUFBUWEsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEYsWUFBVyw2QkFBMkJUO2dCQUM5RCxPQUFRO29CQUNOLElBQU1zQyxhQUFhLElBQUksQ0FBQ3JDLElBQUksQ0FBQ3NDLGFBQWE7b0JBRTFDSixtQkFBbUJHLFdBQVdFLEtBQUssQ0FBQyxTQUFDbkI7d0JBQ25DLElBQU1DLG9CQUFvQixNQUFLRixlQUFlLENBQUNDO3dCQUUvQyxJQUFJQyxtQkFBbUI7NEJBQ3JCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSWEsa0JBQWtCO29CQUNwQnJDLFFBQVFtQyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWHhCLFlBQVcsa0NBQWdDVDtnQkFDL0U7Z0JBRUEsT0FBT21DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsUUFBUSxFQUFFQyxVQUFVO2dCQUNqQyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU01QyxPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQlQsVUFBVSxJQUFJLENBQUNVLFVBQVUsSUFDekJxQyxpQkFBaUJILFNBQVNoQyxTQUFTO2dCQUV6Q1osUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZrQyxnQkFBZSxrQkFBZ0I3QztnQkFFL0QsSUFBTThDLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTCxVQUFVQztnQkFFL0QsSUFBSUcsc0JBQXNCO29CQUN4QixJQUFNRSxrQ0FBa0MsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ1AsVUFBVUM7b0JBRXJGLElBQUlLLGlDQUFpQzt3QkFDbkNKLG1CQUFtQjtvQkFDckI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsa0JBQWtCO29CQUNwQjlDLFFBQVFtQyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlksZ0JBQWUsZ0JBQWM3QztnQkFDakU7Z0JBRUEsT0FBTzRDO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlDO2dCQUVKLElBQU1uRCxPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQlQsVUFBVSxJQUFJLENBQUNVLFVBQVUsSUFDekJDLGFBQWEsSUFBSSxDQUFDUixJQUFJLENBQUNTLFNBQVM7Z0JBRXRDWixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxtQ0FBaUNUO2dCQUU1RSxJQUFNb0Qsb0JBQW9CLE9BQ3BCVCxhQUFhLElBQUksQ0FBQzFDLElBQUksQ0FBQ29ELGFBQWEsQ0FBQ0Q7Z0JBRTNDRCxtQkFBbUJSLFdBQVdILEtBQUssQ0FBQyxTQUFDRTtvQkFDbkMsSUFBTUUsbUJBQW1CLE1BQUtILGNBQWMsQ0FBQ0MsVUFBVUM7b0JBRXZELElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJTyxrQkFBa0I7b0JBQ3BCckQsUUFBUW1DLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYeEIsWUFBVyxpQ0FBK0JUO2dCQUM5RTtnQkFFQSxPQUFPbUQ7WUFDVDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJMLFFBQVEsRUFBRUMsVUFBVTtnQkFDckMsSUFBSUcsdUJBQXVCO2dCQUUzQixJQUFNOUMsT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJULFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCcUMsaUJBQWlCSCxTQUFTaEMsU0FBUztnQkFFekNaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFma0MsZ0JBQWUseUJBQXVCN0M7Z0JBRXRFLElBQU1zRCxlQUFlWixTQUFTN0IsT0FBTyxJQUMvQjBDLFFBQVFaLFdBQVdhLE1BQU0sQ0FBQyxTQUFDRCxPQUFPYjtvQkFDaEMsSUFBTWUsaUNBQWlDZixTQUFTZ0IsbUJBQW1CLENBQUNKO29CQUVwRSxJQUFJRyxnQ0FBZ0M7d0JBQ2xDRjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHO2dCQUVULElBQUlBLFFBQVEsR0FBRztvQkFDYnpELFFBQVFtQyxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmWSxnQkFBZSx1Q0FBcUM3QztnQkFDNUUsT0FBTztvQkFDTCxJQUFNc0MsYUFBYSxJQUFJLENBQUNyQyxJQUFJLENBQUNzQyxhQUFhLElBQ3BDbEIsWUFBWWlCLFdBQVdxQixJQUFJLENBQUMsU0FBQ3RDO3dCQUMzQixJQUFNdUMsc0JBQXNCdkMsVUFBVWdDLGFBQWEsSUFDN0NRLDBDQUEwQ0Qsb0JBQW9CRSxJQUFJLENBQUMsU0FBQ0M7NEJBQ2xFLElBQU1GLDBDQUEwQ0Usa0JBQWtCTCxtQkFBbUIsQ0FBQ0o7NEJBRXRGLElBQUlPLHlDQUF5QztnQ0FDM0MsT0FBTzs0QkFDVDt3QkFDRjt3QkFFTixJQUFJQSx5Q0FBeUM7NEJBQzNDLE9BQU87d0JBQ1Q7b0JBQ0YsTUFBTTtvQkFFWixJQUFJeEMsY0FBYyxNQUFNO3dCQUN0QixJQUFNRSxrQkFBa0JGLFVBQVVYLFNBQVM7d0JBRTNDWixRQUFRbUMsS0FBSyxDQUFDLEFBQUMsUUFBdUIsT0FBaEJWLGlCQUFnQix3Q0FBc0N2QjtvQkFDOUUsT0FBTzt3QkFDTDhDLHVCQUF1QjtvQkFDekI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsc0JBQXNCO29CQUN4QmhELFFBQVFtQyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlksZ0JBQWUsdUJBQXFCN0M7Z0JBQ3hFO2dCQUVBLE9BQU84QztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QlAsUUFBUTtnQkFDcEMsSUFBSU0sa0NBQWtDO2dCQUV0QyxJQUFNaEQsT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJULFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCcUMsaUJBQWlCSCxTQUFTaEMsU0FBUyxJQUNuQ2Msa0JBQWtCa0IsU0FBU2pCLGtCQUFrQjtnQkFFbkQzQixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBZ0RhLE9BQS9CcUIsZ0JBQWUsa0JBQWdDLE9BQWhCckIsaUJBQWdCLDJCQUF5QnhCO2dCQUV4RyxJQUFNZ0UsZ0NBQWdDLElBQUksQ0FBQy9ELElBQUksQ0FBQ2dFLHNCQUFzQixDQUFDekM7Z0JBRXZFLElBQUl3QywrQkFBK0I7b0JBQ2pDaEIsa0NBQWtDO2dCQUNwQyxPQUFPO29CQUNMLElBQU1oQyxjQUFjbEIsUUFBUW9FLDhCQUE4QixDQUFDMUM7b0JBRTNELElBQUlSLGFBQWE7d0JBQ2ZnQyxrQ0FBa0M7b0JBQ3BDO2dCQUNGO2dCQUVBLElBQUlBLGlDQUFpQztvQkFDbkNsRCxRQUFRbUMsS0FBSyxDQUFDLEFBQUMsb0JBQWtEVCxPQUEvQnFCLGdCQUFlLGtCQUFnQyxPQUFoQnJCLGlCQUFnQix5QkFBdUJ4QjtnQkFDMUc7Z0JBRUEsT0FBT2dEO1lBQ1Q7OztZQUVNbUIsS0FBQUE7bUJBQU4sU0FBTUE7O3dCQUNBQyxVQUVFcEUsTUFDQUYsU0FDQXVFLDhCQUtFNUQsWUFJQUgsY0FHRTZCLGtCQUdFZ0Isa0JBR0VtQixZQUdFQyxnQkFDQUM7O3dCQTFCWkosV0FBVzt3QkFFVHBFLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CVCxVQUFVLElBQUksQ0FBQ1UsVUFBVSxJQUN6QjZELCtCQUErQixJQUFJLENBQUMzRCxTQUFTLElBQUksR0FBRzt3QkFFMURaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUE4QyxPQUE3QjBELDhCQUE2QixrQ0FBZ0NyRTt3QkFFN0YsSUFBSSxJQUFJLENBQUNFLFFBQVEsRUFBRTs0QkFDWE8sYUFBYSxJQUFJLENBQUNSLElBQUksQ0FBQ1MsU0FBUzs0QkFFdENaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhGLFlBQVc7d0JBQ25DLE9BQU87NEJBQ0NILGVBQWUsSUFBSSxDQUFDRCxVQUFVOzRCQUVwQyxJQUFJQyxjQUFjO2dDQUNWNkIsbUJBQW1CLElBQUksQ0FBQ0QsZ0JBQWdCO2dDQUU5QyxJQUFJQyxrQkFBa0I7b0NBQ2RnQixtQkFBbUIsSUFBSSxDQUFDRCxnQkFBZ0I7b0NBRTlDLElBQUlDLGtCQUFrQjt3Q0FDZG1CLGFBQWF4RSxRQUFRMkUsYUFBYTt3Q0FFeEMsSUFBSUgsZUFBZSxNQUFNOzRDQUNqQkMsaUJBQWlCRCxXQUFXekQsT0FBTyxJQUNuQzJELGFBQWFELGdCQUFpQixHQUFHOzRDQUV2QyxJQUFJLENBQUN0RSxJQUFJLENBQUN5RSxhQUFhLENBQUNGO3dDQUMxQjt3Q0FFQTFFLFFBQVE2RSxPQUFPLENBQUMsSUFBSSxDQUFDMUUsSUFBSTt3Q0FFekJtRSxXQUFXO29DQUNiO2dDQUNGOzRCQUNGO3dCQUNGO3dCQUVBLElBQUlBLFVBQVU7NEJBQ1p0RSxRQUFRbUMsS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCb0MsOEJBQTZCLGdDQUE4QnJFO3dCQUMvRjt3QkFFQTs7NEJBQU9vRTs7O2dCQUNUOzs7OztFQWhUeURRLG9CQUFXLEdBa1RwRSwwQ0FBT0MsUUFBTyJ9