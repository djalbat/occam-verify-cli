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
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _occamCustomGrammars = require("occam-custom-grammars");
var _customGrammar = require("../../utilities/customGrammar");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var florenceLexerFromCombinedCustomGrammar = _occamCustomGrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamCustomGrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromNothing)(), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
var BracketedCombinatorReleaseContext = /*#__PURE__*/ function() {
    function BracketedCombinatorReleaseContext() {
        _classCallCheck(this, BracketedCombinatorReleaseContext);
    }
    _createClass(BracketedCombinatorReleaseContext, [
        {
            key: "nodeFromContentAndRuleName",
            value: function nodeFromContentAndRuleName(content, ruleName) {
                var ruleMap = florenceParser.getRuleMap(), rule = ruleMap[ruleName], tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens, rule);
                if (node !== null) {
                    (0, _occamGrammarUtilities.rewriteNodes)(node);
                }
                return node;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var bracketedCombinatorReleaseContext = new BracketedCombinatorReleaseContext();
                return bracketedCombinatorReleaseContext;
            }
        }
    ]);
    return BracketedCombinatorReleaseContext;
}();
var bracketedCombinatorReleaseContext = BracketedCombinatorReleaseContext.fromNothing();
var _default = bracketedCombinatorReleaseContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UvYnJhY2tldGVkQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCB7IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG5jbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yUmVsZWFzZUNvbnRleHQge1xuICBub2RlRnJvbUNvbnRlbnRBbmRSdWxlTmFtZShjb250ZW50LCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3JSZWxlYXNlQ29udGV4dCA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yUmVsZWFzZUNvbnRleHQoKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yUmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cblxuY29uc3QgYnJhY2tldGVkQ29tYmluYXRvclJlbGVhc2VDb250ZXh0ID0gQnJhY2tldGVkQ29tYmluYXRvclJlbGVhc2VDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyYWNrZXRlZENvbWJpbmF0b3JSZWxlYXNlQ29udGV4dDtcblxuIl0sIm5hbWVzIjpbImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiQnJhY2tldGVkQ29tYmluYXRvclJlbGVhc2VDb250ZXh0Iiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJjb250ZW50IiwicnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJld3JpdGVOb2RlcyIsImZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvclJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7cUNBbkM2QjttQ0FDcUI7NkJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU0sQUFBRUEseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRVIsSUFBTUUsd0JBQXdCQyxJQUFBQSwrQ0FBZ0MsS0FDeERDLGdCQUFnQk4sdUNBQXVDSSx3QkFDdkRHLGlCQUFpQkwsd0NBQXdDRTtBQUUvRCxJQUFBLEFBQU1JLGtEQXFCSCxBQXJCSDthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVDLElBQU1DLFVBQVVMLGVBQWVNLFVBQVUsSUFDbkNDLE9BQU9GLE9BQU8sQ0FBQ0QsU0FBUyxFQUN4QkksU0FBU1QsY0FBY1UsUUFBUSxDQUFDTixVQUNoQ08sT0FBT1YsZUFBZVcsS0FBSyxDQUFDSCxRQUFRRDtnQkFFMUMsSUFBSUcsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCRSxJQUFBQSxtQ0FBWSxFQUFDRjtnQkFDZixDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTUMsb0NBQW9DLElBZnhDYjtnQkFpQkYsT0FBT2E7WUFDVDs7O1dBbEJJYjs7QUFxQk4sSUFBTWEsb0NBQW9DYixrQ0FBa0NZLFdBQVc7SUFFdkYsV0FBZUMifQ==