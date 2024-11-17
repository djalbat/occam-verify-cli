"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return VariablePartialContext;
    },
    variableNodeFromVariableString: function() {
        return variableNodeFromVariableString;
    }
});
var _partial = /*#__PURE__*/ _interop_require_wildcard(require("../../context/partial"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var bnf = "\n\n        _ ::= variable... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var VariablePartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(VariablePartialContext, PartialContext);
    function VariablePartialContext() {
        _class_call_check(this, VariablePartialContext);
        return _call_super(this, VariablePartialContext, arguments);
    }
    _create_class(VariablePartialContext, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var variableNode = this.node; ///
                return variableNode;
            }
        },
        {
            key: "getVariableTokens",
            value: function getVariableTokens() {
                var variableTokens = this.tokens; ///
                return variableTokens;
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable, context) {
                var string = variable.getString(), variablePartialContext = _partial.default.fromString(VariablePartialContext, string, context);
                return variablePartialContext;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                return _partial.default.fromString(VariablePartialContext, string, context);
            }
        }
    ]);
    return VariablePartialContext;
}(_partial.default);
_define_property(VariablePartialContext, "rule", rule);
function variableNodeFromVariableString(variableString, context) {
    var string = variableString, variablePartialContext = VariablePartialContext.fromString(string, context), variableNode = variablePartialContext.getVariableNode();
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsXCI7XG5cbmltcG9ydCB7IHJ1bGVGcm9tQk5GIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICAgICAgXyA6Oj0gdmFyaWFibGUuLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIHJ1bGUgPSBydWxlRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZVBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZVRva2VucygpIHtcbiAgICBjb25zdCB2YXJpYWJsZVRva2VucyA9IHRoaXMudG9rZW5zOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVQYXJ0aWFsQ29udGV4dCA9IFBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmcoVmFyaWFibGVQYXJ0aWFsQ29udGV4dCwgc3RyaW5nLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZVBhcnRpYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nKFZhcmlhYmxlUGFydGlhbENvbnRleHQsIHN0cmluZywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZVBhcnRpYWxDb250ZXh0ID0gVmFyaWFibGVQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlUGFydGlhbENvbnRleHQuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZVBhcnRpYWxDb250ZXh0IiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwiYm5mIiwicnVsZSIsInJ1bGVGcm9tQk5GIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibm9kZSIsImdldFZhcmlhYmxlVG9rZW5zIiwidmFyaWFibGVUb2tlbnMiLCJ0b2tlbnMiLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZSIsImNvbnRleHQiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFhcUJBOztJQXlCTEMsOEJBQThCO2VBQTlCQTs7OytEQXBDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0IsSUFBTUMsTUFBTyxtRUFLUEMsT0FBT0MsSUFBQUEsb0JBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1GLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRXZDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFQyxPQUFPO2dCQUNuQyxJQUFNQyxTQUFTRixTQUFTRyxTQUFTLElBQzNCQyx5QkFBeUJDLGdCQUFjLENBQUNDLFVBQVUsQ0FqQnZDbEIsd0JBaUJnRWMsUUFBUUQ7Z0JBRXpGLE9BQU9HO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXSixNQUFNLEVBQUVELE9BQU87Z0JBQUksT0FBT0ksZ0JBQWMsQ0FBQ0MsVUFBVSxDQXRCbERsQix3QkFzQjJFYyxRQUFRRDtZQUFVOzs7V0F0QjdGYjtFQUErQmlCLGdCQUFjO0FBYWhFLGlCQWJtQmpCLHdCQWFaRyxRQUFPQTtBQVlULFNBQVNGLCtCQUErQmtCLGNBQWMsRUFBRU4sT0FBTztJQUNwRSxJQUFNQyxTQUFTSyxnQkFDVEgseUJBQXlCaEIsdUJBQXVCa0IsVUFBVSxDQUFDSixRQUFRRCxVQUNuRVAsZUFBZVUsdUJBQXVCWCxlQUFlO0lBRTNELE9BQU9DO0FBQ1QifQ==