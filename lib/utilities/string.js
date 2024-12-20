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
    nodeAsString: function() {
        return nodeAsString;
    },
    nodeAsTokens: function() {
        return nodeAsTokens;
    },
    nodesAsString: function() {
        return nodesAsString;
    },
    tokensAsString: function() {
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
        string = string === null ? nodeString : "".concat(string, ",").concat(nodeString);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICB0b2tlbnMgPSBbICAvLy9cbiAgICB0b2tlblxuICBdO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzU3RyaW5nIiwidG9rZW5zQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwidHJpbVN0cmluZyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwicmVwbGFjZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQXNDQUMsWUFBWTtlQUFaQTs7SUExQkFDLGFBQWE7ZUFBYkE7O0lBY0FDLGNBQWM7ZUFBZEE7Ozt5QkE1QmE7QUFFdEIsU0FBU0gsYUFBYUksSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDO0lBRUpELFNBQVNKLGFBQWFHLE1BQU1DLFNBQVUsR0FBRztJQUV6Q0MsU0FBU0gsZUFBZUU7SUFFeEJDLFNBQVNDLFdBQVdELFNBQVUsR0FBRztJQUVqQyxPQUFPQTtBQUNUO0FBRU8sU0FBU0osY0FBY00sS0FBSyxFQUFFSCxNQUFNO0lBQ3pDLElBQU1DLFNBQVNFLE1BQU1DLE1BQU0sQ0FBQyxTQUFDSCxRQUFRRjtRQUNuQyxJQUFNTSxhQUFhVixhQUFhSSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXLE9BQ1ZJLGFBQ0MsQUFBQyxHQUFZQSxPQUFWSixRQUFPLEtBQWMsT0FBWEk7UUFFekIsT0FBT0o7SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVDtBQUVPLFNBQVNILGVBQWVFLE1BQU07SUFDbkMsSUFBTUMsU0FBU0QsT0FBT0ksTUFBTSxDQUFDLFNBQUNILFFBQVFLO1FBQ3BDLElBQU1DLFVBQVVELE1BQU1FLFVBQVU7UUFFaENQLFNBQVMsQUFBQyxHQUFXTSxPQUFUTixRQUFpQixPQUFSTTtRQUVyQixPQUFPTjtJQUNULEdBQUdRLHVCQUFZO0lBRWYsT0FBT1I7QUFDVDtBQUVPLFNBQVNMLGFBQWFHLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFNVSxtQkFBbUJYLEtBQUtZLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWViLE1BQU8sR0FBRztRQUUvQkMsU0FBU2EscUJBQXFCRCxjQUFjWjtJQUM5QyxPQUFPO1FBQ0wsSUFBTWMsa0JBQWtCZixNQUFNLEdBQUc7UUFFakNDLFNBQVNlLHdCQUF3QkQsaUJBQWlCZDtJQUNwRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRSxXQUFXRCxNQUFNO0lBQ3hCQSxTQUFTQSxPQUFPZSxPQUFPLENBQUMsUUFBUVAsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTWSxxQkFBcUJELFlBQVksRUFBRVosTUFBTTtJQUNoRCxJQUFNaUIsbUJBQW1CTCxhQUFhTSxtQkFBbUIsSUFDbkRaLFFBQVFXLGtCQUFrQixHQUFHO0lBRW5DakIsU0FBUztRQUNQTTtLQUNEO0lBRUQsT0FBT047QUFDVDtBQUVBLFNBQVNlLHdCQUF3QkQsZUFBZSxFQUFFZCxNQUFNO0lBQ3RELElBQU1tQiw0QkFBNEJMLGdCQUFnQk0sNEJBQTRCLENBQUNwQixTQUN6RXFCLDZCQUE2QlAsZ0JBQWdCUSw2QkFBNkIsQ0FBQ3RCLFNBQzNFdUIsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q25CLFNBQVNBLE9BQU95QixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxPQUFPeEI7QUFDVCJ9