"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bracketedStatementNode: function() {
        return bracketedStatementNode;
    },
    default: function() {
        return BracketedCombinator;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/combinator"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var combinatorBracketedContext = _combinator1.default.fromNothing();
var bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode(); ///
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _shim.default.Statement, statementNode = bracketedStatementNode, context = combinatorBracketedContext, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhY2tldGVkL2NvbWJpbmF0b3JcIjtcblxuY29uc3QgY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgPSBDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUoKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0QnJhY2tldGVkU3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNoaW0iLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFhQSxzQkFBc0I7ZUFBdEJBOzs7ZUFFUUM7OzsyREFSSjtpRUFDTTtrRUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTUMsNkJBQTZCQyxvQkFBMEIsQ0FBQ0MsV0FBVztBQUVsRSxJQUFNSix5QkFBeUJFLDJCQUEyQkcseUJBQXlCLElBQUssR0FBRztBQUVuRixJQUFBLEFBQU1KLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFRSxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxnQkFBZ0JSLHdCQUNoQlMsVUFBVVAsNEJBQ1ZRLFlBQVlKLFVBQVVLLGlCQUFpQixDQUFDSCxlQUFlQyxVQUN2REcsc0JBQXNCLElBTlhYLG9CQU1tQ1M7Z0JBRXBELE9BQU9FO1lBQ1Q7OztXQVRtQlg7RUFBNEJZLG1CQUFVIn0=