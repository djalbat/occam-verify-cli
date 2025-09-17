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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StepNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgTk9OU0VOU0VfUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBRVUFMSUZJQ0FUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1N0ZXBOb2RlKCkge1xuICAgIGNvbnN0IHN0ZXBOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGlzU3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE5vbnNlbnNlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE5PTlNFTlNFX1JVTEVfTkFNRSxcbiAgICAgICAgICBub25zZW5zZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBub25zZW5zZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFF1YWxpZmljYXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUVVBTElGSUNBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcXVhbGlmaWNhdGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBxdWFsaWZpY2F0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgbGV0IHJlZmVyZW5jZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgcXVhbGlmaWNhdGlvbk5vZGUgPSB0aGlzLmdldFF1YWxpZmljYXRpb25Ob2RlKCk7XG5cbiAgICBpZiAocXVhbGlmaWNhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZU5vZGUgPSBxdWFsaWZpY2F0aW9uTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGxldCBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gIG51bGw7XG5cbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uTm9kZSA9IHRoaXMuZ2V0UXVhbGlmaWNhdGlvbk5vZGUoKTtcblxuICAgIGlmIChxdWFsaWZpY2F0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9IHF1YWxpZmljYXRpb25Ob2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3RlcE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0ZXBOb2RlIiwiaXNTdGVwTm9kZSIsInN0ZXBOb2RlIiwiaXNTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJnZXROb25zZW5zZU5vZGUiLCJydWxlTmFtZSIsIk5PTlNFTlNFX1JVTEVfTkFNRSIsIm5vbnNlbnNlTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0UXVhbGlmaWNhdGlvbk5vZGUiLCJRVUFMSUZJQ0FUSU9OX1JVTEVfTkFNRSIsInF1YWxpZmljYXRpb25Ob2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxFLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXO2dCQUVqQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU1QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLGtDQUF1QixFQUNsQ0Msb0JBQW9CLElBQUksQ0FBQ04saUJBQWlCLENBQUNIO2dCQUVqRCxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTUYsb0JBQW9CLElBQUksQ0FBQ0Ysb0JBQW9CO2dCQUVuRCxJQUFJRSxzQkFBc0IsTUFBTTtvQkFDOUJFLGdCQUFnQkYsa0JBQWtCQyxnQkFBZ0I7Z0JBQ3BEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMseUJBQTBCO2dCQUU5QixJQUFNSixvQkFBb0IsSUFBSSxDQUFDRixvQkFBb0I7Z0JBRW5ELElBQUlFLHNCQUFzQixNQUFNO29CQUM5QkkseUJBQXlCSixrQkFBa0JHLHlCQUF5QjtnQkFDdEU7Z0JBRUEsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNkLFFBQVEsRUFBRWUsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBMUQ3SXBCLFVBMER3Sk0sVUFBVWUsWUFBWUMsU0FBU0M7WUFBYTs7O1dBMURwTXZCO0VBQWlCd0Isb0JBQWUifQ==