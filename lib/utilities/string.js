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
            string = "".concat(string).concat(content);
        } else {
            var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
            childNodes.forEach(function(childNode) {
                string = nodeAsString(childNode, string);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7Y29udGVudH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcoY2hpbGROb2RlLCBzdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgaWYgKHN0cmluZyA9PT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZVN0cmluZzsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJDT01NQSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQXdCQUMsYUFBYTtlQUFiQTs7O3lCQTFCTTtBQUVmLFNBQVNELGFBQWFFLElBQUksRUFBRTtJQUNqQyxJQUFJQyxTQUFTLElBQUk7SUFFakIsSUFBSUQsU0FBUyxJQUFJLEVBQUU7UUFDakIsSUFBTUUsbUJBQW1CRixLQUFLRyxjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixJQUFNRSxlQUFlSixNQUNmSyxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDTCxTQUFTLEFBQUMsR0FBV0ksT0FBVEosUUFBaUIsT0FBUkk7UUFDdkIsT0FBTztZQUNMLElBQU1FLGtCQUFrQlAsTUFDbEJRLGFBQWFELGdCQUFnQkUsYUFBYTtZQUVoREQsV0FBV0UsT0FBTyxDQUFDLFNBQUNDLFdBQWM7Z0JBQ2hDVixTQUFTSCxhQUFhYSxXQUFXVjtZQUNuQztRQUNGLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLGNBQWNhLEtBQUssRUFBRTtJQUNuQyxJQUFNWCxTQUFTVyxNQUFNQyxNQUFNLENBQUMsU0FBQ1osUUFBUUQsTUFBUztRQUM1QyxJQUFNYyxhQUFhaEIsYUFBYUU7UUFFaEMsSUFBSUMsV0FBVyxJQUFJLEVBQUU7WUFDbkJBLFNBQVNhLFlBQWEsR0FBRztRQUMzQixPQUFPO1lBQ0xiLFNBQVMsQUFBQyxHQUFXYyxPQUFUZCxRQUFpQmEsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUMvQixDQUFDO1FBRUQsT0FBT2I7SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUIn0=