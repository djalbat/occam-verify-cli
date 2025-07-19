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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBpc05vZGVUeXBlTm9kZSwgaXNOb2RlVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9kZSB7XG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGxldCB0eXBlTm9kZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlTm9kZSA9IGlzTm9kZVR5cGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlTm9kZSkge1xuICAgICAgICB0eXBlTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVWYXJpYWJsZU5vZGUgPSBpc05vZGVWYXJpYWJsZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVZhcmlhYmxlTm9kZSkge1xuICAgICAgICB2YXJpYWJsZU5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlTm9kZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUeXBlTm9kZSIsImlzTm9kZVR5cGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiY2hpbGROb2RlVmFyaWFibGVOb2RlIiwiaXNOb2RlVmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7cUJBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLG9CQUFvQkMsSUFBQUEscUJBQWMsRUFBQ0Y7b0JBRXpDLElBQUlDLG1CQUFtQjt3QkFDckJILFdBQVdFLFdBQVcsR0FBRzt3QkFFekIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksQ0FBQ0wsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNSyx3QkFBd0JDLElBQUFBLHlCQUFrQixFQUFDTjtvQkFFakQsSUFBSUssdUJBQXVCO3dCQUN6QkQsZUFBZUosV0FBVyxHQUFHO3dCQUU3QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsZUFBZSxJQUFJLENBQUNELGVBQWUsSUFDbkNLLGVBQWVKLGFBQWFHLGVBQWU7Z0JBRWpELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxhQUFJLENBQUNKLGdDQUFnQyxDQXhDbEdiLHlCQXdDNEhjLFVBQVVDLFlBQVlDO1lBQVU7OztXQXhDNUpoQjtxQkFBZ0NpQixhQUFJIn0=