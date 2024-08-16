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
var _terminalNodes = require("../utilities/terminalNodes");
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
                var childNodesVerified = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var childTerminalNodeMapA = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesA), childTerminalNodeMapB = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesB), terminalNodeMapsEqual = (0, _terminalNodes.areTerminalNodeMapsEqual)(childTerminalNodeMapA, childTerminalNodeMapB);
                    if (terminalNodeMapsEqual) {
                        var index = 0, childNodesVerifyAhead = this.verifyChildNodesAhead.apply(this, [
                            index,
                            childNodesA,
                            childNodesB
                        ].concat(_to_consumable_array(remainingArguments)));
                        childNodesVerified = childNodesVerifyAhead; ///
                    }
                }
                return childNodesVerified;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var terminalNodeVerified;
                var verifyAhead = remainingArguments.pop(), verifiedAhead = verifyAhead();
                terminalNodeVerified = verifiedAhead; ///
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
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = this.verifyChildNodes.apply(this, [
                        childNodesA,
                        childNodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nonTerminalNodeVerified = childNodesVerified; ///
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyChildNodesAhead",
            value: function verifyChildNodesAhead(index, childNodesA, childNodesB) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var childNodesVerified;
                var verifyAhead = remainingArguments.pop(), childNodesALength = childNodesA.length;
                if (index === childNodesALength) {
                    var verifiedAhead = verifyAhead();
                    childNodesVerified = verifiedAhead; ///
                } else {
                    var childNodeA = childNodesA[index], childNodeB = childNodesB[index], nodeA = childNodeA, nodeB = childNodeB, nodeVerified = this.verifyNode.apply(this, [
                        nodeA,
                        nodeB
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(verifyAhead); ///
                            var aheadIndex = index + 1, childNodesVerifyAhead = _this.verifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                childNodesA,
                                childNodesB
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesVerifyAhead;
                        }
                    ]));
                    childNodesVerified = nodeVerified; ///
                }
                return childNodesVerified;
            }
        }
    ]);
    return NodesVerifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1pbmFsTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQU5vblRlcm1pbmFsTm9kZSAmJiBub2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aCxcbiAgICAgICAgICBjaGlsZE5vZGVzQkxlbmd0aCA9IGNoaWxkTm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzQUxlbmd0aCA9PT0gY2hpbGROb2Rlc0JMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNoaWxkVGVybWluYWxOb2RlTWFwQSA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhjaGlsZE5vZGVzQSksXG4gICAgICAgICAgICBjaGlsZFRlcm1pbmFsTm9kZU1hcEIgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0IpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGNoaWxkVGVybWluYWxOb2RlTWFwQSwgY2hpbGRUZXJtaW5hbE5vZGVNYXBCKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUEgPSBjaGlsZE5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godmVyaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnlBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZXNWZXJpZmllciIsInZlcmlmeU5vZGUiLCJub2RlQSIsIm5vZGVCIiwicmVtYWluaW5nQXJndW1lbnRzIiwibm9kZVZlcmlmaWVkIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwibm9kZUFOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vZGVCTm9uVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsImNoaWxkTm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2Rlc0JMZW5ndGgiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEEiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEIiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInZlcmlmeUNoaWxkTm9kZXNBaGVhZCIsInZlcmlmeUFoZWFkIiwicG9wIiwidmVyaWZpZWRBaGVhZCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsInB1c2giLCJhaGVhZEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs2QkFGOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFBLEFBQU1BLDhCQUFELEFBQUw7YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzVDLElBQUlDLGVBQWU7Z0JBRW5CLElBQU1DLG9CQUFvQkosTUFBTUssY0FBYyxJQUN4Q0Msb0JBQW9CTCxNQUFNSSxjQUFjLElBQ3hDRSx1QkFBdUJQLE1BQU1RLGlCQUFpQixJQUM5Q0MsdUJBQXVCUixNQUFNTyxpQkFBaUI7Z0JBRXBELElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSUoscUJBQXFCRSxtQkFBbUI7b0JBQ2pELElBQU1JLGdCQUFnQlYsT0FDaEJXLGdCQUFnQlYsT0FDaEJXLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUF2QixNQUFBLElBQUksRUFBSjt3QkFBd0JIO3dCQUFlQztxQkFBcUMsQ0FBNUUsT0FBc0QscUJBQUdUO29CQUV0RkMsZUFBZVMsc0JBQXVCLEdBQUc7Z0JBQzNDLE9BQU8sSUFBSUwsd0JBQXdCRSxzQkFBc0I7b0JBQ3ZELElBQU1LLG1CQUFtQmQsT0FDbkJlLG1CQUFtQmQsT0FDbkJlLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUExQixNQUFBLElBQUksRUFBSjt3QkFBMkJIO3dCQUFrQkM7cUJBQXdDLENBQXJGLE9BQStELHFCQUFHYjtvQkFFbEdDLGVBQWVhLHlCQUF5QixHQUFHO2dCQUM3QztnQkFFQSxPQUFPYjtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsV0FBVyxFQUFFQyxXQUFXO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHbEIscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM5RCxJQUFJbUIscUJBQXFCO2dCQUV6QixJQUFNQyxvQkFBb0JILFlBQVlJLE1BQU0sRUFDdENDLG9CQUFvQkosWUFBWUcsTUFBTTtnQkFFNUMsSUFBSUQsc0JBQXNCRSxtQkFBbUI7b0JBQzNDLElBQU1DLHdCQUF3QkMsSUFBQUEsdUNBQXdCLEVBQUNQLGNBQ2pEUSx3QkFBd0JELElBQUFBLHVDQUF3QixFQUFDTixjQUNqRFEsd0JBQXdCQyxJQUFBQSx1Q0FBd0IsRUFBQ0osdUJBQXVCRTtvQkFFOUUsSUFBSUMsdUJBQXVCO3dCQUN6QixJQUFNRSxRQUFRLEdBQ1JDLHdCQUF3QixJQUFJLENBQUNDLHFCQUFxQixDQUExQixNQUFBLElBQUksRUFBSjs0QkFBMkJGOzRCQUFPWDs0QkFBYUM7eUJBQW1DLENBQWxGLE9BQTRELHFCQUFHbEI7d0JBRTdGbUIscUJBQXFCVSx1QkFBdUIsR0FBRztvQkFDakQ7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGFBQWEsRUFBRUMsYUFBYTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR1QscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNwRSxJQUFJVTtnQkFFSixJQUFNcUIsY0FBYy9CLG1CQUFtQmdDLEdBQUcsSUFDcENDLGdCQUFnQkY7Z0JBRXRCckIsdUJBQXVCdUIsZUFBZ0IsR0FBRztnQkFFMUMsT0FBT3ZCO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHYixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzdFLElBQUljLDBCQUEwQjtnQkFFOUIsSUFBTW9CLDJCQUEyQnRCLGlCQUFpQnVCLFdBQVcsSUFDdkRDLDJCQUEyQnZCLGlCQUFpQnNCLFdBQVcsSUFBSSxHQUFHO2dCQUVwRSxJQUFJRCw2QkFBNkJFLDBCQUEwQjtvQkFDekQsSUFBTUMsNkJBQTZCekIsaUJBQWlCMEIsYUFBYSxJQUMzREMsNkJBQTZCMUIsaUJBQWlCeUIsYUFBYSxJQUMzRHJCLGNBQWNvQiw0QkFDZG5CLGNBQWNxQiw0QkFDZHBCLHFCQUFxQixJQUFJLENBQUNILGdCQUFnQixDQUFyQixNQUFBLElBQUksRUFBSjt3QkFBc0JDO3dCQUFhQztxQkFBbUMsQ0FBdEUsT0FBZ0QscUJBQUdsQjtvQkFFOUVjLDBCQUEwQkssb0JBQW9CLEdBQUc7Z0JBQ25EO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkYsS0FBSyxFQUFFWCxXQUFXLEVBQUVDLFdBQVc7O2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHbEIscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUMxRSxJQUFJbUI7Z0JBRUosSUFBTVksY0FBYy9CLG1CQUFtQmdDLEdBQUcsSUFDcENaLG9CQUFvQkgsWUFBWUksTUFBTTtnQkFFNUMsSUFBSU8sVUFBVVIsbUJBQW1CO29CQUMvQixJQUFNYSxnQkFBZ0JGO29CQUV0QloscUJBQXFCYyxlQUFlLEdBQUc7Z0JBQ3pDLE9BQU87b0JBQ0wsSUFBTU8sYUFBYXZCLFdBQVcsQ0FBQ1csTUFBTSxFQUMvQmEsYUFBYXZCLFdBQVcsQ0FBQ1UsTUFBTSxFQUMvQjlCLFFBQVEwQyxZQUNSekMsUUFBUTBDLFlBQ1J4QyxlQUFlLElBQUksQ0FBQ0osVUFBVSxDQUFmLE1BQUEsSUFBSSxFQUFKO3dCQUFnQkM7d0JBQU9DO3FCQU9wQyxDQVBhLE9BQThCLHFCQUFHQyxxQkFBakM7d0JBQXFEOzRCQUNsRUEsbUJBQW1CMEMsSUFBSSxDQUFDWCxjQUFjLEdBQUc7NEJBRXpDLElBQU1ZLGFBQWFmLFFBQVEsR0FDckJDLHdCQUF3QixNQUFLQyxxQkFBcUIsQ0FBMUIsYUFBQTtnQ0FBMkJhO2dDQUFZMUI7Z0NBQWFDOzZCQUFtQyxDQUF2RixPQUFpRSxxQkFBR2xCOzRCQUVsRyxPQUFPNkI7d0JBQ1Q7cUJBQUU7b0JBRVJWLHFCQUFxQmxCLGNBQWUsR0FBRztnQkFDekM7Z0JBRUEsT0FBT2tCO1lBQ1Q7OztXQTVHbUJ2QiJ9