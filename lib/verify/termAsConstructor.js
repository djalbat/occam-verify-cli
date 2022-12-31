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
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        fileContext.addConstructor(constructor);
    }
    if (termVerifiedAsConstructor) {
        var termString1 = (0, _string.nodeAsString)(termNode);
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
                var termNode = nonTerminalNode, types = [], context = fileContext, termVerified = (0, _term.default)(termNode, types, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICB9XG5cbiAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodGVybU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXNWZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHR5cGUuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJiZWdpbiIsInR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZSIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozt5REFWRDtnRUFDQztxQkFFRjtzQkFDTztxQkFDbUI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysd0JBQXdCRyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQy9FLElBQUlDLDRCQUE0QixLQUFLO0lBRXJDRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQUlLLE9BQU8sSUFBSTtJQUVmLElBQU1DLGtCQUFrQk4sVUFDbEJPLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlMO0lBRXhELElBQUlPLG9CQUFvQjtRQUN0QixJQUFJUixhQUFhLElBQUksRUFBRTtZQUNyQkUsNEJBQTRCLElBQUk7UUFDbEMsT0FBTztZQUNMLElBQU1RLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDWDtZQUV0Q0ksT0FBT0gsWUFBWVcsa0JBQWtCLENBQUNGO1lBRXRDLElBQUlOLFNBQVMsSUFBSSxFQUFFO2dCQUNqQkYsNEJBQTRCLElBQUk7WUFDbEMsT0FBTztnQkFDTCxJQUFNVyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDZjtnQkFFaENFLFlBQVljLEtBQUssQ0FBQyxBQUFDLFFBQXFDTCxPQUE5QkcsWUFBVyxxQkFBNEIsT0FBVEgsVUFBUztZQUNuRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJUiwyQkFBMkI7UUFD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