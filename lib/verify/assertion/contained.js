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
var termVariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame/metavariable!"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//metavariable");
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
        var assertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode), termVariableNode = termVariableNodeQuery(containedAssertionNode), negated = assertionNegated; ///
        if (false) {
        ///
        } else if (frameMetavariableNode !== null) {
            var statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode), frameMetavariableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some(function(statementMetavariableNode) {
                var frameMetavariableNodeMatchesStatementMetavariableNode = frameMetavariableNode.match(statementMetavariableNode);
                if (frameMetavariableNodeMatchesStatementMetavariableNode) {
                    return true;
                }
            });
            if (!negated) {
                if (frameMetavariableNodeMatchesStatementMetavariableNode) {
                    derivedContainedAssertionVerified = true;
                }
            }
            if (negated) {
                if (!frameMetavariableNodeMatchesStatementMetavariableNode) {
                    derivedContainedAssertionVerified = true;
                }
            }
        } else if (termVariableNode !== null) {
            var statementVariableNodes = statementVariableNodesQuery(containedAssertionNode), termVariableNodeMatchesStatementVariableNode = statementVariableNodes.some(function(statementVariableNode) {
                var termVariableNodeMatchesStatementVariableNode = termVariableNode.match(statementVariableNode);
                if (termVariableNodeMatchesStatementVariableNode) {
                    return true;
                }
            });
            if (!negated) {
                if (termVariableNodeMatchesStatementVariableNode) {
                    derivedContainedAssertionVerified = true;
                }
            }
            if (negated) {
                if (!termVariableNodeMatchesStatementVariableNode) {
                    derivedContainedAssertionVerified = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnQvL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgc2F2ZWRTdGF0ZWQgPSBzdGF0ZWQ7IC8vL1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgY29uc3QgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICBzdGF0ZWQgPSBzYXZlZFN0YXRlZDsgLy8vXG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBuZWdhdGVkID0gYXNzZXJ0aW9uTmVnYXRlZDsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIWZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIXRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInNhdmVkU3RhdGVkIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJhc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O2dFQWZNO3lCQUVLO3FCQUNHOzs7Ozs7QUFFdEMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHVDQUNsQ0Ms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