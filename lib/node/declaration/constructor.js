"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConstructorDeclarationNode;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../../node"));
var _constants = require("../../constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ConstructorDeclarationNode = /*#__PURE__*/ function(Node) {
    _inherits(ConstructorDeclarationNode, Node);
    function ConstructorDeclarationNode() {
        _class_call_check(this, ConstructorDeclarationNode);
        return _call_super(this, ConstructorDeclarationNode, arguments);
    }
    _create_class(ConstructorDeclarationNode, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var termNode = this.fromSecondChildNode(function(secondChildNode) {
                    var termNode = secondChildNode; ///
                    return termNode;
                });
                return termNode;
            }
        },
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode = this.fromFourthChildNode(function(fourthChildNode) {
                    var typeNode = fourthChildNode; ///
                    return typeNode;
                }) || null;
                return typeNode;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                var provisional = this.fromSecondLastChildNode(function(secondLastChildNode) {
                    var provisional = false;
                    var secondLastChildNodeTerminalNode = secondLastChildNode.isTerminalNode();
                    if (secondLastChildNodeTerminalNode) {
                        var terminalNode = secondLastChildNode, content = terminalNode.getContent(), contentProvisionally = content === _constants.PROVISIONALLY;
                        if (contentProvisionally) {
                            provisional = true;
                        }
                    }
                    return provisional;
                });
                return provisional;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _node.default.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ConstructorDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTExZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5mcm9tRm91cnRoQ2hpbGROb2RlKChmb3VydGhDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gZm91cnRoQ2hpbGROb2RlOyAvLy9cblxuICAgICAgcmV0dXJuIHR5cGVOb2RlO1xuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHNlY29uZExhc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChzZWNvbmRMYXN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsbHkgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUxMWSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbGx5KSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImdldFRlcm1Ob2RlIiwidGVybU5vZGUiLCJmcm9tU2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kQ2hpbGROb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlTm9kZSIsImZyb21Gb3VydGhDaGlsZE5vZGUiLCJmb3VydGhDaGlsZE5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRQcm92aXNpb25hbGx5IiwiUFJPVklTSU9OQUxMWSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7eUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDekMsSUFBTUYsV0FBV0UsaUJBQWlCLEdBQUc7b0JBRXJDLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLG1CQUFtQixDQUFDLFNBQUNDO29CQUN6QyxJQUFNRixXQUFXRSxpQkFBaUIsR0FBRztvQkFFckMsT0FBT0Y7Z0JBQ1QsTUFBTTtnQkFFTixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxTQUFDQztvQkFDaEQsSUFBSUYsY0FBYztvQkFFbEIsSUFBTUcsa0NBQWtDRCxvQkFBb0JFLGNBQWM7b0JBRTFFLElBQUlELGlDQUFpQzt3QkFDbkMsSUFBTUUsZUFBZUgscUJBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHVCQUF3QkYsWUFBWUcsd0JBQWE7d0JBRXZELElBQUlELHNCQUFzQjs0QkFDeEJSLGNBQWM7d0JBQ2hCO29CQUNGO29CQUVBLE9BQU9BO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0wsMENBQTBDLENBM0NsSXBCLDRCQTJDK0pxQixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0EzQzNNeEI7cUJBQW1DeUIsYUFBSSJ9