"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermNode;
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
var TermNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TermNode, NonTerminalNode);
    function TermNode() {
        _class_call_check(this, TermNode);
        return _call_super(this, TermNode, arguments);
    }
    _create_class(TermNode, [
        {
            key: "getVariableIdentifier",
            value: function getVariableIdentifier() {
                var variableIdentifier = null;
                var singular = this.isSingular();
                if (singular) {
                    var singularVariableNode = this.getSingularVariableNode();
                    variableIdentifier = singularVariableNode.getVariableIdentifier();
                }
                return variableIdentifier;
            }
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var singularVariableNode = this.getSingularVariableNode(), variableNode = singularVariableNode; //
                return variableNode;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var singular = false;
                var singularVariableNode = this.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    singular = true;
                }
                return singular;
            }
        },
        {
            key: "getVariableNodes",
            value: function getVariableNodes() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNodes = this.getNodesByRuleName(ruleName);
                return variableNodes;
            }
        },
        {
            key: "getSingularTermNode",
            value: function getSingularTermNode() {
                var singularTermNode = null;
                var singularArgumentNode = this.getSingularArgumentNode();
                if (singularArgumentNode !== null) {
                    singularTermNode = singularArgumentNode.getSingularTermNode();
                }
                return singularTermNode;
            }
        },
        {
            key: "getSingularArgumentNode",
            value: function getSingularArgumentNode() {
                var ruleName = _ruleNames.ARGUMENT_RULE_NAME, singularArgumentNode = this.getSingularNodeByRuleName(ruleName);
                return singularArgumentNode;
            }
        },
        {
            key: "getSingularVariableNode",
            value: function getSingularVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, singularVariableNode = this.getSingularNodeByRuleName(ruleName);
                return singularVariableNode;
            }
        },
        {
            key: "getSingularVariableIdentifier",
            value: function getSingularVariableIdentifier() {
                var singularVariableIdentifier = null;
                var singularVariableNode = this.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    var variableIdentifier = singularVariableNode.getVariableIdentifier();
                    singularVariableIdentifier = variableIdentifier; ///
                }
                return singularVariableIdentifier;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgbGV0IHZhcmlhYmxlSWRlbnRpZmllciA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBsZXQgc2luZ3VsYXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhciA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhclRlcm1Ob2RlKCkge1xuICAgIGxldCBzaW5ndWxhclRlcm1Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclRlcm1Ob2RlID0gc2luZ3VsYXJBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJBcmd1bWVudE5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgbGV0IHNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSBzaW5ndWxhclZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgc2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXI7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGVzIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJ2YXJpYWJsZU5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0U2luZ3VsYXJUZXJtTm9kZSIsInNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhckFyZ3VtZW50Tm9kZSIsImdldFNpbmd1bGFyQXJndW1lbnROb2RlIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZSIsImdldFNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyIiwic2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NFQUpPO3lCQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNRSx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7b0JBRXpESixxQkFBcUJHLHFCQUFxQkoscUJBQXFCO2dCQUNqRTtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREUsZUFBZUgsc0JBQXVCLEVBQUU7Z0JBRTlDLE9BQU9HO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQsV0FBVztnQkFFZixJQUFNRSx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRXpELElBQUlELHlCQUF5QixNQUFNO29CQUNqQ0YsV0FBVztnQkFDYjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDZCQUFrQixFQUM3QkMsZ0JBQWdCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUU5QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakNELG1CQUFtQkMscUJBQXFCRixtQkFBbUI7Z0JBQzdEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1EsNkJBQWtCLEVBQzdCRix1QkFBdUIsSUFBSSxDQUFDRyx5QkFBeUIsQ0FBQ1Q7Z0JBRTVELE9BQU9NO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUksV0FBV0MsNkJBQWtCLEVBQzdCTix1QkFBdUIsSUFBSSxDQUFDYyx5QkFBeUIsQ0FBQ1Q7Z0JBRTVELE9BQU9MO1lBQ1Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsNkJBQTZCO2dCQUVqQyxJQUFNaEIsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUgscUJBQXFCRyxxQkFBcUJKLHFCQUFxQjtvQkFFckVvQiw2QkFBNkJuQixvQkFBcUIsR0FBRztnQkFDdkQ7Z0JBRUEsT0FBT21CO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDWixRQUFRLEVBQUVhLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQWpGN0l0QixVQWlGd0pVLFVBQVVhLFlBQVlDLFNBQVNDO1lBQWE7OztXQWpGcE16QjtFQUFpQjBCLHdCQUFlIn0=