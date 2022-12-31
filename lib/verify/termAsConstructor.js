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
    var nonTerminalNode = termNode, termString = (0, _string.nodeAsString)(termNode);
    fileContext.debug("Verifying the '".concat(termString, "' constructor..."));
    var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, fileContext);
    if (childNodesVerified) {
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                fileContext.error("The '".concat(termString, "' constructor's '").concat(typeName, "' type is missing."));
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        fileContext.addConstructor(constructor);
    }
    if (termVerifiedAsConstructor) {
        fileContext.info("Verified the '".concat(termString, "' constructor."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgfVxuXG4gIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHRlcm1Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0eXBlLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgbWlzc2luZy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSBvZiB0aGUgY29uc3RydWN0b3IncyBjb21wb3VuZCAnJHt0ZXJtU3RyaW5nfScgdGVybSBub2RlIGlzIG5vdCBudWxsLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwiYmVnaW4iLCJ0eXBlIiwibm9uVGVybWluYWxOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZSIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozt5REFWRDtnRUFDQztxQkFFRjtzQkFDTztxQkFDbUI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysd0JBQXdCRyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQy9FLElBQUlDLDRCQUE0QixLQUFLO0lBRXJDRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQUlLLE9BQU8sSUFBSTtJQUVmLElBQU1DLGtCQUFrQk4sVUFDbEJPLGFBQWFDLElBQUFBLG9CQUFZLEVBQUNSO0lBRWhDRSxZQUFZTyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztJQUUvQyxJQUFNRyxhQUFhSixnQkFBZ0JLLGFBQWEsSUFDMUNDLHFCQUFxQkMsaUJBQWlCSCxZQUFZUjtJQUV4RCxJQUFJVSxvQkFBb0I7UUFDdEIsSUFBSVgsYUFBYSxJQUFJLEVBQUU7WUFDckJFLDRCQUE0QixJQUFJO1FBQ2xDLE9BQU87WUFDTCxJQUFNVyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ2Q7WUFFdENJLE9BQU9ILFlBQVljLGtCQUFrQixDQUFDRjtZQUV0QyxJQUFJVCxTQUFTLElBQUksRUFBRTtnQkFDakJGLDRCQUE0QixJQUFJO1lBQ2xDLE9BQU87Z0JBQ0xELFlBQVllLEtBQUssQ0FBQyxBQUFDLFFBQXFDSCxPQUE5QlAsWUFBVyxx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