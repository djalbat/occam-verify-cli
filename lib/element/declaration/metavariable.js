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
    function MetavariableDeclaration(context, string, node, metavariable, metaType) {
        _class_call_check(this, MetavariableDeclaration);
        var _this;
        _this = _call_super(this, MetavariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.metavariable = metavariable;
        _this.metaType = metaType;
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
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
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
        }
    ]);
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZVR5cGUoKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVUeXBlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVR5cGUgPT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVR5cGVTdHJpbmcgPSBtZXRhdmFyaWFibGVUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbidzICcke21ldGF2YXJpYWJsZVR5cGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSBtZXRhdmFyaWFibGVUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlVHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1ldGF2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlVHlwZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsImdldENvbnRleHQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwiZGVidWciLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVUeXBlIiwibWV0YXZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJtZXRhdmFyaWFibGVUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImFkZE1ldGF2YXJpYWJsZSIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7Oztl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