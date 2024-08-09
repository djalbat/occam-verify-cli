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
function verifyContainment(argumentNode, containmentNode, metaArgumentNode, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbm1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IENPTlRBSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFBcmd1bWVudC8vdGVybVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUFyZ3VtZW50Ly92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbm1lbnQoYXJndW1lbnROb2RlLCBjb250YWlubWVudE5vZGUsIG1ldGFBcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5tZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWQgPSBjb250YWluZWRGcm9tQ29udGFpbm1lbnROb2RlKGNvbnRhaW5tZW50Tm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXMgPSBtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZXMuc29tZSgobWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhaW5lZCkge1xuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWluZWQpIHtcbiAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb250YWlubWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhQXJndW1lbnRUZXJtTm9kZXMgPSBtZXRhQXJndW1lbnRUZXJtTm9kZXNRdWVyeShtZXRhQXJndW1lbnROb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSA9IG1ldGFBcmd1bWVudFRlcm1Ob2Rlcy5zb21lKChtZXRhQXJndW1lbnRUZXJtTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChtZXRhQXJndW1lbnRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb250YWluZWQpIHtcbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSkge1xuICAgICAgICBjb250YWlubWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5lZCkge1xuICAgICAgaWYgKCF0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSkge1xuICAgICAgICBjb250YWlubWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGFpbm1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gY29udGFpbmVkRnJvbUNvbnRhaW5tZW50Tm9kZShjb250YWlubWVudE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGNvbnRhaW5tZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250YWluZWQgPSAoY29udGVudCA9PT0gQ09OVEFJTkVEKTtcblxuICByZXR1cm4gY29udGFpbmVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbnRhaW5tZW50IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YUFyZ3VtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5IiwiYXJndW1lbnROb2RlIiwiY29udGFpbm1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbnRleHQiLCJjb250YWlubWVudFZlcmlmaWVkIiwiY29udGFpbmVkIiwiY29udGFpbmVkRnJvbUNvbnRhaW5tZW50Tm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwibWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUiLCJzb21lIiwibWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlIiwibWF0Y2giLCJtZXRhQXJndW1lbnRUZXJtTm9kZXMiLCJ0ZXJtTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRUZXJtTm9kZSIsIm1ldGFBcmd1bWVudFRlcm1Ob2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmQiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIkNPTlRBSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OztxQkFURDt5QkFDRztxQkFDWTtBQUV0QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsNkJBQzlCRSw2QkFBNkJDLElBQUFBLGlCQUFVLEVBQUMsd0JBQ3hDQyxpQ0FBaUNELElBQUFBLGlCQUFVLEVBQUM7QUFFbkMsU0FBU0wsa0JBQWtCTyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLE9BQU87SUFDaEcsSUFBSUMsc0JBQXNCO0lBRTFCLElBQU1DLFlBQVlDLDZCQUE2Qkwsa0JBQ3pDTSxXQUFXYixjQUFjTSxlQUN6QlEsZUFBZVosa0JBQWtCSTtJQUV2QyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJUSxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNQyw0QkFBNEJWLCtCQUErQkcsbUJBQzNEUSw4Q0FBOENELDBCQUEwQkUsSUFBSSxDQUFDLFNBQUNDO1lBQzVFLElBQU1GLDhDQUE4Q0YsYUFBYUssS0FBSyxDQUFDRDtZQUV2RSxJQUFJRiw2Q0FBNkM7Z0JBQy9DLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUwsV0FBVztZQUNiLElBQUlLLDZDQUE2QztnQkFDL0NOLHNCQUFzQjtZQUN4QjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsSUFBSSxDQUFDSyw2Q0FBNkM7Z0JBQ2hETixzQkFBc0I7WUFDeEI7UUFDRjtJQUNGLE9BQU8sSUFBSUcsYUFBYSxNQUFNO1FBQzVCLElBQU1PLHdCQUF3QmpCLDJCQUEyQkssbUJBQ25EYSxzQ0FBc0NELHNCQUFzQkgsSUFBSSxDQUFDLFNBQUNLO1lBQ2hFLElBQU1ELHNDQUFzQ1IsU0FBU00sS0FBSyxDQUFDRztZQUUzRCxJQUFJRCxxQ0FBcUM7Z0JBQ3ZDLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSVYsV0FBVztZQUNiLElBQUlVLHFDQUFxQztnQkFDdkNYLHNCQUFzQjtZQUN4QjtRQUNGO1FBRUEsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsSUFBSSxDQUFDVSxxQ0FBcUM7Z0JBQ3hDWCxzQkFBc0I7WUFDeEI7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLDZCQUE2QkwsZUFBZTtJQUNuRCxJQUFNZ0IsYUFBYWhCLGdCQUFnQmlCLGFBQWEsSUFDMUNDLGtCQUFrQkMsSUFBQUEsYUFBTSxFQUFDSCxhQUN6QkksZUFBZUYsaUJBQ2ZHLFVBQVVELGFBQWFFLFVBQVUsSUFDakNsQixZQUFhaUIsWUFBWUUsb0JBQVM7SUFFeEMsT0FBT25CO0FBQ1QifQ==