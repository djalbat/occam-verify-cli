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
    default: function() {
        return GenericMatcher;
    },
    genericMatcher: function() {
        return genericMatcher;
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
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var GenericMatcher = /*#__PURE__*/ function() {
    function GenericMatcher() {
        _classCallCheck(this, GenericMatcher);
    }
    _createClass(GenericMatcher, [
        {
            key: "matchNode",
            value: function matchNode(nodeA, nodeB) {
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
        },
        {
            key: "matchNodes",
            value: function matchNodes(nodesA, nodesB) {
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
        },
        {
            key: "matchTerminalNode",
            value: function matchTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeMatches = matches; ///
                return terminalNodeMatches;
            }
        },
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
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
        }
    ]);
    return GenericMatcher;
}();
var genericMatcher = new GenericMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL2dlbmVyaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNNYXRjaGVyIHtcbiAgbWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBub2RlTWF0Y2hlcyA9IHRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIG5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVzQUxlbmd0aCA9IG5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgbm9kZXNCTGVuZ3RoID0gbm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0FMZW5ndGggPT09IG5vZGVzQkxlbmd0aCkge1xuICAgICAgbm9kZXNNYXRjaCA9IG5vZGVzQS5ldmVyeSgobm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVCID0gbm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSB0aGlzLm1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBub2Rlc01hdGNoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJpY01hdGNoZXIgPSBuZXcgR2VuZXJpY01hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJHZW5lcmljTWF0Y2hlciIsImdlbmVyaWNNYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVNYXRjaGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXNCTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFFcUJBOztJQXlFUkMsY0FBYztlQUFkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6RUUsSUFBQSxBQUFNRCwrQkF5RWxCLEFBekVZO2FBQU1BOzhCQUFBQTs7aUJBQUFBOztZQUNuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUssRUFBRUMsS0FBSyxFQUF5QjtnQkFBdkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsS0FBcUIsR0FBckIsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCO2dCQUFEO2dCQUMxQyxJQUFJQyxjQUFjLEtBQUs7Z0JBRXZCLElBQU1DLG9CQUFvQkosTUFBTUssY0FBYyxJQUN4Q0Msb0JBQW9CTCxNQUFNSSxjQUFjO2dCQUU5QyxJQUFJRCxz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