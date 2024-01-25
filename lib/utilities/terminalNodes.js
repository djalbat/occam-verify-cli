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
    areTerminalNodeMapsEqual: function() {
        return areTerminalNodeMapsEqual;
    },
    terminalNodeMapFromNodes: function() {
        return terminalNodeMapFromNodes;
    }
});
var _array = require("../utilities/array");
function terminalNodeMapFromNodes(nodes) {
    var terminalNodeMap = {};
    nodes.forEach(function(node, index) {
        var nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            var terminalNode = node; //
            terminalNodeMap[index] = terminalNode;
        }
    });
    return terminalNodeMap;
}
function areTerminalNodeMapsEqual(terminalNodeMapA, terminalNodeMapB) {
    var terminalNodeMapsEqual = false;
    var indexesA = Object.keys(terminalNodeMapA), indexesB = Object.keys(terminalNodeMapB), terminalNodeMapKeysEqual = (0, _array.areArraysEqual)(indexesA, indexesB);
    if (terminalNodeMapKeysEqual) {
        var terminalNodesA = Object.keys(terminalNodeMapA), terminalNodesB = Object.keys(terminalNodeMapB), terminalNodeMapValuesEqual = (0, _array.areArraysEqual)(terminalNodesA, terminalNodesB, function(terminalNodeA, terminalNodeB) {
            var matches = terminalNodeA.match(terminalNodeB);
            if (matches) {
                return true;
            }
        });
        terminalNodeMapsEqual = terminalNodeMapValuesEqual; ///
    }
    return terminalNodeMapsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybWluYWxOb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJlQXJyYXlzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobm9kZXMpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlTWFwID0ge307XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgICB0ZXJtaW5hbE5vZGVNYXBbaW5kZXhdID0gdGVybWluYWxOb2RlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCh0ZXJtaW5hbE5vZGVNYXBBLCB0ZXJtaW5hbE5vZGVNYXBCKSB7XG4gIGxldCB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBmYWxzZTtcblxuICBjb25zdCBpbmRleGVzQSA9IE9iamVjdC5rZXlzKHRlcm1pbmFsTm9kZU1hcEEpLCAvLy9cbiAgICAgICAgaW5kZXhlc0IgPSBPYmplY3Qua2V5cyh0ZXJtaW5hbE5vZGVNYXBCKSwgLy8vXG4gICAgICAgIHRlcm1pbmFsTm9kZU1hcEtleXNFcXVhbCA9IGFyZUFycmF5c0VxdWFsKGluZGV4ZXNBLCBpbmRleGVzQik7XG5cbiAgaWYgKHRlcm1pbmFsTm9kZU1hcEtleXNFcXVhbCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXNBID0gT2JqZWN0LmtleXModGVybWluYWxOb2RlTWFwQSksIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXNCID0gT2JqZWN0LmtleXModGVybWluYWxOb2RlTWFwQiksIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcFZhbHVlc0VxdWFsID0gYXJlQXJyYXlzRXF1YWwodGVybWluYWxOb2Rlc0EsIHRlcm1pbmFsTm9kZXNCLCAodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gdGVybWluYWxOb2RlTWFwVmFsdWVzRXF1YWw7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hcHNFcXVhbDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJub2RlcyIsInRlcm1pbmFsTm9kZU1hcCIsImZvckVhY2giLCJub2RlIiwiaW5kZXgiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwQiIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImluZGV4ZXNBIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4ZXNCIiwidGVybWluYWxOb2RlTWFwS2V5c0VxdWFsIiwiYXJlQXJyYXlzRXF1YWwiLCJ0ZXJtaW5hbE5vZGVzQSIsInRlcm1pbmFsTm9kZXNCIiwidGVybWluYWxOb2RlTWFwVmFsdWVzRXF1YWwiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsIm1hdGNoZXMiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0JnQkEsd0JBQXdCO2VBQXhCQTs7SUFoQkFDLHdCQUF3QjtlQUF4QkE7OztxQkFGZTtBQUV4QixTQUFTQSx5QkFBeUJDLEtBQUs7SUFDNUMsSUFBTUMsa0JBQWtCLENBQUM7SUFFekJELE1BQU1FLE9BQU8sQ0FBQyxTQUFDQyxNQUFNQztRQUNuQixJQUFNQyxtQkFBbUJGLEtBQUtHLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVKLE1BQU8sRUFBRTtZQUU5QkYsZUFBZSxDQUFDRyxNQUFNLEdBQUdHO1FBQzNCO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU0gseUJBQXlCVSxnQkFBZ0IsRUFBRUMsZ0JBQWdCO0lBQ3pFLElBQUlDLHdCQUF3QjtJQUU1QixJQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNMLG1CQUN2Qk0sV0FBV0YsT0FBT0MsSUFBSSxDQUFDSixtQkFDdkJNLDJCQUEyQkMsSUFBQUEscUJBQWMsRUFBQ0wsVUFBVUc7SUFFMUQsSUFBSUMsMEJBQTBCO1FBQzVCLElBQU1FLGlCQUFpQkwsT0FBT0MsSUFBSSxDQUFDTCxtQkFDN0JVLGlCQUFpQk4sT0FBT0MsSUFBSSxDQUFDSixtQkFDN0JVLDZCQUE2QkgsSUFBQUEscUJBQWMsRUFBQ0MsZ0JBQWdCQyxnQkFBZ0IsU0FBQ0UsZUFBZUM7WUFDMUYsSUFBTUMsVUFBVUYsY0FBY0csS0FBSyxDQUFDRjtZQUVwQyxJQUFJQyxTQUFTO2dCQUNYLE9BQU87WUFDVDtRQUNGO1FBRU5aLHdCQUF3QlMsNEJBQTRCLEdBQUc7SUFDekQ7SUFFQSxPQUFPVDtBQUNUIn0=