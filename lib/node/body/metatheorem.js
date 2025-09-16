"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetatheoremBodyNode;
    }
});
var _body = /*#__PURE__*/ _interop_require_default(require("../../node/body"));
var _ruleNames = require("../../ruleNames");
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
var MetatheoremBodyNode = /*#__PURE__*/ function(BodyNode) {
    _inherits(MetatheoremBodyNode, BodyNode);
    function MetatheoremBodyNode() {
        _class_call_check(this, MetatheoremBodyNode);
        return _call_super(this, MetatheoremBodyNode, arguments);
    }
    _create_class(MetatheoremBodyNode, [
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _body.default.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremBodyNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetatheoremBodyNode;
}(_body.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JvZHkvbWV0YXRoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBCb2R5Tm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ib2R5XCI7XG5cbmltcG9ydCB7IFBST09GX1JVTEVfTkFNRSwgREVEVUNUSU9OX1JVTEVfTkFNRSwgU1VQUE9TSVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdGhlb3JlbUJvZHlOb2RlIGV4dGVuZHMgQm9keU5vZGUge1xuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9PRl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRFVDVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VQUE9TSVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEJvZHlOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShNZXRhdGhlb3JlbUJvZHlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdGhlb3JlbUJvZHlOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwicnVsZU5hbWUiLCJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZk5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldERlZHVjdGlvbk5vZGUiLCJERURVQ1RJT05fUlVMRV9OQU1FIiwiZGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJTVVBQT1NJVElPTl9SVUxFX05BTUUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiQm9keU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO3lCQUV1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRXpDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1EsZ0NBQXFCLEVBQ2hDQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1Y7Z0JBRWpELE9BQU9TO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDWCxRQUFRLEVBQUVZLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0osMENBQTBDLENBdEJ0SWIscUJBc0I0SkUsVUFBVVksWUFBWUMsU0FBU0M7WUFBYTs7O1dBdEJ4TWhCO0VBQTRCaUIsYUFBUSJ9