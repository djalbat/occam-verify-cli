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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZVR5cGUoKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgdGhpcy5tZXRhdmFyaWFibGUuc2V0TWV0YVR5cGUodGhpcy5tZXRhVHlwZSk7XG5cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVHlwZSA9PT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVHlwZVN0cmluZyA9IG1ldGF2YXJpYWJsZVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uJ3MgJyR7bWV0YXZhcmlhYmxlVHlwZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IG1ldGF2YXJpYWJsZVR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWV0YXZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24ncyAnJHttZXRhdmFyaWFibGVUeXBlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwibWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRNZXRhVHlwZSIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVR5cGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZVR5cGUiLCJzZXRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwibWV0YXZhcmlhYmxlVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJhZGRNZXRhdmFyaWFibGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRDQUFDOzthQUFNQyx3QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxRQUFRO2dDQUQvQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTVIsVUFBVSxJQUFJLENBQUNTLFVBQVUsSUFDekJDLHFCQUFxQixJQUFJLENBQUNQLFlBQVksQ0FBQ1EsU0FBUyxJQUNoREMsZ0NBQWdDLElBQUksQ0FBQ0QsU0FBUyxJQUFJLEdBQUc7Z0JBRTNEWCxRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBMkVILE9BQTFERSwrQkFBOEIsOEJBQStDLE9BQW5CRixvQkFBbUI7Z0JBRTdHLElBQU1JLG1CQUFtQixJQUFJLENBQUNYLFlBQVksQ0FBQ1ksT0FBTyxJQUM1Q0MsV0FB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