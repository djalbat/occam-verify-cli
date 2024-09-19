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
var variableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement[0]/metavariable"), statementVariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement[-1]//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/containedAssertion/statement[-1]//metavariable");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRbMF0vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS8vdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24sXG4gIHZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBzYXZlZFN0YXRlZCA9IHN0YXRlZDsgLy8vXG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBhc3NpZ25tZW50cyA9IFtdOyAvLy9cblxuICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgY29uc3QgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICBzdGF0ZWQgPSBzYXZlZFN0YXRlZDsgLy8vXG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZENvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBuZWdhdGVkID0gYXNzZXJ0aW9uTmVnYXRlZDsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCwgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzYXZlZFN0YXRlZCIsInRyYWNlIiwidmVyaWZpZWQiLCJtZXRhTGV2ZWxWZXJpZmllciIsInZlcmlmeSIsInNvbWUiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiYXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJuZWdhdGVkIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXMiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O2dFQWZNO3lCQUVLO3FCQUNHOzs7Ozs7QUFFdEMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHVDQUM5QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLGtEQUNsQ0UsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDLGdEQUN6Q0Msa0NBQWtDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5ELElBQU1FLG9DQUFvQztJQUN4Q0M7SUFDQUM7Q0FDRDtB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