"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BracketedContext;
    }
});
var _nominal = require("../utilities/nominal");
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
var BracketedContext = /*#__PURE__*/ function() {
    function BracketedContext(string, node, tokens) {
        _class_call_check(this, BracketedContext);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(BracketedContext, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens() {
                return this.tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString() {
                return this.string;
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString() {
                return this.string;
            }
        }
    ], [
        {
            key: "fromStringAndPartialContext",
            value: function fromStringAndPartialContext(Class, string, PartialContext) {
                var lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, partialContext = PartialContext.fromStringLexerAndParser(string, lexer, parser), node = partialContext.getNode(), tokens = partialContext.getTokens(), bracketedContext = new Class(string, node, tokens);
                return bracketedContext;
            }
        }
    ]);
    return BracketedContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXR0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb250ZXh0IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBub2RlQXNUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kUGFydGlhbENvbnRleHQoQ2xhc3MsIHN0cmluZywgUGFydGlhbENvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgcGFydGlhbENvbnRleHQgPSBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gcGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnRleHQgPSBuZXcgQ2xhc3Moc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJub2RlQXNUb2tlbnMiLCJub2RlQXNTdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsImZyb21TdHJpbmdBbmRQYXJ0aWFsQ29udGV4dCIsIkNsYXNzIiwiUGFydGlhbENvbnRleHQiLCJsZXhlciIsIm5vbWluYWxMZXhlciIsInBhcnNlciIsIm5vbWluYWxQYXJzZXIiLCJwYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImJyYWNrZXRlZENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRGJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixNQUFNO1lBQ3BCOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsS0FBSyxFQUFFVixNQUFNLEVBQUVXLGNBQWM7Z0JBQzlELElBQU1DLFFBQVFDLHFCQUFZLEVBQ3BCQyxTQUFTQyxzQkFBYSxFQUN0QkMsaUJBQWlCTCxlQUFlTSx3QkFBd0IsQ0FBQ2pCLFFBQVFZLE9BQU9FLFNBQ3hFYixPQUFPZSxlQUFlWixPQUFPLElBQzdCRixTQUFTYyxlQUFlWCxTQUFTLElBQ2pDYSxtQkFBbUIsSUFBSVIsTUFBTVYsUUFBUUMsTUFBTUM7Z0JBRWpELE9BQU9nQjtZQUNUOzs7V0F4Q21CbkIifQ==