"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubproofNode;
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
var SubproofNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SubproofNode, NonTerminalNode);
    function SubproofNode() {
        _class_call_check(this, SubproofNode);
        return _call_super(this, SubproofNode, arguments);
    }
    _create_class(SubproofNode, [
        {
            key: "isStepNode",
            value: function isStepNode() {
                var stepNode = false;
                return stepNode;
            }
        },
        {
            key: "isSubproofNode",
            value: function isSubproofNode() {
                var subproofNode = true;
                return subproofNode;
            }
        },
        {
            key: "getLastStepNode",
            value: function getLastStepNode() {
                var subDerivationNode = this.getSubDerivationNode(), lastStepNode = subDerivationNode.getLastStepNode();
                return lastStepNode;
            }
        },
        {
            key: "getSubDerivationNode",
            value: function getSubDerivationNode() {
                var ruleName = _ruleNames.SUB_DERIVATION_RULE_NAME, subDerivationNode = this.getNodeByRuleName(ruleName);
                return subDerivationNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var ruleName = _ruleNames.SUPPOSITION_RULE_NAME, suppositionNodes = this.getNodesByRuleName(ruleName);
                return suppositionNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SubproofNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgU1VQUE9TSVRJT05fUlVMRV9OQU1FLCBTVUJfREVSSVZBVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGlzU3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXBOb2RlKCkge1xuICAgIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gdGhpcy5nZXRTdWJEZXJpdmF0aW9uTm9kZSgpLFxuICAgICAgICAgIGxhc3RTdGVwTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlLmdldExhc3RTdGVwTm9kZSgpO1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwTm9kZTtcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VCX0RFUklWQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VQUE9TSVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3VicHJvb2ZOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJwcm9vZk5vZGUiLCJpc1N0ZXBOb2RlIiwic3RlcE5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImdldExhc3RTdGVwTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJsYXN0U3RlcE5vZGUiLCJydWxlTmFtZSIsIlNVQl9ERVJJVkFUSU9OX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsIlNVUFBPU0lUSU9OX1JVTEVfTkFNRSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NFQUpPO3lCQUVvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVztnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlO2dCQUVyQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0MsZUFBZUYsa0JBQWtCRCxlQUFlO2dCQUV0RCxPQUFPRztZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdDLG1DQUF3QixFQUNuQ0osb0JBQW9CLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNGO2dCQUVqRCxPQUFPSDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFdBQVdJLGdDQUFxQixFQUNoQ0MsbUJBQW1CLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOO2dCQUVqRCxPQUFPSztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1AsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0FsQzdJaEIsY0FrQzRKUyxVQUFVUSxZQUFZQyxTQUFTQztZQUFhOzs7V0FsQ3hNbkI7RUFBcUJvQix3QkFBZSJ9