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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame/metavariable!"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//metavariable");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnQvL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgc2F2ZWRTdGF0ZWQgPSBzdGF0ZWQ7IC8vL1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgY29uc3QgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICBzdGF0ZWQgPSBzYXZlZFN0YXRlZDsgLy8vXG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGFzc2VydGlvbk5lZ2F0ZWQ7IC8vL1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInNhdmVkU3RhdGVkIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwiYXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7Z0VBZk07eUJBRUs7cUJBQ0c7Ozs7OztBQUV0QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyx3QkFBd0JELElB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