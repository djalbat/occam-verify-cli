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
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return HeaderNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBTSUdOQVRVUkVfUlVMRV9OQU1FLCBQQVJFTlRIRVNJU0VEX0xBQkVMX1JVTEVfTkFNRSwgUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBsZXQgbGFiZWxOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgbGV0IGxhYmVsTm9kZSA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpO1xuXG4gICAgaWYgKHBhcmVudGhlc2lzZWRMYWJlbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZSA9IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUuZ2V0TGFiZWxOb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTSUdOQVRVUkVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUkVOVEhFU0lTRURfTEFCRUxfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkhlYWRlck5vZGUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsInBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJwYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJydWxlTmFtZSIsIlNJR05BVFVSRV9SVUxFX05BTUUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJQQVJFTlRIRVNJU0VEX0xBQkVMX1JVTEVfTkFNRSIsIlBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs4QkFKVzt5QkFFbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQUEsQUFBTUEsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhLEVBQUU7Z0JBRW5CLElBQU1DLDBCQUEwQixJQUFJLENBQUNDLDBCQUEwQjtnQkFFL0QsSUFBSUQsNEJBQTRCLE1BQU07b0JBQ3BDRCxhQUFhQyx3QkFBd0JGLGFBQWE7Z0JBQ3BEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsWUFBWSxFQUFFO2dCQUVsQixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTdELElBQUlELDJCQUEyQixNQUFNO29CQUNuQ0QsWUFBWUMsdUJBQXVCRixZQUFZO2dCQUNqRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdJLHdDQUE2QixFQUN4Q1gsMEJBQTBCLElBQUksQ0FBQ1UsaUJBQWlCLENBQUNIO2dCQUV2RCxPQUFPUDtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1NLFdBQVdLLHlDQUE4QixFQUN6Q1osMEJBQTBCLElBQUksQ0FBQ1UsaUJBQWlCLENBQUNIO2dCQUV2RCxPQUFPUDtZQUNUOzs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLCtCQUFlLENBQUNMLDBDQUEwQyxDQUFDQyxPQUFPUCxVQUFVUSxZQUFZQyxTQUFTQztZQUFhOzs7V0E5Q3hNcEI7RUFBbUJxQiwrQkFBZSJ9