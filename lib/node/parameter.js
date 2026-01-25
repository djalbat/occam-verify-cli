"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParameterNode;
    }
});
var _occamfurtle = require("occam-furtle");
var _tokenTypes = require("../tokenTypes");
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
var ParameterNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ParameterNode, NonTerminalNode);
    function ParameterNode() {
        _class_call_check(this, ParameterNode);
        return _call_super(this, ParameterNode, arguments);
    }
    _create_class(ParameterNode, [
        {
            key: "getName",
            value: function getName() {
                var name = null;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, type = terminalNode.getType();
                    if (type === _tokenTypes.NAME_TOKEN_TYPE) {
                        var content = terminalNode.getContent();
                        name = content; ///
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return name;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                var identifier = null;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, type = terminalNode.getType();
                    if (type === _tokenTypes.IDENTIFIER_TOKEN_TYPE) {
                        var content = terminalNode.getContent();
                        identifier = content; ///
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return identifier;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ParameterNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBOQU1FX1RPS0VOX1RZUEUsIElERU5USUZJRVJfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXROYW1lKCkge1xuICAgIGxldCBuYW1lID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gTkFNRV9UT0tFTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG5hbWUgPSBjb250ZW50OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICBsZXQgaWRlbnRpZmllciA9IG51bGw7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09IElERU5USUZJRVJfVE9LRU5fVFlQRSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBpZGVudGlmaWVyID0gY29udGVudDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUGFyYW1ldGVyTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUGFyYW1ldGVyTm9kZSIsImdldE5hbWUiLCJuYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidGVybWluYWxOb2RlIiwidHlwZSIsImdldFR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldElkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwiSURFTlRJRklFUl9UT0tFTl9UWVBFIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpXOzBCQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU87Z0JBRVgsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLGVBQWVGLFdBQ2ZHLE9BQU9ELGFBQWFFLE9BQU87b0JBRWpDLElBQUlELFNBQVNFLDJCQUFlLEVBQUU7d0JBQzVCLElBQU1DLFVBQVVKLGFBQWFLLFVBQVU7d0JBRXZDVCxPQUFPUSxTQUFVLEdBQUc7b0JBQ3RCO29CQUVBLElBQUlMLFVBQVUsR0FBRzt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYTtnQkFFakIsSUFBSSxDQUFDVixhQUFhLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLGVBQWVGLFdBQ2ZHLE9BQU9ELGFBQWFFLE9BQU87b0JBRWpDLElBQUlELFNBQVNPLGlDQUFxQixFQUFFO3dCQUNsQyxJQUFNSixVQUFVSixhQUFhSyxVQUFVO3dCQUV2Q0UsYUFBYUgsU0FBVSxHQUFHO29CQUM1QjtvQkFFQSxJQUFJTCxVQUFVLEdBQUc7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPUTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw0QkFBZSxDQUFDTCwwQ0FBMEMsQ0EzQzdJZixlQTJDNkpnQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0EzQ3pNbkI7RUFBc0JvQiw0QkFBZSJ9