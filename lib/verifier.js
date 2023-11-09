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
            value: function verifyNode(nodeA, nodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nodeVerified = false;
                var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
                if (nodeATerminalNode === nodeBTerminalNode) {
                    if (nodeATerminalNode) {
                        var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB);
                        nodeVerified = terminalNodeVerified; ///
                    } else {
                        var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeVerified = this.verifyNonTerminalNode.apply(this, [
                            nonTerminalNodeA,
                            nonTerminalNodeB
                        ].concat(_to_consumable_array(remainingArguments)));
                        nodeVerified = nonTerminalNodeVerified; ///
                    }
                }
                return nodeVerified;
            }
        },
        {
            key: "verifyNodes",
            value: function verifyNodes(nodesA, nodesB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var nodesVerify = false;
                var nodesALength = nodesA.length, nodesBLength = nodesB.length;
                if (nodesALength === nodesBLength) {
                    nodesVerify = nodesA.every(function(nodeA, index) {
                        var nodeB = nodesB[index], nodeVerified = _this.verifyNode.apply(_this, [
                            nodeA,
                            nodeB
                        ].concat(_to_consumable_array(remainingArguments)));
                        if (nodeVerified) {
                            return true;
                        }
                    });
                }
                return nodesVerify;
            }
        },
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNodeA, terminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var matches = terminalNodeA.match(terminalNodeB), terminalNodeVerified = matches; ///
                return terminalNodeVerified;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesVerify = this.verifyNodes.apply(this, [
                        nodesA,
                        nodesB
                    ].concat(_to_consumable_array(remainingArguments)));
                    nonTerminalNodeVerified = nodesVerify; ///
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return Verifier;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyaWZpZXIge1xuICB2ZXJpZnlOb2RlKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IG5vZGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2Rlc0FMZW5ndGggPSBub2Rlc0EubGVuZ3RoLFxuICAgICAgICAgIG5vZGVzQkxlbmd0aCA9IG5vZGVzQi5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNBTGVuZ3RoID09PSBub2Rlc0JMZW5ndGgpIHtcbiAgICAgIG5vZGVzVmVyaWZ5ID0gbm9kZXNBLmV2ZXJ5KChub2RlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUIgPSBub2Rlc0JbaW5kZXhdLFxuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZUEsIG5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmeTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVyaWZpZXIiLCJ2ZXJpZnlOb2RlIiwibm9kZUEiLCJub2RlQiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIm5vZGVWZXJpZmllZCIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Tm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc1ZlcmlmeSIsIm5vZGVzQUxlbmd0aCIsImxlbmd0aCIsIm5vZGVzQkxlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDNUMsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMsb0JBQW9CSixNQUFNSyxjQUFjLElBQ3hDQyxvQkFBb0JMLE1BQU1JLGNBQWM7Z0JBRTlDLElBQUlELHNCQUFzQkUsbUJBQW1CO29CQUMzQyxJQUFJRixtQkFBbUI7d0JBQ3JCLElBQU1HLGdCQUFnQlAsT0FDaEJRLGdCQUFnQlAsT0FDaEJRLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDSCxlQUFlQzt3QkFFcEVMLGVBQWVNLHNCQUF1QixHQUFHO29CQUMzQyxPQUFPO3dCQUNMLElBQU1FLG1CQUFtQlgsT0FDbkJZLG1CQUFtQlgsT0FDbkJZLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUExQixNQUFBLElBQUksRUFBSjs0QkFBMkJIOzRCQUFrQkM7eUJBQXdDLENBQXJGLE9BQStELHFCQUFHVjt3QkFFbEdDLGVBQWVVLHlCQUF5QixHQUFHO29CQUM3QztnQkFDRjtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE1BQU0sRUFBRUMsTUFBTTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR2YscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7OztnQkFDL0MsSUFBSWdCLGNBQWM7Z0JBRWxCLElBQU1DLGVBQWVILE9BQU9JLE1BQU0sRUFDNUJDLGVBQWVKLE9BQU9HLE1BQU07Z0JBRWxDLElBQUlELGlCQUFpQkUsY0FBYztvQkFDakNILGNBQWNGLE9BQU9NLEtBQUssQ0FBQyxTQUFDdEIsT0FBT3VCO3dCQUNqQyxJQUFNdEIsUUFBUWdCLE1BQU0sQ0FBQ00sTUFBTSxFQUNyQnBCLGVBQWUsTUFBS0osVUFBVSxDQUFmLGFBQUE7NEJBQWdCQzs0QkFBT0M7eUJBQTZCLENBQXBELE9BQThCLHFCQUFHQzt3QkFFdEQsSUFBSUMsY0FBYzs0QkFDaEIsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPZTtZQUNUOzs7WUFFQVIsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFQyxhQUFhO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHTixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3BFLElBQU1zQixVQUFVakIsY0FBY2tCLEtBQUssQ0FBQ2pCLGdCQUM5QkMsdUJBQXVCZSxTQUFVLEdBQUc7Z0JBRTFDLE9BQU9mO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCSCxnQkFBZ0IsRUFBRUMsZ0JBQWdCO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHVixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzdFLElBQUlXLDBCQUEwQjtnQkFFOUIsSUFBTWEsMkJBQTJCZixpQkFBaUJnQixXQUFXLElBQ3ZEQywyQkFBMkJoQixpQkFBaUJlLFdBQVcsSUFBSSxHQUFHO2dCQUVwRSxJQUFJRCw2QkFBNkJFLDBCQUEwQjtvQkFDekQsSUFBTUMsNkJBQTZCbEIsaUJBQWlCbUIsYUFBYSxJQUMzREMsNkJBQTZCbkIsaUJBQWlCa0IsYUFBYSxJQUMzRGQsU0FBU2EsNEJBQ1RaLFNBQVNjLDRCQUNUYixjQUFjLElBQUksQ0FBQ0gsV0FBVyxDQUFoQixNQUFBLElBQUksRUFBSjt3QkFBaUJDO3dCQUFRQztxQkFBOEIsQ0FBdkQsT0FBaUMscUJBQUdmO29CQUV4RFcsMEJBQTBCSyxhQUFhLEdBQUc7Z0JBQzVDO2dCQUVBLE9BQU9MO1lBQ1Q7OztXQXRFbUJmIn0=