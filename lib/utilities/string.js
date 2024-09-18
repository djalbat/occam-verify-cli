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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICBzdHJpbmcgPSB0ZXJtaW5hbE5vZGVBc1N0cmluZyh0ZXJtaW5hbE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgc3RyaW5nID0gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IHN0cmluZyA9IHRva2Vucy5yZWR1Y2UoKHN0cmluZywgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7Y29udGVudH1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNTdHJpbmciLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1N0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJDT01NQSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLFlBQVk7ZUFBWkE7O0lBb0JBQyxhQUFhO2VBQWJBOzs7eUJBdEJvQjtBQUU3QixTQUFTRCxhQUFhRSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSixJQUFNQyxtQkFBbUJILEtBQUtJLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWVMLE1BQU8sR0FBRztRQUUvQkUsU0FBU0kscUJBQXFCRDtJQUNoQyxPQUFPO1FBQ0wsSUFBTUUsa0JBQWtCUCxNQUFNLEdBQUc7UUFFakNFLFNBQVNNLHdCQUF3QkQsaUJBQWlCTjtJQUNwRDtJQUVBQyxTQUFTQSxPQUFPTyxPQUFPLENBQUMsUUFBUUMsdUJBQVk7SUFFNUMsT0FBT1I7QUFDVDtBQUVPLFNBQVNILGNBQWNZLEtBQUssRUFBRVYsTUFBTTtJQUN6QyxJQUFNQyxTQUFTUyxNQUFNQyxNQUFNLENBQUMsU0FBQ1YsUUFBUUY7UUFDbkMsSUFBTWEsYUFBYWYsYUFBYUUsTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBV1EsdUJBQVksR0FDdEJHLGFBQ0MsQUFBQyxHQUFXQyxPQUFUWixRQUFpQlcsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPWDtJQUNULEdBQUdRLHVCQUFZO0lBRWYsT0FBT1I7QUFDVDtBQUVBLFNBQVNJLHFCQUFxQkQsWUFBWTtJQUN4QyxJQUFNVSxVQUFVVixhQUFhVyxVQUFVLElBQ2pDZCxTQUFTYSxTQUFTLEdBQUc7SUFFM0IsT0FBT2I7QUFDVDtBQUVBLFNBQVNNLHdCQUF3QkQsZUFBZSxFQUFFTixNQUFNO0lBQ3RELElBQU1nQiw0QkFBNEJWLGdCQUFnQlcsNEJBQTRCLENBQUNqQixTQUN6RWtCLDZCQUE2QlosZ0JBQWdCYSw2QkFBNkIsQ0FBQ25CLFNBQzNFb0IsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q2hCLFNBQVNBLE9BQU9zQixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxJQUFNcEIsU0FBU0QsT0FBT1csTUFBTSxDQUFDLFNBQUNWLFFBQVFzQjtRQUNwQyxJQUFNVCxVQUFVUyxNQUFNUixVQUFVO1FBRWhDZCxTQUFTLEFBQUMsR0FBV2EsT0FBVGIsUUFBaUIsT0FBUmE7UUFFckIsT0FBT2I7SUFDVCxHQUFHUSx1QkFBWTtJQUVmLE9BQU9SO0FBQ1QifQ==