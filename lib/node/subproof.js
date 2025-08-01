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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SubproofNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFNVUFBPU0lUSU9OX1JVTEVfTkFNRSwgU1VCX0RFUklWQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1N0ZXBOb2RlKCkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBpc1N1YnByb29mTm9kZSgpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldExhc3RTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHRoaXMuZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSxcbiAgICAgICAgICBsYXN0U3RlcE5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZS5nZXRMYXN0U3RlcE5vZGUoKTtcblxuICAgIHJldHVybiBsYXN0U3RlcE5vZGU7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNVQl9ERVJJVkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNVUFBPU0lUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN1YnByb29mTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3VicHJvb2ZOb2RlIiwiaXNTdGVwTm9kZSIsInN0ZXBOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJnZXRMYXN0U3RlcE5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImdldFN1YkRlcml2YXRpb25Ob2RlIiwibGFzdFN0ZXBOb2RlIiwicnVsZU5hbWUiLCJTVUJfREVSSVZBVElPTl9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJTVVBQT1NJVElPTl9SVUxFX05BTUUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVc7Z0JBRWpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NDLGVBQWVGLGtCQUFrQkQsZUFBZTtnQkFFdEQsT0FBT0c7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXQyxtQ0FBd0IsRUFDbkNKLG9CQUFvQixJQUFJLENBQUNLLGlCQUFpQixDQUFDRjtnQkFFakQsT0FBT0g7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxXQUFXSSxnQ0FBcUIsRUFDaENDLG1CQUFtQixJQUFJLENBQUNDLGtCQUFrQixDQUFDTjtnQkFFakQsT0FBT0s7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNQLFFBQVEsRUFBRVEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBbEM3SWhCLGNBa0M0SlMsVUFBVVEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbEN4TW5CO0VBQXFCb0Isb0JBQWUifQ==