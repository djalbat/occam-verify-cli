"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypePrefixDeclarationNode;
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
var TypePrefixDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TypePrefixDeclarationNode, NonTerminalNode);
    function TypePrefixDeclarationNode() {
        _class_call_check(this, TypePrefixDeclarationNode);
        return _call_super(this, TypePrefixDeclarationNode, arguments);
    }
    _create_class(TypePrefixDeclarationNode, [
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var typePrefixNode = this.getTypePrefixNode(), typePrefixName = typePrefixNode.getTypePrefixName();
                return typePrefixName;
            }
        },
        {
            key: "getTypePrefixNode",
            value: function getTypePrefixNode() {
                var ruleName = _ruleNames.TYPE_PREFIX_RULE_NAME, typePrefixNode = this.getNodeByRuleName(ruleName);
                return typePrefixNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TypePrefixDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypePrefixDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgVFlQRV9QUkVGSVhfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4Tm9kZSA9IHRoaXMuZ2V0VHlwZVByZWZpeE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVfUFJFRklYX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuIl0sIm5hbWVzIjpbIlR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeE5vZGUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJydWxlTmFtZSIsIlRZUEVfUFJFRklYX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxpQkFBaUJGLGVBQWVHLGlCQUFpQjtnQkFFdkQsT0FBT0Q7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRyxXQUFXQyxnQ0FBcUIsRUFDaENMLGlCQUFpQixJQUFJLENBQUNNLGlCQUFpQixDQUFDRjtnQkFFOUMsT0FBT0o7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNILFFBQVEsRUFBRUksVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBZjdJVCwyQkFleUtNLFVBQVVJLFlBQVlDLFNBQVNDO1lBQWE7OztXQWZyTlo7RUFBa0NhLG9CQUFlIn0=