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
    nodesAsString: function() {
        return nodesAsString;
    },
    nonTerminalNodeAsString: function() {
        return nonTerminalNodeAsString;
    },
    terminalNodeAsString: function() {
        return terminalNodeAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node, tokens) {
    var string = _constants.EMPTY_STRING;
    if (node !== null) {
        var nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            var terminalNode = node; ///
            string = terminalNodeAsString(terminalNode);
        } else {
            var nonTerminalNode = node; ///
            string = nonTerminalNodeAsString(nonTerminalNode, tokens);
        }
        string = string.replace(/[\r\n]/, _constants.EMPTY_STRING);
    }
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
function terminalNodeAsString(terminalNode) {
    var content = terminalNode.getContent(), string = content; ///
    return string;
}
function nonTerminalNodeAsString(nonTerminalNode, tokens) {
    var lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXHJcXG5dLywgRU1QVFlfU1RSSU5HKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9uVGVybWluYWxOb2RlQXNTdHJpbmciLCJ0ZXJtaW5hbE5vZGVBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiQ09NTUEiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsWUFBWTtlQUFaQTs7SUFzQkFDLGFBQWE7ZUFBYkE7O0lBcUJBQyx1QkFBdUI7ZUFBdkJBOztJQVBBQyxvQkFBb0I7ZUFBcEJBOzs7eUJBdENvQjtBQUU3QixTQUFTSCxhQUFhSSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUMsU0FBU0MsdUJBQVk7SUFFekIsSUFBSUgsU0FBUyxNQUFNO1FBQ2pCLElBQU1JLG1CQUFtQkosS0FBS0ssY0FBYztRQUU1QyxJQUFJRCxrQkFBa0I7WUFDcEIsSUFBTUUsZUFBZU4sTUFBTyxHQUFHO1lBRS9CRSxTQUFTSCxxQkFBcUJPO1FBQ2hDLE9BQU87WUFDTCxJQUFNQyxrQkFBa0JQLE1BQU0sR0FBRztZQUVqQ0UsU0FBU0osd0JBQXdCUyxpQkFBaUJOO1FBQ3BEO1FBRUFDLFNBQVNBLE9BQU9NLE9BQU8sQ0FBQyxVQUFVTCx1QkFBWTtJQUNoRDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTTCxjQUFjWSxLQUFLLEVBQUVSLE1BQU07SUFDekMsSUFBTUMsU0FBU08sTUFBTUMsTUFBTSxDQUFDLFNBQUNSLFFBQVFGO1FBQ25DLElBQU1XLGFBQWFmLGFBQWFJLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVdDLHVCQUFZLEdBQ3RCUSxhQUNDLEFBQUMsR0FBV0MsT0FBVFYsUUFBaUJTLE9BQVJDLGdCQUFLLEVBQWMsT0FBWEQ7UUFFaEMsT0FBT1Q7SUFDVCxHQUFHQyx1QkFBWTtJQUVmLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTSCxxQkFBcUJPLFlBQVk7SUFDL0MsSUFBTU8sVUFBVVAsYUFBYVEsVUFBVSxJQUNqQ1osU0FBU1csU0FBUyxHQUFHO0lBRTNCLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTSix3QkFBd0JTLGVBQWUsRUFBRU4sTUFBTTtJQUM3RCxJQUFNYyx1QkFBdUJSLGdCQUFnQlMsdUJBQXVCLElBQzlEQyx3QkFBd0JWLGdCQUFnQlcsd0JBQXdCLElBQ2hFQyw0QkFBNEJsQixPQUFPbUIsT0FBTyxDQUFDTCx1QkFDM0NNLDZCQUE2QnBCLE9BQU9tQixPQUFPLENBQUNILHdCQUM1Q0ssUUFBUUQsNEJBQ1JFLE1BQU1KLDRCQUE0QjtJQUV4Q2xCLFNBQVNBLE9BQU91QixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxJQUFNckIsU0FBU0QsT0FBT1MsTUFBTSxDQUFDLFNBQUNSLFFBQVF1QjtRQUNwQyxJQUFNWixVQUFVWSxNQUFNWCxVQUFVO1FBRWhDWixTQUFTLEFBQUMsR0FBV1csT0FBVFgsUUFBaUIsT0FBUlc7UUFFckIsT0FBT1g7SUFDVCxHQUFHQyx1QkFBWTtJQUVmLE9BQU9EO0FBQ1QifQ==