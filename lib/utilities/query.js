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
    labelNameFromLabelNode: function() {
        return labelNameFromLabelNode;
    },
    metaTypeNameFromMetaTypeNode: function() {
        return metaTypeNameFromMetaTypeNode;
    },
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    },
    referenceNameFromReferenceNode: function() {
        return referenceNameFromReferenceNode;
    },
    typeNameFromTypeNode: function() {
        return typeNameFromTypeNode;
    }
});
var _occamquery = require("occam-query");
var typeTerminalNodeQuery = nodeQuery("/type/@type"), metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type"), labelNameTerminalNodeQuery = nodeQuery("/label/@name"), referenceNameTerminalNodeQuery = nodeQuery("/reference/@name");
function nodeQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        if (node !== null) {
            var nodes = query.execute(node);
            node = nodes.shift() || null; ///
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamquery.Query.fromExpression(expression);
    return function(node) {
        var nodes = null;
        if (node !== null) {
            nodes = query.execute(node);
        }
        return nodes;
    };
}
function typeNameFromTypeNode(typeNode) {
    var typeName = null;
    if (typeNode !== null) {
        var typeTerminalNode = typeTerminalNodeQuery(typeNode), typeTerminalNodeContent = typeTerminalNode.getContent();
        typeName = typeTerminalNodeContent; ///
    }
    return typeName;
}
function labelNameFromLabelNode(labelNode) {
    var labelNameTerminalNode = labelNameTerminalNodeQuery(labelNode), labelNameTerminalNodeContent = labelNameTerminalNode.getContent(), labelName = labelNameTerminalNodeContent; ///
    return labelName;
}
function metaTypeNameFromMetaTypeNode(metaTypeNode) {
    var metaTypeName = null;
    if (metaTypeNode !== null) {
        var metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode), metaTypeTerminalNodeContent = metaTypeTerminalNode.getContent();
        metaTypeName = metaTypeTerminalNodeContent; ///
    }
    return metaTypeName;
}
function referenceNameFromReferenceNode(referenceNode) {
    var referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode), referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(), referenceName = referenceNameTerminalNodeContent; ///
    return referenceName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmNvbnN0IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlL0B0eXBlXCIpLFxuICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZS9AbWV0YS10eXBlXCIpLFxuICAgICAgbGFiZWxOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGFiZWwvQG5hbWVcIiksXG4gICAgICByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL0BuYW1lXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vZGUgPSBub2Rlcy5zaGlmdCgpIHx8IG51bGw7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSkge1xuICBsZXQgdHlwZU5hbWUgPSBudWxsO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICB0eXBlTmFtZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiB0eXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gIGNvbnN0IGxhYmVsTmFtZVRlcm1pbmFsTm9kZSA9IGxhYmVsTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgIGxhYmVsTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBsYWJlbE5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBsYWJlbE5hbWUgPSBsYWJlbE5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbGFiZWxOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpIHtcbiAgbGV0IG1ldGFUeXBlTmFtZSA9IG51bGw7XG5cbiAgaWYgKG1ldGFUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlVGVybWluYWxOb2RlID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeShtZXRhVHlwZU5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudCA9IG1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcmVmZXJlbmNlTmFtZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gcmVmZXJlbmNlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibWV0YVR5cGVOYW1lRnJvbU1ldGFUeXBlTm9kZSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJyZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkiLCJsYWJlbE5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImV4cHJlc3Npb24iLCJxdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwic2hpZnQiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImxhYmVsTm9kZSIsImxhYmVsTmFtZVRlcm1pbmFsTm9kZSIsImxhYmVsTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJsYWJlbE5hbWUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZSIsIm1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudCIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJyZWZlcmVuY2VOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFrRGdCQSxzQkFBc0I7ZUFBdEJBOztJQVFBQyw0QkFBNEI7ZUFBNUJBOztJQWpEQUMsU0FBUztlQUFUQTs7SUFjQUMsVUFBVTtlQUFWQTs7SUFnREFDLDhCQUE4QjtlQUE5QkE7O0lBbENBQyxvQkFBb0I7ZUFBcEJBOzs7MEJBbkNNO0FBRXRCLElBQU1DLHdCQUF3QkosVUFBVSxnQkFDbENLLDRCQUE0QkwsVUFBVSx5QkFDdENNLDZCQUE2Qk4sVUFBVSxpQkFDdkNPLGlDQUFpQ1AsVUFBVTtBQUUxQyxTQUFTQSxVQUFVUSxVQUFVO0lBQ2xDLElBQU1DLFFBQVFDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQUlBLFNBQVMsTUFBTTtZQUNqQixJQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1lBRTVCQSxPQUFPQyxNQUFNRSxLQUFLLE1BQU0sTUFBTSxHQUFHO1FBQ25DO1FBRUEsT0FBT0g7SUFDVDtBQUNGO0FBRU8sU0FBU1gsV0FBV08sVUFBVTtJQUNuQyxJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxjQUFjLENBQUNIO0lBRW5DLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixJQUFJQyxRQUFRO1FBRVosSUFBSUQsU0FBUyxNQUFNO1lBQ2pCQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBQ3hCO1FBRUEsT0FBT0M7SUFDVDtBQUNGO0FBRU8sU0FBU1YscUJBQXFCYSxRQUFRO0lBQzNDLElBQUlDLFdBQVc7SUFFZixJQUFJRCxhQUFhLE1BQU07UUFDckIsSUFBTUUsbUJBQW1CZCxzQkFBc0JZLFdBQ3pDRywwQkFBMEJELGlCQUFpQkUsVUFBVTtRQUUzREgsV0FBV0UseUJBQXlCLEdBQUc7SUFDekM7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU25CLHVCQUF1QnVCLFNBQVM7SUFDOUMsSUFBTUMsd0JBQXdCaEIsMkJBQTJCZSxZQUNuREUsK0JBQStCRCxzQkFBc0JGLFVBQVUsSUFDL0RJLFlBQVlELDhCQUE4QixHQUFHO0lBRW5ELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTekIsNkJBQTZCMEIsWUFBWTtJQUN2RCxJQUFJQyxlQUFlO0lBRW5CLElBQUlELGlCQUFpQixNQUFNO1FBQ3pCLElBQU1FLHVCQUF1QnRCLDBCQUEwQm9CLGVBQ2pERyw4QkFBOEJELHFCQUFxQlAsVUFBVTtRQUVuRU0sZUFBZUUsNkJBQTZCLEdBQUc7SUFDakQ7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBU3hCLCtCQUErQjJCLGFBQWE7SUFDMUQsSUFBTUMsNEJBQTRCdkIsK0JBQStCc0IsZ0JBQzNERSxtQ0FBbUNELDBCQUEwQlYsVUFBVSxJQUN2RVksZ0JBQWdCRCxrQ0FBa0MsR0FBRztJQUUzRCxPQUFPQztBQUNUIn0=