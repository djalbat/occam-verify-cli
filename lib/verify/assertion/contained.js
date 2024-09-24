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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame[0]/metavariable"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement[-1]//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement[-1]//metavariable");
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
        var assertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), metavariableNode = metavariableNodeQuery(containedAssertionNode), variableNode = variableNodeQuery(containedAssertionNode), negated = assertionNegated; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZVswXS9tZXRhdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRbLTFdLy92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRbLTFdLy9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbixcbiAgdmVyaWZ5U3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHNhdmVkU3RhdGVkID0gc3RhdGVkOyAvLy9cblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gIGNvbnN0IHZlcmlmaWVkID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgc3RhdGVkID0gc2F2ZWRTdGF0ZWQ7IC8vL1xuXG4gIGlmICh2ZXJpZmllZCkge1xuICAgIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbmVnYXRlZCA9IGFzc2VydGlvbk5lZ2F0ZWQ7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic2F2ZWRTdGF0ZWQiLCJ0cmFjZSIsInZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzb21lIiwidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsImFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibmVnYXRlZCIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2giLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZSIsInN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OztnRUFmTTt5QkFFSztxQkFDRzs7Ozs7O0FBRXRDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQyw4Q0FDbENFLDhCQUE4QkMsSUFBQUEsaUJBQVUsRUFBQyxnREFDekNDLGtDQUFrQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuRCxJQUFNRSxvQ0FBb0M7SUFDeENDO0lBQ0FDO0NBQ0Q7QUFF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