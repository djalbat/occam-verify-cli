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
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        string = terminalNodeAsString(terminalNode);
    } else {
        var nonTerminalNode = node; ///
        string = nonTerminalNodeAsString(nonTerminalNode, tokens);
    }
    string = string.replace(/\s+$/, _constants.EMPTY_STRING);
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
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKyQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1N0cmluZyh0ZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzU3RyaW5nKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInRyaW0iLCJzdHJpbmciLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwibm9kZSIsInRva2VucyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUFzU3RyaW5nIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQXNTdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJDT01NQSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVZ0JBLFlBQVk7ZUFBWkE7O0lBb0JBQyxhQUFhO2VBQWJBOztJQTFCQUMsSUFBSTtlQUFKQTs7O3lCQUZvQjtBQUU3QixTQUFTQSxLQUFLQyxNQUFNO0lBQ3pCQSxTQUFTQSxPQUFPQyxPQUFPLENBQUMsUUFBUUMsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTSCxhQUFhTSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUo7SUFFSixJQUFNSyxtQkFBbUJGLEtBQUtHLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWVKLE1BQU8sR0FBRztRQUUvQkgsU0FBU1EscUJBQXFCRDtJQUNoQyxPQUFPO1FBQ0wsSUFBTUUsa0JBQWtCTixNQUFNLEdBQUc7UUFFakNILFNBQVNVLHdCQUF3QkQsaUJBQWlCTDtJQUNwRDtJQUVBSixTQUFTQSxPQUFPQyxPQUFPLENBQUMsUUFBUUMsdUJBQVk7SUFFNUMsT0FBT0Y7QUFDVDtBQUVPLFNBQVNGLGNBQWNhLEtBQUssRUFBRVAsTUFBTTtJQUN6QyxJQUFNSixTQUFTVyxNQUFNQyxNQUFNLENBQUMsU0FBQ1osUUFBUUc7UUFDbkMsSUFBTVUsYUFBYWhCLGFBQWFNLE1BQU1DO1FBRXRDSixTQUFTLEFBQUNBLFdBQVdFLHVCQUFZLEdBQ3RCVyxhQUNDLEFBQUMsR0FBV0MsT0FBVGQsUUFBaUJhLE9BQVJDLGdCQUFLLEVBQWMsT0FBWEQ7UUFFaEMsT0FBT2I7SUFDVCxHQUFHRSx1QkFBWTtJQUVmLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTUSxxQkFBcUJELFlBQVk7SUFDeEMsSUFBTVEsVUFBVVIsYUFBYVMsVUFBVSxJQUNqQ2hCLFNBQVNlLFNBQVMsR0FBRztJQUUzQixPQUFPZjtBQUNUO0FBRUEsU0FBU1Usd0JBQXdCRCxlQUFlLEVBQUVMLE1BQU07SUFDdEQsSUFBTWEsNEJBQTRCUixnQkFBZ0JTLDRCQUE0QixDQUFDZCxTQUN6RWUsNkJBQTZCVixnQkFBZ0JXLDZCQUE2QixDQUFDaEIsU0FDM0VpQixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDYixTQUFTQSxPQUFPbUIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsSUFBTXRCLFNBQVNJLE9BQU9RLE1BQU0sQ0FBQyxTQUFDWixRQUFRd0I7UUFDcEMsSUFBTVQsVUFBVVMsTUFBTVIsVUFBVTtRQUVoQ2hCLFNBQVMsQUFBQyxHQUFXZSxPQUFUZixRQUFpQixPQUFSZTtRQUVyQixPQUFPZjtJQUNULEdBQUdFLHVCQUFZO0lBRWYsT0FBT0Y7QUFDVCJ9