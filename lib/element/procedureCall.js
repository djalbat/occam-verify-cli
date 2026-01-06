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
var _occamfurtle = require("occam-furtle");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _ProcedureCall;
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
            key: "findNodes",
            value: function findNodes(substitutions) {
                var nodes = this.parameters.map(function(parameter) {
                    var replacementNode = parameter.findReplacementNode(substitutions), node = replacementNode; ///
                    return node;
                });
                return nodes;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var procedureCallString = this.string; ///
                context.trace("Verifying the '".concat(procedureCallString, "' procedure call..."), this.node);
                var name = this.getName(), procedure = context.findProcedureByName(name);
                if (procedure !== null) {
                    var procedureBoolean = procedure.isBoolean();
                    if (procedureBoolean) {
                        verifies = true;
                    } else {
                        context.trace("The '".concat(procedureCallString, "' procedure is not boolean."), this.node);
                    }
                } else {
                    context.trace("The '".concat(procedureCallString, "' procedure is not present."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(procedureCallString, "' procedure call."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var procedureCallString = this.string; ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var name = this.getName(), nodes = this.findNodes(substitutions), procedure = context.findProcedureByName(name), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
                try {
                    var value = procedure.call(expressions, context), boolean = value.getBoolean();
                    unifiesIndependently = boolean; ///
                } catch (exception) {
                    var message = exception.getMessage();
                    context.info(message);
                }
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(procedureCallString, "' procedure call independently."));
                }
                return unifiesIndependently;
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
}(_wrap_native_super(_element.default)), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25zIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OLCBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwYXJhbWV0ZXJzLCBwcm9jZWR1cmVSZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5wcm9jZWR1cmVSZWZlcmVuY2UgPSBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlLmdldE5hbWUoKTsgfVxuXG4gIGZpbmROb2RlcyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHBhcmFtZXRlci5maW5kUmVwbGFjZW1lbnROb2RlKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIGlmIChwcm9jZWR1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUJvb2xlYW4gPSBwcm9jZWR1cmUuaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVCb29sZWFuKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBib29sZWFuLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBub2RlcyA9IHRoaXMuZmluZE5vZGVzKHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHRoaXMucGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0UGFyYW1ldGVycyIsImdldFByb2NlZHVyZVJlZmVyZW5jZSIsImdldE5hbWUiLCJmaW5kTm9kZXMiLCJzdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwicHJvY2VkdXJlQm9vbGVhbiIsImlzQm9vbGVhbiIsImRlYnVnIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb25zIiwiZnJvbU5vZGVzIiwidmFsdWUiLCJjYWxsIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJleGNlcHRpb24iLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsImluZm8iLCJ0b0pTT04iLCJwYXJhbWV0ZXJzSlNPTiIsInBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OIiwianNvbiIsImZyb21KU09OIiwicGFyYW1ldGVyc0Zyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04iLCJzdHJpbmdGcm9tUHJvY2VkdXJlUmVmZXJlbmNlQW5kUGFyYW1ldGVycyIsInByb2NlZHVyZUNhbGwiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyQkFQNEI7OERB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