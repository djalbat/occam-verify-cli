"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetavariableNodeAndTokens;
    }
});
var _nodeAndTokens = /*#__PURE__*/ _interop_require_wildcard(require("../nodeAndTokens"));
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
var bnf = "\n\n        _ ::= metavariable... <END_OF_LINE> ;\n        \n      ", rule = (0, _nodeAndTokens.ruleFromBNF)(bnf);
var MetavariableNodeAndTokens = /*#__PURE__*/ function(NodeAndTokens) {
    _inherits(MetavariableNodeAndTokens, NodeAndTokens);
    function MetavariableNodeAndTokens() {
        _class_call_check(this, MetavariableNodeAndTokens);
        return _call_super(this, MetavariableNodeAndTokens, arguments);
    }
    _create_class(MetavariableNodeAndTokens, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.node; ///
                return metavariableNode;
            }
        },
        {
            key: "getMetavariableTokens",
            value: function getMetavariableTokens() {
                var metavariableTokens = this.tokens; ///
                return metavariableTokens;
            }
        }
    ], [
        {
            key: "fromMetavariable",
            value: function fromMetavariable(metavariable, context) {
                var string = metavariable.getString(), metavariableNodeAndTokens = _nodeAndTokens.default.fromString(MetavariableNodeAndTokens, string, context);
                return metavariableNodeAndTokens;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                return _nodeAndTokens.default.fromString(MetavariableNodeAndTokens, string, context);
            }
        }
    ]);
    return MetavariableNodeAndTokens;
}(_nodeAndTokens.default);
_define_property(MetavariableNodeAndTokens, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uL25vZGVBbmRUb2tlbnNcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21CTkYgfSBmcm9tIFwiLi4vbm9kZUFuZFRva2Vuc1wiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICAgICAgXyA6Oj0gbWV0YXZhcmlhYmxlLi4uIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBleHRlbmRzIE5vZGVBbmRUb2tlbnMge1xuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVUb2tlbnMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhNZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLCBzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHsgcmV0dXJuIE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhNZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLCBzdHJpbmcsIGNvbnRleHQpOyB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibm9kZSIsImdldE1ldGF2YXJpYWJsZVRva2VucyIsIm1ldGF2YXJpYWJsZVRva2VucyIsInRva2VucyIsImZyb21NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsIk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OztxRUFYSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsSUFBTUMsTUFBTyx1RUFLUEMsT0FBT0MsSUFBQUEsMEJBQVcsRUFBQ0Y7QUFFVixJQUFBLEFBQU1ELDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxJQUFJLEVBQUUsR0FBRztnQkFFdkMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRztnQkFFM0MsT0FBT0Q7WUFDVDs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUMsT0FBTztnQkFDM0MsSUFBTUMsU0FBU0YsYUFBYUcsU0FBUyxJQUMvQkMsNEJBQTRCQyxzQkFBYSxDQUFDQyxVQUFVLENBakJ6Q2pCLDJCQWlCcUVhLFFBQVFEO2dCQUU5RixPQUFPRztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0osTUFBTSxFQUFFRCxPQUFPO2dCQUFJLE9BQU9JLHNCQUFhLENBQUNDLFVBQVUsQ0F0QmpEakIsMkJBc0I2RWEsUUFBUUQ7WUFBVTs7O1dBdEIvRlo7RUFBa0NnQixzQkFBYTtBQWFsRSxpQkFibUJoQiwyQkFhWkUsUUFBT0EifQ==