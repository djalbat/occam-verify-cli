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
var HeaderNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(HeaderNode, NonTerminalNode);
    function HeaderNode() {
        _class_call_check(this, HeaderNode);
        return _call_super(this, HeaderNode, arguments);
    }
    _create_class(HeaderNode, [
        {
            key: "getParenthesisedLabelsNode",
            value: function getParenthesisedLabelsNode() {
                var ruleName = _ruleNames.PARENTHESISED_LABELS_RULE_NAME, parenthesisedLabelsNode = this.getNodeByRuleName(ruleName);
                return parenthesisedLabelsNode;
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
            key: "getSignatureNode",
            value: function getSignatureNode() {
                var ruleName = _ruleNames.SIGNATURE_RULE_NAME, signatureNode = this.getNodeByRuleName(ruleName);
                return signatureNode;
            }
        },
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return HeaderNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQge1NJR05BVFVSRV9SVUxFX05BTUUsIFBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FLCBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU0lHTkFUVVJFX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgbGV0IGxhYmVsTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSgpO1xuXG4gICAgaWYgKHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlICE9PSBudWxsKSB7XG4gICAgICBsYWJlbE5vZGVzID0gcGFyZW50aGVzaXNlZExhYmVsc05vZGUuZ2V0TGFiZWxOb2RlcygpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlKCkge1xuICAgIGxldCBsYWJlbE5vZGUgPSBbXTtcblxuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbE5vZGUoKTtcblxuICAgIGlmIChwYXJlbnRoZXNpc2VkTGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgICBsYWJlbE5vZGUgPSBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlLmdldExhYmVsTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyTm9kZSIsImdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwicnVsZU5hbWUiLCJQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUiLCJwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSIsIlBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FIiwiZ2V0U2lnbmF0dXJlTm9kZSIsIlNJR05BVFVSRV9SVUxFX05BTUUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJwYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO3lCQUVzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUNBQThCLEVBQ3pDQywwQkFBMEIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRXZELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssd0NBQTZCLEVBQ3hDSCwwQkFBMEIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRXZELE9BQU9FO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sV0FBV08sOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDTCxpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYSxFQUFFO2dCQUVuQixJQUFNUiwwQkFBMEIsSUFBSSxDQUFDSCwwQkFBMEI7Z0JBRS9ELElBQUlHLDRCQUE0QixNQUFNO29CQUNwQ1EsYUFBYVIsd0JBQXdCTyxhQUFhO2dCQUNwRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFlBQVksRUFBRTtnQkFFbEIsSUFBTUMseUJBQXlCLElBQUksQ0FBQ1QseUJBQXlCO2dCQUU3RCxJQUFJUywyQkFBMkIsTUFBTTtvQkFDbkNELFlBQVlDLHVCQUF1QkYsWUFBWTtnQkFDakQ7Z0JBRUEsT0FBT0M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRWYsUUFBUSxFQUFFZ0IsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0wsMENBQTBDLENBQUNDLE9BQU9mLFVBQVVnQixZQUFZQyxTQUFTQztZQUFhOzs7V0E5Q3hNcEI7RUFBbUJxQixvQkFBZSJ9