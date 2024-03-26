"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodeVerifier;
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
var NodeVerifier = /*#__PURE__*/ function() {
    function NodeVerifier() {
        _class_call_check(this, NodeVerifier);
    }
    _create_class(NodeVerifier, [
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
    return NodeVerifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9ub2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjaGlsZE5vZGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnlBaGVhZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2hpbGROb2Rlc1ZlcmlmeSA9IGNoaWxkTm9kZXNWZXJpZnlBaGVhZDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTsgIC8vL1xuXG4gICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZnk7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ2ZXJpZnlDaGlsZE5vZGVzQWhlYWQiLCJ2ZXJpZnlBaGVhZCIsInBvcCIsInZlcmlmaWVkQWhlYWQiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZSIsInB1c2giLCJhaGVhZEluZGV4Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3BDLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQkgsS0FBS0ksY0FBYztnQkFFNUMsSUFBSUQsa0JBQWtCO29CQUNwQixJQUFNRSxlQUFlTCxNQUNmTSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFB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