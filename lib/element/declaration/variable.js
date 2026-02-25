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
        }
    ]);
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YXJpYWJsZSwgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVEZWNsYXJhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gdHlwZS5jb21wYXJlUHJvdmlzaW9uYWwodGhpcy5wcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICB0aGlzLnByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidmFyaWFibGUiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRWYXJpYWJsZSIsImlzUHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHlwZVZlcmlmaWVzIiwidmFyaWFibGVWZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZSIsInZlcmlmeVZhcmlhYmxlIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJ0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwic2V0VHlwZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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