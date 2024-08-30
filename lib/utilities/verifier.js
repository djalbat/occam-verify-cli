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
    verifyNode: function() {
        return verifyNode;
    },
    verifyNodes: function() {
        return verifyNodes;
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
function verifyNode(nodeQueryMaps, nonTerminalNode) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var nodeVerified = false;
    nodeVerified = nodeQueryMaps.some(function(nodeQueryMap) {
        var nodeQuery = nodeQueryMap.nodeQuery, verifyNode = nodeQueryMap.verifyNode;
        var node = nodeQuery(nonTerminalNode);
        if (node !== null) {
            nodeVerified = verifyNode.apply(void 0, [
                node
            ].concat(_to_consumable_array(remainingArguments)));
            return true;
        }
    });
    return nodeVerified;
}
function verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        remainingArguments[_key - 3] = arguments[_key];
    }
    var nodesVerified = false;
    nodeQueryMaps.some(function(nodeQueryMap) {
        var nodeQueryA = nodeQueryMap.nodeQueryA, nodeQueryB = nodeQueryMap.nodeQueryB, verifyNodes = nodeQueryMap.verifyNodes;
        var nodeA = nodeQueryA(nonTerminalNodeA), nodeB = nodeQueryB(nonTerminalNodeB); ///
        if (nodeA !== null && nodeB !== null) {
            nodesVerified = verifyNodes.apply(void 0, [
                nodeA,
                nodeB
            ].concat(_to_consumable_array(remainingArguments)));
            return true;
        }
    });
    return nodesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBub2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBub2RlVmVyaWZpZWQgPSBub2RlUXVlcnlNYXBzLnNvbWUoKG5vZGVRdWVyeU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCB2ZXJpZnlOb2RlIH0gPSBub2RlUXVlcnlNYXA7XG5cbiAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IG5vZGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBub2RlUXVlcnlNYXBzLnNvbWUoKG5vZGVRdWVyeU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgbm9kZVF1ZXJ5QSwgbm9kZVF1ZXJ5QiwgdmVyaWZ5Tm9kZXMgfSA9IG5vZGVRdWVyeU1hcDtcblxuICAgIGNvbnN0IG5vZGVBID0gbm9kZVF1ZXJ5QShub25UZXJtaW5hbE5vZGVBKSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gbm9kZVF1ZXJ5Qihub25UZXJtaW5hbE5vZGVCKTsgIC8vL1xuXG4gICAgaWYgKChub2RlQSAhPT0gbnVsbCkgJiYgKG5vZGVCICE9PSBudWxsKSkge1xuICAgICAgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVBLCBub2RlQiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlOb2RlIiwidmVyaWZ5Tm9kZXMiLCJub2RlUXVlcnlNYXBzIiwibm9uVGVybWluYWxOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwibm9kZVZlcmlmaWVkIiwic29tZSIsIm5vZGVRdWVyeU1hcCIsIm5vZGVRdWVyeSIsIm5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vZGVzVmVyaWZpZWQiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsIm5vZGVBIiwibm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsVUFBVTtlQUFWQTs7SUFrQkFDLFdBQVc7ZUFBWEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQlQsU0FBU0QsV0FBV0UsYUFBYSxFQUFFQyxlQUFlO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O0lBQzlFLElBQUlDLGVBQWU7SUFFbkJBLGVBQWVILGNBQWNJLElBQUksQ0FBQyxTQUFDQztRQUNqQyxJQUFRQyxZQUEwQkQsYUFBMUJDLFdBQVdSLGFBQWVPLGFBQWZQO1FBRW5CLElBQU1TLE9BQU9ELFVBQVVMO1FBRXZCLElBQUlNLFNBQVMsTUFBTTtZQUNqQkosZUFBZUwsV0FBQUEsTUFBQUEsS0FBQUEsR0FBQUE7Z0JBQVdTO2FBQTRCLENBQXZDVCxPQUFpQixxQkFBR0k7WUFFbkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU0osWUFBWUMsYUFBYSxFQUFFUSxnQkFBZ0IsRUFBRUMsZ0JBQWdCO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdQLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O0lBQ2xHLElBQUlRLGdCQUFnQjtJQUVwQlYsY0FBY0ksSUFBSSxDQUFDLFNBQUNDO1FBQ2xCLElBQVFNLGFBQXdDTixhQUF4Q00sWUFBWUMsYUFBNEJQLGFBQTVCTyxZQUFZYixjQUFnQk0sYUFBaEJOO1FBRWhDLElBQU1jLFFBQVFGLFdBQVdILG1CQUNuQk0sUUFBUUYsV0FBV0gsbUJBQW9CLEdBQUc7UUFFaEQsSUFBSSxBQUFDSSxVQUFVLFFBQVVDLFVBQVUsTUFBTztZQUN4Q0osZ0JBQWdCWCxZQUFBQSxNQUFBQSxLQUFBQSxHQUFBQTtnQkFBWWM7Z0JBQU9DO2FBQTZCLENBQWhEZixPQUEwQixxQkFBR0c7WUFFN0MsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPUTtBQUNUIn0=