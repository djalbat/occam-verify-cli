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
        return verifyStatementAsDefinedAssertion;
    },
    isStatementDefinedAssertion: function() {
        return isStatementDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _verify = require("../utilities/verify");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/statement/term!"), variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!"), operatorTerminalNodesQuery = (0, _query.nodesQuery)("/statement/@operator");
function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedAssertion = false;
    var statementDefinedAssertion = isStatementDefinedAssertion(statementNode);
    if (statementDefinedAssertion) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a defined assertion..."), statementNode);
        var definedAssertionFunctions = [
            verifyDerivedStatementAsDefinedAssertion,
            verifyStatedStatementAsDefinedAssertion
        ];
        statementVerifiedAsDefinedAssertion = definedAssertionFunctions.some(function(definedAssertionFunction) {
            var statementVerifiedAsDefinedAssertion = definedAssertionFunction(statementNode, assignments, derived, localContext);
            if (statementVerifiedAsDefinedAssertion) {
                return true;
            }
        });
        if (statementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return statementVerifiedAsDefinedAssertion;
}
function verifyDerivedStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var derivedStatementVerifiedAsDefeindAssertion = false;
    if (derived) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the derived '".concat(statementString, "' statement as a defined assertion..."), statementNode);
        var statementNegated = (0, _verify.isStatementNegated)(statementNode), variableNode = variableNodeQuery(statementNode), termNode = termNodeQuery(statementNode);
        if (false) {
        ///
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode);
            if (variable !== null) {
                var variableDefined = localContext.isVariableDefined(variable);
                if (!statementNegated) {
                    if (variableDefined) {
                        derivedStatementVerifiedAsDefeindAssertion = true;
                    }
                }
                if (statementNegated) {
                    if (!variableDefined) {
                        derivedStatementVerifiedAsDefeindAssertion = true;
                    }
                }
            }
        } else if (termNode !== null) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            if (termVerified) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = localContext.isTermGrounded(term);
                if (!statementNegated) {
                    if (termGrounded) {
                        derivedStatementVerifiedAsDefeindAssertion = true;
                    }
                }
                if (statementNegated) {
                    if (!termGrounded) {
                        derivedStatementVerifiedAsDefeindAssertion = true;
                    }
                }
            }
        }
        if (derivedStatementVerifiedAsDefeindAssertion) {
            localContext.debug("...verified the derived '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return derivedStatementVerifiedAsDefeindAssertion;
}
function verifyStatedStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var statedStatementVerifiedAsDefinedAssertion = false;
    if (!derived) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the stated '".concat(statementString, "' statement as a defined assertion..."), statementNode);
        var intrinsicLevel = localContext.isIntrinsicLevel();
        if (intrinsicLevel) {
            localContext.debug("The stated '".concat(statementString, "' statement as a defined assertion cannot be verified at intrinsic level."), statementNode);
        } else {
            var nonTerminalNode = statementNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            statedStatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
        }
        if (statedStatementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the stated '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return statedStatementVerifiedAsDefinedAssertion;
}
function isStatementDefinedAssertion(statementNode) {
    var operatorTerminalNodes = operatorTerminalNodesQuery(statementNode), statementDefinedAssertion = operatorTerminalNodes.some(function(operatorTerminalNode) {
        var content = operatorTerminalNode.getContent(), contentDefined = content === _constants.DEFINED;
        if (contentDefined) {
            return true;
        }
    });
    return statementDefinedAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZVZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2RlL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRklORUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc1N0YXRlbWVudE5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG9wZXJhdG9yVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvQG9wZXJhdG9yXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uID0gaXNTdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICAgIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb25cbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBkZXJpdmVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNTdGF0ZW1lbnROZWdhdGVkKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICBpZiAoIXN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgZGVyaXZlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIHN0YXRlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWwgPSBsb2NhbENvbnRleHQuaXNJbnRyaW5zaWNMZXZlbCgpO1xuXG4gICAgaWYgKGludHJpbnNpY0xldmVsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGF0IGludHJpbnNpYyBsZXZlbC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUpIHtcbiAgY29uc3Qgb3BlcmF0b3JUZXJtaW5hbE5vZGVzID0gb3BlcmF0b3JUZXJtaW5hbE5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHN0YXRlbWVudERlZmluZWRBc3NlcnRpb24gPSBvcGVyYXRvclRlcm1pbmFsTm9kZXMuc29tZSgob3BlcmF0b3JUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gb3BlcmF0b3JUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnREZWZpbmVkID0gKGNvbnRlbnQgPT09IERFRklORUQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnREZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsImlzU3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm9wZXJhdG9yVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudERlZmluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImRlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uIiwic29tZSIsImRlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uIiwic3RhdGVtZW50TmVnYXRlZCIsImlzU3RhdGVtZW50TmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzVGVybUdyb3VuZGVkIiwic3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24iLCJpbnRyaW5zaWNMZXZlbCIsImlzSW50cmluc2ljTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm9wZXJhdG9yVGVybWluYWxOb2RlcyIsIm9wZXJhdG9yVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50RGVmaW5lZCIsIkRFRklORUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNBLE9BNkJDO2VBN0J1QkE7O0lBaUlSQywyQkFBMkI7ZUFBM0JBOzs7MkRBN0lPO2dFQUNXO3FCQUVaO3lCQUNFO3NCQUNXO3FCQUNHOzs7Ozs7QUFFdEMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM5QkUsNkJBQTZCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRS9CLFNBQVNOLGtDQUFrQ08sYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUN6RyxJQUFJQyxzQ0FBc0M7SUFFMUMsSUFBTUMsNEJBQTRCWCw0QkFBNEJNO0lBRTlELElBQUlLLDJCQUEyQjtRQUM3QixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ1A7UUFFbERHLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLDBDQUF3Q047UUFFN0YsSUFBTVMsNEJBQTRCO1lBQ2hDQztZQUNBQztTQUNEO1FBRURQLHND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