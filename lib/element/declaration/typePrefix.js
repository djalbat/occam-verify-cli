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
            key: "getTypePrefixDeclarationNode",
            value: function getTypePrefixDeclarationNode() {
                var node = this.getNode(), typePrefixDeclarationNode = node; ///
                return typePrefixDeclarationNode;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var context = this.getContext(), typePrefixString = this.typePrefix.getString();
                context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."));
                var typePrefix = context.getTypePrefix();
                if (typePrefix !== null) {
                    context.trace("The package already has a '".concat(typePrefixString, "' type prefix."));
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        context.debug("The '".concat(typePrefixString, "' type prefix is already present."));
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            context.debug("The '".concat(typePrefixString, "' type is already present."));
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    context.debug("...verified the '".concat(typePrefixString, "' type prefix."));
                }
                return typePrefixVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, typePrefixDeclarationString, includeRelease, includeDependencies, types, typesLength, typePrefixVerifies;
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
                                typePrefixDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."));
                                includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                                if (typesLength > 0) {
                                    context.debug("Unable to verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."));
                                } else {
                                    typePrefixVerifies = this.verifyTypePrefix();
                                    if (typePrefixVerifies) {
                                        context.addTypePrefix(this.typePrefix);
                                        verifies = true;
                                    }
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."));
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
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgcGFja2FnZSBhbHJlYWR5IGhhcyBhICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZXMgPSBjb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5VHlwZVByZWZpeCIsInR5cGVQcmVmaXhWZXJpZmllcyIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwiZGVidWciLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZXMiLCJ0eXBlc0xlbmd0aCIsImJyZWFrIiwiZ2V0VHlwZXMiLCJsZW5ndGgiLCJhZGRUeXBlUHJlZml4IiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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