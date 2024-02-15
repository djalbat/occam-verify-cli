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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXHJcXG5dLywgRU1QVFlfU1RSSU5HKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9uVGVybWluYWxOb2RlQXNTdHJpbmciLCJ0ZXJtaW5hbE5vZGVBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiQ09NTUEiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLFlBQVk7ZUFBWkE7O0lBc0JBQyxhQUFhO2VBQWJBOztJQXFCQUMsdUJBQXVCO2VBQXZCQTs7SUFQQUMsb0JBQW9CO2VBQXBCQTs7O3lCQXRDb0I7QUFFN0IsU0FBU0gsYUFBYUksSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDLFNBQVNDLHVCQUFZO0lBRXpCLElBQUlILFNBQVMsTUFBTTtRQUNqQixJQUFNSSxtQkFBbUJKLEtBQUtLLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVOLE1BQU8sR0FBRztZQUUvQkUsU0FBU0gscUJBQXFCTztRQUNoQyxPQUFPO1lBQ0wsSUFBTUMsa0JBQWtCUCxNQUFNLEdBQUc7WUFFakNFLFNBQVNKLHdCQUF3QlMsaUJBQWlCTjtRQUNwRDtRQUVBQyxTQUFTQSxPQUFPTSxPQUFPLENBQUMsVUFBVUwsdUJBQVk7SUFDaEQ7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU0wsY0FBY1ksS0FBSyxFQUFFUixNQUFNO0lBQ3pDLElBQU1DLFNBQVNPLE1BQU1DLE1BQU0sQ0FBQyxTQUFDUixRQUFRRjtRQUNuQyxJQUFNVyxhQUFhZixhQUFhSSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXQyx1QkFBWSxHQUN0QlEsYUFDQyxBQUFDLEdBQVdDLE9BQVRWLFFBQWlCUyxPQUFSQyxnQkFBSyxFQUFjLE9BQVhEO1FBRWhDLE9BQU9UO0lBQ1QsR0FBR0MsdUJBQVk7SUFFZixPQUFPRDtBQUNUO0FBRU8sU0FBU0gscUJBQXFCTyxZQUFZO0lBQy9DLElBQU1PLFVBQVVQLGFBQWFRLFVBQVUsSUFDakNaLFNBQVNXLFNBQVMsR0FBRztJQUUzQixPQUFPWDtBQUNUO0FBRU8sU0FBU0osd0JBQXdCUyxlQUFlLEVBQUVOLE1BQU07SUFDN0QsSUFBTWMsdUJBQXVCUixnQkFBZ0JTLHVCQUF1QixJQUM5REMsd0JBQXdCVixnQkFBZ0JXLHdCQUF3QixJQUNoRUMsNEJBQTRCbEIsT0FBT21CLE9BQU8sQ0FBQ0wsdUJBQzNDTSw2QkFBNkJwQixPQUFPbUIsT0FBTyxDQUFDSCx3QkFDNUNLLFFBQVFELDRCQUNSRSxNQUFNSiw0QkFBNEI7SUFFeENsQixTQUFTQSxPQUFPdUIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsSUFBTXJCLFNBQVNELE9BQU9TLE1BQU0sQ0FBQyxTQUFDUixRQUFRdUI7UUFDcEMsSUFBTVosVUFBVVksTUFBTVgsVUFBVTtRQUVoQ1osU0FBUyxBQUFDLEdBQVdXLE9BQVRYLFFBQWlCLE9BQVJXO1FBRXJCLE9BQU9YO0lBQ1QsR0FBR0MsdUJBQVk7SUFFZixPQUFPRDtBQUNUIn0=