"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StepNode;
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
var StepNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(StepNode, NonTerminalNode);
    function StepNode() {
        _class_call_check(this, StepNode);
        return _call_super(this, StepNode, arguments);
    }
    _create_class(StepNode, [
        {
            key: "isStepNode",
            value: function isStepNode() {
                var stepNode = true;
                return stepNode;
            }
        },
        {
            key: "isSubproofNode",
            value: function isSubproofNode() {
                var subproofNode = false;
                return subproofNode;
            }
        },
        {
            key: "getReferenceNode",
            value: function getReferenceNode() {
                var referenceNode = null;
                var qualificationNode = this.getQualificationNode();
                if (qualificationNode !== null) {
                    referenceNode = qualificationNode.getReferenceNode();
                }
                return referenceNode;
            }
        },
        {
            key: "getSatisfiedAssertionNode",
            value: function getSatisfiedAssertionNode() {
                var satisfiedAssertionNode = null;
                var qualificationNode = this.getQualificationNode();
                if (qualificationNode !== null) {
                    satisfiedAssertionNode = qualificationNode.getSatisfiedAssertionNode();
                }
                return satisfiedAssertionNode;
            }
        },
        {
            key: "getNonsenseNode",
            value: function getNonsenseNode() {
                var ruleName = _ruleNames.NONSENSE_RULE_NAME, nonsenseNode = this.getNodeByRuleName(ruleName);
                return nonsenseNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var ruleName = _ruleNames.STATEMENT_RULE_NAME, statementNode = this.getNodeByRuleName(ruleName);
                return statementNode;
            }
        },
        {
            key: "getQualificationNode",
            value: function getQualificationNode() {
                var ruleName = _ruleNames.QUALIFICATION_RULE_NAME, qualificationNode = this.getNodeByRuleName(ruleName);
                return qualificationNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StepNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBOT05TRU5TRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIFFVQUxJRklDQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTdWJwcm9vZk5vZGUoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBsZXQgcmVmZXJlbmNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uTm9kZSA9IHRoaXMuZ2V0UXVhbGlmaWNhdGlvbk5vZGUoKTtcblxuICAgIGlmIChxdWFsaWZpY2F0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlTm9kZSA9IHF1YWxpZmljYXRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgbGV0IHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSAgbnVsbDtcblxuICAgIGNvbnN0IHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXRRdWFsaWZpY2F0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHF1YWxpZmljYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gcXVhbGlmaWNhdGlvbk5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0Tm9uc2Vuc2VOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTk9OU0VOU0VfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vbnNlbnNlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbnNlbnNlTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UXVhbGlmaWNhdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBRVUFMSUZJQ0FUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBxdWFsaWZpY2F0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmljYXRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGVwTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwic3RlcE5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicXVhbGlmaWNhdGlvbk5vZGUiLCJnZXRRdWFsaWZpY2F0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9uc2Vuc2VOb2RlIiwicnVsZU5hbWUiLCJOT05TRU5TRV9SVUxFX05BTUUiLCJub25zZW5zZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFN0YXRlbWVudE5vZGUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZSIsIlFVQUxJRklDQVRJT05fUlVMRV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVc7Z0JBRWpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxnQkFBZ0I7Z0JBRXBCLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQjtnQkFFbkQsSUFBSUQsc0JBQXNCLE1BQU07b0JBQzlCRCxnQkFBZ0JDLGtCQUFrQkYsZ0JBQWdCO2dCQUNwRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHlCQUEwQjtnQkFFOUIsSUFBTUgsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUVuRCxJQUFJRCxzQkFBc0IsTUFBTTtvQkFDOUJHLHlCQUF5Qkgsa0JBQWtCRSx5QkFBeUI7Z0JBQ3RFO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU1QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPTTtZQUNUOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLFdBQVdPLGtDQUF1QixFQUNsQ1osb0JBQW9CLElBQUksQ0FBQ1EsaUJBQWlCLENBQUNIO2dCQUVqRCxPQUFPTDtZQUNUOzs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1IsUUFBUSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0ExRDdJcEIsVUEwRHdKWSxVQUFVUyxZQUFZQyxTQUFTQztZQUFhOzs7V0ExRHBNdkI7RUFBaUJ3Qix3QkFBZSJ9