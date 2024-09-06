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
        return Verifier;
    },
    verify: function() {
        return verify;
    }
});
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var childNodesVerify;
                var index = 0, childNodesVerifyAhead = this.verifyChildNodesAhead.apply(this, [
                    index,
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                childNodesVerify = childNodesVerifyAhead; ///
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
                var verifyAhead = remainingArguments.pop(), verifiedAhead = verifyAhead(); ///
                terminalNodeVerified = verifiedAhead; ///
                return terminalNodeVerified;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var nonTerminalNodeVerified;
                var childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = this.verifyChildNodes.apply(this, [
                    childNodes
                ].concat(_to_consumable_array(remainingArguments)));
                nonTerminalNodeVerified = childNodesVerify; ///
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
function verify(nodeQueryMaps, nonTerminalNode) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var nodeVerified = false;
    nodeVerified = nodeQueryMaps.some(function(nodeQueryMap) {
        var nodeQuery = nodeQueryMap.nodeQuery, verify = nodeQueryMap.verify;
        var node = nodeQuery(nonTerminalNode);
        if (node !== null) {
            nodeVerified = verify.apply(void 0, [
                node
            ].concat(_to_consumable_array(remainingArguments)));
            return true;
        }
    });
    return nodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICB2ZXJpZmllZCA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNoaWxkTm9kZXNWZXJpZnkgPSBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7ICAvLy9cblxuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZ5OyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXNBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnk7XG5cbiAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgKCkgPT4ge1xuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaCh2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoYWhlYWRJbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBub2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBub2RlVmVyaWZpZWQgPSBub2RlUXVlcnlNYXBzLnNvbWUoKG5vZGVRdWVyeU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCB2ZXJpZnkgfSA9IG5vZGVRdWVyeU1hcDtcblxuICAgIGNvbnN0IG5vZGUgPSBub2RlUXVlcnkobm9uVGVybWluYWxOb2RlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnkobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbIlZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInZlcmlmaWVkIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZnkiLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInZlcmlmeUNoaWxkTm9kZXNBaGVhZCIsInZlcmlmeUFoZWFkIiwicG9wIiwidmVyaWZpZWRBaGVhZCIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlIiwicHVzaCIsImFoZWFkSW5kZXgiLCJub2RlUXVlcnlNYXBzIiwic29tZSIsIm5vZGVRdWVyeU1hcCIsIm5vZGVRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUVxQkE7O0lBNkZMQyxNQUFNO2VBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdGRCxJQUFBLEFBQU1ELHlCQUFELEFBQUw7YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNoQyxJQUFJQztnQkFFSixJQUFNQyxlQUFlLElBQUksQ0FBQ0MsVUFBVSxDQUFmLE1BQUEsSUFBSSxFQUFKO29CQUFnQko7aUJBQTRCLENBQTVDLE9BQXNCLHFCQUFHQztnQkFFOUNDLFdBQVdDLGNBQWUsR0FBRztnQkFFN0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSixJQUFJO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3BDLElBQUlFO2dCQUVKLElBQU1FLG1CQUFtQkwsS0FBS00sY0FBYztnQkFFNUMsSUFBSUQsa0JBQWtCO29CQUNwQixJQUFNRSxlQUFlUCxNQUNmUSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsTUFBQSxJQUFJLEVBQUo7d0JBQXdCRjtxQkFBb0MsQ0FBNUQsT0FBc0MscUJBQUdOO29CQUV0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