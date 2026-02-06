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
var _VariableDeclaration;
var _default = (0, _elements.define)((_VariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(VariableDeclaration, Declaration);
    function VariableDeclaration(context, string, node, variable) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        return _this;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var node = this.getNode(), context = this.getContext(), variableString = this.variable.getString();
                context.trace("Verifying the '".concat(variableString, "' variable..."), node);
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    context.debug("The '".concat(variableName, "' variable is already present."), node);
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    context.debug("...verified the '".concat(variableString, "' variable."), node);
                }
                return variableVerifies;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.variable.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."), node);
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional."), node) : context.debug("The '".concat(typeString, "' type is present but provisional."), node);
                    } else {
                        this.variable.setType(type);
                        variableTypeVerifies = true;
                    }
                }
                if (variableTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return variableTypeVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, node, context, variableDeclarationString, variableTypeVerifies, variableVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                node = this.getNode(), context = this.getContext(), variableDeclarationString = this.getString(); ///
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."), node);
                                variableTypeVerifies = this.verifyVariableType();
                                if (variableTypeVerifies) {
                                    variableVerifies = this.verifyVariable();
                                    if (variableVerifies) {
                                        context.addVariable(this.variable);
                                        verifies = true;
                                    }
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."), node);
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
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCBub2RlKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGVUeXBlKCk7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVWZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZGVidWciLCJ2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlWYXJpYWJsZVR5cGUiLCJ2YXJpYWJsZVR5cGVWZXJpZmllcyIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVN0cmluZyIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwidHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCIsImNvbXBhcmVQcm92aXNpb25hbCIsInNldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJicmVhayIsImFkZFZhcmlhYmxlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx3Q0FBQzs7YUFBTUMsb0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGpCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUtDLG1CQUFtQjtnQkFFeEIsSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyxpQkFBaUIsSUFBSSxDQUFDTixRQUFRLENBQUNPLFNBQVM7Z0JBRTlDVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCUDtnQkFFL0QsSUFBTVUscUJBQXFCLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxhQUFhLElBQ2hEQyxrQkFBa0JkLFFBQVFlLHFDQUFxQyxDQUFDSDtnQkFFdEUsSUFBSUUsaUJBQWlCO29CQUNuQmQsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLFFBQW9CLE9BQWJDLGNBQWEsbUNBQWlDZjtnQkFDdEUsT0FBTztvQkFDTEksbUJBQW1CO2dCQUNyQjtnQkFFQSxJQUFLQSxrQkFBa0I7b0JBQ3JCTixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZQLGdCQUFlLGdCQUFjUDtnQkFDakU7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1qQixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVU7Z0JBRS9CLElBQUlZO2dCQUVKQSxPQUFPLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQ2tCLE9BQU87Z0JBRTVCLElBQU1DLGFBQWFGLEtBQUtWLFNBQVM7Z0JBRWpDVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWFcsWUFBVyxjQUFZcEI7Z0JBRXZELElBQU1xQixvQkFBb0IsT0FDcEJDLGNBQWNKLEtBQUtLLGFBQWEsQ0FBQ0Ysb0JBQ2pDRyxrQkFBa0JOLEtBQUtPLGtCQUFrQjtnQkFFL0NQLE9BQU9wQixRQUFRNEIseUJBQXlCLENBQUNGO2dCQUV6QyxJQUFNRyxjQUFlVCxTQUFTO2dCQUU5QixJQUFJLENBQUNTLGFBQWE7b0JBQ2hCN0IsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhNLFlBQVcsMkJBQXlCcEI7Z0JBQzVELE9BQU87b0JBQ0wsSUFBTTRCLDRCQUE0QlYsS0FBS1csa0JBQWtCLENBQUNQO29CQUUxRCxJQUFJLENBQUNNLDJCQUEyQjt3QkFDOUJOLGNBQ0V4QixRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWE0sWUFBVywyQ0FBeUNwQixRQUN4RUYsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhNLFlBQVcsdUNBQXFDcEI7b0JBQzVFLE9BQU87d0JBQ0wsSUFBSSxDQUFDQyxRQUFRLENBQUM2QixPQUFPLENBQUNaO3dCQUV0QkQsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJQSxzQkFBc0I7b0JBQ3hCbkIsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYTSxZQUFXLFlBQVVwQjtnQkFDekQ7Z0JBRUEsT0FBT2lCO1lBQ1Q7OztZQUVNYyxLQUFBQTttQkFBTixTQUFNQTs7d0JBQ0FDLFVBRUVoQyxNQUNBRixTQUNBbUMsMkJBTUFoQixzQkFHRWI7Ozs7Z0NBYko0QixXQUFXO2dDQUVUaEMsT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCMkIsNEJBQTRCLElBQUksQ0FBQ3pCLFNBQVMsSUFBSSxHQUFHO2dDQUV2RDs7b0NBQU0sSUFBSSxDQUFDMEIsS0FBSyxDQUFDcEM7OztnQ0FBakI7Z0NBRUFBLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUEyQyxPQUExQndCLDJCQUEwQiw4QkFBNEJqQztnQ0FFaEZpQix1QkFBdUIsSUFBSSxDQUFDRCxrQkFBa0I7Z0NBRXBELElBQUlDLHNCQUFzQjtvQ0FDbEJiLG1CQUFtQixJQUFJLENBQUNELGNBQWM7b0NBRTVDLElBQUlDLGtCQUFrQjt3Q0FDcEJOLFFBQVFxQyxXQUFXLENBQUMsSUFBSSxDQUFDbEMsUUFBUTt3Q0FFakMrQixXQUFXO29DQUNiO2dDQUNGO2dDQUVBLElBQUlBLFVBQVU7b0NBQ1psQyxRQUFRZ0IsS0FBSyxDQUFDLEFBQUMsb0JBQTZDLE9BQTFCbUIsMkJBQTBCLDRCQUEwQmpDO2dDQUN4RjtnQ0FFQTs7b0NBQU9nQzs7OztnQkFDVDs7Ozs7RUE3R3NESSxvQkFBVyxHQStHakUsdUNBQU9DLFFBQU8ifQ==