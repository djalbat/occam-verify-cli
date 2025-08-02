"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertionNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
var _constants = require("../constants");
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
var TopLevelAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelAssertionNode, NonTerminalNode);
    function TopLevelAssertionNode() {
        _class_call_check(this, TopLevelAssertionNode);
        return _call_super(this, TopLevelAssertionNode, arguments);
    }
    _create_class(TopLevelAssertionNode, [
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                var satisfiable = false;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, content = terminalNode.getContent(), contentSatisfiable = content === _constants.SATISFIABLE;
                    if (contentSatisfiable) {
                        satisfiable = true;
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return satisfiable;
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
            key: "getProofNode",
            value: function getProofNode() {
                var ruleName = _ruleNames.PROOF_RULE_NAME, proofNode = this.getNodeByRuleName(ruleName);
                return proofNode;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var ruleName = _ruleNames.DEDUCTION_RULE_NAME, deductionNode = this.getNodeByRuleName(ruleName);
                return deductionNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var ruleName = _ruleNames.SUPPOSITION_RULE_NAME, suppositionNodes = this.getNodesByRuleName(ruleName);
                return suppositionNodes;
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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelAssertionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFNBVElTRklBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUFJPT0ZfUlVMRV9OQU1FLFxuICAgICAgICAgREVEVUNUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNVUFBPU0lUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBsZXQgc2F0aXNmaWFibGUgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50U2F0aXNmaWFibGUgPSAoY29udGVudCA9PT0gU0FUSVNGSUFCTEUpO1xuXG4gICAgICBpZiAoY29udGVudFNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHNhdGlzZmlhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBsZXQgbGFiZWxOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9PRl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRFVDVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VQUE9TSVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNhdGlzZmlhYmxlIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U2F0aXNmaWFibGUiLCJTQVRJU0ZJQUJMRSIsImdldExhYmVsTm9kZXMiLCJsYWJlbE5vZGVzIiwicGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldFByb29mTm9kZSIsInJ1bGVOYW1lIiwiUFJPT0ZfUlVMRV9OQU1FIiwicHJvb2ZOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiREVEVUNUSU9OX1JVTEVfTkFNRSIsImRlZHVjdGlvbk5vZGUiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiU1VQUE9TSVRJT05fUlVMRV9OQU1FIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsIlBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztrRUFSTzt5QkFFQTt5QkFJbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFNQyxlQUFlRixXQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDQyxxQkFBc0JGLFlBQVlHLHNCQUFXO29CQUVuRCxJQUFJRCxvQkFBb0I7d0JBQ3RCUCxjQUFjO29CQUNoQjtvQkFFQSxJQUFJRyxVQUFVLEdBQUc7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGFBQWEsRUFBRTtnQkFFbkIsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUUvRCxJQUFJRCw0QkFBNEIsTUFBTTtvQkFDcENELGFBQWFDLHdCQUF3QkYsYUFBYTtnQkFDcEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSxnQ0FBcUIsRUFDaENDLG1CQUFtQixJQUFJLENBQUNDLGtCQUFrQixDQUFDVjtnQkFFakQsT0FBT1M7WUFDVDs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXVyx5Q0FBOEIsRUFDekNkLDBCQUEwQixJQUFJLENBQUNNLGlCQUFpQixDQUFDSDtnQkFFdkQsT0FBT0g7WUFDVDs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRWIsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2IsVUFBVWMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBN0R4TWhDO0VBQThCaUMsb0JBQWUifQ==