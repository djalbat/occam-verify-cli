"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatementAsContainedAssertion;
    }
});
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _verify = require("../utilities/verify");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!"), metastatementVariableNodesQuery = (0, _query.nodesQuery)("/statement/statement//variable");
function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsContainedAssertion;
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
    return statementVerifiedAsContainedAssertion;
}
function verifyStatementAsDerivedContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedContainedAssertion = false;
    if (derived) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the derived '".concat(statementString, "' statement as a contained assertion..."), statementNode);
        var statementNegated = (0, _verify.isAssertionNegated)(statementNode), variableNode = variableNodeQuery(statementNode), negated = statementNegated; ///
        if (false) {
        ///
        } else if (variableNode !== null) {
            var metastatementVariableNodes = metastatementVariableNodesQuery(statementNode), variableNodeMatchesMetaArgumentVariableNode = metastatementVariableNodes.some(function(metastatementVariableNode) {
                var variableNodeMatchesMetaArgumentVariableNode = variableNode.match(metastatementVariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxOb2RlVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGUvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC9zdGF0ZW1lbnQvL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IHN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKChzdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBzdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0Rlcml2ZWRDb250YWluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgZGVyaXZlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG5lZ2F0ZWQgPSBzdGF0ZW1lbnROZWdhdGVkOyAgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gbWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgobWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZENvbnRhaW5lZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzTWV0YUFyZ3VtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRDb250YWluZWRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBkZXJpdmVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQ29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1N0YXRlZENvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWwgPSBsb2NhbENvbnRleHQuaXNJbnRyaW5zaWNMZXZlbCgpO1xuXG4gICAgaWYgKGludHJpbnNpY0xldmVsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbiBjYW5ub3QgYmUgdmVyaWZpZWQgYXQgaW50cmluc2ljIGxldmVsLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1N0YXRlZENvbnRhaW5lZEFzc2VydGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNTdGF0ZWRDb250YWluZWRBc3NlcnRpb24iLCJzb21lIiwic3RhdGVtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsInN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RhdGVtZW50TmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWQiLCJtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNNZXRhQXJndW1lbnRWYXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50VmFyaWFibGVOb2RlIiwibWF0Y2giLCJzdGF0ZW1lbnRWZXJpZmllZEFzU3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uIiwiaW50cmluc2ljTGV2ZWwiLCJpc0ludHJpbnNpY0xldmVsIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJtZXRhTGV2ZWxOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O2dFQVJVO3NCQUVDO3FCQUNHOzs7Ozs7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUM5QkMsa0NBQWtDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXBDLFNBQVNKLG9DQUFv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