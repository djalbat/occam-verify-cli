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
                var unified;
                var nodeUnified = this.unifyNode.apply(this, [
                    generalNode,
                    specificNode
                ].concat(_to_consumable_array(remainingArguments)));
                unified = nodeUnified; ///
                return unified;
            }
        },
        {
            key: "unifyNode",
            value: function unifyNode(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeUnified = false;
                var generalNodeTerminalNode = generalNode.isTerminalNode(), specificNodeTerminalNode = specificNode.isTerminalNode(), generalNodeNonTerminalNode = generalNode.isNonTerminalNode(), specificNodeNonTerminalNode = specificNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
                    var generalTerminalNode = generalNode, specificTerminalNode = specificNode, terminalNodeUnified = this.unifyTerminalNode.apply(this, [
                        generalTerminalNode,
                        specificTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnified = terminalNodeUnified; ///
                } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
                    var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode, nonTerminalNodeUnified = this.unifyNonTerminalNode.apply(this, [
                        generalNonTerminalNode,
                        specificNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeUnified = nonTerminalNodeUnified; ///
                }
                return nodeUnified;
            }
        },
        {
            key: "unifyChildNodes",
            value: function unifyChildNodes(generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesUnified = false;
                var generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
                if (generalChildNodesLength === specificChildNodesLength) {
                    var specificTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _unifier.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0, childNodesUnifiedAhead = this.unifyChildNodesAhead.apply(this, [
                                index,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            childNodesUnified = childNodesUnifiedAhead; ///
                        } else {
                            childNodesUnified = generalChildNodes.every(function(generalChildNode, index) {
                                var specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, nodeUnified = _this.unifyNode.apply(_this, [
                                    generalNode,
                                    specificNode
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
            value: function unifyTerminalNode(generalTerminalNode, specificTerminalNode) {
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
            value: function unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var nonTerminalNodeUnified;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        generalNodeQuery: nonTerminalNodeQuery,
                        specificNodeQuery: nonTerminalNodeQuery,
                        unify: function(generalNode, specificNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var nonTerminalNodeUnified;
                            var generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///
                            if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
                                var generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNode = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNode, childNodesUnified = _this.unifyChildNodes.apply(_this, [
                                    generalChildNodes,
                                    specificChildNodes
                                ].concat(_to_consumable_array(remainingArguments)));
                                nonTerminalNodeUnified = childNodesUnified; ///
                            }
                            return nonTerminalNodeUnified;
                        }
                    }
                ]);
                var nodeUnified = false;
                maps.some(function(map) {
                    var generalNodeQuery = map.generalNodeQuery, specificNodeQuery = map.specificNodeQuery, unify = map.unify;
                    var generalNode = generalNodeQuery(generalNonTerminalNode), specificNode = specificNodeQuery(specificNonTerminalNode); ///
                    if (generalNode !== null && specificNode !== null) {
                        nodeUnified = unify.apply(void 0, [
                            generalNode,
                            specificNode
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
            value: function unifyChildNodesAhead(index, generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var childNodesUnified;
                var unifyAhead = remainingArguments.pop(), generalChildNodesLength = generalChildNodes.length;
                if (index === generalChildNodesLength) {
                    var unifiedAhead = unifyAhead();
                    childNodesUnified = unifiedAhead; ///
                } else {
                    var generalChildNode = generalChildNodes[index], specificChildNode = specificChildNodes[index], generalNode = generalChildNode, specificNode = specificChildNode, nodeUnified = this.unifyNode.apply(this, [
                        generalNode,
                        specificNode
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(unifyAhead); ///
                            var aheadIndex = index + 1, childNodesUnifiedAhead = _this.unifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                generalChildNodes,
                                specificChildNodes
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJndW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWVyXCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHVuaWZpZWQgPSBub2RlVW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gdGVybWluYWxOb2RlVW5pZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgc3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCA9IHNwZWNpZmljQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPT09IHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoc3BlY2lmaWNDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAsIHNwZWNpZmljVGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWRBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWRBaGVhZDsgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChub2RlVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5VGVybWluYWxOb2RlKGdlbmVyYWxUZXJtaW5hbE5vZGUsIHNwZWNpZmljVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHVuaWZpZWRBaGVhZCA9IHVuaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHVuaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmaWVkQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgdW5pZnkgfSA9IG1hcDtcblxuICAgICAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTm9kZVF1ZXJ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY05vZGVRdWVyeShzcGVjaWZpY05vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChnZW5lcmFsTm9kZSAhPT0gbnVsbCkgJiYgKHNwZWNpZmljTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbm9kZVVuaWZpZWQgPSB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVW5pZmllZDtcblxuICAgIGNvbnN0IHVuaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgdW5pZmllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDaGlsZE5vZGUgPSBnZW5lcmFsQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZSA9IHNwZWNpZmljQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godW5pZnlBaGVhZCk7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFoZWFkSW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQgPSB0aGlzLnVuaWZ5Q2hpbGROb2Rlc0FoZWFkKGFoZWFkSW5kZXgsIGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBub2RlVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVuaWZpZXIiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVuaWZ5IiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmlmaWVkIiwibm9kZVVuaWZpZWQiLCJ1bmlmeU5vZGUiLCJnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlVGVybWluYWxOb2RlIiwiZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSIsImdlbmVyYWxUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeVRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsInVuaWZ5Q2hpbGROb2RlcyIsImdlbmVyYWxDaGlsZE5vZGVzIiwic3BlY2lmaWNDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1VuaWZpZWQiLCJnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCIsInNwZWNpZmljVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImluZGV4IiwiY2hpbGROb2Rlc1VuaWZpZWRBaGVhZCIsInVuaWZ5Q2hpbGROb2Rlc0FoZWFkIiwiZXZlcnkiLCJnZW5lcmFsQ2hpbGROb2RlIiwic3BlY2lmaWNDaGlsZE5vZGUiLCJ1bmlmeUFoZWFkIiwicG9wIiwidW5pZmllZEFoZWFkIiwicHVzaCIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInNvbWUiLCJtYXAi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