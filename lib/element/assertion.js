"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
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
var Assertion = /*#__PURE__*/ function(Element) {
    _inherits(Assertion, Element);
    function Assertion(context, string, node) {
        _class_call_check(this, Assertion);
        return _call_super(this, Assertion, [
            context,
            string,
            node
        ]);
    }
    _create_class(Assertion, [
        {
            key: "getAssertionNode",
            value: function getAssertionNode() {
                var node = this.getNode(), assertionNode = node; ///
                return assertionNode;
            }
        },
        {
            key: "matchAssertionNode",
            value: function matchAssertionNode(assertionNode) {
                var assertionNodeA = assertionNode; ///
                assertionNode = this.getAssertionNode();
                var assertionNodeB = assertionNode, assertionNodeAAMatchesAssertionBNodeB = assertionNodeA.match(assertionNodeB), equalTo = assertionNodeAAMatchesAssertionBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "isValid",
            value: function isValid(context) {
                var assertionNode = this.getAssertionNode(), assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode), valid = assertionPresent; ///
                return valid;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(assertion) {
                var assertionNode = assertion.getNode(), assertionNodeMatches = this.matchAssertionNode(assertionNode), equalTo = assertionNodeMatches; ///
                return equalTo;
            }
        }
    ]);
    return Assertion;
}(_wrap_native_super(_occamlanguages.Element));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gIH1cblxuICBnZXRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIG1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUEgPSBhc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgIGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5vZGVCID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc0Fzc2VydGlvbkJOb2RlQiA9IGFzc2VydGlvbk5vZGVBLm1hdGNoKGFzc2VydGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc0Fzc2VydGlvbkJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWQgPSBhc3NlcnRpb25QcmVzZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBpc0VxdWFsVG8oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5nZXROb2RlKCksXG4gICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgZXF1YWxUbyA9IGFzc2VydGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZ2V0QXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJhc3NlcnRpb25Ob2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZUEiLCJhc3NlcnRpb25Ob2RlQiIsImFzc2VydGlvbk5vZGVBQU1hdGNoZXNBc3NlcnRpb25CTm9kZUIiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1ZhbGlkIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsInZhbGlkIiwiaXNFcXVhbFRvIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4QkFGRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQSxVQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEZEg7UUFFakIsT0FBQSxrQkFGaUJBO1lBRVhDO1lBQVNDO1lBQVFDOzs7a0JBRk5IOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELE9BQU8sSUFBSSxDQUFDRSxPQUFPLElBQ25CQyxnQkFBZ0JILE1BQU0sR0FBRztnQkFFL0IsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJELGFBQWE7Z0JBQzlCLElBQU1FLGlCQUFpQkYsZUFBZSxHQUFHO2dCQUV6Q0EsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCO2dCQUVyQyxJQUFNSyxpQkFBaUJILGVBQ2pCSSx3Q0FBd0NGLGVBQWVHLEtBQUssQ0FBQ0YsaUJBQzdERyxVQUFVRix1Q0FBdUMsR0FBRztnQkFFMUQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRWixPQUFPO2dCQUNiLElBQU1LLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ1UsbUJBQW1CYixRQUFRYyxpQ0FBaUMsQ0FBQ1QsZ0JBQzdEVSxRQUFRRixrQkFBbUIsR0FBRztnQkFFcEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTO2dCQUNqQixJQUFNWixnQkFBZ0JZLFVBQVViLE9BQU8sSUFDckNjLHVCQUF1QixJQUFJLENBQUNaLGtCQUFrQixDQUFDRCxnQkFDL0NNLFVBQVVPLHNCQUF1QixHQUFHO2dCQUV0QyxPQUFPUDtZQUNUOzs7V0F0Q21CWjtxQkFBa0JvQix1QkFBTyJ9