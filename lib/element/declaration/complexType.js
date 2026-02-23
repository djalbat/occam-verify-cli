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
        }
    ]);
    return ComplexTypeDeclaration;
}(_declaration.default), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZTtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgY29tcGxleCB0eXBlJ3MgbmFtZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJlc2VudCA9IChzdXBlclR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBuZXdTdXBlclR5cGUgPSBzdXBlclR5cGU7IC8vL1xuXG4gICAgICAgIHRoaXMudHlwZS5yZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSBpcyBiYXNpYy5gKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVWZXJpZmllcykge1xuICAgICAgY29uc3QgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBwcm9wZXJ0aWVzLi4uYCk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyk7XG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUncyBwcm9wZXJ0aWVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5TmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZXMuZmluZCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcm9wZXJ0eS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzICcke25vbWluYWxUeXBlTmFtZX0nIG5vbWluYWwgdHlwZSBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZXMgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnByZWZpeGVkKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJzdXBlclR5cGVzIiwiZ2V0VHlwZSIsImdldFN1cGVyVHlwZXMiLCJnZXRDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJnZXRDb250ZXh0IiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsIm5ld1N1cGVyVHlwZSIsInJlcGxhY2VTdXBlclR5cGUiLCJ2ZXJpZnlTdXBlclR5cGVzIiwic3VwZXJUeXBlc1ZlcmlmeSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwicHJvcGVydGllc1ZlcmlmeSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsImZpbmQiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwic29tZSIsInN1cGVyVHlwZVByb3BlcnR5IiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhOYW1lIiwicHJlZml4TmFtZSIsImJyZWFrIiwicHJlZml4ZWQiLCJnZXRUeXBlUHJlZml4Iiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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