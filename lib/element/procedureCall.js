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
            key: "getProcedureCallNode",
            value: function getProcedureCallNode() {
                var node = this.getNode(), procedureCallNode = node;
                return procedureCallNode;
            }
        },
        {
            key: "getProcedureName",
            value: function getProcedureName() {
                return this.procedureReference.getProcedureName();
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
                var procedureName = this.getProcedureName(), procedure = context.findProcedureByProcedureName(procedureName);
                if (procedure !== null) {
                    var procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        validates = true;
                    } else {
                        context.debug("The '".concat(procedureCallString, "' procedure is not boolean."));
                    }
                } else {
                    context.debug("The '".concat(procedureCallString, "' procedure is not present."));
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
                    var unifiesIndependently, procedureCallString, procedureName, procedure, primitives, terms, term, boolean, primitiveValue;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unifiesIndependently = false;
                                procedureCallString = this.getString(); ///
                                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                                procedureName = this.getProcedureName(), procedure = context.findProcedureByProcedureName(procedureName);
                                primitives = this.findPrimitives(context), terms = termsFromPrimitives(primitives);
                                return [
                                    4,
                                    procedure.call(terms, context)
                                ];
                            case 1:
                                term = _state.sent(), boolean = term.isBoolean();
                                if (!boolean) {
                                    context.info("The '".concat(procedureCallString, "' procedure call did not return a boolean."));
                                } else {
                                    primitiveValue = term.getPrimitiveValue();
                                    if (primitiveValue) {
                                        unifiesIndependently = true;
                                    }
                                }
                                // } catch (exception) {
                                //   const message = exception.getMessage();
                                //
                                //   context.info(message);
                                // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyB0ZXJtc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbUpTT04sIHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OLCBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgdGVybXNGcm9tUHJpbWl0aXZlcyB9ID0gdGVybXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gbm9kZTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBmaW5kUHJpbWl0aXZlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHByaW1pdGl2ZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHBhcmFtZXRlci5maW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5nZXRQcm9jZWR1cmVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgaWYgKHByb2NlZHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQm9vbGVhbiA9IHByb2NlZHVyZS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKHByb2NlZHVyZUJvb2xlYW4pIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBib29sZWFuLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCBwcmltaXRpdmVzID0gdGhpcy5maW5kUHJpbWl0aXZlcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSxcbiAgICAgICAgICAgIHRlcm0gPSBhd2FpdCBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdGVybS5pc0Jvb2xlYW4oKTtcblxuICAgICAgaWYgKCFib29sZWFuKSB7XG4gICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBkaWQgbm90IHJldHVybiBhIGJvb2xlYW4uYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgICAgICBpZiAocHJpbWl0aXZlVmFsdWUpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAvLyB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAvLyAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlcHRpb24uZ2V0TWVzc2FnZSgpO1xuICAgIC8vXG4gICAgLy8gICBjb250ZXh0LmluZm8obWVzc2FnZSk7XG4gICAgLy8gfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyc0pTT04gPSBwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTih0aGlzLnBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTih0aGlzLnByb2NlZHVyZVJlZmVyZW5jZSksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2VGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyhwcm9jZWR1cmVSZWZlcmVuY2UsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybXNGcm9tUHJpbWl0aXZlcyIsInRlcm1zVXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicGFyYW1ldGVycyIsInByb2NlZHVyZVJlZmVyZW5jZSIsImdldFBhcmFtZXRlcnMiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZU5hbWUiLCJmaW5kUHJpbWl0aXZlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlcyIsIm1hcCIsInBhcmFtZXRlciIsInByaW1pdGl2ZSIsImZpbmRQcmltaXRpdmUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtcyIsInRlcm0iLCJib29sZWFuIiwicHJpbWl0aXZlVmFsdWUiLCJjYWxsIiwiaW5mbyIsImdldFByaW1pdGl2ZVZhbHVlIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwic3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzhCQVJ3QjsyQkFDTzt3QkFFUjtvQkFDZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZJLElBQU0sQUFB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