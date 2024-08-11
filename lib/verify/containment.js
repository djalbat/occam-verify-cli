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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metaArgumentTermNodesQuery = (0, _query.nodesQuery)("/metaArgument//term"), metaArgumentVariableNodesQuery = (0, _query.nodesQuery)("/metaArgument//variable");
function verifyContainment(termNode, containmentNode, metaArgumentNode, localContext) {
    var containmentVerified = false;
    var contained = containedFromContainmentNode(containmentNode), variableNode = variableNodeQuery(termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbm1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IENPTlRBSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhQXJndW1lbnRUZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YUFyZ3VtZW50Ly90ZXJtXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhQXJndW1lbnQvL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlDb250YWlubWVudCh0ZXJtTm9kZSwgY29udGFpbm1lbnROb2RlLCBtZXRhQXJndW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5tZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWQgPSBjb250YWluZWRGcm9tQ29udGFpbm1lbnROb2RlKGNvbnRhaW5tZW50Tm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzID0gbWV0YUFyZ3VtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUgPSBtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzLnNvbWUoKG1ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChjb250YWluZWQpIHtcbiAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnRhaW5tZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29udGFpbmVkKSB7XG4gICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50VGVybU5vZGVzID0gbWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUgPSBtZXRhQXJndW1lbnRUZXJtTm9kZXMuc29tZSgobWV0YUFyZ3VtZW50VGVybU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlID0gdGVybU5vZGUubWF0Y2gobWV0YUFyZ3VtZW50VGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29udGFpbmVkKSB7XG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb250YWluZWQpIHtcbiAgICAgIGlmICghdGVybU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VGVybU5vZGUpIHtcbiAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5tZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5lZEZyb21Db250YWlubWVudE5vZGUoY29udGFpbm1lbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjb250YWlubWVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGFpbmVkID0gKGNvbnRlbnQgPT09IENPTlRBSU5FRCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb250YWlubWVudCIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YUFyZ3VtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5IiwidGVybU5vZGUiLCJjb250YWlubWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwiY29udGFpbm1lbnRWZXJpZmllZCIsImNvbnRhaW5lZCIsImNvbnRhaW5lZEZyb21Db250YWlubWVudE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSIsInNvbWUiLCJtZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUiLCJtYXRjaCIsIm1ldGFBcmd1bWVudFRlcm1Ob2RlcyIsInRlcm1Ob2RlTWF0Y2hlc01ldGFBcmd1bWVudFRlcm1Ob2RlIiwibWV0YUFyZ3VtZW50VGVybU5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiQ09OVEFJTkVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3FCQVJEO3lCQUNHO3FCQUNZO0FBRXRDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJDLDZCQUE2QkMsSUFBQUEsaUJBQVUsRUFBQyx3QkFDeENDLGlDQUFpQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuQyxTQUFTSixrQkFBa0JNLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWTtJQUNqRyxJQUFJQyxzQkFBc0I7SUFFMUIsSUFBTUMsWUFBWUMsNkJBQTZCTCxrQkFDekNNLGVBQWVaLGtCQUFrQks7SUFFdkMsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSU8saUJBQWlCLE1BQU07UUFDaEMsSUFBTUMsNEJBQTRCVCwrQkFBK0JHLG1CQUMzRE8sOENBQThDRCwwQkFBMEJFLElBQUksQ0FBQyxTQUFDQztZQUM1RSxJQUFNRiw4Q0FBOENGLGFBQWFLLEtBQUssQ0FBQ0Q7WUFFdkUsSUFBSUYsNkNBQTZDO2dCQUMvQyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlKLFdBQVc7WUFDYixJQUFJSSw2Q0FBNkM7Z0JBQy9DTCxzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUksQ0FBQ0MsV0FBVztZQUNkLElBQUksQ0FBQ0ksNkNBQTZDO2dCQUNoREwsc0JBQXNCO1lBQ3hCO1FBQ0Y7SUFDRixPQUFPLElBQUlKLGFBQWEsTUFBTTtRQUM1QixJQUFNYSx3QkFBd0JoQiwyQkFBMkJLLG1CQUNuRFksc0NBQXNDRCxzQkFBc0JILElBQUksQ0FBQyxTQUFDSztZQUNoRSxJQUFNRCxzQ0FBc0NkLFNBQVNZLEtBQUssQ0FBQ0c7WUFFM0QsSUFBSUQscUNBQXFDO2dCQUN2QyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlULFdBQVc7WUFDYixJQUFJUyxxQ0FBcUM7Z0JBQ3ZDVixzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUksQ0FBQ0MsV0FBVztZQUNkLElBQUksQ0FBQ1MscUNBQXFDO2dCQUN4Q1Ysc0JBQXNCO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRSw2QkFBNkJMLGVBQWU7SUFDbkQsSUFBTWUsYUFBYWYsZ0JBQWdCZ0IsYUFBYSxJQUMxQ0Msa0JBQWtCQyxJQUFBQSxhQUFNLEVBQUNILGFBQ3pCSSxlQUFlRixpQkFDZkcsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ2pCLFlBQWFnQixZQUFZRSxvQkFBUztJQUV4QyxPQUFPbEI7QUFDVCJ9