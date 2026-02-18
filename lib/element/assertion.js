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
    function Assertion() {
        _class_call_check(this, Assertion);
        return _call_super(this, Assertion, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgbWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlQSA9IGFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUIgPSBhc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzQXNzZXJ0aW9uQk5vZGVCID0gYXNzZXJ0aW9uTm9kZUEubWF0Y2goYXNzZXJ0aW9uTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzQXNzZXJ0aW9uQk5vZGVCOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNWYWxpZChjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZCA9IGFzc2VydGlvblByZXNlbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhhc3NlcnRpb24pIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlID0gYXNzZXJ0aW9uLmdldE5vZGUoKSxcbiAgICAgIGFzc2VydGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXNzZXJ0aW9uIiwiZ2V0QXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXNzZXJ0aW9uTm9kZSIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVBIiwiYXNzZXJ0aW9uTm9kZUIiLCJhc3NlcnRpb25Ob2RlQUFNYXRjaGVzQXNzZXJ0aW9uQk5vZGVCIiwibWF0Y2giLCJlcXVhbFRvIiwiaXNWYWxpZCIsImNvbnRleHQiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwidmFsaWQiLCJpc0VxdWFsVG8iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhCQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVCxJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGdCQUFnQkYsTUFBTSxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkQsYUFBYTtnQkFDOUIsSUFBTUUsaUJBQWlCRixlQUFlLEdBQUc7Z0JBRXpDQSxnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0I7Z0JBRXJDLElBQU1NLGlCQUFpQkgsZUFDakJJLHdDQUF3Q0YsZUFBZUcsS0FBSyxDQUFDRixpQkFDN0RHLFVBQVVGLHVDQUF1QyxHQUFHO2dCQUUxRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTVIsZ0JBQWdCLElBQUksQ0FBQ0gsZ0JBQWdCLElBQ3JDWSxtQkFBbUJELFFBQVFFLGlDQUFpQyxDQUFDVixnQkFDN0RXLFFBQVFGLGtCQUFtQixHQUFHO2dCQUVwQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFNBQVM7Z0JBQ2pCLElBQU1iLGdCQUFnQmEsVUFBVWQsT0FBTyxJQUNyQ2UsdUJBQXVCLElBQUksQ0FBQ2Isa0JBQWtCLENBQUNELGdCQUMvQ00sVUFBVVEsc0JBQXVCLEdBQUc7Z0JBRXRDLE9BQU9SO1lBQ1Q7OztXQWxDbUJWO3FCQUFrQm1CLHVCQUFPIn0=