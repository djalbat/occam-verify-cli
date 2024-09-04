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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../../verifier/node/metaLevel"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZS9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uID0gaXNTdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBpZiAoc3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbikge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgICAgdmVyaWZ5RGVyaXZlZFN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbixcbiAgICAgIHZlcmlmeVN0YXRlZFN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvblxuICAgIF07XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgoZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoIXN0YXRlbWVudE5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSBsb2NhbENvbnRleHQuaXNUZXJtR3JvdW5kZWQodGVybSk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBpbnRyaW5zaWNMZXZlbCA9IGxvY2FsQ29udGV4dC5pc0ludHJpbnNpY0xldmVsKCk7XG5cbiAgICBpZiAoaW50cmluc2ljTGV2ZWwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGF0IGludHJpbnNpYyBsZXZlbC5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudERlZmluZWRBc3NlcnRpb24iLCJpc1N0YXRlbWVudERlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZFN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInNvbWUiLCJkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiIsInN0YXRlbWVudE5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCIsInN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uIiwiaW50cmluc2ljTGV2ZWwiLCJpc0ludHJpbnNpY0xldmVsIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJtZXRhTGV2ZWxOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7MkRBVkQ7Z0VBQ1c7cUJBRVo7cUJBQ0k7c0JBQ1M7Ozs7OztBQUVuQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzFC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