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
    nodeAsString: function() {
        return nodeAsString;
    },
    nodesAsString: function() {
        return nodesAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node) {
    var string = null;
    if (node !== null) {
        var nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            var terminalNode = node, content = terminalNode.getContent();
            string = content; ///
        } else {
            var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
            childNodes.forEach(function(childNode) {
                var nodeString = nodeAsString(childNode);
                string = string === null ? nodeString : "".concat(string).concat(nodeString);
            });
        }
    }
    return string;
}
function nodesAsString(nodes) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node);
        if (string === null) {
            string = nodeString; ///
        } else {
            string = "".concat(string).concat(_constants.COMMA).concat(nodeString);
        }
        return string;
    }, null);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgc3RyaW5nID0gY29udGVudDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVTdHJpbmcgPSBub2RlQXNTdHJpbmcoY2hpbGROb2RlKTtcblxuICAgICAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgbm9kZVN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9JHtub2RlU3RyaW5nfWA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlcy5yZWR1Y2UoKHN0cmluZywgbm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGVTdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICBpZiAoc3RyaW5nID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlU3RyaW5nOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZyA9IGAke3N0cmluZ30ke0NPTU1BfSR7bm9kZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGUiLCJzdHJpbmciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsIm5vZGVTdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIkNPTU1BIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLFlBQVk7ZUFBWkE7O0lBNEJBQyxhQUFhO2VBQWJBOzs7eUJBOUJNO0FBRWYsU0FBU0QsYUFBYUUsSUFBSSxFQUFFO0lBQ2pDLElBQUlDLFNBQVMsSUFBSTtJQUVqQixJQUFJRCxTQUFTLElBQUksRUFBRTtRQUNqQixJQUFNRSxtQkFBbUJGLEtBQUtHLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLElBQU1FLGVBQWVKLE1BQ2ZLLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNMLFNBQVNJLFNBQVMsR0FBRztRQUN2QixPQUFPO1lBQ0wsSUFBTUUsa0JBQWtCUCxNQUNsQlEsYUFBYUQsZ0JBQWdCRSxhQUFhO1lBRWhERCxXQUFXRSxPQUFPLENBQUMsU0FBQ0MsV0FBYztnQkFDaEMsSUFBTUMsYUFBYWQsYUFBYWE7Z0JBRWhDVixTQUFTLEFBQUNBLFdBQVcsSUFBSSxHQUNkVyxhQUNDLEFBQUMsR0FBV0EsT0FBVFgsUUFBb0IsT0FBWFcsV0FBWTtZQUN0QztRQUNGLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1g7QUFDVDtBQUVPLFNBQVNGLGNBQWNjLEtBQUssRUFBRTtJQUNuQyxJQUFNWixTQUFTWSxNQUFNQyxNQUFNLENBQUMsU0FBQ2IsUUFBUUQsTUFBUztRQUM1QyxJQUFNWSxhQUFhZCxhQUFhRTtRQUVoQyxJQUFJQyxXQUFXLElBQUksRUFBRTtZQUNuQkEsU0FBU1csWUFBYSxHQUFHO1FBQzNCLE9BQU87WUFDTFgsU0FBUyxBQUFDLEdBQVdjLE9BQVRkLFFBQWlCVyxPQUFSRyxnQkFBSyxFQUFjLE9BQVhIO1FBQy9CLENBQUM7UUFFRCxPQUFPWDtJQUNULEdBQUcsSUFBSTtJQUVQLE9BQU9BO0FBQ1QifQ==