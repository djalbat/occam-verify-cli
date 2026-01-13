"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConjectureNode;
    }
});
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/topLevelAssertion"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var ConjectureNode = /*#__PURE__*/ function(TopLevelAssertionNode) {
    _inherits(ConjectureNode, TopLevelAssertionNode);
    function ConjectureNode() {
        _class_call_check(this, ConjectureNode);
        return _call_super(this, ConjectureNode, arguments);
    }
    _create_class(ConjectureNode, null, [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _topLevelAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ConjectureNode;
}(_topLevelAssertion.default);
_define_property(ConjectureNode, "bodyRuleName", _ruleNames.CONJECTURE_BODY_RULE_NAME);
_define_property(ConjectureNode, "headerRuleName", _ruleNames.CONJECTURE_HEADER_RULE_NAME);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uL2NvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgQ09OSkVDVFVSRV9CT0RZX1JVTEVfTkFNRSwgQ09OSkVDVFVSRV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25qZWN0dXJlTm9kZSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uTm9kZSB7XG4gIHN0YXRpYyBib2R5UnVsZU5hbWUgPSBDT05KRUNUVVJFX0JPRFlfUlVMRV9OQU1FO1xuXG4gIHN0YXRpYyBoZWFkZXJSdWxlTmFtZSA9IENPTkpFQ1RVUkVfSEVBREVSX1JVTEVfTkFNRTtcblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbmplY3R1cmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb25qZWN0dXJlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiYm9keVJ1bGVOYW1lIiwiQ09OSkVDVFVSRV9CT0RZX1JVTEVfTkFNRSIsImhlYWRlclJ1bGVOYW1lIiwiQ09OSkVDVFVSRV9IRUFERVJfUlVMRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt3RUFKYTt5QkFFcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFLWkMsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDBCQUFxQixDQUFDTCwwQ0FBMEMsQ0FMbkpELGdCQUtvS0UsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBTGhOTDtFQUF1Qk0sMEJBQXFCO0FBQy9ELGlCQURtQk4sZ0JBQ1pPLGdCQUFlQyxvQ0FBeUI7QUFFL0MsaUJBSG1CUixnQkFHWlMsa0JBQWlCQyxzQ0FBMkIifQ==