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
var termNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term!"), variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!");
var verifyDefinedAssertionFunctions = [
    verifyUnstatedDefinedAssertion,
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
function verifyUnstatedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
    var unstatedDefinedAssertionVerified = false;
    if (!stated) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' unstated defined assertion..."), definedAssertionNode);
        var assertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode), termNode = termNodeQuery(definedAssertionNode);
        if (false) {
        ///
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode), variableDefined = localContext.isVariableDefined(variable);
            if (!assertionNegated) {
                if (variableDefined) {
                    unstatedDefinedAssertionVerified = true;
                }
            }
            if (assertionNegated) {
                if (!variableDefined) {
                    unstatedDefinedAssertionVerified = true;
                }
            }
        } else if (termNode !== null) {
            var term = termFromTermNode(termNode, localContext), termGrounded = localContext.isTermGrounded(term);
            if (!assertionNegated) {
                if (termGrounded) {
                    unstatedDefinedAssertionVerified = true;
                }
            }
            if (assertionNegated) {
                if (!termGrounded) {
                    unstatedDefinedAssertionVerified = true;
                }
            }
        }
        if (unstatedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' unstated defined assertion."), definedAssertionNode);
        }
    }
    return unstatedDefinedAssertionVerified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jb25zdCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlVbnN0YXRlZERlZmluZWRBc3NlcnRpb24sXG4gIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGFzc2lnbm1lbnRzID0gW107IC8vL1xuXG4gIGNvbnN0IHZlcmlmaWVkID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmICh2ZXJpZmllZCkge1xuICAgIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVVuc3RhdGVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB1bnN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyB1bnN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgdW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgdW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSBsb2NhbENvbnRleHQuaXNUZXJtR3JvdW5kZWQodGVybSk7XG5cbiAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgdW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgdW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgdW5zdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bnN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtcyA9IFtdO1xuXG4gIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICB9KTtcblxuICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5VW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwidW5zdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJhc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Hcm91bmRlZCIsImlzVGVybUdyb3VuZGVkIiwic3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidGVybXMiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmRDtnRUFDTztxQkFFUjtxQkFDSTt5QkFDUzs7Ozs7O0FBRW5DLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFNRSxrQ0FBa0M7SUFDdENDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTTix1QkFBdUJPLG9CQUFvQixFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUNwRyxJQUFJQztJQUVKLElBQU1DLHlCQUF5QkYsYUFBYUcsWUFBWSxDQUFDTjtJQUV6REcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCRix3QkFB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