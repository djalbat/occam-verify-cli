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
                fileContext.info("The '".concat(termString, "' constructor's '").concat(typeName, "' type is not present."), termNode);
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
                        fileContext.info("The type of the constructor's compound '".concat(termString, "' term node is not null."), termNode);
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
            fileContext.info("The type '".concat(typeName, "' is not present."), argumentNode);
        }
        argumentNodeVerified = typePresent; ///
    } else if (termNode !== null) {
        var node = termNode, nodeVerified = verifyNode(node, fileContext, verifyAhead);
        argumentNodeVerified = nodeVerified; ///
    }
    return argumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmluZm8oYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdG9rZW5zID0gZmlsZUNvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgdHlwZSBvZiB0aGUgY29uc3RydWN0b3IncyBjb21wb3VuZCAnJHt0ZXJtU3RyaW5nfScgdGVybSBub2RlIGlzIG5vdCBudWxsLmAsIHRlcm1Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCBhcmd1bWVudE5vZGUpO1xuICAgIH1cblxuICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHlwZVByZXNlbnQ7IC8vL1xuICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJpbmZvIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciIsInZlcmlmeU5vZGUiLCJub2RlIiwidmVyaWZ5QWhlYWQiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7MkRBVkQ7a0VBQ0M7cUJBRUY7cUJBQzBCO3lCQUNHOzs7Ozs7QUFFbkQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLHdCQUF3QkksUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUMsNEJBQTRCO0lBRWhDLElBQUlDLE9BQU87SUFFWCxJQUFNQyxrQkFBa0JMLFVBQ2xCTSxhQUFhSixZQUFZSyxZQUFZLENBQUNQO0lBRTVDLElBQU1RLGFBQWFILGdCQUFnQkksYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlOLGFBQWE7UUFDN0QsSUFBTVUsZ0JBQWdCO1FBRXRCLE9BQU9BO0lBQ1Q7SUFFTixJQUFJRixvQkFBb0I7UUFDdEIsSUFBSVQsYUFBYSxNQUFNO1lBQ3JCRSw0QkFBNEI7UUFDOUIsT0FBTztZQUNMLElBQU1VLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDYjtZQUV0Q0csT0FBT0YsWUFBWWEsa0JBQWtCLENBQUNGO1lBRXRDLElBQUlULFNBQVMsTUFBTTtnQkFDakJELDRCQUE0QjtZQUM5QixPQUFPO2dCQUNMRCxZQUFZYyxJQUFJLENBQUMsQUFBQyxRQUFxQ0gsT0FBOUJQLFlBQVcscUJBQTRCLE9BQVRPLFVBQVMsMkJBQXlCYjtZQUMzRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJRywyQkFBMkI7UUFDN0IsSUFBTWMsU0FBU2YsWUFBWWdCLFNBQVMsSUFDOUJDLGNBQWNDLG9CQUFXLENBQUNDLHlCQUF5QixDQUFDckIsVUFBVUksTUFBTWE7UUFFMUVmLFlBQVlvQixjQUFjLENBQUNIO0lBQzdCO0lBRUEsSUFBSWhCLDJCQUEyQjtRQUM3QkQsWUFBWWMsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhWLFlBQVcsbUJBQWlCTjtJQUNoRTtJQUVBLE9BQU9HO0FBQ1Q7QUFFQSxTQUFTb0IsV0FBV0MsSUFBSSxFQUFFdEIsV0FBVyxFQUFFdUIsV0FBVztJQUNoRCxJQUFJQztJQUVKLElBQU1DLG1CQUFtQkgsS0FBS0ksY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZUwsTUFDZk0sdUJBQXVCQyxtQkFBbUJGLGNBQWMzQixhQUFhdUI7UUFFM0VDLGVBQWVJLHNCQUF1QixHQUFHO0lBQzNDLE9BQU87UUFDTCxJQUFNekIsa0JBQWtCbUIsTUFDbEJRLDBCQUEwQkMsc0JBQXNCNUIsaUJBQWlCSCxhQUFhdUI7UUFFcEZDLGVBQWVNLHlCQUF5QixHQUFHO0lBQzdDO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNmLGlCQUFpQkgsVUFBVSxFQUFFTixXQUFXLEVBQUV1QixXQUFXO0lBQzVELElBQU1mLHFCQUFxQkYsV0FBVzBCLEtBQUssQ0FBQyxTQUFDQztRQUMzQyxJQUFNWCxPQUFPVyxXQUNQVCxlQUFlSCxXQUFXQyxNQUFNdEIsYUFBYXVCO1FBRW5ELElBQUlDLGNBQWM7WUFDaEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPaEI7QUFDVDtBQUVBLFNBQVNxQixtQkFBbUJGLFlBQVksRUFBRTNCLFdBQVcsRUFBRXVCLFdBQVc7SUFDaEUsSUFBTUssdUJBQXVCO0lBRTdCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRyxzQkFBc0I1QixlQUFlLEVBQUVILFdBQVcsRUFBRXVCLFdBQVc7SUFDdEUsSUFBSU87SUFFSixJQUFNSSxXQUFXL0IsZ0JBQWdCZ0MsV0FBVztJQUU1QyxPQUFRRDtRQUNOLEtBQUtFLDZCQUFrQjtZQUFFO2dCQUN2QixJQUFNQyxlQUFlbEMsaUJBQ2ZtQyx1QkFBdUJDLG1CQUFtQkYsY0FBY3JDLGFBQWF1QjtnQkFFM0VPLDBCQUEwQlEsc0JBQXNCLEdBQUc7Z0JBRW5EO1lBQ0Y7UUFFQSxLQUFLRSx5QkFBYztZQUFFO2dCQUNuQixJQUFNMUMsV0FBV0ssaUJBQ1hzQyxRQUFRLEVBQUUsRUFDVkMsVUFBVTFDLGFBQ1YyQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUM5QyxVQUFVMkMsT0FBT0MsU0FBU25CO2dCQUUxRCxJQUFJb0IsY0FBYztvQkFDaEIsSUFBTUUsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQnZDLE9BQU8yQyxXQUFXLEdBQUc7b0JBRTNCLElBQUkzQyxTQUFTLE1BQU07d0JBQ2pCLElBQU1FLGFBQWFKLFlBQVlLLFlBQVksQ0FBQ1A7d0JBRTVDRSxZQUFZYyxJQUFJLENBQUMsQUFBQywyQ0FBcUQsT0FBWFYsWUFBVyw2QkFBMkJOO29CQUNwRyxPQUFPO3dCQUNMZ0MsMEJBQTBCLE1BQU0sR0FBRztvQkFDckM7Z0JBQ0Y7Z0JBRUE7WUFDRjtRQUVBO1lBQVM7Z0JBQ1AsSUFBTXhCLGFBQWFILGdCQUFnQkksYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlOLGFBQWF1QjtnQkFFckVPLDBCQUEwQnRCLG9CQUFvQixHQUFHO2dCQUVqRDtZQUNGO0lBQ0Y7SUFFQSxPQUFPc0I7QUFDVDtBQUVBLFNBQVNTLG1CQUFtQkYsWUFBWSxFQUFFckMsV0FBVyxFQUFFdUIsV0FBVztJQUNoRSxJQUFJZSx1QkFBdUI7SUFFM0IsSUFBTXZDLFdBQVdKLGNBQWMwQyxlQUN6QnZDLFdBQVdELGNBQWN3QztJQUUvQixJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJdEMsYUFBYSxNQUFNO1FBQzVCLElBQU1ZLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDYixXQUNoQ2dELGNBQWMvQyxZQUFZZ0QsdUJBQXVCLENBQUNyQztRQUV4RCxJQUFJLENBQUNvQyxhQUFhO1lBQ2hCL0MsWUFBWWMsSUFBSSxDQUFDLEFBQUMsYUFBcUIsT0FBVEgsVUFBUyxzQkFBb0IwQjtRQUM3RDtRQUVBQyx1QkFBdUJTLGFBQWEsR0FBRztJQUN6QyxPQUFPLElBQUlqRCxhQUFhLE1BQU07UUFDNUIsSUFBTXdCLE9BQU94QixVQUNQMEIsZUFBZUgsV0FBV0MsTUFBTXRCLGFBQWF1QjtRQUVuRGUsdUJBQXVCZCxjQUFlLEdBQUc7SUFDM0M7SUFFQSxPQUFPYztBQUNUIn0=