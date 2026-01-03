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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHRva2VucyA9IG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgc3RyaW5nID0gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICBzdHJpbmcgPSB0cmltU3RyaW5nKHN0cmluZyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgbm9kZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgYCR7c3RyaW5nfSwgJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0cmltU3RyaW5nKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IHRva2Vucy5yZWR1Y2UoKHN0cmluZywgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7Y29udGVudH1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0b2tlbnMgPSB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0b2tlbnMgPSBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICB0b2tlbnMgPSBbICAvLy9cbiAgICB0b2tlblxuICBdO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwidHJpbVN0cmluZyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJ0b2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1Rva2VucyIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFZQUM7ZUFBQUE7Ozt5QkFkYTtBQUV0QixTQUFTRCxhQUFhRSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSkQsU0FBU0UsYUFBYUgsTUFBTUMsU0FBVSxHQUFHO0lBRXpDQyxTQUFTRSxlQUFlSDtJQUV4QkMsU0FBU0csV0FBV0gsU0FBVSxHQUFHO0lBRWpDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSCxjQUFjTyxLQUFLLEVBQUVMLE1BQU07SUFDekMsSUFBTUMsU0FBU0ksTUFBTUMsTUFBTSxDQUFDLFNBQUNMLFFBQVFGO1FBQ25DLElBQU1RLGFBQWFWLGFBQWFFLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVcsT0FDVk0sYUFDQyxBQUFDLEdBQWFBLE9BQVhOLFFBQU8sTUFBZSxPQUFYTTtRQUUxQixPQUFPTjtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUO0FBRUEsU0FBU0csV0FBV0gsTUFBTTtJQUN4QkEsU0FBU0EsT0FBT08sT0FBTyxDQUFDLFFBQVFDLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPUjtBQUNUO0FBRUEsU0FBU0UsZUFBZUgsTUFBTTtJQUM1QixJQUFNQyxTQUFTRCxPQUFPTSxNQUFNLENBQUMsU0FBQ0wsUUFBUVM7UUFDcEMsSUFBTUMsVUFBVUQsTUFBTUUsVUFBVTtRQUVoQ1gsU0FBUyxBQUFDLEdBQVdVLE9BQVRWLFFBQWlCLE9BQVJVO1FBRXJCLE9BQU9WO0lBQ1QsR0FBR1EsdUJBQVk7SUFFZixPQUFPUjtBQUNUO0FBRUEsU0FBU0MsYUFBYUgsSUFBSSxFQUFFQyxNQUFNO0lBQ2hDLElBQU1hLG1CQUFtQmQsS0FBS2UsY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZWhCLE1BQU8sR0FBRztRQUUvQkMsU0FBU2dCLHFCQUFxQkQsY0FBY2Y7SUFDOUMsT0FBTztRQUNMLElBQU1pQixrQkFBa0JsQixNQUFNLEdBQUc7UUFFakNDLFNBQVNrQix3QkFBd0JELGlCQUFpQmpCO0lBQ3BEO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNnQixxQkFBcUJELFlBQVksRUFBRWYsTUFBTTtJQUNoRCxJQUFNbUIsbUJBQW1CSixhQUFhSyxtQkFBbUIsSUFDbkRWLFFBQVFTLGtCQUFrQixHQUFHO0lBRW5DbkIsU0FBUztRQUNQVTtLQUNEO0lBRUQsT0FBT1Y7QUFDVDtBQUVBLFNBQVNrQix3QkFBd0JELGVBQWUsRUFBRWpCLE1BQU07SUFDdEQsSUFBTXFCLDRCQUE0QkosZ0JBQWdCSyw0QkFBNEIsQ0FBQ3RCLFNBQ3pFdUIsNkJBQTZCTixnQkFBZ0JPLDZCQUE2QixDQUFDeEIsU0FDM0V5QixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDckIsU0FBU0EsT0FBTzJCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU8xQjtBQUNUIn0=