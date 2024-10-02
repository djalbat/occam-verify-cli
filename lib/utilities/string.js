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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIGNvbnN0IHN0cmluZyA9IHRva2Vucy5yZWR1Y2UoKHN0cmluZywgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7Y29udGVudH1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJ0cmltIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsIm5vZGUiLCJ0b2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1N0cmluZyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzU3RyaW5nIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiQ09NTUEiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWdCQSxZQUFZO2VBQVpBOztJQWtCQUMsYUFBYTtlQUFiQTs7SUF4QkFDLElBQUk7ZUFBSkE7Ozt5QkFGb0I7QUFFN0IsU0FBU0EsS0FBS0MsTUFBTTtJQUN6QkEsU0FBU0EsT0FBT0MsT0FBTyxDQUFDLFFBQVFDLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPRjtBQUNUO0FBRU8sU0FBU0gsYUFBYU0sSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlKO0lBRUosSUFBTUssbUJBQW1CRixLQUFLRyxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlSixNQUFPLEdBQUc7UUFFL0JILFNBQVNRLHFCQUFxQkQ7SUFDaEMsT0FBTztRQUNMLElBQU1FLGtCQUFrQk4sTUFBTSxHQUFHO1FBRWpDSCxTQUFTVSx3QkFBd0JELGlCQUFpQkw7SUFDcEQ7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU0YsY0FBY2EsS0FBSyxFQUFFUCxNQUFNO0lBQ3pDLElBQU1KLFNBQVNXLE1BQU1DLE1BQU0sQ0FBQyxTQUFDWixRQUFRRztRQUNuQyxJQUFNVSxhQUFhaEIsYUFBYU0sTUFBTUM7UUFFdENKLFNBQVMsQUFBQ0EsV0FBV0UsdUJBQVksR0FDdEJXLGFBQ0MsQUFBQyxHQUFXQyxPQUFUZCxRQUFpQmEsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPYjtJQUNULEdBQUdFLHVCQUFZO0lBRWYsT0FBT0Y7QUFDVDtBQUVBLFNBQVNRLHFCQUFxQkQsWUFBWTtJQUN4QyxJQUFNUSxVQUFVUixhQUFhUyxVQUFVLElBQ2pDaEIsU0FBU2UsU0FBUyxHQUFHO0lBRTNCLE9BQU9mO0FBQ1Q7QUFFQSxTQUFTVSx3QkFBd0JELGVBQWUsRUFBRUwsTUFBTTtJQUN0RCxJQUFNYSw0QkFBNEJSLGdCQUFnQlMsNEJBQTRCLENBQUNkLFNBQ3pFZSw2QkFBNkJWLGdCQUFnQlcsNkJBQTZCLENBQUNoQixTQUMzRWlCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENiLFNBQVNBLE9BQU9tQixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxJQUFNdEIsU0FBU0ksT0FBT1EsTUFBTSxDQUFDLFNBQUNaLFFBQVF3QjtRQUNwQyxJQUFNVCxVQUFVUyxNQUFNUixVQUFVO1FBRWhDaEIsU0FBUyxBQUFDLEdBQVdlLE9BQVRmLFFBQWlCLE9BQVJlO1FBRXJCLE9BQU9mO0lBQ1QsR0FBR0UsdUJBQVk7SUFFZixPQUFPRjtBQUNUIn0=