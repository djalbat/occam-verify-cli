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
var _string = require("../../utilities/string");
var _type = require("../../utilities/type");
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
var _SimpleTypeDeclaration;
var _default = (0, _elements.define)((_SimpleTypeDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(SimpleTypeDeclaration, Declaration);
    function SimpleTypeDeclaration(context, string, node, type, superTypes, provisional) {
        _class_call_check(this, SimpleTypeDeclaration);
        var _this;
        _this = _call_super(this, SimpleTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.superTypes = superTypes;
        _this.provisional = provisional;
        return _this;
    }
    _create_class(SimpleTypeDeclaration, [
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
            key: "isProvisional",
            value: function isProvisional() {
                return this.provisional;
            }
        },
        {
            key: "getSimpleTypeDeclarationNode",
            value: function getSimpleTypeDeclarationNode() {
                var node = this.getNode(), simpleTypeDeclarationNode = node; ///
                return simpleTypeDeclarationNode;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, simpleTypeDeclarationString, typeVerifies, superTypesVerify, typePrefixVerifies;
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
                                simpleTypeDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."));
                                typeVerifies = this.verifyType();
                                if (typeVerifies) {
                                    superTypesVerify = this.verifySuperTypes();
                                    if (superTypesVerify) {
                                        typePrefixVerifies = this.verifyTypePrefix();
                                        if (typePrefixVerifies) {
                                            context.addType(this.type);
                                            verifies = true;
                                        }
                                    }
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration."));
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
                var context = this.getContext(), typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(typeString, "' type..."));
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (!typePresent) {
                    var prefixedTypeName = typeName, typePresent1 = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (!typePresent1) {
                        this.type.setProvisional(this.provisional);
                        typeVerifies = true;
                    } else {
                        context.debug("The '".concat(typeString, "' type is already present."));
                    }
                } else {
                    context.debug("The '".concat(typeString, "' type is already present."));
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(typeString, "' type"));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType, superTypes) {
                var superTypeVerifies = false;
                var context = this.getContext(), superTypeString = superType.getString(), simpleTypeDeclarationString = this.getString(); ///;
                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypeString, "' super-type..."));
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
                if (!typeComparesToTypeName) {
                    superType = context.findTypeByNominalTypeName(nominalTypeName);
                    if (superType !== null) {
                        superTypes.push(superType);
                        superTypeVerifies = true;
                    } else {
                        context.debug("The '".concat(superTypeString, "' super-type is not present."));
                    }
                } else {
                    context.debug("The '".concat(superTypeString, "' super-type's name compares to the ").concat(typeName, "' type's name."));
                }
                if (superTypeVerifies) {
                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypeString, "' super-type."));
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var context = this.getContext(), superTypes = [], superTypesString = (0, _string.superTypesStringFromSuperTypes)(this.superTypes), simpleTypeDeclarationString = this.getString(); ///;
                superTypesString !== null ? context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypesString, "' super-types...")) : context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's super-types..."));
                superTypesVerify = this.superTypes.every(function(superType) {
                    var superTypeVerifies = _this.verifySuperType(superType, superTypes);
                    if (superTypeVerifies) {
                        return true;
                    }
                });
                if (superTypesVerify) {
                    var superTypesLength = superTypes.length;
                    if (superTypesLength === 0) {
                        var baseType = (0, _type.baseTypeFromNothing)(), superTyupe = baseType; ///
                        superTypes.push(superTyupe);
                    }
                    this.type.setSuperTypes(superTypes);
                    superTypesString !== null ? context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypesString, "' super-types.")) : context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's super-types."));
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var context = this.getContext(), typeString = this.type.getString(), simpleTypeDeclarationString = this.getString(); ///;
                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(typeString, "' type's prefix..."));
                var typePrefixed = this.type.isPrefixed();
                if (!typePrefixed) {
                    typePrefixVerifies = true;
                } else {
                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(typeString, "' type is prefixed."));
                }
                if (typePrefixVerifies) {
                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(typeString, "' type's prefix."));
                }
                return typePrefixVerifies;
            }
        }
    ]);
    return SimpleTypeDeclaration;
}(_declaration.default), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHtiYXNlVHlwZUZyb21Ob3RoaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLnR5cGUuc2V0UHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSwgc3VwZXJUeXBlcykge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdGhpcy50eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgIHN1cGVyVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyB0eXBlJ3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vLztcblxuICAgIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlc1N0cmluZ30nIHN1cGVyLXR5cGVzLi4uYCkgOlxuICAgICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3Mgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdXBlclR5dXBlID0gYmFzZVR5cGU7ICAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXVwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVzU3RyaW5nfScgc3VwZXItdHlwZXMuYCkgOlxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlZCA9IHRoaXMudHlwZS5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAoIXR5cGVQcmVmaXhlZCkge1xuICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlZml4ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUncyBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaW1wbGVUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiaXNQcm92aXNpb25hbCIsImdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlc1ZlcmlmeSIsInR5cGVQcmVmaXhWZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInNldFByb3Zpc2lvbmFsIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInB1c2giLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4ZWQiLCJpc1ByZWZpeGVkIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztrRUFOd0I7d0JBRUQ7c0JBQ3dCO29CQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEMsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEdENOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFdBQVcsR0FBR0E7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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