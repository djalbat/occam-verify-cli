"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Verifier;
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
var Verifier = /*#__PURE__*/ function() {
    function Verifier() {
        _classCallCheck(this, Verifier);
    }
    _createClass(Verifier, [
        {
            key: "matchNode",
            value: function matchNode(nodeA, nodeB, substitutions) {
                var nodeMatches = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                if (nodeATerminalNode === nodeBTerminalNode) {
                    if (nodeATerminalNode) {
                        var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeMatches = this.matchTerminalNode(terminalNodeA, terminalNodeB);
                        nodeMatches = terminalNodeMatches; ///
                    } else {
                        var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeMatches = this.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        nodeMatches = nonTerminalNodeMatches; ///
                    }
                }
                return nodeMatches;
            }
        },
        {
            key: "matchNodes",
            value: function matchNodes(nodesA, nodesB, substitutions) {
                var _this = this;
                var nodesMatch = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    nodesMatch = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeMatches = _this.matchNode(nodeA, nodeB, substitutions);
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
            value: function matchTerminalNode(terminalNodeA, terminalNodeB, substitutions) {
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeMatches = matches; ///
                return terminalNodeMatches;
            }
        },
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.matchNodes(nodesA, nodesB, substitutions);
                    nonTerminalNodeMatches = nodesMatch; ///
                }
                return nonTerminalNodeMatches;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICBtYXRjaE5vZGUobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgbm9kZU1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgbm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vZGVzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVzQUxlbmd0aCA9IG5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgbm9kZXNCTGVuZ3RoID0gbm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0FMZW5ndGggPT09IG5vZGVzQkxlbmd0aCkge1xuICAgICAgbm9kZXNNYXRjaCA9IG5vZGVzQS5ldmVyeSgobm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVCID0gbm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBub2Rlc01hdGNoO1xuICB9XG5cbiAgbWF0Y2hUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSB0aGlzLm1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJtYXRjaE5vZGUiLCJub2RlQSIsIm5vZGVCIiwic3Vic3RpdHV0aW9ucyIsIm5vZGVNYXRjaGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXNCTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUE7OEJBQUFBOztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRTtnQkFDckMsSUFBSUMsY0FBYyxLQUFLO2dCQUV2QixJQUFNQyxvQkFBb0JKLE1BQU1LLGNBQWMsSUFDeENDLG9CQUFvQkwsTUFBTUksY0FBYztnQkFFOUMsSUFBSUQsc0JBQXNCRSxtQkFBbUI7b0JBQzNDLElBQUlGLG1CQUFtQjt3QkFDckIsSUFBTUcsZ0JBQWdCUCxPQUNoQlEsZ0JBQWdCUCxPQUNoQlEsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNILGVBQWVDO3dCQUVsRUwsY0FBY00scUJBQXNCLEdBQUc7b0JBQ3pDLE9BQU87d0JBQ0wsSUFBTUUsbUJBQW1CWCxPQUNuQlksbUJBQW1CWCxPQUNuQlkseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCVjt3QkFFN0ZDLGNBQWNVLHdCQUF3QixHQUFHO29CQUMzQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxNQUFNLEVBQUVDLE1BQU0sRUFBRWYsYUFBYSxFQUFFOztnQkFDeEMsSUFBSWdCLGFBQWEsS0FBSztnQkFFdEIsSUFBTUMsZUFBZUgsT0FBT0ksTUFBTSxFQUM1QkMsZUFBZUosT0FBT0csTUFBTTtnQkFFbEMsSUFBSUQsaUJBQWlCRSxjQUFjO29CQUNqQ0gsYUFBYUYsT0FBT00sS0FBSyxDQUFDLFNBQUN0QixPQUFPdUIsT0FBVTt3QkFDMUMsSUFBTXRCLFFBQVFnQixNQUFNLENBQUNNLE1BQU0sRUFDckJwQixjQUFjLE1BQUtKLFNBQVMsQ0FBQ0MsT0FBT0MsT0FBT0M7d0JBRWpELElBQUlDLGFBQWE7NEJBQ2YsT0FBTyxJQUFJO3dCQUNiLENBQUM7b0JBQ0g7Z0JBQ0YsQ0FBQztnQkFFRCxPQUFPZTtZQUNUOzs7WUFFQVIsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkgsYUFBYSxFQUFFQyxhQUFhLEVBQUVOLGFBQWEsRUFBRTtnQkFDN0QsSUFBTXNCLFVBQVVqQixjQUFja0IsS0FBSyxDQUFDakIsZ0JBQzlCQyxzQkFBc0JlLFNBQVUsR0FBRztnQkFFekMsT0FBT2Y7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJILGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRVYsYUFBYSxFQUFFO2dCQUN0RSxJQUFJVyx5QkFBeUIsS0FBSztnQkFFbEMsSUFBTWEsMkJBQTJCZixpQkFBaUJnQixXQUFXLElBQ3ZEQywyQkFBMkJoQixpQkFBaUJlLFdBQVcsSUFBSSxHQUFHO2dCQUVwRSxJQUFJRCw2QkFBNkJFLDBCQUEwQjtvQkFDekQsSUFBTUMsNkJBQTZCbEIsaUJBQWlCbUIsYUFBYSxJQUMzREMsNkJBQTZCbkIsaUJBQWlCa0IsYUFBYSxJQUMzRGQsU0FBU2EsNEJBQ1RaLFNBQVNjLDRCQUNUYixhQUFhLElBQUksQ0FBQ0gsVUFBVSxDQUFDQyxRQUFRQyxRQUFRZjtvQkFFbkRXLHlCQUF5QkssWUFBWSxHQUFHO2dCQUMxQyxDQUFDO2dCQUVELE9BQU9MO1lBQ1Q7OztXQXRFbUJmIn0=