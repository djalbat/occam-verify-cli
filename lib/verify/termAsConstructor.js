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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCwgdGVybU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCwgYXJndW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHR5cGVQcmVzZW50OyAvLy9cbiAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInR5cGUiLCJub25UZXJtaW5hbE5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIlRFUk1fUlVMRV9OQU1FIiwidHlwZXMiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsyREFWRDtrRUFDQztxQkFFRjtxQkFDMEI7eUJBQ0c7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGtCQUFVLG1CQUMxQkMsZ0JBQWdCRCxJQUFBQSxrQkFBVTtBQUVqQixTQUFTRix3QkFBd0JJLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQzdFLElBQUlDLDRCQUE0QjtJQUVoQyxJQUFJQyxPQUFPO0lBRVgsSUFBTUMsa0JBQWtCTCxVQUNsQk0sYUFBYUosWUFBWUssYUFBYVA7SUFFNUMsSUFBTVEsYUFBYUgsZ0JBQWdCSSxpQkFDN0JDLHFCQUFxQkMsaUJBQWlCSCxZQUFZTjtJQUV4RCxJQUFJUSxvQkFBb0I7UUFDdEIsSUFBSVQsYUFBYSxNQUFNO1lBQ3JCRSw0QkFBNEI7UUFDOUIsT0FBTztZQUNMLElBQU1TLFdBQVdDLElBQUFBLDZCQUFxQlo7WUFFdENHLE9BQU9GLFlBQVlZLG1CQUFtQkY7WUFFdEMsSUFBSVIsU0FBUyxNQUFNO2dCQUNqQkQsNEJBQTRCO1lBQzlCLE9BQU87Z0JBQ0xELFlBQVlhLE1BQU0sQUFBQyxRQUFxQ0gsT0FBOUJOLFlBQVcscUJBQTRCLE9BQVRNLFVBQVMsMkJBQXlCWjtZQUM1RjtRQUNGO0lBQ0Y7SUFFQSxJQUFJRywyQkFBMkI7UUFDN0IsSUFBTWEsY0FBY0MscUJBQVlDLG9CQUFvQmxCLFVBQVVJO1FBRTlERixZQUFZaUIsZUFBZUg7SUFDN0I7SUFFQSxJQUFJYiwyQkFBMkI7UUFDN0JELFlBQVlrQixLQUFLLEFBQUMsaUJBQTJCLE9BQVhkLFlBQVcsbUJB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