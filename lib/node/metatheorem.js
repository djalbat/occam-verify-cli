"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetatheoremNode;
    }
});
var _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("../node/topLevelMetaAssertion"));
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
var MetatheoremNode = /*#__PURE__*/ function(TopLevelMetaAssertionNode) {
    _inherits(MetatheoremNode, TopLevelMetaAssertionNode);
    function MetatheoremNode() {
        _class_call_check(this, MetatheoremNode);
        return _call_super(this, MetatheoremNode, arguments);
    }
    _create_class(MetatheoremNode, null, [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _topLevelMetaAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetatheoremNode;
}(_topLevelMetaAssertion.default);
_define_property(MetatheoremNode, "bodyRuleName", _ruleNames.METATHEOREM_BODY_RULE_NAME);
_define_property(MetatheoremNode, "headerRuleName", _ruleNames.METATHEOREM_HEADER_RULE_NAME);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGF0aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS90b3BMZXZlbE1ldGFBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgTUVUQVRIRU9SRU1fQk9EWV9SVUxFX05BTUUsIE1FVEFUSEVPUkVNX0hFQURFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF0aGVvcmVtTm9kZSBleHRlbmRzIFRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUge1xuICBzdGF0aWMgYm9keVJ1bGVOYW1lID0gTUVUQVRIRU9SRU1fQk9EWV9SVUxFX05BTUU7XG5cbiAgc3RhdGljIGhlYWRlclJ1bGVOYW1lID0gTUVUQVRIRU9SRU1fSEVBREVSX1JVTEVfTkFNRTtcblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShNZXRhdGhlb3JlbU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGF0aGVvcmVtTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImJvZHlSdWxlTmFtZSIsIk1FVEFUSEVPUkVNX0JPRFlfUlVMRV9OQU1FIiwiaGVhZGVyUnVsZU5hbWUiLCJNRVRBVEhFT1JFTV9IRUFERVJfUlVMRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0RUFKaUI7eUJBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBS1pDLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw4QkFBeUIsQ0FBQ0wsMENBQTBDLENBTHZKRCxpQkFLeUtFLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQUxyTkw7RUFBd0JNLDhCQUF5QjtBQUNwRSxpQkFEbUJOLGlCQUNaTyxnQkFBZUMscUNBQTBCO0FBRWhELGlCQUhtQlIsaUJBR1pTLGtCQUFpQkMsdUNBQTRCIn0=