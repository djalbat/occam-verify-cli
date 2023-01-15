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
    matchNode: function() {
        return matchNode;
    },
    matchNodes: function() {
        return matchNodes;
    },
    matchTerminalNode: function() {
        return matchTerminalNode;
    },
    matchNonTerminalNode: function() {
        return matchNonTerminalNode;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function matchNode(nodeA, nodeB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var nodeMatches = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeMatches = matchTerminalNode.apply(void 0, [
                terminalNodeA,
                terminalNodeB
            ].concat(_toConsumableArray(remainingArguments)));
            nodeMatches = terminalNodeMatches; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeMatches = matchNonTerminalNode.apply(void 0, [
                nonTerminalNodeA,
                nonTerminalNodeB
            ].concat(_toConsumableArray(remainingArguments)));
            nodeMatches = nonTerminalNodeMatches; ///
        }
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var nodesMatch = false;
    var nodesALength = nodesA.length, nodesBLength = nodesB.length;
    if (nodesALength === nodesBLength) {
        nodesMatch = nodesA.every(function(nodeA, index) {
            var nodeB = nodesB[index], nodeMatches = matchNode.apply(void 0, [
                nodeA,
                nodeB
            ].concat(_toConsumableArray(remainingArguments)));
            if (nodeMatches) {
                return true;
            }
        });
    }
    return nodesMatch;
}
function matchTerminalNode(terminalNodeA, terminalNodeB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeMatches = matches; ///
    return terminalNodeMatches;
}
function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var nonTerminalNodeMatches = false;
    var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
        var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = matchNodes.apply(void 0, [
            nodesA,
            nodesB
        ].concat(_toConsumableArray(remainingArguments)));
        nonTerminalNodeMatches = nodesMatch; ///
    }
    return nonTerminalNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgbm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVNYXRjaGVzID0gdGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IG5vZGVzTWF0Y2ggPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICBub2Rlc0JMZW5ndGggPSBub2Rlc0IubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0FMZW5ndGggPT09IG5vZGVzQkxlbmd0aCkge1xuICAgIG5vZGVzTWF0Y2ggPSBub2Rlc0EuZXZlcnkoKG5vZGVBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBub2Rlc01hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoTm9kZSIsIm1hdGNoTm9kZXMiLCJtYXRjaFRlcm1pbmFsTm9kZSIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVNYXRjaGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm5vZGVzQUxlbmd0aCIsImxlbmd0aCIsIm5vZGVzQkxlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLFNBQVM7ZUFBVEE7O0lBeUJBQyxVQUFVO2VBQVZBOztJQW9CQUMsaUJBQWlCO2VBQWpCQTs7SUFPQUMsb0JBQW9CO2VBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBEVCxTQUFTSCxVQUFVSSxLQUFLLEVBQUVDLEtBQUssRUFBeUI7SUFBdkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsS0FBcUIsR0FBckIsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7SUFBRDtJQUMxRCxJQUFJQyxjQUFjLEtBQUs7SUFFdkIsSUFBTUMsb0JBQW9CSixNQUFNSyxjQUFjLElBQ3hDQyxvQkFBb0JMLE1BQU1JLGNBQWM7SUFFOUMsSUFBSUQsc0JBQXNCRSxtQkFBbUI7UUFDM0MsSUFBSUYsbUJBQW1CO1lBQ3JCLElBQU1HLGdCQUFnQlAsT0FDaEJRLGdCQUFnQlAsT0FDaEJRLHNCQUFzQlgsa0JBQUFBLE1BQUFBLEtBQUFBLEdBQUFBO2dCQUFrQlM7Z0JBQWVDO2FBQXFDLENBQXRFVixPQUFnRCxtQkFBR0k7WUFFL0VDLGNBQWNNLHFCQUFzQixHQUFHO1FBQ3pDLE9BQU87WUFDTCxJQUFNQyxtQkFBbUJWLE9BQ25CVyxtQkFBbUJWLE9BQ25CVyx5QkFBeUJiLHFCQUFBQSxNQUFBQSxLQUFBQSxHQUFBQTtnQkFBcUJXO2dCQUFrQkM7YUFBd0MsQ0FBL0VaLE9BQXlELG1CQUFHRztZQUUzRkMsY0FBY1Msd0JBQXdCLEdBQUc7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPVDtBQUNUO0FBRU8sU0FBU04sV0FBV2dCLE1BQU0sRUFBRUMsTUFBTSxFQUF5QjtJQUF2QixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR1oscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFxQixHQUFyQixPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7UUFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtJQUFEO0lBQzdELElBQUlhLGFBQWEsS0FBSztJQUV0QixJQUFNQyxlQUFlSCxPQUFPSSxNQUFNLEVBQzVCQyxlQUFlSixPQUFPRyxNQUFNO0lBRWxDLElBQUlELGlCQUFpQkUsY0FBYztRQUNqQ0gsYUFBYUYsT0FBT00sS0FBSyxDQUFDLFNBQUNuQixPQUFPb0IsT0FBVTtZQUMxQyxJQUFNbkIsUUFBUWEsTUFBTSxDQUFDTSxNQUFNLEVBQ3JCakIsY0FBY1AsVUFBQUEsTUFBQUEsS0FBQUEsR0FBQUE7Z0JBQVVJO2dCQUFPQzthQUE2QixDQUE5Q0wsT0FBd0IsbUJBQUdNO1lBRS9DLElBQUlDLGFBQWE7Z0JBQ2YsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTakIsa0JBQWtCUyxhQUFhLEVBQUVDLGFBQWEsRUFBeUI7SUFBdkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdOLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsS0FBcUIsR0FBckIsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7SUFBRDtJQUNsRixJQUFNbUIsVUFBVWQsY0FBY2UsS0FBSyxDQUFDZCxnQkFDOUJDLHNCQUFzQlksU0FBVSxHQUFHO0lBRXpDLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTVixxQkFBcUJXLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBeUI7SUFBdkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdULHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsS0FBcUIsR0FBckIsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7SUFBRDtJQUMzRixJQUFJVSx5QkFBeUIsS0FBSztJQUVsQyxJQUFNVywyQkFBMkJiLGlCQUFpQmMsV0FBVyxJQUN2REMsMkJBQTJCZCxpQkFBaUJhLFdBQVcsSUFBSSxHQUFHO0lBRXBFLElBQUlELDZCQUE2QkUsMEJBQTBCO1FBQ3pELElBQU1DLDZCQUE2QmhCLGlCQUFpQmlCLGFBQWEsSUFDM0RDLDZCQUE2QmpCLGlCQUFpQmdCLGFBQWEsSUFDM0RkLFNBQVNhLDRCQUNUWixTQUFTYyw0QkFDVGIsYUFBYWxCLFdBQUFBLE1BQUFBLEtBQUFBLEdBQUFBO1lBQVdnQjtZQUFRQztTQUE4QixDQUFqRGpCLE9BQTJCLG1CQUFHSztRQUVqRFUseUJBQXlCRyxZQUFZLEdBQUc7SUFDMUMsQ0FBQztJQUVELE9BQU9IO0FBQ1QifQ==