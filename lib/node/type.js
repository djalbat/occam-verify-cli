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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgcHJlZml4ZWQgPSAobXVsdGlwbGljaXR5ID4gMSk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5hbWVJbmRleCA9IHByZWZpeGVkID8gMiA6IDA7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gbmFtZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdHlwZU5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOYW1lKCkge1xuICAgIGxldCB0eXBlUHJlZml4TmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhJbmRleCA9IDA7XG5cbiAgICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IHByZWZpeEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgbGV0IG5vbWluYWxUeXBlTmFtZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgICBub21pbmFsVHlwZU5hbWUgPSBgJHt0eXBlUHJlZml4TmFtZX0ke3R5cGVOYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOYW1lOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlR5cGVOb2RlIiwiaXNQcmVmaXhlZCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInByZWZpeGVkIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVJbmRleCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJwcmVmaXhJbmRleCIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztrRUFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsV0FBWUYsZUFBZTtnQkFFakMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNRixXQUFXLElBQUksQ0FBQ0gsVUFBVSxJQUMxQk0sWUFBWUgsV0FBVyxJQUFJO2dCQUVqQyxJQUFJLENBQUNJLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBSUEsVUFBVUgsV0FBVzt3QkFDdkIsSUFBTUksbUJBQW1CRixXQUNuQkcsVUFBVUQsaUJBQWlCRSxVQUFVO3dCQUUzQ1AsV0FBV00sU0FBUyxHQUFHO3dCQUV2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsaUJBQWlCO2dCQUVyQixJQUFNWCxXQUFXLElBQUksQ0FBQ0gsVUFBVTtnQkFFaEMsSUFBSUcsVUFBVTtvQkFDWixJQUFNWSxjQUFjO29CQUVwQixJQUFJLENBQUNSLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQzt3QkFDN0IsSUFBSUEsVUFBVU0sYUFBYTs0QkFDekIsSUFBTUwsbUJBQW1CRixXQUNuQkcsVUFBVUQsaUJBQWlCRSxVQUFVOzRCQUUzQ0UsaUJBQWlCSCxTQUFTLEdBQUc7NEJBRTdCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNZCxXQUFXLElBQUksQ0FBQ0gsVUFBVSxJQUMxQkssV0FBVyxJQUFJLENBQUNELFdBQVc7Z0JBRWpDLElBQUlELFVBQVU7b0JBQ1osSUFBTVcsaUJBQWlCLElBQUksQ0FBQ0QsaUJBQWlCO29CQUU3Q0ksa0JBQWtCLEFBQUMsR0FBbUJaLE9BQWpCUyxnQkFBMEIsT0FBVFQ7Z0JBQ3hDLE9BQU87b0JBQ0xZLGtCQUFrQlosVUFBVyxHQUFHO2dCQUNsQztnQkFFQSxPQUFPWTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0FwRTdJbkIsVUFvRXdKb0IsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBcEVwTXZCO0VBQWlCd0Isb0JBQWUifQ==