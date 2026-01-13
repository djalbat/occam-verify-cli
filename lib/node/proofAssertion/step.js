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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/proofAssertion"));
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
var StepNode = /*#__PURE__*/ function(ProofAssertionNode) {
    _inherits(StepNode, ProofAssertionNode);
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
                return _proofAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StepNode;
}(_proofAssertion.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgUVVBTElGSUNBVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBOb2RlIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb25Ob2RlIHtcbiAgaXNTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBpc1N1YnByb29mTm9kZSgpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGxldCByZWZlcmVuY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXRRdWFsaWZpY2F0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHF1YWxpZmljYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2VOb2RlID0gcXVhbGlmaWNhdGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBsZXQgc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9ICBudWxsO1xuXG4gICAgY29uc3QgcXVhbGlmaWNhdGlvbk5vZGUgPSB0aGlzLmdldFF1YWxpZmljYXRpb25Ob2RlKCk7XG5cbiAgICBpZiAocXVhbGlmaWNhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSBxdWFsaWZpY2F0aW9uTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRRdWFsaWZpY2F0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFFVQUxJRklDQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWNhdGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQcm9vZkFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0ZXBOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGVwTm9kZSIsImlzU3RlcE5vZGUiLCJzdGVwTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJxdWFsaWZpY2F0aW9uTm9kZSIsImdldFF1YWxpZmljYXRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJydWxlTmFtZSIsIlFVQUxJRklDQVRJT05fUlVMRV9OQU1FIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJQcm9vZkFzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FFQUpVO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXO2dCQUVqQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZ0JBQWdCO2dCQUVwQixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0I7Z0JBRW5ELElBQUlELHNCQUFzQixNQUFNO29CQUM5QkQsZ0JBQWdCQyxrQkFBa0JGLGdCQUFnQjtnQkFDcEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx5QkFBMEI7Z0JBRTlCLElBQU1ILG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQjtnQkFFbkQsSUFBSUQsc0JBQXNCLE1BQU07b0JBQzlCRyx5QkFBeUJILGtCQUFrQkUseUJBQXlCO2dCQUN0RTtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1HLFdBQVdDLGtDQUF1QixFQUNsQ0wsb0JBQW9CLElBQUksQ0FBQ00saUJBQWlCLENBQUNGO2dCQUVqRCxPQUFPSjtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0gsUUFBUSxFQUFFSSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx1QkFBa0IsQ0FBQ0osMENBQTBDLENBNUNoSmQsVUE0QzJKVyxVQUFVSSxZQUFZQyxTQUFTQztZQUFhOzs7V0E1Q3ZNakI7RUFBaUJrQix1QkFBa0IifQ==