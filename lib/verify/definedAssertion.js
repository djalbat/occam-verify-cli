"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
var _verify = require("../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/statement/term!"), variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!");
function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedAssertion = false;
    var statementDefinedAssertion = isStatementDefinedAssertion(definedAssertionNode);
    if (statementDefinedAssertion) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' statement as a defined assertion..."), definedAssertionNode);
        var definedAssertionFunctions = [
            verifyDerivedStatementAsDefinedAssertion,
            verifyStatedStatementAsDefinedAssertion
        ];
        statementVerifiedAsDefinedAssertion = definedAssertionFunctions.some(function(definedAssertionFunction) {
            var statementVerifiedAsDefinedAssertion = definedAssertionFunction(definedAssertionNode, assignments, derived, localContext);
            if (statementVerifiedAsDefinedAssertion) {
                return true;
            }
        });
        if (statementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' statement as a defined assertion."), definedAssertionNode);
        }
    }
    return statementVerifiedAsDefinedAssertion;
}
function verifyDerivedStatementAsDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var derivedStatementVerifiedAsDefeindAssertion = false;
    if (derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' derived statement as a defined assertion..."), definedAssertionNode);
        var statementNegated = (0, _verify.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode), termNode = termNodeQuery(definedAssertionNode);
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
            localContext.debug("...verified the '".concat(definedAssertionString, "' derived statement as a defined assertion."), definedAssertionNode);
        }
    }
    return derivedStatementVerifiedAsDefeindAssertion;
}
function verifyStatedStatementAsDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var statedStatementVerifiedAsDefinedAssertion = false;
    if (!derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' stated statement as a defined assertion..."), definedAssertionNode);
        var intrinsicLevel = localContext.isIntrinsicLevel();
        if (intrinsicLevel) {
            localContext.debug("The '".concat(definedAssertionString, "' stated statement as a defined assertion cannot be verified at intrinsic level."), definedAssertionNode);
        } else {
            var nonTerminalNode = definedAssertionNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            statedStatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
        }
        if (statedStatementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' stated statement as a defined assertion."), definedAssertionNode);
        }
    }
    return statedStatementVerifiedAsDefinedAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5lZEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZJTkVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJpZnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbiA9IGlzU3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudERlZmluZWRBc3NlcnRpb24pIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICAgIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb25cbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgdGVybUdyb3VuZGVkID0gbG9jYWxDb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkU3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWwgPSBsb2NhbENvbnRleHQuaXNJbnRyaW5zaWNMZXZlbCgpO1xuXG4gICAgaWYgKGludHJpbnNpY0xldmVsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZCBhdCBpbnRyaW5zaWMgbGV2ZWwuYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uIiwiaXNTdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24iLCJzb21lIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24iLCJzdGF0ZW1lbnROZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybUdyb3VuZGVkIiwiaXNUZXJtR3JvdW5kZWQiLCJzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImludHJpbnNpY0xldmVsIiwiaXNJbnRyaW5zaWNMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7OzJEQVhEO2dFQUNXO3FCQUVaO3lCQUNFO3FCQUNFO3NCQUNTOzs7Ozs7QUFFbkMsSUFBTUMsZ0JBQWdCQyxJ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