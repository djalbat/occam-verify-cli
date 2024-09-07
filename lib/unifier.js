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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesUnified = false;
                var childNodesALength = childNodesA.length, childNodesBLength = childNodesB.length;
                if (childNodesALength === childNodesBLength) {
                    var childTerminalNodeMapA = (0, _unifier.terminalNodeMapFromNodes)(childNodesA), childTerminalNodeMapB = (0, _unifier.terminalNodeMapFromNodes)(childNodesB), terminalNodeMapsEqual = (0, _unifier.areTerminalNodeMapsEqual)(childTerminalNodeMapA, childTerminalNodeMapB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpZXJcIjtcblxuY29uc3Qgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHVuaWZpZWQgPSBub2RlVW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUFOb25UZXJtaW5hbE5vZGUgPSBub2RlQS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCTm9uVGVybWluYWxOb2RlID0gbm9kZUIuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQVRlcm1pbmFsTm9kZSAmJiBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gdGVybWluYWxOb2RlVW5pZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9kZUFOb25UZXJtaW5hbE5vZGUgJiYgbm9kZUJOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aCxcbiAgICAgICAgICBjaGlsZE5vZGVzQkxlbmd0aCA9IGNoaWxkTm9kZXNCLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzQUxlbmd0aCA9PT0gY2hpbGROb2Rlc0JMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNoaWxkVGVybWluYWxOb2RlTWFwQSA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhjaGlsZE5vZGVzQSksXG4gICAgICAgICAgICBjaGlsZFRlcm1pbmFsTm9kZU1hcEIgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoY2hpbGROb2Rlc0IpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGNoaWxkVGVybWluYWxOb2RlTWFwQSwgY2hpbGRUZXJtaW5hbE5vZGVNYXBCKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZnlBaGVhZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB0ZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICB1bmlmeWllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHVuaWZ5aWVkQWhlYWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vYmVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBjaGlsZE5vZGVzVW5pZmllZDsgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbm9kZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeUEsIG5vZGVRdWVyeUIsIHVuaWZ5IH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IG5vZGVBID0gbm9kZVF1ZXJ5QShub25UZXJtaW5hbE5vZGVBKSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBub2RlUXVlcnlCKG5vblRlcm1pbmFsTm9kZUIpOyAgLy8vXG5cbiAgICAgIGlmICgobm9kZUEgIT09IG51bGwpICYmIChub2RlQiAhPT0gbnVsbCkpIHtcbiAgICAgICAgbm9kZVVuaWZpZWQgPSB1bmlmeShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gbm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZpZWQ7XG5cbiAgICBjb25zdCB1bmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzQUxlbmd0aCA9IGNoaWxkTm9kZXNBLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0FMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHVuaWZ5aWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdW5pZnlpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUEgPSBjaGlsZE5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHVuaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gbm9kZVVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmlmaWVkIiwibm9kZVVuaWZpZWQiLCJ1bmlmeU5vZGUiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJub2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9kZUJOb25UZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidW5pZnlDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNVbmlmaWVkIiwiY2hpbGROb2Rlc0FMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVzQkxlbmd0aCIsImNoaWxkVGVybWluYWxOb2RlTWFwQSIsInRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyIsImNoaWxkVGVybWluYWxOb2RlTWFwQiIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImluZGV4IiwiY2hpbGROb2Rlc1ZlcmlmeUFoZWFkIiwidW5pZnlDaGlsZE5vZGVzQWhlYWQiLCJ1bmlmeUFoZWFkIiwicG9wIiwidW5pZnlpZWRBaGVhZCIsIm1hcHMiLCJjb25zdHJ1Y3RvciIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwibm9iZUIiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsImNoaWxkTm9kZUEi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