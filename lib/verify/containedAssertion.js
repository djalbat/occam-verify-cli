"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyContainedAssertion;
    }
});
var _verify = require("../utilities/verify");
var _query = require("../utilities/query");
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metastatementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//variable");
function verifyContainedAssertion(containedAssertionNode) {
    var containedAssertionVerified = false;
    var containedAssertionNegated = (0, _verify.isAssertionNegated)(containedAssertionNode), variableNode = variableNodeQuery(containedAssertionNode), negated = containedAssertionNegated; ///
    if (false) {
    ///
    } else if (variableNode !== null) {
        var metastatementVariableNodes = metastatementVariableNodesQuery(containedAssertionNode), variableNodeMatchesMetaArgumentVariableNode = metastatementVariableNodes.some(function(metastatementVariableNode) {
            var variableNodeMatchesMetaArgumentVariableNode = variableNode.match(metastatementVariableNode);
            if (variableNodeMatchesMetaArgumentVariableNode) {
                return true;
            }
        });
        if (!negated) {
            if (variableNodeMatchesMetaArgumentVariableNode) {
                containedAssertionVerified = true;
            }
        }
        if (negated) {
            if (!variableNodeMatchesMetaArgumentVariableNode) {
                containedAssertionVerified = true;
            }
        }
    }
    return containedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbmVkQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Ly92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpIHtcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWQiLCJtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUiLCJzb21lIiwibWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O3NCQU5XO3FCQUNHO0FBRXRDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJDLGtDQUFrQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVwQyxTQUFTSix5QkFBeUJLLHNCQUFzQjtJQUNyRSxJQUFJQyw2QkFBNkI7SUFFakMsSUFBTUMsNEJBQTRCQyxJQUFBQSwwQkFBa0IsRUFBQ0gseUJBQy9DSSxlQUFlUixrQkFBa0JJLHlCQUNqQ0ssVUFBVUgsMkJBQTRCLEdBQUc7SUFFL0MsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUUsaUJBQWlCLE1BQU07UUFDaEMsSUFBTUUsNkJBQTZCUixnQ0FBZ0NFLHlCQUM3RE8sOENBQThDRCwyQkFBMkJFLElBQUksQ0FBQyxTQUFDQztZQUM3RSxJQUFNRiw4Q0FBOENILGFBQWFNLEtBQUssQ0FBQ0Q7WUFFdkUsSUFBSUYsNkNBQTZDO2dCQUMvQyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUksQ0FBQ0YsU0FBUztZQUNaLElBQUlFLDZDQUE2QztnQkFDL0NOLDZCQUE2QjtZQUMvQjtRQUNGO1FBRUEsSUFBSUksU0FBUztZQUNYLElBQUksQ0FBQ0UsNkNBQTZDO2dCQUNoRE4sNkJBQTZCO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==