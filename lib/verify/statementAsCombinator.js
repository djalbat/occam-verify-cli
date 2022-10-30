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
function verifyStatementAsCombinator(statementNode) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var statementVerifiedAsCombinator = false;
    context.begin(statementNode);
    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = verifyChildNodes(childNodes, context);
    if (childNodesVerified) {
        var combinator = _combinator.default.fromStatementNode(statementNode), statementString = (0, _string.nodeAsString)(statementNode);
        context.info("Verified the '".concat(statementString, "' combinator."));
        context.addCombinator(combinator);
        statementVerifiedAsCombinator = true;
    }
    statementVerifiedAsCombinator ? context.complete(statementNode) : context.halt(statementNode);
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
function verifyTypeNode(typeNode, context) {
    var typeNodeVerified = false;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The type '".concat(typeName, "' is missing."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgVFlQRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG5cbiAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IoY29tYmluYXRvcik7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA/XG4gICAgY29udGV4dC5jb21wbGV0ZShzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBjb250ZXh0LmhhbHQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1Ob2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBkZWJ1Z2dlclxuXG4gIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIFRZUEVfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0eXBlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHR5cGVOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJiZWdpbiIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsImNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJpbmZvIiwiYWRkQ29tYmluYXRvciIsImNvbXBsZXRlIiwiaGFsdCIsInZlcmlmeU5vZGUiLCJub2RlIiwibm9kZVZlcmlmaWVkIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeVR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTm9kZVZlcmlmaWVkIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInZlcmlmeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJURVJNX1JVTEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OzsrREFORDtzQkFFTTtxQkFDUTt5QkFDVTs7Ozs7O0FBRWhDLFNBQVNBLDRCQUE0QkMsYUFBYSxFQUFrQjtRQUFoQkMsVUFBQUEsaUVBQVUsSUFBSTtJQUMvRSxJQUFJQyxnQ0FBZ0MsS0FBSztJQUV6Q0QsUUFBUUUsS0FBSyxDQUFDSDtJQUVkLElBQU1JLGtCQUFrQkosZUFDbEJLLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCQyxpQkFBaUJILFlBQVlKO0lBRXhELElBQUlN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