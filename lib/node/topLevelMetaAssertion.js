"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertionNode;
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
var TopLevelMetaAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelMetaAssertionNode, NonTerminalNode);
    function TopLevelMetaAssertionNode() {
        _class_call_check(this, TopLevelMetaAssertionNode);
        return _call_super(this, TopLevelMetaAssertionNode, arguments);
    }
    _create_class(TopLevelMetaAssertionNode, [
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var parenthesisedLabelNode = this.getParenthesisedLabelNode(), labelNodes = parenthesisedLabelNode.getLabelNode();
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
            key: "getParenthesisedLabelNode",
            value: function getParenthesisedLabelNode() {
                var ruleName = _ruleNames.PARENTHESISED_LABEL_RULE_NAME, parenthesisedLabelNode = this.getNodeByRuleName(ruleName);
                return parenthesisedLabelNode;
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
    return TopLevelMetaAssertionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBQUk9PRl9SVUxFX05BTUUsIERFRFVDVElPTl9SVUxFX05BTUUsIFNVUFBPU0lUSU9OX1JVTEVfTkFNRSwgUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsTm9kZSA9IHRoaXMuZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlLmdldExhYmVsTm9kZSgpO1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9PRl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRFVDVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VQUE9TSVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldFBhcmVudGhlc2lzZWRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJFTlRIRVNJU0VEX0xBQkVMX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwiZ2V0TGFiZWxOb2RlIiwicGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImdldFBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0UHJvb2ZOb2RlIiwicnVsZU5hbWUiLCJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZk5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldERlZHVjdGlvbk5vZGUiLCJERURVQ1RJT05fUlVMRV9OQU1FIiwiZGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJTVVBQT1NJVElPTl9SVUxFX05BTUUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiUEFSRU5USEVTSVNFRF9MQUJFTF9SVUxFX05BTUUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRStFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyx5QkFBeUIsSUFDdkRDLGFBQWFGLHVCQUF1QkQsWUFBWTtnQkFFdEQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSxnQ0FBcUIsRUFDaENDLG1CQUFtQixJQUFJLENBQUNDLGtCQUFrQixDQUFDVjtnQkFFakQsT0FBT1M7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRyxXQUFXVyx3Q0FBNkIsRUFDeENmLHlCQUF5QixJQUFJLENBQUNPLGlCQUFpQixDQUFDSDtnQkFFdEQsT0FBT0o7WUFDVDs7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUViLFFBQVEsRUFBRWMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0wsMENBQTBDLENBQUNDLE9BQU9iLFVBQVVjLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBDeE10QjtFQUFrQ3VCLG9CQUFlIn0=