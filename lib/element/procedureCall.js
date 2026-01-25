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
var define = _occamfurtle.elements.define;
var _default = define((_ProcedureCall = /*#__PURE__*/ function(Element) {
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
            value: function findNodes(context) {
                var substitutions = context.getSubstitutions(), nodes = this.parameters.map(function(parameter) {
                    var replacementNode = parameter.findReplacementNode(substitutions), node = replacementNode; ///
                    return node;
                });
                return nodes;
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
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently = false;
                var procedureCallString = this.getString(); ///
                context.trace("Unifying the '".concat(procedureCallString, "' procedure call independently..."));
                var name = this.getName(), nodes = this.findNodes(context), procedure = context.findProcedureByName(name), expressions = _occamfurtle.Expressions.fromNodes(nodes, context);
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25zIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IHBhcmFtZXRlcnNGcm9tSlNPTiwgcHJvY2VkdXJlUmVmZXJlbmNlRnJvbUpTT04sIHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OLCBwcm9jZWR1cmVSZWZlcmVuY2VUb1Byb2NlZHVyZVJlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlQ2FsbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHBhcmFtZXRlcnMsIHByb2NlZHVyZVJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLnByb2NlZHVyZVJlZmVyZW5jZS5nZXROYW1lKCk7IH1cblxuICBmaW5kTm9kZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBub2RlcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gcGFyYW1ldGVyLmZpbmRSZXBsYWNlbWVudE5vZGUoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIGlmIChwcm9jZWR1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUJvb2xlYW4gPSBwcm9jZWR1cmUuaXNCb29sZWFuKCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVCb29sZWFuKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBpcyBub3QgYm9vbGVhbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBub2RlcyA9IHRoaXMuZmluZE5vZGVzKGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGJvb2xlYW47IC8vL1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5nZXRNZXNzYWdlKCk7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzSlNPTiA9IHBhcmFtZXRlcnNUb1BhcmFtZXRlcnNKU09OKHRoaXMucGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlID0gcHJvY2VkdXJlUmVmZXJlbmNlVG9Qcm9jZWR1cmVSZWZlcmVuY2VKU09OKHRoaXMucHJvY2VkdXJlUmVmZXJlbmNlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlLFxuICAgICAgICAgICAgcGFyYW1ldGVyc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IHByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmVSZWZlcmVuY2VBbmRQYXJhbWV0ZXJzKHByb2NlZHVyZVJlZmVyZW5jZSwgcGFyYW1ldGVycyksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcGFyYW1ldGVycywgcHJvY2VkdXJlUmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlByb2NlZHVyZUNhbGwiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInBhcmFtZXRlcnMiLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlIiwiZ2V0TmFtZSIsImZpbmROb2RlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwibm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXIiLCJyZXBsYWNlbWVudE5vZGUiLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsInByb2NlZHVyZUJvb2xlYW4iLCJpc0Jvb2xlYW4iLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9ucyIsImZyb21Ob2RlcyIsInZhbHVlIiwiY2FsbCIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZXhjZXB0aW9uIiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJpbmZvIiwidG9KU09OIiwicGFyYW1ldGVyc0pTT04iLCJwYXJhbWV0ZXJzVG9QYXJhbWV0ZXJzSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZVRvUHJvY2VkdXJlUmVmZXJlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInBhcmFtZXRlcnNGcm9tSlNPTiIsInByb2NlZHVyZVJlZmVyZW5jZUZyb21KU09OIiwic3RyaW5nRnJvbVByb2NlZHVyZVJlZmVyZW5jZUFuZFBhcmFtZXRlcnMiLCJwcm9jZWR1cmVDYWxsIiwiRWxlbWVu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