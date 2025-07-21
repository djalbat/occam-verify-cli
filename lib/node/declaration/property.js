"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyDeclarationNode;
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
var PropertyDeclarationNode = /*#__PURE__*/ function(Node) {
    _inherits(PropertyDeclarationNode, Node);
    function PropertyDeclarationNode() {
        _class_call_check(this, PropertyDeclarationNode);
        return _call_super(this, PropertyDeclarationNode, arguments);
    }
    _create_class(PropertyDeclarationNode, [
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode = this.fromSecondLastChildNode(function(secondLastChildNode) {
                    var typeNode = secondLastChildNode;
                    ; ///
                    return typeNode;
                });
                return typeNode;
            }
        },
        {
            key: "getPropertyNames",
            value: function getPropertyNames() {
                var propertyNames = this.reduceChildNode(function(propertyNames, childNode) {
                    var childNodePropertyNode = (0, _node1.isNodePropertyNode)(childNode);
                    if (childNodePropertyNode) {
                        var propertyNode = childNode, propertyName = propertyNode.getPropertyName();
                        propertyNames.push(propertyName);
                    }
                    return propertyNames;
                }, []);
                return propertyNames;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _node.default.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PropertyDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBpc05vZGVQcm9wZXJ0eU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKChzZWNvbmRMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7OyAvLy9cblxuICAgICAgcmV0dXJuIHR5cGVOb2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOYW1lcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKHByb3BlcnR5TmFtZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUHJvcGVydHlOb2RlID0gaXNOb2RlUHJvcGVydHlOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eU5vZGUpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZXMucHVzaChwcm9wZXJ0eU5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydHlOYW1lcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZU5vZGUiLCJmcm9tU2Vjb25kTGFzdENoaWxkTm9kZSIsInNlY29uZExhc3RDaGlsZE5vZGUiLCJnZXRQcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lcyIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVByb3BlcnR5Tm9kZSIsImlzTm9kZVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5TmFtZSIsInB1c2giLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpKO3FCQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxTQUFDQztvQkFDN0MsSUFBTUYsV0FBV0U7c0JBQXNCLEdBQUc7b0JBRTFDLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNELGVBQWVFO29CQUN6RCxJQUFNQyx3QkFBd0JDLElBQUFBLHlCQUFrQixFQUFDRjtvQkFFakQsSUFBSUMsdUJBQXVCO3dCQUN6QixJQUFNRSxlQUFlSCxXQUNmSSxlQUFlRCxhQUFhRSxlQUFlO3dCQUVqRFAsY0FBY1EsSUFBSSxDQUFDRjtvQkFDckI7b0JBRUEsT0FBT047Z0JBQ1QsR0FBRyxFQUFFO2dCQUVMLE9BQU9BO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0wsMENBQTBDLENBNUJsSWYseUJBNEI0SmdCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQTVCeE1uQjtxQkFBZ0NvQixhQUFJIn0=