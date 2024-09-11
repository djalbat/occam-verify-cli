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
                var verified;
                var nodeVerified = this.verifyNode.apply(this, [
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                verified = nodeVerified; ///
                return verified;
            }
        },
        {
            key: "verifyNode",
            value: function verifyNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var nodeVerified;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeVerified = this.verifyTerminalNode.apply(this, [
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerified = terminalNodeVerified; ///
                } else {
                    var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode.apply(this, [
                        nonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                    nodeVerified = nonTerminalNodeVerified; ///
                }
                return nodeVerified;
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
                        var node = childNode, nodeVerified = _this.verifyNode.apply(_this, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        if (nodeVerified) {
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
                var terminalNodeVerified;
                var lastRemainingArgumentFunction = (0, _arguments.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var verifyAhead = remainingArguments.pop(), verifiedAhead = verifyAhead();
                    terminalNodeVerified = verifiedAhead; ///
                    remainingArguments.push(verifyAhead);
                } else {
                    terminalNodeVerified = true;
                }
                return terminalNodeVerified;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var nonTerminalNodeVerified;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                remainingArguments[_key - 1] = arguments[_key];
                            }
                            var nonTerminalNodeVerified;
                            var childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = _this.verifyChildNodes.apply(_this, [
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            nonTerminalNodeVerified = childNodesVerify; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ]);
                var nodeVerified = false;
                maps.some(function(map) {
                    var _$nodeQuery = map.nodeQuery, verify = map.verify;
                    var node = _$nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        nodeVerified = verify.apply(void 0, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        return true;
                    }
                });
                nonTerminalNodeVerified = nodeVerified; ///
                return nonTerminalNodeVerified;
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
                    var verifiedAhead = verifyAhead();
                    childNodesVerify = verifiedAhead; ///
                } else {
                    var childNode = childNodes[index], node = childNode, nodeVerified = this.verifyNode.apply(this, [
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
                    childNodesVerify = nodeVerified; ///
                }
                return childNodesVerify;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FyZ3VtZW50c1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh2ZXJpZnlBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnk6IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5OyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIGxldCBub2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeSwgdmVyaWZ5IH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlUXVlcnkobm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5KG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdmVyaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2godmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFoZWFkSW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnlBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJpZmllciIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5Iiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInZlcmlmaWVkIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZnkiLCJsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInZlcmlmeUNoaWxkTm9kZXNBaGVhZCIsImV2ZXJ5IiwiY2hpbGROb2RlIiwidmVyaWZ5QWhlYWQiLCJwb3AiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsIm1hcHMiLCJjb25zdHJ1Y3RvciIsImdldENoaWxkTm9kZXMiLCJzb21lIiwibWFwIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImFoZWFkSW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxLO3lCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQU1DLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDaEMsSUFBSUM7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLFVBQVUsT0FBZixJQUFJLEVBQUo7b0JBQWdCSjtpQkFBNEIsQ0FBNUMsT0FBc0IscUJBQUdDO2dCQUU5Q0MsV0FBV0MsY0FBZSxHQUFHO2dCQUU3QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdKLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFB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