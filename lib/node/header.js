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
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return HeaderNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7U0lHTkFUVVJFX1JVTEVfTkFNRSwgUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUsIFBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUsXG4gICAgICAgICAgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTSUdOQVRVUkVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBsZXQgbGFiZWxOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgbGV0IGxhYmVsTm9kZSA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpO1xuXG4gICAgaWYgKHBhcmVudGhlc2lzZWRMYWJlbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZSA9IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUuZ2V0TGFiZWxOb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXJOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJydWxlTmFtZSIsIlBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSIsInBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUiLCJnZXRTaWduYXR1cmVOb2RlIiwiU0lHTkFUVVJFX1JVTEVfTkFNRSIsInNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZSIsImxhYmVsTm9kZSIsInBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSk87eUJBRXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5Q0FBOEIsRUFDekNDLDBCQUEwQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyx3Q0FBNkIsRUFDeENILDBCQUEwQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT0U7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixXQUFXTyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNMLGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhLEVBQUU7Z0JBRW5CLElBQU1SLDBCQUEwQixJQUFJLENBQUNILDBCQUEwQjtnQkFFL0QsSUFBSUcsNEJBQTRCLE1BQU07b0JBQ3BDUSxhQUFhUix3QkFBd0JPLGFBQWE7Z0JBQ3BEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsWUFBWSxFQUFFO2dCQUVsQixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDVCx5QkFBeUI7Z0JBRTdELElBQUlTLDJCQUEyQixNQUFNO29CQUNuQ0QsWUFBWUMsdUJBQXVCRixZQUFZO2dCQUNqRDtnQkFFQSxPQUFPQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFZixRQUFRLEVBQUVnQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2YsVUFBVWdCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTlDeE1wQjtFQUFtQnFCLHdCQUFlIn0=