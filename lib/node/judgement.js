"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JudgementNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
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
var JudgementNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(JudgementNode, NonTerminalNode);
    function JudgementNode() {
        _class_call_check(this, JudgementNode);
        return _call_super(this, JudgementNode, arguments);
    }
    _create_class(JudgementNode, [
        {
            key: "isSingular",
            value: function isSingular() {
                var frameNode = this.getFrameNode(), singular = frameNode.isSingular();
                return singular;
            }
        },
        {
            key: "getFrameNode",
            value: function getFrameNode() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, frameNode = this.getNodeByRuleName(ruleName);
                return frameNode;
            }
        },
        {
            key: "getAssumptionNode",
            value: function getAssumptionNode() {
                var ruleName = _ruleNames.ASSUMPTION_RULE_NAME, assumptionNodes = this.getNodeByRuleName(ruleName);
                return assumptionNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(JudgementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return JudgementNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IEZSQU1FX1JVTEVfTkFNRSwgQVNTVU1QVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQVNTVU1QVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVzID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShKdWRnZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJKdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsImZyYW1lTm9kZSIsImdldEZyYW1lTm9kZSIsInNpbmd1bGFyIiwicnVsZU5hbWUiLCJGUkFNRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiQVNTVU1QVElPTl9SVUxFX05BTUUiLCJhc3N1bXB0aW9uTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NFQUpPO3lCQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLFdBQVdGLFVBQVVELFVBQVU7Z0JBRXJDLE9BQU9HO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBV0MsMEJBQWUsRUFDMUJKLFlBQVksSUFBSSxDQUFDSyxpQkFBaUIsQ0FBQ0Y7Z0JBRXpDLE9BQU9IO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsV0FBV0ksK0JBQW9CLEVBQy9CQyxrQkFBa0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0Y7Z0JBRS9DLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDTixRQUFRLEVBQUVPLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQXRCN0lYLGVBc0I2SkssVUFBVU8sWUFBWUMsU0FBU0M7WUFBYTs7O1dBdEJ6TWQ7RUFBc0JlLHdCQUFlIn0=