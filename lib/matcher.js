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
        return Matcher;
    },
    matcher: function() {
        return matcher;
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
            value: function matchNode(nodeA, nodeB, substitutions) {
                var depth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Infinity;
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
                            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeMatches = this.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, depth);
                            nodeMatches = nonTerminalNodeMatches; ///
                        }
                    }
                }
                return nodeMatches;
            }
        },
        {
            key: "matchNodes",
            value: function matchNodes(nodesA, nodesB, substitutions) {
                var depth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Infinity;
                var _this = this;
                var nodesMatch = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    depth--;
                    nodesMatch = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeMatches = _this.matchNode(nodeA, nodeB, substitutions, depth);
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
            value: function matchTerminalNode(terminalNodeA, terminalNodeB, substitutions, depth) {
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeMatches = matches; ///
                return terminalNodeMatches;
            }
        },
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var depth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Infinity;
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.matchNodes(nodesA, nodesB, substitutions, depth);
                    nonTerminalNodeMatches = nodesMatch; ///
                }
                return nonTerminalNodeMatches;
            }
        }
    ]);
    return Matcher;
}();
var matcher = new Matcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICBub2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCKTtcblxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZGVwdGgpO1xuXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGRlcHRoID0gSW5maW5pdHkpIHtcbiAgICBsZXQgbm9kZXNNYXRjaCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZXNBTGVuZ3RoID0gbm9kZXNBLmxlbmd0aCxcbiAgICAgICAgICBub2Rlc0JMZW5ndGggPSBub2Rlc0IubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzQUxlbmd0aCA9PT0gbm9kZXNCTGVuZ3RoKSB7XG4gICAgICBkZXB0aCAtLTtcblxuICAgICAgbm9kZXNNYXRjaCA9IG5vZGVzQS5ldmVyeSgobm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVCID0gbm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGRlcHRoKTtcblxuICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNNYXRjaDtcbiAgfVxuXG4gIG1hdGNoVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGRlcHRoKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgICAgdGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNNYXRjaCA9IHRoaXMubWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZGVwdGgpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXIgPSBuZXcgTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbIk1hdGNoZXIiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9kZUEiLCJub2RlQiIsInN1YnN0aXR1dGlvbnMiLCJkZXB0aCIsIkluZmluaXR5Iiwibm9kZU1hdGNoZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibWF0Y2hOb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJub2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJub2Rlc0JMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUVxQkE7O0lBK0VSQyxPQUFPO2VBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBL0VFLElBQUEsQUFBTUQsd0JBK0VsQixBQS9FWTthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFvQjtvQkFBbEJDLFFBQUFBLGlFQUFRQyxRQUFRO2dCQUNyRCxJQUFJQyxjQUFjLEtBQUs7Z0JBRXZCLElBQUlGLFVBQVUsR0FBRztvQkFDZkUsY0FBYyxJQUFJO2dCQUNwQixPQUFPO29CQUNMLElBQU1DLG9CQUFvQk4sTUFBTU8sY0FBYyxJQUN4Q0Msb0JBQW9CUCxNQUFNTSxjQUFjO29CQUU5QyxJQUFJRCxzQkFBc0JFLG1CQUFtQjt3QkFDM0MsSUFBSUYsbUJBQW1COzRCQUNyQixJQUFNRyxnQkFBZ0JULE9BQ2hCVSxnQkFBZ0JULE9BQ2hCVSxzQkFBc0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0gsZUFBZUM7NEJBRWxFTCxjQUFjTSxxQkFBc0IsR0FBRzt3QkFDekMsT0FBTzs0QkFDTCxJQUFNRSxtQkFBbUJiLE9BQ25CYyxtQkFBbUJiLE9BQ25CYyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JaLGVBQWVDOzRCQUU1R0UsY0FBY1Usd0JBQXdCLEdBQUc7d0JBQzNDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9WO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVqQixhQUFhLEVBQW9CO29CQUFsQkMsUUFBQUEsaUVBQVFDLFFBQVE7O2dCQUN4RCxJQUFJZ0IsYUFBYSxLQUFLO2dCQUV0QixJQUFNQyxlQUFlSCxPQUFPSSxNQUFNLEVBQzVCQyxlQUFlSixPQUFPRyxNQUFNO2dCQUVsQyxJQUFJRCxpQkFBaUJFLGNBQWM7b0JBQ2pDcEI7b0JBRUFpQixhQUFhRixPQUFPTSxLQUFLLENBQUMsU0FBQ3hCLE9BQU95QixPQUFVO3dCQUMxQyxJQUFNeEIsUUFBUWtCLE1BQU0sQ0FBQ00sTUFBTSxFQUNyQnBCLGNBQWMsTUFBS04sU0FBUyxDQUFDQyxPQUFPQyxPQUFPQyxlQUFlQzt3QkFFaEUsSUFBSUUsYUFBYTs0QkFDZixPQUFPLElBQUk7d0JBQ2IsQ0FBQztvQkFDSDtnQkFDRixDQUFDO2dCQUVELE9BQU9lO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSCxhQUFhLEVBQUVDLGFBQWEsRUFBRVIsYUFBYSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ3BFLElBQU11QixVQUFVakIsY0FBY2tCLEtBQUssQ0FBQ2pCLGdCQUM5QkMsc0JBQXNCZSxTQUFVLEdBQUc7Z0JBRXpDLE9BQU9mO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVaLGFBQWEsRUFBb0I7b0JBQWxCQyxRQUFBQSxpRUFBUUMsUUFBUTtnQkFDdEYsSUFBSVcseUJBQXlCLEtBQUs7Z0JBRWxDLElBQU1hLDJCQUEyQmYsaUJBQWlCZ0IsV0FBVyxJQUN2REMsMkJBQTJCaEIsaUJBQWlCZSxXQUFXLElBQUksR0FBRztnQkFFcEUsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pELElBQU1DLDZCQUE2QmxCLGlCQUFpQm1CLGFBQWEsSUFDM0RDLDZCQUE2Qm5CLGlCQUFpQmtCLGFBQWEsSUFDM0RkLFNBQVNhLDRCQUNUWixTQUFTYyw0QkFDVGIsYUFBYSxJQUFJLENBQUNILFVBQVUsQ0FBQ0MsUUFBUUMsUUFBUWpCLGVBQWVDO29CQUVsRVkseUJBQXlCSyxZQUFZLEdBQUc7Z0JBQzFDLENBQUM7Z0JBRUQsT0FBT0w7WUFDVDs7O1dBNUVtQmxCOztBQStFZCxJQUFNQyxVQUFVLElBQUlEIn0=