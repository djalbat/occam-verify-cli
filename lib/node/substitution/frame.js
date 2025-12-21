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
var FrameSubstitutionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(FrameSubstitutionNode, NonTerminalNode);
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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(FrameSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameSubstitutionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBGUkFNRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldExhc3RGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgbGFzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYXN0RnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZmlyc3RGcmFtZU5vZGUgPSB0aGlzLmdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0RnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGxhc3RNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGxhc3RGcmFtZU5vZGUgPSB0aGlzLmdldExhc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0RnJhbWVOb2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGFzdE1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdEZyYW1lTm9kZSA9IHRoaXMuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmaXJzdEZyYW1lTm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdE1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TGFzdEZyYW1lTm9kZSIsInJ1bGVOYW1lIiwiRlJBTUVfUlVMRV9OQU1FIiwibGFzdEZyYW1lTm9kZSIsImdldExhc3ROb2RlQnlSdWxlTmFtZSIsImdldEZpcnN0RnJhbWVOb2RlIiwiZmlyc3RGcmFtZU5vZGUiLCJnZXRGaXJzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUiLCJsYXN0TWV0YXZhcmlhYmxlTm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldEZpcnN0TWV0YXZhcmlhYmxlTm9kZSIsImZpcnN0TWV0YXZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDBCQUFlLEVBQzFCQyxnQkFBZ0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0g7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0MsMEJBQWUsRUFDMUJJLGlCQUFpQixJQUFJLENBQUNDLHNCQUFzQixDQUFDTjtnQkFFbkQsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1OLGdCQUFnQixJQUFJLENBQUNILGdCQUFnQixJQUNyQ1UsMkJBQTJCUCxjQUFjUSwyQkFBMkI7Z0JBRTFFLElBQUlELDZCQUE2QixNQUFNO29CQUNyQ0QsdUJBQXVCQywwQkFBMkIsR0FBRztnQkFDdkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx3QkFBd0I7Z0JBRTVCLElBQU1QLGlCQUFpQixJQUFJLENBQUNELGlCQUFpQixJQUN2Q0ssMkJBQTJCSixlQUFlSywyQkFBMkI7Z0JBRTNFLElBQUlELDZCQUE2QixNQUFNO29CQUNyQ0csd0JBQXdCSCwwQkFBMkIsR0FBRztnQkFDeEQ7Z0JBRUEsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNiLFFBQVEsRUFBRWMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBekM3SWYsdUJBeUNxS0UsVUFBVWMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBekNqTmxCO0VBQThCbUIsb0JBQWUifQ==