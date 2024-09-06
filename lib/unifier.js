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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy90ZXJtaW5hbE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUFOb25UZXJtaW5hbE5vZGUgPSBub2RlQS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCTm9uVGVybWluYWxOb2RlID0gbm9kZUIuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQVRlcm1pbmFsTm9kZSAmJiBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gdGVybWluYWxOb2RlVW5pZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFOb25UZXJtaW5hbE5vZGUgJiYgbm9kZUJOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aCxcbiAgICAgICAgICBjaGlsZE5vZGVzQkxlbmd0aCA9IGNoaWxkTm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzQUxlbmd0aCA9PT0gY2hpbGROb2Rlc0JMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNoaWxkVGVybWluYWxOb2RlTWFwQSA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhjaGlsZE5vZGVzQSksXG4gICAgICAgICAgICBjaGlsZFRlcm1pbmFsTm9kZU1hcEIgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0IpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGNoaWxkVGVybWluYWxOb2RlTWFwQSwgY2hpbGRUZXJtaW5hbE5vZGVNYXBCKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZnlBaGVhZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB0ZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICB1bmlmeWllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHVuaWZ5aWVkQWhlYWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBjaGlsZE5vZGVzVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZpZWQ7XG5cbiAgICBjb25zdCB1bmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0FMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHVuaWZ5aWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdW5pZnlpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUEgPSBjaGlsZE5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHVuaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gbm9kZVVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gIG5vZGVRdWVyeU1hcHMuc29tZSgobm9kZVF1ZXJ5TWFwKSA9PiB7XG4gICAgY29uc3QgeyBub2RlUXVlcnlBLCBub2RlUXVlcnlCLCB1bmlmeSB9ID0gbm9kZVF1ZXJ5TWFwO1xuXG4gICAgY29uc3Qgbm9kZUEgPSBub2RlUXVlcnlBKG5vblRlcm1pbmFsTm9kZUEpLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBub2RlUXVlcnlCKG5vblRlcm1pbmFsTm9kZUIpOyAgLy8vXG5cbiAgICBpZiAoKG5vZGVBICE9PSBudWxsKSAmJiAobm9kZUIgIT09IG51bGwpKSB7XG4gICAgICB1bmlmaWVkID0gdW5pZnkobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB1bmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbIlVuaWZpZXIiLCJ1bmlmeSIsInVuaWZ5Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJub2RlVW5pZmllZCIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsIm5vZGVBTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub2RlQk5vblRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJ1bmlmeUNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1VuaWZpZWQiLCJjaGlsZE5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXNCTGVuZ3RoIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBCIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ1bmlmeUNoaWxkTm9kZXNBaGVhZCIsInVuaWZ5QWhlYWQiLCJwb3AiLCJ1bmlmeWllZEFoZWFkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwicHVzaCIsImFoZWFkSW5kZXgiLCJub2RlUXVlcnlNYXBzIiwidW5pZmllZCIsInNvbWUiLCJub2RlUXVlcnlNYXAiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBK0dMQyxLQUFLO2VBQUxBOzs7NkJBakhtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQUEsQUFBTUQsd0JBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLLEVBQUVDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDM0MsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsb0JBQW9CSixNQUFNSyxjQUFjLElBQ3hDQyxvQkFBb0JMLE1BQU1JLGNBQWMsSUFDeENFLHVCQUF1QlAsTUFBTVEsaUJBQWlCLElBQzlDQyx1QkFBdUJSLE1BQU1PLGlCQUFpQjtnQkFFcEQsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJSixxQkFBcUJFLG1CQUFtQjtvQkFDakQsSUFBTUksZ0JBQWdCVixPQUNoQlcsZ0JBQWdCVixPQUNoQlcsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQXRCLE1BQUEsSUFBSSxFQUFKO3dCQUF1Qkg7d0JBQWVD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