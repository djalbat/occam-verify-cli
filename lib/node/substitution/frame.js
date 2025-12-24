"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameSubstitutionNode;
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
var FrameSubstitutionNode = /*#__PURE__*/ function(SubstitutionNode) {
    _inherits(FrameSubstitutionNode, SubstitutionNode);
    function FrameSubstitutionNode() {
        _class_call_check(this, FrameSubstitutionNode);
        return _call_super(this, FrameSubstitutionNode, arguments);
    }
    _create_class(FrameSubstitutionNode, [
        {
            key: "getLastFrameNode",
            value: function getLastFrameNode() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, lastFrameNode = this.getLastNodeByRuleName(ruleName);
                return lastFrameNode;
            }
        },
        {
            key: "getFirstFrameNode",
            value: function getFirstFrameNode() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, firstFrameNode = this.getFirstNodeByRuleName(ruleName);
                return firstFrameNode;
            }
        },
        {
            key: "getLastMetavariableNode",
            value: function getLastMetavariableNode() {
                var lastMetavariableNode = null;
                var lastFrameNode = this.getLastFrameNode(), singularMetavariableNode = lastFrameNode.getSingularMetavariableNode();
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
                var firstFrameNode = this.getFirstFrameNode(), singularMetavariableNode = firstFrameNode.getSingularMetavariableNode();
                if (singularMetavariableNode !== null) {
                    firstMetavariableNode = singularMetavariableNode; ///
                }
                return firstMetavariableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _substitution.default.fromRuleNameChildNodesOpacityAndPrecedence(FrameSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameSubstitutionNode;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IEZSQU1FX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldExhc3RGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgbGFzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0RnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RGcmFtZU5vZGUgPSB0aGlzLmdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0RnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGxhc3RGcmFtZU5vZGUgPSB0aGlzLmdldExhc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0RnJhbWVOb2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFzdE1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdEZyYW1lTm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBTdWJzdGl0dXRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShGcmFtZVN1YnN0aXR1dGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldExhc3RGcmFtZU5vZGUiLCJydWxlTmFtZSIsIkZSQU1FX1JVTEVfTkFNRSIsImxhc3RGcmFtZU5vZGUiLCJnZXRMYXN0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGaXJzdEZyYW1lTm9kZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImdldExhc3RNZXRhdmFyaWFibGVOb2RlIiwibGFzdE1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRGaXJzdE1ldGF2YXJpYWJsZU5vZGUiLCJmaXJzdE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJTdWJzdGl0dXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzttRUFKUTt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMEJBQWUsRUFDMUJDLGdCQUFnQixJQUFJLENBQUNDLHFCQUFxQixDQUFDSDtnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXQywwQkFBZSxFQUMxQkksaUJBQWlCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNOO2dCQUVuRCxPQUFPSztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTU4sZ0JBQWdCLElBQUksQ0FBQ0gsZ0JBQWdCLElBQ3JDVSwyQkFBMkJQLGNBQWNRLDJCQUEyQjtnQkFFMUUsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDRCx1QkFBdUJDLDBCQUEyQixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBTVAsaUJBQWlCLElBQUksQ0FBQ0QsaUJBQWlCLElBQ3ZDSywyQkFBMkJKLGVBQWVLLDJCQUEyQjtnQkFFM0UsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDRyx3QkFBd0JILDBCQUEyQixHQUFHO2dCQUN4RDtnQkFFQSxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2IsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxxQkFBZ0IsQ0FBQ0osMENBQTBDLENBekM5SWYsdUJBeUNzS0UsVUFBVWMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBekNsTmxCO0VBQThCbUIscUJBQWdCIn0=