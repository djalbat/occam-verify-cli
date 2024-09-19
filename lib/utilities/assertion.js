"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAssertionNegated", {
    enumerable: true,
    get: function() {
        return isAssertionNegated;
    }
});
var _constants = require("../constants");
var _query = require("../utilities/query");
var operatorTerminalNodesQuery = (0, _query.nodesQuery)("/*/@operator");
function isAssertionNegated(assertionNode) {
    var operatorTerminalNodes = operatorTerminalNodesQuery(assertionNode), assertionNegated = operatorTerminalNodes.some(function(operatorTerminalNode) {
        var content = operatorTerminalNode.getContent();
        if (content === _constants.NOT) {
            return true;
        }
    });
    return assertionNegated;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOT1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBvcGVyYXRvclRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9Ab3BlcmF0b3JcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2VydGlvbk5lZ2F0ZWQoYXNzZXJ0aW9uTm9kZSkge1xuICBjb25zdCBvcGVyYXRvclRlcm1pbmFsTm9kZXMgPSBvcGVyYXRvclRlcm1pbmFsTm9kZXNRdWVyeShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgYXNzZXJ0aW9uTmVnYXRlZCA9IG9wZXJhdG9yVGVybWluYWxOb2Rlcy5zb21lKChvcGVyYXRvclRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBvcGVyYXRvclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgICBpZiAoY29udGVudCA9PT0gTk9UKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3NlcnRpb25OZWdhdGVkO1xufVxuIl0sIm5hbWVzIjpbImlzQXNzZXJ0aW9uTmVnYXRlZCIsIm9wZXJhdG9yVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFzc2VydGlvbk5vZGUiLCJvcGVyYXRvclRlcm1pbmFsTm9kZXMiLCJhc3NlcnRpb25OZWdhdGVkIiwic29tZSIsIm9wZXJhdG9yVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJOT1QiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9nQkE7OztlQUFBQTs7O3lCQUxJO3FCQUNPO0FBRTNCLElBQU1DLDZCQUE2QkMsSUFBQUEsaUJBQVUsRUFBQztBQUV2QyxTQUFTRixtQkFBbUJHLGFBQWE7SUFDOUMsSUFBTUMsd0JBQXdCSCwyQkFBMkJFLGdCQUNuREUsbUJBQW1CRCxzQkFBc0JFLElBQUksQ0FBQyxTQUFDQztRQUM3QyxJQUFNQyxVQUFVRCxxQkFBcUJFLFVBQVU7UUFFL0MsSUFBSUQsWUFBWUUsY0FBRyxFQUFFO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0w7QUFDVCJ9