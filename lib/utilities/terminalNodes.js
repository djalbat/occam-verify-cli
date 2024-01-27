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
        var terminalNodesA = Object.values(terminalNodeMapA), terminalNodesB = Object.values(terminalNodeMapB), terminalNodeMapValuesEqual = (0, _array.areArraysEqual)(terminalNodesA, terminalNodesB, function(terminalNodeA, terminalNodeB) {
            var matches = terminalNodeA.match(terminalNodeB);
            if (matches) {
                return true;
            }
        });
        terminalNodeMapsEqual = terminalNodeMapValuesEqual; ///
    }
    return terminalNodeMapsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybWluYWxOb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJlQXJyYXlzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobm9kZXMpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlTWFwID0ge307XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgICB0ZXJtaW5hbE5vZGVNYXBbaW5kZXhdID0gdGVybWluYWxOb2RlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZU1hcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCh0ZXJtaW5hbE5vZGVNYXBBLCB0ZXJtaW5hbE5vZGVNYXBCKSB7XG4gIGxldCB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBmYWxzZTtcblxuICBjb25zdCBpbmRleGVzQSA9IE9iamVjdC5rZXlzKHRlcm1pbmFsTm9kZU1hcEEpLCAvLy9cbiAgICAgICAgaW5kZXhlc0IgPSBPYmplY3Qua2V5cyh0ZXJtaW5hbE5vZGVNYXBCKSwgLy8vXG4gICAgICAgIHRlcm1pbmFsTm9kZU1hcEtleXNFcXVhbCA9IGFyZUFycmF5c0VxdWFsKGluZGV4ZXNBLCBpbmRleGVzQik7XG5cbiAgaWYgKHRlcm1pbmFsTm9kZU1hcEtleXNFcXVhbCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXNBID0gT2JqZWN0LnZhbHVlcyh0ZXJtaW5hbE5vZGVNYXBBKSwgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2Rlc0IgPSBPYmplY3QudmFsdWVzKHRlcm1pbmFsTm9kZU1hcEIpLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBWYWx1ZXNFcXVhbCA9IGFyZUFycmF5c0VxdWFsKHRlcm1pbmFsTm9kZXNBLCB0ZXJtaW5hbE5vZGVzQiwgKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IHRlcm1pbmFsTm9kZU1hcFZhbHVlc0VxdWFsOyAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVNYXBzRXF1YWw7XG59XG4iXSwibmFtZXMiOlsiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwibm9kZXMiLCJ0ZXJtaW5hbE5vZGVNYXAiLCJmb3JFYWNoIiwibm9kZSIsImluZGV4Iiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlTWFwQSIsInRlcm1pbmFsTm9kZU1hcEIiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJpbmRleGVzQSIsIk9iamVjdCIsImtleXMiLCJpbmRleGVzQiIsInRlcm1pbmFsTm9kZU1hcEtleXNFcXVhbCIsImFyZUFycmF5c0VxdWFsIiwidGVybWluYWxOb2Rlc0EiLCJ2YWx1ZXMiLCJ0ZXJtaW5hbE5vZGVzQiIsInRlcm1pbmFsTm9kZU1hcFZhbHVlc0VxdWFsIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJtYXRjaGVzIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9CZ0JBLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyx3QkFBd0I7ZUFBeEJBOzs7cUJBRmU7QUFFeEIsU0FBU0EseUJBQXlCQyxLQUFLO0lBQzVDLElBQU1DLGtCQUFrQixDQUFDO0lBRXpCRCxNQUFNRSxPQUFPLENBQUMsU0FBQ0MsTUFBTUM7UUFDbkIsSUFBTUMsbUJBQW1CRixLQUFLRyxjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixJQUFNRSxlQUFlSixNQUFPLEVBQUU7WUFFOUJGLGVBQWUsQ0FBQ0csTUFBTSxHQUFHRztRQUMzQjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNILHlCQUF5QlUsZ0JBQWdCLEVBQUVDLGdCQUFnQjtJQUN6RSxJQUFJQyx3QkFBd0I7SUFFNUIsSUFBTUMsV0FBV0MsT0FBT0MsSUFBSSxDQUFDTCxtQkFDdkJNLFdBQVdGLE9BQU9DLElBQUksQ0FBQ0osbUJBQ3ZCTSwyQkFBMkJDLElBQUFBLHFCQUFjLEVBQUNMLFVBQVVHO0lBRTFELElBQUlDLDBCQUEwQjtRQUM1QixJQUFNRSxpQkFBaUJMLE9BQU9NLE1BQU0sQ0FBQ1YsbUJBQy9CVyxpQkFBaUJQLE9BQU9NLE1BQU0sQ0FBQ1QsbUJBQy9CVyw2QkFBNkJKLElBQUFBLHFCQUFjLEVBQUNDLGdCQUFnQkUsZ0JBQWdCLFNBQUNFLGVBQWVDO1lBQzFGLElBQU1DLFVBQVVGLGNBQWNHLEtBQUssQ0FBQ0Y7WUFFcEMsSUFBSUMsU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVOYix3QkFBd0JVLDRCQUE0QixHQUFHO0lBQ3pEO0lBRUEsT0FBT1Y7QUFDVCJ9