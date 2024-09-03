"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyStatementAsContainedAssertion;
    },
    isStatementContainedAssertion: function() {
        return isStatementContainedAssertion;
    }
});
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _constants = require("../constants");
var _verify = require("../utilities/verify");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!"), operatorTerminalNodesQuery = (0, _query.nodesQuery)("/statement/@operator"), statementVariableNodesQuery = (0, _query.nodesQuery)("/statement/metaArgument/statement//variable");
function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsContainedAssertion;
    var statementContainedAssertion = isStatementContainedAssertion(statementNode);
    if (statementContainedAssertion) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a contained assertion..."), statementNode);
        var statementFunctions = [
            verifyStatementAsDerivedContainedAssertion,
            verifyStatementAsStatedContainedAssertion
        ];
        statementVerifiedAsContainedAssertion = statementFunctions.some(function(statementFunction) {
            var statementVerifiedAsContainedAssertion = statementFunction(statementNode, assignments, derived, localContext);
            if (statementVerifiedAsContainedAssertion) {
                return true;
            }
        });
        if (statementVerifiedAsContainedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a contained assertion."), statementNode);
        }
    }
    return statementVerifiedAsContainedAssertion;
}
function verifyStatementAsDerivedContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedContainedAssertion = false;
    if (derived) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the derived '".concat(statementString, "' statement as a contained assertion..."), statementNode);
        var statementNegated = (0, _verify.isStatementNegated)(statementNode), variableNode = variableNodeQuery(statementNode), negated = statementNegated; ///
        if (false) {
        ///
        } else if (variableNode !== null) {
            var statementVariableNodes = statementVariableNodesQuery(statementNode), variableNodeMatchesMetaArgumentVariableNode = statementVariableNodes.some(function(statementVariableNode) {
                var variableNodeMatchesMetaArgumentVariableNode = variableNode.match(statementVariableNode);
                if (variableNodeMatchesMetaArgumentVariableNode) {
                    return true;
                }
            });
            if (!negated) {
                if (variableNodeMatchesMetaArgumentVariableNode) {
                    statementVerifiedAsDefinedContainedAssertion = true;
                }
            }
            if (negated) {
                if (!variableNodeMatchesMetaArgumentVariableNode) {
                    statementVerifiedAsDefinedContainedAssertion = true;
                }
            }
        }
        if (statementVerifiedAsDefinedContainedAssertion) {
            localContext.debug("...verified the derived '".concat(statementString, "' statement as a contained assertion."), statementNode);
        }
    }
    return statementVerifiedAsDefinedContainedAssertion;
}
function verifyStatementAsStatedContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsStatedContainedAssertion = false;
    if (!derived) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the stated '".concat(statementString, "' statement as a contained assertion..."), statementNode);
        var intrinsicLevel = localContext.isIntrinsicLevel();
        if (intrinsicLevel) {
            localContext.debug("The stated '".concat(statementString, "' statement as a contained assertion cannot be verified at intrinsic level."), statementNode);
        } else {
            var nonTerminalNode = statementNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            statementVerifiedAsStatedContainedAssertion = nonTerminalNodeVerified; ///
        }
        if (statementVerifiedAsStatedContainedAssertion) {
            localContext.debug("...verified the stated '".concat(statementString, "' statement as a contained assertion."), statementNode);
        }
    }
    return statementVerifiedAsStatedContainedAssertion;
}
function isStatementContainedAssertion(statementNode) {
    var operatorTerminalNodes = operatorTerminalNodesQuery(statementNode), statementContainedAssertion = operatorTerminalNodes.some(function(operatorTerminalNode) {
        var content = operatorTerminalNode.getContent(), contentContained = content === _constants.CONTAINED;
        if (contentContained) {
            return true;
        }
    });
    return statementContainedAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxOb2RlVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGUvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IENPTlRBSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzU3RhdGVtZW50TmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG9wZXJhdG9yVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvQG9wZXJhdG9yXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YUFyZ3VtZW50L3N0YXRlbWVudC8vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb247XG5cbiAgY29uc3Qgc3RhdGVtZW50Q29udGFpbmVkQXNzZXJ0aW9uID0gaXNTdGF0ZW1lbnRDb250YWluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudENvbnRhaW5lZEFzc2VydGlvbikge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgICAgdmVyaWZ5U3RhdGVtZW50QXNEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uLFxuICAgICAgdmVyaWZ5U3RhdGVtZW50QXNTdGF0ZWRDb250YWluZWRBc3NlcnRpb25cbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IHN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKChzdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IHN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0Rlcml2ZWRDb250YWluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgZGVyaXZlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNTdGF0ZW1lbnROZWdhdGVkKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG5lZ2F0ZWQgPSBzdGF0ZW1lbnROZWdhdGVkOyAgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRDb250YWluZWRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc01ldGFBcmd1bWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQ29udGFpbmVkQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZENvbnRhaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgZGVyaXZlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZENvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNTdGF0ZWRDb250YWluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1N0YXRlZENvbnRhaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3RhdGVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGludHJpbnNpY0xldmVsID0gbG9jYWxDb250ZXh0LmlzSW50cmluc2ljTGV2ZWwoKTtcblxuICAgIGlmIChpbnRyaW5zaWNMZXZlbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgc3RhdGVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbnRhaW5lZCBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGF0IGludHJpbnNpYyBsZXZlbC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc1N0YXRlZENvbnRhaW5lZEFzc2VydGlvbiA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1N0YXRlZENvbnRhaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgc3RhdGVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNTdGF0ZWRDb250YWluZWRBc3NlcnRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YXRlbWVudENvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlKSB7XG4gIGNvbnN0IG9wZXJhdG9yVGVybWluYWxOb2RlcyA9IG9wZXJhdG9yVGVybWluYWxOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRDb250YWluZWRBc3NlcnRpb24gPSBvcGVyYXRvclRlcm1pbmFsTm9kZXMuc29tZSgob3BlcmF0b3JUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gb3BlcmF0b3JUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZWQgPSAoY29udGVudCA9PT0gQ09OVEFJTkVEKTtcblxuICAgICAgICAgIGlmIChjb250ZW50Q29udGFpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRDb250YWluZWRBc3NlcnRpb247XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24iLCJpc1N0YXRlbWVudENvbnRhaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwib3BlcmF0b3JUZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudEZ1bmN0aW9ucyIsInZlcmlmeVN0YXRlbWVudEFzRGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uIiwic29tZSIsInN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZENvbnRhaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudE5lZ2F0ZWQiLCJpc1N0YXRlbWVudE5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJuZWdhdGVkIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJtYXRjaCIsInN0YXRlbWVudFZlcmlmaWVkQXNTdGF0ZWRDb250YWluZWRBc3NlcnRpb24iLCJpbnRyaW5zaWNMZXZlbCIsImlzSW50cmluc2ljTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJvcGVyYXRvclRlcm1pbmFsTm9kZXMiLCJvcGVyYXRvclRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudENvbnRhaW5lZCIsIkNPTlRBSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBWUEsT0E2QkM7ZUE3QnVCQTs7SUEyR1JDLDZCQUE2QjtlQUE3QkE7OztnRUFySGtCO3lCQUVSO3NCQUNTO3FCQUNHOzs7Ozs7QUFFdEMs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