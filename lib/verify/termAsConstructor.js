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
    var type = null;
    var nonTerminalNode = termNode, termString = fileContext.nodeAsString(termNode);
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
                fileContext.error("The '".concat(termString, "' constructor's '").concat(typeName, "' type is missing."), termNode);
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        fileContext.addConstructor(constructor);
    }
    if (termVerifiedAsConstructor) {
        fileContext.info("Verified the '".concat(termString, "' constructor."), termNode);
    }
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
                        fileContext.error("The type of the constructor's compound '".concat(termString, "' term node is not null."), termNode);
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
        fileContext.error("The ".concat(argumentString, " argument should be a type."), argumentNode);
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            fileContext.error("The type '".concat(typeName, "' is missing."), argumentNode);
        } else {
            typeNodeVerified = true;
        }
    }
    return typeNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gLCB0ZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXNWZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgb2YgdGhlIGNvbnN0cnVjdG9yJ3MgY29tcG91bmQgJyR7dGVybVN0cmluZ30nIHRlcm0gbm9kZSBpcyBub3QgbnVsbC5gLCB0ZXJtTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0eXBlLmAsIGFyZ3VtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlTm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0eXBlIiwibm9uVGVybWluYWxOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJlcnJvciIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJpbmZvIiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInR5cGVOb2RlVmVyaWZpZWQiLCJhcmd1bWVudFN0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