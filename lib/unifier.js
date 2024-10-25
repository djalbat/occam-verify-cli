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
                            var generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeBRuleNam = specificNonTerminalNode.getRuleName(); ///
                            if (generalNonTerminalNodeRuleName === specificNonTerminalNodeBRuleNam) {
                                var generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeBChildNode = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeBChildNode, childNodesUnified = _this.unifyChildNodes.apply(_this, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJndW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWVyXCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHVuaWZpZWQgPSBub2RlVW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVVbmlmaWVkID0gdGVybWluYWxOb2RlVW5pZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgc3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCA9IHNwZWNpZmljQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPT09IHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoc3BlY2lmaWNDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAsIHNwZWNpZmljVGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWRBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWRBaGVhZDsgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChub2RlVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5VGVybWluYWxOb2RlKGdlbmVyYWxUZXJtaW5hbE5vZGUsIHNwZWNpZmljVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIHVuaWZpZWRBaGVhZCA9IHVuaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybWluYWxOb2RlVW5pZmllZCA9IHVuaWZpZWRBaGVhZDsgIC8vL1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmaWVkQWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQlJ1bGVOYW0gPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQlJ1bGVOYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBjaGlsZE5vZGVzVW5pZmllZDsgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbm9kZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGdlbmVyYWxOb2RlUXVlcnksIHNwZWNpZmljTm9kZVF1ZXJ5LCB1bmlmeSB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBnZW5lcmFsTm9kZSA9IGdlbmVyYWxOb2RlUXVlcnkoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljTm9kZVF1ZXJ5KHNwZWNpZmljTm9uVGVybWluYWxOb2RlKTsgIC8vL1xuXG4gICAgICBpZiAoKGdlbmVyYWxOb2RlICE9PSBudWxsKSAmJiAoc3BlY2lmaWNOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBub2RlVW5pZmllZCA9IHVuaWZ5KGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gbm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNVbmlmaWVkO1xuXG4gICAgY29uc3QgdW5pZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCB1bmlmaWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gdW5pZmllZEFoZWFkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENoaWxkTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgKCkgPT4ge1xuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh1bmlmeUFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWRBaGVhZCA9IHRoaXMudW5pZnlDaGlsZE5vZGVzQWhlYWQoYWhlYWRJbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IG5vZGVVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVW5pZmllciIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnkiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuaWZpZWQiLCJub2RlVW5pZmllZCIsInVuaWZ5Tm9kZSIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5VGVybWluYWxOb2RlIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidW5pZnlDaGlsZE5vZGVzIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVW5pZmllZCIsImdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoIiwic3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJnZW5lcmFsVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJjaGlsZE5vZGVzVW5pZmllZEFoZWFkIiwidW5pZnlDaGlsZE5vZGVzQWhlYWQiLCJldmVyeSIsImdlbmVyYWxDaGlsZE5vZGUiLCJzcGVjaWZpY0NoaWxkTm9kZSIsInVuaWZ5QWhlYWQiLCJwb3AiLCJ1bmlmaWVkQWhlYWQiLCJwdXNoIiwibWFwcyIsImNvbnN0cnVjdG9yIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUJSdWxlTmFtIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVCQ2hpbGRO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