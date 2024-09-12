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
    var statedDefinedAssertionVerified = false;
    if (!derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."), definedAssertionNode);
        debugger;
        if (statedDefinedAssertionVerified) {
            localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."), definedAssertionNode);
        }
    }
    return statedDefinedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uXG4gIF07XG5cbiAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgdGVybUdyb3VuZGVkID0gbG9jYWxDb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICAgIGlmICghc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgZGVidWdnZXJcblxuICAgIGlmIChzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJzdGF0ZW1lbnROZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybUdyb3VuZGVkIiwiaXNUZXJtR3JvdW5kZWQiLCJzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MkRBVEQ7cUJBRUQ7cUJBQ0k7c0JBQ1M7Ozs7OztBQUVuQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0YsdUJBQXVCSSxvQkFBb0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDckcsSUFBSUM7SUFFSixJQUFNQyx5QkFBeUJGLGFBQWFHLFlBQVksQ0FBQ047SUFFekRHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkYsd0JBQXVCLDJCQUF5Qkw7SUFFckYsSUFBTVEsa0NBQWtDO1FBQ3RDQztRQUNBQztLQUNEO0lBRUROLDJCQUEyQkksZ0NBQWdDRyxJQUFJLENBQUMsU0FBQ0M7UUFDL0QsSUFBTVIsMkJBQTJCUSwrQkFBK0JaLHNCQUFzQkMsYUFBYUMsU0FBU0M7UUFFNUcsSUFBSUMsMEJBQTBCO1lBQzVCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsMEJBQTBCO1FBQzVCRCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBMEMsT0FBdkJSLHdCQUF1Qix5QkFBdUJMO0lBQ3ZGO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNLLDhCQUE4QlQsb0JBQW9CLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzdGLElBQUlXLGtDQUFrQztJQUV0QyxJQUFJWixTQUFTO1FBQ1gsSUFBTUcseUJBQXlCRixhQUFhRyxZQUFZLENBQUNOO1FBRXpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJGLHdCQUF1QixtQ0FBaUNMO1FBRTdGLElBQU1lLG1CQUFtQkMsSUFBQUEsMEJBQWtCLEVBQUNoQix1QkFDdENpQixlQUFlbEIsa0JBQWtCQyx1QkFDakNrQixXQUFXckIsY0FBY0c7UUFFL0IsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSWlCLGlCQUFpQixNQUFNO1lBQ2hDLElBQU1FLFdBQVdoQixhQUFhaUIsMEJBQTBCLENBQUNIO1lBRXpELElBQUlFLGFBQWEsTUFBTTtnQkFDckIsSUFBTUUsa0JBQWtCbEIsYUFBYW1CLGlCQUFpQixDQUFDSDtnQkFFdkQsSUFBSSxDQUFDSixrQkFBa0I7b0JBQ3JCLElBQUlNLGlCQUFpQjt3QkFDbkJQLGtDQUFrQztvQkFDcEM7Z0JBQ0Y7Z0JBRUEsSUFBSUMsa0JBQWtCO29CQUNwQixJQUFJLENBQUNNLGlCQUFpQjt3QkFDcEJQLGtDQUFrQztvQkFDcEM7Z0JBQ0Y7WUFDRjtRQUNGLE9BQU8sSUFBSUksYUFBYSxNQUFNO1lBQzVCLElBQU1LLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNQLFVBQVVLLE9BQU9wQixjQUFjO2dCQUN2RCxJQUFNdUIsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sSUFBSUYsY0FBYztnQkFDaEIsSUFBTUcsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsZUFBZTNCLGFBQWE0QixjQUFjLENBQUNGO2dCQUVqRCxJQUFJLENBQUNkLGtCQUFrQjtvQkFDckIsSUFBSWUsY0FBYzt3QkFDaEJoQixrQ0FBa0M7b0JBQ3BDO2dCQUNGO2dCQUVBLElBQUlDLGtCQUFrQjtvQkFDcEIsSUFBSSxDQUFDZSxjQUFjO3dCQUNqQmhCLGtDQUFrQztvQkFDcEM7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsSUFBSUEsaUNBQWlDO1lBQ25DWCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBMEMsT0FBdkJSLHdCQUF1QixpQ0FBK0JMO1FBQy9GO0lBQ0Y7SUFFQSxPQUFPYztBQUNUO0FBRUEsU0FBU0osNkJBQTZCVixvQkFBb0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDNUYsSUFBSTZCLGlDQUFpQztJQUVyQyxJQUFJLENBQUM5QixTQUFTO1FBQ1osSUFBTUcseUJBQXlCRixhQUFhRyxZQUFZLENBQUNOO1FBRXpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJGLHdCQUF1QixrQ0FBZ0NMO1FBRTVGLFFBQVE7UUFFUixJQUFJZ0MsZ0NBQWdDO1lBQ2xDN0IsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCUix3QkFBdUIsZ0NBQThCTDtRQUM5RjtJQUNGO0lBRUEsT0FBT2dDO0FBQ1QifQ==