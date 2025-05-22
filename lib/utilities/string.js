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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0b2tlbnMgPSBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiB0cmltU3RyaW5nKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgdG9rZW5zID0gWyAgLy8vXG4gICAgdG9rZW5cbiAgXTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1N0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsInRyaW1TdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJ0b2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1Rva2VucyIsInJlcGxhY2UiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlnQkE7ZUFBQUE7O1FBc0NBQztlQUFBQTs7UUExQkFDO2VBQUFBOztRQWNBQztlQUFBQTs7O3lCQTVCYTtBQUV0QixTQUFTSCxhQUFhSSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSkQsU0FBU0osYUFBYUcsTUFBTUMsU0FBVSxHQUFHO0lBRXpDQyxTQUFTSCxlQUFlRTtJQUV4QkMsU0FBU0MsV0FBV0QsU0FBVSxHQUFHO0lBRWpDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSixjQUFjTSxLQUFLLEVBQUVILE1BQU07SUFDekMsSUFBTUMsU0FBU0UsTUFBTUMsTUFBTSxDQUFDLFNBQUNILFFBQVFGO1FBQ25DLElBQU1NLGFBQWFWLGFBQWFJLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVcsT0FDVkksYUFDQyxBQUFDLEdBQWFBLE9BQVhKLFFBQU8sTUFBZSxPQUFYSTtRQUUxQixPQUFPSjtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUO0FBRU8sU0FBU0gsZUFBZUUsTUFBTTtJQUNuQyxJQUFNQyxTQUFTRCxPQUFPSSxNQUFNLENBQUMsU0FBQ0gsUUFBUUs7UUFDcEMsSUFBTUMsVUFBVUQsTUFBTUUsVUFBVTtRQUVoQ1AsU0FBUyxBQUFDLEdBQVdNLE9BQVROLFFBQWlCLE9BQVJNO1FBRXJCLE9BQU9OO0lBQ1QsR0FBR1EsdUJBQVk7SUFFZixPQUFPUjtBQUNUO0FBRU8sU0FBU0wsYUFBYUcsSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQU1VLG1CQUFtQlgsS0FBS1ksY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZWIsTUFBTyxHQUFHO1FBRS9CQyxTQUFTYSxxQkFBcUJELGNBQWNaO0lBQzlDLE9BQU87UUFDTCxJQUFNYyxrQkFBa0JmLE1BQU0sR0FBRztRQUVqQ0MsU0FBU2Usd0JBQXdCRCxpQkFBaUJkO0lBQ3BEO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLFdBQVdELE1BQU07SUFDeEJBLFNBQVNBLE9BQU9lLE9BQU8sQ0FBQyxRQUFRUCx1QkFBWSxHQUFJLEdBQUc7SUFFbkQsT0FBT1I7QUFDVDtBQUVBLFNBQVNZLHFCQUFxQkQsWUFBWSxFQUFFWixNQUFNO0lBQ2hELElBQU1pQixtQkFBbUJMLGFBQWFNLG1CQUFtQixJQUNuRFosUUFBUVcsa0JBQWtCLEdBQUc7SUFFbkNqQixTQUFTO1FBQ1BNO0tBQ0Q7SUFFRCxPQUFPTjtBQUNUO0FBRUEsU0FBU2Usd0JBQXdCRCxlQUFlLEVBQUVkLE1BQU07SUFDdEQsSUFBTW1CLDRCQUE0QkwsZ0JBQWdCTSw0QkFBNEIsQ0FBQ3BCLFNBQ3pFcUIsNkJBQTZCUCxnQkFBZ0JRLDZCQUE2QixDQUFDdEIsU0FDM0V1QixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDbkIsU0FBU0EsT0FBT3lCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU94QjtBQUNUIn0=