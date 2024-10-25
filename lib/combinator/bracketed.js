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
var _statement = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/statement"));
var _metaTypeNames = require("../metaTypeNames");
var _nominal = require("../utilities/nominal");
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
var getLexer = function() {
    var lexer = _nominal.nominalLexer; ///
    return lexer;
}, getParser = function() {
    var parser = _nominal.nominalParser; ///
    return parser;
}, nodeAsTokens = function(node) {
    var tokens = statementTokens; ///
    return tokens;
}, nodeAsString = function(node) {
    var string = statementString; ///
    return string;
}, tokensAsString = function(tokens) {
    var string = statementNode; ///
    return string;
}, context = {
    getLexer: getLexer,
    getParser: getParser,
    nodeAsTokens: nodeAsTokens,
    nodeAsString: nodeAsString,
    tokensAsString: tokensAsString
}, statementString = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), statementNodeAndTokens = _statement.default.fromStatementString(statementString, context), statementTokens = statementNodeAndTokens.getStatementTokens(), statementNode = statementNodeAndTokens.getStatementNode();
var bracketedStatementNode = statementNode; ///
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
                var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgU3RhdGVtZW50Tm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jb25zdCBnZXRMZXhlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGV4ZXIgPSBub21pbmFsTGV4ZXI7IC8vL1xuXG4gICAgICAgIHJldHVybiBsZXhlcjtcbiAgICAgIH0sXG4gICAgICBnZXRQYXJzZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5vbWluYWxQYXJzZXI7IC8vL1xuXG4gICAgICAgIHJldHVybiBwYXJzZXI7XG4gICAgICB9LFxuICAgICAgbm9kZUFzVG9rZW5zID0gKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zOyAvLy9cblxuICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgfSxcbiAgICAgIG5vZGVBc1N0cmluZyA9IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgIC8vL1xuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICB9LFxuICAgICAgdG9rZW5zQXNTdHJpbmcgPSAodG9rZW5zKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfSxcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGdldExleGVyLFxuICAgICAgICBnZXRQYXJzZXIsXG4gICAgICAgIG5vZGVBc1Rva2VucyxcbiAgICAgICAgbm9kZUFzU3RyaW5nLFxuICAgICAgICB0b2tlbnNBc1N0cmluZ1xuICAgICAgfSxcbiAgICAgIHN0YXRlbWVudFN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWAsXG4gICAgICBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zID0gU3RhdGVtZW50Tm9kZUFuZFRva2Vucy5mcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgY29udGV4dCksXG4gICAgICBzdGF0ZW1lbnRUb2tlbnMgPSBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmdldFN0YXRlbWVudFRva2VucygpLFxuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVBbmRUb2tlbnMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBuZXcgQnJhY2tldGVkQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJicmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwiQnJhY2tldGVkQ29tYmluYXRvciIsImdldExleGVyIiwibGV4ZXIiLCJub21pbmFsTGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJub21pbmFsUGFyc2VyIiwibm9kZUFzVG9rZW5zIiwibm9kZSIsInRva2VucyIsInN0YXRlbWVudFRva2VucyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnROb2RlQW5kVG9rZW5zIiwiU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsImZyb21TdGF0ZW1lbnRTdHJpbmciLCJnZXRTdGF0ZW1lbnRUb2tlbnMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZnJvbU5vdGhpbmciLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBOENhQSxzQkFBc0I7ZUFBdEJBOzs7ZUFFUUM7OzsyREE5Q0o7aUVBQ007Z0VBQ1k7NkJBRU07dUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTUMsV0FBVztJQUNULElBQU1DLFFBQVFDLHFCQUFZLEVBQUUsR0FBRztJQUUvQixPQUFPRDtBQUNULEdBQ0FFLFlBQVk7SUFDVixJQUFNQyxTQUFTQyxzQkFBYSxFQUFFLEdBQUc7SUFFakMsT0FBT0Q7QUFDVCxHQUNBRSxlQUFlLFNBQUNDO0lBQ2QsSUFBTUMsU0FBU0MsaUJBQWlCLEdBQUc7SUFFbkMsT0FBT0Q7QUFDVCxHQUNBRSxlQUFlLFNBQUNIO0lBQ2QsSUFBTUksU0FBU0MsaUJBQWtCLEdBQUc7SUFFcEMsT0FBT0Q7QUFDVCxHQUNBRSxpQkFBaUIsU0FBQ0w7SUFDaEIsSUFBTUcsU0FBU0csZUFBZ0IsR0FBRztJQUVsQyxPQUFPSDtBQUNULEdBQ0FJLFVBQVU7SUFDUmYsVUFBQUE7SUFDQUcsV0FBQUE7SUFDQUcsY0FBQUE7SUFDQUksY0FBQUE7SUFDQUcsZ0JBQUFBO0FBQ0YsR0FDQUQsa0JBQWtCLEFBQUMsSUFBNEIsT0FBekJJLHVDQUF3QixFQUFDLE1BQy9DQyx5QkFBeUJDLGtCQUFzQixDQUFDQyxtQkFBbUIsQ0FBQ1AsaUJBQWlCRyxVQUNyRk4sa0JBQWtCUSx1QkFBdUJHLGtCQUFrQixJQUMzRE4sZ0JBQWdCRyx1QkFBdUJJLGdCQUFnQjtBQUV0RCxJQUFNdkIseUJBQXlCZ0IsZUFBZ0IsR0FBRztBQUUxQyxJQUFBLEFBQU1mLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWnVCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsWUFBWUYsVUFBVUcsaUJBQWlCLENBQUNaLGVBQWVDLFVBQ3ZEWSxzQkFBc0IsSUFKWDVCLG9CQUltQzBCO2dCQUVwRCxPQUFPRTtZQUNUOzs7V0FQbUI1QjtFQUE0QjZCLG1CQUFVIn0=