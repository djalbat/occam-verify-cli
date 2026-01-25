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
var _occamfurtle = require("occam-furtle");
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
            key: "getVariableNode",
            value: function getVariableNode() {
                var singularVariableNode = this.getSingularVariableNode(), variableNode = singularVariableNode; //
                return variableNode;
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
        },
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNTaW5ndWxhcigpIHtcbiAgICBsZXQgc2luZ3VsYXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhciA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhclRlcm1Ob2RlKCkge1xuICAgIGxldCBzaW5ndWxhclRlcm1Ob2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhckFyZ3VtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclRlcm1Ob2RlID0gc2luZ3VsYXJBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVJZGVudGlmaWVyKCkge1xuICAgIGxldCB2YXJpYWJsZUlkZW50aWZpZXIgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRTaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllcigpIHtcbiAgICBsZXQgc2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICBzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllcjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJBcmd1bWVudE5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUZXJtTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybU5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJUZXJtTm9kZSIsInNpbmd1bGFyVGVybU5vZGUiLCJzaW5ndWxhckFyZ3VtZW50Tm9kZSIsImdldFNpbmd1bGFyQXJndW1lbnROb2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZUlkZW50aWZpZXIiLCJzaW5ndWxhclZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlTm9kZXMiLCJydWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJnZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKVzt5QkFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRCxXQUFXO2dCQUNiO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25ERSxlQUFlSCxzQkFBdUIsRUFBRTtnQkFFOUMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRCxtQkFBbUJDLHFCQUFxQkYsbUJBQW1CO2dCQUM3RDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTVYsV0FBVyxJQUFJLENBQUNELFVBQVU7Z0JBRWhDLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO29CQUV6RFEscUJBQXFCVCxxQkFBcUJRLHFCQUFxQjtnQkFDakU7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyw2QkFBNkI7Z0JBRWpDLElBQU1YLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QjtnQkFFekQsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1TLHFCQUFxQlQscUJBQXFCUSxxQkFBcUI7b0JBRXJFRyw2QkFBNkJGLG9CQUFxQixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDZCQUFrQixFQUM3QkMsZ0JBQWdCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUU5QyxPQUFPRTtZQUNUOzs7WUFFQVIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1NLFdBQVdJLDZCQUFrQixFQUM3QlgsdUJBQXVCLElBQUksQ0FBQ1kseUJBQXlCLENBQUNMO2dCQUU1RCxPQUFPUDtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ZLFdBQVdDLDZCQUFrQixFQUM3QmQsdUJBQXVCLElBQUksQ0FBQ2tCLHlCQUF5QixDQUFDTDtnQkFFNUQsT0FBT2I7WUFDVDs7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDTixRQUFRLEVBQUVPLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDRCQUFlLENBQUNKLDBDQUEwQyxDQWpGN0l0QixVQWlGd0pnQixVQUFVTyxZQUFZQyxTQUFTQztZQUFhOzs7V0FqRnBNekI7RUFBaUIwQiw0QkFBZSJ9