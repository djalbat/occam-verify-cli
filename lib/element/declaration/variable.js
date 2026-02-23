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
    function VariableDeclaration(context, string, node, type, variable, provisional) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.variable = variable;
        _this.provisional = provisional;
        return _this;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.provisional;
            }
        },
        {
            key: "getVariableDeclarationNode",
            value: function getVariableDeclarationNode() {
                var node = this.getNode(), typePrefixDeclarationNode = node; ///
                return typePrefixDeclarationNode;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var context = this.getContext();
                var typeString = this.type.getString(), variableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration's '").concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    var typeComparesToProvisional = type.compareProvisional(this.provisional);
                    if (!typeComparesToProvisional) {
                        this.provisional ? context.debug("The '".concat(variableDeclarationString, "' variable declaration's '").concat(typeString, "' type is present but not provisional.")) : context.debug("The '".concat(variableDeclarationString, "' variable declaration's '").concat(typeString, "' type is present but provisional."));
                    } else {
                        this.variable.setType(type);
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration's '").concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var context = this.getContext(), variableString = this.variable.getString(), variableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration's '").concat(variableString, "' variable..."));
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    context.debug("The '".concat(variableString, "' variable is already present."));
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration's '").concat(variableString, "' variable."));
                }
                return variableVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, variableDeclarationString, typeVerifies, variableVerifies;
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
                                variableDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."));
                                typeVerifies = this.verifyType();
                                if (typeVerifies) {
                                    variableVerifies = this.verifyVariable();
                                    if (variableVerifies) {
                                        context.addVariable(this.variable);
                                        verifies = true;
                                    }
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbClcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHRoaXMucHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgdGhpcy5wcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidmFyaWFibGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRWYXJpYWJsZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5VHlwZSIsInR5cGVWZXJpZmllcyIsImdldENvbnRleHQiLCJ0eXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiZGVidWciLCJ0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwic2V0VHlwZSIsInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVWZXJpZmllcyIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiYWRkVmFyaWFibGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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