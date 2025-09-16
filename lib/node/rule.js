"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
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
var RuleNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleNode, NonTerminalNode);
    function RuleNode() {
        _class_call_check(this, RuleNode);
        return _call_super(this, RuleNode, arguments);
    }
    _create_class(RuleNode, [
        {
            key: "getRuleBodyNode",
            value: function getRuleBodyNode() {
                var ruleName = _ruleNames.RULE_BODY_RULE_NAME, ruleBodyNode = this.getNodeByRuleName(ruleName);
                return ruleBodyNode;
            }
        },
        {
            key: "getRuleHeaderNode",
            value: function getRuleHeaderNode() {
                var ruleName = _ruleNames.RULE_HEADER_RULE_NAME, ruleHeaderNode = this.getNodeByRuleName(ruleName);
                return ruleHeaderNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var ruleHeaderNode = this.getRuleHeaderNode(), labelNodes = ruleHeaderNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getPremiseNodes",
            value: function getPremiseNodes() {
                var ruleBodyNode = this.getRuleBodyNode(), premiseNodes = ruleBodyNode.getPremiseNodes();
                return premiseNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var ruleBodyNode = this.getRuleBodyNode(), conclusionNode = ruleBodyNode.getConclusionNode();
                return conclusionNode;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var ruleBodyNode = this.getRuleBodyNode(), proofNode = ruleBodyNode.getProofNode();
                return proofNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHtSVUxFX0JPRFlfUlVMRV9OQU1FLCBSVUxFX0hFQURFUl9SVUxFX05BTUV9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRSdWxlQm9keU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSVUxFX0JPRFlfUlVMRV9OQU1FLFxuICAgICAgICAgIHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVCb2R5Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVIZWFkZXJOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUlVMRV9IRUFERVJfUlVMRV9OQU1FLFxuICAgICAgICAgIHJ1bGVIZWFkZXJOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZUhlYWRlck5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVIZWFkZXJOb2RlID0gdGhpcy5nZXRSdWxlSGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBydWxlSGVhZGVyTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlcygpIHtcbiAgICBjb25zdCBydWxlQm9keU5vZGUgPSB0aGlzLmdldFJ1bGVCb2R5Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHJ1bGVCb2R5Tm9kZS5nZXRQcmVtaXNlTm9kZXMoKTtcblxuICAgIHJldHVybiBwcmVtaXNlTm9kZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlQm9keU5vZGUgPSB0aGlzLmdldFJ1bGVCb2R5Tm9kZSgpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gcnVsZUJvZHlOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZUJvZHlOb2RlID0gdGhpcy5nZXRSdWxlQm9keU5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBydWxlQm9keU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5vZGUiLCJnZXRSdWxlQm9keU5vZGUiLCJydWxlTmFtZSIsIlJVTEVfQk9EWV9SVUxFX05BTUUiLCJydWxlQm9keU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFJ1bGVIZWFkZXJOb2RlIiwiUlVMRV9IRUFERVJfUlVMRV9OQU1FIiwicnVsZUhlYWRlck5vZGUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldENvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO3lCQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsOEJBQW1CLEVBQzlCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU1QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGdDQUFxQixFQUNoQ0MsaUJBQWlCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUU5QyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGlCQUFpQixJQUFJLENBQUNGLGlCQUFpQixJQUN2Q0ksYUFBYUYsZUFBZUMsYUFBYTtnQkFFL0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxlQUFlLElBQUksQ0FBQ0gsZUFBZSxJQUNuQ1csZUFBZVIsYUFBYU8sZUFBZTtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxlQUFlLElBQUksQ0FBQ0gsZUFBZSxJQUNuQ2EsaUJBQWlCVixhQUFhUyxpQkFBaUI7Z0JBRXJELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsZUFBZSxJQUFJLENBQUNILGVBQWUsSUFDbkNlLFlBQVlaLGFBQWFXLFlBQVk7Z0JBRTNDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDZixRQUFRLEVBQUVnQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0EzQzdJakIsVUEyQ3dKRSxVQUFVZ0IsWUFBWUMsU0FBU0M7WUFBYTs7O1dBM0NwTXBCO0VBQWlCcUIsb0JBQWUifQ==