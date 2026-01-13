"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LemmaNode;
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
var LemmaNode = /*#__PURE__*/ function(TopLevelAssertionNode) {
    _inherits(LemmaNode, TopLevelAssertionNode);
    function LemmaNode() {
        _class_call_check(this, LemmaNode);
        return _call_super(this, LemmaNode, arguments);
    }
    _create_class(LemmaNode, null, [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _topLevelAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return LemmaNode;
}(_topLevelAssertion.default);
_define_property(LemmaNode, "bodyRuleName", _ruleNames.LEMMA_BODY_RULE_NAME);
_define_property(LemmaNode, "headerRuleName", _ruleNames.LEMMA_HEADER_RULE_NAME);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uL2xlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IExFTU1BX0JPRFlfUlVMRV9OQU1FLCBMRU1NQV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYU5vZGUgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbk5vZGUge1xuICBzdGF0aWMgYm9keVJ1bGVOYW1lID0gTEVNTUFfQk9EWV9SVUxFX05BTUU7XG5cbiAgc3RhdGljIGhlYWRlclJ1bGVOYW1lID0gTEVNTUFfSEVBREVSX1JVTEVfTkFNRTtcblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKExlbW1hTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTGVtbWFOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJUb3BMZXZlbEFzc2VydGlvbk5vZGUiLCJib2R5UnVsZU5hbWUiLCJMRU1NQV9CT0RZX1JVTEVfTkFNRSIsImhlYWRlclJ1bGVOYW1lIiwiTEVNTUFfSEVBREVSX1JVTEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0VBSmE7eUJBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBS1pDLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQywwQkFBcUIsQ0FBQ0wsMENBQTBDLENBTG5KRCxXQUsrSkUsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBTDNNTDtFQUFrQk0sMEJBQXFCO0FBQzFELGlCQURtQk4sV0FDWk8sZ0JBQWVDLCtCQUFvQjtBQUUxQyxpQkFIbUJSLFdBR1pTLGtCQUFpQkMsaUNBQXNCIn0=