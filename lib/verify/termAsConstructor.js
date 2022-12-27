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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICB9XG5cbiAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodGVybU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXNWZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHR5cGUuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSBvZiB0aGUgY29uc3RydWN0b3IncyBjb21wb3VuZCAnJHt0ZXJtU3RyaW5nfScgdGVybSBub2RlIGlzIG5vdCBudWxsLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwiYmVnaW4iLCJ0eXBlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0IiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGUiLCJ0eXBlTm9kZVZlcmlmaWVkIiwiYXJndW1lbnRTdHJpbmciLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwiVEVSTV9SVUxFX05BTUUiLCJ0eXBlcyIsInZhbHVlcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7eURBVkQ7Z0VBQ0M7cUJBRUY7c0JBQ087cUJBQ21CO3lCQUNHOzs7Ozs7QUFFbkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLHdCQUF3QkcsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUMvRSxJQUFJQyw0QkFBNEIsS0FBSztJQUVyQ0QsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFJSyxPQUFPLElBQUk7SUFFZixJQUFNQyxrQkFBa0JOLFVBQ2xCTyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQkMsaUJBQWlCSCxZQUFZTDtJQUV4RCxJQUFJTyxvQkFBb0I7UUFDdEIsSUFBSVIsYUFBYSxJQUFJLEVBQUU7WUFDckJFLDRCQUE0QixJQUFJO1FBQ2xDLE9BQU87WUFDTCxJQUFNUSxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1g7WUFFdENJLE9BQU9ILFlBQVlXLGtCQUFrQixDQUFDRjtZQUV0QyxJQUFJTixTQUFTLElBQUksRUFBRTtnQkFDakJGLDRCQUE0QixJQUFJO1lBQ2xDLE9BQU87Z0JBQ0wsSUFBTVcsYUFBYUMsSUFBQUEsb0JBQVksRUFBQ2Y7Z0JBRWhDRSxZQUFZYyxLQUFLLENBQUMsQUFBQyxRQUFxQ0wsT0FBOUJHLFlBQVcscUJBQTRCLE9BQVRILFVBQVM7WUFDbkUsQ0FB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