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
            key: "getFrameNode",
            value: function getFrameNode() {
                var firstFrameNode = this.getFirstFrameNode(), frameNode = firstFrameNode; ///
                return frameNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var lastMetavariableNode = this.getLastMetavariableNode(), metavariableNode = lastMetavariableNode; ///
                return metavariableNode;
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
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IEZSQU1FX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBmaXJzdEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0TWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbGFzdE1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGxhc3RGcmFtZU5vZGUgPSB0aGlzLmdldExhc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0RnJhbWVOb2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFzdE1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdEZyYW1lTm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRMYXN0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGxhc3RGcmFtZU5vZGUgPSB0aGlzLmdldExhc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFzdEZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGZpcnN0RnJhbWVOb2RlID0gdGhpcy5nZXRGaXJzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEZyYW1lTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIFN1YnN0aXR1dGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmlyc3RGcmFtZU5vZGUiLCJnZXRGaXJzdEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJsYXN0TWV0YXZhcmlhYmxlTm9kZSIsImdldExhc3RNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhc3RGcmFtZU5vZGUiLCJnZXRMYXN0RnJhbWVOb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Rmlyc3RNZXRhdmFyaWFibGVOb2RlIiwiZmlyc3RNZXRhdmFyaWFibGVOb2RlIiwicnVsZU5hbWUiLCJGUkFNRV9SVUxFX05BTUUiLCJnZXRMYXN0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGaXJzdE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiU3Vic3RpdHV0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7bUVBSlE7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsWUFBWUYsZ0JBQWdCLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxtQkFBbUJGLHNCQUF1QixHQUFHO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELHVCQUF1QjtnQkFFM0IsSUFBTUcsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQywyQkFBMkJGLGNBQWNHLDJCQUEyQjtnQkFFMUUsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDTCx1QkFBdUJLLDBCQUEyQixHQUFHO2dCQUN2RDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBTVosaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDUSwyQkFBMkJULGVBQWVVLDJCQUEyQjtnQkFFM0UsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDRyx3QkFBd0JILDBCQUEyQixHQUFHO2dCQUN4RDtnQkFFQSxPQUFPRztZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1LLFdBQVdDLDBCQUFlLEVBQzFCUCxnQkFBZ0IsSUFBSSxDQUFDUSxxQkFBcUIsQ0FBQ0Y7Z0JBRWpELE9BQU9OO1lBQ1Q7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVksV0FBV0MsMEJBQWUsRUFDMUJkLGlCQUFpQixJQUFJLENBQUNnQixzQkFBc0IsQ0FBQ0g7Z0JBRW5ELE9BQU9iO1lBQ1Q7Ozs7WUFFT2lCLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxxQkFBZ0IsQ0FBQ0osMENBQTBDLENBdkQ5SW5CLHVCQXVEc0tlLFVBQVVLLFlBQVlDLFNBQVNDO1lBQWE7OztXQXZEbE50QjtFQUE4QnVCLHFCQUFnQiJ9