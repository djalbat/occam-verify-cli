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
var _bracketed1 = /*#__PURE__*/ _interop_require_default(require("../tokens/unqualifiedStatement/combinator/bracketed"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvY29tYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgZnJvbSBcIi4uL3Rva2Vucy91bnF1YWxpZmllZFN0YXRlbWVudC9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBub2RlID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBicmFja2V0ZWRDb21iaW5hdG9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgc3RyaW5nKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xuICB9XG59XG5cbmNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3IgPSBCcmFja2V0ZWRDb21iaW5hdG9yLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyYWNrZXRlZENvbWJpbmF0b3I7XG4iXSwibmFtZXMiOlsiQnJhY2tldGVkQ29tYmluYXRvciIsImZyb21Ob3RoaW5nIiwibm9kZSIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwidG9rZW5zIiwiYnJhY2tldGVkQ29tYmluYXRvclVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7aUVBcEJ1QjtnRUFDc0I7aUVBQ2E7c0JBRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxPQUFPQyxrQkFBZ0MsRUFDdkNDLFNBQVNDLG1CQUE2QyxFQUN0REMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQ0wsTUFBTUUsU0FDNUJJLGdCQUFnQk4sTUFDaEJPLHNCQUFzQixJQU4xQlQsb0JBTWtEUSxlQUFlRjtnQkFFbkUsT0FBT0c7WUFDVDs7O1dBVElUO0VBQTRCVSxtQkFBVTtBQVk1QyxJQUFNRCxzQkFBc0JULG9CQUFvQkMsV0FBVztJQUUzRCxXQUFlUSJ9