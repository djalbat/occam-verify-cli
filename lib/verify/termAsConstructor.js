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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgfVxuXG4gIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHRlcm1Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0eXBlLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgbWlzc2luZy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVOb2RlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsImJlZ2luIiwidHlwZSIsIm5vblRlcm1pbmFsTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJlcnJvciIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0IiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7eURBVkQ7Z0VBQ0M7cUJBRUY7c0JBQ087cUJBQ21CO3lCQUNHOzs7Ozs7QUFFbkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLHdCQUF3QkcsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUMvRSxJQUFJQyw0QkFBNEIsS0FBSztJQUVyQ0QsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFJSyxPQUFPLElBQUk7SUFFZixJQUFNQyxrQkFBa0JOLFVBQ2xCTyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDUjtJQUVoQ0UsWUFBWU8sS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7SUFFL0MsSUFBTUcsYUFBYUosZ0JBQWdCSyxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWVI7SUFFeEQsSUFBSVUsb0JBQW9CO1FBQ3RCLElBQUlYLGFBQWEsSUFBSSxFQUFFO1lBQ3JCRSw0QkFBNEIsSUFBSTtRQUNsQyxPQUFPO1lBQ0wsSUFBTVcsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNkO1lBRXRDSSxPQUFPSCxZQUFZYyxrQkFBa0IsQ0FBQ0Y7WUFFdEMsSUFBSVQsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCRiw0QkFBNEIsSUFBSTtZQUNsQyxPQUFPO2dCQUNMRCxZQUFZZSxLQUFLLENBQUMsQUFBQyxRQUFxQ0gsT0FBOUJQLFlBQVcscUJB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