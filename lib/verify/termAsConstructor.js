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
        var node = termNode, nodeVerified = verifyNode(node, fileContext);
        argumentNodeVerified = nodeVerified; ///
    }
    return argumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdG9rZW5zID0gZmlsZUNvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXNWZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgb2YgdGhlIGNvbnN0cnVjdG9yJ3MgY29tcG91bmQgJyR7dGVybVN0cmluZ30nIHRlcm0gbm9kZSBpcyBub3QgbnVsbC5gLCB0ZXJtTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCBhcmd1bWVudE5vZGUpO1xuICAgIH1cblxuICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHlwZVByZXNlbnQ7IC8vL1xuICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidHlwZSIsIm5vblRlcm1pbmFsTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZXJyb3IiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsImFkZENvbnN0cnVjdG9yIiwiaW5mbyIsInZlcmlmeU5vZGUiLCJub2RlIiwibm9kZVZlcmlmaWVkIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsImV2ZXJ5IiwiY2hpbGROb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0eXBlcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzJEQVZEO2tFQUNDO3FCQUVGO3FCQUMwQjt5QkFDRzs7Ozs7O0FBRW5ELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRix3QkFBd0JJLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQzdFLElBQUlDLDRCQUE0QjtJQUVoQyxJQUFJQyxPQUFPO0lBRVgsSUFBTUMsa0JBQWtCTCxVQUNsQk0sYUFBYUosWUFBWUssWUFBWSxDQUFDUDtJQUU1QyxJQUFNUSxhQUFhSCxnQkFBZ0JJLGFBQWEsSUFDMUNDLHFCQUFxQkMsaUJBQWlCSCxZQUFZTjtJQUV4RCxJQUFJUSxvQkFBb0I7UUFDdEIsSUFBSVQsYUFBYSxNQUFNO1lBQ3JCRSw0QkFBNEI7UUFDOUIsT0FBTztZQUNMLElBQU1TLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDWjtZQUV0Q0csT0FBT0YsWUFBWVksa0JBQWtCLENBQUNGO1lBRXRDLElBQUlSLFNBQVMsTUFBTTtnQkFDakJELDRCQUE0QjtZQUM5QixPQUFPO2dCQUNMRCxZQUFZYSxLQUFLLENBQUMsQUFBQyxRQUFxQ0gsT0FBOUJOLFlBQVcscUJBQTRCLE9BQVRNLFVBQVMsMkJBQXlCWjtZQUM1RjtRQUNGO0lBQ0Y7SUFFQSxJQUFJRywyQkFBMkI7UUFDN0IsSUFB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