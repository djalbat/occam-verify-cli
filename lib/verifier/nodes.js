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
                var childNodesVerify = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var childTerminalNodeMapA = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesA), childTerminalNodeMapB = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesB), terminalNodeMapsEqual = (0, _terminalNodes.areTerminalNodeMapsEqual)(childTerminalNodeMapA, childTerminalNodeMapB);
                    if (terminalNodeMapsEqual) {
                        var index = 0, childNodesVerifyAhead = this.verifyChildNodesAhead.apply(this, [
                            index,
                            childNodesA,
                            childNodesB
                        ].concat(_to_consumable_array(remainingArguments)));
                        childNodesVerify = childNodesVerifyAhead; ///
                    }
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
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerify = this.verifyChildNodes.apply(this, [
                        childNodesA,
                        childNodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nonTerminalNodeVerified = childNodesVerify; ///
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
                            remainingArguments.push(verifyAhead); ///
                            var aheadIndex = index + 1, childNodesVerifyAhead = _this.verifyChildNodesAhead.apply(_this, [
                                aheadIndex,
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
        }
    ]);
    return NodesVerifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1pbmFsTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQU5vblRlcm1pbmFsTm9kZSAmJiBub2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2Rlc0JMZW5ndGggPSBjaGlsZE5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0FMZW5ndGggPT09IGNoaWxkTm9kZXNCTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZFRlcm1pbmFsTm9kZU1hcEEgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0EpLFxuICAgICAgICAgICAgY2hpbGRUZXJtaW5hbE5vZGVNYXBCID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGNoaWxkTm9kZXNCKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChjaGlsZFRlcm1pbmFsTm9kZU1hcEEsIGNoaWxkVGVybWluYWxOb2RlTWFwQik7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnk7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVBID0gY2hpbGROb2Rlc0FbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGNoaWxkTm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVBID0gY2hpbGROb2RlQSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IGNoaWxkTm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoYWhlYWRJbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZXNWZXJpZmllciIsInZlcmlmeU5vZGUiLCJub2RlQSIsIm5vZGVCIiwicmVtYWluaW5nQXJndW1lbnRzIiwibm9kZVZlcmlmaWVkIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwibm9kZUFOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vZGVCTm9uVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZnkiLCJjaGlsZE5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXNCTGVuZ3RoIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBCIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ2ZXJpZnlDaGlsZE5vZGVzQWhlYWQiLCJ2ZXJpZnlBaGVhZCIsInBvcCIsInZlcmlmaWVkQWhlYWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJwdXNoIiwiYWhlYWRJbmRleCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZCQUY4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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