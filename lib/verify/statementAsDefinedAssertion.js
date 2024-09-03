"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatementAsDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _verify = require("../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/statement/term!"), variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!");
function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZVZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2RlL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzU3RhdGVtZW50TmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBkZXJpdmVkICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNTdGF0ZW1lbnROZWdhdGVkKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICBpZiAoIXN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgZGVyaXZlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIHN0YXRlZCAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWwgPSBsb2NhbENvbnRleHQuaXNJbnRyaW5zaWNMZXZlbCgpO1xuXG4gICAgaWYgKGludHJpbnNpY0xldmVsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGF0IGludHJpbnNpYyBsZXZlbC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdGF0ZWQgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24iLCJzb21lIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24iLCJzdGF0ZW1lbnROZWdhdGVkIiwiaXNTdGF0ZW1lbnROZWdhdGVkIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybUdyb3VuZGVkIiwiaXNUZXJtR3JvdW5kZWQiLCJzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImludHJpbnNpY0xldmVsIiwiaXNJbnRyaW5zaWNMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzJEQVZEO2dFQUNXO3FCQUVaO3FCQUNJO3NCQUNTOzs7Ozs7QUFFbkMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLGtDQUFrQ0ksYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUN6RyxJQUFJQztJQUVKLElBQU1DLGtCQUFrQkYsYUFBYUcsWUFBWSxDQUFDTjtJQUVsREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsMENBQXdDTDtJQUU3RixJQUFNUSw0QkFBNEI7UUFDaENDO1FBQ0FDO0tBQ0Q7SUFFRE4sc0NBQXNDSSwwQkFBMEJHLElBQUksQ0FBQyxTQUFDQztRQUNwRSxJQUFNUixzQ0FBc0NRLHlCQUF5QlosZUFBZUMsYUFBYUMsU0FBU0M7UUFFMUcsSUFBSUMscUNBQXFDO1lBQ3ZDLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEscUNBQXFDO1FBQ3ZDRCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJSLGlCQUFnQix3Q0FBc0NMO0lBQy9G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