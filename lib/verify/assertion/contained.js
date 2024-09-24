"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyContainedAssertion;
    }
});
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../../verifier/metaLevel"));
var _assertion = require("../../utilities/assertion");
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame/statement!/metavariable!"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//metavariable");
var verifyContainedAssertionFunctions = [
    verifyDerivedContainedAssertion,
    verifyStatedContainedAssertion
];
function verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
    var containedAssertionVerified = false;
    var containedAssertionString = localContext.nodeAsString(containedAssertionNode), savedStated = stated; ///
    localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."), containedAssertionNode);
    assignments = null; ///
    stated = true; ///
    var verified = _metaLevel.default.verify(containedAssertionNode, assignments, stated, localContext);
    stated = savedStated; ///
    if (verified) {
        containedAssertionVerified = verifyContainedAssertionFunctions.some(function(verifyContainedAssertionFunction) {
            var containedAssertionVerified = verifyContainedAssertionFunction(containedAssertionNode, assignments, stated, localContext);
            if (containedAssertionVerified) {
                return true;
            }
        });
    }
    if (containedAssertionVerified) {
        localContext.debug("...verified the '".concat(containedAssertionString, "' contained assertion."), containedAssertionNode);
    }
    return containedAssertionVerified;
}
function verifyDerivedContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
    var derivedContainedAssertionVerified = false;
    if (!stated) {
        var containedAssertionString = localContext.nodeAsString(containedAssertionNode);
        localContext.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."), containedAssertionNode);
        var metavariableNode = metavariableNodeQuery(containedAssertionNode);
        if (metavariableNode !== null) {
            var assertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), variableNode = variableNodeQuery(containedAssertionNode), negated = assertionNegated; ///
            if (false) {
            ///
            } else if (metavariableNode !== null) {
                var statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode), variableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some(function(statementMetavariableNode) {
                    var variableNodeMatchesStatementMetavariableNode = metavariableNode.match(statementMetavariableNode);
                    if (variableNodeMatchesStatementMetavariableNode) {
                        return true;
                    }
                });
                if (!negated) {
                    if (variableNodeMatchesStatementMetavariableNode) {
                        derivedContainedAssertionVerified = true;
                    }
                }
                if (negated) {
                    if (!variableNodeMatchesStatementMetavariableNode) {
                        derivedContainedAssertionVerified = true;
                    }
                }
            } else if (variableNode !== null) {
                var statementVariableNodes = statementVariableNodesQuery(containedAssertionNode), variableNodeMatchesStatementVariableNode = statementVariableNodes.some(function(statementVariableNode) {
                    var variableNodeMatchesStatementVariableNode = variableNode.match(statementVariableNode);
                    if (variableNodeMatchesStatementVariableNode) {
                        return true;
                    }
                });
                if (!negated) {
                    if (variableNodeMatchesStatementVariableNode) {
                        derivedContainedAssertionVerified = true;
                    }
                }
                if (negated) {
                    if (!variableNodeMatchesStatementVariableNode) {
                        derivedContainedAssertionVerified = true;
                    }
                }
            }
        }
        if (derivedContainedAssertionVerified) {
            localContext.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."), containedAssertionNode);
        }
    }
    return derivedContainedAssertionVerified;
}
function verifyStatedContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
    var statedContainedAssertionVerified;
    if (stated) {
        var containedAssertionString = localContext.nodeAsString(containedAssertionNode);
        localContext.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."), containedAssertionNode);
        statedContainedAssertionVerified = true;
        if (statedContainedAssertionVerified) {
            localContext.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."), containedAssertionNode);
        }
    }
    return statedContainedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZS9zdGF0ZW1lbnQhL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnQvL3ZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3N0YXRlbWVudC8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24sXG4gIHZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBzYXZlZFN0YXRlZCA9IHN0YXRlZDsgLy8vXG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBjb25zdCB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIHN0YXRlZCA9IHNhdmVkU3RhdGVkOyAvLy9cblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBuZWdhdGVkID0gYXNzZXJ0aW9uTmVnYXRlZDsgLy8vXG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic2F2ZWRTdGF0ZWQiLCJ0cmFjZSIsInZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzb21lIiwidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJhc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwibmVnYXRlZCIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2giLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZSIsInN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OztnRUFmTTt5QkFFSztxQkFDRzs7Ozs7O0FBRXRDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJD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