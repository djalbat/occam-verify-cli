"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiteralContext;
    }
});
var _occamlanguages = require("occam-languages");
var _occamnominal = require("occam-nominal");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
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
var nominalLexerFromNothing = _occamnominal.lexersUtilities.nominalLexerFromNothing, nominalParserFromNothing = _occamnominal.parsersUtilities.nominalParserFromNothing, nodeAsString = _occamlanguages.nodeUtilities.nodeAsString, nodesAsString = _occamlanguages.nodeUtilities.nodesAsString;
var nominalLexer = nominalLexerFromNothing(_lexer.default), nominalParser = nominalParserFromNothing(_parser.default);
var LiteralContext = /*#__PURE__*/ function(Context) {
    _inherits(LiteralContext, Context);
    function LiteralContext(context, lexer, parser, tokens) {
        _class_call_check(this, LiteralContext);
        var _this;
        _this = _call_super(this, LiteralContext, [
            context
        ]);
        _this.lexer = lexer;
        _this.parser = parser;
        _this.tokens = tokens;
        return _this;
    }
    _create_class(LiteralContext, [
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "setLexer",
            value: function setLexer(lexer) {
                this.lexer = lexer;
            }
        },
        {
            key: "setParser",
            value: function setParser(parser) {
                this.parser = parser;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString1(nodes) {
                var string = nodesAsString(nodes, this.tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var context = null, lexer = nominalLexer, parser = nominalParser, tokens = null, literalContext = new LiteralContext(context, lexer, parser, tokens);
                return literalContext;
            }
        }
    ]);
    return LiteralContext;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQsIG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuY29uc3QgeyBub21pbmFsTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3Qgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbU5vdGhpbmcoTm9taW5hbExleGVyKSxcbiAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcoTm9taW5hbFBhcnNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdGVyYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGxleGVyLCBwYXJzZXIsIHRva2Vucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGxpdGVyYWxDb250ZXh0ID0gbmV3IExpdGVyYWxDb250ZXh0KGNvbnRleHQsIGxleGVyLCBwYXJzZXIsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gbGl0ZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaXRlcmFsQ29udGV4dCIsIm5vbWluYWxMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsIm5vZGVBc1N0cmluZyIsIm5vZGVVdGlsaXRpZXMiLCJub2Rlc0FzU3RyaW5nIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJjb250ZXh0IiwibGV4ZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRva2VucyIsInNldExleGVyIiwic2V0UGFyc2VyIiwic2V0VG9rZW5zIiwibm9kZSIsInN0cmluZyIsIm5vZGVzIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzhCQWJrQjs0QkFDVzs0REFFekI7NkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQywwQkFBNEJDLDZCQUFlLENBQTNDRCx5QkFDRixBQUFFRSwyQkFBNkJDLDhCQUFnQixDQUE3Q0QsMEJBQ0FFLGVBQWdDQyw2QkFBYSxDQUE3Q0QsY0FBY0UsZ0JBQWtCRCw2QkFBYSxDQUEvQkM7QUFFdEIsSUFBTUMsZUFBZVAsd0JBQXdCUSxjQUFZLEdBQ25EQyxnQkFBZ0JQLHlCQUF5QlEsZUFBYTtBQUU3QyxJQUFBLEFBQU1YLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1BZLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU07Z0NBRHZCZjs7Z0JBRWpCLGtCQUZpQkE7WUFFWFk7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxNQUFNLEdBQUdBOzs7a0JBTkdmOztZQVNuQmdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTixLQUFLO2dCQUNaLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWFpQixJQUFJO2dCQUNmLElBQU1DLFNBQVNsQixhQUFhaUIsTUFBTSxJQUFJLENBQUNQLE1BQU07Z0JBRTdDLE9BQU9RO1lBQ1Q7OztZQUVBaEIsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWNpQixLQUFLO2dCQUNqQixJQUFNRCxTQUFTaEIsY0FBY2lCLE9BQU8sSUFBSSxDQUFDVCxNQUFNO2dCQUUvQyxPQUFPUTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1iLFVBQVUsTUFDVkMsUUFBUUwsY0FDUk0sU0FBU0osZUFDVEssU0FBUyxNQUNUVyxpQkFBaUIsSUFsRE4xQixlQWtEeUJZLFNBQVNDLE9BQU9DLFFBQVFDO2dCQUVsRSxPQUFPVztZQUNUOzs7V0FyRG1CMUI7RUFBdUIyQix1QkFBTyJ9