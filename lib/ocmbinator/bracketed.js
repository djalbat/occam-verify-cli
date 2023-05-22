"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../node/statement/combinator/bracketed"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    var _super = _create_super(BracketedCombinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _super.apply(this, arguments);
    }
    _create_class(BracketedCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var statementNode = _bracketed.default, bracketedCombinator = new BracketedCombinator(statementNode);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);
var bracketedCombinator = BracketedCombinator.fromNothing();
var _default = bracketedCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIGZyb20gXCIuLi9ub2RlL3N0YXRlbWVudC9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuXG5jbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuXG5jb25zdCBicmFja2V0ZWRDb21iaW5hdG9yID0gQnJhY2tldGVkQ29tYmluYXRvci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBicmFja2V0ZWRDb21iaW5hdG9yO1xuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7aUVBZnVCO2dFQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLG9DQVNILEFBVEg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsZ0JBQWdCQyxvQkFDaEJDLHNCQUFzQixJQUgxQkosb0JBR2tERTtnQkFFcEQsT0FBT0U7WUFDVDs7O1dBTklKO0VBQTRCSztBQVNsQyxJQUFNRCxzQkFBc0JKLG9CQUFvQkM7SUFFaEQsV0FBZUcifQ==