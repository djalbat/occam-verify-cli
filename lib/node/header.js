"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HeaderNode;
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
var HeaderNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(HeaderNode, NonTerminalNode);
    function HeaderNode() {
        _class_call_check(this, HeaderNode);
        return _call_super(this, HeaderNode, arguments);
    }
    _create_class(HeaderNode, [
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var labelNodes = [];
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode();
                if (parenthesisedLabelsNode !== null) {
                    labelNodes = parenthesisedLabelsNode.getLabelNodes();
                }
                return labelNodes;
            }
        },
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var labelNode = [];
                var parenthesisedLabelNode = this.getParenthesisedLabelNode();
                if (parenthesisedLabelNode !== null) {
                    labelNode = parenthesisedLabelNode.getLabelNode();
                }
                return labelNode;
            }
        },
        {
            key: "getSignatureNode",
            value: function getSignatureNode() {
                var ruleName = _ruleNames.SIGNATURE_RULE_NAME, signatureNode = this.getNodeByRuleName(ruleName);
                return signatureNode;
            }
        },
        {
            key: "getParenthesisedLabelNode",
            value: function getParenthesisedLabelNode() {
                var ruleName = _ruleNames.PARENTHESISED_LABEL_RULE_NAME, parenthesisedLabelsNode = this.getNodeByRuleName(ruleName);
                return parenthesisedLabelsNode;
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
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return HeaderNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFNJR05BVFVSRV9SVUxFX05BTUUsIFBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FLCBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGxldCBsYWJlbE5vZGVzID0gW107XG5cbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKTtcblxuICAgIGlmIChwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFiZWxOb2RlcyA9IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlLmdldExhYmVsTm9kZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBsZXQgbGFiZWxOb2RlID0gW107XG5cbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlID0gdGhpcy5nZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFiZWxOb2RlID0gcGFyZW50aGVzaXNlZExhYmVsTm9kZS5nZXRMYWJlbE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNJR05BVFVSRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUsXG4gICAgICAgICAgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZTtcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyTm9kZSIsImdldExhYmVsTm9kZXMiLCJsYWJlbE5vZGVzIiwicGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldExhYmVsTm9kZSIsImxhYmVsTm9kZSIsInBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsInJ1bGVOYW1lIiwiU0lHTkFUVVJFX1JVTEVfTkFNRSIsInNpZ25hdHVyZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsIlBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FIiwiUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NFQUpPO3lCQUV1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYSxFQUFFO2dCQUVuQixJQUFNQywwQkFBMEIsSUFBSSxDQUFDQywwQkFBMEI7Z0JBRS9ELElBQUlELDRCQUE0QixNQUFNO29CQUNwQ0QsYUFBYUMsd0JBQXdCRixhQUFhO2dCQUNwRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFlBQVksRUFBRTtnQkFFbEIsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU3RCxJQUFJRCwyQkFBMkIsTUFBTTtvQkFDbkNELFlBQVlDLHVCQUF1QkYsWUFBWTtnQkFDakQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXSSx3Q0FBNkIsRUFDeENYLDBCQUEwQixJQUFJLENBQUNVLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT1A7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSxXQUFXSyx5Q0FBOEIsRUFDekNaLDBCQUEwQixJQUFJLENBQUNVLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT1A7WUFDVDs7OztZQUVPYSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRVAsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT1AsVUFBVVEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBOUN4TXBCO0VBQW1CcUIsd0JBQWUifQ==