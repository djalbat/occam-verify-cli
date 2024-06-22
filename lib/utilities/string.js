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
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXHJcXG5dLywgRU1QVFlfU1RSSU5HKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9uVGVybWluYWxOb2RlQXNTdHJpbmciLCJ0ZXJtaW5hbE5vZGVBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiQ09NTUEiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQXNCQUMsYUFBYTtlQUFiQTs7SUFxQkFDLHVCQUF1QjtlQUF2QkE7O0lBUEFDLG9CQUFvQjtlQUFwQkE7Ozt5QkF0Q29CO0FBRTdCLFNBQVNILGFBQWFJLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQyxTQUFTQyx1QkFBWTtJQUV6QixJQUFJSCxTQUFTLE1BQU07UUFDakIsSUFBTUksbUJBQW1CSixLQUFLSyxjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixJQUFNRSxlQUFlTixNQUFPLEdBQUc7WUFFL0JFLFNBQVNILHFCQUFxQk87UUFDaEMsT0FBTztZQUNMLElBQU1DLGtCQUFrQlAsTUFBTSxHQUFHO1lBRWpDRSxTQUFTSix3QkFBd0JTLGlCQUFpQk47UUFDcEQ7UUFFQUMsU0FBU0EsT0FBT00sT0FBTyxDQUFDLFVBQVVMLHVCQUFZO0lBQ2hEO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNMLGNBQWNZLEtBQUssRUFBRVIsTUFBTTtJQUN6QyxJQUFNQyxTQUFTTyxNQUFNQyxNQUFNLENBQUMsU0FBQ1IsUUFBUUY7UUFDbkMsSUFBTVcsYUFBYWYsYUFBYUksTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBV0MsdUJBQVksR0FDdEJRLGFBQ0MsQUFBQyxHQUFXQyxPQUFUVixRQUFpQlMsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPVDtJQUNULEdBQUdDLHVCQUFZO0lBRWYsT0FBT0Q7QUFDVDtBQUVPLFNBQVNILHFCQUFxQk8sWUFBWTtJQUMvQyxJQUFNTyxVQUFVUCxhQUFhUSxVQUFVLElBQ2pDWixTQUFTVyxTQUFTLEdBQUc7SUFFM0IsT0FBT1g7QUFDVDtBQUVPLFNBQVNKLHdCQUF3QlMsZUFBZSxFQUFFTixNQUFNO0lBQzdELElBQU1jLDRCQUE0QlIsZ0JBQWdCUyw0QkFBNEIsQ0FBQ2YsU0FDekVnQiw2QkFBNkJWLGdCQUFnQlcsNkJBQTZCLENBQUNqQixTQUMzRWtCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENkLFNBQVNBLE9BQU9vQixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxJQUFNbEIsU0FBU0QsT0FBT1MsTUFBTSxDQUFDLFNBQUNSLFFBQVFvQjtRQUNwQyxJQUFNVCxVQUFVUyxNQUFNUixVQUFVO1FBRWhDWixTQUFTLEFBQUMsR0FBV1csT0FBVFgsUUFBaUIsT0FBUlc7UUFFckIsT0FBT1g7SUFDVCxHQUFHQyx1QkFBWTtJQUVmLE9BQU9EO0FBQ1QifQ==