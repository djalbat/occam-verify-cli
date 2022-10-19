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
var _necessary = require("necessary");
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
var log = _necessary.loggingUtilities.log;
var typeNodeQuery = (0, _query.nodeQuery)("/argument/type");
function verifyTermAsConstructor(termNode, typeNode, context) {
    var termVerifiedAsConstructor = false;
    var termString = (0, _string.nodeAsString)(termNode);
    log.debug("Verifying the '".concat(termString, "' term as a constructor..."));
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
                log.error("The '".concat(termString1, "' constructor's '").concat(typeName, "' type is missing."));
            }
        }
    }
    if (termVerifiedAsConstructor) {
        var constructor = _constructor.default.fromTermNodeAndType(termNode, type);
        context.addConstructor(constructor);
        var termString2 = (0, _string.nodeAsString)(termNode);
        log.info("Verified the '".concat(termString2, "' constructor."));
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
                        log.error("The type of the constructor's compound '".concat(termString, "' term node is not null."));
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
        log.error("The ".concat(argumentString, " argument should be a type."));
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
        if (!typePresent) {
            log.error("The type '".concat(typeName, "' is missing."));
        } else {
            typeNodeVerified = true;
        }
    }
    return typeNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvZ2dpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBsb2cgfSA9IGxvZ2dpbmdVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9nLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gKTtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgIGxvZy5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2cuaW5mbyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2Rlc1ZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICBsb2cuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSBjb25zdHJ1Y3RvcidzIGNvbXBvdW5kICcke3Rlcm1TdHJpbmd9JyB0ZXJtIG5vZGUgaXMgbm90IG51bGwuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGxvZy5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHR5cGUuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGxvZy5lcnJvcihgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsImxvZyIsImxvZ2dpbmdVdGlsaXRpZXMiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidHlwZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJlcnJvciIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJpbmZvIiwidmVyaWZ5Tm9kZSIsIm5vZGUiLCJub2RlVmVyaWZpZWQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInR5cGVzIiwidmFsdWVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidHlwZU5vZGVWZXJpZmllZCIsImFyZ3VtZW50U3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBd0JBOzs7eUJBZFM7eURBRVY7Z0VBQ0M7cUJBRUY7c0JBQ087cUJBQ21CO3lCQUNHOzs7Ozs7QUFFbkQsSUFBTSxBQUFFQyxNQUFRQywyQkFBZ0IsQ0FBeEJEO0FBRVIsSUFBTUUsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNKLHdCQUF3QkssUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUMzRSxJQUFJQyw0QkFBNEIsS0FBSztJQUVyQyxJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDTDtJQUVoQ0osSUFBSVUsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7SUFFdkMsSUFBTUcsa0JBQWtCUCxVQUNsQlEsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUJDLGlCQUFpQkgsWUFBWU47SUFFeEQsSUFBSVUsT0FBTyxJQUFJO0lBRWYsSUFBSUYsb0JBQW9CO1FBQ3RCLElBQUlULGFBQWEsSUFBSSxFQUFFO1lBQ3JCRSw0QkFBNEIsSUFBSTtRQUNsQyxPQUFPO1lBQ0wsSUFBTVUsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1lBRXRDVyxPQUFPVixRQUFRYSxrQkFBa0IsQ0FBQ0Y7WUFFbEMsSUFBSUQsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCVCw0QkFBNEIsSUFBSTtZQUNsQyxPQUFPO2dCQUNMLElBQU1DLGNBQWFDLElBQUFBLG9CQUFZLEVBQUNMO2dCQUVoQ0osSUFBSW9CLEtBQUssQ0FBQyxBQUFDLFFBQXFDSCxPQUE5QlQsYUFBVyxxQkFBNEIsT0FBVFMsVUFBUztZQUMzRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENB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