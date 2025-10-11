"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
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
var TypeNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TypeNode, NonTerminalNode);
    function TypeNode() {
        _class_call_check(this, TypeNode);
        return _call_super(this, TypeNode, arguments);
    }
    _create_class(TypeNode, [
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeName;
                this.someChildNode(function(childNode, index) {
                    if (index === 0) {
                        var typeTerminalNode = childNode, content = typeTerminalNode.getContent();
                        typeName = content; ///
                        return true;
                    }
                });
                return typeName;
            }
        },
        {
            key: "getTypePrefixName",
            value: function getTypePrefixName() {
                var typePrefixName = null;
                this.someChildNode(function(childNode, index) {
                    if (index === 2) {
                        var typeTerminalNode = childNode, content = typeTerminalNode.getContent();
                        typePrefixName = content; ///
                        return true;
                    }
                });
                return typePrefixName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHR5cGVOYW1lID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4TmFtZSgpIHtcbiAgICBsZXQgdHlwZVByZWZpeE5hbWUgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDIpIHtcbiAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICB0eXBlUHJlZml4TmFtZSA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUeXBlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVHlwZU5vZGUiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidHlwZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztrRUFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBSUEsVUFBVSxHQUFHO3dCQUNmLElBQU1DLG1CQUFtQkYsV0FDbkJHLFVBQVVELGlCQUFpQkUsVUFBVTt3QkFFM0NOLFdBQVdLLFNBQVMsR0FBRzt3QkFFdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQjtnQkFFckIsSUFBSSxDQUFDUCxhQUFhLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQUlBLFVBQVUsR0FBRzt3QkFDZixJQUFNQyxtQkFBbUJGLFdBQ25CRyxVQUFVRCxpQkFBaUJFLFVBQVU7d0JBRTNDRSxpQkFBaUJILFNBQVMsR0FBRzt3QkFFN0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0FuQzdJWCxVQW1Dd0pZLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQW5DcE1mO0VBQWlCZ0Isb0JBQWUifQ==