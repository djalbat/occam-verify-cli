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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRbMF0vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS8vdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24sXG4gIHZlcmlmeVN0YXRlZENvbnRhaW5lZEFzc2VydGlvblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBzYXZlZFN0YXRlZCA9IHN0YXRlZDsgLy8vXG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBjb25zdCB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIHN0YXRlZCA9IHNhdmVkU3RhdGVkOyAvLy9cblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb25GdW5jdGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5lZ2F0ZWQgPSBhc3NlcnRpb25OZWdhdGVkOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIGRlcml2ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN0YXRlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInNhdmVkU3RhdGVkIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJhc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwibWV0YXZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJzdGF0ZWRDb250YWluZWRBc3NlcnRpb25WZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7Z0VBZk07eUJBRUs7cUJBQ0c7Ozs7OztBQUV0QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsdUNBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMsa0RBQ2xDRSw4QkFBOEJDLElBQUFBLGlCQUFVLEVBQUMsZ0RBQ3pDQyxrQ0FBa0NELElBQUFBLGlCQUFVLEVBQUM7QUFFbkQsSUFBTUUsb0NBQW9DO0lBQ3hDQztJQUNBQztDQUNE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