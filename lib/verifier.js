"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Verifier;
    }
});
var _query = require("./utilities/query");
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
var Verifier = /*#__PURE__*/ function() {
    function Verifier() {
        _class_call_check(this, Verifier);
    }
    _create_class(Verifier, [
        {
            key: "verify",
            value: function verify(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var verifies;
                var nodeVerifies = this.verifyNode.apply(this, [
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                verifies = nodeVerifies; ///
                return verifies;
            }
        },
        {
            key: "verifyNode",
            value: function verifyNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var nodeVerifies;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeVerifies = this.verifyTerminalNode.apply(this, [
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerifies = terminalNodeVerifies; ///
                } else {
                    var nonTerminalNode = node, nonTerminalNodeVerifies = this.verifyNonTerminalNode.apply(this, [
                        nonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerifies = nonTerminalNodeVerifies; ///
                }
                return nodeVerifies;
            }
        },
        {
            key: "verifyChildNodes",
            value: function verifyChildNodes(childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var childNodesVerify;
                var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var index = 0, childNodesVerifyAhead = this.verifyChildNodesAhead.apply(this, [
                        index,
                        childNodes
                    ].concat(_to_consumable_array(remainingArguments)));
                    childNodesVerify = childNodesVerifyAhead; ///
                } else {
                    childNodesVerify = childNodes.every(function(childNode) {
                        var node = childNode, nodeVerifies = _this.verifyNode.apply(_this, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        if (nodeVerifies) {
                            return true;
                        }
                    });
                }
                return childNodesVerify;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var terminalNodeVerifies;
                var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var verifyAhead = remainingArguments.pop(), verifiesAhead = verifyAhead();
                    terminalNodeVerifies = verifiesAhead; ///
                    remainingArguments.push(verifyAhead);
                } else {
                    terminalNodeVerifies = true;
                }
                return terminalNodeVerifies;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var nonTerminalNodeVerifies;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                remainingArguments[_key - 1] = arguments[_key];
                            }
                            var nonTerminalNodeVerifies;
                            var childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = _this.verifyChildNodes.apply(_this, [
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            nonTerminalNodeVerifies = childNodesVerify; ///
                            return nonTerminalNodeVerifies;
                        }
                    }
                ]);
                var nodeVerifies = false;
                maps.some(function(map) {
                    var _$nodeQuery = map.nodeQuery, verify = map.verify;
                    var node = _$nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        nodeVerifies = verify.apply(void 0, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        return true;
                    }
                });
                nonTerminalNodeVerifies = nodeVerifies; ///
                return nonTerminalNodeVerifies;
            }
        },
        {
            key: "verifyChildNodesAhead",
            value: function verifyChildNodesAhead(index, childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var childNodesVerify;
                var verifyAhead = remainingArguments.pop(), childNodesLength = childNodes.length;
                if (index === childNodesLength) {
                    var verifiesAhead = verifyAhead();
                    childNodesVerify = verifiesAhead; ///
                } else {
                    var childNode = childNodes[index], node = childNode, nodeVerifies = this.verifyNode.apply(this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(verifyAhead);
                            var aheadIndex = index + 1, childNodesVerifyAhead = _this.verifyChildNodesAhead.apply(_this, [
                                aheadIndex,
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            return childNodesVerifyAhead;
                        }
                    ]));
                    childNodesVerify = nodeVerifies; ///
                }
                return childNodesVerify;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FyZ3VtZW50c1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHZlcmlmaWVzID0gbm9kZVZlcmlmaWVzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub2RlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZXMgPSB0ZXJtaW5hbE5vZGVWZXJpZmllczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKG5vZGVWZXJpZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllcztcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgICB2ZXJpZmllc0FoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybWluYWxOb2RlVmVyaWZpZXMgPSB2ZXJpZmllc0FoZWFkOyAvLy9cblxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godmVyaWZ5QWhlYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gY2hpbGROb2Rlc1ZlcmlmeTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbm9kZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHZlcmlmeSB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVWZXJpZmllcyA9IHZlcmlmeShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBub2RlVmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdmVyaWZpZXNBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeSIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ2ZXJpZmllcyIsIm5vZGVWZXJpZmllcyIsInZlcmlmeU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllcyIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVzIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ2ZXJpZnlDaGlsZE5vZGVzQWhlYWQiLCJldmVyeSIsImNoaWxkTm9kZSIsInZlcmlmeUFoZWFkIiwicG9wIiwidmVyaWZpZXNBaGVhZCIsInB1c2giLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJtYXAiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiYWhlYWRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTEs7eUJBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhCLElBQUEsQUFBTUYseUJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNoQyxJQUFJQztnQkFFSixJQUFNQyxlQUFlLElBQUksQ0FBQ0MsVUFBVSxPQUFmLElBQUksRUFBSjtvQkFBZ0JKO2lCQUE0QixDQUE1QyxPQUFzQixxQkFBR0M7Z0JBRTlDQyxXQUFXQyxjQUFlLEdBQUc7Z0JBRTdCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJB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