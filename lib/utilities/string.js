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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHRva2VucyA9IG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgc3RyaW5nID0gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICBzdHJpbmcgPSB0cmltU3RyaW5nKHN0cmluZyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge3pcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0b2tlbnMgPSBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiB0cmltU3RyaW5nKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgdG9rZW5zID0gWyAgLy8vXG4gICAgdG9rZW5cbiAgXTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1N0cmluZyIsInRva2Vuc0FzU3RyaW5nIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsInRyaW1TdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJDT01NQSIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ6IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1Rva2VucyIsInJlcGxhY2UiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsWUFBWTtlQUFaQTs7SUFzQ0FDLFlBQVk7ZUFBWkE7O0lBMUJBQyxhQUFhO2VBQWJBOztJQWNBQyxjQUFjO2VBQWRBOzs7eUJBNUJvQjtBQUU3QixTQUFTSCxhQUFhSSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSkQsU0FBU0osYUFBYUcsTUFBTUMsU0FBVSxHQUFHO0lBRXpDQyxTQUFTSCxlQUFlRTtJQUV4QkMsU0FBU0MsV0FBV0QsU0FBVSxHQUFHO0lBRWpDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSixjQUFjTSxLQUFLLEVBQUVILE1BQU07SUFDekMsSUFBTUMsU0FBU0UsTUFBTUMsTUFBTSxDQUFDLFNBQUNILFFBQVFGO1FBQ25DLElBQU1NLGFBQWFWLGFBQWFJLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVdLLHVCQUFZLEdBQ3RCRCxhQUNDLEFBQUMsR0FBV0UsT0FBVE4sUUFBaUJJLE9BQVJFLGdCQUFLLEVBQWMsT0FBWEY7UUFFaEMsT0FBT0o7SUFDVCxHQUFHSyx1QkFBWTtJQUVmLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTSCxlQUFlRSxNQUFNO0lBQ25DLElBQU1DLFNBQVNELE9BQU9JLE1BQU0sQ0FBQyxTQUFDSCxRQUFRTztRQUNwQyxJQUFNQyxVQUFVRCxNQUFNRSxVQUFVO1FBRWhDVCxTQUFTLEFBQUMsR0FBV1EsT0FBVFIsUUFBaUIsT0FBUlE7UUFFckIsT0FBT1I7SUFDVCxHQUFHSyx1QkFBWTtJQUVmLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTTCxhQUFhRyxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBTVcsbUJBQW1CWixLQUFLYSxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUFDRTtRQUNyQixJQUFNQyxlQUFlZixNQUFPLEdBQUc7UUFFL0JDLFNBQVNlLHFCQUFxQkQsY0FBY2Q7SUFDOUMsT0FBTztRQUNMLElBQU1nQixrQkFBa0JqQixNQUFNLEdBQUc7UUFFakNDLFNBQVNpQix3QkFBd0JELGlCQUFpQmhCO0lBQ3BEO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLFdBQVdELE1BQU07SUFDeEJBLFNBQVNBLE9BQU9pQixPQUFPLENBQUMsUUFBUVosdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9MO0FBQ1Q7QUFFQSxTQUFTYyxxQkFBcUJELFlBQVksRUFBRWQsTUFBTTtJQUNoRCxJQUFNbUIsbUJBQW1CTCxhQUFhTSxtQkFBbUIsSUFDbkRaLFFBQVFXLGtCQUFrQixHQUFHO0lBRW5DbkIsU0FBUztRQUNQUTtLQUNEO0lBRUQsT0FBT1I7QUFDVDtBQUVBLFNBQVNpQix3QkFBd0JELGVBQWUsRUFBRWhCLE1BQU07SUFDdEQsSUFBTXFCLDRCQUE0QkwsZ0JBQWdCTSw0QkFBNEIsQ0FBQ3RCLFNBQ3pFdUIsNkJBQTZCUCxnQkFBZ0JRLDZCQUE2QixDQUFDeEIsU0FDM0V5QixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDckIsU0FBU0EsT0FBTzJCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU8xQjtBQUNUIn0=