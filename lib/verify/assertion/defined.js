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
    var statedDefinedAssertionVerified;
    if (!derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."), definedAssertionNode);
        statedDefinedAssertionVerified = true;
        if (statedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."), definedAssertionNode);
        }
    }
    return statedDefinedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uXG4gIF07XG5cbiAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgdGVybUdyb3VuZGVkID0gbG9jYWxDb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24iLCJzb21lIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwic3RhdGVtZW50TmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzVGVybUdyb3VuZGVkIiwic3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJEQVREO3FCQUVEO3FCQUNJO3NCQUNTOzs7Ozs7QUFFbkMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLHVCQUF1Qkksb0JBQW9CLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQ3JHLElBQUlDO0lBRUosSUFBTUMseUJBQXlCRixhQUFhRyxZQUFZLENBQUNOO0lBRXpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJGLHdCQUF1QiwyQkFBeUJMO0lBRXJGLElBQU1RLGtDQUFrQztRQUN0Q0M7UUFDQUM7S0FDRDtJQUVETiwyQkFBMkJJLGdDQUFnQ0csSUFBSSxDQUFDLFNBQUNDO1FBQy9ELElBQU1SLDJCQUEyQlEsK0JBQStCWixzQkFBc0JDLGFBQWFDLFNBQVNDO1FBRTVHLElBQUlDLDBCQUEwQjtZQUM1QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLDBCQUEwQjtRQUM1QkQsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCUix3QkFBdUIseUJBQXVCTDtJQUN2RjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTSyw4QkFBOEJULG9CQUFvQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUM3RixJQUFJVyxrQ0FBa0M7SUFFdEMsSUFBSVosU0FBUztRQUNYLElBQU1HLHlCQUF5QkYsYUFBYUcsWUFBWSxDQUFDTjtRQUV6REcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCRix3QkFBdUIsbUNBQWlDTDtRQUU3RixJQUFNZSxtQkFBbUJDLElBQUFBLDBCQUFrQixFQUFDaEIsdUJBQ3RDaUIsZUFBZWxCLGtCQUFrQkMsdUJBQ2pDa0IsV0FBV3JCLGNBQWNHO1FBRS9CLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlpQixpQkFBaUIsTUFBTTtZQUNoQyxJQUFNRSxXQUFXaEIsYUFBYWlCLDBCQUEwQixDQUFDSDtZQUV6RCxJQUFJRSxhQUFhLE1BQU07Z0JBQ3JCLElBQU1FLGtCQUFrQmxCLGFBQWFtQixpQkFBaUIsQ0FBQ0g7Z0JBRXZELElBQUksQ0FBQ0osa0JBQWtCO29CQUNyQixJQUFJTSxpQkFBaUI7d0JBQ25CUCxrQ0FBa0M7b0JBQ3BDO2dCQUNGO2dCQUVBLElBQUlDLGtCQUFrQjtvQkFDcEIsSUFBSSxDQUFDTSxpQkFBaUI7d0JBQ3BCUCxrQ0FBa0M7b0JBQ3BDO2dCQUNGO1lBQ0Y7UUFDRixPQUFPLElBQUlJLGFBQWEsTUFBTTtZQUM1QixJQUFNSyxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDUCxVQUFVSyxPQUFPcEIsY0FBYztnQkFDdkQsSUFBTXVCLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDtZQUVOLElBQUlGLGNBQWM7Z0JBQ2hCLElBQU1HLFlBQVlDLElBQUFBLFlBQUssRUFBQ0wsUUFDbEJNLE9BQU9GLFdBQ1BHLGVBQWUzQixhQUFhNEIsY0FBYyxDQUFDRjtnQkFFakQsSUFBSSxDQUFDZCxrQkFBa0I7b0JBQ3JCLElBQUllLGNBQWM7d0JBQ2hCaEIsa0NBQWtDO29CQUNwQztnQkFDRjtnQkFFQSxJQUFJQyxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ2UsY0FBYzt3QkFDakJoQixrQ0FBa0M7b0JBQ3BDO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLGlDQUFpQztZQUNuQ1gsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCUix3QkFBdUIsaUNBQStCTDtRQUMvRjtJQUNGO0lBRUEsT0FBT2M7QUFDVDtBQUVBLFNBQVNKLDZCQUE2QlYsb0JBQW9CLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzVGLElBQUk2QjtJQUVKLElBQUksQ0FBQzlCLFNBQVM7UUFDWixJQUFNRyx5QkFBeUJGLGFBQWFHLFlBQVksQ0FBQ047UUFFekRHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkYsd0JBQXVCLGtDQUFnQ0w7UUFFNUZnQyxpQ0FBaUM7UUFFakMsSUFBSUEsZ0NBQWdDO1lBQ2xDN0IsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCUix3QkFBdUIsZ0NBQThCTDtRQUM5RjtJQUNGO0lBRUEsT0FBT2dDO0FBQ1QifQ==