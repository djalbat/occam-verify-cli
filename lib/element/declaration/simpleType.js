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
    function SimpleTypeDeclaration(context, string, node, type, prefixed, superTypes) {
        _class_call_check(this, SimpleTypeDeclaration);
        var _this;
        _this = _call_super(this, SimpleTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.prefixed = prefixed;
        _this.superTypes = superTypes;
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
            key: "getSuperTypes",
            value: function getSuperTypes() {
                return this.superTypes;
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
            value: function verifySuperType(superType, index) {
                var superTypeVerifies = false;
                var context = this.getContext(), superTypeString = superType.getString(), simpleTypeDeclarationString = this.getString(); ///;
                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypeString, "' super-types..."));
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeComparesToTypeName = this.type.compareTypeName(typeName);
                if (!typeComparesToTypeName) {
                    superType = context.findTypeByNominalTypeName(nominalTypeName);
                    if (superType !== null) {
                        this.type.replaceSuperType(superType, index);
                        superTypeVerifies = true;
                    } else {
                        context.debug("The '".concat(superTypeString, "' super-type is not present."));
                    }
                } else {
                    context.debug("The '".concat(superTypeString, "' super-type's name compares to the ").concat(typeName, "' type's name."));
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
                var superTypesLength = this.superTypes.length;
                if (superTypesLength > 0) {
                    var context = this.getContext(), superTypesString = (0, _string.superTypesStringFromSuperTypes)(this.superTypes), simpleTypeDeclarationString = this.getString(); ///;
                    context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypesString, "' super-types..."));
                    superTypesVerify = this.superTypes.every(function(superType, index) {
                        var superTypeVerifies = _this.verifySuperType(superType, index);
                        if (superTypeVerifies) {
                            return true;
                        }
                    });
                    if (superTypesVerify) {
                        context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration's '").concat(superTypesString, "' super-types."));
                    }
                } else {
                    superTypesVerify = true;
                }
                return superTypesVerify;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, simpleTypeDeclarationString, typeVerifies, superTypesVerify, typePrefix, typePrefixName, prefixName, typeString;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        context = this.getContext(), simpleTypeDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."));
                        if (!this.prefixed) {
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
                        } else {
                            typeString = this.type.getString();
                            context.trace("The '".concat(typeString, "' type is prefixed."));
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2ltcGxlVHlwZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHByZWZpeGVkLCBzdXBlclR5cGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcmVmaXhlZCA9IHByZWZpeGVkO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0U2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgLy8vXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBpbmRleCkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy87XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uJ3MgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnR5cGUucmVwbGFjZVN1cGVyVHlwZShzdXBlclR5cGUsIGluZGV4KTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUncyBuYW1lIGNvbXBhcmVzIHRvIHRoZSAke3R5cGVOYW1lfScgdHlwZSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXModGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vLztcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbidzICcke3N1cGVyVHlwZXNTdHJpbmd9JyBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy5zdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24ncyAnJHtzdXBlclR5cGVzU3RyaW5nfScgc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGlmICghdGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBwcmVmaXhOYW1lID0gdHlwZVByZWZpeE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy50eXBlLnNldFByZWZpeE5hbWUocHJlZml4TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaW1wbGVUeXBlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsInByZWZpeGVkIiwic3VwZXJUeXBlcyIsImdldFR5cGUiLCJpc1ByZWZpeGVkIiwiZ2V0U3VwZXJUeXBlcyIsImdldFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXROb2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJnZXRDb250ZXh0IiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwiZGVidWciLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJpbmRleCIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJyZXBsYWNlU3VwZXJUeXBlIiwidmVyaWZ5U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNWZXJpZnkiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImV2ZXJ5IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJwcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeCIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztrRUFMd0I7d0JBRUQ7c0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEbkNOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsT0FBTyxJQUFJLENBQUNRLE9BQU8sSUFDbkJDLDRCQUE0QlQsTUFBTSxHQUFHO2dCQUUzQyxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGVBQWU7Z0JBRW5CLElBQU1iLFVBQVUsSUFBSSxDQUFDYyxVQUFVLElBQ3pCQyxhQUFhLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxTQUFTLElBQ2hDQyw4QkFBOEIsSUFBSSxDQUFDRCxTQUFTLElBQUksR0FBRztnQkFFekRoQixRQUFRa0IsS0FBSyxDQUFDLEFBQUMsa0JBQTRFSCxPQUEzREUsNkJBQTRCLGlDQUEwQyxPQUFYRixZQUFXO2dCQUV0RyxJQUFNSSxXQUFXLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLE9BQU8sSUFDNUJDLGlCQUFpQixNQUNqQkMsc0JBQXNCLE9BQ3RCQyxjQUFjdkIsUUFBUXdCLHVCQUF1QixDQUFDTCxVQUFVRSxnQkFBZ0JDO2dCQUU5RSxJQUFJLENBQUNDLGFBQWE7b0JBQ2hCLElBQU1FLG1CQUFtQk4sVUFDbkJJLGVBQWN2QixRQUFRMEIsK0JBQStCLENBQUNEO29CQUU1RCxJQUFJLENBQUNGLGNBQWE7d0JBQ2hCVixlQUFlO29CQUNqQixPQUFPO3dCQUNMYixRQUFRMkIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWFosWUFBVztvQkFDbkM7Z0JBQ0YsT0FBTztvQkFDTGYsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhaLFlBQVc7Z0JBQ25DO2dCQUVBLElBQUlGLGNBQWM7b0JBQ2hCYixRQUFRMkIsS0FBSyxDQUFDLEFBQUMsb0JBQThFWixPQUEzREUsNkJBQTRCLGlDQUEwQyxPQUFYRixZQUFXO2dCQUMxRztnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsU0FBUyxFQUFFQyxLQUFLO2dCQUM5QixJQUFJQyxvQkFBb0I7Z0JBRXhCLElBQU0vQixVQUFVLElBQUksQ0FBQ2MsVUFBVSxJQUN6QmtCLGtCQUFrQkgsVUFBVWIsU0FBUyxJQUNyQ0MsOEJBQThCLElBQUksQ0FBQ0QsU0FBUyxJQUFJLElBQUk7Z0JBRTFEaEIsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLGtCQUE0RWMsT0FBM0RmLDZCQUE0QixpQ0FBK0MsT0FBaEJlLGlCQUFnQjtnQkFFM0csSUFBTUMsa0JBQWtCSixVQUFVSyxrQkFBa0IsSUFDOUNmLFdBQVdjLGlCQUNYRSx5QkFBeUIsSUFBSSxDQUFDaEMsSUFBSSxDQUFDaUMsZUFBZSxDQUFDakI7Z0JBRXpELElBQUksQ0FBQ2dCLHdCQUF3QjtvQkFDM0JOLFlBQVk3QixRQUFRcUMseUJBQXlCLENBQUNKO29CQUU5QyxJQUFJSixjQUFjLE1BQU07d0JBQ3RCLElBQUksQ0FBQzFCLElBQUksQ0FBQ21DLGdCQUFnQixDQUFDVCxXQUFXQzt3QkFFdENDLG9CQUFvQjtvQkFDdEIsT0FBTzt3QkFDTC9CLFFBQVEyQixLQUFLLENBQUMsQUFBQyxRQUF1QixPQUFoQkssaUJBQWdCO29CQUN4QztnQkFDRixPQUFPO29CQUNMaEMsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLFFBQTZEUixPQUF0RGEsaUJBQWdCLHdDQUErQyxPQUFUYixVQUFTO2dCQUN2RjtnQkFFQSxJQUFJWSxtQkFBbUI7b0JBQ3JCL0IsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQkssaUJBQWdCO2dCQUNwRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDcEMsVUFBVSxDQUFDcUMsTUFBTTtnQkFFL0MsSUFBSUQsbUJBQW1CLEdBQUc7b0JBQ3hCLElBQU16QyxVQUFVLElBQUksQ0FBQ2MsVUFBVSxJQUN6QjZCLG1CQUFtQkMsSUFBQUEsc0NBQThCLEVBQUMsSUFBSSxDQUFDdkMsVUFBVSxHQUNqRVksOEJBQThCLElBQUksQ0FBQ0QsU0FBUyxJQUFJLElBQUk7b0JBRTFEaEIsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLGtCQUE0RXlCLE9BQTNEMUIsNkJBQTRCLGlDQUFnRCxPQUFqQjBCLGtCQUFpQjtvQkFFNUdILG1CQUFtQixJQUFJLENBQUNuQyxVQUFVLENBQUN3QyxLQUFLLENBQUMsU0FBQ2hCLFdBQVdDO3dCQUNuRCxJQUFNQyxvQkFBb0IsTUFBS0gsZUFBZSxDQUFDQyxXQUFXQzt3QkFFMUQsSUFBSUMsbUJBQW1COzRCQUNyQixPQUFPO3dCQUNUO29CQUNGO29CQUVBLElBQUlTLGtCQUFrQjt3QkFDcEJ4QyxRQUFRMkIsS0FBSyxDQUFDLEFBQUMsb0JBQThFZ0IsT0FBM0QxQiw2QkFBNEIsaUNBQWdELE9BQWpCMEIsa0JBQWlCO29CQUNoSDtnQkFDRixPQUFPO29CQUNMSCxtQkFBbUI7Z0JBQ3JCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVNTSxLQUFBQTttQkFBTixTQUFNQTs7d0JBQ0FDLFVBRUUvQyxTQUNBaUIsNkJBS0VKLGNBR0UyQixrQkFHRVEsWUFHRUMsZ0JBQ0FDLFlBV05uQzs7d0JBN0JKZ0MsV0FBVzt3QkFFVC9DLFVBQVUsSUFBSSxDQUFDYyxVQUFVLElBQ3pCRyw4QkFBOEIsSUFBSSxDQUFDRCxTQUFTLElBQUssR0FBRzt3QkFFMURoQixRQUFRa0IsS0FBSyxDQUFDLEFBQUMsa0JBQTZDLE9BQTVCRCw2QkFBNEI7d0JBRTVELElBQUksQ0FBQyxJQUFJLENBQUNiLFFBQVEsRUFBRTs0QkFDWlMsZUFBZSxJQUFJLENBQUNELFVBQVU7NEJBRXBDLElBQUlDLGNBQWM7Z0NBQ1YyQixtQkFBbUIsSUFBSSxDQUFDRCxnQkFBZ0I7Z0NBRTlDLElBQUlDLGtCQUFrQjtvQ0FDZFEsYUFBYWhELFFBQVFtRCxhQUFhO29DQUV4QyxJQUFJSCxlQUFlLE1BQU07d0NBQ2pCQyxpQkFBaUJELFdBQVc1QixPQUFPLElBQ25DOEIsYUFBYUQsZ0JBQWlCLEdBQUc7d0NBRXZDLElBQUksQ0FBQzlDLElBQUksQ0FBQ2lELGFBQWEsQ0FBQ0Y7b0NBQzFCO29DQUVBbEQsUUFBUXFELE9BQU8sQ0FBQyxJQUFJLENBQUNsRCxJQUFJO29DQUV6QjRDLFdBQVc7Z0NBQ2I7NEJBQ0Y7d0JBQ0YsT0FBTzs0QkFDQ2hDLGFBQWEsSUFBSSxDQUFDWixJQUFJLENBQUNhLFNBQVM7NEJBRXRDaEIsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhILFlBQVc7d0JBQ25DO3dCQUVBLElBQUlnQyxVQUFVOzRCQUNaL0MsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1QlYsNkJBQTRCO3dCQUNoRTt3QkFFQTs7NEJBQU84Qjs7O2dCQUNUOzs7OztFQXRLd0RPLG9CQUFXLEdBd0tuRSx5Q0FBT0MsUUFBTyJ9