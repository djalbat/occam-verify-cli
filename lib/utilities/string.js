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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBzdHJpbmcgPSB0ZXJtaW5hbE5vZGVBc1N0cmluZyh0ZXJtaW5hbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgc3RyaW5nID0gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgc3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzU3RyaW5nKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vblRlcm1pbmFsTm9kZUFzU3RyaW5nIiwidGVybWluYWxOb2RlQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkNPTU1BIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwidG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsWUFBWTtlQUFaQTs7SUFvQkFDLGFBQWE7ZUFBYkE7O0lBcUJBQyx1QkFBdUI7ZUFBdkJBOztJQVBBQyxvQkFBb0I7ZUFBcEJBOzs7eUJBcENvQjtBQUU3QixTQUFTSCxhQUFhSSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSixJQUFNQyxtQkFBbUJILEtBQUtJLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWVMLE1BQU8sR0FBRztRQUUvQkUsU0FBU0gscUJBQXFCTTtJQUNoQyxPQUFPO1FBQ0wsSUFBTUMsa0JBQWtCTixNQUFNLEdBQUc7UUFFakNFLFNBQVNKLHdCQUF3QlEsaUJBQWlCTDtJQUNwRDtJQUVBQyxTQUFTQSxPQUFPSyxPQUFPLENBQUMsUUFBUUMsdUJBQVk7SUFFNUMsT0FBT047QUFDVDtBQUVPLFNBQVNMLGNBQWNZLEtBQUssRUFBRVIsTUFBTTtJQUN6QyxJQUFNQyxTQUFTTyxNQUFNQyxNQUFNLENBQUMsU0FBQ1IsUUFBUUY7UUFDbkMsSUFBTVcsYUFBYWYsYUFBYUksTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBV00sdUJBQVksR0FDdEJHLGFBQ0MsQUFBQyxHQUFXQyxPQUFUVixRQUFpQlMsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPVDtJQUNULEdBQUdNLHVCQUFZO0lBRWYsT0FBT047QUFDVDtBQUVPLFNBQVNILHFCQUFxQk0sWUFBWTtJQUMvQyxJQUFNUSxVQUFVUixhQUFhUyxVQUFVLElBQ2pDWixTQUFTVyxTQUFTLEdBQUc7SUFFM0IsT0FBT1g7QUFDVDtBQUVPLFNBQVNKLHdCQUF3QlEsZUFBZSxFQUFFTCxNQUFNO0lBQzdELElBQU1jLDRCQUE0QlQsZ0JBQWdCVSw0QkFBNEIsQ0FBQ2YsU0FDekVnQiw2QkFBNkJYLGdCQUFnQlksNkJBQTZCLENBQUNqQixTQUMzRWtCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENkLFNBQVNBLE9BQU9vQixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxJQUFNbEIsU0FBU0QsT0FBT1MsTUFBTSxDQUFDLFNBQUNSLFFBQVFvQjtRQUNwQyxJQUFNVCxVQUFVUyxNQUFNUixVQUFVO1FBRWhDWixTQUFTLEFBQUMsR0FBV1csT0FBVFgsUUFBaUIsT0FBUlc7UUFFckIsT0FBT1g7SUFDVCxHQUFHTSx1QkFBWTtJQUVmLE9BQU9OO0FBQ1QifQ==