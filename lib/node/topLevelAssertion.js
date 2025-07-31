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
                var ruleName = _ruleNames.PARENTHESISED_LABELS_RULE_NAME, parenthesisedLabelsNode = this.getNodesByRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFNBVElTRklBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUFJPT0ZfUlVMRV9OQU1FLFxuICAgICAgICAgREVEVUNUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNVUFBPU0lUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFBBUkVOVEhFU0lTRURfTEFCRUxTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBsZXQgc2F0aXNmaWFibGUgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50U2F0aXNmaWFibGUgPSAoY29udGVudCA9PT0gU0FUSVNGSUFCTEUpO1xuXG4gICAgICBpZiAoY29udGVudFNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHNhdGlzZmlhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBsZXQgbGFiZWxOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCk7XG5cbiAgICBpZiAocGFyZW50aGVzaXNlZExhYmVsc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9PRl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRFVDVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VQUE9TSVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSRU5USEVTSVNFRF9MQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImlzU2F0aXNmaWFibGUiLCJzYXRpc2ZpYWJsZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFNhdGlzZmlhYmxlIiwiU0FUSVNGSUFCTEUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsInBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQcm9vZk5vZGUiLCJydWxlTmFtZSIsIlBST09GX1JVTEVfTkFNRSIsInByb29mTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0RGVkdWN0aW9uTm9kZSIsIkRFRFVDVElPTl9SVUxFX05BTUUiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsIlNVUFBPU0lUSU9OX1JVTEVfTkFNRSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7a0VBUk87eUJBRUE7eUJBSW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsZUFBZUYsV0FDZkcsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVztvQkFFbkQsSUFBSUQsb0JBQW9CO3dCQUN0QlAsY0FBYztvQkFDaEI7b0JBRUEsSUFBSUcsVUFBVSxHQUFHO3dCQUNmLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhLEVBQUU7Z0JBRW5CLElBQU1DLDBCQUEwQixJQUFJLENBQUNDLDBCQUEwQjtnQkFFL0QsSUFBSUQsNEJBQTRCLE1BQU07b0JBQ3BDRCxhQUFhQyx3QkFBd0JGLGFBQWE7Z0JBQ3BEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRXpDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1EsZ0NBQXFCLEVBQ2hDQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1Y7Z0JBRWpELE9BQU9TO1lBQ1Q7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBV1cseUNBQThCLEVBQ3pDZCwwQkFBMEIsSUFBSSxDQUFDYSxrQkFBa0IsQ0FBQ1Y7Z0JBRXhELE9BQU9IO1lBQ1Q7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUViLFFBQVEsRUFBRWMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0wsMENBQTBDLENBQUNDLE9BQU9iLFVBQVVjLFlBQVlDLFNBQVNDO1lBQWE7OztXQTdEeE1oQztFQUE4QmlDLG9CQUFlIn0=