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
    var indexesA = Object.keys(terminalNodeMapA), indexesB = Object.keys(terminalNodeMapB), terminalNodeMapKeysMatch = (0, _array.match)(indexesA, indexesB, function(indexA, indexB) {
        var matches = indexA === indexB;
        if (matches) {
            return true;
        }
    });
    if (terminalNodeMapKeysMatch) {
        var terminalNodesA = Object.values(terminalNodeMapA), terminalNodesB = Object.values(terminalNodeMapB), terminalNodeMapValuesMatch = (0, _array.match)(terminalNodesA, terminalNodesB, function(terminalNodeA, terminalNodeB) {
            var matches = terminalNodeA.match(terminalNodeB);
            if (matches) {
                return true;
            }
        });
        terminalNodeMapsEqual = terminalNodeMapValuesMatch; ///
    }
    return terminalNodeMapsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobm9kZXMpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlTWFwID0ge307XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgICB0ZXJtaW5hbE5vZGVNYXBbaW5kZXhdID0gdGVybWluYWxOb2RlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCh0ZXJtaW5hbE5vZGVNYXBBLCB0ZXJtaW5hbE5vZGVNYXBCKSB7XG4gIGxldCB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBmYWxzZTtcblxuICBjb25zdCBpbmRleGVzQSA9IE9iamVjdC5rZXlzKHRlcm1pbmFsTm9kZU1hcEEpLCAvLy9cbiAgICAgICAgaW5kZXhlc0IgPSBPYmplY3Qua2V5cyh0ZXJtaW5hbE5vZGVNYXBCKSwgLy8vXG4gICAgICAgIHRlcm1pbmFsTm9kZU1hcEtleXNNYXRjaCA9IG1hdGNoKGluZGV4ZXNBLCBpbmRleGVzQiwgKGluZGV4QSwgaW5kZXhCKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IChpbmRleEEgPT09IGluZGV4Qik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAodGVybWluYWxOb2RlTWFwS2V5c01hdGNoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2Rlc0EgPSBPYmplY3QudmFsdWVzKHRlcm1pbmFsTm9kZU1hcEEpLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzQiA9IE9iamVjdC52YWx1ZXModGVybWluYWxOb2RlTWFwQiksIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcFZhbHVlc01hdGNoID0gbWF0Y2godGVybWluYWxOb2Rlc0EsIHRlcm1pbmFsTm9kZXNCLCAodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gdGVybWluYWxOb2RlTWFwVmFsdWVzTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hcHNFcXVhbDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJub2RlcyIsInRlcm1pbmFsTm9kZU1hcCIsImZvckVhY2giLCJub2RlIiwiaW5kZXgiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVNYXBBIiwidGVybWluYWxOb2RlTWFwQiIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImluZGV4ZXNBIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4ZXNCIiwidGVybWluYWxOb2RlTWFwS2V5c01hdGNoIiwibWF0Y2giLCJpbmRleEEiLCJpbmRleEIiLCJtYXRjaGVzIiwidGVybWluYWxOb2Rlc0EiLCJ2YWx1ZXMiLCJ0ZXJtaW5hbE5vZGVzQiIsInRlcm1pbmFsTm9kZU1hcFZhbHVlc01hdGNoIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9CZ0JBLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyx3QkFBd0I7ZUFBeEJBOzs7cUJBRk07QUFFZixTQUFTQSx5QkFBeUJDLEtBQUs7SUFDNUMsSUFBTUMsa0JBQWtCLENBQUM7SUFFekJELE1BQU1FLE9BQU8sQ0FBQyxTQUFDQyxNQUFNQztRQUNuQixJQUFNQyxtQkFBbUJGLEtBQUtHLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVKLE1BQU8sRUFBRTtZQUU5QkYsZUFBZSxDQUFDRyxNQUFNLEdBQUdHO1FBQzNCO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU0gseUJBQXlCVSxnQkFBZ0IsRUFBRUMsZ0JBQWdCO0lBQ3pFLElBQUlDLHdCQUF3QjtJQUU1QixJQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNMLG1CQUN2Qk0sV0FBV0YsT0FBT0MsSUFBSSxDQUFDSixtQkFDdkJNLDJCQUEyQkMsSUFBQUEsWUFBSyxFQUFDTCxVQUFVRyxVQUFVLFNBQUNHLFFBQVFDO1FBQzVELElBQU1DLFVBQVdGLFdBQVdDO1FBRTVCLElBQUlDLFNBQVM7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVOLElBQUlKLDBCQUEwQjtRQUM1QixJQUFNSyxpQkFBaUJSLE9BQU9TLE1BQU0sQ0FBQ2IsbUJBQy9CYyxpQkFBaUJWLE9BQU9TLE1BQU0sQ0FBQ1osbUJBQy9CYyw2QkFBNkJQLElBQUFBLFlBQUssRUFBQ0ksZ0JBQWdCRSxnQkFBZ0IsU0FBQ0UsZUFBZUM7WUFDakYsSUFBTU4sVUFBVUssY0FBY1IsS0FBSyxDQUFDUztZQUVwQyxJQUFJTixTQUFTO2dCQUNYLE9BQU87WUFDVDtRQUNGO1FBRU5ULHdCQUF3QmEsNEJBQTRCLEdBQUc7SUFDekQ7SUFFQSxPQUFPYjtBQUNUIn0=