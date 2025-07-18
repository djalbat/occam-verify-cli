"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyNode;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
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
var PropertyNode = /*#__PURE__*/ function(Node) {
    _inherits(PropertyNode, Node);
    function PropertyNode() {
        _class_call_check(this, PropertyNode);
        return _call_super(this, PropertyNode, arguments);
    }
    _create_class(PropertyNode, [
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                var propertyName = this.reduceChildNode(function(propertyName, firstChildNode) {
                    var nameTerminalNode = firstChildNode, content = nameTerminalNode.getContent();
                    propertyName = propertyName !== null ? "".concat(propertyName, " ").concat(content) : content; ///
                    return propertyName;
                }, null);
                return propertyName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _node.default.fromRuleNameChildNodesAndOpacity(PropertyNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return PropertyNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgZ2V0UHJvcGVydHlOYW1lKCkge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChwcm9wZXJ0eU5hbWUsIGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgcHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9wZXJ0eU5hbWV9ICR7Y29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShQcm9wZXJ0eU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlByb3BlcnR5Tm9kZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInJlZHVjZUNoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwibmFtZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsY0FBY0U7b0JBQ3ZELElBQU1DLG1CQUFtQkQsZ0JBQ25CRSxVQUFVRCxpQkFBaUJFLFVBQVU7b0JBRTNDTCxlQUFlLEFBQUNBLGlCQUFpQixPQUNoQixBQUFDLEdBQWtCSSxPQUFoQkosY0FBYSxLQUFXLE9BQVJJLFdBQ2hCQSxTQUFVLEdBQUc7b0JBRWpDLE9BQU9KO2dCQUNULEdBQUc7Z0JBRUgsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0osZ0NBQWdDLENBaEJsR1IsY0FnQmlIUyxVQUFVQyxZQUFZQztZQUFVOzs7V0FoQmpKWDtxQkFBcUJZLGFBQUkifQ==