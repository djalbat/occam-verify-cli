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
    constructorDeclarationTokensFromTermString: function() {
        return constructorDeclarationTokensFromTermString;
    },
    labelTokensFromLabelString: function() {
        return labelTokensFromLabelString;
    },
    unqualifiedMetastatementTokensFromMetastatementString: function() {
        return unqualifiedMetastatementTokensFromMetastatementString;
    },
    unqualifiedStatementTokensFromStatementString: function() {
        return unqualifiedStatementTokensFromStatementString;
    },
    variableDeclarationTokensFromVariableString: function() {
        return variableDeclarationTokensFromVariableString;
    }
});
var _occamcustomgrammars = require("occam-custom-grammars");
var _customGrammar = require("./customGrammar");
var florenceLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar;
var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromNothing)(), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);
function labelTokensFromLabelString(labelString, lexer) {
    var labelContent = "".concat(labelString), labelTokens = tokensFromContentAndLexer(labelContent, lexer);
    return labelTokens;
}
function constructorDeclarationTokensFromTermString(termString, lexer) {
    var constructorDeclarationContent = "Constructor ".concat(termString, "\n"), constructorDeclarationTokens = tokensFromContentAndLexer(constructorDeclarationContent, lexer);
    return constructorDeclarationTokens;
}
function variableDeclarationTokensFromVariableString(variableString, lexer) {
    var variableDeclarationContent = "Variable ".concat(variableString, "\n"), variableDeclarationTokens = tokensFromContentAndLexer(variableDeclarationContent, lexer);
    return variableDeclarationTokens;
}
function unqualifiedStatementTokensFromStatementString(statementString, lexer) {
    var unqualifiedStatementContent = "".concat(statementString, "\n"), unqualifiedStatementTokens = tokensFromContentAndLexer(unqualifiedStatementContent, lexer);
    return unqualifiedStatementTokens;
}
function unqualifiedMetastatementTokensFromMetastatementString(metastatementString, lexer) {
    var unqualifiedMetastatementContent = "".concat(metastatementString, "\n"), unqualifiedMetastatementTokens = tokensFromContentAndLexer(unqualifiedMetastatementContent, lexer);
    return unqualifiedMetastatementTokens;
}
function tokensFromContentAndLexer(content) {
    var lexer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : florenceLexer;
    var tokens = lexer.tokenise(content);
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCB7IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nKCksXG4gICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsVG9rZW5zRnJvbUxhYmVsU3RyaW5nKGxhYmVsU3RyaW5nLCBsZXhlcikge1xuICBjb25zdCBsYWJlbENvbnRlbnQgPSBgJHtsYWJlbFN0cmluZ31gLFxuICAgICAgICBsYWJlbFRva2VucyA9IHRva2Vuc0Zyb21Db250ZW50QW5kTGV4ZXIobGFiZWxDb250ZW50LCBsZXhlcik7XG5cbiAgcmV0dXJuIGxhYmVsVG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vuc0Zyb21UZXJtU3RyaW5nKHRlcm1TdHJpbmcsIGxleGVyKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Db250ZW50ID0gYENvbnN0cnVjdG9yICR7dGVybVN0cmluZ31cbmAsXG4gICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnMgPSB0b2tlbnNGcm9tQ29udGVudEFuZExleGVyKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Db250ZW50LCBsZXhlcik7XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ub2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uVG9rZW5zRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlcikge1xuICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uQ29udGVudCA9IGBWYXJpYWJsZSAke3ZhcmlhYmxlU3RyaW5nfVxuYCxcbiAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRva2VucyA9IHRva2Vuc0Zyb21Db250ZW50QW5kTGV4ZXIodmFyaWFibGVEZWNsYXJhdGlvbkNvbnRlbnQsIGxleGVyKTtcblxuICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvblRva2Vucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSB7XG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Q29udGVudCA9IGAke3N0YXRlbWVudFN0cmluZ31cbmAsXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnRBbmRMZXhlcih1bnF1YWxpZmllZFN0YXRlbWVudENvbnRlbnQsIGxleGVyKTtcblxuICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRUb2tlbnNGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlcikge1xuICBjb25zdCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDb250ZW50ID0gYCR7bWV0YXN0YXRlbWVudFN0cmluZ31cbmAsXG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFRva2VucyA9IHRva2Vuc0Zyb21Db250ZW50QW5kTGV4ZXIodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Q29udGVudCwgbGV4ZXIpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRUb2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50QW5kTGV4ZXIoY29udGVudCwgbGV4ZXIgPSBmbG9yZW5jZUxleGVyKSB7XG4gIGNvbnN0IHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG4iXSwibmFtZXMiOlsiY29uc3RydWN0b3JEZWNsYXJhdGlvblRva2Vuc0Zyb21UZXJtU3RyaW5nIiwibGFiZWxUb2tlbnNGcm9tTGFiZWxTdHJpbmciLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRUb2tlbnNGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVN0YXRlbWVudFN0cmluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25Ub2tlbnNGcm9tVmFyaWFibGVTdHJpbmciLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nIiwiZmxvcmVuY2VMZXhlciIsImxhYmVsU3RyaW5nIiwibGV4ZXIiLCJsYWJlbENvbnRlbnQiLCJsYWJlbFRva2VucyIsInRva2Vuc0Zyb21Db250ZW50QW5kTGV4ZXIiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkNvbnRlbnQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVG9rZW5zIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZURlY2xhcmF0aW9uQ29udGVudCIsInZhcmlhYmxlRGVjbGFyYXRpb25Ub2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudENvbnRlbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRDb250ZW50IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VG9rZW5zIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWtCZ0JBLDBDQUEwQztlQUExQ0E7O0lBUEFDLDBCQUEwQjtlQUExQkE7O0lBK0JBQyxxREFBcUQ7ZUFBckRBOztJQVJBQyw2Q0FBNkM7ZUFBN0NBOztJQVJBQywyQ0FBMkM7ZUFBM0NBOzs7bUNBeEJnQjs2QkFFaUI7QUFFakQsSUFBTSxBQUFFQyx5Q0FBMkNDLG9DQUFlLENBQTFERDtBQUVSLElBQU1FLHdCQUF3QkMsSUFBQUEsK0NBQWdDLEtBQ3hEQyxnQkFBZ0JKLHVDQUF1Q0U7QUFFdEQsU0FBU04sMkJBQTJCUyxXQUFXLEVBQUVDLEtBQUs7SUFDM0QsSUFBTUMsZUFBZSxBQUFDLEdBQWMsT0FBWkYsY0FDbEJHLGNBQWNDLDBCQUEwQkYsY0FBY0Q7SUFFNUQsT0FBT0U7QUFDVDtBQUVPLFNBQVNiLDJDQUEyQ2UsVUFBVSxFQUFFSixLQUFLO0lBQzFFLElBQU1LLGdDQUFnQyxBQUFDLGVBQXlCLE9BQVhELFlBQVcsT0FFMURFLCtCQUErQkgsMEJBQTBCRSwrQkFBK0JMO0lBRTlGLE9BQU9NO0FBQ1Q7QUFFTyxTQUFTYiw0Q0FBNENjLGNBQWMsRUFBRVAsS0FBSztJQUMvRSxJQUFNUSw2QkFBNkIsQUFBQyxZQUEwQixPQUFmRCxnQkFBZSxPQUV4REUsNEJBQTRCTiwwQkFBMEJLLDRCQUE0QlI7SUFFeEYsT0FBT1M7QUFDVDtBQUVPLFNBQVNqQiw4Q0FBOENrQixlQUFlLEVBQUVWLEtBQUs7SUFDbEYsSUFBTVcsOEJBQThCLEFBQUMsR0FBa0IsT0FBaEJELGlCQUFnQixPQUVqREUsNkJBQTZCVCwwQkFBMEJRLDZCQUE2Qlg7SUFFMUYsT0FBT1k7QUFDVDtBQUVPLFNBQVNyQixzREFBc0RzQixtQkFBbUIsRUFBRWIsS0FBSztJQUM5RixJQUFNYyxrQ0FBa0MsQUFBQyxHQUFzQixPQUFwQkQscUJBQW9CLE9BRXpERSxpQ0FBaUNaLDBCQUEwQlcsaUNBQWlDZDtJQUVsRyxPQUFPZTtBQUNUO0FBRUEsU0FBU1osMEJBQTBCYSxPQUFPO1FBQUVoQixRQUFBQSxpRUFBUUY7SUFDbEQsSUFBTW1CLFNBQVNqQixNQUFNa0IsUUFBUSxDQUFDRjtJQUU5QixPQUFPQztBQUNUIn0=