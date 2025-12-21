"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermSubstitutionNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
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
var TermSubstitutionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TermSubstitutionNode, NonTerminalNode);
    function TermSubstitutionNode() {
        _class_call_check(this, TermSubstitutionNode);
        return _call_super(this, TermSubstitutionNode, arguments);
    }
    _create_class(TermSubstitutionNode, [
        {
            key: "getLastTermNode",
            value: function getLastTermNode() {
                var ruleName = _ruleNames.TERM_RULE_NAME, lastTermNode = this.getLastNodeByRuleName(ruleName);
                return lastTermNode;
            }
        },
        {
            key: "getFirstTermNode",
            value: function getFirstTermNode() {
                var ruleName = _ruleNames.TERM_RULE_NAME, firstTermNode = this.getFirstNodeByRuleName(ruleName);
                return firstTermNode;
            }
        },
        {
            key: "getLastVariableNode",
            value: function getLastVariableNode() {
                var lastVariableNode = null;
                var lastTermNode = this.getLastTermNode(), singularVariableNode = lastTermNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    lastVariableNode = singularVariableNode; ///
                }
                return lastVariableNode;
            }
        },
        {
            key: "getFirstVariableNode",
            value: function getFirstVariableNode() {
                var firstVariableNode = null;
                var firstTermNode = this.getFirstTermNode(), singularVariableNode = firstTermNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    firstVariableNode = singularVariableNode; ///
                }
                return firstVariableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TermSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermSubstitutionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtU3Vic3RpdHV0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldExhc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGxhc3RUZXJtTm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0VGVybU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RUZXJtTm9kZSA9IHRoaXMuZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExhc3RWYXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgbGFzdFRlcm1Ob2RlID0gdGhpcy5nZXRMYXN0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGxhc3RUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBsYXN0VmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0VmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBmaXJzdFZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBmaXJzdFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0VmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm1TdWJzdGl0dXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldExhc3RUZXJtTm9kZSIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJsYXN0VGVybU5vZGUiLCJnZXRMYXN0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRMYXN0VmFyaWFibGVOb2RlIiwibGFzdFZhcmlhYmxlTm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRGaXJzdFZhcmlhYmxlTm9kZSIsImZpcnN0VmFyaWFibGVOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLGVBQWUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0g7Z0JBRWhELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0MseUJBQWMsRUFDekJJLGdCQUFnQixJQUFJLENBQUNDLHNCQUFzQixDQUFDTjtnQkFFbEQsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1OLGVBQWUsSUFBSSxDQUFDSCxlQUFlLElBQ25DVSx1QkFBdUJQLGFBQWFRLHVCQUF1QjtnQkFFakUsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRCxtQkFBbUJDLHNCQUF1QixHQUFHO2dCQUMvQztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTVAsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCLElBQ3JDSyx1QkFBdUJKLGNBQWNLLHVCQUF1QjtnQkFFbEUsSUFBSUQseUJBQXlCLE1BQU07b0JBQ2pDRyxvQkFBb0JILHNCQUF1QixHQUFHO2dCQUNoRDtnQkFFQSxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2IsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0F6QzdJZixzQkF5Q29LRSxVQUFVYyxZQUFZQyxTQUFTQztZQUFhOzs7V0F6Q2hObEI7RUFBNkJtQixvQkFBZSJ9