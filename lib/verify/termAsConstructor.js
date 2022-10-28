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
function verifyTermAsConstructor(termNode, typeNode, context) {
    var termVerifiedAsConstructor = false;
    var termString = (0, _string.nodeAsString)(termNode);
    context.debug("Verifying the '".concat(termString, "' term as a constructor..."), termNode);
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
    var type = null;
    if (childNodesVerified) {
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                var termString1 = (0, _string.nodeAsString)(termNode);
                context.error("The '".concat(termString1, "' constructor's '").concat(typeName, "' type is missing."), termNode);
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        context.addConstructor(constructor);
        var termString2 = (0, _string.nodeAsString)(termNode);
        context.info("Verified the '".concat(termString2, "' constructor."), termNode);
    }
    return termVerifiedAsConstructor;
}
function verifyNode(node, context) {
    var nodeVerified;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeVerified = verifyTerminalNode(terminalNode, context);
        nodeVerified = terminalNodeVerified; ///
    } else {
        var nonTerminalNode = node, nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, context);
        nodeVerified = nonTerminalNodeVerified; ///
    }
    return nodeVerified;
}
function verifyChildNodes(childNodes, context) {
    var childNodesVerified = childNodes.every(function(childNode) {
        var node = childNode, nodeVerified = verifyNode(node, context);
        if (nodeVerified) {
            return true;
        }
    });
    return childNodesVerified;
}
function verifyTerminalNode(terminalNode, context) {
    var terminalNodeVerified = true;
    return terminalNodeVerified;
}
function verifyNonTerminalNode(nonTerminalNode, context) {
    var nonTerminalNodeVerified;
    var ruleName = nonTerminalNode.getRuleName();
    switch(ruleName){
        case _ruleNames.ARGUMENT_RULE_NAME:
            {
                var argumentNode = nonTerminalNode, argumentNodeVerified = verifyArgumentNode(argumentNode, context);
                nonTerminalNodeVerified = argumentNodeVerified; ///
                break;
            }
        case _ruleNames.TERM_RULE_NAME:
            {
                var termNode = nonTerminalNode, types = [], values = [], termVerified = (0, _term.default)(termNode, types, values, context);
                if (termVerified) {
                    var firstType = (0, _array.first)(types), type = firstType; ///
                    if (type !== null) {
                        var termString = (0, _string.nodeAsString)(termNode);
                        context.error("The type of the constructor's compound '".concat(termString, "' term node is not null."), termNode);
                    } else {
                        nonTerminalNodeVerified = true; ///
                    }
                }
                break;
            }
        default:
            {
                var childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
                nonTerminalNodeVerified = childNodesVerified; ///
                break;
            }
    }
    return nonTerminalNodeVerified;
}
function verifyArgumentNode(argumentNode, context) {
    var typeNodeVerified = false;
    var typeNode = typeNodeQuery(argumentNode);
    if (typeNode === null) {
        var argumentString = (0, _string.nodeAsString)(argumentNode);
        context.error("The ".concat(argumentString, " argument should be a type."), argumentNode);
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            context.error("The type '".concat(typeName, "' is missing."), typeNode);
        } else {
            typeNodeVerified = true;
        }
    }
    return typeNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCwgdGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICB2YWx1ZXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCB2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCwgdGVybU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdHlwZS5gLCBhcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG1pc3NpbmcuYCwgdHlwZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ0eXBlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImVycm9yIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImluZm8iLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIlRFUk1fUlVMRV9OQU1FIiwidHlwZXMiLCJ2YWx1ZXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0eXBlTm9kZVZlcmlmaWVkIiwiYXJndW1lbnRTdHJpbmciLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7O3lEQVZEO2dFQUNDO3FCQUVGO3NCQUNPO3FCQUNtQjt5QkFDRzs7Ozs7O0FBRW5ELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRix3QkFBd0JHLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDM0UsSUFBSUMsNEJBQTRCLEtBQUs7SUFFckMsSUFBTUMsYUFBYUMsSUFBQUEsb0JBQVksRUFBQ0w7SUFFaENFLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLCtCQUE2Qko7SUFFeEUsSUFBTU8sa0JBQWtCUCxVQUNsQlEsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWU47SUFFeEQsSUFBSVUsT0FBTyxJQUFJO0lBRWYsSUFBSUYsb0JBQW9CO1FBQ3RCLElBQUlULGFBQWEsSUFBSSxFQUFFO1lBQ3JCRSw0QkFBNEIsSUFBSTtRQUNsQyxPQUFPO1lBQ0wsSUFBTVUsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1lBRXRDVyxPQUFPVixRQUFRYSxrQkFBa0IsQ0FBQ0Y7WUFFbEMsSUFBSUQsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCVCw0QkFBNEIsSUFBSTtZQUNsQyxPQUFPO2dCQUNMLElBQU1DLGNBQWFDLElBQUFBLG9CQUFZLEVBQUNMO2dCQUVoQ0UsUUFBUWMsS0FBSyxDQUFDLEFBQUMsUUFBcUNILE9BQTlCVCxhQUFXLHFCQUE0QixPQUFUUyxVQUFTLHVCQUFxQmI7WUFDcEYsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUcsMkJBQTJCO1FBQzdCLElBQU1jLGNBQWNDLG9CQUFXLENBQUNDLG1C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