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
    var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
    localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
    assignments = []; ///
    var verified = _metaLevel.default.verify(definedAssertionNode, assignments, stated, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vc3RhdGVtZW50Wy0xXS9tZXRhdmFyaWFibGUhXCIpO1xuXG5jb25zdCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbixcbiAgdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgYXNzaWdubWVudHMgPSBbXTsgLy8vXG5cbiAgY29uc3QgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFzc2VydGlvbk5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFzc2VydGlvbk5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdGVybXMgPSBbXTtcblxuICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgfSk7XG5cbiAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICB0ZXJtID0gZmlyc3RUZXJtOyAvLy9cblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzb21lIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiYXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1zIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OzJEQWZEO2dFQUNPO3FCQUVSO3FCQUNJO3lCQUNTOzs7Ozs7QUFFbkMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHFDQUM5QkMsd0JBQXdCRCxJQUFB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