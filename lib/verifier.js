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
            value: function verifyNode(nodeA, nodeB, substitutions, context) {
                var nodeVerifies = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                if (nodeATerminalNode === nodeBTerminalNode) {
                    if (nodeATerminalNode) {
                        var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerifies = this.verifyTerminalNode(terminalNodeA, terminalNodeB);
                        nodeVerifies = terminalNodeVerifies; ///
                    } else {
                        var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, context);
                        nodeVerifies = nonTerminalNodeVerifies; ///
                    }
                }
                return nodeVerifies;
            }
        },
        {
            key: "verifyNodes",
            value: function verifyNodes(nodesA, nodesB, substitutions, context) {
                var _this = this;
                var nodesVerify = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    nodesVerify = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeVerifies = _this.verifyNode(nodeA, nodeB, substitutions, context);
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
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB, substitutions, context) {
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeVerifies = matches; ///
                return terminalNodeVerifies;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var context = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                var nonTerminalNodeVerifies = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesVerify = this.verifyNodes(nodesA, nodesB, substitutions, context);
                    nonTerminalNodeVerifies = nodesVerify; ///
                }
                return nonTerminalNodeVerifies;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBub2RlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpO1xuXG4gICAgICAgIG5vZGVWZXJpZmllcyA9IHRlcm1pbmFsTm9kZVZlcmlmaWVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBub2RlVmVyaWZpZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllczsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5vZGVzKG5vZGVzQSwgbm9kZXNCLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNBTGVuZ3RoID09PSBub2Rlc0JMZW5ndGgpIHtcbiAgICAgIG5vZGVzVmVyaWZ5ID0gbm9kZXNBLmV2ZXJ5KChub2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobm9kZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gbm9kZXNWZXJpZnk7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWZXJpZmllciIsInZlcmlmeU5vZGUiLCJub2RlQSIsIm5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJub2RlVmVyaWZpZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZVZlcmlmaWVzIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllcyIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeU5vZGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNWZXJpZnkiLCJub2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJub2Rlc0JMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBTjthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQy9DLElBQUlDLGVBQWUsS0FBSztnQkFFeEIsSUFBTUMsb0JBQW9CTCxNQUFNTSxjQUFjLElBQ3hDQyxvQkFBb0JOLE1BQU1LLGNBQWM7Z0JBRTlDLElBQUlELHNCQUFzQkUsbUJBQW1CO29CQUMzQyxJQUFJRixtQkFBbUI7d0JBQ3JCLElBQU1HLGdCQUFnQlIsT0FDaEJTLGdCQUFnQlIsT0FDaEJTLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDSCxlQUFlQzt3QkFFcEVMLGVBQWVNLHNCQUF1QixHQUFHO29CQUMzQyxPQUFPO3dCQUNMLElBQU1FLG1CQUFtQlosT0FDbkJhLG1CQUFtQlosT0FDbkJhLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDSCxrQkFBa0JDLGtCQUFrQlgsZUFBZUM7d0JBRTlHQyxlQUFlVSx5QkFBeUIsR0FBRztvQkFDN0MsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9WO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVoQixhQUFhLEVBQUVDLE9BQU8sRUFBRTs7Z0JBQ2xELElBQUlnQixjQUFjLEtBQUs7Z0JBRXZCLElBQU1DLGVBQWVILE9BQU9JLE1BQU0sRUFDNUJDLGVBQWVKLE9BQU9HLE1BQU07Z0JBRWxDLElBQUlELGlCQUFpQkUsY0FBYztvQkFDakNILGNBQWNGLE9BQU9NLEtBQUssQ0FBQyxTQUFDdkIsT0FBT3dCLE9BQVU7d0JBQzNDLElBQU12QixRQUFRaUIsTUFBTSxDQUFDTSxNQUFNLEVBQ3JCcEIsZUFBZSxNQUFLTCxVQUFVLENBQUNDLE9BQU9DLE9BQU9DLGVBQWVDO3dCQUVsRSxJQUFJQyxjQUFjOzRCQUNoQixPQUFPLElBQUk7d0JBQ2IsQ0FBQztvQkFDSDtnQkFDRixDQUFDO2dCQUVELE9BQU9lO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSCxhQUFhLEVBQUVDLGFBQWEsRUFBRVAsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3ZFLElBQU1zQixVQUFVakIsY0FBY2tCLEtBQUssQ0FBQ2pCLGdCQUM5QkMsdUJBQXVCZSxTQUFVLEdBQUc7Z0JBRTFDLE9BQU9mO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVYLGFBQWEsRUFBa0I7b0JBQWhCQyxVQUFBQSxpRUFBVSxJQUFJO2dCQUNyRixJQUFJVywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTWEsMkJBQTJCZixpQkFBaUJnQixXQUFXLElBQ3ZEQywyQkFBMkJoQixpQkFBaUJlLFdBQVcsSUFBSSxHQUFHO2dCQUVwRSxJQUFJRCw2QkFBNkJFLDBCQUEwQjtvQkFDekQsSUFBTUMsNkJBQTZCbEIsaUJBQWlCbUIsYUFBYSxJQUMzREMsNkJBQTZCbkIsaUJBQWlCa0IsYUFBYSxJQUMzRGQsU0FBU2EsNEJBQ1RaLFNBQVNjLDRCQUNUYixjQUFjLElBQUksQ0FBQ0gsV0FBVyxDQUFDQyxRQUFRQyxRQUFRaEIsZUFBZUM7b0JBRXBFVywwQkFBMEJLLGFBQWEsR0FBRztnQkFDNUMsQ0FBQztnQkFFRCxPQUFPTDtZQUNUOzs7V0F0RW1CaEIifQ==