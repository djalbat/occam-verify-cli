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
        string = string === _constants.EMPTY_STRING ? nodeString : "".concat(string, ",").concat(nodeString);
        return string;
    }, _constants.EMPTY_STRING);
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
        z;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30sJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHt6XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdG9rZW5zID0gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdG9rZW5zID0gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gdHJpbVN0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHRva2VucyA9IFsgIC8vL1xuICAgIHRva2VuXG4gIF07XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNTdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJ0cmltU3RyaW5nIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInoiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwicmVwbGFjZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQXNDQUMsWUFBWTtlQUFaQTs7SUExQkFDLGFBQWE7ZUFBYkE7O0lBY0FDLGNBQWM7ZUFBZEE7Ozt5QkE1QmE7QUFFdEIsU0FBU0gsYUFBYUksSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDO0lBRUpELFNBQVNKLGFBQWFHLE1BQU1DLFNBQVUsR0FBRztJQUV6Q0MsU0FBU0gsZUFBZUU7SUFFeEJDLFNBQVNDLFdBQVdELFNBQVUsR0FBRztJQUVqQyxPQUFPQTtBQUNUO0FBRU8sU0FBU0osY0FBY00sS0FBSyxFQUFFSCxNQUFNO0lBQ3pDLElBQU1DLFNBQVNFLE1BQU1DLE1BQU0sQ0FBQyxTQUFDSCxRQUFRRjtRQUNuQyxJQUFNTSxhQUFhVixhQUFhSSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXSyx1QkFBWSxHQUN0QkQsYUFDQyxBQUFDLEdBQVlBLE9BQVZKLFFBQU8sS0FBYyxPQUFYSTtRQUV6QixPQUFPSjtJQUNULEdBQUdLLHVCQUFZO0lBRWYsT0FBT0w7QUFDVDtBQUVPLFNBQVNILGVBQWVFLE1BQU07SUFDbkMsSUFBTUMsU0FBU0QsT0FBT0ksTUFBTSxDQUFDLFNBQUNILFFBQVFNO1FBQ3BDLElBQU1DLFVBQVVELE1BQU1FLFVBQVU7UUFFaENSLFNBQVMsQUFBQyxHQUFXTyxPQUFUUCxRQUFpQixPQUFSTztRQUVyQixPQUFPUDtJQUNULEdBQUdLLHVCQUFZO0lBRWYsT0FBT0w7QUFDVDtBQUVPLFNBQVNMLGFBQWFHLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFNVSxtQkFBbUJYLEtBQUtZLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQUNFO1FBQ3JCLElBQU1DLGVBQWVkLE1BQU8sR0FBRztRQUUvQkMsU0FBU2MscUJBQXFCRCxjQUFjYjtJQUM5QyxPQUFPO1FBQ0wsSUFBTWUsa0JBQWtCaEIsTUFBTSxHQUFHO1FBRWpDQyxTQUFTZ0Isd0JBQXdCRCxpQkFBaUJmO0lBQ3BEO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLFdBQVdELE1BQU07SUFDeEJBLFNBQVNBLE9BQU9nQixPQUFPLENBQUMsUUFBUVgsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9MO0FBQ1Q7QUFFQSxTQUFTYSxxQkFBcUJELFlBQVksRUFBRWIsTUFBTTtJQUNoRCxJQUFNa0IsbUJBQW1CTCxhQUFhTSxtQkFBbUIsSUFDbkRaLFFBQVFXLGtCQUFrQixHQUFHO0lBRW5DbEIsU0FBUztRQUNQTztLQUNEO0lBRUQsT0FBT1A7QUFDVDtBQUVBLFNBQVNnQix3QkFBd0JELGVBQWUsRUFBRWYsTUFBTTtJQUN0RCxJQUFNb0IsNEJBQTRCTCxnQkFBZ0JNLDRCQUE0QixDQUFDckIsU0FDekVzQiw2QkFBNkJQLGdCQUFnQlEsNkJBQTZCLENBQUN2QixTQUMzRXdCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENwQixTQUFTQSxPQUFPMEIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBT3pCO0FBQ1QifQ==