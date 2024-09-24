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
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/combinatorStatement/bracketed"));
var _string = require("../utilities/string");
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
                var node = _bracketed.default, tokens = _bracketed1.default, string = (0, _string.nodeAsString)(node, tokens), statementNode = node, bracketedCombinator = new BracketedCombinator(statementNode, string);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);
var bracketedCombinator = BracketedCombinator.fromNothing();
var _default = bracketedCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvY29tYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50VG9rZW5zIGZyb20gXCIuLi90b2tlbnMvY29tYmluYXRvclN0YXRlbWVudC9icmFja2V0ZWRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFRva2VucywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBuZXcgQnJhY2tldGVkQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG4gIH1cbn1cblxuY29uc3QgYnJhY2tldGVkQ29tYmluYXRvciA9IEJyYWNrZXRlZENvbWJpbmF0b3IuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgYnJhY2tldGVkQ29tYmluYXRvcjtcbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb21iaW5hdG9yIiwiZnJvbU5vdGhpbmciLCJub2RlIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJ0b2tlbnMiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50VG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7aUVBcEJ1QjtnRUFDc0I7aUVBQ0U7c0JBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQkFBZ0MsRUFDdkNDLFNBQVNDLG1CQUFrQyxFQUMzQ0MsU0FBU0MsSUFBQUEsb0JBQVksRUFBQ0wsTUFBTUUsU0FDNUJJLGdCQUFnQk4sTUFDaEJPLHNCQUFzQixJQU4xQlQsb0JBTWtEUSxlQUFlRjtnQkFFbkUsT0FBT0c7WUFDVDs7O1dBVElUO0VBQTRCVSxtQkFBVTtBQVk1QyxJQUFNRCxzQkFBc0JULG9CQUFvQkMsV0FBVztJQUUzRCxXQUFlUSJ9