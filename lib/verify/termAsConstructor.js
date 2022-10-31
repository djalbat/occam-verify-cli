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
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    fileContext.begin(termNode);
    var type = null;
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, fileContext);
    if (childNodesVerified) {
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                var termString = (0, _string.nodeAsString)(termNode);
                fileContext.error("The '".concat(termString, "' constructor's '").concat(typeName, "' type is missing."));
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var termString1 = (0, _string.nodeAsString)(termNode), constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        fileContext.addConstructor(constructor);
        fileContext.info("Verified the '".concat(termString1, "' constructor."));
    }
    termVerifiedAsConstructor ? fileContext.complete(termNode) : fileContext.halt(termNode);
    return termVerifiedAsConstructor;
}
function verifyNode(node, fileContext) {
    var nodeVerified;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeVerified = verifyTerminalNode(terminalNode, fileContext);
        nodeVerified = terminalNodeVerified; ///
    } else {
        var nonTerminalNode = node, nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, fileContext);
        nodeVerified = nonTerminalNodeVerified; ///
    }
    return nodeVerified;
}
function verifyChildNodes(childNodes, fileContext) {
    var childNodesVerified = childNodes.every(function(childNode) {
        var node = childNode, nodeVerified = verifyNode(node, fileContext);
        if (nodeVerified) {
            return true;
        }
    });
    return childNodesVerified;
}
function verifyTerminalNode(terminalNode, fileContext) {
    var terminalNodeVerified = true;
    return terminalNodeVerified;
}
function verifyArgumentNode(argumentNode, fileContext) {
    var typeNodeVerified = false;
    var typeNode = typeNodeQuery(argumentNode);
    if (typeNode === null) {
        var argumentString = (0, _string.nodeAsString)(argumentNode);
        fileContext.error("The ".concat(argumentString, " argument should be a type."));
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            fileContext.error("The type '".concat(typeName, "' is missing."));
        } else {
            typeNodeVerified = true;
        }
    }
    return typeNodeVerified;
}
function verifyNonTerminalNode(nonTerminalNode, fileContext) {
    var nonTerminalNodeVerified;
    var ruleName = nonTerminalNode.getRuleName();
    switch(ruleName){
        case _ruleNames.ARGUMENT_RULE_NAME:
            {
                var argumentNode = nonTerminalNode, argumentNodeVerified = verifyArgumentNode(argumentNode, fileContext);
                nonTerminalNodeVerified = argumentNodeVerified; ///
                break;
            }
        case _ruleNames.TERM_RULE_NAME:
            {
                var termNode = nonTerminalNode, types = [], values = [], context = fileContext, termVerified = (0, _term.default)(termNode, types, values, context);
                if (termVerified) {
                    var firstType = (0, _array.first)(types), type = firstType; ///
                    if (type !== null) {
                        var termString = (0, _string.nodeAsString)(termNode);
                        fileContext.error("The type of the constructor's compound '".concat(termString, "' term node is not null."));
                    } else {
                        nonTerminalNodeVerified = true; ///
                    }
                }
                break;
            }
        default:
            {
                var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, fileContext);
                nonTerminalNodeVerified = childNodesVerified; ///
                break;
            }
    }
    return nonTerminalNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcblxuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gIH1cblxuICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID9cbiAgICBmaWxlQ29udGV4dC5jb21wbGV0ZSh0ZXJtTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuaGFsdCh0ZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdHlwZS5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICB2YWx1ZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJiZWdpbiIsInR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZSIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwidmFsdWVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozt5REFWRDtnRUFDQztxQkFFRjtzQkFDTztxQkFDbUI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysd0JBQXdCRyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQy9FLElBQUlDLDRCQUE0QixLQUFLO0lBRXJDRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQUlLLE9BQU8sSUFBSTtJQUVmLElBQU1DLGtCQUFrQk4sVUFDbEJPLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlMO0lBRXhELElBQUlPLG9CQUFvQjtRQUN0QixJQUFJUixhQUFhLElBQUksRUFBRTtZQUNyQkUsNEJBQTRCLElBQUk7UUFDbEMsT0FBTztZQUNMLElBQU1RLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDWDtZQUV0Q0ksT0FBT0gsWUFBWVcsa0JBQWtCLENBQUNGO1lBRXRDLElBQUlOLFNBQVMsSUFBSSxFQUFFO2dCQUNqQkYsNEJBQTRCLElBQUk7WUFDbEMsT0FBTztnQkFDTCxJQUFNVyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDZjtnQkFFaENFLFlBQVljLEtBQUssQ0FBQyxBQUFDLFFBQXFDTCxPQUE5QkcsWUFBVyxxQkFBNEIsT0FBVEgsVUFBUztZQUNuRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJUiwyQkFBMkI7UUFD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