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
            key: "isResolved",
            value: function isResolved() {
                var resolved = true;
                var substitutionNode = this.getSubstitutionNode();
                if (substitutionNode !== null) {
                    resolved = false;
                }
                return resolved;
            }
        },
        {
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                var targetStatementNode = this.getTargetStatementNode(), substitutionNode = targetStatementNode.getSubstitutionNode();
                return substitutionNode;
            }
        },
        {
            key: "getTermSubstitutionNode",
            value: function getTermSubstitutionNode() {
                var targetStatementNode = this.getTargetStatementNode(), termSubstitutionNode = targetStatementNode.getTermSubstitutionNode();
                return termSubstitutionNode;
            }
        },
        {
            key: "getFrameSubstitutionNode",
            value: function getFrameSubstitutionNode() {
                var targetStatementNode = this.getTargetStatementNode(), frameSubstitutionNode = targetStatementNode.getFrameSubstitutionNode();
                return frameSubstitutionNode;
            }
        },
        {
            key: "getTargetStatementNode",
            value: function getTargetStatementNode() {
                var lastStatementNode = this.getLastStatementNode(), targetStatementNode = lastStatementNode; ///
                return targetStatementNode;
            }
        },
        {
            key: "getReplacementStatementNode",
            value: function getReplacementStatementNode() {
                var firstStatementNode = this.getFirstStatementNode(), replacementStatementNode = firstStatementNode; ///
                return replacementStatementNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgbGV0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICByZXNvbHZlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBsYXN0U3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0TGFzdFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnROb2RlID0gbGFzdFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RTdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRGaXJzdFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBmaXJzdFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldExhc3RTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBsYXN0U3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RTdGF0ZW1lbnROb2RlID0gdGhpcy5nZXRGaXJzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBTdWJzdGl0dXRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiaXNSZXNvbHZlZCIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJsYXN0U3RhdGVtZW50Tm9kZSIsImdldExhc3RTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwiZmlyc3RTdGF0ZW1lbnROb2RlIiwiZ2V0Rmlyc3RTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlN1YnN0aXR1dGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O21FQUpRO3lCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLG1CQUFtQjtnQkFFakQsSUFBSUQscUJBQXFCLE1BQU07b0JBQzdCRCxXQUFXO2dCQUNiO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ0Msc0JBQXNCLElBQ3JESCxtQkFBbUJFLG9CQUFvQkQsbUJBQW1CO2dCQUU1RCxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLHNCQUFzQixJQUFJLENBQUNDLHNCQUFzQixJQUNqREUsdUJBQXVCSCxvQkFBb0JFLHVCQUF1QjtnQkFFeEUsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixzQkFBc0IsSUFBSSxDQUFDQyxzQkFBc0IsSUFDakRJLHdCQUF3Qkwsb0JBQW9CSSx3QkFBd0I7Z0JBRTFFLE9BQU9DO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUssb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDUCxzQkFBc0JNLG1CQUFtQixHQUFHO2dCQUVsRCxPQUFPTjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLHFCQUFxQixJQUMvQ0MsMkJBQTJCRixvQkFBb0IsR0FBRztnQkFFeEQsT0FBT0U7WUFDVDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSyxXQUFXQyw4QkFBbUIsRUFDOUJQLG9CQUFvQixJQUFJLENBQUNRLHFCQUFxQixDQUFDRjtnQkFFckQsT0FBT047WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXQyw4QkFBbUIsRUFDOUJKLHFCQUFxQixJQUFJLENBQUNNLHNCQUFzQixDQUFDSDtnQkFFdkQsT0FBT0g7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNKLFFBQVEsRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MscUJBQWdCLENBQUNKLDBDQUEwQyxDQTlEOUlyQiwyQkE4RDBLaUIsVUFBVUssWUFBWUMsU0FBU0M7WUFBYTs7O1dBOUR0TnhCO0VBQWtDeUIscUJBQWdCIn0=