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
var TermNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TermNode, NonTerminalNode);
    function TermNode() {
        _class_call_check(this, TermNode);
        return _call_super(this, TermNode, arguments);
    }
    _create_class(TermNode, [
        {
            key: "getVariableNodes",
            value: function getVariableNodes() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNodes = this.getNodesByRuleName(ruleName);
                return variableNodes;
            }
        },
        {
            key: "getSingularArgumentNode",
            value: function getSingularArgumentNode() {
                var ruleName = _ruleNames.ARGUMENT_RULE_NAME, singularArgumentNode = this.getSingularTNodeByRuleName(ruleName);
                return singularArgumentNode;
            }
        },
        {
            key: "getSingularVariableNode",
            value: function getSingularVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, singularVariableNode = this.getSingularTNodeByRuleName(ruleName);
                return singularVariableNode;
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhckFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVGVybU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyVGVybU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJBcmd1bWVudE5vZGUgPSB0aGlzLmdldFNpbmd1bGFyQXJndW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJBcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyVGVybU5vZGUgPSBzaW5ndWxhckFyZ3VtZW50Tm9kZS5nZXRTaW5ndWxhclRlcm1Ob2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyVGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZXMiLCJydWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsInNpbmd1bGFyQXJndW1lbnROb2RlIiwiZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJUZXJtTm9kZSIsInNpbmd1bGFyVGVybU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO3lCQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxnQkFBZ0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssNkJBQWtCLEVBQzdCQyx1QkFBdUIsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQ1A7Z0JBRTdELE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsV0FBV0MsNkJBQWtCLEVBQzdCUSx1QkFBdUIsSUFBSSxDQUFDRiwwQkFBMEIsQ0FBQ1A7Z0JBRTdELE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNTCx1QkFBdUIsSUFBSSxDQUFDRix1QkFBdUI7Z0JBRXpELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQ0ssbUJBQW1CTCxxQkFBcUJJLG1CQUFtQjtnQkFDN0Q7Z0JBRUEsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNaLFFBQVEsRUFBRWEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBbEM3SWQsVUFrQ3dKRSxVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0FsQ3BNakI7RUFBaUJrQixvQkFBZSJ9