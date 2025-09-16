"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBodyNode;
    }
});
var _body = /*#__PURE__*/ _interop_require_default(require("../../node/body"));
var _ruleNames = require("../../ruleNames");
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
var RuleBodyNode = /*#__PURE__*/ function(BodyNode) {
    _inherits(RuleBodyNode, BodyNode);
    function RuleBodyNode() {
        _class_call_check(this, RuleBodyNode);
        return _call_super(this, RuleBodyNode, arguments);
    }
    _create_class(RuleBodyNode, [
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _body.default.fromRuleNameChildNodesOpacityAndPrecedence(RuleBodyNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleBodyNode;
}(_body.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JvZHkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJvZHlOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JvZHlcIjtcblxuaW1wb3J0IHsgUFJPT0ZfUlVMRV9OQU1FLCBQUkVNSVNFX1JVTEVfTkFNRSwgQ09OQ0xVU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCb2R5Tm9kZSBleHRlbmRzIEJvZHlOb2RlIHtcbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPT0ZfUlVMRV9OQU1FLFxuICAgICAgICAgIHByb29mTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBSRU1JU0VfUlVMRV9OQU1FLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcmVtaXNlTm9kZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTkNMVVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBCb2R5Tm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUnVsZUJvZHlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlQm9keU5vZGUiLCJnZXRQcm9vZk5vZGUiLCJydWxlTmFtZSIsIlBST09GX1JVTEVfTkFNRSIsInByb29mTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0UHJlbWlzZU5vZGVzIiwiUFJFTUlTRV9SVUxFX05BTUUiLCJwcmVtaXNlTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRDb25jbHVzaW9uTm9kZSIsIkNPTkNMVVNJT05fUlVMRV9OQU1FIiwiY29uY2x1c2lvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJCb2R5Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7eUJBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw0QkFBaUIsRUFDNUJDLGVBQWUsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1A7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsV0FBV1MsK0JBQW9CLEVBQy9CQyxpQkFBaUIsSUFBSSxDQUFDUCxpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU9VO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDWCxRQUFRLEVBQUVZLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0osMENBQTBDLENBdEJ0SWIsY0FzQnFKRSxVQUFVWSxZQUFZQyxTQUFTQztZQUFhOzs7V0F0QmpNaEI7RUFBcUJpQixhQUFRIn0=