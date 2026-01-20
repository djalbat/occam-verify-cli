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
            key: "getTargetFrameNode",
            value: function getTargetFrameNode() {
                var lastFrameNode = this.getLastFrameNode(), targetFrameNode = lastFrameNode; ///
                return targetFrameNode;
            }
        },
        {
            key: "getReplacementFrameNode",
            value: function getReplacementFrameNode() {
                var firstFrameNode = this.getFirstFrameNode(), replacementFrameNode = firstFrameNode; ///
                return replacementFrameNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IEZSQU1FX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldFRhcmdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0RnJhbWVOb2RlID0gdGhpcy5nZXRMYXN0RnJhbWVOb2RlKCksXG4gICAgICAgICAgdGFyZ2V0RnJhbWVOb2RlID0gbGFzdEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0RnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RGcmFtZU5vZGUgPSB0aGlzLmdldEZpcnN0RnJhbWVOb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmaXJzdEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZU5vZGU7XG4gIH1cblxuICBnZXRMYXN0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGxhc3RGcmFtZU5vZGUgPSB0aGlzLmdldExhc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFzdEZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGZpcnN0RnJhbWVOb2RlID0gdGhpcy5nZXRGaXJzdE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEZyYW1lTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIFN1YnN0aXR1dGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0RnJhbWVOb2RlIiwibGFzdEZyYW1lTm9kZSIsImdldExhc3RGcmFtZU5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3RGcmFtZU5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsInJ1bGVOYW1lIiwiRlJBTUVfUlVMRV9OQU1FIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlN1YnN0aXR1dGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O21FQUpRO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLGtCQUFrQkYsZUFBZSxHQUFHO2dCQUUxQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsdUJBQXVCRixnQkFBZ0IsR0FBRztnQkFFaEQsT0FBT0U7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSxXQUFXQywwQkFBZSxFQUMxQlIsZ0JBQWdCLElBQUksQ0FBQ1MscUJBQXFCLENBQUNGO2dCQUVqRCxPQUFPUDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdDLDBCQUFlLEVBQzFCSixpQkFBaUIsSUFBSSxDQUFDTSxzQkFBc0IsQ0FBQ0g7Z0JBRW5ELE9BQU9IO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHFCQUFnQixDQUFDSiwwQ0FBMEMsQ0E3QjlJYix1QkE2QnNLUyxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0E3QmxOaEI7RUFBOEJpQixxQkFBZ0IifQ==