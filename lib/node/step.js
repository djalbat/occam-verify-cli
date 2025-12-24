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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBOT05TRU5TRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIFFVQUxJRklDQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgc3RlcE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTdWJwcm9vZk5vZGUoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0Tm9uc2Vuc2VOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTk9OU0VOU0VfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vbnNlbnNlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbnNlbnNlTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UXVhbGlmaWNhdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBRVUFMSUZJQ0FUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBxdWFsaWZpY2F0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmljYXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBsZXQgcmVmZXJlbmNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uTm9kZSA9IHRoaXMuZ2V0UXVhbGlmaWNhdGlvbk5vZGUoKTtcblxuICAgIGlmIChxdWFsaWZpY2F0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlTm9kZSA9IHF1YWxpZmljYXRpb25Ob2RlLmdldFJlZmVyZW5jZU5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgbGV0IHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSAgbnVsbDtcblxuICAgIGNvbnN0IHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXRRdWFsaWZpY2F0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHF1YWxpZmljYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gcXVhbGlmaWNhdGlvbk5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGVwTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RlcE5vZGUiLCJpc1N0ZXBOb2RlIiwic3RlcE5vZGUiLCJpc1N1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImdldE5vbnNlbnNlTm9kZSIsInJ1bGVOYW1lIiwiTk9OU0VOU0VfUlVMRV9OQU1FIiwibm9uc2Vuc2VOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGUiLCJnZXRRdWFsaWZpY2F0aW9uTm9kZSIsIlFVQUxJRklDQVRJT05fUlVMRV9OQU1FIiwicXVhbGlmaWNhdGlvbk5vZGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVc7Z0JBRWpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw2QkFBa0IsRUFDN0JDLGVBQWUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRTVDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1Esa0NBQXVCLEVBQ2xDQyxvQkFBb0IsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ0g7Z0JBRWpELE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZ0JBQWdCO2dCQUVwQixJQUFNRixvQkFBb0IsSUFBSSxDQUFDRixvQkFBb0I7Z0JBRW5ELElBQUlFLHNCQUFzQixNQUFNO29CQUM5QkUsZ0JBQWdCRixrQkFBa0JDLGdCQUFnQjtnQkFDcEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx5QkFBMEI7Z0JBRTlCLElBQU1KLG9CQUFvQixJQUFJLENBQUNGLG9CQUFvQjtnQkFFbkQsSUFBSUUsc0JBQXNCLE1BQU07b0JBQzlCSSx5QkFBeUJKLGtCQUFrQkcseUJBQXlCO2dCQUN0RTtnQkFFQSxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2QsUUFBUSxFQUFFZSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0ExRDdJcEIsVUEwRHdKTSxVQUFVZSxZQUFZQyxTQUFTQztZQUFhOzs7V0ExRHBNdkI7RUFBaUJ3Qix3QkFBZSJ9