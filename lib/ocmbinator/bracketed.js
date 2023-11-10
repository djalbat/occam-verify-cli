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
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/statement/combinator/bracketed"));
var _string = require("../utilities/string");
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
                var node = _bracketed.default, tokens = _bracketed1.default, string = (0, _string.nodeAsString)(node, tokens), statementNode = node, bracketedCombinator = new BracketedCombinator(statementNode, string);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);
var bracketedCombinator = BracketedCombinator.fromNothing();
var _default = bracketedCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvY29tYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB1bnF1YWxpZmllZEJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRUb2tlbnMgZnJvbSBcIi4uL3Rva2Vucy9zdGF0ZW1lbnQvY29tYmluYXRvci9icmFja2V0ZWRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdW5xdWFsaWZpZWRCcmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50VG9rZW5zLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuXG5jb25zdCBicmFja2V0ZWRDb21iaW5hdG9yID0gQnJhY2tldGVkQ29tYmluYXRvci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBicmFja2V0ZWRDb21iaW5hdG9yO1xuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsIm5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInRva2VucyIsInVucXVhbGlmaWVkQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O2lFQXBCdUI7Z0VBQ3NCO2lFQUNhO3NCQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLG9DQVlILEFBWkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0Msa0JBQWdDLEVBQ3ZDQyxTQUFTQyxtQkFBNkMsRUFDdERDLFNBQVNDLElBQUFBLG9CQUFZLEVBQUNMLE1BQU1FLFNBQzVCSSxnQkFBZ0JOLE1BQ2hCTyxzQkFBc0IsSUFOMUJULG9CQU1rRFEsZUFBZUY7Z0JBRW5FLE9BQU9HO1lBQ1Q7OztXQVRJVDtFQUE0QlUsbUJBQVU7QUFZNUMsSUFBTUQsc0JBQXNCVCxvQkFBb0JDLFdBQVc7SUFFM0QsV0FBZVEifQ==