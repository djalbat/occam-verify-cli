"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get nodeAsString () {
        return nodeAsString;
    },
    get nodesAsString () {
        return nodesAsString;
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
        string = string === null ? nodeString : "".concat(string, ", ").concat(nodeString);
        return string;
    }, null);
    return string;
}
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
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
        var terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBub2RlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCAke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHRva2VucyA9IFsgIC8vL1xuICAgIHRva2VuXG4gIF07XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmltU3RyaW5nIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7O3lCQWRhO0FBRXRCLFNBQVNELGFBQWFFLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQztJQUVKRCxTQUFTRSxhQUFhSCxNQUFNQyxTQUFVLEdBQUc7SUFFekNDLFNBQVNFLGVBQWVIO0lBRXhCQyxTQUFTRyxXQUFXSCxTQUFVLEdBQUc7SUFFakMsT0FBT0E7QUFDVDtBQUVPLFNBQVNILGNBQWNPLEtBQUssRUFBRUwsTUFBTTtJQUN6QyxJQUFNQyxTQUFTSSxNQUFNQyxNQUFNLENBQUMsU0FBQ0wsUUFBUUY7UUFDbkMsSUFBTVEsYUFBYVYsYUFBYUUsTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBVyxPQUNWTSxhQUNDLEFBQUMsR0FBYUEsT0FBWE4sUUFBTyxNQUFlLE9BQVhNO1FBRTFCLE9BQU9OO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRyxXQUFXSCxNQUFNO0lBQ3hCQSxTQUFTQSxPQUFPTyxPQUFPLENBQUMsUUFBUUMsdUJBQVksR0FBSSxHQUFHO0lBRW5ELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTRSxlQUFlSCxNQUFNO0lBQzVCLElBQU1DLFNBQVNELE9BQU9NLE1BQU0sQ0FBQyxTQUFDTCxRQUFRUztRQUNwQyxJQUFNQyxVQUFVRCxNQUFNRSxVQUFVO1FBRWhDWCxTQUFTLEFBQUMsR0FBV1UsT0FBVFYsUUFBaUIsT0FBUlU7UUFFckIsT0FBT1Y7SUFDVCxHQUFHUSx1QkFBWTtJQUVmLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTQyxhQUFhSCxJQUFJLEVBQUVDLE1BQU07SUFDaEMsSUFBTWEsbUJBQW1CZCxLQUFLZSxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlaEIsTUFBTyxHQUFHO1FBRS9CQyxTQUFTZ0IscUJBQXFCRCxjQUFjZjtJQUM5QyxPQUFPO1FBQ0wsSUFBTWlCLGtCQUFrQmxCLE1BQU0sR0FBRztRQUVqQ0MsU0FBU2tCLHdCQUF3QkQsaUJBQWlCakI7SUFDcEQ7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU2dCLHFCQUFxQkQsWUFBWSxFQUFFZixNQUFNO0lBQ2hELElBQU1tQixtQkFBbUJKLGFBQWFLLG1CQUFtQixJQUNuRFYsUUFBUVMsa0JBQWtCLEdBQUc7SUFFbkNuQixTQUFTO1FBQ1BVO0tBQ0Q7SUFFRCxPQUFPVjtBQUNUO0FBRUEsU0FBU2tCLHdCQUF3QkQsZUFBZSxFQUFFakIsTUFBTTtJQUN0RCxJQUFNcUIsNEJBQTRCSixnQkFBZ0JLLDRCQUE0QixDQUFDdEIsU0FDekV1Qiw2QkFBNkJOLGdCQUFnQk8sNkJBQTZCLENBQUN4QixTQUMzRXlCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENyQixTQUFTQSxPQUFPMkIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBTzFCO0FBQ1QifQ==