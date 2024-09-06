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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGNoaWxkTm9kZXNWZXJpZnlBaGVhZDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZnk7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IG5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIG5vZGVWZXJpZmllZCA9IG5vZGVRdWVyeU1hcHMuc29tZSgobm9kZVF1ZXJ5TWFwKSA9PiB7XG4gICAgY29uc3QgeyBub2RlUXVlcnksIHZlcmlmeSB9ID0gbm9kZVF1ZXJ5TWFwO1xuXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJ2ZXJpZnkiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZnkiLCJpbmRleCIsImNoaWxkTm9kZXNWZXJpZnlBaGVhZCIsInZlcmlmeUNoaWxkTm9kZXNBaGVhZCIsInZlcmlmeUFoZWFkIiwicG9wIiwidmVyaWZpZWRBaGVhZCIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlIiwicHVzaCIsImFoZWFkSW5kZXgiLCJub2RlUXVlcnlNYXBzIiwic29tZSIsIm5vZGVRdWVyeU1hcCIsIm5vZGVRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUVxQkE7O0lBbUZMQyxNQUFNO2VBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5GRCxJQUFB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