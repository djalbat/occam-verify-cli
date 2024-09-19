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
var _assertion = require("../../utilities/assertion");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/statement[-1]/metavariable!");
var verifyDefinedAssertionFunctions = [
    verifyDerivedDefinedAssertion,
    verifyStatedDefinedAssertion
];
function verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
    var definedAssertionVerified;
    var definedAssertionString = localContext.nodeAsString(definedAssertionNode), savedStated = stated; ///;
    localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
    assignments = []; ///
    stated = true; ///
    var verified = _metaLevel.default.verify(definedAssertionNode, assignments, stated, localContext);
    stated = savedStated; ///
    if (verified) {
        definedAssertionVerified = verifyDefinedAssertionFunctions.some(function(verifyDefinedAssertionFunction) {
            var definedAssertionVerified = verifyDefinedAssertionFunction(definedAssertionNode, assignments, stated, localContext);
            if (definedAssertionVerified) {
                return true;
            }
        });
    }
    if (definedAssertionVerified) {
        localContext.debug("...verified the '".concat(definedAssertionString, "' defined assertion."), definedAssertionNode);
    }
    return definedAssertionVerified;
}
function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
    var derivedDefinedAssertionVerified = false;
    if (!stated) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."), definedAssertionNode);
        var assertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), metavariableNode = metavariableNodeQuery(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode);
        if (false) {
        ///
        } else if (metavariableNode !== null) {
            var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode), metavariableDefined = localContext.isMetavariableDefined(metavariable);
            if (!assertionNegated) {
                if (metavariableDefined) {
                    derivedDefinedAssertionVerified = true;
                }
            }
            if (assertionNegated) {
                if (!metavariableDefined) {
                    derivedDefinedAssertionVerified = true;
                }
            }
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode), variableDefined = localContext.isVariableDefined(variable);
            if (!assertionNegated) {
                if (variableDefined) {
                    derivedDefinedAssertionVerified = true;
                }
            }
            if (assertionNegated) {
                if (!variableDefined) {
                    derivedDefinedAssertionVerified = true;
                }
            }
        }
        if (derivedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."), definedAssertionNode);
        }
    }
    return derivedDefinedAssertionVerified;
}
function verifyStatedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
    var statedDefinedAssertionVerified;
    if (stated) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."), definedAssertionNode);
        statedDefinedAssertionVerified = true;
        if (statedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."), definedAssertionNode);
        }
    }
    return statedDefinedAssertionVerified;
}
function termFromTermNode(termNode, localContext) {
    var terms = [];
    (0, _term.default)(termNode, terms, localContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    var firstTerm = (0, _array.first)(terms), term = firstTerm; ///
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS9tZXRhdmFyaWFibGUhXCIpO1xuXG5jb25zdCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbixcbiAgdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBzYXZlZFN0YXRlZCA9IHN0YXRlZDsgLy8vO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgYXNzaWdubWVudHMgPSBbXTsgLy8vXG5cbiAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gIGNvbnN0IHZlcmlmaWVkID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIHN0YXRlZCA9IHNhdmVkU3RhdGVkOyAvLy9cblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWFzc2VydGlvbk5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAoIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IFtdO1xuXG4gIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICB9KTtcblxuICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInNhdmVkU3RhdGVkIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtcyIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFp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