"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinatorBracketedContext;
    }
});
var _bracketted = /*#__PURE__*/ _interop_require_default(require("../../context/bracketted"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../nodeAndTokens/statement"));
var _metaTypeNames = require("../../metaTypeNames");
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
var CombinatorBracketedContext = /*#__PURE__*/ function(BracketedContext) {
    _inherits(CombinatorBracketedContext, BracketedContext);
    function CombinatorBracketedContext() {
        _class_call_check(this, CombinatorBracketedContext);
        return _call_super(this, CombinatorBracketedContext, arguments);
    }
    _create_class(CombinatorBracketedContext, [
        {
            key: "getBracketedStatementNode",
            value: function getBracketedStatementNode() {
                var node = this.getNode(), bracketedStatementNode = node; ///
                return bracketedStatementNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), NodeAndTokens = _statement.default, combinatorBracketedContext = _bracketted.default.fromStringAndNodeAndTokens(CombinatorBracketedContext, string, NodeAndTokens);
                return combinatorBracketedContext;
            }
        }
    ]);
    return CombinatorBracketedContext;
}(_bracketted.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXRlZC9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQnJhY2tldGVkQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9icmFja2V0dGVkXCI7XG5pbXBvcnQgU3RhdGVtZW50Tm9kZUFuZFRva2VucyBmcm9tIFwiLi4vLi4vbm9kZUFuZFRva2Vucy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgZXh0ZW5kcyBCcmFja2V0ZWRDb250ZXh0IHtcbiAgZ2V0QnJhY2tldGVkU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWAsXG4gICAgICAgICAgTm9kZUFuZFRva2VucyA9IFN0YXRlbWVudE5vZGVBbmRUb2tlbnMsXG4gICAgICAgICAgY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgPSBCcmFja2V0ZWRDb250ZXh0LmZyb21TdHJpbmdBbmROb2RlQW5kVG9rZW5zKENvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LCBzdHJpbmcsIE5vZGVBbmRUb2tlbnMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJnZXRCcmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJOb2RlQW5kVG9rZW5zIiwiU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsImNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0IiwiQnJhY2tldGVkQ29udGV4dCIsImZyb21TdHJpbmdBbmROb2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztpRUFMUTtnRUFDTTs2QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMseUJBQXlCRixNQUFPLEdBQUc7Z0JBRXpDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsU0FBUyxBQUFDLElBQTRCLE9BQXpCQyx1Q0FBd0IsRUFBQyxNQUN0Q0MsZ0JBQWdCQyxrQkFBc0IsRUFDdENDLDZCQUE2QkMsbUJBQWdCLENBQUNDLDBCQUEwQixDQVg3RFosNEJBVzBGTSxRQUFRRTtnQkFFbkgsT0FBT0U7WUFDVDs7O1dBZG1CVjtFQUFtQ1csbUJBQWdCIn0=