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
    var nonTerminalNode = termNode, termString = fileContext.nodeAsString(termNode);
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
                        var termString = fileContext.nodeAsString(termNode);
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
        var argumentString = fileContext.nodeAsString(argumentNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbih0ZXJtTm9kZSk7XG5cbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICB9XG5cbiAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodGVybU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXNWZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgb2YgdGhlIGNvbnN0cnVjdG9yJ3MgY29tcG91bmQgJyR7dGVybVN0cmluZ30nIHRlcm0gbm9kZSBpcyBub3QgbnVsbC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHR5cGUuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwiYmVnaW4iLCJ0eXBlIiwibm9uVGVybWluYWxOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIlRFUk1fUlVMRV9OQU1FIiwidHlwZXMiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidHlwZU5vZGVWZXJpZmllZCIsImFyZ3VtZW50U3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozt5REFURDtnRUFDQztxQkFFRjtxQkFDMEI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysd0JBQXdCRyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQy9FLElBQUlDLDRCQUE0QixLQUFLO0lBRXJDRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQUlLLE9BQU8sSUFBSTtJQUVmLElBQU1DLGtCQUFrQk4sVUFDbEJPLGFBQWFMLFlBQVlNLFlBQVksQ0FBQ1I7SUFFNUNFLFlBQVlPLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXO0lBRS9DLElBQU1HLGFBQWFKLGdCQUFnQkssYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlSO0lBRXhELElBQUlVLG9CQUFvQjtRQUN0QixJQUFJWCxhQUFhLElBQUksRUFBRTtZQUNyQkUsNEJBQTRCLElBQUk7UUFDbEMsT0FBTztZQUNMLElBQU1XLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDZDtZQUV0Q0ksT0FBT0gsWUFBWWMsa0JBQWtCLENBQUNGO1lBRXRDLElBQUlULFNBQVMsSUFBSSxFQUFFO2dCQUNqQkYsNEJBQTRCLElBQUk7WUFDbEMsT0FBTztnQkFDTEQsWUFBWWUsS0FBSyxDQUFDLEFBQUMsUUFBcUNILE9BQTlCUCxZQUFXLHFCQUE0QixPQUFUTyxVQUFTO1lBQ25FLENBQUM7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