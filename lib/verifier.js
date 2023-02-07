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
            key: "verifyNode",
            value: function verifyNode(nodeA, nodeB, substitutions) {
                var nodeVerifies = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                if (nodeATerminalNode === nodeBTerminalNode) {
                    if (nodeATerminalNode) {
                        var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerifies = this.verifyTerminalNode(terminalNodeA, terminalNodeB);
                        nodeVerifies = terminalNodeVerifies; ///
                    } else {
                        var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        nodeVerifies = nonTerminalNodeVerifies; ///
                    }
                }
                return nodeVerifies;
            }
        },
        {
            key: "verifyNodes",
            value: function verifyNodes(nodesA, nodesB, substitutions) {
                var _this = this;
                var nodesVerify = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    nodesVerify = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeVerifies = _this.verifyNode(nodeA, nodeB, substitutions);
                        if (nodeVerifies) {
                            return true;
                        }
                    });
                }
                return nodesVerify;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB, substitutions) {
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeVerifies = matches; ///
                return terminalNodeVerifies;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeVerifies = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesVerify = this.verifyNodes(nodesA, nodesB, substitutions);
                    nonTerminalNodeVerifies = nodesVerify; ///
                }
                return nonTerminalNodeVerifies;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub2RlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpO1xuXG4gICAgICAgIG5vZGVWZXJpZmllcyA9IHRlcm1pbmFsTm9kZVZlcmlmaWVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBub2RlVmVyaWZpZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllczsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5vZGVzKG5vZGVzQSwgbm9kZXNCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vZGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNBTGVuZ3RoID09PSBub2Rlc0JMZW5ndGgpIHtcbiAgICAgIG5vZGVzVmVyaWZ5ID0gbm9kZXNBLmV2ZXJ5KChub2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobm9kZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeU5vZGVzKG5vZGVzQSwgbm9kZXNCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBub2Rlc1ZlcmlmeTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcmlmaWVyIiwidmVyaWZ5Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9kZVZlcmlmaWVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllcyIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZXMiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzVmVyaWZ5Iiwibm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXNCTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUE7OEJBQUFBOztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRTtnQkFDdEMsSUFBSUMsZUFBZSxLQUFLO2dCQUV4QixJQUFNQyxvQkFBb0JKLE1BQU1LLGNBQWMsSUFDeENDLG9CQUFvQkwsTUFBTUksY0FBYztnQkFFOUMsSUFBSUQsc0JBQXNCRSxtQkFBbUI7b0JBQzNDLElBQUlGLG1CQUFtQjt3QkFDckIsSUFBTUcsZ0JBQWdCUCxPQUNoQlEsZ0JBQWdCUCxPQUNoQlEsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNILGVBQWVDO3dCQUVwRUwsZUFBZU0sc0JBQXVCLEdBQUc7b0JBQzNDLE9BQU87d0JBQ0wsSUFBTUUsbUJBQW1CWCxPQUNuQlksbUJBQW1CWCxPQUNuQlksMEJBQTBCLElBQUksQ0FBQ0MscUJBQXFCLENBQUNILGtCQUFrQkMsa0JBQWtCVjt3QkFFL0ZDLGVBQWVVLHlCQUF5QixHQUFHO29CQUM3QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxNQUFNLEVBQUVDLE1BQU0sRUFBRWYsYUFBYSxFQUFFOztnQkFDekMsSUFBSWdCLGNBQWMsS0FBSztnQkFFdkIsSUFBTUMsZUFBZUgsT0FBT0ksTUFBTSxFQUM1QkMsZUFBZUosT0FBT0csTUFBTTtnQkFFbEMsSUFBSUQsaUJBQWlCRSxjQUFjO29CQUNqQ0gsY0FBY0YsT0FBT00sS0FBSyxDQUFDLFNBQUN0QixPQUFPdUIsT0FBVTt3QkFDM0MsSUFBTXRCLFFBQVFnQixNQUFNLENBQUNNLE1BQU0sRUFDckJwQixlQUFlLE1BQUtKLFVBQVUsQ0FBQ0MsT0FBT0MsT0FBT0M7d0JBRW5ELElBQUlDLGNBQWM7NEJBQ2hCLE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNIO2dCQUNGLENBQUM7Z0JBRUQsT0FBT2U7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGFBQWEsRUFBRUMsYUFBYSxFQUFFTixhQUFhLEVBQUU7Z0JBQzlELElBQU1zQixVQUFVakIsY0FBY2tCLEtBQUssQ0FBQ2pCLGdCQUM5QkMsdUJBQXVCZSxTQUFVLEdBQUc7Z0JBRTFDLE9BQU9mO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVWLGFBQWEsRUFBRTtnQkFDdkUsSUFBSVcsMEJBQTBCLEtBQUs7Z0JBRW5DLElBQU1hLDJCQUEyQmYsaUJBQWlCZ0IsV0FBVyxJQUN2REMsMkJBQTJCaEIsaUJBQWlCZSxXQUFXLElBQUksR0FBRztnQkFFcEUsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pELElBQU1DLDZCQUE2QmxCLGlCQUFpQm1CLGFBQWEsSUFDM0RDLDZCQUE2Qm5CLGlCQUFpQmtCLGFBQWEsSUFDM0RkLFNBQVNhLDRCQUNUWixTQUFTYyw0QkFDVGIsY0FBYyxJQUFJLENBQUNILFdBQVcsQ0FBQ0MsUUFBUUMsUUFBUWY7b0JBRXJEVywwQkFBMEJLLGFBQWEsR0FBRztnQkFDNUMsQ0FBQztnQkFFRCxPQUFPTDtZQUNUOzs7V0F0RW1CZiJ9