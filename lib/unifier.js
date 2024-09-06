"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return Unifier;
    },
    unify: function() {
        return unify;
    }
});
var _terminalNodes = require("./utilities/terminalNodes");
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
var Unifier = /*#__PURE__*/ function() {
    function Unifier() {
        _class_call_check(this, Unifier);
    }
    _create_class(Unifier, [
        {
            key: "unify",
            value: function unify(nodeA, nodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var unified;
                var nodeUnified = this.unifyNode.apply(this, [
                    nodeA,
                    nodeB
                ].concat(_to_consumable_array(remainingArguments)));
                unified = nodeUnified; ///
                return unified;
            }
        },
        {
            key: "unifyNode",
            value: function unifyNode(nodeA, nodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeUnified = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode(), nodeANonTerminalNode = nodeA.isNonTerminalNode(), nodeBNonTerminalNode = nodeB.isNonTerminalNode();
                if (false) {
                ///
                } else if (nodeATerminalNode && nodeBTerminalNode) {
                    var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeUnified = this.unifyTerminalNode.apply(this, [
                        terminalNodeA,
                        terminalNodeB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnified = terminalNodeUnified; ///
                } else if (nodeANonTerminalNode && nodeBNonTerminalNode) {
                    var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeUnified = this.unifyNonTerminalNode.apply(this, [
                        nonTerminalNodeA,
                        nonTerminalNodeB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnified = nonTerminalNodeUnified; ///
                }
                return nodeUnified;
            }
        },
        {
            key: "unifyChildNodes",
            value: function unifyChildNodes(childNodesA, childNodesB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesUnified = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var childTerminalNodeMapA = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesA), childTerminalNodeMapB = (0, _terminalNodes.terminalNodeMapFromNodes)(childNodesB), terminalNodeMapsEqual = (0, _terminalNodes.areTerminalNodeMapsEqual)(childTerminalNodeMapA, childTerminalNodeMapB);
                    if (terminalNodeMapsEqual) {
                        var index = 0, childNodesVerifyAhead = this.unifyChildNodesAhead.apply(this, [
                            index,
                            childNodesA,
                            childNodesB
                        ].concat(_to_consumable_array(remainingArguments)));
                        childNodesUnified = childNodesVerifyAhead; ///
                    }
                }
                return childNodesUnified;
            }
        },
        {
            key: "unifyTerminalNode",
            value: function unifyTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var terminalNodeUnified;
                var unifyAhead = remainingArguments.pop(), unifyiedAhead = unifyAhead();
                terminalNodeUnified = unifyiedAhead; ///
                return terminalNodeUnified;
            }
        },
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nonTerminalNodeUnified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesUnified = this.unifyChildNodes.apply(this, [
                        childNodesA,
                        childNodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nonTerminalNodeUnified = childNodesUnified; ///
                }
                return nonTerminalNodeUnified;
            }
        },
        {
            key: "unifyChildNodesAhead",
            value: function unifyChildNodesAhead(index, childNodesA, childNodesB) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var childNodesUnified;
                var unifyAhead = remainingArguments.pop(), childNodesALength = childNodesA.length;
                if (index === childNodesALength) {
                    var unifyiedAhead = unifyAhead();
                    childNodesUnified = unifyiedAhead; ///
                } else {
                    var childNodeA = childNodesA[index], childNodeB = childNodesB[index], nodeA = childNodeA, nodeB = childNodeB, nodeUnified = this.unifyNode.apply(this, [
                        nodeA,
                        nodeB
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(unifyAhead); ///
                            var aheadIndex = index + 1, childNodesVerifyAhead = _this.unifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                childNodesA,
                                childNodesB
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesVerifyAhead;
                        }
                    ]));
                    childNodesUnified = nodeUnified; ///
                }
                return childNodesUnified;
            }
        }
    ]);
    return Unifier;
}();
function unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        remainingArguments[_key - 3] = arguments[_key];
    }
    var unified = false;
    nodeQueryMaps.some(function(nodeQueryMap) {
        var nodeQueryA = nodeQueryMap.nodeQueryA, nodeQueryB = nodeQueryMap.nodeQueryB, unify = nodeQueryMap.unify;
        var nodeA = nodeQueryA(nonTerminalNodeA), nodeB = nodeQueryB(nonTerminalNodeB); ///
        if (nodeA !== null && nodeB !== null) {
            unified = unify.apply(void 0, [
                nodeA,
                nodeB
            ].concat(_to_consumable_array(remainingArguments)));
            return true;
        }
    });
    return unified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy90ZXJtaW5hbE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICB1bmlmaWVkID0gbm9kZVVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IHRlcm1pbmFsTm9kZVVuaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGVBTm9uVGVybWluYWxOb2RlICYmIG5vZGVCTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2Rlc0JMZW5ndGggPSBjaGlsZE5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0FMZW5ndGggPT09IGNoaWxkTm9kZXNCTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZFRlcm1pbmFsTm9kZU1hcEEgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0EpLFxuICAgICAgICAgICAgY2hpbGRUZXJtaW5hbE5vZGVNYXBCID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGNoaWxkTm9kZXNCKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChjaGlsZFRlcm1pbmFsTm9kZU1hcEEsIGNoaWxkVGVybWluYWxOb2RlTWFwQik7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGNvbnN0IHVuaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksXG4gICAgICAgICAgdW5pZnlpZWRBaGVhZCA9IHVuaWZ5QWhlYWQoKTtcblxuICAgIHRlcm1pbmFsTm9kZVVuaWZpZWQgPSB1bmlmeWllZEFoZWFkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdGhpcy51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmaWVkO1xuXG4gICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB1bmlmeWllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZ5aWVkQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVBID0gY2hpbGROb2Rlc0FbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlQiA9IGNoaWxkTm9kZXNCW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVBID0gY2hpbGROb2RlQSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IGNoaWxkTm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgKCkgPT4ge1xuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmeUFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy51bmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnlBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IG5vZGVVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IHVuaWZpZWQgPSBmYWxzZTtcblxuICBub2RlUXVlcnlNYXBzLnNvbWUoKG5vZGVRdWVyeU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgbm9kZVF1ZXJ5QSwgbm9kZVF1ZXJ5QiwgdW5pZnkgfSA9IG5vZGVRdWVyeU1hcDtcblxuICAgIGNvbnN0IG5vZGVBID0gbm9kZVF1ZXJ5QShub25UZXJtaW5hbE5vZGVBKSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZVF1ZXJ5Qihub25UZXJtaW5hbE5vZGVCKTsgIC8vL1xuXG4gICAgaWYgKChub2RlQSAhPT0gbnVsbCkgJiYgKG5vZGVCICE9PSBudWxsKSkge1xuICAgICAgdW5pZmllZCA9IHVuaWZ5KG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJVbmlmaWVyIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5pZmllZCIsIm5vZGVVbmlmaWVkIiwidW5pZnlOb2RlIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwibm9kZUFOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vZGVCTm9uVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsInVuaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVW5pZmllZCIsImNoaWxkTm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2Rlc0JMZW5ndGgiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEEiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEIiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInVuaWZ5Q2hpbGROb2Rlc0FoZWFkIiwidW5pZnlBaGVhZCIsInBvcCIsInVuaWZ5aWVkQWhlYWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJwdXNoIiwiYWhlYWRJbmRleCIsIm5vZGVRdWVyeU1hcHMiLCJzb21lIiwibm9kZVF1ZXJ5TWFwIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFJcUJBOztJQXlITEMsS0FBSztlQUFMQTs7OzZCQTNIbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFBLEFBQU1ELHdCQUFELEFBQUw7YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3ZDLElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQWQsTUFBQSxJQUFJLEVBQUo7b0JBQWVMO29CQUFPQztpQkFB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