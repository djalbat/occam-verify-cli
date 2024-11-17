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
var _bracketted = /*#__PURE__*/ _interop_require_default(require("../../context/bracketted"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../context/partial/statement"));
var _metaTypeNames = require("../../metaTypeNames");
var _nominal = require("../../utilities/nominal");
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
                var string = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, statementPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), context = statementPartialContext, combinatorBracketedContext = _bracketted.default.fromString(CombinatorBracketedContext, string, context);
                return combinatorBracketedContext;
            }
        }
    ]);
    return CombinatorBracketedContext;
}(_bracketted.default);
var combinatorBracketedContext = CombinatorBracketedContext.fromNothing();
var _default = combinatorBracketedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXRlZC9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQnJhY2tldGVkQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9icmFja2V0dGVkXCI7XG5pbXBvcnQgU3RhdGVtZW50UGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jbGFzcyBDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCBleHRlbmRzIEJyYWNrZXRlZENvbnRleHQge1xuICBnZXRCcmFja2V0ZWRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBicmFja2V0ZWRTdGF0ZW1lbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCgke1NUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRX0pYCxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50UGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb250ZXh0ID0gc3RhdGVtZW50UGFydGlhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCA9IEJyYWNrZXRlZENvbnRleHQuZnJvbVN0cmluZyhDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCwgc3RyaW5nLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCA9IENvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCIsImdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJmcm9tTm90aGluZyIsInN0cmluZyIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsImxleGVyIiwibm9taW5hbExleGVyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsInN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJjb250ZXh0IiwiY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJCcmFja2V0ZWRDb250ZXh0IiwiZnJvbVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O2lFQTVCNkI7Z0VBQ087NkJBRUs7dUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMseUJBQXlCRixNQUFPLEdBQUc7Z0JBRXpDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsU0FBUyxBQUFDLElBQTRCLE9BQXpCQyx1Q0FBd0IsRUFBQyxNQUN0Q0MsUUFBUUMscUJBQVksRUFDcEJDLFNBQVNDLHNCQUFhLEVBQ3RCQywwQkFBMEJDLGtCQUF1QixDQUFDQyx3QkFBd0IsQ0FBQ1IsUUFBUUUsT0FBT0UsU0FDMUZLLFVBQVVILHlCQUNWSSw2QkFBNkJDLG1CQUFnQixDQUFDQyxVQUFVLENBZDVEbEIsNEJBY3lGTSxRQUFRUztnQkFFbkcsT0FBT0M7WUFDVDs7O1dBakJJaEI7RUFBbUNpQixtQkFBZ0I7QUFvQnpELElBQU1ELDZCQUE2QmhCLDJCQUEyQkssV0FBVztJQUV6RSxXQUFnQlcifQ==