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
                var context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' complex type..."));
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    context.trace("The '".concat(typeString, "' type is already present."));
                } else {
                    var prefixedTypeName = typeName, typePresent1 = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        context.trace("The '".concat(typeString, "' type is already present."));
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    context.trace("...verified the '".concat(typeString, "' complex type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwcmVmaXhlZCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJlZml4ZWQgPSBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4ZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBzdXBlci10eXBlJ3MgbmFtZSBjb21wYXJlcyB0byB0aGUgJHt0eXBlTmFtZX0nIGNvbXBsZXggdHlwZSdzIG5hbWUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3U3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlJ3Mgc3VwZXItdHlwZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5TmFtZShwcm9wZXJ0eSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5Tm9taW5hbFR5cGVOYW1lKHByb3BlcnR5LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZSdzIHByb3BlcnRpZXMuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5hbWUocHJvcGVydHksIHByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlOYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZXMuZmluZCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgICAgICAgICBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLnNvbWUoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gc3VwZXJUeXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGhhcyB0aGUgc2FtZSBwcm9wZXJ0eS5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgbmFtZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eU5vbWluYWxUeXBlTmFtZShwcm9wZXJ0eSkge1xuICAgIGxldCBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHkuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyAnJHtub21pbmFsVHlwZU5hbWV9JyBub21pbmFsIHR5cGUgbmFtZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgcHJvcGVydHlOb21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3MgJyR7bm9taW5hbFR5cGVOYW1lfScgbm9taW5hbCB0eXBlIG5hbWUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9taW5hbFR5cGVOYW1lVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgaWYgKHRoaXMucHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVmaXhlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgdGhpcy50eXBlLnNldFByZWZpeE5hbWUocHJlZml4TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInByZWZpeGVkIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJ2ZXJpZnlUeXBlIiwidHlwZVZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsIm9sZFN1cGVyVHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsImRlYnVnIiwidmVyaWZ5U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNWZXJpZnkiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5vbWluYWxUeXBlTmFtZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlOb21pbmFsVHlwZU5hbWUiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwicHJvcGVydGllc1ZlcmlmeSIsImdldE5vZGUiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInNvbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4TmFtZSIsInByZWZpeE5hbWUiLCJnZXRUeXBlUHJlZml4Iiwic2V0UHJlZml4TmFtZSIsImFkZFR5cGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDJDQUFDOzthQUFNQyx1QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUR2Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFFBQVEsR0FBR0E7Ozs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTVIsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJDLGFBQWEsSUFBSSxDQUFDUCxJQUFJLENBQUNRLFNBQVM7Z0JBRXRDWCxRQUFRWSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztnQkFFM0MsSUFBTUcsV0FBVyxJQUFJLENBQUNWLElBQUksQ0FBQ1csT0FBTyxJQUM1QkMsaUJBQWlCLE1BQ2pCQyxzQkFBc0IsT0FDdEJDLGNBQWNqQixRQUFRa0IsdUJBQXVCLENBQUNMLFVBQVVFLGdCQUFnQkM7Z0JBRTlFLElBQUlDLGFBQWE7b0JBQ2ZqQixRQUFRWSxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRixZQUFXO2dCQUNuQyxPQUFPO29CQUNMLElBQU1TLG1CQUFtQk4sVUFDbkJJLGVBQWNqQixRQUFRb0IsK0JBQStCLENBQUNEO29CQUU1RCxJQUFJRixjQUFhO3dCQUNmakIsUUFBUVksS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEYsWUFBVztvQkFDbkMsT0FBTzt3QkFDTEYsZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEJSLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYRixZQUFXO2dCQUMvQztnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsU0FBUztnQkFDdkIsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNdkIsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJlLGtCQUFrQkYsVUFBVVgsU0FBUztnQkFFM0NYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQlksaUJBQWdCO2dCQUVoRCxJQUFNQyxrQkFBa0JILFVBQVVJLGtCQUFrQixJQUM5Q2IsV0FBV1ksaUJBQ1hFLHlCQUF5QixJQUFJLENBQUN4QixJQUFJLENBQUN5QixlQUFlLENBQUNmO2dCQUV6RCxJQUFJYyx3QkFBd0I7b0JBQzFCM0IsUUFBUVksS0FBSyxDQUFDLEFBQUMseUNBQWlELE9BQVRDLFVBQVM7Z0JBQ2xFLE9BQU87b0JBQ0wsSUFBTWdCLGVBQWVQO29CQUVyQkEsWUFBWXRCLFFBQVE4Qix5QkFBeUIsQ0FBQ0w7b0JBRTlDLElBQU1NLG1CQUFvQlQsY0FBYztvQkFFeEMsSUFBSVMsa0JBQWtCO3dCQUNwQixJQUFNQyxlQUFlVixXQUFXLEdBQUc7d0JBRW5DLElBQUksQ0FBQ25CLElBQUksQ0FBQzhCLGdCQUFnQixDQUFDSixjQUFjRzt3QkFFekNULG9CQUFvQjtvQkFDdEI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsbUJBQW1CO29CQUNyQnZCLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJWLGlCQUFnQjtnQkFDcEQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTXBDLFVBQVUsSUFBSSxDQUFDUyxVQUFVLElBQ3pCQyxhQUFhLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxTQUFTO2dCQUV0Q1gsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7Z0JBRTNDLElBQU0yQixZQUFZLElBQUksQ0FBQ2xDLElBQUksQ0FBQ21DLE9BQU87Z0JBRW5DLElBQUlELFdBQVc7b0JBQ2JELG1CQUFtQjtvQkFFbkJwQyxRQUFRWSxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRixZQUFXO2dCQUNuQyxPQUFRO29CQUNOLElBQU02QixhQUFhLElBQUksQ0FBQ3BDLElBQUksQ0FBQ3FDLGFBQWE7b0JBRTFDSixtQkFBbUJHLFdBQVdFLEtBQUssQ0FBQyxTQUFDbkI7d0JBQ25DLElBQU1DLG9CQUFvQixNQUFLRixlQUFlLENBQUNDO3dCQUUvQyxJQUFJQyxtQkFBbUI7NEJBQ3JCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSWEsa0JBQWtCO29CQUNwQnBDLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWHhCLFlBQVc7Z0JBQy9DO2dCQUVBLE9BQU8wQjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFFBQVEsRUFBRUMsVUFBVTtnQkFDakMsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNN0MsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJxQyxpQkFBaUJILFNBQVNoQyxTQUFTO2dCQUV6Q1gsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZrQyxnQkFBZTtnQkFFL0MsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNMLFVBQVVDO2dCQUUvRCxJQUFJRyxzQkFBc0I7b0JBQ3hCLElBQU1FLGtDQUFrQyxJQUFJLENBQUNDLDZCQUE2QixDQUFDUCxVQUFVQztvQkFFckYsSUFBSUssaUNBQWlDO3dCQUNuQ0osbUJBQW1CO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ3BCN0MsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmWSxnQkFBZTtnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTWxELE9BQU8sSUFBSSxDQUFDbUQsT0FBTyxJQUNuQnJELFVBQVUsSUFBSSxDQUFDUyxVQUFVLElBQ3pCQyxhQUFhLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxTQUFTO2dCQUV0Q1gsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsbUNBQWlDUjtnQkFFNUUsSUFBTW9ELG9CQUFvQixPQUNwQlYsYUFBYSxJQUFJLENBQUN6QyxJQUFJLENBQUNvRCxhQUFhLENBQUNEO2dCQUUzQ0YsbUJBQW1CUixXQUFXSCxLQUFLLENBQUMsU0FBQ0U7b0JBQ25DLElBQU1FLG1CQUFtQixNQUFLSCxjQUFjLENBQUNDLFVBQVVDO29CQUV2RCxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSU8sa0JBQWtCO29CQUNwQnBELFFBQVFrQyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWHhCLFlBQVcsaUNBQStCUjtnQkFDOUU7Z0JBRUEsT0FBT2tEO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CTCxRQUFRLEVBQUVDLFVBQVU7Z0JBQ3JDLElBQUlHLHVCQUF1QjtnQkFFM0IsSUFBTTdDLE9BQU8sSUFBSSxDQUFDbUQsT0FBTyxJQUNuQnJELFVBQVUsSUFBSSxDQUFDUyxVQUFVLElBQ3pCcUMsaUJBQWlCSCxTQUFTaEMsU0FBUztnQkFFekNYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFma0MsZ0JBQWUseUJBQXVCNUM7Z0JBRXRFLElBQU1zRCxlQUFlYixTQUFTN0IsT0FBTyxJQUMvQjJDLFFBQVFiLFdBQVdjLE1BQU0sQ0FBQyxTQUFDRCxPQUFPZDtvQkFDaEMsSUFBTWdCLGlDQUFpQ2hCLFNBQVNpQixtQkFBbUIsQ0FBQ0o7b0JBRXBFLElBQUlHLGdDQUFnQzt3QkFDbENGO29CQUNGO29CQUVBLE9BQU9BO2dCQUNULEdBQUc7Z0JBRVQsSUFBSUEsUUFBUSxHQUFHO29CQUNiekQsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLFFBQXNCLE9BQWZZLGdCQUFlLHVDQUFxQzVDO2dCQUM1RSxPQUFPO29CQUNMLElBQU1xQyxhQUFhLElBQUksQ0FBQ3BDLElBQUksQ0FBQ3FDLGFBQWEsSUFDcENsQixZQUFZaUIsV0FBV3NCLElBQUksQ0FBQyxTQUFDdkM7d0JBQzNCLElBQU13QyxzQkFBc0J4QyxVQUFVaUMsYUFBYSxJQUM3Q1EsMENBQTBDRCxvQkFBb0JFLElBQUksQ0FBQyxTQUFDQzs0QkFDbEUsSUFBTUYsMENBQTBDRSxrQkFBa0JMLG1CQUFtQixDQUFDSjs0QkFFdEYsSUFBSU8seUNBQXlDO2dDQUMzQyxPQUFPOzRCQUNUO3dCQUNGO3dCQUVOLElBQUlBLHlDQUF5Qzs0QkFDM0MsT0FBTzt3QkFDVDtvQkFDRixNQUFNO29CQUVaLElBQUl6QyxjQUFjLE1BQU07d0JBQ3RCLElBQU1FLGtCQUFrQkYsVUFBVVgsU0FBUzt3QkFFM0NYLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxRQUF1QixPQUFoQlYsaUJBQWdCLHdDQUFzQ3RCO29CQUM5RSxPQUFPO3dCQUNMNkMsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJQSxzQkFBc0I7b0JBQ3hCL0MsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmWSxnQkFBZSx1QkFBcUI1QztnQkFDeEU7Z0JBRUEsT0FBTzZDO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCUCxRQUFRO2dCQUNwQyxJQUFJTSxrQ0FBa0M7Z0JBRXRDLElBQU0vQyxPQUFPLElBQUksQ0FBQ21ELE9BQU8sSUFDbkJyRCxVQUFVLElBQUksQ0FBQ1MsVUFBVSxJQUN6QnFDLGlCQUFpQkgsU0FBU2hDLFNBQVMsSUFDbkNjLGtCQUFrQmtCLFNBQVNqQixrQkFBa0I7Z0JBRW5EMUIsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQWdEYSxPQUEvQnFCLGdCQUFlLGtCQUFnQyxPQUFoQnJCLGlCQUFnQiwyQkFBeUJ2QjtnQkFFeEcsSUFBTWdFLGdDQUFnQyxJQUFJLENBQUMvRCxJQUFJLENBQUNnRSxzQkFBc0IsQ0FBQzFDO2dCQUV2RSxJQUFJeUMsK0JBQStCO29CQUNqQ2pCLGtDQUFrQztnQkFDcEMsT0FBTztvQkFDTCxJQUFNaEMsY0FBY2pCLFFBQVFvRSw4QkFBOEIsQ0FBQzNDO29CQUUzRCxJQUFJUixhQUFhO3dCQUNmZ0Msa0NBQWtDO29CQUNwQztnQkFDRjtnQkFFQSxJQUFJQSxpQ0FBaUM7b0JBQ25DakQsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLG9CQUFrRFQsT0FBL0JxQixnQkFBZSxrQkFBZ0MsT0FBaEJyQixpQkFBZ0IseUJBQXVCdkI7Z0JBQzFHO2dCQUVBLE9BQU8rQztZQUNUOzs7WUFFTW9CLEtBQUFBO21CQUFOLFNBQU1BOzt3QkFDQUMsVUFFRXBFLE1BQ0FGLFNBQ0F1RSw4QkFLRTdELFlBSUFGLGNBR0U0QixrQkFHRWdCLGtCQUdFb0IsWUFHRUMsZ0JBQ0FDOzt3QkExQlpKLFdBQVc7d0JBRVRwRSxPQUFPLElBQUksQ0FBQ21ELE9BQU8sSUFDbkJyRCxVQUFVLElBQUksQ0FBQ1MsVUFBVSxJQUN6QjhELCtCQUErQixJQUFJLENBQUM1RCxTQUFTLElBQUksR0FBRzt3QkFFMURYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUE4QyxPQUE3QjJELDhCQUE2QixrQ0FBZ0NyRTt3QkFFN0YsSUFBSSxJQUFJLENBQUNFLFFBQVEsRUFBRTs0QkFDWE0sYUFBYSxJQUFJLENBQUNQLElBQUksQ0FBQ1EsU0FBUzs0QkFFdENYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhGLFlBQVc7d0JBQ25DLE9BQU87NEJBQ0NGLGVBQWUsSUFBSSxDQUFDRCxVQUFVOzRCQUVwQyxJQUFJQyxjQUFjO2dDQUNWNEIsbUJBQW1CLElBQUksQ0FBQ0QsZ0JBQWdCO2dDQUU5QyxJQUFJQyxrQkFBa0I7b0NBQ2RnQixtQkFBbUIsSUFBSSxDQUFDRCxnQkFBZ0I7b0NBRTlDLElBQUlDLGtCQUFrQjt3Q0FDZG9CLGFBQWF4RSxRQUFRMkUsYUFBYTt3Q0FFeEMsSUFBSUgsZUFBZSxNQUFNOzRDQUNqQkMsaUJBQWlCRCxXQUFXMUQsT0FBTyxJQUNuQzRELGFBQWFELGdCQUFpQixHQUFHOzRDQUV2QyxJQUFJLENBQUN0RSxJQUFJLENBQUN5RSxhQUFhLENBQUNGO3dDQUMxQjt3Q0FFQTFFLFFBQVE2RSxPQUFPLENBQUMsSUFBSSxDQUFDMUUsSUFBSTt3Q0FFekJtRSxXQUFXO29DQUNiO2dDQUNGOzRCQUNGO3dCQUNGO3dCQUVBLElBQUlBLFVBQVU7NEJBQ1p0RSxRQUFRa0MsS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCcUMsOEJBQTZCLGdDQUE4QnJFO3dCQUMvRjt3QkFFQTs7NEJBQU9vRTs7O2dCQUNUOzs7OztFQTVTeURRLG9CQUFXLEdBOFNwRSwwQ0FBT0MsUUFBTyJ9