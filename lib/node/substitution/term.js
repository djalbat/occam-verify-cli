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
                var lastTermNode = this.getLastTermNode(), singularVariableNode = lastTermNode.getSingularVariableNode(), lastVariableNode = singularVariableNode; ///
                return lastVariableNode;
            }
        },
        {
            key: "getFirstVariableNode",
            value: function getFirstVariableNode() {
                var firstTermNode = this.getFirstTermNode(), singularVariableNode = firstTermNode.getSingularVariableNode(), firstVariableNode = singularVariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1TdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldExhc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGxhc3RUZXJtTm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0VGVybU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RUZXJtTm9kZSA9IHRoaXMuZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExhc3RWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbGFzdFRlcm1Ob2RlID0gdGhpcy5nZXRMYXN0VGVybU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IGxhc3RUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxhc3RWYXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RWYXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBmaXJzdFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgZmlyc3RWYXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0VmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gU3Vic3RpdHV0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVGVybVN1YnN0aXR1dGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TGFzdFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsImxhc3RUZXJtTm9kZSIsImdldExhc3ROb2RlQnlSdWxlTmFtZSIsImdldEZpcnN0VGVybU5vZGUiLCJmaXJzdFRlcm1Ob2RlIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImdldExhc3RWYXJpYWJsZU5vZGUiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwibGFzdFZhcmlhYmxlTm9kZSIsImdldEZpcnN0VmFyaWFibGVOb2RlIiwiZmlyc3RWYXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJTdWJzdGl0dXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzttRUFKUTt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLGVBQWUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0g7Z0JBRWhELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0MseUJBQWMsRUFDekJJLGdCQUFnQixJQUFJLENBQUNDLHNCQUFzQixDQUFDTjtnQkFFbEQsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxlQUFlLElBQUksQ0FBQ0gsZUFBZSxJQUNuQ1MsdUJBQXVCTixhQUFhTyx1QkFBdUIsSUFDM0RDLG1CQUFtQkYsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCLElBQ3JDSSx1QkFBdUJILGNBQWNJLHVCQUF1QixJQUM1REcsb0JBQW9CSixzQkFBdUIsR0FBRztnQkFFcEQsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNiLFFBQVEsRUFBRWMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MscUJBQWdCLENBQUNKLDBDQUEwQyxDQS9COUlmLHNCQStCcUtFLFVBQVVjLFlBQVlDLFNBQVNDO1lBQWE7OztXQS9Cak5sQjtFQUE2Qm1CLHFCQUFnQiJ9