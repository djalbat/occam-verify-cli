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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/variable!"), metastatementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/metastatement//variable");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbmVkQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnQvL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSkge1xuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQ7ICAvLy9cblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzLnNvbWUoKG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJjb250YWluZWRBc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwibmVnYXRlZCIsIm1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSIsInNvbWUiLCJtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7c0JBTlc7cUJBQ0c7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUM5QkMsa0NBQWtDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXBDLFNBQVNKLHlCQUF5Qkssc0JBQXNCO0lBQ3JFLElBQUlDLDZCQUE2QjtJQUVqQyxJQUFNQyw0QkFBNEJDLElBQUFBLDBCQUFrQixFQUFDSCx5QkFDL0NJLGVBQWVSLGtCQUFrQkkseUJBQ2pDSyxVQUFVSCwyQkFBNEIsR0FBRztJQUUvQyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJRSxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNRSw2QkFBNkJSLGdDQUFnQ0UseUJBQzdETyw4Q0FBOENELDJCQUEyQkUsSUFBSSxDQUFDLFNBQUNDO1lBQzdFLElBQU1GLDhDQUE4Q0gsYUFBYU0sS0FBSyxDQUFDRDtZQUV2RSxJQUFJRiw2Q0FBNkM7Z0JBQy9DLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSSxDQUFDRixTQUFTO1lBQ1osSUFBSUUsNkNBQTZDO2dCQUMvQ04sNkJBQTZCO1lBQy9CO1FBQ0Y7UUFFQSxJQUFJSSxTQUFTO1lBQ1gsSUFBSSxDQUFDRSw2Q0FBNkM7Z0JBQ2hETiw2QkFBNkI7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9