"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatementAsCombinator;
    }
});
var _necessary = require("necessary");
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../combinator"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var log = _necessary.loggingUtilities.log;
function verifyStatementAsCombinator(statementNode, context) {
    var statementVerifiedAsCombinator = false;
    var statementString = (0, _string.nodeAsString)(statementNode);
    log.debug("Verifying the ".concat(statementString, " statement as a combinator..."));
    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
    if (childNodesVerified) {
        statementVerifiedAsCombinator = true;
    }
    if (statementVerifiedAsCombinator) {
        var combinator = _combinator.default.fromStatementNode(statementNode);
        context.addCombinator(combinator);
        var statementString1 = (0, _string.nodeAsString)(statementNode);
        log.info("Verified the '".concat(statementString1, "' combinator."));
    }
    return statementVerifiedAsCombinator;
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
        case _ruleNames.TYPE_RULE_NAME:
            {
                var typeNode = nonTerminalNode, typeNodeVerified = verifyTypeNode(typeNode, context);
                nonTerminalNodeVerified = typeNodeVerified; ///
                break;
            }
        case _ruleNames.TERM_RULE_NAME:
            {
                var termNode = nonTerminalNode, termNodeVerified = verifyTermNode(termNode, context);
                nonTerminalNodeVerified = termNodeVerified; ///
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
function verifyTypeNode(typeNode, context) {
    var typeNodeVerified = false;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        log.error("The type '".concat(typeName, "' is missing."));
    } else {
        typeNodeVerified = true;
    }
    return typeNodeVerified;
}
function verifyTermNode(termNode, context) {
    var termNodeVerified = false;
    debugger;
    return termNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsb2dnaW5nVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgVFlQRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9nLmRlYnVnKGBWZXJpZnlpbmcgdGhlICR7c3RhdGVtZW50U3RyaW5nfSBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLi4uYCk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yKSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IoY29tYmluYXRvcik7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2cuaW5mbyhgVmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgVFlQRV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIGxvZy5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICB9IGVsc2Uge1xuICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZGVidWdnZXJcblxuICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiY29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImFkZENvbWJpbmF0b3IiLCJpbmZvIiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJ0eXBlTm9kZSIsInR5cGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlTm9kZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7O3lCQVZTOytEQUVWO3NCQUVNO3FCQUNRO3lCQUNVOzs7Ozs7QUFFL0MsSUFBTSxBQUFFQyxNQUFRQywyQkFBZ0IsQ0FBeEJEO0FBRU8sU0FBU0QsNEJBQTRCRyxhQUFhLEVB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