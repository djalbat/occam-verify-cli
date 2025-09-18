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
var MetaLemmaNode = /*#__PURE__*/ function(TopLevelMetaAssertionNode) {
    _inherits(MetaLemmaNode, TopLevelMetaAssertionNode);
    function MetaLemmaNode() {
        _class_call_check(this, MetaLemmaNode);
        return _call_super(this, MetaLemmaNode, arguments);
    }
    _create_class(MetaLemmaNode, null, [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _topLevelMetaAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetaLemmaNode;
}(_topLevelMetaAssertion.default);
_define_property(MetaLemmaNode, "bodyRuleName", _ruleNames.META_LEMMA_BODY_RULE_NAME);
_define_property(MetaLemmaNode, "headerRuleName", _ruleNames.META_LEMMA_HEADER_RULE_NAME);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGFMZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUgZnJvbSBcIi4uL25vZGUvdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IE1FVEFfTEVNTUFfQk9EWV9SVUxFX05BTUUsIE1FVEFfTEVNTUFfSEVBREVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTm9kZSBleHRlbmRzIFRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUge1xuICBzdGF0aWMgYm9keVJ1bGVOYW1lID0gTUVUQV9MRU1NQV9CT0RZX1JVTEVfTkFNRTtcblxuICBzdGF0aWMgaGVhZGVyUnVsZU5hbWUgPSBNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUU7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoTWV0YUxlbW1hTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImJvZHlSdWxlTmFtZSIsIk1FVEFfTEVNTUFfQk9EWV9SVUxFX05BTUUiLCJoZWFkZXJSdWxlTmFtZSIsIk1FVEFfTEVNTUFfSEVBREVSX1JVTEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NEVBSmlCO3lCQUVpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUtaQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsOEJBQXlCLENBQUNMLDBDQUEwQyxDQUx2SkQsZUFLdUtFLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQUxuTkw7RUFBc0JNLDhCQUF5QjtBQUNsRSxpQkFEbUJOLGVBQ1pPLGdCQUFlQyxvQ0FBeUI7QUFFL0MsaUJBSG1CUixlQUdaUyxrQkFBaUJDLHNDQUEyQiJ9