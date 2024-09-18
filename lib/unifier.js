"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Unifier;
    }
});
var _query = require("./utilities/query");
var _arguments = require("./utilities/arguments");
var _unifier = require("./utilities/unifier");
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
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
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
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesUnified = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var childTerminalNodeMapA = (0, _unifier.terminalNodeMapFromNodes)(childNodesA), childTerminalNodeMapB = (0, _unifier.terminalNodeMapFromNodes)(childNodesB), terminalNodeMapsEqual = (0, _unifier.areTerminalNodeMapsEqual)(childTerminalNodeMapA, childTerminalNodeMapB);
                    if (terminalNodeMapsEqual) {
                        var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0, childNodesUnifiedAhead = this.unifyChildNodesAhead.apply(this, [
                                index,
                                childNodesA,
                                childNodesB
                            ].concat(_to_consumable_array(remainingArguments)));
                            childNodesUnified = childNodesUnifiedAhead; ///
                        } else {
                            childNodesUnified = childNodesA.every(function(childNodeA, index) {
                                var childNodeB = childNodesB[index], nodeA = childNodeA, nodeB = childNodeB, nodeUnified = _this.unifyNode.apply(_this, [
                                    nodeA,
                                    nodeB
                                ].concat(_to_consumable_array(remainingArguments)));
                                if (nodeUnified) {
                                    return true;
                                }
                            });
                        }
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
                var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var unifyAhead = remainingArguments.pop(), unifiedAhead = unifyAhead();
                    terminalNodeUnified = unifiedAhead; ///
                    remainingArguments.push(unifiedAhead);
                } else {
                    terminalNodeUnified = true;
                }
                return terminalNodeUnified;
            }
        },
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var nonTerminalNodeUnified;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nobeB) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var nonTerminalNodeUnified;
                            var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                            if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                                var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesUnified = _this.unifyChildNodes.apply(_this, [
                                    childNodesA,
                                    childNodesB
                                ].concat(_to_consumable_array(remainingArguments)));
                                nonTerminalNodeUnified = childNodesUnified; ///
                            }
                            return nonTerminalNodeUnified;
                        }
                    }
                ]);
                var nodeUnified = false;
                maps.some(function(map) {
                    var nodeQueryA = map.nodeQueryA, nodeQueryB = map.nodeQueryB, unify = map.unify;
                    var nodeA = nodeQueryA(nonTerminalNodeA), nodeB = nodeQueryB(nonTerminalNodeB); ///
                    if (nodeA !== null && nodeB !== null) {
                        nodeUnified = unify.apply(void 0, [
                            nodeA,
                            nodeB
                        ].concat(_to_consumable_array(remainingArguments)));
                        return true;
                    }
                });
                nonTerminalNodeUnified = nodeUnified; ///
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
                    var unifiedAhead = unifyAhead();
                    childNodesUnified = unifiedAhead; ///
                } else {
                    var childNodeA = childNodesA[index], childNodeB = childNodesB[index], nodeA = childNodeA, nodeB = childNodeB, nodeUnified = this.unifyNode.apply(this, [
                        nodeA,
                        nodeB
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(unifyAhead); ///
                            var aheadIndex = index + 1, childNodesUnifiedAhead = _this.unifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                childNodesA,
                                childNodesB
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesUnifiedAhead;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJndW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWVyXCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICB1bmlmaWVkID0gbm9kZVVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVBTm9uVGVybWluYWxOb2RlID0gbm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQk5vblRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFUZXJtaW5hbE5vZGUgJiYgbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IHRlcm1pbmFsTm9kZVVuaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGVBTm9uVGVybWluYWxOb2RlICYmIG5vZGVCTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2Rlc0JMZW5ndGggPSBjaGlsZE5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0FMZW5ndGggPT09IGNoaWxkTm9kZXNCTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZFRlcm1pbmFsTm9kZU1hcEEgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0EpLFxuICAgICAgICAgICAgY2hpbGRUZXJtaW5hbE5vZGVNYXBCID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGNoaWxkTm9kZXNCKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChjaGlsZFRlcm1pbmFsTm9kZU1hcEEsIGNoaWxkVGVybWluYWxOb2RlTWFwQik7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWRBaGVhZDsgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBjaGlsZE5vZGVzQS5ldmVyeSgoY2hpbGROb2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUIgPSBjaGlsZE5vZGVzQltpbmRleF0sXG4gICAgICAgICAgICAgICAgICBub2RlQSA9IGNoaWxkTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgICAgbm9kZUIgPSBjaGlsZE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICAgIG5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAobm9kZVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHVuaWZpZWRBaGVhZCA9IHVuaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHVuaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmaWVkQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2JlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdGhpcy51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnlBLCBub2RlUXVlcnlCLCB1bmlmeSB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlQSA9IG5vZGVRdWVyeUEobm9uVGVybWluYWxOb2RlQSksICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gbm9kZVF1ZXJ5Qihub25UZXJtaW5hbE5vZGVCKTsgIC8vL1xuXG4gICAgICBpZiAoKG5vZGVBICE9PSBudWxsKSAmJiAobm9kZUIgIT09IG51bGwpKSB7XG4gICAgICAgIG5vZGVVbmlmaWVkID0gdW5pZnkobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmaWVkO1xuXG4gICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0FMZW5ndGggPSBjaGlsZE5vZGVzQS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNBTGVuZ3RoKSB7XG4gICAgICBjb25zdCB1bmlmaWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdW5pZmllZEFoZWFkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGROb2RlQSA9IGNoaWxkTm9kZXNBW2luZGV4XSxcbiAgICAgICAgICAgIGNoaWxkTm9kZUIgPSBjaGlsZE5vZGVzQltpbmRleF0sXG4gICAgICAgICAgICBub2RlQSA9IGNoaWxkTm9kZUEsIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBjaGlsZE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godW5pZnlBaGVhZCk7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFoZWFkSW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IG5vZGVVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVW5pZmllciIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5pZmllZCIsIm5vZGVVbmlmaWVkIiwidW5pZnlOb2RlIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwibm9kZUFOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vZGVCTm9uVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsInVuaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVW5pZmllZCIsImNoaWxkTm9kZXNBTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2Rlc0JMZW5ndGgiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEEiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJjaGlsZFRlcm1pbmFsTm9kZU1hcEIiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpbmRleCIsImNoaWxkTm9kZXNVbmlmaWVkQWhlYWQiLCJ1bmlmeUNoaWxkTm9kZXNBaGVhZCIsImV2ZXJ5IiwiY2hpbGROb2RlQSIsImNoaWxkTm9kZUIiLCJ1bmlmeUFoZWFkIiwicG9wIiwidW5pZmllZEFoZWFkIiwicHVzaCIsIm1hcHMiLCJjb25zdHJ1Y3RvciIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwibm9iZUIiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsImFoZWFkSW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3FCQU5LO3lCQUNzQjt1QkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEIsSUFBQSxBQUFNRix3QkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDdkMsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLENBQUNDLFNBQVMsT0FBZCxJQUFJLEVBQUo7b0JBQWVMO29CQUFPQztpQkFBNkIsQ0FBbkQsT0FBNkIscUJBQUdDO2dCQUVwREMsVUFBVUMsYUFBYyxHQUFHO2dCQUUzQixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVMLEtBQUssRUFBRUMsS0FBSztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUMzQyxJQUFJRSxjQUFjO2dCQUVsQixJQUFNRSxvQkFBb0JOLE1BQU1PLGNBQWMsSUFDeENDLG9CQUFvQlAsTUFBTU0sY0FBYyxJQUN4Q0UsdUJBQXVCVCxNQUFNVSxpQkFBaUIsSUFDOUNDLHVCQUF1QlYs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