"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    metavariableFromStatementNode: function() {
        return metavariableFromStatementNode;
    },
    variableFromTermNode: function() {
        return variableFromTermNode;
    }
});
var _query = require("../utilities/query");
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable"), metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable");
function variableFromTermNode(termNode, localContext) {
    var variable = null;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        variable = localContext.findVariableByVariableNode(variableNode);
    }
    return variable;
}
function metavariableFromStatementNode(statementNode, localContext) {
    var metavariable = null;
    var metavariableNode = metavariableNodeQuery(statementNode);
    if (metavariableNode !== null) {
        metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
    }
    return metavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpXG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJsb2NhbENvbnRleHQiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtQmdCQSw2QkFBNkI7ZUFBN0JBOztJQVpBQyxvQkFBb0I7ZUFBcEJBOzs7cUJBTFU7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUM5QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLFNBQVNGLHFCQUFxQkksUUFBUSxFQUFFQyxZQUFZO0lBQ3pELElBQUlDLFdBQVc7SUFFZixJQUFNQyxlQUFlTixrQkFBa0JHO0lBRXZDLElBQUlHLGlCQUFpQixNQUFNO1FBQ3pCRCxXQUFXRCxhQUFhRywwQkFBMEIsQ0FBQ0Q7SUFDckQ7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU1AsOEJBQThCVSxhQUFhLEVBQUVKLFlBQVk7SUFDdkUsSUFBSUssZUFBZTtJQUVuQixJQUFNQyxtQkFBbUJSLHNCQUFzQk07SUFFL0MsSUFBSUUscUJBQXFCLE1BQU07UUFDN0JELGVBQWVMLGFBQWFPLGtDQUFrQyxDQUFDRDtJQUNqRTtJQUVBLE9BQU9EO0FBQ1QifQ==