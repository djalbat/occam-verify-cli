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
var _SimpleTypeDeclaration;
var _default = (0, _elements.define)((_SimpleTypeDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(SimpleTypeDeclaration, Declaration);
    function SimpleTypeDeclaration(context, string, node, type, prefixed) {
        _class_call_check(this, SimpleTypeDeclaration);
        var _this;
        _this = _call_super(this, SimpleTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.prefixed = prefixed;
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
                context.trace("Verifying the '".concat(typeString, "' simple type..."), node);
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
                    context.trace("...verified the '".concat(typeString, "' simple type."), node);
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
                    context.trace("The super-type's name compares to the ".concat(typeName, "' simple type's name."), node);
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
                context.trace("Verifying the '".concat(typeString, "' simple type's super-types..."), node);
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    context.trace("The '".concat(typeString, "' simple type is basic."), node);
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
                    context.debug("...verified the '".concat(typeString, "' simple type's super-types."), node);
                }
                return superTypesVerify;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, simpleTypeDeclarationString, typeString, typeVerifies, superTypesVerify, typePrefix, typePrefixName, prefixName;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        node = this.getNode(), context = this.getContext(), simpleTypeDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."), node);
                        if (this.prefixed) {
                            typeString = this.type.getString();
                            context.trace("The '".concat(typeString, "' type is prefixed."));
                        } else {
                            typeVerifies = this.verifyType();
                            if (typeVerifies) {
                                superTypesVerify = this.verifySuperTypes();
                                if (superTypesVerify) {
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
                        if (verifies) {
                            context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration."), node);
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
    return SimpleTypeDeclaration;
}(_declaration.default), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByZWZpeGVkID0gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgY29tcGFyZXMgdG8gdGhlICR7dHlwZU5hbWV9JyBzaW1wbGUgdHlwZSdzIG5hbWUuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3U3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShvbGRTdXBlclR5cGUsIG5ld1N1cGVyVHlwZSk7XG5cbiAgICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlJ3Mgc3VwZXItdHlwZXMuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZSBpcyBiYXNpYy5gLCBub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZSdzIHN1cGVyLXR5cGVzLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwicHJlZml4ZWQiLCJnZXRUeXBlIiwiaXNQcmVmaXhlZCIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsIm9sZFN1cGVyVHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsImRlYnVnIiwidmVyaWZ5U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNWZXJpZnkiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhOYW1lIiwicHJlZml4TmFtZSIsImdldFR5cGVQcmVmaXgiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7a0VBSndCO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRHZCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsUUFBUSxHQUFHQTs7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxlQUFlO2dCQUVuQixJQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQlQsVUFBVSxJ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