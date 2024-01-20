"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsGivenVariable;
    }
});
var _query = require("../utilities/query");
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsGivenVariable(termNode, variables, context, verifyAhead) {
    var termVerifiedAsVariable = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = context.nodeAsString(termNode);
        context.trace("Verifying the '".concat(termString, "' term as a given variable..."), termNode);
        var variable = context.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var verifiedAhead;
            variables.push(variable);
            verifiedAhead = verifyAhead();
            if (!verifiedAhead) {
                variables.pop();
            }
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            context.debug("...verified the '".concat(termString, "' term as a given variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzR2l2ZW5WYXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBnaXZlbiB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgIHZhcmlhYmxlcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBnaXZlbiB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJwdXNoIiwicG9wIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7cUJBSkU7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLDBCQUEwQkcsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUN6RixJQUFJQyx5QkFBeUI7SUFFN0IsSUFBTUMsZUFBZVAsa0JBQWtCRTtJQUV2QyxJQUFJSyxpQkFBaUIsTUFBTTtRQUN6QixJQUFNQyxhQUFhSixRQUFRSyxZQUFZLENBQUNQO1FBRXhDRSxRQUFRTSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxrQ0FBZ0NOO1FBRTNFLElBQU1TLFdBQVdQLFFBQVFRLDBCQUEwQixDQUFDTDtRQUVwRCxJQUFJSSxhQUFhLE1BQU07WUFDckIsSUFBSUU7WUFFSlYsVUFBVVcsSUFBSSxDQUFDSDtZQUVmRSxnQkFBZ0JSO1lBRWhCLElBQUksQ0FBQ1EsZUFBZTtnQkFDbEJWLFVBQVVZLEdBQUc7WUFDZjtZQUVBVCx5QkFBeUJPLGVBQWUsR0FBRztRQUM3QztRQUVBLElBQUlQLHdCQUF3QjtZQUMxQkYsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhSLFlBQVcsZ0NBQThCTjtRQUM3RTtJQUNGO0lBRUEsT0FBT0k7QUFDVCJ9