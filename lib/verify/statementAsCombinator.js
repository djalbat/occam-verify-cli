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
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../combinator"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyStatementAsCombinator(statementNode, context) {
    var statementVerifiedAsCombinator = false;
    var statementString = (0, _string.nodeAsString)(statementNode);
    context.debug("Verifying the ".concat(statementString, " statement as a combinator..."), statementNode);
    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
    if (childNodesVerified) {
        statementVerifiedAsCombinator = true;
    }
    if (statementVerifiedAsCombinator) {
        var combinator = _combinator.default.fromStatementNode(statementNode);
        context.addCombinator(combinator);
        var statementString1 = (0, _string.nodeAsString)(statementNode);
        context.info("Verified the '".concat(statementString1, "' combinator."), statementNode);
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
        context.error("The type '".concat(typeName, "' is missing."), typeNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgVFlQRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICR7c3RhdGVtZW50U3RyaW5nfSBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yKSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IoY29tYmluYXRvcik7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIFRZUEVfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHR5cGVOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG1pc3NpbmcuYCwgdHlwZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHR5cGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZGVidWdnZXJcblxuICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJjb21iaW5hdG9yIiwiQ29tYmluYXRvciIsImZyb21TdGF0ZW1lbnROb2RlIiwiYWRkQ29tYmluYXRvciIsImluZm8iLCJ2ZXJpZnlOb2RlIiwibm9kZSIsIm5vZGVWZXJpZmllZCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJldmVyeSIsImNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJUWVBFX1JVTEVfTkFNRSIsInR5cGVOb2RlIiwidHlwZU5vZGVWZXJpZmllZCIsInZlcmlmeVR5cGVOb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7K0RBTkQ7c0JBRU07cUJBQ1E7eUJBQ1U7Ozs7OztBQUVoQyxTQUFTQSw0QkFBNEJDLGFBQWEsRUFBRUMsT0FBTyxFQUFFO0lBQzFFLElBQUlDLGdDQUFnQyxLQUFLO0lBRXpDLElBQU1DLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQ0o7SUFFckNDLFFBQVFJLEtBQUssQ0FBQyxBQUFD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