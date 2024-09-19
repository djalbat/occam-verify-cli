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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/metavariable"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement//metavariable");
var verifyContainedAssertionFunctions = [
    verifyDerivedContainedAssertion,
    verifyStatedContainedAssertion
];
function verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
    var containedAssertionVerified = false;
    var containedAssertionString = localContext.nodeAsString(containedAssertionNode), savedStated = stated; ///
    localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."), containedAssertionNode);
    assignments = []; ///
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
        var assertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), metavariableNode = metavariableNodeQuery(containedAssertionNode), variableNode = variableNodeQuery(containedAssertionNode), negated = assertionNegated; ///
        if (false) {
        ///
        } else if (metavariableNode !== null) {
            var statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode), variableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some(function(statementMetavariableNode) {
                var variableNodeMatchesStatementMetavariableNode = variableNode.match(statementMetavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnQvL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgc2F2ZWRTdGF0ZWQgPSBzdGF0ZWQ7IC8vL1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgYXNzaWdubWVudHMgPSBbXTsgLy8vXG5cbiAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gIGNvbnN0IHZlcmlmaWVkID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgc3RhdGVkID0gc2F2ZWRTdGF0ZWQ7IC8vL1xuXG4gIGlmICh2ZXJpZmllZCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbmVnYXRlZCA9IGFzc2VydGlvbk5lZ2F0ZWQ7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzYXZlZFN0YXRlZCIsInRyYWNlIiwidmVyaWZpZWQiLCJtZXRhTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsInNvbWUiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiYXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJuZWdhdGVkIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O2dFQWZNO3lCQUVLO3FCQUNHOzs7Ozs7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUM5QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLHFDQUNsQ0UsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDLDRDQUN6Q0Msa0NBQWtDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5ELElBQU1FLG9DQUFvQztJQUN4Q0M7SUFDQUM7Q0FDRDtBQUVjLFNBQVNULHlCQUF5QlUsc0JBQXNCLEVBQUVD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