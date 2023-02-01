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
var Matcher = /*#__PURE__*/ function() {
    function Matcher() {
        _classCallCheck(this, Matcher);
    }
    _createClass(Matcher, [
        {
            key: "matchNode",
            value: function matchNode(nodeA, nodeB) {
                var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
                var nodeMatches = false;
                if (depth === 0) {
                    nodeMatches = true;
                } else {
                    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                    if (nodeATerminalNode === nodeBTerminalNode) {
                        if (nodeATerminalNode) {
                            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeMatches = this.matchTerminalNode(terminalNodeA, terminalNodeB);
                            nodeMatches = terminalNodeMatches; ///
                        } else {
                            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeMatches = this.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, depth);
                            nodeMatches = nonTerminalNodeMatches; ///
                        }
                    }
                }
                return nodeMatches;
            }
        },
        {
            key: "matchNodes",
            value: function matchNodes(nodesA, nodesB, depth) {
                var _this = this;
                var nodesMatch = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    depth--;
                    nodesMatch = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeMatches = _this.matchNode(nodeA, nodeB, depth);
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
            value: function matchTerminalNode(terminalNodeA, terminalNodeB, depth) {
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeMatches = matches; ///
                return terminalNodeMatches;
            }
        },
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, depth) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.matchNodes(nodesA, nodesB, depth);
                    nonTerminalNodeMatches = nodesMatch; ///
                }
                return nonTerminalNodeMatches;
            }
        }
    ]);
    return Matcher;
}();
var matcher = new Matcher();
var _default = matcher;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICBub2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCKTtcblxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZGVwdGgpO1xuXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIGRlcHRoKSB7XG4gICAgbGV0IG5vZGVzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVzQUxlbmd0aCA9IG5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgbm9kZXNCTGVuZ3RoID0gbm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0FMZW5ndGggPT09IG5vZGVzQkxlbmd0aCkge1xuICAgICAgZGVwdGggLS07XG5cbiAgICAgIG5vZGVzTWF0Y2ggPSBub2Rlc0EuZXZlcnkoKG5vZGVBLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlQiA9IG5vZGVzQltpbmRleF0sXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZUEsIG5vZGVCLCBkZXB0aCk7XG5cbiAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBkZXB0aCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGRlcHRoKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc01hdGNoID0gdGhpcy5tYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCLCBkZXB0aCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBub2Rlc01hdGNoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxufVxuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hlcjtcbiJdLCJuYW1lcyI6WyJNYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9kZUEiLCJub2RlQiIsImRlcHRoIiwiSW5maW5pdHkiLCJub2RlTWF0Y2hlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJtYXRjaE5vZGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm5vZGVzQUxlbmd0aCIsImxlbmd0aCIsIm5vZGVzQkxlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwibWF0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUZBOzs7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpGQSxJQUFBLEFBQU1BLHdCQStFSCxBQS9FSDthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUssRUFBRUMsS0FBSyxFQUFvQjtvQkFBbEJDLFFBQUFBLGlFQUFRQyxRQUFRO2dCQUN0QyxJQUFJQyxjQUFjLEtBQUs7Z0JBRXZCLElBQUlGLFVBQVUsR0FBRztvQkFDZkUsY0FBYyxJQUFJO2dCQUNwQixPQUFPO29CQUNMLElBQU1DLG9CQUFvQkwsTUFBTU0sY0FBYyxJQUN4Q0Msb0JBQW9CTixNQUFNSyxjQUFjO29CQUU5QyxJQUFJRCxzQkFBc0JFLG1CQUFtQjt3QkFDM0MsSUFBSUYsbUJBQW1COzRCQUNyQixJQUFNRyxnQkFBZ0JSLE9BQ2hCUyxnQkFBZ0JSLE9BQ2hCUyxzQkFBc0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0gsZUFBZUM7NEJBRWxFTCxjQUFjTSxxQkFBc0IsR0FBRzt3QkFDekMsT0FBTzs0QkFDTCxJQUFNRSxtQkFBbUJaLE9BQ25CYSxtQkFBbUJaLE9BQ25CYSx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JYOzRCQUU3RkUsY0FBY1Usd0JBQXdCLEdBQUc7d0JBQzNDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9WO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVoQixLQUFLLEVBQUU7O2dCQUNoQyxJQUFJaUIsYUFBYSxLQUFLO2dCQUV0QixJQUFNQyxlQUFlSCxPQUFPSSxNQUFNLEVBQzVCQyxlQUFlSixPQUFPRyxNQUFNO2dCQUVsQyxJQUFJRCxpQkFBaUJFLGNBQWM7b0JBQ2pDcEI7b0JBRUFpQixhQUFhRixPQUFPTSxLQUFLLENBQUMsU0FBQ3ZCLE9BQU93QixPQUFVO3dCQUMxQyxJQUFNdkIsUUFBUWlCLE1BQU0sQ0FBQ00sTUFBTSxFQUNyQnBCLGNBQWMsTUFBS0wsU0FBUyxDQUFDQyxPQUFPQyxPQUFPQzt3QkFFakQsSUFBSUUsYUFBYTs0QkFDZixPQUFPLElBQUk7d0JBQ2IsQ0FBQztvQkFDSDtnQkFDRixDQUFDO2dCQUVELE9BQU9lO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSCxhQUFhLEVBQUVDLGFBQWEsRUFBRVAsS0FBSyxFQUFFO2dCQUNyRCxJQUFNdUIsVUFBVWpCLGNBQWNrQixLQUFLLENBQUNqQixnQkFDOUJDLHNCQUFzQmUsU0FBVSxHQUFHO2dCQUV6QyxPQUFPZjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkgsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFWCxLQUFLLEVBQUU7Z0JBQzlELElBQUlZLHlCQUF5QixLQUFLO2dCQUVsQyxJQUFNYSwyQkFBMkJmLGlCQUFpQmdCLFdBQVcsSUFDdkRDLDJCQUEyQmhCLGlCQUFpQmUsV0FBVyxJQUFJLEdBQUc7Z0JBRXBFLElBQUlELDZCQUE2QkUsMEJBQTBCO29CQUN6RCxJQUFNQyw2QkFBNkJsQixpQkFBaUJtQixhQUFhLElBQzNEQyw2QkFBNkJuQixpQkFBaUJrQixhQUFhLElBQzNEZCxTQUFTYSw0QkFDVFosU0FBU2MsNEJBQ1RiLGFBQWEsSUFBSSxDQUFDSCxVQUFVLENBQUNDLFFBQVFDLFFBQVFoQjtvQkFFbkRZLHlCQUF5QkssWUFBWSxHQUFHO2dCQUMxQyxDQUFDO2dCQUVELE9BQU9MO1lBQ1Q7OztXQTVFSWhCOztBQStFTixJQUFNbUMsVUFBVSxJQUFJbkM7SUFFcEIsV0FBZW1DIn0=