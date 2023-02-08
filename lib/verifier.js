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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNBTGVuZ3RoID09PSBub2Rlc0JMZW5ndGgpIHtcbiAgICAgIG5vZGVzVmVyaWZ5ID0gbm9kZXNBLmV2ZXJ5KChub2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeU5vZGVzKG5vZGVzQSwgbm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZ5OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJ2ZXJpZnlOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVWZXJpZmllZCIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Tm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc1ZlcmlmeSIsIm5vZGVzQUxlbmd0aCIsImxlbmd0aCIsIm5vZGVzQkxlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBTjthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLEtBQUssRUFBeUI7Z0JBQXZCLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLEtBQXFCLEdBQXJCLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDtnQkFDM0MsSUFBSUMsZUFBZSxLQUFLO2dCQUV4QixJQUFNQyxvQkFBb0JKLE1BQU1LLGNBQWMsSUFDeENDLG9CQUFvQkwsTUFBTUksY0FBYztnQkFFOUMsSUFBSUQsc0JBQXNCRSxtQkFBbUI7b0JBQzNDLElBQUlGLG1CQUFtQjt3QkFDckIsSUFBTUcsZ0JBQWdCUCxPQUNoQlEsZ0JB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