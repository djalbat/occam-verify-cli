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
var terminalNodesQuery = (0, _query.nodesQuery)("/*/@*");
function isAssertionNegated(assertionNode) {
    var terminalNodes = terminalNodesQuery(assertionNode), assertionNegated = terminalNodes.some(function(terminalNode) {
        var content = terminalNode.getContent();
        if (content === _constants.NOT) {
            return true;
        }
    });
    return assertionNegated;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOT1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovQCpcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2VydGlvbk5lZ2F0ZWQoYXNzZXJ0aW9uTm9kZSkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2Rlc1F1ZXJ5KGFzc2VydGlvbk5vZGUpLFxuICAgICAgICBhc3NlcnRpb25OZWdhdGVkID0gdGVybWluYWxOb2Rlcy5zb21lKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICAgIGlmIChjb250ZW50ID09PSBOT1QpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFzc2VydGlvbk5lZ2F0ZWQ7XG59XG4iXSwibmFtZXMiOlsiaXNBc3NlcnRpb25OZWdhdGVkIiwidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFzc2VydGlvbk5vZGUiLCJ0ZXJtaW5hbE5vZGVzIiwiYXNzZXJ0aW9uTmVnYXRlZCIsInNvbWUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIk5PVCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT2dCQTs7O2VBQUFBOzs7eUJBTEk7cUJBQ087QUFFM0IsSUFBTUMscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRS9CLFNBQVNGLG1CQUFtQkcsYUFBYTtJQUM5QyxJQUFNQyxnQkFBZ0JILG1CQUFtQkUsZ0JBQ25DRSxtQkFBbUJELGNBQWNFLElBQUksQ0FBQyxTQUFDQztRQUNyQyxJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO1FBRXZDLElBQUlELFlBQVlFLGNBQUcsRUFBRTtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVOLE9BQU9MO0FBQ1QifQ==