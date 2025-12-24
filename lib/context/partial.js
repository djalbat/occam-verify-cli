"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return PartialContext;
    },
    get ruleFromBNF () {
        return ruleFromBNF;
    }
});
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var bnfLexer = _occamlexers.BNFLexer.fromNothing(), bnfParser = _occamparsers.BNFParser.fromNothing();
var PartialContext = /*#__PURE__*/ function() {
    function PartialContext(node, tokens) {
        _class_call_check(this, PartialContext);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(PartialContext, [
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
        }
    ], [
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(Class, string, lexer, parser) {
                var rule = Class.rule, startRule = rule, content = "".concat(string, "\n");
                var tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                node.someChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        node = childNode; ///
                        tokens = tokensFromTokensAndNode(tokens, node); ///
                        return true;
                    }
                });
                var partialContext = new Class(node, tokens);
                return partialContext;
            }
        }
    ]);
    return PartialContext;
}();
function ruleFromBNF(bnf) {
    var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), firstRule = first(rules), rule = firstRule; ///
    return rule;
}
function tokensFromTokensAndNode(tokens, node) {
    var lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKENsYXNzLCBzdHJpbmcsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBjb25zdCB7IHJ1bGUgfSA9IENsYXNzLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHJ1bGUsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtzdHJpbmd9XG5gO1xuXG4gICAgbGV0IHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIG5vZGUuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tVG9rZW5zQW5kTm9kZSh0b2tlbnMsIG5vZGUpOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHBhcnRpYWxDb250ZXh0ID0gbmV3IENsYXNzKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gcGFydGlhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVGcm9tQk5GKGJuZikge1xuICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuXG4gIHJldHVybiBydWxlO1xufVxuXG5mdW5jdGlvbiB0b2tlbnNGcm9tVG9rZW5zQW5kTm9kZSh0b2tlbnMsIG5vZGUpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG4iXSwibmFtZXMiOlsiUGFydGlhbENvbnRleHQiLCJydWxlRnJvbUJORiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsIkNsYXNzIiwic3RyaW5nIiwibGV4ZXIiLCJwYXJzZXIiLCJydWxlIiwic3RhcnRSdWxlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJ0b2tlbnNGcm9tVG9rZW5zQW5kTm9kZSIsInBhcnRpYWxDb250ZXh0IiwiYm5mIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmlyc3RSdWxlIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O1FBeUNMQztlQUFBQTs7OzJCQWxEUzs0QkFDQzt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSxXQUFXQyxxQkFBUSxDQUFDQyxXQUFXLElBQy9CQyxZQUFZQyx1QkFBUyxDQUFDRixXQUFXO0FBRXhCLElBQUEsQUFBTU4sK0JBQU47YUFBTUEsZUFDUFMsSUFBSSxFQUFFQyxNQUFNO2dDQURMVjtRQUVqQixJQUFJLENBQUNTLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHVjs7WUFNbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU07Z0JBQzFELElBQU0sQUFBRUMsT0FBU0osTUFBVEksTUFDRkMsWUFBWUQsTUFDWkUsVUFBVSxBQUFDLEdBQVMsT0FBUEwsUUFBTztnQkFHMUIsSUFBSUwsU0FBU00sTUFBTUssUUFBUSxDQUFDRCxVQUN4QlgsT0FBT1EsT0FBT0ssS0FBSyxDQUFDWixRQUFRUztnQkFFaENWLEtBQUtjLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7b0JBRTVELElBQUlELDBCQUEwQjt3QkFDNUJoQixPQUFPZSxXQUFXLEdBQUc7d0JBRXJCZCxTQUFTaUIsd0JBQXdCakIsUUFBUUQsT0FBUSxHQUFHO3dCQUVwRCxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQU1tQixpQkFBaUIsSUFBSWQsTUFBTUwsTUFBTUM7Z0JBRXZDLE9BQU9rQjtZQUNUOzs7V0F0Q21CNUI7O0FBeUNkLFNBQVNDLFlBQVk0QixHQUFHO0lBQzdCLElBQU1uQixTQUFTTixTQUFTMEIsYUFBYSxDQUFDRCxNQUNoQ0UsUUFBUXhCLFVBQVV5QixlQUFlLENBQUN0QixTQUNsQ3VCLFlBQVkvQixNQUFNNkIsUUFDbEJiLE9BQU9lLFdBQVcsR0FBRztJQUUzQixPQUFPZjtBQUNUO0FBRUEsU0FBU1Msd0JBQXdCakIsTUFBTSxFQUFFRCxJQUFJO0lBQzNDLElBQU15Qiw0QkFBNEJ6QixLQUFLMEIsNEJBQTRCLENBQUN6QixTQUM5RDBCLDZCQUE2QjNCLEtBQUs0Qiw2QkFBNkIsQ0FBQzNCLFNBQ2hFNEIsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q3hCLFNBQVNBLE9BQU84QixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxPQUFPN0I7QUFDVCJ9