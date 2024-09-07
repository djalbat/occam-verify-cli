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
        string = string.replace(/\s+$/, _constants.EMPTY_STRING);
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
    var string;
    if (tokens === null) {
        var childNodes = nonTerminalNode.getChildNodes();
        string = childNodes.reduce(function(string, childNode) {
            var node = childNode, nodeString = nodeAsString(node, tokens);
            string = "".concat(string).concat(nodeString);
            return string;
        }, _constants.EMPTY_STRING);
    } else {
        var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
        tokens = tokens.slice(start, end); ///
        string = tokens.reduce(function(string, token) {
            var content = token.getContent();
            string = "".concat(string).concat(content);
            return string;
        }, _constants.EMPTY_STRING);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHRlcm1pbmFsTm9kZUFzU3RyaW5nKHRlcm1pbmFsTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBzdHJpbmcgPSBub25UZXJtaW5hbE5vZGVBc1N0cmluZyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybWluYWxOb2RlQXNTdHJpbmcodGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNTdHJpbmcobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgbGV0IHN0cmluZztcblxuICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBzdHJpbmcgPSBjaGlsZE5vZGVzLnJlZHVjZSgoc3RyaW5nLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtub2RlU3RyaW5nfWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgICBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vblRlcm1pbmFsTm9kZUFzU3RyaW5nIiwidGVybWluYWxOb2RlQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZSIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkNPTU1BIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZSIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQXNCQUMsYUFBYTtlQUFiQTs7SUFxQkFDLHVCQUF1QjtlQUF2QkE7O0lBUEFDLG9CQUFvQjtlQUFwQkE7Ozt5QkF0Q29CO0FBRTdCLFNBQVNILGFBQWFJLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQyxTQUFTQyx1QkFBWTtJQUV6QixJQUFJSCxTQUFTLE1BQU07UUFDakIsSUFBTUksbUJBQW1CSixLQUFLSyxjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixJQUFNRSxlQUFlTixNQUFPLEdBQUc7WUFFL0JFLFNBQVNILHFCQUFxQk87UUFDaEMsT0FBTztZQUNMLElBQU1DLGtCQUFrQlAsTUFBTSxHQUFHO1lBRWpDRSxTQUFTSix3QkFBd0JTLGlCQUFpQk47UUFDcEQ7UUFFQUMsU0FBU0EsT0FBT00sT0FBTyxDQUFDLFFBQVFMLHVCQUFZO0lBQzlDO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNMLGNBQWNZLEtBQUssRUFBRVIsTUFBTTtJQUN6QyxJQUFNQyxTQUFTTyxNQUFNQyxNQUFNLENBQUMsU0FBQ1IsUUFBUUY7UUFDbkMsSUFBTVcsYUFBYWYsYUFBYUksTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBV0MsdUJBQVksR0FDdEJRLGFBQ0MsQUFBQyxHQUFXQyxPQUFUVixRQUFpQlMsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUVoQyxPQUFPVDtJQUNULEdBQUdDLHVCQUFZO0lBRWYsT0FBT0Q7QUFDVDtBQUVPLFNBQVNILHFCQUFxQk8sWUFBWTtJQUMvQyxJQUFNTyxVQUFVUCxhQUFhUSxVQUFVLElBQ2pDWixTQUFTVyxTQUFTLEdBQUc7SUFFM0IsT0FBT1g7QUFDVDtBQUVPLFNBQVNKLHdCQUF3QlMsZUFBZSxFQUFFTixNQUFNO0lBQzdELElBQUlDO0lBRUosSUFBSUQsV0FBVyxNQUFNO1FBQ25CLElBQU1jLGFBQWFSLGdCQUFnQlMsYUFBYTtRQUVoRGQsU0FBU2EsV0FBV0wsTUFBTSxDQUFDLFNBQUNSLFFBQVFlO1lBQ2xDLElBQU1qQixPQUFPaUIsV0FDUE4sYUFBYWYsYUFBYUksTUFBTUM7WUFFdENDLFNBQVMsQUFBQyxHQUFXUyxPQUFUVCxRQUFvQixPQUFYUztZQUVyQixPQUFPVDtRQUNULEdBQUdDLHVCQUFZO0lBQ2pCLE9BQU87UUFDTCxJQUFNZSw0QkFBNEJYLGdCQUFnQlksNEJBQTRCLENBQUNsQixTQUN6RW1CLDZCQUE2QmIsZ0JBQWdCYyw2QkFBNkIsQ0FBQ3BCLFNBQzNFcUIsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtRQUV4Q2pCLFNBQVNBLE9BQU91QixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztRQUV2Q3JCLFNBQVNELE9BQU9TLE1BQU0sQ0FBQyxTQUFDUixRQUFRdUI7WUFDOUIsSUFBTVosVUFBVVksTUFBTVgsVUFBVTtZQUVoQ1osU0FBUyxBQUFDLEdBQVdXLE9BQVRYLFFBQWlCLE9BQVJXO1lBRXJCLE9BQU9YO1FBQ1QsR0FBR0MsdUJBQVk7SUFDakI7SUFFQSxPQUFPRDtBQUNUIn0=