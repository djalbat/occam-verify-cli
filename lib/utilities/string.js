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
    get nodeAsString () {
        return nodeAsString;
    },
    get nodeAsTokens () {
        return nodeAsTokens;
    },
    get nodesAsString () {
        return nodesAsString;
    },
    get tokensAsString () {
        return tokensAsString;
    },
    get trimTrailingSlash () {
        return trimTrailingSlash;
    }
});
var _constants = require("../constants");
function nodeAsString(node, tokens) {
    var string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    string = trimString(string); ///
    return string;
}
function nodesAsString(nodes, tokens) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node, tokens);
        string = string === null ? nodeString : "".concat(string, ", ").concat(nodeString);
        return string;
    }, null);
    return string;
}
function tokensAsString(tokens) {
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
function nodeAsTokens(node, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
}
function trimTrailingSlash(string) {
    string = string.replace(/\/$/, _constants.EMPTY_STRING); ///
    return string;
}
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function terminalNodeAsTokens(terminalNode, tokens) {
    var significantToken = terminalNode.getSignificantToken(), token = significantToken; ///
    tokens = [
        token
    ];
    return tokens;
}
function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0b2tlbnMgPSBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpbVRyYWlsaW5nU2xhc2goc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdHJpbVN0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHRva2VucyA9IFsgIC8vL1xuICAgIHRva2VuXG4gIF07XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNTdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsInRyaW1UcmFpbGluZ1NsYXNoIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsInRyaW1TdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJ0b2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1Rva2VucyIsInJlcGxhY2UiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlnQkE7ZUFBQUE7O1FBc0NBQztlQUFBQTs7UUExQkFDO2VBQUFBOztRQWNBQztlQUFBQTs7UUE0QkFDO2VBQUFBOzs7eUJBeERhO0FBRXRCLFNBQVNKLGFBQWFLLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQztJQUVKRCxTQUFTTCxhQUFhSSxNQUFNQyxTQUFVLEdBQUc7SUFFekNDLFNBQVNKLGVBQWVHO0lBRXhCQyxTQUFTQyxXQUFXRCxTQUFVLEdBQUc7SUFFakMsT0FBT0E7QUFDVDtBQUVPLFNBQVNMLGNBQWNPLEtBQUssRUFBRUgsTUFBTTtJQUN6QyxJQUFNQyxTQUFTRSxNQUFNQyxNQUFNLENBQUMsU0FBQ0gsUUFBUUY7UUFDbkMsSUFBTU0sYUFBYVgsYUFBYUssTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBVyxPQUNWSSxhQUNDLEFBQUMsR0FBYUEsT0FBWEosUUFBTyxNQUFlLE9BQVhJO1FBRTFCLE9BQU9KO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSixlQUFlRyxNQUFNO0lBQ25DLElBQU1DLFNBQVNELE9BQU9JLE1BQU0sQ0FBQyxTQUFDSCxRQUFRSztRQUNwQyxJQUFNQyxVQUFVRCxNQUFNRSxVQUFVO1FBRWhDUCxTQUFTLEFBQUMsR0FBV00sT0FBVE4sUUFBaUIsT0FBUk07UUFFckIsT0FBT047SUFDVCxHQUFHUSx1QkFBWTtJQUVmLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTTixhQUFhSSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBTVUsbUJBQW1CWCxLQUFLWSxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlYixNQUFPLEdBQUc7UUFFL0JDLFNBQVNhLHFCQUFxQkQsY0FBY1o7SUFDOUMsT0FBTztRQUNMLElBQU1jLGtCQUFrQmYsTUFBTSxHQUFHO1FBRWpDQyxTQUFTZSx3QkFBd0JELGlCQUFpQmQ7SUFDcEQ7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU0Ysa0JBQWtCRyxNQUFNO0lBQ3RDQSxTQUFTQSxPQUFPZSxPQUFPLENBQUMsT0FBT1AsdUJBQVksR0FBRyxHQUFHO0lBRWpELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTQyxXQUFXRCxNQUFNO0lBQ3hCQSxTQUFTQSxPQUFPZSxPQUFPLENBQUMsUUFBUVAsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTWSxxQkFBcUJELFlBQVksRUFBRVosTUFBTTtJQUNoRCxJQUFNaUIsbUJBQW1CTCxhQUFhTSxtQkFBbUIsSUFDbkRaLFFBQVFXLGtCQUFrQixHQUFHO0lBRW5DakIsU0FBUztRQUNQTTtLQUNEO0lBRUQsT0FBT047QUFDVDtBQUVBLFNBQVNlLHdCQUF3QkQsZUFBZSxFQUFFZCxNQUFNO0lBQ3RELElBQU1tQiw0QkFBNEJMLGdCQUFnQk0sNEJBQTRCLENBQUNwQixTQUN6RXFCLDZCQUE2QlAsZ0JBQWdCUSw2QkFBNkIsQ0FBQ3RCLFNBQzNFdUIsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q25CLFNBQVNBLE9BQU95QixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxPQUFPeEI7QUFDVCJ9