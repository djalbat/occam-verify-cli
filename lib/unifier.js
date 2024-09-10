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
var _arguments = require("./utilities/arguments");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpZXJcIjtcbmltcG9ydCB7aXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbn0gZnJvbSBcIi4vdXRpbGl0aWVzL2FyZ3VtZW50c1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmaWVyIHtcbiAgdW5pZnkobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgdW5pZmllZCA9IG5vZGVVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Tm9kZShub2RlQSwgbm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub2RlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub2RlQU5vblRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9kZUJOb25UZXJtaW5hbE5vZGUgPSBub2RlQi5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGVBVGVybWluYWxOb2RlICYmIG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVVuaWZpZWQgPSB0ZXJtaW5hbE5vZGVVbmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmIChub2RlQU5vblRlcm1pbmFsTm9kZSAmJiBub2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVVuaWZpZWQgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNBTGVuZ3RoID0gY2hpbGROb2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIGNoaWxkTm9kZXNCTGVuZ3RoID0gY2hpbGROb2Rlc0IubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNBTGVuZ3RoID09PSBjaGlsZE5vZGVzQkxlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGRUZXJtaW5hbE5vZGVNYXBBID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGNoaWxkTm9kZXNBKSxcbiAgICAgICAgICAgIGNoaWxkVGVybWluYWxOb2RlTWFwQiA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhjaGlsZE5vZGVzQiksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwoY2hpbGRUZXJtaW5hbE5vZGVNYXBBLCBjaGlsZFRlcm1pbmFsTm9kZU1hcEIpO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVW5pZmllZEFoZWFkID0gdGhpcy51bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gY2hpbGROb2Rlc0EuZXZlcnkoKGNoaWxkTm9kZUEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB0ZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IHVuaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksXG4gICAgICAgICAgICB1bmlmaWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1pbmFsTm9kZVVuaWZpZWQgPSB1bmlmaWVkQWhlYWQ7ICAvLy9cblxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godW5pZmllZEFoZWFkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9iZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IGNoaWxkTm9kZXNVbmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIGxldCBub2RlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5QSwgbm9kZVF1ZXJ5QiwgdW5pZnkgfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZUEgPSBub2RlUXVlcnlBKG5vblRlcm1pbmFsTm9kZUEpLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IG5vZGVRdWVyeUIobm9uVGVybWluYWxOb2RlQik7ICAvLy9cblxuICAgICAgaWYgKChub2RlQSAhPT0gbnVsbCkgJiYgKG5vZGVCICE9PSBudWxsKSkge1xuICAgICAgICBub2RlVW5pZmllZCA9IHVuaWZ5KG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBub2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVW5pZmllZDtcblxuICAgIGNvbnN0IHVuaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNBTGVuZ3RoID0gY2hpbGROb2Rlc0EubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVzQUxlbmd0aCkge1xuICAgICAgY29uc3QgdW5pZmllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUEgPSBjaGlsZE5vZGVzQVtpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVCID0gY2hpbGROb2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY2hpbGROb2RlQiwgLy8vXG4gICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHVuaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVW5pZmllZEFoZWFkID0gdGhpcy51bmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBub2RlVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVuaWZpZXIiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuaWZpZWQiLCJub2RlVW5pZmllZCIsInVuaWZ5Tm9kZSIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsIm5vZGVBTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub2RlQk5vblRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJ1bmlmeUNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1VuaWZpZWQiLCJjaGlsZE5vZGVzQUxlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXNCTGVuZ3RoIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiY2hpbGRUZXJtaW5hbE5vZGVNYXBCIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJjaGlsZE5vZGVzVW5pZmllZEFoZWFkIiwidW5pZnlDaGlsZE5vZGVzQWhlYWQiLCJldmVyeSIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwidW5pZnlBaGVhZCIsInBvcCIsInVuaWZpZWRBaGVhZCIsInB1c2giLCJtYXBzIiwiY29uc3RydWN0b3IiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsIm5vYmVCIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJhaGVhZEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOSzt1QkFDeUM7eUJBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhCLElBQUEsQUFBTUYsd0JBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDdkMsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBZCxNQUFBLElBQUksRUFBSjtvQkFBZUw7b0JBQU9DO2lCQUE2QixDQUFuRCxPQUE2QixxQkFBR0M7Z0JBRXBEQyxVQUFVQyxhQUFjLEdBQUc7Z0JBRTNCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUwsS0FBSyxFQUFFQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzNDLElBQUlFLGNBQWM7Z0JBRWxCLElBQU1FLG9CQUFvQk4sTUFBTU8sY0FBYyxJQUN4Q0Msb0JBQW9CUCxNQUFNTSxjQUFjLElBQ3hDRSx1QkFBdUJULE1BQU1VLGlCQUFpQixJQUM5Q0Ms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