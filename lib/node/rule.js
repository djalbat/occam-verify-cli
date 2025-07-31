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
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode(), labelNodes = parenthesisedLabelsNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var ruleName = _ruleNames.PROOF_RULE_NAME, proofNode = this.getNodeByRuleName(ruleName);
                return proofNode;
            }
        },
        {
            key: "getPremiseNodes",
            value: function getPremiseNodes() {
                var ruleName = _ruleNames.PREMISE_RULE_NAME, premiseNodes = this.getNodesByRuleName(ruleName);
                return premiseNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var ruleName = _ruleNames.CONCLUSION_RULE_NAME, conclusionNode = this.getNodeByRuleName(ruleName);
                return conclusionNode;
            }
        },
        {
            key: "getParenthesisedLabelsNode",
            value: function getParenthesisedLabelsNode() {
                var ruleName = _ruleNames.PARENTHESISED_LABELS_RULE_NAME, parenthesisedLabelsNode = this.getNodeByRuleName(ruleName);
                return parenthesisedLabelsNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgIFBST09GX1JVTEVfTkFNRSwgUFJFTUlTRV9SVUxFX05BTUUsIENPTkNMVVNJT05fUlVMRV9OQU1FLCBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gcGFyZW50aGVzaXNlZExhYmVsc05vZGUuZ2V0TGFiZWxOb2RlcygpO1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9PRl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJFTUlTRV9SVUxFX05BTUUsXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OQ0xVU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJ1bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTm9kZSIsImdldExhYmVsTm9kZXMiLCJwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwibGFiZWxOb2RlcyIsImdldFByb29mTm9kZSIsInJ1bGVOYW1lIiwiUFJPT0ZfUlVMRV9OQU1FIiwicHJvb2ZOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRQcmVtaXNlTm9kZXMiLCJQUkVNSVNFX1JVTEVfTkFNRSIsInByZW1pc2VOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldENvbmNsdXNpb25Ob2RlIiwiQ09OQ0xVU0lPTl9SVUxFX05BTUUiLCJjb25jbHVzaW9uTm9kZSIsIlBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRThFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNGLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywwQkFBMEIsSUFBSSxDQUFDQywwQkFBMEIsSUFDekRDLGFBQWFGLHdCQUF3QkQsYUFBYTtnQkFFeEQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw0QkFBaUIsRUFDNUJDLGVBQWUsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1A7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsV0FBV1MsK0JBQW9CLEVBQy9CQyxpQkFBaUIsSUFBSSxDQUFDUCxpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU9VO1lBQ1Q7OztZQUVBYixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUcsV0FBV1cseUNBQThCLEVBQ3pDZiwwQkFBMEIsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQ0g7Z0JBRXZELE9BQU9KO1lBQ1Q7Ozs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1osUUFBUSxFQUFFYSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0FwQzdJbEIsVUFvQ3dKTSxVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0FwQ3BNckI7RUFBaUJzQixvQkFBZSJ9