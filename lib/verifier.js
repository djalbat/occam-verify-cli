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
var Verifier = /*#__PURE__*/ function() {
    function Verifier() {
        _classCallCheck(this, Verifier);
    }
    _createClass(Verifier, [
        {
            key: "verifyNode",
            value: function verifyNode(nodeA, nodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeVerified = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                if (nodeATerminalNode === nodeBTerminalNode) {
                    if (nodeATerminalNode) {
                        var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB);
                        nodeVerified = terminalNodeVerified; ///
                    } else {
                        var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeVerified = this.verifyNonTerminalNode.apply(this, [
                            nonTerminalNodeA,
                            nonTerminalNodeB
                        ].concat(_toConsumableArray(remainingArguments)));
                        nodeVerified = nonTerminalNodeVerified; ///
                    }
                }
                return nodeVerified;
            }
        },
        {
            key: "verifyNodes",
            value: function verifyNodes(nodesA, nodesB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var nodesVerify = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    nodesVerify = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeVerified = _this.verifyNode.apply(_this, [
                            nodeA,
                            nodeB
                        ].concat(_toConsumableArray(remainingArguments)));
                        if (nodeVerified) {
                            return true;
                        }
                    });
                }
                return nodesVerify;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeVerified = matches; ///
                return terminalNodeVerified;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesVerify = this.verifyNodes.apply(this, [
                        nodesA,
                        nodesB
                    ].concat(_toConsumableArray(remainingArguments)));
                    nonTerminalNodeVerified = nodesVerify; ///
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNBTGVuZ3RoID09PSBub2Rlc0JMZW5ndGgpIHtcbiAgICAgIG5vZGVzVmVyaWZ5ID0gbm9kZXNBLmV2ZXJ5KChub2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmeTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcmlmaWVyIiwidmVyaWZ5Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJub2RlVmVyaWZpZWQiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeU5vZGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNWZXJpZnkiLCJub2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJub2Rlc0JMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUE7OEJBQUFBOztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxLQUFLLEVBQXlCO2dCQUF2QixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFxQixHQUFyQixPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7Z0JBQUQ7Z0JBQzNDLElBQUlDLGVBQWUsS0FBSztnQkFFeEIsSUFBTUMsb0JBQW9CSixNQUFNSyxjQUFjLElBQ3hDQyxvQkFBb0JMLE1BQU1JLGNBQWM7Z0JBRTlDLElBQUlELHNCQUFzQkUsbUJBQW1CO29CQUMzQyxJQUFJRixtQkFBbUI7d0JBQ3JCLElBQU1HLGdCQUFnQlAsT0FDaEJRLGdC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