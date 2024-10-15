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
    },
    trim: function() {
        return trim;
    }
});
var _constants = require("../constants");
function trim(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function nodeAsString(node, tokens) {
    var string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    return string;
}
function nodesAsString(nodes, tokens) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node, tokens);
        string = string === _constants.EMPTY_STRING ? nodeString : "".concat(string).concat(_constants.COMMA).concat(nodeString);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IHRva2Vucy5yZWR1Y2UoKHN0cmluZywgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7Y29udGVudH1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7elxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHRva2VucyA9IFsgIC8vL1xuICAgIHRva2VuXG4gIF07XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNTdHJpbmciLCJ0b2tlbnNBc1N0cmluZyIsInRyaW0iLCJzdHJpbmciLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwibm9kZSIsInRva2VucyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkNPTU1BIiwidG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInoiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVZ0JBLFlBQVk7ZUFBWkE7O0lBb0NBQyxZQUFZO2VBQVpBOztJQTFCQUMsYUFBYTtlQUFiQTs7SUFjQUMsY0FBYztlQUFkQTs7SUE5QkFDLElBQUk7ZUFBSkE7Ozt5QkFGb0I7QUFFN0IsU0FBU0EsS0FBS0MsTUFBTTtJQUN6QkEsU0FBU0EsT0FBT0MsT0FBTyxDQUFDLFFBQVFDLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPRjtBQUNUO0FBRU8sU0FBU0wsYUFBYVEsSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlKO0lBRUpJLFNBQVNSLGFBQWFPLE1BQU1DLFNBQVUsR0FBRztJQUV6Q0osU0FBU0YsZUFBZU07SUFFeEIsT0FBT0o7QUFDVDtBQUVPLFNBQVNILGNBQWNRLEtBQUssRUFBRUQsTUFBTTtJQUN6QyxJQUFNSixTQUFTSyxNQUFNQyxNQUFNLENBQUMsU0FBQ04sUUFBUUc7UUFDbkMsSUFBTUksYUFBYVosYUFBYVEsTUFBTUM7UUFFdENKLFNBQVMsQUFBQ0EsV0FBV0UsdUJBQVksR0FDdEJLLGFBQ0MsQUFBQyxHQUFXQyxPQUFUUixRQUFpQk8sT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPUDtJQUNULEdBQUdFLHVCQUFZO0lBRWYsT0FBT0Y7QUFDVDtBQUVPLFNBQVNGLGVBQWVNLE1BQU07SUFDbkMsSUFBTUosU0FBU0ksT0FBT0UsTUFBTSxDQUFDLFNBQUNOLFFBQVFTO1FBQ3BDLElBQU1DLFVBQVVELE1BQU1FLFVBQVU7UUFFaENYLFNBQVMsQUFBQyxHQUFXVSxPQUFUVixRQUFpQixPQUFSVTtRQUVyQixPQUFPVjtJQUNULEdBQUdFLHVCQUFZO0lBRWYsT0FBT0Y7QUFDVDtBQUVPLFNBQVNKLGFBQWFPLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFNUSxtQkFBbUJULEtBQUtVLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQUNFO1FBQ3JCLElBQU1DLGVBQWVaLE1BQU8sR0FBRztRQUUvQkMsU0FBU1kscUJBQXFCRCxjQUFjWDtJQUM5QyxPQUFPO1FBQ0wsSUFBTWEsa0JBQWtCZCxNQUFNLEdBQUc7UUFFakNDLFNBQVNjLHdCQUF3QkQsaUJBQWlCYjtJQUNwRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTWSxxQkFBcUJELFlBQVksRUFBRVgsTUFBTTtJQUNoRCxJQUFNZSxtQkFBbUJKLGFBQWFLLG1CQUFtQixJQUNuRFgsUUFBUVUsa0JBQWtCLEdBQUc7SUFFbkNmLFNBQVM7UUFDUEs7S0FDRDtJQUVELE9BQU9MO0FBQ1Q7QUFFQSxTQUFTYyx3QkFBd0JELGVBQWUsRUFBRWIsTUFBTTtJQUN0RCxJQUFNaUIsNEJBQTRCSixnQkFBZ0JLLDRCQUE0QixDQUFDbEIsU0FDekVtQiw2QkFBNkJOLGdCQUFnQk8sNkJBQTZCLENBQUNwQixTQUMzRXFCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENqQixTQUFTQSxPQUFPdUIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBT3RCO0FBQ1QifQ==