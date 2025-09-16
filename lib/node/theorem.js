"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TheoremNode;
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
var TheoremNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TheoremNode, NonTerminalNode);
    function TheoremNode() {
        _class_call_check(this, TheoremNode);
        return _call_super(this, TheoremNode, arguments);
    }
    _create_class(TheoremNode, [
        {
            key: "getTheoremBodyNode",
            value: function getTheoremBodyNode() {
                var ruleName = _ruleNames.THEOREM_BODY_RULE_NAME, theoremBodyNode = this.getNodeByRuleName(ruleName);
                return theoremBodyNode;
            }
        },
        {
            key: "getTheoremHeaderNode",
            value: function getTheoremHeaderNode() {
                var ruleName = _ruleNames.THEOREM_HEADER_RULE_NAME, theoremHeaderNode = this.getNodeByRuleName(ruleName);
                return theoremHeaderNode;
            }
        },
        {
            key: "getLabelsNode",
            value: function getLabelsNode() {
                var theoremHeaderNode = this.getTheoremHeaderNode(), labelNodes = theoremHeaderNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var theoremBodyNode = this.getTheoremBodyNode(), suppositionNodes = theoremBodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var theoremBodyNode = this.getTheoremBodyNode(), deductionNode = theoremBodyNode.getDeductionNode();
                return deductionNode;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var theoremBodyNode = this.getTheoremBodyNode(), proofNode = theoremBodyNode.getProofNode();
                return proofNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TheoremNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TheoremNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgVEhFT1JFTV9CT0RZX1JVTEVfTkFNRSwgVEhFT1JFTV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVvcmVtTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRoZW9yZW1Cb2R5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRIRU9SRU1fQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgdGhlb3JlbUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGhlb3JlbUJvZHlOb2RlO1xuICB9XG5cbiAgZ2V0VGhlb3JlbUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUSEVPUkVNX0hFQURFUl9SVUxFX05BTUUsXG4gICAgICAgICAgdGhlb3JlbUhlYWRlck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0aGVvcmVtSGVhZGVyTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsc05vZGUoKSB7XG4gICAgY29uc3QgdGhlb3JlbUhlYWRlck5vZGUgPSB0aGlzLmdldFRoZW9yZW1IZWFkZXJOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHRoZW9yZW1IZWFkZXJOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCB0aGVvcmVtQm9keU5vZGUgPSB0aGlzLmdldFRoZW9yZW1Cb2R5Tm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGVvcmVtQm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IHRoZW9yZW1Cb2R5Tm9kZSA9IHRoaXMuZ2V0VGhlb3JlbUJvZHlOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRoZW9yZW1Cb2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCB0aGVvcmVtQm9keU5vZGUgPSB0aGlzLmdldFRoZW9yZW1Cb2R5Tm9kZSgpLFxuICAgICAgICAgIHByb29mTm9kZSA9IHRoZW9yZW1Cb2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRoZW9yZW1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUaGVvcmVtTm9kZSIsImdldFRoZW9yZW1Cb2R5Tm9kZSIsInJ1bGVOYW1lIiwiVEhFT1JFTV9CT0RZX1JVTEVfTkFNRSIsInRoZW9yZW1Cb2R5Tm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0VGhlb3JlbUhlYWRlck5vZGUiLCJUSEVPUkVNX0hFQURFUl9SVUxFX05BTUUiLCJ0aGVvcmVtSGVhZGVyTm9kZSIsImdldExhYmVsc05vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO3lCQUVxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsaUNBQXNCLEVBQ2pDQyxrQkFBa0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRS9DLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssbUNBQXdCLEVBQ25DQyxvQkFBb0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRWpELE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsb0JBQW9CLElBQUksQ0FBQ0Ysb0JBQW9CLElBQzdDSSxhQUFhRixrQkFBa0JHLGFBQWE7Z0JBRWxELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDWSxtQkFBbUJULGdCQUFnQlEsbUJBQW1CO2dCQUU1RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLGtCQUFrQixJQUFJLENBQUNILGtCQUFrQixJQUN6Q2MsZ0JBQWdCWCxnQkFBZ0JVLGdCQUFnQjtnQkFFdEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWixrQkFBa0IsSUFBSSxDQUFDSCxrQkFBa0IsSUFDekNnQixZQUFZYixnQkFBZ0JZLFlBQVk7Z0JBRTlDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDaEIsUUFBUSxFQUFFaUIsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBM0M3SWxCLGFBMkMySkUsVUFBVWlCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDdk1yQjtFQUFvQnNCLG9CQUFlIn0=