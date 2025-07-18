"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableDeclarationNode;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../../node"));
var _constants = require("../../constants");
var _node1 = require("../../utilities/node");
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
var VariableDeclarationNode = /*#__PURE__*/ function(Node) {
    _inherits(VariableDeclarationNode, Node);
    function VariableDeclarationNode() {
        _class_call_check(this, VariableDeclarationNode);
        return _call_super(this, VariableDeclarationNode, arguments);
    }
    _create_class(VariableDeclarationNode, [
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode;
                this.someChildNode(function(childNode) {
                    var childNodeTypeNode = (0, _node1.isNodeTypeNode)(childNode);
                    if (childNodeTypeNode) {
                        typeNode = childNode; ///
                        return true;
                    }
                });
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
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var variableNode;
                this.someChildNode(function(childNode) {
                    var childNodeVariableNode = (0, _node1.isNodeVariableNode)(childNode);
                    if (childNodeVariableNode) {
                        variableNode = childNode; ///
                        return true;
                    }
                });
                return variableNode;
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName() {
                var variableNode = this.getVariableNode(), variableName = variableNode.getVariableName();
                return variableName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _node.default.fromRuleNameChildNodesAndOpacity(VariableDeclarationNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return VariableDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTExZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNOb2RlVHlwZU5vZGUsIGlzTm9kZVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBsZXQgdHlwZU5vZGU7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZU5vZGUgPSBpc05vZGVUeXBlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZU5vZGUpIHtcbiAgICAgICAgdHlwZU5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuZnJvbVNlY29uZExhc3RDaGlsZE5vZGUoKHNlY29uZExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzZWNvbmRMYXN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gc2Vjb25kTGFzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoc2Vjb25kTGFzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRQcm92aXNpb25hbGx5ID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMTFkpO1xuXG4gICAgICAgIGlmIChjb250ZW50UHJvdmlzaW9uYWxseSkge1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVWYXJpYWJsZU5vZGUgPSBpc05vZGVWYXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVZhcmlhYmxlTm9kZSkge1xuICAgICAgICB2YXJpYWJsZU5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlTm9kZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUeXBlTm9kZSIsImlzTm9kZVR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwic2Vjb25kTGFzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSIsIlBST1ZJU0lPTkFMTFkiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJjaGlsZE5vZGVWYXJpYWJsZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjt5QkFFYTtxQkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsb0JBQW9CQyxJQUFBQSxxQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQkgsV0FBV0UsV0FBVyxHQUFHO3dCQUV6QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNDLHVCQUF1QixDQUFDLFNBQUNDO29CQUNoRCxJQUFJRixjQUFjO29CQUVsQixJQUFNRyxrQ0FBa0NELG9CQUFvQkUsY0FBYztvQkFFMUUsSUFBSUQsaUNBQWlDO3dCQUNuQyxJQUFNRSxlQUFlSCxxQkFDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MsdUJBQXdCRixZQUFZRyx3QkFBYTt3QkFFdkQsSUFBSUQsc0JBQXNCOzRCQUN4QlIsY0FBYzt3QkFDaEI7b0JBQ0Y7b0JBRUEsT0FBT0E7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLENBQUNoQixhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1nQix3QkFBd0JDLElBQUFBLHlCQUFrQixFQUFDakI7b0JBRWpELElBQUlnQix1QkFBdUI7d0JBQ3pCRCxlQUFlZixXQUFXLEdBQUc7d0JBRTdCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT2U7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxlQUFlLElBQUksQ0FBQ0QsZUFBZSxJQUNuQ0ssZUFBZUosYUFBYUcsZUFBZTtnQkFFakQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0osZ0NBQWdDLENBOURsR3hCLHlCQThENEh5QixVQUFVQyxZQUFZQztZQUFVOzs7V0E5RDVKM0I7cUJBQWdDNEIsYUFBSSJ9