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
    var string = null;
    if (node !== null) {
        var nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            var terminalNode = node, content = terminalNode.getContent();
            string = content; ///
        } else {
            var nonTerminalNode = node, firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
            tokens = tokens.slice(start, end); ///
            string = tokens.reduce(function(string, token) {
                var content = token.getContent();
                string = "".concat(string).concat(content);
                return string;
            }, _constants.EMPTY_STRING);
        }
    }
    if (string !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHN0cmluZyA9IGNvbnRlbnQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICAgICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHRva2Vucy5yZWR1Y2UoKHN0cmluZywgdG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH0sIEVNUFRZX1NUUklORyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXFxyXFxuXS8sIEVNUFRZX1NUUklORylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInJlZHVjZSIsInRva2VuIiwiRU1QVFlfU1RSSU5HIiwicmVwbGFjZSIsIm5vZGVzIiwibm9kZVN0cmluZyIsIkNPTU1BIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLFlBQVk7ZUFBWkE7O0lBdUNBQyxhQUFhO2VBQWJBOzs7eUJBekNvQjtBQUU3QixTQUFTRCxhQUFhRSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUMsU0FBUztJQUViLElBQUlGLFNBQVMsTUFBTTtRQUNqQixJQUFNRyxtQkFBbUJILEtBQUtJLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVMLE1BQ2ZNLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNMLFNBQVNJLFNBQVMsR0FBRztRQUN2QixPQUFPO1lBQ0wsSUFBTUUsa0JBQWtCUixNQUNsQlMsd0JBQXdCRCxnQkFBZ0JFLHdCQUF3QixJQUNoRUMsdUJBQXVCSCxnQkFBZ0JJLHVCQUF1QixJQUM5REMsNkJBQTZCWixPQUFPYSxPQUFPLENBQUNMLHdCQUM1Q00sNEJBQTRCZCxPQUFPYSxPQUFPLENBQUNILHVCQUMzQ0ssUUFBUUgsNEJBQ1JJLE1BQU1GLDRCQUE0QjtZQUV4Q2QsU0FBU0EsT0FBT2lCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO1lBRXZDZixTQUFTRCxPQUFPa0IsTUFBTSxDQUFDLFNBQUNqQixRQUFRa0I7Z0JBQzlCLElBQU1kLFVBQVVjLE1BQU1iLFVBQVU7Z0JBRWhDTCxTQUFTLEFBQUMsR0FBV0ksT0FBVEosUUFBaUIsT0FBUkk7Z0JBRXJCLE9BQU9KO1lBQ1QsR0FBR21CLHVCQUFZO1FBQ2pCO0lBQ0Y7SUFFQSxJQUFJbkIsV0FBVyxNQUFNO1FBQ25CQSxTQUFTQSxPQUFPb0IsT0FBTyxDQUFDLFVBQVVELHVCQUFZO0lBQ2hEO0lBRUEsT0FBT25CO0FBQ1Q7QUFFTyxTQUFTSCxjQUFjd0IsS0FBSyxFQUFFdEIsTUFBTTtJQUN6QyxJQUFNQyxTQUFTcUIsTUFBTUosTUFBTSxDQUFDLFNBQUNqQixRQUFRRjtRQUNuQyxJQUFNd0IsYUFBYTFCLGFBQWFFLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVdtQix1QkFBWSxHQUN0QkcsYUFDQyxBQUFDLEdBQVdDLE9BQVR2QixRQUFpQnNCLE9BQVJDLGdCQUFLLEVBQWMsT0FBWEQ7UUFFaEMsT0FBT3RCO0lBQ1QsR0FBR21CLHVCQUFZO0lBRWYsT0FBT25CO0FBQ1QifQ==