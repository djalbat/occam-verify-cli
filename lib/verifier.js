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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5KG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgdmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNWZXJpZnk7XG5cbiAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeUFoZWFkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzQWhlYWQoaW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gY2hpbGROb2Rlc1ZlcmlmeUFoZWFkOyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmVyaWZ5QWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpOyAgLy8vXG5cbiAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZnkgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmeTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHZlcmlmeSB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q2hpbGROb2Rlc0FoZWFkKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHZlcmlmeUFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXNBaGVhZChhaGVhZEluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5QWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzVmVyaWZ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeSIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ2ZXJpZmllZCIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Q2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwiaW5kZXgiLCJjaGlsZE5vZGVzVmVyaWZ5QWhlYWQiLCJ2ZXJpZnlDaGlsZE5vZGVzQWhlYWQiLCJ2ZXJpZnlBaGVhZCIsInBvcCIsInZlcmlmaWVkQWhlYWQiLCJtYXBzIiwiY29uc3RydWN0b3IiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGUiLCJwdXNoIiwiYWhlYWRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEIsSUFBQSxBQUFNRix5QkFBRCxBQUFMO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDaEMsSUFBSUM7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBZixNQUFBLElBQUksRUFBSjtvQkFBZ0JKO2lCQUE0QixDQUE1QyxPQUFzQixxQkFBR0M7Z0JBRTlDQyxXQUFXQyxj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