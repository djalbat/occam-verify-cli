"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReferenceSubstitutionNode;
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
var ReferenceSubstitutionNode = /*#__PURE__*/ function(SubstitutionNode) {
    _inherits(ReferenceSubstitutionNode, SubstitutionNode);
    function ReferenceSubstitutionNode() {
        _class_call_check(this, ReferenceSubstitutionNode);
        return _call_super(this, ReferenceSubstitutionNode, arguments);
    }
    _create_class(ReferenceSubstitutionNode, [
        {
            key: "getTargetReferenceNode",
            value: function getTargetReferenceNode() {
                var lastReferenceNode = this.getLastReferenceNode(), targetReferenceNode = lastReferenceNode; ///
                return targetReferenceNode;
            }
        },
        {
            key: "getReplacementReferenceNode",
            value: function getReplacementReferenceNode() {
                var firstReferenceNode = this.getFirstReferenceNode(), replacementReferenceNode = firstReferenceNode; ///
                return replacementReferenceNode;
            }
        },
        {
            key: "getLastReferenceNode",
            value: function getLastReferenceNode() {
                var ruleName = _ruleNames.REFERENCE_RULE_NAME, lastReferenceNode = this.getLastNodeByRuleName(ruleName);
                return lastReferenceNode;
            }
        },
        {
            key: "getFirstReferenceNode",
            value: function getFirstReferenceNode() {
                var ruleName = _ruleNames.REFERENCE_RULE_NAME, firstReferenceNode = this.getFirstNodeByRuleName(ruleName);
                return firstReferenceNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _substitution.default.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceSubstitutionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ReferenceSubstitutionNode;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBSRUZFUkVOQ0VfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIGV4dGVuZHMgU3Vic3RpdHV0aW9uTm9kZSB7XG4gIGdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3QgbGFzdFJlZmVyZW5jZU5vZGUgPSB0aGlzLmdldExhc3RSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IGxhc3RSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXRSZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IGZpcnN0UmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0Rmlyc3RSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gZmlyc3RSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRMYXN0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFRkVSRU5DRV9SVUxFX05BTUUsXG4gICAgICAgICAgbGFzdFJlZmVyZW5jZU5vZGUgPSB0aGlzLmdldExhc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFzdFJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSRUZFUkVOQ0VfUlVMRV9OQU1FLFxuICAgICAgICAgIGZpcnN0UmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RSZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gU3Vic3RpdHV0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSIsImxhc3RSZWZlcmVuY2VOb2RlIiwiZ2V0TGFzdFJlZmVyZW5jZU5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwiZmlyc3RSZWZlcmVuY2VOb2RlIiwiZ2V0Rmlyc3RSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwicnVsZU5hbWUiLCJSRUZFUkVOQ0VfUlVMRV9OQU1FIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlN1YnN0aXR1dGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O21FQUpRO3lCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NDLHNCQUFzQkYsbUJBQW1CLEdBQUc7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQywyQkFBMkJGLG9CQUFvQixHQUFHO2dCQUV4RCxPQUFPRTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1NLFdBQVdDLDhCQUFtQixFQUM5QlIsb0JBQW9CLElBQUksQ0FBQ1MscUJBQXFCLENBQUNGO2dCQUVyRCxPQUFPUDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdDLDhCQUFtQixFQUM5QkoscUJBQXFCLElBQUksQ0FBQ00sc0JBQXNCLENBQUNIO2dCQUV2RCxPQUFPSDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxxQkFBZ0IsQ0FBQ0osMENBQTBDLENBN0I5SWIsMkJBNkIwS1MsVUFBVUssWUFBWUMsU0FBU0M7WUFBYTs7O1dBN0J0TmhCO0VBQWtDaUIscUJBQWdCIn0=