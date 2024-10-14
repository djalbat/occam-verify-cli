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
        z;
        var terminalNode = node; ///
        string = terminalNodeAsString(terminalNode);
    } else {
        var nonTerminalNode = node; ///
        string = nonTerminalNodeAsString(nonTerminalNode, tokens);
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
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge3pcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBzdHJpbmcgPSB0ZXJtaW5hbE5vZGVBc1N0cmluZyh0ZXJtaW5hbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgc3RyaW5nID0gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlcy5yZWR1Y2UoKHN0cmluZywgbm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGVTdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IChzdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgbm9kZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgYCR7c3RyaW5nfSR7Q09NTUF9JHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgc3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJpbSIsInN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJub2RlIiwidG9rZW5zIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwieiIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUFzU3RyaW5nIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQXNTdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJDT01NQSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVZ0JBLFlBQVk7ZUFBWkE7O0lBa0JBQyxhQUFhO2VBQWJBOztJQXhCQUMsSUFBSTtlQUFKQTs7O3lCQUZvQjtBQUU3QixTQUFTQSxLQUFLQyxNQUFNO0lBQ3pCQSxTQUFTQSxPQUFPQyxPQUFPLENBQUMsUUFBUUMsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTSCxhQUFhTSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUo7SUFFSixJQUFNSyxtQkFBbUJGLEtBQUtHLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQUNFO1FBQ3JCLElBQU1DLGVBQWVMLE1BQU8sR0FBRztRQUUvQkgsU0FBU1MscUJBQXFCRDtJQUNoQyxPQUFPO1FBQ0wsSUFBTUUsa0JBQWtCUCxNQUFNLEdBQUc7UUFFakNILFNBQVNXLHdCQUF3QkQsaUJBQWlCTjtJQUNwRDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTRixjQUFjYyxLQUFLLEVBQUVSLE1BQU07SUFDekMsSUFBTUosU0FBU1ksTUFBTUMsTUFBTSxDQUFDLFNBQUNiLFFBQVFHO1FBQ25DLElBQU1XLGFBQWFqQixhQUFhTSxNQUFNQztRQUV0Q0osU0FBUyxBQUFDQSxXQUFXRSx1QkFBWSxHQUN0QlksYUFDQyxBQUFDLEdBQVdDLE9BQVRmLFFBQWlCYyxPQUFSQyxnQkFBSyxFQUFjLE9BQVhEO1FBRWhDLE9BQU9kO0lBQ1QsR0FBR0UsdUJBQVk7SUFFZixPQUFPRjtBQUNUO0FBRUEsU0FBU1MscUJBQXFCRCxZQUFZO0lBQ3hDLElBQU1RLFVBQVVSLGFBQWFTLFVBQVUsSUFDakNqQixTQUFTZ0IsU0FBUyxHQUFHO0lBRTNCLE9BQU9oQjtBQUNUO0FBRUEsU0FBU1csd0JBQXdCRCxlQUFlLEVBQUVOLE1BQU07SUFDdEQsSUFBTWMsNEJBQTRCUixnQkFBZ0JTLDRCQUE0QixDQUFDZixTQUN6RWdCLDZCQUE2QlYsZ0JBQWdCVyw2QkFBNkIsQ0FBQ2pCLFNBQzNFa0IsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q2QsU0FBU0EsT0FBT29CLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLElBQU12QixTQUFTSSxPQUFPUyxNQUFNLENBQUMsU0FBQ2IsUUFBUXlCO1FBQ3BDLElBQU1ULFVBQVVTLE1BQU1SLFVBQVU7UUFFaENqQixTQUFTLEFBQUMsR0FBV2dCLE9BQVRoQixRQUFpQixPQUFSZ0I7UUFFckIsT0FBT2hCO0lBQ1QsR0FBR0UsdUJBQVk7SUFFZixPQUFPRjtBQUNUIn0=