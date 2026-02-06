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
var _TypePrefixDeclaration;
var _default = (0, _elements.define)((_TypePrefixDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(TypePrefixDeclaration, Declaration);
    function TypePrefixDeclaration(context, string, node, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        var _this;
        _this = _call_super(this, TypePrefixDeclaration, [
            context,
            string,
            node
        ]);
        _this.typePrefix = typePrefix;
        return _this;
    }
    _create_class(TypePrefixDeclaration, [
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.typePrefix;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var node = this.getNode(), context = this.getContext(), typePrefixString = this.typePrefix.getString();
                context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."), node);
                var typePrefix = context.getTypePrefix();
                if (typePrefix !== null) {
                    context.trace("The package already has a '".concat(typePrefixString, "' type prefix."), node);
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        context.trace("The '".concat(typePrefixString, "' type prefix is already present."), node);
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            context.trace("The '".concat(typePrefixString, "' type is already present."), node);
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    context.debug("...verified the '".concat(typePrefixString, "' type prefix."), node);
                }
                return typePrefixVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, typePrefixDeclarationString, includeRelease, includeDependencies, types, typesLength, typePrefixVerifies;
                    return _ts_generator(this, function(_state) {
                        verifies = false;
                        node = this.getNode(), context = this.getContext(), typePrefixDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."), node);
                        includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                        if (typesLength > 0) {
                            context.debug("Unable to verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."), node);
                        } else {
                            typePrefixVerifies = this.verifyTypePrefix();
                            if (typePrefixVerifies) {
                                context.addTypePrefix(this.typePrefix);
                                verifies = true;
                            }
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."), node);
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
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLnR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBwYWNrYWdlIGFscmVhZHkgaGFzIGEgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy50eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGVQcmVmaXhWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZXMgPSBjb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidmVyaWZ5VHlwZVByZWZpeCIsInR5cGVQcmVmaXhWZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVzIiwidHlwZXNMZW5ndGgiLCJnZXRUeXBlcyIsImxlbmd0aCIsImFkZFR5cGVQcmVmaXgiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lB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