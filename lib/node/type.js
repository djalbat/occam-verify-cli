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
var _occamlanguages = require("occam-languages");
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
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgcHJlZml4ZWQgPSAobXVsdGlwbGljaXR5ID4gMSk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5hbWVJbmRleCA9IHByZWZpeGVkID8gMiA6IDA7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gbmFtZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdHlwZU5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOYW1lKCkge1xuICAgIGxldCB0eXBlUHJlZml4TmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhJbmRleCA9IDA7XG5cbiAgICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IHByZWZpeEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgbGV0IG5vbWluYWxUeXBlTmFtZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgICBub21pbmFsVHlwZU5hbWUgPSBgJHt0eXBlUHJlZml4TmFtZX0ke3R5cGVOYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOYW1lOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlR5cGVOb2RlIiwiaXNQcmVmaXhlZCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInByZWZpeGVkIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVJbmRleCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJwcmVmaXhJbmRleCIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4QkFGVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxXQUFZRixlQUFlO2dCQUVqQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1GLFdBQVcsSUFBSSxDQUFDSCxVQUFVLElBQzFCTSxZQUFZSCxXQUFXLElBQUk7Z0JBRWpDLElBQUksQ0FBQ0ksYUFBYSxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFJQSxVQUFVSCxXQUFXO3dCQUN2QixJQUFNSSxtQkFBbUJGLFdBQ25CRyxVQUFVRCxpQkFBaUJFLFVBQVU7d0JBRTNDUCxXQUFXTSxTQUFTLEdBQUc7d0JBRXZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxpQkFBaUI7Z0JBRXJCLElBQU1YLFdBQVcsSUFBSSxDQUFDSCxVQUFVO2dCQUVoQyxJQUFJRyxVQUFVO29CQUNaLElBQU1ZLGNBQWM7b0JBRXBCLElBQUksQ0FBQ1IsYUFBYSxDQUFDLFNBQUNDLFdBQVdDO3dCQUM3QixJQUFJQSxVQUFVTSxhQUFhOzRCQUN6QixJQUFNTCxtQkFBbUJGLFdBQ25CRyxVQUFVRCxpQkFBaUJFLFVBQVU7NEJBRTNDRSxpQkFBaUJILFNBQVMsR0FBRzs0QkFFN0IsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1kLFdBQVcsSUFBSSxDQUFDSCxVQUFVLElBQzFCSyxXQUFXLElBQUksQ0FBQ0QsV0FBVztnQkFFakMsSUFBSUQsVUFBVTtvQkFDWixJQUFNVyxpQkFBaUIsSUFBSSxDQUFDRCxpQkFBaUI7b0JBRTdDSSxrQkFBa0IsQUFBQyxHQUFtQlosT0FBakJTLGdCQUEwQixPQUFUVDtnQkFDeEMsT0FBTztvQkFDTFksa0JBQWtCWixVQUFXLEdBQUc7Z0JBQ2xDO2dCQUVBLE9BQU9ZO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLCtCQUFlLENBQUNMLDBDQUEwQyxDQXBFN0luQixVQW9Fd0pvQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0FwRXBNdkI7RUFBaUJ3QiwrQkFBZSJ9