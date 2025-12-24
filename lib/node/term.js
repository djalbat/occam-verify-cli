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
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var singularVariableNode = this.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    simple = true;
                }
                return simple;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1NpbXBsZSgpIHtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhclRlcm1Ob2RlKCkge1xuICAgIGxldCBzaW5ndWxhclRlcm1Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclRlcm1Ob2RlID0gc2luZ3VsYXJBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJBcmd1bWVudE5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhckFyZ3VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBsZXQgc2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICBzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVGVybU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1Ob2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlcyIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhclRlcm1Ob2RlIiwic2luZ3VsYXJBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIiLCJzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSk87eUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxTQUFTO2dCQUViLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRCxTQUFTO2dCQUNYO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxnQkFBZ0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRXpELElBQUlELHlCQUF5QixNQUFNO29CQUNqQ0QsbUJBQW1CQyxxQkFBcUJGLG1CQUFtQjtnQkFDN0Q7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSw2QkFBa0IsRUFDN0JGLHVCQUF1QixJQUFJLENBQUNHLDBCQUEwQixDQUFDVDtnQkFFN0QsT0FBT007WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXQyw2QkFBa0IsRUFDN0JKLHVCQUF1QixJQUFJLENBQUNZLDBCQUEwQixDQUFDVDtnQkFFN0QsT0FBT0g7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyw2QkFBNkI7Z0JBRWpDLElBQU1kLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1lLHFCQUFxQmYscUJBQXFCZ0IscUJBQXFCO29CQUVyRUYsNkJBQTZCQyxvQkFBcUIsR0FBRztnQkFDdkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNkLFFBQVEsRUFBRWUsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBNUQ3SXBCLFVBNER3Sk0sVUFBVWUsWUFBWUMsU0FBU0M7WUFBYTs7O1dBNURwTXZCO0VBQWlCd0Isd0JBQWUifQ==