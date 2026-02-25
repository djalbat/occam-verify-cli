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
    function MetavariableDeclaration(context, string, node, metaType, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        var _this;
        _this = _call_super(this, MetavariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.metaType = metaType;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, context, metavariableDeclarationString, metavariableVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                context = this.getContext();
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                metavariableDeclarationString = this.getString(); ///
                                context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."));
                                metavariableVerifies = this.verifyMetavariable();
                                if (metavariableVerifies) {
                                    context.addMetavariable(this.metavariable);
                                    verifies = true;
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."));
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
            key: "verifyMetavariable",
            value: function verifyMetavariable() {
                var metavariableVerifies = false;
                var context = this.getContext(), metavariableString = this.metavariable.getString(), metavariableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(metavariableDeclarationString, "' variable declaration's '").concat(metavariableString, "' metavariable..."));
                var metavariableNode = this.metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                } else {
                    var metavariableName = this.metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        context.debug("The '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var metavariableTypeVerified = this.verifyMetavariableType();
                        if (metavariableTypeVerified) {
                            this.metavariable.setMetaType(this.metaType);
                            metavariableVerifies = true;
                        }
                    }
                }
                if (metavariableVerifies) {
                    context.debug("...verified the '".concat(metavariableDeclarationString, "' variable declaration's '").concat(metavariableString, "' metavariable."));
                }
                return metavariableVerifies;
            }
        },
        {
            key: "verifyMetavariableType",
            value: function verifyMetavariableType() {
                var metavariableTypeVerified = false;
                var context = this.getContext(), metavariableType = this.metavariable.getType();
                if (metavariableType === null) {
                    metavariableTypeVerified = true;
                } else {
                    var metavariableTypeString = metavariableType.getString(), metavariableDeclarationString = this.getString(); ///
                    context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration's '").concat(metavariableTypeString, "' metavariable type..."));
                    var nominalTypeName = metavariableType.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                    if (type !== null) {
                        context.debug("The '".concat(metavariableTypeString, "' type is not present."));
                    } else {
                        this.metavariable.setType(type);
                        metavariableTypeVerified = true;
                    }
                    if (metavariableTypeVerified) {
                        context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration's '").concat(metavariableTypeString, "' metavariable type."));
                    }
                }
                return metavariableTypeVerified;
            }
        }
    ]);
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlVHlwZSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZSh0aGlzLm1ldGFUeXBlKTtcblxuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVUeXBlID09PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVUeXBlU3RyaW5nID0gbWV0YXZhcmlhYmxlVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gbWV0YXZhcmlhYmxlVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVR5cGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YVR5cGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiYWRkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVUeXBlIiwic2V0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsIm1ldGF2YXJpYWJsZVR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInNldFR5cGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRDQUFDOzthQUFNQyx3QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZO2dDQUQvQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFTUcsS0FBQUE7bUJBQU4sU0FBTUE7O3dCQUNBQyxVQUVFUixTQUlBUywrQkFJQUM7Ozs7Z0NBUkFWLFVBQVUsSUFBSSxDQUFDVyxVQUFVO2dDQUUvQjs7b0NBQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNaOzs7Z0NBQWpCO2dDQUVNUyxnQ0FBZ0MsSUFBSSxDQUFDSSxTQUFTLElBQUksR0FBRztnQ0FFM0RiLFFBQVFjLEtBQUssQ0FBQyxBQUFDLGtCQUErQyxPQUE5QkwsK0JBQThCO2dDQUV4REMsdUJBQXVCLElBQUksQ0FBQ0ssa0JBQWtCO2dDQUVwRCxJQUFJTCxzQkFBc0I7b0NBQ3hCVixRQUFRZ0IsZUFB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