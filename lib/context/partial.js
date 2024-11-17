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
    default: function() {
        return PartialContext;
    },
    ruleFromBNF: function() {
        return ruleFromBNF;
    }
});
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var _query = require("../utilities/query");
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
var childNodeQuery = (0, _query.nodeQuery)("/*/*!");
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
            key: "fromString",
            value: function fromString(Class, string, context) {
                var rule = Class.rule, lexer = context.getLexer(), parser = context.getParser(), ruleMap = parser.getRuleMap(), ruleName = rule.getName();
                ruleMap[ruleName] = rule;
                var startRule = rule, content = "".concat(string, "\n");
                var tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                delete ruleMap[ruleName];
                var childNode = childNodeQuery(node);
                node = childNode; ///
                tokens = tokensFromTokensAndNode(tokens, node); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgY2hpbGROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8qIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGlhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKENsYXNzLCBzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGUgfSA9IENsYXNzLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHJ1bGUsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtzdHJpbmd9XG5gO1xuXG4gICAgbGV0IHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGRlbGV0ZSAgcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVRdWVyeShub2RlKTtcblxuICAgIG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgdG9rZW5zID0gdG9rZW5zRnJvbVRva2Vuc0FuZE5vZGUodG9rZW5zLCBub2RlKTsgIC8vL1xuXG4gICAgY29uc3QgcGFydGlhbENvbnRleHQgPSBuZXcgQ2xhc3Mobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBwYXJ0aWFsQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21CTkYoYm5mKSB7XG4gIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgIGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Ub2tlbnNBbmROb2RlKHRva2Vucywgbm9kZSkge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJQYXJ0aWFsQ29udGV4dCIsInJ1bGVGcm9tQk5GIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsImNoaWxkTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZSIsInRva2VucyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiQ2xhc3MiLCJzdHJpbmciLCJjb250ZXh0IiwicnVsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInN0YXJ0UnVsZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiY2hpbGROb2RlIiwidG9rZW5zRnJvbVRva2Vuc0FuZE5vZGUiLCJwYXJ0aWFsQ29udGV4dCIsImJuZiIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImZpcnN0UnVsZSIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFlcUJBOztJQTRDTEMsV0FBVztlQUFYQTs7OzJCQXpEUzs0QkFDQzt5QkFDSztxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSxXQUFXQyxxQkFBUSxDQUFDQyxXQUFXLElBQy9CQyxZQUFZQyx1QkFBUyxDQUFDRixXQUFXO0FBRXZDLElBQU1HLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQixJQUFBLEFBQU1WLCtCQUFOO2FBQU1BLGVBQ1BXLElBQUksRUFBRUMsTUFBTTtnQ0FETFo7UUFFakIsSUFBSSxDQUFDVyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR1o7O1lBTW5CYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3RDLElBQU0sQUFBRUMsT0FBU0gsTUFBVEcsTUFDRkMsUUFBUUYsUUFBUUcsUUFBUSxJQUN4QkMsU0FBU0osUUFBUUssU0FBUyxJQUMxQkMsVUFBVUYsT0FBT0csVUFBVSxJQUMzQkMsV0FBV1AsS0FBS1EsT0FBTztnQkFFN0JILE9BQU8sQ0FBQ0UsU0FBUyxHQUFHUDtnQkFFcEIsSUFBTVMsWUFBWVQsTUFDWlUsVUFBVSxBQUFDLEdBQVMsT0FBUFosUUFBTztnQkFHMUIsSUFBSUwsU0FBU1EsTUFBTVUsUUFBUSxDQUFDRCxVQUN4QmxCLE9BQU9XLE9BQU9TLEtBQUssQ0FBQ25CLFFBQVFnQjtnQkFFaEMsT0FBUUosT0FBTyxDQUFDRSxTQUFTO2dCQUV6QixJQUFNTSxZQUFZdkIsZUFBZUU7Z0JBRWpDQSxPQUFPcUIsV0FBVyxHQUFHO2dCQUVyQnBCLFNBQVNxQix3QkFBd0JyQixRQUFRRCxPQUFRLEdBQUc7Z0JBRXBELElBQU11QixpQkFBaUIsSUFBSWxCLE1BQU1MLE1BQU1DO2dCQUV2QyxPQUFPc0I7WUFDVDs7O1dBekNtQmxDOztBQTRDZCxTQUFTQyxZQUFZa0MsR0FBRztJQUM3QixJQUFNdkIsU0FBU1IsU0FBU2dDLGFBQWEsQ0FBQ0QsTUFDaENFLFFBQVE5QixVQUFVK0IsZUFBZSxDQUFDMUIsU0FDbEMyQixZQUFZckMsTUFBTW1DLFFBQ2xCbEIsT0FBT29CLFdBQVcsR0FBRztJQUUzQixPQUFPcEI7QUFDVDtBQUVBLFNBQVNjLHdCQUF3QnJCLE1BQU0sRUFBRUQsSUFBSTtJQUMzQyxJQUFNNkIsNEJBQTRCN0IsS0FBSzhCLDRCQUE0QixDQUFDN0IsU0FDOUQ4Qiw2QkFBNkIvQixLQUFLZ0MsNkJBQTZCLENBQUMvQixTQUNoRWdDLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeEM1QixTQUFTQSxPQUFPa0MsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBT2pDO0FBQ1QifQ==