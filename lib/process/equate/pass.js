"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Pass;
    }
});
var _query = require("../../utilities/query");
var _unifier = require("../../utilities/unifier");
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
var Pass = /*#__PURE__*/ function() {
    function Pass() {
        _class_call_check(this, Pass);
    }
    _create_class(Pass, [
        {
            key: "run",
            value: function run(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    leftNode,
                    rightNode
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(leftChildNodes, rightChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descended = false;
                var leftChildNodesLength = leftChildNodes.length, rightChildNodesLength = rightChildNodes.length;
                if (leftChildNodesLength === rightChildNodesLength) {
                    var leftTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(leftChildNodes), rightTerminalNodeMap = (0, _unifier.terminalNodeMapFromNodes)(rightChildNodes), terminalNodeMapsEqual = (0, _unifier.areTerminalNodeMapsEqual)(leftTerminalNodeMap, rightTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        descended = leftChildNodes.every(function(leftChildNode, index) {
                            var rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, nodeVisited = _this.visitNode.apply(_this, [
                                leftNode,
                                rightNode
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (nodeVisited) {
                                return true;
                            }
                        });
                    }
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var leftNodeTerminalNode = leftNode.isTerminalNode(), rightNodeTerminalNode = rightNode.isTerminalNode(), leftNodeNonTerminalNode = leftNode.isNonTerminalNode(), rightNodeNonTerminalNode = rightNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (leftNodeTerminalNode && rightNodeTerminalNode) {
                    var leftTerminalNode = leftNode, rightTerminalNode = rightNode; ///
                    visited = this.visitTerminalNode.apply(this, [
                        leftTerminalNode,
                        rightTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else if (leftNodeNonTerminalNode && rightNodeNonTerminalNode) {
                    var leftNonTerminalNode = leftNode, rightNonTerminalNode = rightNode; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        leftNonTerminalNode,
                        rightNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(leftTerminalNode, rightTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited;
                visited = true;
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        leftNodeQuery: nonTerminalNodeQuery,
                        rightNodeQuery: nonTerminalNodeQuery,
                        run: function(leftNode, rightNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var visited;
                            var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(); ///
                            if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                                var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = _this.descend.apply(_this, [
                                    leftChildNodes,
                                    rightChildNodes
                                ].concat(_to_consumable_array(remainingArguments)));
                                visited = descended; ///
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var leftNodeQuery = map.leftNodeQuery, rightNodeQuery = map.rightNodeQuery, run = map.run;
                    var leftNode = leftNodeQuery(leftNonTerminalNode), rightNode = rightNodeQuery(rightNonTerminalNode); ///
                    if (leftNode !== null && rightNode !== null) {
                        var success = run.apply(void 0, [
                            leftNode,
                            rightNode
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success; ///
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return Pass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS9wYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmllclwiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzIHtcbiAgcnVuKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRDaGlsZE5vZGVzTGVuZ3RoID0gbGVmdENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHJpZ2h0Q2hpbGROb2Rlc0xlbmd0aCA9IHJpZ2h0Q2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVmdENoaWxkTm9kZXNMZW5ndGggPT09IHJpZ2h0Q2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhsZWZ0Q2hpbGROb2RlcyksXG4gICAgICAgICAgICByaWdodFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhyaWdodENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGxlZnRUZXJtaW5hbE5vZGVNYXAsIHJpZ2h0VGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBkZXNjZW5kZWQgPSBsZWZ0Q2hpbGROb2Rlcy5ldmVyeSgobGVmdENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByaWdodENoaWxkTm9kZSA9IHJpZ2h0Q2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBsZWZ0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vZGUgPSByaWdodENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9kZVZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKG5vZGVWaXNpdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb2RlVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVUZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVUZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZShsZWZ0VGVybWluYWxOb2RlLCByaWdodFRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbGVmdE5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJpZ2h0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBsZWZ0Q2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgdmlzaXRlZCA9IGRlc2NlbmRlZDsgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0Tm9kZVF1ZXJ5LCByaWdodE5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdE5vZGVRdWVyeShsZWZ0Tm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHROb2RlUXVlcnkocmlnaHROb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgobGVmdE5vZGUgIT09IG51bGwpICYmIChyaWdodE5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXNzIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydW4iLCJsZWZ0Tm9kZSIsInJpZ2h0Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImxlZnRDaGlsZE5vZGVzIiwicmlnaHRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwibGVmdENoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodENoaWxkTm9kZXNMZW5ndGgiLCJsZWZ0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwicmlnaHRUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJldmVyeSIsImxlZnRDaGlsZE5vZGUiLCJpbmRleCIsInJpZ2h0Q2hpbGROb2RlIiwibm9kZVZpc2l0ZWQiLCJsZWZ0Tm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwicmlnaHROb2RlVGVybWluYWxOb2RlIiwibGVmdE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZU5vblRlcm1pbmFsTm9kZSIsImxlZnRUZXJtaW5hbE5vZGUiLCJyaWdodFRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwibGVmdE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTEs7dUJBQ3lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhCLElBQUEsQUFBTUYscUJBQU47YUFBTUE7Z0NBQUFB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