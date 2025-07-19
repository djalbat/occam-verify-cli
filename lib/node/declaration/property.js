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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _node.default.fromRuleNameChildNodesAndOpacity(PropertyDeclarationNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return PropertyDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBpc05vZGVQcm9wZXJ0eU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmZyb21TZWNvbmRMYXN0Q2hpbGROb2RlKChzZWNvbmRMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IHNlY29uZExhc3RDaGlsZE5vZGU7OyAvLy9cblxuICAgICAgcmV0dXJuIHR5cGVOb2RlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOYW1lcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKHByb3BlcnR5TmFtZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUHJvcGVydHlOb2RlID0gaXNOb2RlUHJvcGVydHlOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eU5vZGUpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZXMucHVzaChwcm9wZXJ0eU5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydHlOYW1lcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTm9kZSIsInR5cGVOb2RlIiwiZnJvbVNlY29uZExhc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwiZ2V0UHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZXMiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQcm9wZXJ0eU5vZGUiLCJpc05vZGVQcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5hbWUiLCJnZXRQcm9wZXJ0eU5hbWUiLCJwdXNoIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7cUJBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLHVCQUF1QixDQUFDLFNBQUNDO29CQUM3QyxJQUFNRixXQUFXRTtzQkFBc0IsR0FBRztvQkFFMUMsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsZUFBZUU7b0JBQ3pELElBQU1DLHdCQUF3QkMsSUFBQUEseUJBQWtCLEVBQUNGO29CQUVqRCxJQUFJQyx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLGVBQWVELGFBQWFFLGVBQWU7d0JBRWpEUCxjQUFjUSxJQUFJLENBQUNGO29CQUNyQjtvQkFFQSxPQUFPTjtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsT0FBT0E7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0osZ0NBQWdDLENBNUJsR2YseUJBNEI0SGdCLFVBQVVDLFlBQVlDO1lBQVU7OztXQTVCNUpsQjtxQkFBZ0NtQixhQUFJIn0=