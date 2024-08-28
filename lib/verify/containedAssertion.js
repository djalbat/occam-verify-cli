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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metastatementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/metastatement//variable");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29udGFpbmVkQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vbWV0YXN0YXRlbWVudC8vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlKSB7XG4gIGxldCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZDsgIC8vL1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzID0gbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgobWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCkge1xuICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsImNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJuZWdhdGVkIiwibWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlIiwic29tZSIsIm1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztzQkFOVztxQkFDRztBQUV0QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyxrQ0FBa0NDLElBQUFBLGlCQUFVLEVBQUM7QUFFcEMsU0FBU0oseUJBQXlCSyxzQkFBc0I7SUFDckUsSUFBSUMsNkJBQTZCO0lBRWpDLElBQU1DLDRCQUE0QkMsSUFBQUEsMEJBQWtCLEVBQUNILHlCQUMvQ0ksZUFBZVIsa0JBQWtCSSx5QkFDakNLLFVBQVVILDJCQUE0QixHQUFHO0lBRS9DLElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlFLGlCQUFpQixNQUFNO1FBQ2hDLElBQU1FLDZCQUE2QlIsZ0NBQWdDRSx5QkFDN0RPLDhDQUE4Q0QsMkJBQTJCRSxJQUFJLENBQUMsU0FBQ0M7WUFDN0UsSUFBTUYsOENBQThDSCxhQUFhTSxLQUFLLENBQUNEO1lBRXZFLElBQUlGLDZDQUE2QztnQkFDL0MsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJLENBQUNGLFNBQVM7WUFDWixJQUFJRSw2Q0FBNkM7Z0JBQy9DTiw2QkFBNkI7WUFDL0I7UUFDRjtRQUVBLElBQUlJLFNBQVM7WUFDWCxJQUFJLENBQUNFLDZDQUE2QztnQkFDaEROLDZCQUE2QjtZQUMvQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=