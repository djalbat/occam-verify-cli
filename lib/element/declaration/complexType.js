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
    function ComplexTypeDeclaration(context, string, node, type, superTypes) {
        _class_call_check(this, ComplexTypeDeclaration);
        var _this;
        _this = _call_super(this, ComplexTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.superTypes = superTypes;
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
            key: "getSuperTypes",
            value: function getSuperTypes() {
                return this.superTypes;
            }
        },
        {
            key: "getComplexTypeDeclarationNode",
            value: function getComplexTypeDeclarationNode() {
                var node = this.getNode(), complexTypeDeclarationNode = node; ///
                return complexTypeDeclarationNode;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, complexTypeDeclarationString, typeString, typeVerifies, superTypesVerify, propertiesVerify, typePrefix, typePrefixName, prefixName;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                context = this.getContext();
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                complexTypeDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
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
                                    context.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."));
                                }
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type..."));
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    context.debug("The '".concat(typeString, "' type is already present."));
                } else {
                    var prefixedTypeName = typeName, typePresent1 = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        context.debug("The '".concat(typeString, "' type is already present."));
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' complex type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var context = this.getContext(), superTypeString = superType.getString();
                context.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
                if (typeComparesToTypeName) {
                    context.trace("The super-type's name compares to the ".concat(typeName, "' complex type's name."));
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
                    context.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type's super-types..."));
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    context.trace("The '".concat(typeString, "' complex type is basic."));
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
                    context.debug("...verified the '".concat(typeString, "' complex type's super-types."));
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties) {
                var propertyVerifies = false;
                var context = this.getContext(), propertyString = property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property..."));
                var propertyNameVerifies = this.verifyPropertyName(property, properties);
                if (propertyNameVerifies) {
                    var propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);
                    if (propertyNominalTypeNameVerifies) {
                        propertyVerifies = true;
                    }
                }
                if (propertyVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property."));
                }
                return propertyVerifies;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerify;
                var context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type's properties..."));
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes);
                propertiesVerify = properties.every(function(property) {
                    var propertyVerifies = _this.verifyProperty(property, properties);
                    if (propertyVerifies) {
                        return true;
                    }
                });
                if (propertiesVerify) {
                    context.debug("...verified the '".concat(typeString, "' complex type's properties."));
                }
                return propertiesVerify;
            }
        },
        {
            key: "verifyPropertyName",
            value: function verifyPropertyName(property, properties) {
                var propertyNameVerifies = false;
                var context = this.getContext(), propertyString = property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property's name..."));
                var propertyName = property.getName(), count = properties.reduce(function(count, property) {
                    var propertyComparesToPropertyName = property.comparePropertyName(propertyName);
                    if (propertyComparesToPropertyName) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    context.debug("The '".concat(propertyString, "' property appears more than once."));
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
                        context.debug("The '".concat(superTypeString, "' super-type has the same property."));
                    } else {
                        propertyNameVerifies = true;
                    }
                }
                if (propertyNameVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property's name."));
                }
                return propertyNameVerifies;
            }
        },
        {
            key: "verifyPropertyNominalTypeName",
            value: function verifyPropertyNominalTypeName(property) {
                var propertyNominalTypeNameVerifies = false;
                var context = this.getContext(), propertyString = property.getString(), nominalTypeName = property.getNominalTypeName();
                context.trace("Verifying the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name..."));
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
                    context.debug("...verifies the '".concat(propertyString, "' property's '").concat(nominalTypeName, "' nominal type name."));
                }
                return propertyNominalTypeNameVerifies;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(_declaration.default), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUncyBuYW1lLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVQcmVzZW50ID0gKHN1cGVyVHlwZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1N1cGVyVHlwZSA9IHN1cGVyVHlwZTsgLy8vXG5cbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmApXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnR5TmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuc29tZSgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaGFzIHRoZSBzYW1lIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5KSB7XG4gICAgbGV0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByb3BlcnR5LmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke25vbWluYWxUeXBlTmFtZX0nIG5vbWluYWwgdHlwZSBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJzdXBlclR5cGVzIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJzdXBlclR5cGVzVmVyaWZ5IiwicHJvcGVydGllc1ZlcmlmeSIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsInByZWZpeE5hbWUiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByZWZpeGVkIiwidmVyaWZ5VHlwZSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiZ2V0VHlwZVByZWZpeCIsImdldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwiZXZlcnkiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJzb21lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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