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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQge1BBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSwgU0lHTkFUVVJFX1JVTEVfTkFNRX0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUsXG4gICAgICAgICAgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTSUdOQVRVUkVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBsZXQgbGFiZWxOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyTm9kZSIsImdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwicnVsZU5hbWUiLCJQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUiLCJwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U2lnbmF0dXJlTm9kZSIsIlNJR05BVFVSRV9SVUxFX05BTUUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsImxhYmVsTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQUEsQUFBTUEsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5Q0FBOEIsRUFDekNDLDBCQUEwQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhLEVBQUU7Z0JBRW5CLElBQU1OLDBCQUEwQixJQUFJLENBQUNILDBCQUEwQjtnQkFFL0QsSUFBSUcsNEJBQTRCLE1BQU07b0JBQ3BDTSxhQUFhTix3QkFBd0JLLGFBQWE7Z0JBQ3BEO2dCQUVBLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVWLFFBQVEsRUFBRVcsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0wsMENBQTBDLENBQUNDLE9BQU9WLFVBQVVXLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNCeE1mO0VBQW1CZ0Isb0JBQWUifQ==