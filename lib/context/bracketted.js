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
            key: "fromStringAndNodeAndTokens",
            value: function fromStringAndNodeAndTokens(Class, string, NodeAndTokens) {
                var context = {
                    getLexer: getLexer,
                    getParser: getParser
                }, nodeAndTokens = NodeAndTokens.fromString(string, context), node = nodeAndTokens.getNode(), tokens = nodeAndTokens.getTokens(), bracketedContext = new Class(string, node, tokens);
                return bracketedContext;
            }
        }
    ]);
    return BracketedContext;
}();
function getLexer() {
    var lexer = _nominal.nominalLexer; //'
    return lexer;
}
function getParser() {
    var parser = _nominal.nominalParser; //'
    return parser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXR0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb250ZXh0IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBub2RlQXNUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kTm9kZUFuZFRva2VucyhDbGFzcywgc3RyaW5nLCBOb2RlQW5kVG9rZW5zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHsgLy8vXG4gICAgICAgICAgICBnZXRMZXhlcixcbiAgICAgICAgICAgIGdldFBhcnNlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgbm9kZUFuZFRva2VucyA9IE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBub2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBub2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnRleHQgPSBuZXcgQ2xhc3Moc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGV4ZXIoKSB7XG4gIGNvbnN0IGxleGVyID0gbm9taW5hbExleGVyOyAvLydcblxuICByZXR1cm4gbGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlcigpIHtcbiAgY29uc3QgcGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8nXG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsIm5vZGVBc1Rva2VucyIsIm5vZGVBc1N0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwiZnJvbVN0cmluZ0FuZE5vZGVBbmRUb2tlbnMiLCJDbGFzcyIsIk5vZGVBbmRUb2tlbnMiLCJjb250ZXh0IiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJub2RlQW5kVG9rZW5zIiwiZnJvbVN0cmluZyIsImJyYWNrZXRlZENvbnRleHQiLCJsZXhlciIsIm5vbWluYWxMZXhlciIsInBhcnNlciIsIm5vbWluYWxQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRGJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSkdIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixNQUFNO1lBQ3BCOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsS0FBSyxFQUFFVixNQUFNLEVBQUVXLGFBQWE7Z0JBQzVELElBQU1DLFVBQVU7b0JBQ1JDLFVBQUFBO29CQUNBQyxXQUFBQTtnQkFDRixHQUNBQyxnQkFBZ0JKLGNBQWNLLFVBQVUsQ0FBQ2hCLFFBQVFZLFVBQ2pEWCxPQUFPYyxjQUFjWCxPQUFPLElBQzVCRixTQUFTYSxjQUFjVixTQUFTLElBQ2hDWSxtQkFBbUIsSUFBSVAsTUFBTVYsUUFBUUMsTUFBTUM7Z0JBRWpELE9BQU9lO1lBQ1Q7OztXQTFDbUJsQjs7QUE2Q3JCLFNBQVNjO0lBQ1AsSUFBTUssUUFBUUMscUJBQVksRUFBRSxHQUFHO0lBRS9CLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTSjtJQUNQLElBQU1NLFNBQVNDLHNCQUFhLEVBQUUsR0FBRztJQUVqQyxPQUFPRDtBQUNUIn0=