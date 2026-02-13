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
            key: "getName",
            value: function getName() {
                return this.procedureReference.getName();
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
                                term = procedure.call(terms, context);
                                return [
                                    4,
                                    term.isBoolean()
                                ];
                            case 2:
                                boolean = _state.sent();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgdGVybXNGcm9tUHJpbWl0aXZlcyB9ID0gdGVybXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlLmdldE5hbWUoKTsgfVxuXG4gIGZpbmRQcmltaXRpdmVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gcGFyYW1ldGVyLmZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVCb29sZWFuID0gcHJvY2VkdXJlLmlzQm9vbGVhbigpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQm9vbGVhbikge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IGJvb2xlYW4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IHRoaXMuZmluZFByaW1pdGl2ZXMoY29udGV4dCksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21QcmltaXRpdmVzKHByaW1pdGl2ZXMpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0ZXJtID0gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgYm9vbGVhbiA9IGF3YWl0IHRlcm0uaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmICghYm9vbGVhbikge1xuICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgZGlkIG5vdCByZXR1cm4gYSBib29sZWFuLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHByaW1pdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXhjZXB0aW9uLmdldE1lc3NhZ2UoKTtcblxuICAgICAgY29udGV4dC5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNKU09OID0gcGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04odGhpcy5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04odGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMocHJvY2VkdXJlUmVmZXJlbmNlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInRlcm1zRnJvbVByaW1pdGl2ZXMiLCJ0ZXJtc1V0aWxpdGllcyIsImRlZmluZSIsIlByb2NlZHVyZUNhbGwiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0TmFtZSIsImZpbmRQcmltaXRpdmVzIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmVzIiwibWFwIiwicGFyYW1ldGVyIiwicHJpbWl0aXZlIiwiZmluZFByaW1pdGl2ZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFtZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJwcm9jZWR1cmVCb29sZWFuIiwiaXNCb29sZWFuIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1zIiwidGVybSIsImJvb2xlYW4iLCJwcmltaXRpdmVWYWx1ZSIsImV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJjYWxsIiwiaW5mbyIsImdldFByaW1pdGl2ZVZhbHVlIiwiZ2V0TWVzc2FnZSIsInRvSlNPTiIsInBhcmFtZXRlcnNKU09OIiwicGFyYW1ldGVyc1RvUGFyYW1ldGVyc0pTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJwYXJhbWV0ZXJzRnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTiIsInN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzIiwicHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzhCQVJ3QjsyQkFDTzt3QkFFUjtvQkFDZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZJLElBQU0sQUFBRUEsc0JBQXdCQywyQkFBYyxDQUF0Q0Q7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxrQ0FBQzs7YUFBTUMsY0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0I7Z0NBRHZDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLGtCQUFrQixHQUFHQTs7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO1lBQ2hDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0csT0FBTztZQUFJOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJQUFNUyxnQkFBZ0JULFFBQVFVLGdCQUFnQixJQUN4Q0MsYUFBYSxJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxZQUFZRCxVQUFVRSxhQUFhLENBQUNOO29CQUUxQyxPQUFPSztnQkFDVDtnQkFFTixPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNoQixPQUFPO2dCQUNkLElBQUlpQixZQUFZO2dCQUVoQixJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFakRuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsbUJBQXNDLE9BQXBCRixxQkFBb0I7Z0JBRXJELElBQU1HLE9BQU8sSUFBSSxDQUFDZCxPQUFPLElBQ25CZSxZQUFZdEIsUUFBUXVCLG1CQUFtQixDQUFDRjtnQkFFOUMsSUFBSUMsY0FBYyxNQUFNO29CQUN0QixJQUFNRSxtQkFBbUJGLFVBQVVHLFNBQVM7b0JBRTVDLElBQUlELGtCQUFrQjt3QkFDcEJQLFlBQVk7b0JBQ2QsT0FBTzt3QkFDTGpCLFFBQVFvQixLQUFLLENBQUMsQUFBQyxRQUEyQixPQUFwQkYscUJBQW9CO29CQUM1QztnQkFDRixPQUFPO29CQUNMbEIsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLFFBQTJCLE9BQXBCRixxQkFBb0I7Z0JBQzVDO2dCQUVBLElBQUlELFdBQVc7b0JBQ2JqQixRQUFRMEIsS0FBSyxDQUFDLEFBQUMscUJBQXdDLE9BQXBCUixxQkFBb0I7Z0JBQ3pEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVNVSxLQUFBQTttQkFBTixTQUFNQSxtQkFBbUIzQixPQUFPOzt3QkFDMUI0QixzQkFFRVYscUJBSUFHLE1BQ0FWLFlBQ0FrQixPQUNBUCxXQUdFUSxNQUNBQyxTQUtFQyxnQkFNREMsV0FDREM7Ozs7Z0NBekJKTix1QkFBdUI7Z0NBRXJCVixzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQ0FFakRuQixRQUFRb0IsS0FBSyxDQUFDLEFBQUMsaUJBQW9DLE9BQXBCRixxQkFBb0I7Z0NBRTdDRyxPQUFPLElBQUksQ0FBQ2QsT0FBTyxJQUNuQkksYUFBYSxJQUFJLENBQUNILGNBQWMsQ0FBQ1IsVUFDakM2QixRQUFRakMsb0JBQW9CZSxhQUM1QlcsWUFBWXRCLFFBQVF1QixtQkFBbUIsQ0FBQ0Y7Ozs7Ozs7OztnQ0FHdENTLE9BQU9SLFVBQVVhLElBQUksQ0FBQ04sT0FBTzdCO2dDQUNuQjs7b0NBQU04QixLQUFLTCxTQUFTOzs7Z0NBQTlCTSxVQUFVO2dDQUVoQixJQUFJLENBQUNBLFNBQVM7b0NBQ1ovQixRQUFRb0MsSUFBSSxDQUFDLEFBQUMsUUFBMkIsT0FBcEJsQixxQkFBb0I7Z0NBQzNDLE9BQU87b0NBQ0NjLGlCQUFpQkYsS0FBS08saUJBQWlCO29DQUU3QyxJQUFJTCxnQkFBZ0I7d0NBQ2xCSix1QkFBdUI7b0NBQ3pCO2dDQUNGOzs7Ozs7Z0NBQ09LO2dDQUNEQyxVQUFVRCxVQUFVSyxVQUFVO2dDQUVwQ3RDLFFBQVFvQyxJQUFJLENBQUNGOzs7Ozs7Z0NBR2YsSUFBSU4sc0JBQXNCO29DQUN4QjVCLFFBQVEwQixLQUFLLENBQUMsQUFBQyxtQkFBc0MsT0FBcEJSLHFCQUFvQjtnQ0FDdkQ7Z0NBRUE7O29DQUFPVTs7OztnQkFDVDs7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUN0QyxVQUFVLEdBQzNEQyxxQkFBcUJzQyxJQUFBQSxnREFBMEMsRUFBQyxJQUFJLENBQUN0QyxrQkFBa0IsR0FDdkZELGFBQWFxQyxnQkFDYkcsT0FBTztvQkFDTHZDLG9CQUFBQTtvQkFDQUQsWUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3dDO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFM0MsT0FBTztnQkFDM0IsSUFBTUUsT0FBTyxNQUNQQyxhQUFhMEMsSUFBQUEsd0JBQWtCLEVBQUNGLE1BQU0zQyxVQUN0Q0kscUJBQXFCMEMsSUFBQUEsZ0NBQTBCLEVBQUNILE1BQU0zQyxVQUN0REMsU0FBUzhDLDBDQUEwQzNDLG9CQUFvQkQsYUFDdkU2QyxnQkFBZ0IsSUFBSWpELGNBQWNDLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDO2dCQUUzRSxPQUFPNEM7WUFDVDs7OztxQkF0SGdEQyx1QkFBTyxJQTRHdkQsaUNBQU81QixRQUFPIn0=