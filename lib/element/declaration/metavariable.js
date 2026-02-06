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
var _MetavariableDeclaration;
var _default = (0, _elements.define)((_MetavariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(MetavariableDeclaration, Declaration);
    function MetavariableDeclaration(context, string, node, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        var _this;
        _this = _call_super(this, MetavariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerifies;
                var node = this.getNode(), context = this.getContext();
                if (type === null) {
                    typeVerifies = true;
                } else {
                    var typeString = type.getString();
                    context.trace("Verifying the '".concat(typeString, "' type..."), node);
                    var nominalTypeName = type.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (!typePresent) {
                        context.debug("The '".concat(typeString, "' type is not present."), node);
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        context.debug("...verified the '".concat(typeString, "' type."), node);
                    }
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerifies = false;
                var node = this.getNode(), context = this.getContext(), metavariableString = metavariable.getString();
                context.trace("Verifying the '".concat(metavariableString, "' metavariable..."), node);
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."), node);
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        context.debug("The '".concat(metavariableName, "' metavariable is already present."), node);
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable."), node);
                }
                return metavariableVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, metavariableDeclarationString, metavariableVerifies;
                    return _ts_generator(this, function(_state) {
                        node = this.getNode(), context = this.getContext(), metavariableDeclarationString = this.getString(); ///
                        context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."), node);
                        metavariableVerifies = this.verifyMetavariable(this.metavariable);
                        if (metavariableVerifies) {
                            context.addMetavariable(this.metavariable);
                            verifies = true;
                        }
                        if (verifies) {
                            context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."), node);
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
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnlUeXBlKHR5cGUpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gbWV0YXZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKHR5cGUpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdHlwZVZlcmlmaWVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZGVidWciLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJhZGRNZXRhdmFyaWFibGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRDQUFDOzthQUFNQyx3QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWTtnQ0FEckJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJQztnQkFFSixJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQlIsVUFBVSxJQUFJLENBQUNTLFVBQVU7Z0JBRS9CLElBQUlILFNBQVMsTUFBTTtvQkFDakJDLGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBTUcsYUFBYUosS0FBS0ssU0FBUztvQkFFakNYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVlSO29CQUV2RCxJQUFNVyxrQkFBa0JQ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