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
                    var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB);
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var _this = this;
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
                var terminalNodeVerified;
                var matches = terminalNodeA.match(terminalNodeB);
                terminalNodeVerified = matches; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFOb25UZXJtaW5hbE5vZGUgJiYgbm9kZUJOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNBTGVuZ3RoID0gY2hpbGROb2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIGNoaWxkTm9kZXNCTGVuZ3RoID0gY2hpbGROb2Rlc0IubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNBTGVuZ3RoID09PSBjaGlsZE5vZGVzQkxlbmd0aCkge1xuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGNoaWxkTm9kZXNWZXJpZnlBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnk7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVBID0gY2hpbGROb2Rlc0FbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGNoaWxkTm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVBID0gY2hpbGROb2RlQSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IGNoaWxkTm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKTtcblxuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJub2RlVmVyaWZpZWQiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJub2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9kZUJOb25UZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeUNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmeSIsImNoaWxkTm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2Rlc0JMZW5ndGgiLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInZlcmlmeUNoaWxkTm9kZXNBaGVhZCIsInZlcmlmeUFoZWFkIiwicG9wIiwidmVyaWZpZWRBaGVhZCIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwibWF0Y2hlcyIsIm1hdGNoIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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