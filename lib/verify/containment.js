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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metaArgumentTermNodesQuery = (0, _query.nodesQuery)("/metaArgument//term"), metastatementVariableNodesQuery = (0, _query.nodesQuery)("/metastatement//variable");
function verifyContainment(termNode, containmentNode, metastatementNode, localContext) {
    var containmentVerified = false;
    var contained = containedFromContainmentNode(containmentNode), variableNode = variableNodeQuery(termNode);
    if (false) {
    ///
    } else if (variableNode !== null) {
        var metaArgumentVariableNodes = metastatementVariableNodesQuery(metastatementNode), variableNodeMatchesMetaArgumentVariableNode = metaArgumentVariableNodes.some(function(metaArgumentVariableNode) {
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
        var metaArgumentTermNodes = metaArgumentTermNodesQuery(metastatementNode), termNodeMatchesMetaArgumentTermNode = metaArgumentTermNodes.some(function(metaArgumentTermNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbm1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IENPTlRBSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhQXJndW1lbnRUZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUFyZ3VtZW50Ly90ZXJtXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YXN0YXRlbWVudC8vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnRhaW5tZW50KHRlcm1Ob2RlLCBjb250YWlubWVudE5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5tZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWQgPSBjb250YWluZWRGcm9tQ29udGFpbm1lbnROb2RlKGNvbnRhaW5tZW50Tm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzID0gbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXMuc29tZSgobWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhaW5lZCkge1xuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWluZWQpIHtcbiAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb250YWlubWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhQXJndW1lbnRUZXJtTm9kZXMgPSBtZXRhQXJndW1lbnRUZXJtTm9kZXNRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUgPSBtZXRhQXJndW1lbnRUZXJtTm9kZXMuc29tZSgobWV0YUFyZ3VtZW50VGVybU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlID0gdGVybU5vZGUubWF0Y2gobWV0YUFyZ3VtZW50VGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29udGFpbmVkKSB7XG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWluZWQpIHtcbiAgICAgIGlmICghdGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5tZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5lZEZyb21Db250YWlubWVudE5vZGUoY29udGFpbm1lbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjb250YWlubWVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGFpbmVkID0gKGNvbnRlbnQgPT09IENPTlRBSU5FRCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb250YWlubWVudCIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsInRlcm1Ob2RlIiwiY29udGFpbm1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJjb250YWlubWVudFZlcmlmaWVkIiwiY29udGFpbmVkIiwiY29udGFpbmVkRnJvbUNvbnRhaW5tZW50Tm9kZSIsInZhcmlhYmxlTm9kZSIsIm1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlIiwic29tZSIsIm1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSIsIm1hdGNoIiwibWV0YUFyZ3VtZW50VGVybU5vZGVzIiwidGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUiLCJtZXRhQXJndW1lbnRUZXJtTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJDT05UQUlORUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7cUJBUkQ7eUJBQ0c7cUJBQ1k7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkMsNkJBQTZCQyxJQUFBQSxpQkFBVSxFQUFDLHdCQUN4Q0Msa0NBQWtDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRXBDLFNBQVNKLGtCQUFrQk0sUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGlCQUFpQixFQUFFQyxZQUFZO0lBQ2xHLElBQUlDLHNCQUFzQjtJQUUxQixJQUFNQyxZQUFZQyw2QkFBNkJMLGtCQUN6Q00sZUFBZVosa0JBQWtCSztJQUV2QyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJTyxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNQyw0QkFBNEJULGdDQUFnQ0csb0JBQzVETyw4Q0FBOENELDBCQUEwQkUsSUFBSSxDQUFDLFNBQUNDO1lBQzVFLElBQU1GLDhDQUE4Q0YsYUFBYUssS0FBSyxDQUFDRDtZQUV2RSxJQUFJRiw2Q0FBNkM7Z0JBQy9DLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUosV0FBVztZQUNiLElBQUlJLDZDQUE2QztnQkFDL0NMLHNCQUFzQjtZQUN4QjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsSUFBSSxDQUFDSSw2Q0FBNkM7Z0JBQ2hETCxzQkFBc0I7WUFDeEI7UUFDRjtJQUNGLE9BQU8sSUFBSUosYUFBYSxNQUFNO1FBQzVCLElBQU1hLHdCQUF3QmhCLDJCQUEyQkssb0JBQ25EWSxzQ0FBc0NELHNCQUFzQkgsSUFBSSxDQUFDLFNBQUNLO1lBQ2hFLElBQU1ELHNDQUFzQ2QsU0FBU1ksS0FBSyxDQUFDRztZQUUzRCxJQUFJRCxxQ0FBcUM7Z0JBQ3ZDLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSVQsV0FBVztZQUNiLElBQUlTLHFDQUFxQztnQkFDdkNWLHNCQUFzQjtZQUN4QjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsSUFBSSxDQUFDUyxxQ0FBcUM7Z0JBQ3hDVixzQkFBc0I7WUFDeEI7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLDZCQUE2QkwsZUFBZTtJQUNuRCxJQUFNZSxhQUFhZixnQkFBZ0JnQixhQUFhLElBQzFDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDakIsWUFBYWdCLFlBQVlFLG9CQUFTO0lBRXhDLE9BQU9sQjtBQUNUIn0=