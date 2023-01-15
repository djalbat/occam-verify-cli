"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeMatches = this.matchTerminalNode.apply(this, [
                terminalNodeA,
                terminalNodeB
            ].concat(_toConsumableArray(remainingArguments)));
            nodeMatches = terminalNodeMatches; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeMatches = this.matchNonTerminalNode.apply(this, [
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
    var _this = this;
    var nodesMatch = false;
    var nodesALength = nodesA.length, nodesBLength = nodesB.length;
    if (nodesALength === nodesBLength) {
        nodesMatch = nodesA.every(function(nodeA, index) {
            var nodeB = nodesB[index], nodeMatches = _this.matchNode.apply(_this, [
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
        var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.matchNodes.apply(this, [
            nodesA,
            nodesB
        ].concat(_toConsumableArray(remainingArguments)));
        nonTerminalNodeMatches = nodesMatch; ///
    }
    return nonTerminalNodeMatches;
}
var matcherMixins = {
    matchNode: matchNode,
    matchNodes: matchNodes,
    matchTerminalNode: matchTerminalNode,
    matchNonTerminalNode: matchNonTerminalNode
};
var _default = matcherMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbWF0Y2hlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlTWF0Y2hlcyA9IHRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgbm9kZXNNYXRjaCA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzQUxlbmd0aCA9IG5vZGVzQS5sZW5ndGgsXG4gICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzQUxlbmd0aCA9PT0gbm9kZXNCTGVuZ3RoKSB7XG4gICAgbm9kZXNNYXRjaCA9IG5vZGVzQS5ldmVyeSgobm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBub2RlQiA9IG5vZGVzQltpbmRleF0sXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgbm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIG5vZGVzTWF0Y2ggPSB0aGlzLm1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbm9kZXNNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuY29uc3QgbWF0Y2hlck1peGlucyA9IHtcbiAgbWF0Y2hOb2RlLFxuICBtYXRjaE5vZGVzLFxuICBtYXRjaFRlcm1pbmFsTm9kZSxcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoZXJNaXhpbnM7XG4iXSwibmFtZXMiOlsibWF0Y2hOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVNYXRjaGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXNCTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJtYXRjaGVyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRkE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOUVBLFNBQVNBLFVBQVVDLEtBQUssRUFBRUMsS0FBSyxFQUF5QjtJQUF2QixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFxQixHQUFyQixPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7UUFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtJQUFEO0lBQ25ELElBQUlDLGNBQWMsS0FBSztJQUV2QixJQUFNQyxvQkFBb0JKLE1BQU1LLGNBQWMsSUFDeENDLG9CQUFvQkwsTUFBTUksY0FBYztJQUU5QyxJQUFJRCxzQkFBc0JFLG1CQUFtQjtRQUMzQyxJQUFJRixtQkFBbUI7WUFDckIsSUFBTUcsZ0JBQWdCUCxPQUNoQlEsZ0JBQWdCUCxPQUNoQlEsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQXRCLE1BQUEsSUFBSSxFQUFKO2dCQUF1Qkg7Z0JBQWVDO2FBQXFDLENBQTNFLE9BQXFELG1CQUFH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