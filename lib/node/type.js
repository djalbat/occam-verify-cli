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
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
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
            key: "isPrefixed",
            value: function isPrefixed() {
                var multiplicity = this.getMultiplicity(), prefixed = multiplicity > 1;
                return prefixed;
            }
        },
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeName;
                var prefixed = this.isPrefixed(), nameIndex = prefixed ? 2 : 0;
                this.someChildNode(function(childNode, index) {
                    if (index === nameIndex) {
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
                var prefixed = this.isPrefixed();
                if (prefixed) {
                    var prefixIndex = 0;
                    this.someChildNode(function(childNode, index) {
                        if (index === prefixIndex) {
                            var typeTerminalNode = childNode, content = typeTerminalNode.getContent();
                            typePrefixName = content; ///
                            return true;
                        }
                    });
                }
                return typePrefixName;
            }
        },
        {
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                var nominalTypeName;
                var prefixed = this.isPrefixed(), typeName = this.getTypeName();
                if (prefixed) {
                    var typePrefixName = this.getTypePrefixName();
                    nominalTypeName = "".concat(typePrefixName).concat(typeName);
                } else {
                    nominalTypeName = typeName; ///
                }
                return nominalTypeName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBwcmVmaXhlZCA9IChtdWx0aXBsaWNpdHkgPiAxKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFR5cGVOYW1lKCkge1xuICAgIGxldCB0eXBlTmFtZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbmFtZUluZGV4ID0gcHJlZml4ZWQgPyAyIDogMDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBuYW1lSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICB0eXBlTmFtZSA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5hbWUoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXhOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeEluZGV4ID0gMDtcblxuICAgICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gcHJlZml4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBsZXQgbm9taW5hbFR5cGVOYW1lO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLmdldFR5cGVQcmVmaXhOYW1lKCk7XG5cbiAgICAgIG5vbWluYWxUeXBlTmFtZSA9IGAke3R5cGVQcmVmaXhOYW1lfSR7dHlwZU5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5hbWU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUeXBlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVHlwZU5vZGUiLCJpc1ByZWZpeGVkIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwicHJlZml4ZWQiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwibmFtZUluZGV4Iiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidHlwZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInByZWZpeEluZGV4IiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NFQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxXQUFZRixlQUFlO2dCQUVqQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1GLFdBQVcsSUFBSSxDQUFDSCxVQUFVLElBQzFCTSxZQUFZSCxXQUFXLElBQUk7Z0JBRWpDLElBQUksQ0FBQ0ksYUFBYSxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFJQSxVQUFVSCxXQUFXO3dCQUN2QixJQUFNSSxtQkFBbUJGLFdBQ25CRyxVQUFVRCxpQkFBaUJFLFVBQVU7d0JBRTNDUCxXQUFXTSxTQUFTLEdBQUc7d0JBRXZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxpQkFBaUI7Z0JBRXJCLElBQU1YLFdBQVcsSUFBSSxDQUFDSCxVQUFVO2dCQUVoQyxJQUFJRyxVQUFVO29CQUNaLElBQU1ZLGNBQWM7b0JBRXBCLElBQUksQ0FBQ1IsYUFBYSxDQUFDLFNBQUNDLFdBQVdDO3dCQUM3QixJQUFJQSxVQUFVTSxhQUFhOzRCQUN6QixJQUFNTCxtQkFBbUJGLFdBQ25CRyxVQUFVRCxpQkFBaUJFLFVBQVU7NEJBRTNDRSxpQkFBaUJILFNBQVMsR0FBRzs0QkFFN0IsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1kLFdBQVcsSUFBSSxDQUFDSCxVQUFVLElBQzFCSyxXQUFXLElBQUksQ0FBQ0QsV0FBVztnQkFFakMsSUFBSUQsVUFBVTtvQkFDWixJQUFNVyxpQkFBaUIsSUFBSSxDQUFDRCxpQkFBaUI7b0JBRTdDSSxrQkFBa0IsQUFBQyxHQUFtQlosT0FBakJTLGdCQUEwQixPQUFUVDtnQkFDeEMsT0FBTztvQkFDTFksa0JBQWtCWixVQUFXLEdBQUc7Z0JBQ2xDO2dCQUVBLE9BQU9ZO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNMLDBDQUEwQyxDQXBFN0luQixVQW9Fd0pvQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FwRXBNdkI7RUFBaUJ3Qix3QkFBZSJ9