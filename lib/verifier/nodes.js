"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodesVerifier;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var NodesVerifier = /*#__PURE__*/ function() {
    function NodesVerifier() {
        _class_call_check(this, NodesVerifier);
    }
    _create_class(NodesVerifier, [
        {
            key: "verifyNode",
            value: function verifyNode(nodeA, nodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeVerified = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode(), nodeANonTerminalNode = nodeA.isNonTerminalNode(), nodeBNonTerminalNode = nodeB.isNonTerminalNode();
                if (false) {
                ///
                } else if (nodeATerminalNode && nodeBTerminalNode) {
                    var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerified = this.verifyTerminalNode.apply(this, [
                        terminalNodeA,
                        terminalNodeB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerified = terminalNodeVerified; ///
                } else if (nodeANonTerminalNode && nodeBNonTerminalNode) {
                    var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeVerified = this.verifyNonTerminalNode.apply(this, [
                        nonTerminalNodeA,
                        nonTerminalNodeB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerified = nonTerminalNodeVerified; ///
                }
                return nodeVerified;
            }
        },
        {
            key: "verifyChildNodes",
            value: function verifyChildNodes(childNodesA, childNodesB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesVerify = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var index = 0, childNodesVerifyAhead = this.verifyChildNodesAhead.apply(this, [
                        index,
                        childNodesA,
                        childNodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    childNodesVerify = childNodesVerifyAhead; ///
                }
                return childNodesVerify;
            }
        },
        {
            key: "verifyChildNodesAhead",
            value: function verifyChildNodesAhead(index, childNodesA, childNodesB) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var childNodesVerify;
                var verifyAhead = remainingArguments.pop(), childNodesALength = childNodesA.length;
                if (index === childNodesALength) {
                    var verifiedAhead = verifyAhead();
                    childNodesVerify = verifiedAhead; ///
                } else {
                    var childNodeA = childNodesA[index], childNodeB = childNodesB[index], nodeA = childNodeA, nodeB = childNodeB, nodeVerified = this.verifyNode.apply(this, [
                        nodeA,
                        nodeB
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            index++;
                            remainingArguments.push(verifyAhead); ///
                            var childNodesVerifyAhead = _this.verifyChildNodesAhead.apply(_this, [
                                index,
                                childNodesA,
                                childNodesB
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesVerifyAhead;
                        }
                    ]));
                    childNodesVerify = nodeVerified; ///
                }
                return childNodesVerify;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var terminalNodeVerified = false;
                var matches = terminalNodeA.match(terminalNodeB);
                if (matches) {
                    var verifyAhead = remainingArguments.pop(), verifiedAhead = verifyAhead();
                    terminalNodeVerified = verifiedAhead; ///
                }
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
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerify = this.verifyChildNodes.apply(this, [
                        childNodesA,
                        childNodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nonTerminalNodeVerified = childNodesVerify; ///
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return NodesVerifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQU5vblRlcm1pbmFsTm9kZSAmJiBub2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2Rlc0JMZW5ndGggPSBjaGlsZE5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0FMZW5ndGggPT09IGNoaWxkTm9kZXNCTGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0FMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUEgPSBjaGlsZE5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgaW5kZXgrKztcblxuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh2ZXJpZnlBaGVhZCk7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnlBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZnk7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVWZXJpZmllZCIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsIm5vZGVBTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub2RlQk5vblRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZ5IiwiY2hpbGROb2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVzQkxlbmd0aCIsImluZGV4IiwiY2hpbGROb2Rlc1ZlcmlmeUFoZWFkIiwidmVyaWZ5Q2hpbGROb2Rlc0FoZWFkIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJ2ZXJpZmllZEFoZWFkIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJwdXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsOEJBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDNUMsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMsb0JBQW9CSixNQUFNSyxjQUFjLElBQ3hDQyxvQkFBb0JMLE1BQU1JLGNBQWMsSUFDeENFLHVCQUF1QlAsTUFBTVEsaUJBQWlCLElBQzlDQyx1QkFBdUJSLE1BQU1PLGlCQUFpQjtnQkFFcEQsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJSixxQkFBcUJFLG1CQUFtQjtvQkFDakQsSUFBTUksZ0JBQWdCVixPQUNoQlcsZ0JBQWdCVixPQUNoQlcsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQXZCLE1BQUEsSUFBSSxFQUFKO3dCQUF3Qkg7d0JBQWVDO3FCQUFxQyxDQUE1RSxPQUFzRCxxQkFBR1Q7b0JBRXRGQyxlQUFlUyxzQkFBdUIsR0FBRztnQkFDM0MsT0FBTyxJQUFJTCx3QkFBd0JFLHNCQUFzQjtvQkFDdkQsSUFBTUssbUJBQW1CZCxPQUNuQmUsbUJBQW1CZCxPQUNuQmUsMEJBQTBCLElB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