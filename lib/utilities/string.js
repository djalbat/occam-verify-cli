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
    string = string.replace(/[\r\n]/, _constants.EMPTY_STRING);
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
    var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBzdHJpbmcgPSB0ZXJtaW5hbE5vZGVBc1N0cmluZyh0ZXJtaW5hbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgc3RyaW5nID0gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXHJcXG5dLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgc3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzU3RyaW5nKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vblRlcm1pbmFsTm9kZUFzU3RyaW5nIiwidGVybWluYWxOb2RlQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkNPTU1BIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQW9CQUMsYUFBYTtlQUFiQTs7SUFxQkFDLHVCQUF1QjtlQUF2QkE7O0lBUEFDLG9CQUFvQjtlQUFwQkE7Ozt5QkFwQ29CO0FBRTdCLFNBQVNILGFBQWFJLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQztJQUVKLElBQU1DLG1CQUFtQkgsS0FBS0ksY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZUwsTUFBTyxHQUFHO1FBRS9CRSxTQUFTSCxxQkFBcUJNO0lBQ2hDLE9BQU87UUFDTCxJQUFNQyxrQkFBa0JOLE1BQU0sR0FBRztRQUVqQ0UsU0FBU0osd0JBQXdCUSxpQkFBaUJMO0lBQ3BEO0lBRUFDLFNBQVNBLE9BQU9LLE9BQU8sQ0FBQyxVQUFVQyx1QkFBWTtJQUU5QyxPQUFPTjtBQUNUO0FBRU8sU0FBU0wsY0FBY1ksS0FBSyxFQUFFUixNQUFNO0lBQ3pDLElBQU1DLFNBQVNPLE1BQU1DLE1BQU0sQ0FBQyxTQUFDUixRQUFRRjtRQUNuQyxJQUFNVyxhQUFhZixhQUFhSSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXTSx1QkFBWSxHQUN0QkcsYUFDQyxBQUFDLEdBQVdDLE9BQVRWLFFBQWlCUyxPQUFSQyxnQkFBSyxFQUFjLE9BQVhEO1FBRWhDLE9BQU9UO0lBQ1QsR0FBR00sdUJBQVk7SUFFZixPQUFPTjtBQUNUO0FBRU8sU0FBU0gscUJBQXFCTSxZQUFZO0lBQy9DLElBQU1RLFVBQVVSLGFBQWFTLFVBQVUsSUFDakNaLFNBQVNXLFNBQVMsR0FBRztJQUUzQixPQUFPWDtBQUNUO0FBRU8sU0FBU0osd0JBQXdCUSxlQUFlLEVBQUVMLE1BQU07SUFDN0QsSUFBTWMsd0JBQXdCVCxnQkFBZ0JVLHdCQUF3QixJQUNoRUMsdUJBQXVCWCxnQkFBZ0JZLHVCQUF1QixJQUM5REMsNkJBQTZCbEIsT0FBT21CLE9BQU8sQ0FBQ0wsd0JBQzVDTSw0QkFBNEJwQixPQUFPbUIsT0FBTyxDQUFDSCx1QkFDM0NLLFFBQVFILDRCQUNSSSxNQUFNRiw0QkFBNEI7SUFFeENwQixTQUFTQSxPQUFPdUIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsSUFBTXJCLFNBQVNELE9BQU9TLE1BQU0sQ0FBQyxTQUFDUixRQUFRdUI7UUFDcEMsSUFBTVosVUFBVVksTUFBTVgsVUFBVTtRQUVoQ1osU0FBUyxBQUFDLEdBQVdXLE9BQVRYLFFBQWlCLE9BQVJXO1FBRXJCLE9BQU9YO0lBQ1QsR0FBR00sdUJBQVk7SUFFZixPQUFPTjtBQUNUIn0=