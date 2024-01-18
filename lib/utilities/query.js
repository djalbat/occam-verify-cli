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
var _occamdom = require("occam-dom");
var typeTerminalNodeQuery = nodeQuery("/type/@type"), metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type"), labelNameTerminalNodeQuery = nodeQuery("/label/@name"), referenceNameTerminalNodeQuery = nodeQuery("/reference/@name");
function nodeQuery(expression) {
    var query = _occamdom.Query.fromExpression(expression);
    return function(node) {
        if (node !== null) {
            var nodes = query.execute(node);
            node = nodes.shift() || null; ///
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamdom.Query.fromExpression(expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZS9AdHlwZVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZVwiKSxcbiAgICAgIGxhYmVsTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xhYmVsL0BuYW1lXCIpLFxuICAgICAgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICBub2RlID0gbm9kZXMuc2hpZnQoKSB8fCBudWxsOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnkoZXhwcmVzc2lvbikge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGVOYW1lID0gbnVsbDtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHR5cGVOb2RlKSxcbiAgICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdHlwZU5hbWUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICBjb25zdCBsYWJlbE5hbWVUZXJtaW5hbE5vZGUgPSBsYWJlbE5hbWVUZXJtaW5hbE5vZGVRdWVyeShsYWJlbE5vZGUpLFxuICAgICAgICBsYWJlbE5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbGFiZWxOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGFiZWxOYW1lID0gbGFiZWxOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIGxhYmVsTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gIGxldCBtZXRhVHlwZU5hbWUgPSBudWxsO1xuXG4gIGlmIChtZXRhVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkobWV0YVR5cGVOb2RlKSxcbiAgICAgICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHJlZmVyZW5jZU5hbWUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHJlZmVyZW5jZU5hbWU7XG59XG4iXSwibmFtZXMiOlsibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsIm1ldGFUeXBlTmFtZUZyb21NZXRhVHlwZU5vZGUiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwibGFiZWxOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJleHByZXNzaW9uIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInNoaWZ0IiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJsYWJlbE5vZGUiLCJsYWJlbE5hbWVUZXJtaW5hbE5vZGUiLCJsYWJlbE5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwibGFiZWxOYW1lIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicmVmZXJlbmNlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0RnQkEsc0JBQXNCO2VBQXRCQTs7SUFRQUMsNEJBQTRCO2VBQTVCQTs7SUFqREFDLFNBQVM7ZUFBVEE7O0lBY0FDLFVBQVU7ZUFBVkE7O0lBZ0RBQyw4QkFBOEI7ZUFBOUJBOztJQWxDQUMsb0JBQW9CO2VBQXBCQTs7O3dCQW5DTTtBQUV0QixJQUFNQyx3QkFBd0JKLFVBQVUsZ0JBQ2xDSyw0QkFBNEJMLFVBQVUseUJBQ3RDTSw2QkFBNkJOLFVBQVUsaUJBQ3ZDTyxpQ0FBaUNQLFVBQVU7QUFFMUMsU0FBU0EsVUFBVVEsVUFBVTtJQUNsQyxJQUFNQyxRQUFRQyxlQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQUlBLFNBQVMsTUFBTTtZQUNqQixJQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1lBRTVCQSxPQUFPQyxNQUFNRSxLQUFLLE1BQU0sTUFBTSxHQUFHO1FBQ25DO1FBRUEsT0FBT0g7SUFDVDtBQUNGO0FBRU8sU0FBU1gsV0FBV08sVUFBVTtJQUNuQyxJQUFNQyxRQUFRQyxlQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQUlDLFFBQVE7UUFFWixJQUFJRCxTQUFTLE1BQU07WUFDakJDLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFDeEI7UUFFQSxPQUFPQztJQUNUO0FBQ0Y7QUFFTyxTQUFTVixxQkFBcUJhLFFBQVE7SUFDM0MsSUFBSUMsV0FBVztJQUVmLElBQUlELGFBQWEsTUFBTTtRQUNyQixJQUFNRSxtQkFBbUJkLHNCQUFzQlksV0FDekNHLDBCQUEwQkQsaUJBQWlCRSxVQUFVO1FBRTNESCxXQUFXRSx5QkFBeUIsR0FBRztJQUN6QztJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTbkIsdUJBQXVCdUIsU0FBUztJQUM5QyxJQUFNQyx3QkFBd0JoQiwyQkFBMkJlLFlBQ25ERSwrQkFBK0JELHNCQUFzQkYsVUFBVSxJQUMvREksWUFBWUQsOEJBQThCLEdBQUc7SUFFbkQsT0FBT0M7QUFDVDtBQUVPLFNBQVN6Qiw2QkFBNkIwQixZQUFZO0lBQ3ZELElBQUlDLGVBQWU7SUFFbkIsSUFBSUQsaUJBQWlCLE1BQU07UUFDekIsSUFBTUUsdUJBQXVCdEIsMEJBQTBCb0IsZUFDakRHLDhCQUE4QkQscUJBQXFCUCxVQUFVO1FBRW5FTSxlQUFlRSw2QkFBNkIsR0FBRztJQUNqRDtJQUVBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTeEIsK0JBQStCMkIsYUFBYTtJQUMxRCxJQUFNQyw0QkFBNEJ2QiwrQkFBK0JzQixnQkFDM0RFLG1DQUFtQ0QsMEJBQTBCVixVQUFVLElBQ3ZFWSxnQkFBZ0JELGtDQUFrQyxHQUFHO0lBRTNELE9BQU9DO0FBQ1QifQ==