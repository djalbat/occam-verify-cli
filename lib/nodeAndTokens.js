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
        return NodeAndTokens;
    },
    ruleFromBNF: function() {
        return ruleFromBNF;
    }
});
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var _query = require("./utilities/query");
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
var NodeAndTokens = /*#__PURE__*/ function() {
    function NodeAndTokens(node, tokens) {
        _class_call_check(this, NodeAndTokens);
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(NodeAndTokens, [
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
                var nodeAndTokens = new Class(node, tokens);
                return nodeAndTokens;
            }
        }
    ]);
    return NodeAndTokens;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlQW5kVG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgY2hpbGROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8qIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUFuZFRva2VucyB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoQ2xhc3MsIHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgY29uc3Qgc3RhcnRSdWxlID0gcnVsZSwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGAke3N0cmluZ31cbmA7XG5cbiAgICBsZXQgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgZGVsZXRlICBydWxlTWFwW3J1bGVOYW1lXTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICB0b2tlbnMgPSB0b2tlbnNGcm9tVG9rZW5zQW5kTm9kZSh0b2tlbnMsIG5vZGUpOyAgLy8vXG5cbiAgICBjb25zdCBub2RlQW5kVG9rZW5zID0gbmV3IENsYXNzKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gbm9kZUFuZFRva2VucztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUZyb21CTkYoYm5mKSB7XG4gIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgIGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG5cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Ub2tlbnNBbmROb2RlKHRva2Vucywgbm9kZSkge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJOb2RlQW5kVG9rZW5zIiwicnVsZUZyb21CTkYiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiY2hpbGROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub2RlIiwidG9rZW5zIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImZyb21TdHJpbmciLCJDbGFzcyIsInN0cmluZyIsImNvbnRleHQiLCJydWxlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZU5hbWUiLCJnZXROYW1lIiwic3RhcnRSdWxlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJjaGlsZE5vZGUiLCJ0b2tlbnNGcm9tVG9rZW5zQW5kTm9kZSIsIm5vZGVBbmRUb2tlbnMiLCJibmYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJmaXJzdFJ1bGUiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBZXFCQTs7SUE0Q0xDLFdBQVc7ZUFBWEE7OzsyQkF6RFM7NEJBQ0M7eUJBQ0s7cUJBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsV0FBV0MscUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsdUJBQVMsQ0FBQ0YsV0FBVztBQUV2QyxJQUFNRyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFbEIsSUFBQSxBQUFNViw4QkFBTjthQUFNQSxjQUNQVyxJQUFJLEVBQUVDLE1BQU07Z0NBRExaO1FBRWpCLElBQUksQ0FBQ1csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdaOztZQU1uQmEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFdBQVdDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUN0QyxJQUFNLEFBQUVDLE9BQVNILE1BQVRHLE1BQ0ZDLFFBQVFGLFFBQVFHLFFBQVEsSUFDeEJDLFNBQVNKLFFBQVFLLFNBQVMsSUFDMUJDLFVBQVVGLE9BQU9HLFVBQVUsSUFDM0JDLFdBQVdQLEtBQUtRLE9BQU87Z0JBRTdCSCxPQUFPLENBQUNFLFNBQVMsR0FBR1A7Z0JBRXBCLElBQU1TLFlBQVlULE1BQ1pVLFVBQVUsQUFBQyxHQUFTLE9BQVBaLFFBQU87Z0JBRzFCLElBQUlMLFNBQVNRLE1BQU1VLFFBQVEsQ0FBQ0QsVUFDeEJsQixPQUFPVyxPQUFPUyxLQUFLLENBQUNuQixRQUFRZ0I7Z0JBRWhDLE9BQVFKLE9BQU8sQ0FBQ0UsU0FBUztnQkFFekIsSUFBTU0sWUFBWXZCLGVBQWVFO2dCQUVqQ0EsT0FBT3FCLFdBQVcsR0FBRztnQkFFckJwQixTQUFTcUIsd0JBQXdCckIsUUFBUUQsT0FBUSxHQUFHO2dCQUVwRCxJQUFNdUIsZ0JBQWdCLElBQUlsQixNQUFNTCxNQUFNQztnQkFFdEMsT0FBT3NCO1lBQ1Q7OztXQXpDbUJsQzs7QUE0Q2QsU0FBU0MsWUFBWWtDLEdBQUc7SUFDN0IsSUFBTXZCLFNBQVNSLFNBQVNnQyxhQUFhLENBQUNELE1BQ2hDRSxRQUFROUIsVUFBVStCLGVBQWUsQ0FBQzFCLFNBQ2xDMkIsWUFBWXJDLE1BQU1tQyxRQUNsQmxCLE9BQU9vQixXQUFXLEdBQUc7SUFFM0IsT0FBT3BCO0FBQ1Q7QUFFQSxTQUFTYyx3QkFBd0JyQixNQUFNLEVBQUVELElBQUk7SUFDM0MsSUFBTTZCLDRCQUE0QjdCLEtBQUs4Qiw0QkFBNEIsQ0FBQzdCLFNBQzlEOEIsNkJBQTZCL0IsS0FBS2dDLDZCQUE2QixDQUFDL0IsU0FDaEVnQyxRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDNUIsU0FBU0EsT0FBT2tDLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU9qQztBQUNUIn0=