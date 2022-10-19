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
    },
    labelsAsString: function() {
        return labelsAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node) {
    var string = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _constants.EMPTY_STRING;
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
function labelsAsString(labels) {
    var labelsString = labels.join(_constants.COMMA);
    return labelsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDT01NQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHN0cmluZyA9IEVNUFRZX1NUUklORykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSxcbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcoY2hpbGROb2RlLCBzdHJpbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgaWYgKHN0cmluZyA9PT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZVN0cmluZzsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtDT01NQX0ke25vZGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzQXNTdHJpbmcobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5qb2luKENPTU1BKTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJsYWJlbHNBc1N0cmluZyIsIm5vZGUiLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkNPTU1BIiwibGFiZWxzIiwibGFiZWxzU3RyaW5nIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxZQUFZO2VBQVpBOztJQW9CQUMsYUFBYTtlQUFiQTs7SUFnQkFDLGNBQWM7ZUFBZEE7Ozt5QkF0Q29CO0FBRTdCLFNBQVNGLGFBQWFHLElBQUksRUFBeUI7UUFBdkJDLFNBQUFBLGlFQUFTQyx1QkFBWTtJQUN0RCxJQUFNQyxtQkFBbUJILEtBQUtJLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWVMLE1BQ2ZNLFVBQVVELGFBQWFFLFVBQVU7UUFFdkNOLFNBQVMsQUFBQyxHQUFXSyxPQUFUTCxRQUFpQixPQUFSSztJQUN2QixPQUFPO1FBQ0wsSUFBTUUsa0JBQWtCUixNQUNsQlMsYUFBYUQsZ0JBQWdCRSxhQUFhO1FBRWhERCxXQUFXRSxPQUFPLENBQUMsU0FBQ0MsV0FBYztZQUNoQ1gsU0FBU0osYUFBYWUsV0FBV1g7UUFDbkM7SUFDRixDQUFDO0lBRUQsT0FBT0E7QUFDVDtBQUVPLFNBQVNILGNBQWNlLEtBQUssRUFBRTtJQUNuQyxJQUFNWixTQUFTWSxNQUFNQyxNQUFNLENBQUMsU0FBQ2IsUUFBUUQsTUFBUztRQUM1QyxJQUFNZSxhQUFhbEIsYUFBYUc7UUFFaEMsSUFBSUMsV0FBVyxJQUFJLEVBQUU7WUFDbkJBLFNBQVNjLFlBQWEsR0FBRztRQUMzQixPQUFPO1lBQ0xkLFNBQVMsQUFBQyxHQUFXZSxPQUFUZixRQUFpQmMsT0FBUkMsZ0JBQUssRUFBYyxPQUFYRDtRQUMvQixDQUFDO1FBRUQsT0FBT2Q7SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUO0FBRU8sU0FBU0YsZUFBZWtCLE1BQU0sRUFBRTtJQUNyQyxJQUFNQyxlQUFlRCxPQUFPRSxJQUFJLENBQUNILGdCQUFLO0lBRXRDLE9BQU9FO0FBQ1QifQ==