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
        }
    ]);
    return SimpleTypeDeclaration;
}(_declaration.default), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHtiYXNlVHlwZUZyb21Ob3RoaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBzdXBlclR5cGVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy50eXBlLnNldFByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUsIHN1cGVyVHlwZXMpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXModGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZXNTdHJpbmd9JyBzdXBlci10eXBlcy4uLmApIDpcbiAgICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzIHN1cGVyLXR5cGVzLi4uYCk7XG5cbiAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy5zdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBzdXBlclR5cGVzKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwZXJUeXVwZSA9IGJhc2VUeXBlOyAgLy8vXG5cbiAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHl1cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlc1N0cmluZ30nIHN1cGVyLXR5cGVzLmApIDpcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXhWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZWQgPSB0aGlzLnR5cGUuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKCF0eXBlUHJlZml4ZWQpIHtcbiAgICAgIHR5cGVQcmVmaXhWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaW1wbGVUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInN1cGVyVHlwZXMiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRTdXBlclR5cGVzIiwiaXNQcm92aXNpb25hbCIsImdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJnZXRDb250ZXh0IiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwic2V0UHJvdmlzaW9uYWwiLCJkZWJ1ZyIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJwdXNoIiwidmVyaWZ5U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNWZXJpZnkiLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwic3VwZXJUeXVwZSIsInNldFN1cGVyVHlwZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwidHlwZVByZWZpeFZlcmlmaWVzIiwidHlwZVByZWZpeGVkIiwiaXNQcmVmaXhlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJhZGRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztrRUFOd0I7d0JBRUQ7c0JBQ3dCO29CQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEMsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEdENOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFdBQVcsR0FBR0E7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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