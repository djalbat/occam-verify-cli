"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyContainment;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), variableNodeQuery = (0, _query.nodeQuery)("/argument/term/variable!"), metaArgumentTermNodesQuery = (0, _query.nodesQuery)("/metaArgument//term"), metaArgumentVariableNodesQuery = (0, _query.nodesQuery)("/metaArgument//variable");
function verifyContainment(argumentNode, containmentNode, metaArgumentNode, localContext) {
    var containmentVerified = false;
    var contained = containedFromContainmentNode(containmentNode), termNode = termNodeQuery(argumentNode), variableNode = variableNodeQuery(argumentNode);
    if (false) {
    ///
    } else if (variableNode !== null) {
        var metaArgumentVariableNodes = metaArgumentVariableNodesQuery(metaArgumentNode), variableNodeMatchesMetaArgumentVariableNode = metaArgumentVariableNodes.some(function(metaArgumentVariableNode) {
            var variableNodeMatchesMetaArgumentVariableNode = variableNode.match(metaArgumentVariableNode);
            if (variableNodeMatchesMetaArgumentVariableNode) {
                return true;
            }
        });
        if (contained) {
            if (variableNodeMatchesMetaArgumentVariableNode) {
                containmentVerified = true;
            }
        }
        if (!contained) {
            if (!variableNodeMatchesMetaArgumentVariableNode) {
                containmentVerified = true;
            }
        }
    } else if (termNode !== null) {
        var metaArgumentTermNodes = metaArgumentTermNodesQuery(metaArgumentNode), termNodeMatchesMetaArgumentTermNode = metaArgumentTermNodes.some(function(metaArgumentTermNode) {
            var termNodeMatchesMetaArgumentTermNode = termNode.match(metaArgumentTermNode);
            if (termNodeMatchesMetaArgumentTermNode) {
                return true;
            }
        });
        if (contained) {
            if (termNodeMatchesMetaArgumentTermNode) {
                containmentVerified = true;
            }
        }
        if (!contained) {
            if (!termNodeMatchesMetaArgumentTermNode) {
                containmentVerified = true;
            }
        }
    }
    return containmentVerified;
}
function containedFromContainmentNode(containmentNode) {
    var childNodes = containmentNode.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent(), contained = content === _constants.CONTAINED;
    return contained;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbm1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IENPTlRBSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFBcmd1bWVudC8vdGVybVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUFyZ3VtZW50Ly92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbm1lbnQoYXJndW1lbnROb2RlLCBjb250YWlubWVudE5vZGUsIG1ldGFBcmd1bWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgY29udGFpbm1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5lZCA9IGNvbnRhaW5lZEZyb21Db250YWlubWVudE5vZGUoY29udGFpbm1lbnROb2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlcyA9IG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXNRdWVyeShtZXRhQXJndW1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gbWV0YUFyZ3VtZW50VmFyaWFibGVOb2Rlcy5zb21lKChtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2gobWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29udGFpbmVkKSB7XG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb250YWlubWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5lZCkge1xuICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnRhaW5tZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFBcmd1bWVudFRlcm1Ob2RlcyA9IG1ldGFBcmd1bWVudFRlcm1Ob2Rlc1F1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlID0gbWV0YUFyZ3VtZW50VGVybU5vZGVzLnNvbWUoKG1ldGFBcmd1bWVudFRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKG1ldGFBcmd1bWVudFRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhaW5lZCkge1xuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlKSB7XG4gICAgICAgIGNvbnRhaW5tZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29udGFpbmVkKSB7XG4gICAgICBpZiAoIXRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlKSB7XG4gICAgICAgIGNvbnRhaW5tZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250YWlubWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBjb250YWluZWRGcm9tQ29udGFpbm1lbnROb2RlKGNvbnRhaW5tZW50Tm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gY29udGFpbm1lbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRhaW5lZCA9IChjb250ZW50ID09PSBDT05UQUlORUQpO1xuXG4gIHJldHVybiBjb250YWluZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29udGFpbm1lbnQiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRUZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJhcmd1bWVudE5vZGUiLCJjb250YWlubWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwiY29udGFpbm1lbnRWZXJpZmllZCIsImNvbnRhaW5lZCIsImNvbnRhaW5lZEZyb21Db250YWlubWVudE5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsIm1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlIiwic29tZSIsIm1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSIsIm1hdGNoIiwibWV0YUFyZ3VtZW50VGVybU5vZGVzIiwidGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUiLCJtZXRhQXJndW1lbnRUZXJtTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJDT05UQUlORUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7cUJBVEQ7eUJBQ0c7cUJBQ1k7QUFFdEMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLDZCQUM5QkUsNkJBQTZCQyxJQUFBQSxpQkFBVSxFQUFDLHdCQUN4Q0MsaUNBQWlDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5DLFNBQVNMLGtCQUFrQk8sWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxZQUFZO0lBQ3JHLElBQUlDLHNCQUFzQjtJQUUxQixJQUFNQyxZQUFZQyw2QkFBNkJMLGtCQUN6Q00sV0FBV2IsY0FBY00sZUFDekJRLGVBQWVaLGtCQUFrQkk7SUFFdkMsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSVEsaUJBQWlCLE1BQU07UUFDaEMsSUFBTUMsNEJBQTRCViwrQkFBK0JHLG1CQUMzRFEsOENBQThDRCwwQkFBMEJFLElBQUksQ0FBQyxTQUFDQztZQUM1RSxJQUFNRiw4Q0FBOENGLGFBQWFLLEtBQUssQ0FBQ0Q7WUFFdkUsSUFBSUYsNkNBQTZDO2dCQUMvQyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlMLFdBQVc7WUFDYixJQUFJSyw2Q0FBNkM7Z0JBQy9DTixzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUksQ0FBQ0MsV0FBVztZQUNkLElBQUksQ0FBQ0ssNkNBQTZDO2dCQUNoRE4sc0JBQXNCO1lBQ3hCO1FBQ0Y7SUFDRixPQUFPLElBQUlHLGFBQWEsTUFBTTtRQUM1QixJQUFNTyx3QkFBd0JqQiwyQkFBMkJLLG1CQUNuRGEsc0NBQXNDRCxzQkFBc0JILElBQUksQ0FBQyxTQUFDSztZQUNoRSxJQUFNRCxzQ0FBc0NSLFNBQVNNLEtBQUssQ0FBQ0c7WUFFM0QsSUFBSUQscUNBQXFDO2dCQUN2QyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlWLFdBQVc7WUFDYixJQUFJVSxxQ0FBcUM7Z0JBQ3ZDWCxzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUksQ0FBQ0MsV0FBVztZQUNkLElBQUksQ0FBQ1UscUNBQXFDO2dCQUN4Q1gsc0JBQXNCO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRSw2QkFBNkJMLGVBQWU7SUFDbkQsSUFBTWdCLGFBQWFoQixnQkFBZ0JpQixhQUFhLElBQzFDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDbEIsWUFBYWlCLFlBQVlFLG9CQUFTO0lBRXhDLE9BQU9uQjtBQUNUIn0=