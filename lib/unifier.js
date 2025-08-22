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
            value: function unify(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var unifies;
                var nodeUnifies = this.unifyNode.apply(this, [
                    generalNode,
                    specificNode
                ].concat(_to_consumable_array(remainingArguments)));
                unifies = nodeUnifies; ///
                return unifies;
            }
        },
        {
            key: "unifyNode",
            value: function unifyNode(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeUnifies = false;
                var generalNodeTerminalNode = generalNode.isTerminalNode(), specificNodeTerminalNode = specificNode.isTerminalNode(), generalNodeNonTerminalNode = generalNode.isNonTerminalNode(), specificNodeNonTerminalNode = specificNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
                    var generalTerminalNode = generalNode, specificTerminalNode = specificNode, terminalNodeUnifies = this.unifyTerminalNode.apply(this, [
                        generalTerminalNode,
                        specificTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnifies = terminalNodeUnifies; ///
                } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
                    var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode.apply(this, [
                        generalNonTerminalNode,
                        specificNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnifies = nonTerminalNodeUnifies; ///
                }
                return nodeUnifies;
            }
        },
        {
            key: "unifyChildNodes",
            value: function unifyChildNodes(generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesUnify = false;
                var generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
                if (generalChildNodesLength === specificChildNodesLength) {
                    var specificTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _unifier.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0, childNodesUnifyAhead = this.unifyChildNodesAhead.apply(this, [
                                index,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            childNodesUnify = childNodesUnifyAhead; ///
                        } else {
                            childNodesUnify = generalChildNodes.every(function(generalChildNode, index) {
                                var specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, nodeUnifies = _this.unifyNode.apply(_this, [
                                    generalNode,
                                    specificNode
                                ].concat(_to_consumable_array(remainingArguments)));
                                if (nodeUnifies) {
                                    return true;
                                }
                            });
                        }
                    }
                }
                return childNodesUnify;
            }
        },
        {
            key: "unifyTerminalNode",
            value: function unifyTerminalNode(generalTerminalNode, specificTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var terminalNodeUnifies;
                var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var unifyAhead = remainingArguments.pop(), unifiesAhead = unifyAhead();
                    terminalNodeUnifies = unifiesAhead; ///
                    remainingArguments.push(unifiesAhead);
                } else {
                    terminalNodeUnifies = true;
                }
                return terminalNodeUnifies;
            }
        },
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var nonTerminalNodeUnifies;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        generalNodeQuery: nonTerminalNodeQuery,
                        specificNodeQuery: nonTerminalNodeQuery,
                        unify: function(generalNode, specificNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var nonTerminalNodeUnifies;
                            var generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///
                            if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
                                var generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNode = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNode, childNodesUnify = _this.unifyChildNodes.apply(_this, [
                                    generalChildNodes,
                                    specificChildNodes
                                ].concat(_to_consumable_array(remainingArguments)));
                                nonTerminalNodeUnifies = childNodesUnify; ///
                            }
                            return nonTerminalNodeUnifies;
                        }
                    }
                ]);
                var nodeUnifies = false;
                maps.some(function(map) {
                    var generalNodeQuery = map.generalNodeQuery, specificNodeQuery = map.specificNodeQuery, unify = map.unify;
                    var generalNode = generalNodeQuery(generalNonTerminalNode), specificNode = specificNodeQuery(specificNonTerminalNode); ///
                    if (generalNode !== null && specificNode !== null) {
                        nodeUnifies = unify.apply(void 0, [
                            generalNode,
                            specificNode
                        ].concat(_to_consumable_array(remainingArguments)));
                        return true;
                    }
                });
                nonTerminalNodeUnifies = nodeUnifies; ///
                return nonTerminalNodeUnifies;
            }
        },
        {
            key: "unifyChildNodesAhead",
            value: function unifyChildNodesAhead(index, generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var childNodesUnify;
                var unifyAhead = remainingArguments.pop(), generalChildNodesLength = generalChildNodes.length;
                if (index === generalChildNodesLength) {
                    var unifiesAhead = unifyAhead();
                    childNodesUnify = unifiesAhead; ///
                } else {
                    var generalChildNode = generalChildNodes[index], specificChildNode = specificChildNodes[index], generalNode = generalChildNode, specificNode = specificChildNode, nodeUnifies = this.unifyNode.apply(this, [
                        generalNode,
                        specificNode
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(unifyAhead); ///
                            var aheadIndex = index + 1, childNodesUnifyAhead = _this.unifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesUnifyAhead;
                        }
                    ]));
                    childNodesUnify = nodeUnifies; ///
                }
                return childNodesUnify;
            }
        }
    ]);
    return Unifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJndW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWVyXCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdW5pZmllcztcblxuICAgIGNvbnN0IG5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHVuaWZpZXMgPSBub2RlVW5pZmllczsgIC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVzID0gdGVybWluYWxOb2RlVW5pZmllczsgIC8vL1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgc3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllcyA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9IGdlbmVyYWxDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXNMZW5ndGggPSBzcGVjaWZpY0NoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID09PSBzcGVjaWZpY0NoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljVGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKHNwZWNpZmljQ2hpbGROb2RlcyksXG4gICAgICAgICAgICBnZW5lcmFsVGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChnZW5lcmFsVGVybWluYWxOb2RlTWFwLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmeUFoZWFkID0gdGhpcy51bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlc1VuaWZ5ID0gY2hpbGROb2Rlc1VuaWZ5QWhlYWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkTm9kZXNVbmlmeSA9IGdlbmVyYWxDaGlsZE5vZGVzLmV2ZXJ5KChnZW5lcmFsQ2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5VGVybWluYWxOb2RlKGdlbmVyYWxUZXJtaW5hbE5vZGUsIHNwZWNpZmljVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHRlcm1pbmFsTm9kZVVuaWZpZXM7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHVuaWZpZXNBaGVhZCA9IHVuaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybWluYWxOb2RlVW5pZmllcyA9IHVuaWZpZXNBaGVhZDsgIC8vL1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmaWVzQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllcztcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZ5ID0gdGhpcy51bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IGNoaWxkTm9kZXNVbmlmeTsgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbm9kZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGdlbmVyYWxOb2RlUXVlcnksIHNwZWNpZmljTm9kZVF1ZXJ5LCB1bmlmeSB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBnZW5lcmFsTm9kZSA9IGdlbmVyYWxOb2RlUXVlcnkoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljTm9kZVF1ZXJ5KHNwZWNpZmljTm9uVGVybWluYWxOb2RlKTsgIC8vL1xuXG4gICAgICBpZiAoKGdlbmVyYWxOb2RlICE9PSBudWxsKSAmJiAoc3BlY2lmaWNOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBub2RlVW5pZmllcyA9IHVuaWZ5KGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVzID0gbm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmeTtcblxuICAgIGNvbnN0IHVuaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgdW5pZmllc0FoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZnkgPSB1bmlmaWVzQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2RlID0gZ2VuZXJhbENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHVuaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVW5pZnlBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoYWhlYWRJbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1VuaWZ5ID0gbm9kZVVuaWZpZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVW5pZmllciIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnkiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuaWZpZXMiLCJub2RlVW5pZmllcyIsInVuaWZ5Tm9kZSIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5VGVybWluYWxOb2RlIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidW5pZnlDaGlsZE5vZGVzIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVW5pZnkiLCJnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCIsInNwZWNpZmljVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImluZGV4IiwiY2hpbGROb2Rlc1VuaWZ5QWhlYWQiLCJ1bmlmeUNoaWxkTm9kZXNBaGVhZCIsImV2ZXJ5IiwiZ2VuZXJhbENoaWxkTm9kZSIsInNwZWNpZmljQ2hpbGROb2RlIiwidW5pZnlBaGVhZCIsInBvcCIsInVuaWZpZXNBaGVhZCIsInB1c2giLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJzb21lIiwibWFwIiwiYWhlYWRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7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