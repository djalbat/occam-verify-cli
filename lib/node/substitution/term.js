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
var TermSubstitutionNode = /*#__PURE__*/ function(SubstitutionNode) {
    _inherits(TermSubstitutionNode, SubstitutionNode);
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
                return _substitution.default.fromRuleNameChildNodesOpacityAndPrecedence(TermSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TermSubstitutionNode;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1TdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldExhc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGxhc3RUZXJtTm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0VGVybU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RUZXJtTm9kZSA9IHRoaXMuZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExhc3RWYXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgbGFzdFRlcm1Ob2RlID0gdGhpcy5nZXRMYXN0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGxhc3RUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBsYXN0VmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0VmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBmaXJzdFZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBmaXJzdFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0VmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBTdWJzdGl0dXRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUZXJtU3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRMYXN0VGVybU5vZGUiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibGFzdFRlcm1Ob2RlIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0Rmlyc3RUZXJtTm9kZSIsImZpcnN0VGVybU5vZGUiLCJnZXRGaXJzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsImxhc3RWYXJpYWJsZU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0Rmlyc3RWYXJpYWJsZU5vZGUiLCJmaXJzdFZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlN1YnN0aXR1dGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O21FQUpRO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsZUFBZSxJQUFJLENBQUNDLHFCQUFxQixDQUFDSDtnQkFFaEQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXQyx5QkFBYyxFQUN6QkksZ0JBQWdCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNOO2dCQUVsRCxPQUFPSztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTU4sZUFBZSxJQUFJLENBQUNILGVBQWUsSUFDbkNVLHVCQUF1QlAsYUFBYVEsdUJBQXVCO2dCQUVqRSxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakNELG1CQUFtQkMsc0JBQXVCLEdBQUc7Z0JBQy9DO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNUCxnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0IsSUFDckNLLHVCQUF1QkosY0FBY0ssdUJBQXVCO2dCQUVsRSxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakNHLG9CQUFvQkgsc0JBQXVCLEdBQUc7Z0JBQ2hEO2dCQUVBLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDYixRQUFRLEVBQUVjLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHFCQUFnQixDQUFDSiwwQ0FBMEMsQ0F6QzlJZixzQkF5Q3FLRSxVQUFVYyxZQUFZQyxTQUFTQztZQUFhOzs7V0F6Q2pObEI7RUFBNkJtQixxQkFBZ0IifQ==