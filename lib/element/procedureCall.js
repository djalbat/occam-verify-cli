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
var _occamlanguages = require("occam-languages");
var _occamfurtle = require("occam-furtle");
var _elements = require("../elements");
var _json = require("../utilities/json");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var _ProcedureCall;
var termsFromPrimitives = _occamfurtle.termsUtilities.termsFromPrimitives;
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function(Element) {
    _inherits(ProcedureCall, Element);
    function ProcedureCall(context, string, node, parameters, procedureReference) {
        _class_call_check(this, ProcedureCall);
        var _this;
        _this = _call_super(this, ProcedureCall, [
            context,
            string,
            node
        ]);
        _this.parameters = parameters;
        _this.procedureReference = procedureReference;
        return _this;
    }
    _create_class(ProcedureCall, [
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "getProcedureReference",
            value: function getProcedureReference() {
                return this.procedureReference;
            }
        },
        {
            key: "findPrimitives",
            value: function findPrimitives(context) {
                var substitutions = context.getSubstitutions(), primitives = this.parameters.map(function(parameter) {
                    var primitive = parameter.findPrimitive(substitutions);
                    return primitive;
                });
                return primitives;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates = false;
                var procedureCallString = this.getString(); ///
                context.trace("Validating the '".concat(procedureCallString, "' procedure call..."));
                var name = this.getName(), procedure = context.findProcedureByName(name);
                if (procedure !== null) {
                    var procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        validates = true;
                    } else {
                        context.trace("The '".concat(procedureCallString, "' procedure is not boolean."));
                    }
                } else {
                    context.trace("The '".concat(procedureCallString, "' procedure is not present."));
                }
                if (validates) {
                    context.debug("...validated the '".concat(procedureCallString, "' procedure call."));
                }
                return validates;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(context) {
                return _async_to_generator(function() {
                    var unifiesIndependently, procedureCallString, name, primitives, terms, procedure, term, boolean, primitiveValue, exception, message;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unifiesIndependently = false;
                                procedureCallString = this.getString(); ///
                                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                                name = this.getName(), primitives = this.findPrimitives(context), terms = termsFromPrimitives(primitives), procedure = context.findProcedureByName(name);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    procedure.call(terms, context)
                                ];
                            case 2:
                                term = _state.sent(), boolean = term.isBoolean();
                                if (!boolean) {
                                    context.info("The '".concat(procedureCallString, "' procedure call did not return a boolean."));
                                } else {
                                    primitiveValue = term.getPrimitiveValue();
                                    if (primitiveValue) {
                                        unifiesIndependently = true;
                                    }
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                exception = _state.sent();
                                message = exception.getMessage();
                                context.info(message);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                if (unifiesIndependently) {
                                    context.debug("...unified the '".concat(procedureCallString, "' procedure call independently."));
                                }
                                return [
                                    2,
                                    unifiesIndependently
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var parametersJSON = (0, _json.parametersToParametersJSON)(this.parameters), procedureReference = (0, _json.procedureReferenceToProcedureReferenceJSON)(this.procedureReference), parameters = parametersJSON, json = {
                    procedureReference: procedureReference,
                    parameters: parameters
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var node = null, parameters = (0, _json.parametersFromJSON)(json, context), procedureReference = (0, _json.procedureReferenceFromJSON)(json, context), string = stringFromProcedureReferenceAndParameters(procedureReference, parameters), procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgdGVybXNGcm9tUHJpbWl0aXZlcyB9ID0gdGVybXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFByaW1pdGl2ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBwcmltaXRpdmVzID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBwYXJhbWV0ZXIuZmluZFByaW1pdGl2ZShzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmltaXRpdmVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIGlmIChwcm9jZWR1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUJvb2xlYW4gPSBwcm9jZWR1cmUuaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVCb29sZWFuKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBwcmltaXRpdmVzID0gdGhpcy5maW5kUHJpbWl0aXZlcyhjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcyksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRlcm0gPSBhd2FpdCBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuXG4gICAgICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTih0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJmaW5kUHJpbWl0aXZlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlcyIsIm1hcCIsInBhcmFtZXRlciIsInByaW1pdGl2ZSIsImZpbmRQcmltaXRpdmUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5hbWUiLCJnZXROYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybXMiLCJ0ZXJtIiwiYm9vbGVhbiIsInByaW1pdGl2ZVZhbHVlIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImNhbGwiLCJpbmZvIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJnZXRNZXNzYWdlIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwic3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7OEJBUndCOzJCQUNPO3dCQUVSO29CQUNnSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkksSUFBTSxBQUFFQSxzQkFBd0JDLDJCQUFjLENBQXRDRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLGtDQUFDOzthQUFNQyxjQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQjtnQ0FEdkNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0Msa0JBQWtCLEdBQUdBOzs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7WUFDaEM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVAs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