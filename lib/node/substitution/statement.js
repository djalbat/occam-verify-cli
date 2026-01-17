"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementSubstitutionNode;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../../node/substitution"));
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
var StatementSubstitutionNode = /*#__PURE__*/ function(SubstitutionNode) {
    _inherits(StatementSubstitutionNode, SubstitutionNode);
    function StatementSubstitutionNode() {
        _class_call_check(this, StatementSubstitutionNode);
        return _call_super(this, StatementSubstitutionNode, arguments);
    }
    _create_class(StatementSubstitutionNode, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var firstStatementNode = this.getFirstStatementNode(), statementNode = firstStatementNode; ///
                return statementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var lastMetavariableNode = this.getLastMetavariableNode(), metavariableNode = lastMetavariableNode; ///
                return metavariableNode;
            }
        },
        {
            key: "getLastMetavariableNode",
            value: function getLastMetavariableNode() {
                var lastMetavariableNode = null;
                var lastStatementNode = this.getLastStatementNode(), singularMetavariableNode = lastStatementNode.getSingularMetavariableNode();
                if (singularMetavariableNode !== null) {
                    lastMetavariableNode = singularMetavariableNode; ///
                }
                return lastMetavariableNode;
            }
        },
        {
            key: "getFirstMetavariableNode",
            value: function getFirstMetavariableNode() {
                var firstMetavariableNode = null;
                var firstStatementNode = this.getFirstStatementNode(), singularMetavariableNode = firstStatementNode.getSingularMetavariableNode();
                if (singularMetavariableNode !== null) {
                    firstMetavariableNode = singularMetavariableNode; ///
                }
                return firstMetavariableNode;
            }
        },
        {
            key: "getLastStatementNode",
            value: function getLastStatementNode() {
                var ruleName = _ruleNames.STATEMENT_RULE_NAME, lastStatementNode = this.getLastNodeByRuleName(ruleName);
                return lastStatementNode;
            }
        },
        {
            key: "getFirstStatementNode",
            value: function getFirstStatementNode() {
                var ruleName = _ruleNames.STATEMENT_RULE_NAME, firstStatementNode = this.getFirstNodeByRuleName(ruleName);
                return firstStatementNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _substitution.default.fromRuleNameChildNodesOpacityAndPrecedence(StatementSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementSubstitutionNode;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RTdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRGaXJzdFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gZmlyc3RTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0TWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbGFzdE1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRMYXN0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IGxhc3RTdGF0ZW1lbnROb2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFzdE1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFN0YXRlbWVudE5vZGUgPSB0aGlzLmdldEZpcnN0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0U3RhdGVtZW50Tm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRMYXN0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbGFzdFN0YXRlbWVudE5vZGUgPSB0aGlzLmdldExhc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFzdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIGZpcnN0U3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gU3Vic3RpdHV0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaXJzdFN0YXRlbWVudE5vZGUiLCJnZXRGaXJzdFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImxhc3RNZXRhdmFyaWFibGVOb2RlIiwiZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibGFzdFN0YXRlbWVudE5vZGUiLCJnZXRMYXN0U3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldEZpcnN0TWV0YXZhcmlhYmxlTm9kZSIsImZpcnN0TWV0YXZhcmlhYmxlTm9kZSIsInJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsImdldExhc3ROb2RlQnlSdWxlTmFtZSIsImdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJTdWJzdGl0dXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzttRUFKUTt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQyxnQkFBZ0JGLG9CQUFvQixHQUFHO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsbUJBQW1CRixzQkFBdUIsR0FBRztnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCx1QkFBdUI7Z0JBRTNCLElBQU1HLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0MsMkJBQTJCRixrQkFBa0JHLDJCQUEyQjtnQkFFOUUsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDTCx1QkFBdUJLLDBCQUEyQixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBTVoscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DUSwyQkFBMkJULG1CQUFtQlUsMkJBQTJCO2dCQUUvRSxJQUFJRCw2QkFBNkIsTUFBTTtvQkFDckNHLHdCQUF3QkgsMEJBQTJCLEdBQUc7Z0JBQ3hEO2dCQUVBLE9BQU9HO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUssV0FBV0MsOEJBQW1CLEVBQzlCUCxvQkFBb0IsSUFBSSxDQUFDUSxxQkFBcUIsQ0FBQ0Y7Z0JBRXJELE9BQU9OO1lBQ1Q7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVksV0FBV0MsOEJBQW1CLEVBQzlCZCxxQkFBcUIsSUFBSSxDQUFDZ0Isc0JBQXNCLENBQUNIO2dCQUV2RCxPQUFPYjtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNKLFFBQVEsRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MscUJBQWdCLENBQUNKLDBDQUEwQyxDQXZEOUluQiwyQkF1RDBLZSxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0F2RHROdEI7RUFBa0N1QixxQkFBZ0IifQ==