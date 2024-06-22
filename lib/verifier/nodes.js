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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1pbmFsTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQU5vblRlcm1pbmFsTm9kZSAmJiBub2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2Rlc0JMZW5ndGggPSBjaGlsZE5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0FMZW5ndGggPT09IGNoaWxkTm9kZXNCTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZFRlcm1pbmFsTm9kZU1hcEEgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0EpLFxuICAgICAgICAgICAgY2hpbGRUZXJtaW5hbE5vZGVNYXBCID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGNoaWxkTm9kZXNCKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChjaGlsZFRlcm1pbmFsTm9kZU1hcEEsIGNoaWxkVGVybWluYWxOb2RlTWFwQik7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnk7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVBID0gY2hpbGROb2Rlc0FbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGNoaWxkTm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVBID0gY2hpbGROb2RlQSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IGNoaWxkTm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoYWhlYWRJbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZXNWZXJpZmllciIsInZlcmlmeU5vZGUiLCJub2RlQSIsIm5vZGVCIiwicmVtYWluaW5nQXJndW1lbnRzIiwibm9kZVZlcmlmaWVkIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwibm9kZUFOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vZGVCTm9uVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZnkiLCJjaGlsZE5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXNCTGVuZ3RoIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBCIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ2ZXJpZnlDaGlsZE5vZGVzQWhlYWQiLCJ2ZXJpZnlBaGVhZCIsInBvcCIsInZlcmlmaWVkQWhlYWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJwdXNoIiwiYWhlYWRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NkJBRjhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLEtBQUssRUFBRUMsS0FBSztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM1QyxJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxvQkFBb0JKLE1BQU1LLGNBQWMsSUFDeENDLG9CQUFvQkwsTUFBTUksY0FBYyxJQUN4Q0UsdUJBQXVCUCxNQUFNUSxpQkFBaUIsSUFDOUNDLHVCQUF1QlIsTUFBTU8saUJBQWlCO2dCQUVwRCxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlKLHFCQUFxQkUsbUJBQW1CO29CQUNqRCxJQUFNSSxnQkFBZ0JWLE9BQ2hCVyxnQkFBZ0JWLE9BQ2hCVyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsTUFBQSxJQUFJLEVBQUo7d0JBQXdCSDt3QkFBZUM7cUJBQXFDLENBQTVFLE9BQXNELHFCQUFHVDtvQkFFdEZDLGVBQWVTLHNCQUF1QixHQUFHO2dCQUMzQyxPQUFPLElBQUlMLHdCQUF3QkUsc0JBQXNCO29CQUN2RCxJQUFNSyxtQkFBbUJkLE9BQ25CZSxtQkFBbUJkLE9BQ25CZSwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBMUIsTUFBQSxJQUFJLEVBQUo7d0JBQTJCSDt3QkFBa0JDO3FCQUF3QyxDQUFyRixPQUErRCxxQkFBR2I7b0JBRWxHQyxlQUFlYSx5QkFBeUIsR0FBRztnQkFDN0M7Z0JBRUEsT0FBT2I7WUFDVDs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVcsRUFBRUMsV0FBVztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2xCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDOUQsSUFBSW1CLG1CQUFtQjtnQkFFdkIsSUFBTUMsb0JBQW9CSCxZQUFZSSxNQUFNLEVBQ3RDQyxvQkFBb0JKLFlBQVlHLE1BQU07Z0JBRTVDLElBQUlELHNCQUFzQkUsbUJBQW1CO29CQUMzQyxJQUFNQyx3QkFBd0JDLElBQUFBLHVDQUF3QixFQUFDUCxjQUNqRFEsd0JBQXdCRCxJQUFBQSx1Q0FBd0IsRUFBQ04sY0FDakRRLHdCQUF3QkMsSUFBQUEsdUNBQXdCLEVBQUNKLHVCQUF1QkU7b0JBRTlFLElBQUlDLHVCQUF1Qjt3QkFDekIsSUFBTUUsUUFBUSxHQUNSQyx3QkFBd0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBMUIsTUFBQSxJQUFJLEVBQUo7NEJBQTJCRjs0QkFBT1g7NEJBQWFDO3lCQUFtQyxDQUFsRixPQUE0RCxxQkFBR2xCO3dCQUU3Rm1CLG1CQUFtQlUsdUJBQXVCLEdBQUc7b0JBQy9DO2dCQUNGO2dCQUVBLE9BQU9WO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSCxhQUFhLEVBQUVDLGFBQWE7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdULHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDcEUsSUFBSVU7Z0JBRUosSUFBTXFCLGNBQWMvQixtQkFBbUJnQyxHQUFHLElBQ3BDQyxnQkFBZ0JGO2dCQUV0QnJCLHVCQUF1QnVCLGVBQWdCLEdBQUc7Z0JBRTFDLE9BQU92QjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkgsZ0JBQWdCLEVBQUVDLGdCQUFnQjtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM3RSxJQUFJYywwQkFBMEI7Z0JBRTlCLElBQU1vQiwyQkFBMkJ0QixpQkFBaUJ1QixXQUFXLElBQ3ZEQywyQkFBMkJ2QixpQkFBaUJzQixXQUFXLElBQUksR0FBRztnQkFFcEUsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pELElBQU1DLDZCQUE2QnpCLGlCQUFpQjBCLGFBQWEsSUFDM0RDLDZCQUE2QjFCLGlCQUFpQnlCLGFBQWEsSUFDM0RyQixjQUFjb0IsNEJBQ2RuQixjQUFjcUIsNEJBQ2RwQixtQkFBbUIsSUFBSSxDQUFDSCxnQkFBZ0IsQ0FBckIsTUFBQSxJQUFJLEVBQUo7d0JBQXNCQzt3QkFBYUM7cUJBQW1DLENBQXRFLE9BQWdELHFCQUFHbEI7b0JBRTVFYywwQkFBMEJLLGtCQUFrQixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JGLEtBQUssRUFBRVgsV0FBVyxFQUFFQyxXQUFXOztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2xCLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDMUUsSUFBSW1CO2dCQUVKLElBQU1ZLGNBQWMvQixtQkFBbUJnQyxHQUFHLElBQ3BDWixvQkFBb0JILFlBQVlJLE1BQU07Z0JBRTVDLElBQUlPLFVBQVVSLG1CQUFtQjtvQkFDL0IsSUFBTWEsZ0JBQWdCRjtvQkFFdEJaLG1CQUFtQmMsZUFBZSxHQUFHO2dCQUN2QyxPQUFPO29CQUNMLElBQU1PLGFBQWF2QixXQUFXLENBQUNXLE1BQU0sRUFDL0JhLGFBQWF2QixXQUFXLENBQUNVLE1BQU0sRUFDL0I5QixRQUFRMEMsWUFDUnpDLFFBQVEwQyxZQUNSeEMsZUFBZSxJQUFJLENBQUNKLFVBQVUsQ0FBZixNQUFBLElBQUksRUFBSjt3QkFBZ0JDO3dCQUFPQztxQkFPcEMsQ0FQYSxPQUE4QixxQkFBR0MscUJBQWpDO3dCQUFxRDs0QkFDbEVBLG1CQUFtQjBDLElBQUksQ0FBQ1gsY0FBYyxHQUFHOzRCQUV6QyxJQUFNWSxhQUFhZixRQUFRLEdBQ3JCQyx3QkFBd0IsTUFBS0MscUJBQXFCLENBQTFCLGFBQUE7Z0NBQTJCYTtnQ0FBWTFCO2dDQUFhQzs2QkFBbUMsQ0FBdkYsT0FBaUUscUJBQUdsQjs0QkFFbEcsT0FBTzZCO3dCQUNUO3FCQUFFO29CQUVSVixtQkFBbUJsQixjQUFlLEdBQUc7Z0JBQ3ZDO2dCQUVBLE9BQU9rQjtZQUNUOzs7V0E1R21CdkIifQ==