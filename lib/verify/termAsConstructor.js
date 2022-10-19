"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsConstructor;
    }
});
var _term = /*#__PURE__*/ _interopRequireDefault(require("../verify/term"));
var _constructor = /*#__PURE__*/ _interopRequireDefault(require("../constructor"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeNodeQuery = (0, _query.nodeQuery)("/argument/type");
function verifyTermAsConstructor(termNode, typeNode, context) {
    var termVerifiedAsConstructor = false;
    var termString = (0, _string.nodeAsString)(termNode);
    context.debug("Verifying the '".concat(termString, "' term as a constructor..."));
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
    var type = null;
    if (childNodesVerified) {
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                var termString1 = (0, _string.nodeAsString)(termNode);
                context.error("The '".concat(termString1, "' constructor's '").concat(typeName, "' type is missing."));
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        context.addConstructor(constructor);
        var termString2 = (0, _string.nodeAsString)(termNode);
        context.info("Verified the '".concat(termString2, "' constructor."));
    }
    return termVerifiedAsConstructor;
}
function verifyNode(node, context) {
    var nodeVerified;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeVerified = verifyTerminalNode(terminalNode, context);
        nodeVerified = terminalNodeVerified; ///
    } else {
        var nonTerminalNode = node, nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, context);
        nodeVerified = nonTerminalNodeVerified; ///
    }
    return nodeVerified;
}
function verifyChildNodes(childNodes, context) {
    var childNodesVerified = childNodes.every(function(childNode) {
        var node = childNode, nodeVerified = verifyNode(node, context);
        if (nodeVerified) {
            return true;
        }
    });
    return childNodesVerified;
}
function verifyTerminalNode(terminalNode, context) {
    var terminalNodeVerified = true;
    return terminalNodeVerified;
}
function verifyNonTerminalNode(nonTerminalNode, context) {
    var nonTerminalNodeVerified;
    var ruleName = nonTerminalNode.getRuleName();
    switch(ruleName){
        case _ruleNames.ARGUMENT_RULE_NAME:
            {
                var argumentNode = nonTerminalNode, argumentNodeVerified = verifyArgumentNode(argumentNode, context);
                nonTerminalNodeVerified = argumentNodeVerified; ///
                break;
            }
        case _ruleNames.TERM_RULE_NAME:
            {
                var termNode = nonTerminalNode, types = [], values = [], termVerified = (0, _term.default)(termNode, types, values, context);
                if (termVerified) {
                    var firstType = (0, _array.first)(types), type = firstType; ///
                    if (type !== null) {
                        var termString = (0, _string.nodeAsString)(termNode);
                        context.error("The type of the constructor's compound '".concat(termString, "' term node is not null."));
                    } else {
                        nonTerminalNodeVerified = true; ///
                    }
                }
                break;
            }
        default:
            {
                var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
                nonTerminalNodeVerified = childNodesVerified; ///
                break;
            }
    }
    return nonTerminalNodeVerified;
}
function verifyArgumentNode(argumentNode, context) {
    var typeNodeVerified = false;
    var typeNode = typeNodeQuery(argumentNode);
    if (typeNode === null) {
        var argumentString = (0, _string.nodeAsString)(argumentNode);
        context.error("The ".concat(argumentString, " argument should be a type."));
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            context.error("The type '".concat(typeName, "' is missing."));
        } else {
            typeNodeVerified = true;
        }
    }
    return typeNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gKTtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICBjb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICB2YWx1ZXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0eXBlLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlTm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInR5cGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsImFkZENvbnN0cnVjdG9yIiwiaW5mbyIsInZlcmlmeU5vZGUiLCJub2RlIiwibm9kZVZlcmlmaWVkIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsImV2ZXJ5IiwiY2hpbGROb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0eXBlcyIsInZhbHVlcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7eURBVkQ7Z0VBQ0M7cUJBRUY7c0JBQ087cUJBQ21CO3lCQUNHOzs7Ozs7QUFFbkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLHdCQUF3QkcsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUMzRSxJQUFJQyw0QkFBNEIsS0FBSztJQUVyQyxJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDTDtJQUVoQ0UsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7SUFFM0MsSUFBTUcsa0JBQWtCUCxVQUNsQlEsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWU47SUFFeEQsSUFBSVUsT0FBTyxJQUFJO0lBRWYsSUFBSUYsb0JBQW9CO1FBQ3RCLElBQUlULGFBQWEsSUFBSSxFQUFFO1lBQ3JCRSw0QkFBNEIsSUFBSTtRQUNsQyxPQUFPO1lBQ0wsSUFBTVUsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1lBRXRDVyxPQUFPVixRQUFRYSxrQkFBa0IsQ0FBQ0Y7WUFFbEMsSUFBSUQsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCVCw0QkFBNEIsSUFBSTtZQUNsQyxPQUFPO2dCQUNMLElBQU1DLGNBQWFDLElBQUFBLG9CQUFZLEVBQUNMO2dCQUVoQ0UsUUFBUWMsS0FBSyxDQUFDLEFBQUMsUUFBcUNILE9BQTlCVCxhQUFXLHFCQUE0QixPQUFUUyxVQUFTO1lBQy9ELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlWLDJCQUEyQjtRQUM3QixJQUFNYyxjQUFjQyxvQkFBVyxDQUFDQyxtQkFBbUIsQ0FBQ25CLFVBQVVZO1FBRTlEVixRQUFRa0IsY0FBYyxDQUFDSDtRQUV2QixJQUFNYixjQUFhQyxJQUFBQSxvQkFBWSxFQUFDTDtRQUVoQ0UsUUFBUW1CLElBQUksQ0FBQyxBQUFDLGlCQUEyQixPQUFYakIsYUFBVztJQUMzQyxDQUFDO0lBRUQsT0FBT0Q7QUFDVDtBQUVBLFNBQVNtQixXQUFXQyxJQUFJLEVBQUVyQixPQUFPLEVBQUU7SUFDakMsSUFBSXNCO0lBRUosSUFBTUMsbUJBQW1CRixLQUFLRyxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlSixNQUNmSyx1QkFBdUJDLG1CQUFtQkYsY0FBY3pCO1FBRTlEc0IsZUFBZUksc0JBQXVCLEdBQUc7SUFDM0MsT0FBTztRQUNMLElBQU1yQixrQkFBa0JnQixNQUNsQk8sMEJBQTBCQyxzQkFBc0J4QixpQkFBaUJMO1FBRXZFc0IsZUFBZU0seUJBQXlCLEdBQUc7SUFDN0MsQ0FBQztJQUVELE9BQU9OO0FBQ1Q7QUFFQSxTQUFTYixpQkFBaUJILFVBQVUsRUFBRU4sT0FBTyxFQUFFO0lBQzdDLElBQU1RLHFCQUFxQkYsV0FBV3dCLEtBQUssQ0FBQyxTQUFDQyxXQUFjO1FBQ3pELElBQU1WLE9BQU9VLFdBQ1BULGVBQWVGLFdBQVdDLE1BQU1yQjtRQUV0QyxJQUFJc0IsY0FBYztZQUNoQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPZDtBQUNUO0FBRUEsU0FBU21CLG1CQUFtQkYsWUFBWSxFQUFFekIsT0FBTyxFQUFFO0lBQ2pELElBQU0wQix1QkFBdUIsSUFBSTtJQUVqQyxPQUFPQTtBQUNUO0FBRUEsU0FBU0csc0JBQXNCeEIsZUFBZSxFQUFFTCxPQUFPLEVBQUU7SUFDdkQsSUFBSTRCO0lBRUosSUFBTUksV0FBVzNCLGdCQUFnQjRCLFdBQVc7SUFFNUMsT0FBUUQ7UUFDTixLQUFLRSw2QkFBa0I7WUFBRTtnQkFDdkIsSUFBTUMsZUFBZTlCLGlCQUNmK0IsdUJBQXVCQyxtQkFBbUJGLGNBQWNuQztnQkFFOUQ0QiwwQkFBMEJRLHNCQUFzQixHQUFHO2dCQUVuRCxLQUFNO1lBQ1I7UUFFQSxLQUFLRSx5QkFBYztZQUFFO2dCQUNuQixJQUFNeEMsV0FBV08saUJBQ1hrQyxRQUFRLEVBQUUsRUFDVkMsU0FBUyxFQUFFLEVBQ1hDLGVBQWVDLElBQUFBLGFBQVUsRUFBQzVDLFVBQVV5QyxPQUFPQyxRQUFReEM7Z0JBRXpELElBQUl5QyxjQUFjO29CQUNoQixJQUFNRSxZQUFZQyxJQUFBQSxZQUFLLEVBQUNMLFFBQ2xCN0IsT0FBT2lDLFdBQVcsR0FBRztvQkFFM0IsSUFBSWpDLFNBQVMsSUFBSSxFQUFFO3dCQUNqQixJQUFNUixhQUFhQyxJQUFBQSxvQkFBWSxFQUFDTDt3QkFFaENFLFFBQVFjLEtBQUssQ0FBQyxBQUFDLDJDQUFxRCxPQUFYWixZQUFXO29CQUN0RSxPQUFPO3dCQUNMMEIsMEJBQTBCLElBQUksRUFBRSxHQUFHO29CQUNyQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBTTtZQUNSO1FBRUE7WUFBUztnQkFDUCxJQUFNdEIsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWU47Z0JBRXhENEIsMEJBQTBCcEIsb0JBQW9CLEdBQUc7Z0JBRWpELEtBQU07WUFDUjtJQUNGO0lBRUEsT0FBT29CO0FBQ1Q7QUFFQSxTQUFTUyxtQkFBbUJGLFlBQVksRUFBRW5DLE9BQU8sRUFBRTtJQUNqRCxJQUFJNkMsbUJBQW1CLEtBQUs7SUFFNUIsSUFBTTlDLFdBQVdILGNBQWN1QztJQUUvQixJQUFJcEMsYUFBYSxJQUFJLEVBQUU7UUFDckIsSUFBTStDLGlCQUFpQjNDLElBQUFBLG9CQUFZLEVBQUNnQztRQUVwQ25DLFFBQVFjLEtBQUssQ0FBQyxBQUFDLE9BQXFCLE9BQWZnQyxnQkFBZTtJQUN0QyxPQUFPO1FBQ0wsSUFBTW5DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDYixXQUNoQ2dELGNBQWMvQyxRQUFRZ0QsdUJBQXVCLENBQUNyQztRQUVwRCxJQUFJLENBQUNvQyxhQUFhO1lBQ2hCL0MsUUFBUWMsS0FBSyxDQUFDLEFBQUMsYUFBcUIsT0FBVEgsVUFBUztRQUN0QyxPQUFPO1lBQ0xrQyxtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9BO0FBQ1QifQ==