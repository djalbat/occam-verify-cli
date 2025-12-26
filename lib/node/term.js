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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgbGV0IHZhcmlhYmxlSWRlbnRpZmllciA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgbGV0IHNpbmd1bGFyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJUZXJtTm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJUZXJtTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhckFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhckFyZ3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXJUZXJtTm9kZSA9IHNpbmd1bGFyQXJndW1lbnROb2RlLmdldFNpbmd1bGFyVGVybU5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyQXJndW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhckFyZ3VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyKCkge1xuICAgIGxldCBzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgIHNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUZXJtTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlcyIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhclRlcm1Ob2RlIiwic2luZ3VsYXJBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUiLCJnZXRTaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciIsInNpbmd1bGFyVmFyaWFibGVJZGVudGlmaWVyIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTUUsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO29CQUV6REoscUJBQXFCRyxxQkFBcUJKLHFCQUFxQjtnQkFDakU7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxXQUFXO2dCQUVmLElBQU1FLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRixXQUFXO2dCQUNiO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxnQkFBZ0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRXpELElBQUlELHlCQUF5QixNQUFNO29CQUNqQ0QsbUJBQW1CQyxxQkFBcUJGLG1CQUFtQjtnQkFDN0Q7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSw2QkFBa0IsRUFDN0JGLHVCQUF1QixJQUFJLENBQUNHLHlCQUF5QixDQUFDVDtnQkFFNUQsT0FBT007WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxXQUFXQyw2QkFBa0IsRUFDN0JKLHVCQUF1QixJQUFJLENBQUNZLHlCQUF5QixDQUFDVDtnQkFFNUQsT0FBT0g7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyw2QkFBNkI7Z0JBRWpDLElBQU1kLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1ILHFCQUFxQkcscUJBQXFCSixxQkFBcUI7b0JBRXJFa0IsNkJBQTZCakIsb0JBQXFCLEdBQUc7Z0JBQ3ZEO2dCQUVBLE9BQU9pQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1osUUFBUSxFQUFFYSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0ExRTdJcEIsVUEwRXdKUSxVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0ExRXBNdkI7RUFBaUJ3Qix3QkFBZSJ9