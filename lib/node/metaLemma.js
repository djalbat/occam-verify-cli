"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaNode;
    }
});
var _metaLemmaMetaTheorem = /*#__PURE__*/ _interop_require_default(require("../node/metaLemmaMetaTheorem"));
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
var MetaLemmaNode = /*#__PURE__*/ function(MetaLemmaMetaTheoremNode) {
    _inherits(MetaLemmaNode, MetaLemmaMetaTheoremNode);
    function MetaLemmaNode() {
        _class_call_check(this, MetaLemmaNode);
        return _call_super(this, MetaLemmaNode, arguments);
    }
    _create_class(MetaLemmaNode, null, [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _metaLemmaMetaTheorem.default.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetaLemmaNode;
}(_metaLemmaMetaTheorem.default);
_define_property(MetaLemmaNode, "bodyRuleName", _ruleNames.META_LEMMA_BODY_RULE_NAME);
_define_property(MetaLemmaNode, "headerRuleName", _ruleNames.META_LEMMA_HEADER_RULE_NAME);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGFMZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFMZW1tYU1ldGFUaGVvcmVtTm9kZSBmcm9tIFwiLi4vbm9kZS9tZXRhTGVtbWFNZXRhVGhlb3JlbVwiO1xuXG5pbXBvcnQgeyBNRVRBX0xFTU1BX0JPRFlfUlVMRV9OQU1FLCBNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYU5vZGUgZXh0ZW5kcyBNZXRhTGVtbWFNZXRhVGhlb3JlbU5vZGUge1xuICBzdGF0aWMgYm9keVJ1bGVOYW1lID0gTUVUQV9MRU1NQV9CT0RZX1JVTEVfTkFNRTtcblxuICBzdGF0aWMgaGVhZGVyUnVsZU5hbWUgPSBNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUU7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWV0YUxlbW1hTWV0YVRoZW9yZW1Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShNZXRhTGVtbWFOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhTGVtbWFOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJNZXRhTGVtbWFNZXRhVGhlb3JlbU5vZGUiLCJib2R5UnVsZU5hbWUiLCJNRVRBX0xFTU1BX0JPRFlfUlVMRV9OQU1FIiwiaGVhZGVyUnVsZU5hbWUiLCJNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJFQUpnQjt5QkFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFLWkMsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDZCQUF3QixDQUFDTCwwQ0FBMEMsQ0FMdEpELGVBS3NLRSxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FMbE5MO0VBQXNCTSw2QkFBd0I7QUFDakUsaUJBRG1CTixlQUNaTyxnQkFBZUMsb0NBQXlCO0FBRS9DLGlCQUhtQlIsZUFHWlMsa0JBQWlCQyxzQ0FBMkIifQ==