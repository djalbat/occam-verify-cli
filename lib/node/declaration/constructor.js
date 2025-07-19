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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _node.default.fromRuleNameChildNodesAndOpacity(ConstructorDeclarationNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ConstructorDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTExZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5mcm9tRm91cnRoQ2hpbGROb2RlKChmb3VydGhDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gZm91cnRoQ2hpbGROb2RlOyAvLy9cblxuICAgICAgcmV0dXJuIHR5cGVOb2RlO1xuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5mcm9tU2Vjb25kTGFzdENoaWxkTm9kZSgoc2Vjb25kTGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHNlY29uZExhc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChzZWNvbmRMYXN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsbHkgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUxMWSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbGx5KSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJnZXRUZXJtTm9kZSIsInRlcm1Ob2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZU5vZGUiLCJmcm9tRm91cnRoQ2hpbGROb2RlIiwiZm91cnRoQ2hpbGROb2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSIsIlBST1ZJU0lPTkFMTFkiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSjt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLG1CQUFtQixDQUFDLFNBQUNDO29CQUN6QyxJQUFNRixXQUFXRSxpQkFBaUIsR0FBRztvQkFFckMsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsU0FBQ0M7b0JBQ3pDLElBQU1GLFdBQVdFLGlCQUFpQixHQUFHO29CQUVyQyxPQUFPRjtnQkFDVCxNQUFNO2dCQUVOLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNDLHVCQUF1QixDQUFDLFNBQUNDO29CQUNoRCxJQUFJRixjQUFjO29CQUVsQixJQUFNRyxrQ0FBa0NELG9CQUFvQkUsY0FBYztvQkFFMUUsSUFBSUQsaUNBQWlDO3dCQUNuQyxJQUFNRSxlQUFlSCxxQkFDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MsdUJBQXdCRixZQUFZRyx3QkFBYTt3QkFFdkQsSUFBSUQsc0JBQXNCOzRCQUN4QlIsY0FBYzt3QkFDaEI7b0JBQ0Y7b0JBRUEsT0FBT0E7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0osZ0NBQWdDLENBM0NsR3BCLDRCQTJDK0hxQixVQUFVQyxZQUFZQztZQUFVOzs7V0EzQy9KdkI7cUJBQW1Dd0IsYUFBSSJ9