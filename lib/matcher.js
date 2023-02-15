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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICBub2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCKTtcblxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZGVwdGgpO1xuXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIGRlcHRoKSB7XG4gICAgbGV0IG5vZGVzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVzQUxlbmd0aCA9IG5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgbm9kZXNCTGVuZ3RoID0gbm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0FMZW5ndGggPT09IG5vZGVzQkxlbmd0aCkge1xuICAgICAgZGVwdGgtLTtcblxuICAgICAgbm9kZXNNYXRjaCA9IG5vZGVzQS5ldmVyeSgobm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVCID0gbm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlQSwgbm9kZUIsIGRlcHRoKTtcblxuICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGRlcHRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgICAgdGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZGVwdGgpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSB0aGlzLm1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIGRlcHRoKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG59XG5cbmNvbnN0IG1hdGNoZXIgPSBuZXcgTWF0Y2hlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtYXRjaGVyO1xuIl0sIm5hbWVzIjpbIk1hdGNoZXIiLCJtYXRjaE5vZGUiLCJub2RlQSIsIm5vZGVCIiwiZGVwdGgiLCJJbmZpbml0eSIsIm5vZGVNYXRjaGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXNCTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJtYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRkE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakZBLElBQUEsQUFBTUEsd0JBK0VILEFBL0VIO2FBQU1BOzhCQUFBQTs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsS0FBSyxFQUFFQyxLQUFLLEVBQW9CO29CQUFsQkMsUUFBQUEsaUVBQVFDLFFBQVE7Z0JBQ3RDLElBQUlDLGNBQWMsS0FBSztnQkFFdkIsSUFBSUYsVUFBVSxHQUFHO29CQUNmRSxjQUFjLElBQUk7Z0JBQ3BCLE9BQU87b0JBQ0wsSUFBTUMsb0JBQW9CTCxNQUFNTSxjQUFjLElBQ3hDQyxvQkFBb0JOLE1BQU1LLGNBQWM7b0JBRTlDLElBQUlELHNCQUFzQkUsbUJBQW1CO3dCQUMzQyxJQUFJRixtQkFBbUI7NEJBQ3JCLElBQU1HLGdCQUFnQlIsT0FDaEJTLGdCQUFnQlIsT0FDaEJTLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSCxlQUFlQzs0QkFFbEVMLGNBQWNNLHFCQUFzQixHQUFHO3dCQUN6QyxPQUFPOzRCQUNMLElBQU1FLG1CQUFtQlosT0FDbkJhLG1CQUFtQlosT0FDbkJhLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQlg7NEJBRTdGRSxjQUFjVSx3QkFBd0IsR0FBRzt3QkFDM0MsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxNQUFNLEVBQUVDLE1BQU0sRUFBRWhCLEtBQUssRUFBRTs7Z0JBQ2hDLElBQUlpQixhQUFhLEtBQUs7Z0JBRXRCLElBQU1DLGVBQWVILE9BQU9JLE1BQU0sRUFDNUJDLGVBQWVKLE9BQU9HLE1BQU07Z0JBRWxDLElBQUlELGlCQUFpQkUsY0FBYztvQkFDakNwQjtvQkFFQWlCLGFBQWFGLE9BQU9NLEtBQUssQ0FBQyxTQUFDdkIsT0FBT3dCLE9BQVU7d0JBQzFDLElBQU12QixRQUFRaUIsTUFBTSxDQUFDTSxNQUFNLEVBQ3JCcEIsY0FBYyxNQUFLTCxTQUFTLENBQUNDLE9BQU9DLE9BQU9DO3dCQUVqRCxJQUFJRSxhQUFhOzRCQUNmLE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNIO2dCQUNGLENBQUM7Z0JBRUQsT0FBT2U7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JILGFBQWEsRUFBRUMsYUFBYSxFQUFFUCxLQUFLLEVBQUU7Z0JBQ3JELElBQU11QixVQUFVakIsY0FBY2tCLEtBQUssQ0FBQ2pCLGdCQUM5QkMsc0JBQXNCZSxTQUFVLEdBQUc7Z0JBRXpDLE9BQU9mO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVYLEtBQUssRUFBRTtnQkFDOUQsSUFBSVkseUJBQXlCLEtBQUs7Z0JBRWxDLElBQU1hLDJCQUEyQmYsaUJBQWlCZ0IsV0FBVyxJQUN2REMsMkJBQTJCaEIsaUJBQWlCZSxXQUFXLElBQUksR0FBRztnQkFFcEUsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pELElBQU1DLDZCQUE2QmxCLGlCQUFpQm1CLGFBQWEsSUFDM0RDLDZCQUE2Qm5CLGlCQUFpQmtCLGFBQWEsSUFDM0RkLFNBQVNhLDRCQUNUWixTQUFTYyw0QkFDVGIsYUFBYSxJQUFJLENBQUNILFVBQVUsQ0FBQ0MsUUFBUUMsUUFBUWhCO29CQUVuRFkseUJBQXlCSyxZQUFZLEdBQUc7Z0JBQzFDLENBQUM7Z0JBRUQsT0FBT0w7WUFDVDs7O1dBNUVJaEI7O0FBK0VOLElBQU1tQyxVQUFVLElBQUluQztJQUVwQixXQUFlbUMifQ==