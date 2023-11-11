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
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeNodeQuery = (0, _query.nodeQuery)("/argument/type"), termNodeQuery = (0, _query.nodeQuery)("/argument/term");
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    var type = null;
    var nonTerminalNode = termNode, termString = fileContext.nodeAsString(termNode);
    var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, fileContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (childNodesVerified) {
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                fileContext.error("The '".concat(termString, "' constructor's '").concat(typeName, "' type is not present."), termNode);
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var tokens = fileContext.getTokens(), constructor = _constructor.default.fromTermNodeTypeAndTokens(termNode, type, tokens);
        fileContext.addConstructor(constructor);
    }
    if (termVerifiedAsConstructor) {
        fileContext.info("Verified the '".concat(termString, "' constructor."), termNode);
    }
    return termVerifiedAsConstructor;
}
function verifyNode(node, fileContext, verifyAhead) {
    var nodeVerified;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeVerified = verifyTerminalNode(terminalNode, fileContext, verifyAhead);
        nodeVerified = terminalNodeVerified; ///
    } else {
        var nonTerminalNode = node, nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead);
        nodeVerified = nonTerminalNodeVerified; ///
    }
    return nodeVerified;
}
function verifyChildNodes(childNodes, fileContext, verifyAhead) {
    var childNodesVerified = childNodes.every(function(childNode) {
        var node = childNode, nodeVerified = verifyNode(node, fileContext, verifyAhead);
        if (nodeVerified) {
            return true;
        }
    });
    return childNodesVerified;
}
function verifyTerminalNode(terminalNode, fileContext, verifyAhead) {
    var terminalNodeVerified = true;
    return terminalNodeVerified;
}
function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    var nonTerminalNodeVerified;
    var ruleName = nonTerminalNode.getRuleName();
    switch(ruleName){
        case _ruleNames.ARGUMENT_RULE_NAME:
            {
                var argumentNode = nonTerminalNode, argumentNodeVerified = verifyArgumentNode(argumentNode, fileContext, verifyAhead);
                nonTerminalNodeVerified = argumentNodeVerified; ///
                break;
            }
        case _ruleNames.TERM_RULE_NAME:
            {
                var termNode = nonTerminalNode, types = [], context = fileContext, termVerified = (0, _term.default)(termNode, types, context, verifyAhead);
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
                var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, fileContext, verifyAhead);
                nonTerminalNodeVerified = childNodesVerified; ///
                break;
            }
    }
    return nonTerminalNodeVerified;
}
function verifyArgumentNode(argumentNode, fileContext, verifyAhead) {
    var argumentNodeVerified = false;
    var typeNode = typeNodeQuery(argumentNode), termNode = termNodeQuery(argumentNode);
    if (false) {
    ///
    } else if (typeNode !== null) {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            fileContext.error("The type '".concat(typeName, "' is not present."), argumentNode);
        }
        argumentNodeVerified = typePresent; ///
    } else if (termNode !== null) {
        var node = termNode, nodeVerified = verifyNode(node, fileContext, verifyAhead);
        argumentNodeVerified = nodeVerified; ///
    }
    return argumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCwgdGVybU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCBhcmd1bWVudE5vZGUpO1xuICAgIH1cblxuICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHlwZVByZXNlbnQ7IC8vL1xuICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJlcnJvciIsInRva2VucyIsImdldFRva2VucyIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zIiwiYWRkQ29uc3RydWN0b3IiLCJpbmZvIiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJ2ZXJpZnlBaGVhZCIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIlRFUk1fUlVMRV9OQU1FIiwidHlwZXMiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsyREFWRDtrRUFDQztxQkFFRjtxQkFDMEI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysd0JBQXdCSSxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUM3RSxJQUFJQyw0QkFBNEI7SUFFaEMsSUFBSUMsT0FBTztJQUVYLElBQU1DLGtCQUFrQkwsVUFDbEJNLGFBQWFKLFlBQVlLLFlBQVksQ0FBQ1A7SUFFNUMsSUFBTVEsYUFBYUgsZ0JBQWdCSSxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWU4sYUFBYTtRQUM3RCxJQUFNVSxn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