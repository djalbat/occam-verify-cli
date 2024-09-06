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
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../../verifier/metaLevel"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
var _verify = require("../../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/statement/term!"), variableNodeQuery = (0, _query.nodeQuery)("/statement/term/variable!");
function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var definedAssertionVerified;
    var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
    localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
    var verifyDefinedAssertionFunctions = [
        verifyDerivedDefinedAssertion,
        verifyStatedDefinedAssertion
    ];
    definedAssertionVerified = verifyDefinedAssertionFunctions.some(function(verifyDefinedAssertionFunction) {
        var definedAssertionVerified = verifyDefinedAssertionFunction(definedAssertionNode, assignments, derived, localContext);
        if (definedAssertionVerified) {
            return true;
        }
    });
    if (definedAssertionVerified) {
        localContext.debug("...verified the '".concat(definedAssertionString, "' defined assertion."), definedAssertionNode);
    }
    return definedAssertionVerified;
}
function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var derivedDefinedAssertionVerified = false;
    if (derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."), definedAssertionNode);
        var statementNegated = (0, _verify.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode), termNode = termNodeQuery(definedAssertionNode);
        if (false) {
        ///
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode);
            if (variable !== null) {
                var variableDefined = localContext.isVariableDefined(variable);
                if (!statementNegated) {
                    if (variableDefined) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
                if (statementNegated) {
                    if (!variableDefined) {
                        derivedDefinedAssertionVerified = true;
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
                        derivedDefinedAssertionVerified = true;
                    }
                }
                if (statementNegated) {
                    if (!termGrounded) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
            }
        }
        if (derivedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."), definedAssertionNode);
        }
    }
    return derivedDefinedAssertionVerified;
}
function verifyStatedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var statedDefinedAssertionVerified = false;
    if (!derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."), definedAssertionNode);
        var nonTerminalNode = definedAssertionNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statedDefinedAssertionVerified = nonTerminalNodeVerified; ///
        if (statedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."), definedAssertionNode);
        }
    }
    return statedDefinedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvblxuICBdO1xuXG4gIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoIXN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICBpZiAoIXN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsInN0YXRlbWVudE5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCIsInN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7MkRBVkQ7Z0VBQ087cUJBRVI7cUJBQ0k7c0JBQ1M7Ozs7OztBQUVuQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzFCQyxvQkFB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