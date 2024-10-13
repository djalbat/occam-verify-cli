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
var _necessary = require("necessary");
var match = _necessary.arrayUtilities.match;
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
    var indexesA = Object.keys(terminalNodeMapA), indexesB = Object.keys(terminalNodeMapB), terminalNodeMapKeysMatch = match(indexesA, indexesB, function(indexA, indexB) {
        var matches = indexA === indexB;
        if (matches) {
            return true;
        }
    });
    if (terminalNodeMapKeysMatch) {
        var terminalNodesA = Object.values(terminalNodeMapA), terminalNodesB = Object.values(terminalNodeMapB), terminalNodeMapValuesMatch = match(terminalNodesA, terminalNodesB, function(terminalNodeA, terminalNodeB) {
            var matches = terminalNodeA.match(terminalNodeB);
            if (matches) {
                return true;
            }
        });
        terminalNodeMapsEqual = terminalNodeMapValuesMatch; ///
    }
    return terminalNodeMapsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKG5vZGVzKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZU1hcCA9IHt9O1xuXG4gIG5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy9cblxuICAgICAgdGVybWluYWxOb2RlTWFwW2luZGV4XSA9IHRlcm1pbmFsTm9kZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVNYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwodGVybWluYWxOb2RlTWFwQSwgdGVybWluYWxOb2RlTWFwQikge1xuICBsZXQgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gZmFsc2U7XG5cbiAgY29uc3QgaW5kZXhlc0EgPSBPYmplY3Qua2V5cyh0ZXJtaW5hbE5vZGVNYXBBKSwgLy8vXG4gICAgICAgIGluZGV4ZXNCID0gT2JqZWN0LmtleXModGVybWluYWxOb2RlTWFwQiksIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVNYXBLZXlzTWF0Y2ggPSBtYXRjaChpbmRleGVzQSwgaW5kZXhlc0IsIChpbmRleEEsIGluZGV4QikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSAoaW5kZXhBID09PSBpbmRleEIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHRlcm1pbmFsTm9kZU1hcEtleXNNYXRjaCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXNBID0gT2JqZWN0LnZhbHVlcyh0ZXJtaW5hbE5vZGVNYXBBKSwgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2Rlc0IgPSBPYmplY3QudmFsdWVzKHRlcm1pbmFsTm9kZU1hcEIpLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBWYWx1ZXNNYXRjaCA9IG1hdGNoKHRlcm1pbmFsTm9kZXNBLCB0ZXJtaW5hbE5vZGVzQiwgKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IHRlcm1pbmFsTm9kZU1hcFZhbHVlc01hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVNYXBzRXF1YWw7XG59XG4iXSwibmFtZXMiOlsiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGVzIiwidGVybWluYWxOb2RlTWFwIiwiZm9yRWFjaCIsIm5vZGUiLCJpbmRleCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZU1hcEEiLCJ0ZXJtaW5hbE5vZGVNYXBCIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiaW5kZXhlc0EiLCJPYmplY3QiLCJrZXlzIiwiaW5kZXhlc0IiLCJ0ZXJtaW5hbE5vZGVNYXBLZXlzTWF0Y2giLCJpbmRleEEiLCJpbmRleEIiLCJtYXRjaGVzIiwidGVybWluYWxOb2Rlc0EiLCJ2YWx1ZXMiLCJ0ZXJtaW5hbE5vZGVzQiIsInRlcm1pbmFsTm9kZU1hcFZhbHVlc01hdGNoIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNCZ0JBLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyx3QkFBd0I7ZUFBeEJBOzs7eUJBSmU7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRCx5QkFBeUJHLEtBQUs7SUFDNUMsSUFBTUMsa0JBQWtCLENBQUM7SUFFekJELE1BQU1FLE9BQU8sQ0FBQyxTQUFDQyxNQUFNQztRQUNuQixJQUFNQyxtQkFBbUJGLEtBQUtHLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVKLE1BQU8sRUFBRTtZQUU5QkYsZUFBZSxDQUFDRyxNQUFNLEdBQUdHO1FBQzNCO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU0wseUJBQXlCWSxnQkFBZ0IsRUFBRUMsZ0JBQWdCO0lBQ3pFLElBQUlDLHdCQUF3QjtJQUU1QixJQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNMLG1CQUN2Qk0sV0FBV0YsT0FBT0MsSUFBSSxDQUFDSixtQkFDdkJNLDJCQUEyQmpCLE1BQU1hLFVBQVVHLFVBQVUsU0FBQ0UsUUFBUUM7UUFDNUQsSUFBTUMsVUFBV0YsV0FBV0M7UUFFNUIsSUFBSUMsU0FBUztZQUNYLE9BQU87UUFDVDtJQUNGO0lBRU4sSUFBSUgsMEJBQTBCO1FBQzVCLElBQU1JLGlCQUFpQlAsT0FBT1EsTUFBTSxDQUFDWixtQkFDL0JhLGlCQUFpQlQsT0FBT1EsTUFBTSxDQUFDWCxtQkFDL0JhLDZCQUE2QnhCLE1BQU1xQixnQkFBZ0JFLGdCQUFnQixTQUFDRSxlQUFlQztZQUNqRixJQUFNTixVQUFVSyxjQUFjekIsS0FBSyxDQUFDMEI7WUFFcEMsSUFBSU4sU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVOUix3QkFBd0JZLDRCQUE0QixHQUFHO0lBQ3pEO0lBRUEsT0FBT1o7QUFDVCJ9