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
var _occamlanguages = require("occam-languages");
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
            key: "getProofNode",
            value: function getProofNode() {
                var ruleBodyNode = this.getRuleBodyNode(), proofNode = ruleBodyNode.getProofNode();
                return proofNode;
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgUlVMRV9CT0RZX1JVTEVfTkFNRSwgUlVMRV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBydWxlQm9keU5vZGUgPSB0aGlzLmdldFJ1bGVCb2R5Tm9kZSgpLFxuICAgICAgICAgIHByb29mTm9kZSA9IHJ1bGVCb2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVIZWFkZXJOb2RlID0gdGhpcy5nZXRSdWxlSGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBydWxlSGVhZGVyTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlcygpIHtcbiAgICBjb25zdCBydWxlQm9keU5vZGUgPSB0aGlzLmdldFJ1bGVCb2R5Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHJ1bGVCb2R5Tm9kZS5nZXRQcmVtaXNlTm9kZXMoKTtcblxuICAgIHJldHVybiBwcmVtaXNlTm9kZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlQm9keU5vZGUgPSB0aGlzLmdldFJ1bGVCb2R5Tm9kZSgpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gcnVsZUJvZHlOb2RlLmdldENvbmNsdXNpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBnZXRSdWxlQm9keU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSVUxFX0JPRFlfUlVMRV9OQU1FLFxuICAgICAgICAgIHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVCb2R5Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVIZWFkZXJOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUlVMRV9IRUFERVJfUlVMRV9OQU1FLFxuICAgICAgICAgIHJ1bGVIZWFkZXJOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZUhlYWRlck5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJ1bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTm9kZSIsImdldFByb29mTm9kZSIsInJ1bGVCb2R5Tm9kZSIsImdldFJ1bGVCb2R5Tm9kZSIsInByb29mTm9kZSIsImdldExhYmVsTm9kZXMiLCJydWxlSGVhZGVyTm9kZSIsImdldFJ1bGVIZWFkZXJOb2RlIiwibGFiZWxOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsInByZW1pc2VOb2RlcyIsImdldENvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJydWxlTmFtZSIsIlJVTEVfQk9EWV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsIlJVTEVfSEVBREVSX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OEJBSlc7eUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLFlBQVlGLGFBQWFELFlBQVk7Z0JBRTNDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxhQUFhRixlQUFlRCxhQUFhO2dCQUUvQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DTyxlQUFlUixhQUFhTyxlQUFlO2dCQUVqRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DUyxpQkFBaUJWLGFBQWFTLGlCQUFpQjtnQkFFckQsT0FBT0M7WUFDVDs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxXQUFXQyw4QkFBbUIsRUFDOUJaLGVBQWUsSUFBSSxDQUFDYSxpQkFBaUIsQ0FBQ0Y7Z0JBRTVDLE9BQU9YO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU0sV0FBV0csZ0NBQXFCLEVBQ2hDVixpQkFBaUIsSUFBSSxDQUFDUyxpQkFBaUIsQ0FBQ0Y7Z0JBRTlDLE9BQU9QO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLCtCQUFlLENBQUNKLDBDQUEwQyxDQTNDN0lqQixVQTJDd0phLFVBQVVLLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDcE1wQjtFQUFpQnFCLCtCQUFlIn0=