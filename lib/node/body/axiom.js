"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomBodyNode;
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
var AxiomBodyNode = /*#__PURE__*/ function(BodyNode) {
    _inherits(AxiomBodyNode, BodyNode);
    function AxiomBodyNode() {
        _class_call_check(this, AxiomBodyNode);
        return _call_super(this, AxiomBodyNode, arguments);
    }
    _create_class(AxiomBodyNode, [
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
                return _body.default.fromRuleNameChildNodesOpacityAndPrecedence(AxiomBodyNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return AxiomBodyNode;
}(_body.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JvZHkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBCb2R5Tm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ib2R5XCI7XG5pbXBvcnQgeyBERURVQ1RJT05fUlVMRV9OQU1FLCBTVVBQT1NJVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tQm9keU5vZGUgZXh0ZW5kcyBCb2R5Tm9kZSB7XG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBERURVQ1RJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNVUFBPU0lUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBCb2R5Tm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQXhpb21Cb2R5Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQXhpb21Cb2R5Tm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJydWxlTmFtZSIsIkRFRFVDVElPTl9SVUxFX05BTUUiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiU1VQUE9TSVRJT05fUlVMRV9OQU1FIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkJvZHlOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFIQTt5QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGdDQUFxQixFQUNoQ0MsbUJBQW1CLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNQO2dCQUVqRCxPQUFPTTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1IsUUFBUSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxhQUFRLENBQUNKLDBDQUEwQyxDQWZ0SVYsZUFlc0pFLFVBQVVTLFlBQVlDLFNBQVNDO1lBQWE7OztXQWZsTWI7RUFBc0JjLGFBQVEifQ==