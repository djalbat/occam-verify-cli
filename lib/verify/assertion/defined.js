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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../../verifier/metaLevel"));
var _query = require("../../utilities/query");
var _assertion = require("../../utilities/assertion");
var _name = require("../../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/frame/statement!/metavariable!");
var verifyDefinedAssertionFunctions = [
    verifyDerivedDefinedAssertion,
    verifyStatedDefinedAssertion
];
function verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
    var definedAssertionVerified;
    var definedAssertionString = localContext.nodeAsString(definedAssertionNode), savedStated = stated; ///;
    localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
    assignments = null; ///
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
        var metavariableNode = metavariableNodeQuery(definedAssertionNode);
        if (metavariableNode !== null) {
            var assertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode);
            if (false) {
            ///
            } else if (metavariableNode !== null) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariableDefinedByMetavariableName = localContext.isMetavariableDefinedByMetavariableName(metavariableName);
                if (!assertionNegated) {
                    if (metavariableDefinedByMetavariableName) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
                if (assertionNegated) {
                    if (!metavariableDefinedByMetavariableName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lL3N0YXRlbWVudCEvbWV0YXZhcmlhYmxlIVwiKTtcblxuY29uc3QgdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24sXG4gIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgc2F2ZWRTdGF0ZWQgPSBzdGF0ZWQ7IC8vLztcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gIGNvbnN0IHZlcmlmaWVkID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIHN0YXRlZCA9IHNhdmVkU3RhdGVkOyAvLy9cblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCFtZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2VydGlvbk5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic2F2ZWRTdGF0ZWQiLCJ0cmFjZSIsInZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzb21lIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsImFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBd0JBOzs7Z0VBZE07cUJBRUo7eUJBQ1M7b0JBQ2tCOzs7Ozs7QUFFckQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHFDQUM5QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQU1FLGtDQUFrQztJQUN0Q0M7SUFDQUM7Q0FDRDtBQUVjLFNBQVNOLHVCQUF1Qk8sb0JBQW9CLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ3BHLElBQUlDO0lBRUosSUFBTUMseUJBQXlCRixhQUFhRyxZQUFZLENBQUNOLHVCQUNuRE8sY0FBY0wsUUFBUSxJQUFJO0lBRWhDQyxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJILHdCQUF1QiwyQkFBeUJMO0lBRXJGQyxjQUFjLE1BQU0sR0FBRztJQUV2QkMsU0FBUyxNQUFPLEdBQUc7SUFFbkIsSUFBTU8sV0FBV0Msa0JBQWlCLENBQUNDLE1BQU0sQ0FBQ1gsc0JBQXNCQyxhQUFhQyxRQUFRQztJQUVyRkQsU0FBU0ssYUFBYSxHQUFHO0lBRXpCLElBQUlFLFVBQVU7UUFDWkwsMkJBQTJCUCxnQ0FBZ0NlLElBQUksQ0FBQyxTQUFDQztZQUMvRCxJQUFNVCwyQkFBMkJTLCtCQUErQmIsc0JBQXNCQyxhQUFhQyxRQUFRQztZQUUzRyxJQUFJQywwQkFBMEI7Z0JBQzVCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSwwQkFBMEI7UUFDNUJELGFBQWFXLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2QlQsd0JBQXVCLHlCQUF1Qkw7SUFDdkY7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU04sOEJBQThCRSxvQkFBb0IsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDNUYsSUFBSVksa0NBQWtDO0lBRXRDLElBQUksQ0FBQ2IsUUFBUTtRQUNYLElBQU1HLHlCQUF5QkYsYUFBYUcsWUFBWSxDQUFDTjtRQUV6REcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCSCx3QkFBdUIsbUNBQWlDTDtRQUU3RixJQUFNZ0IsbUJBQW1CcEIsc0JBQXNCSTtRQUUvQyxJQUFJZ0IscUJBQXFCLE1BQU07WUFDN0IsSUFBTUMsbUJBQW1CQyxJQUFBQSw2QkFBa0IsRUFBQ2xCLHVCQUMxQ21CLGVBQWV6QixrQkFBa0JNO1lBRW5DLElBQUksT0FBTztZQUNULEdBQUc7WUFDTCxPQUFPLElBQUlnQixxQkFBcUIsTUFBTTtnQkFDcEMsSUFBTUksbUJBQW1CQyxJQUFBQSwwQ0FBb0MsRUFBQ0wsbUJBQ3hETSx3Q0FBd0NuQixhQUFhb0IsdUNBQXVDLENBQUNIO2dCQUVuRyxJQUFJLENBQUNILGtCQUFrQjtvQkFDckIsSUFBSUssdUNBQXVDO3dCQUN6Q1Asa0NBQWtDO29CQUNwQztnQkFDRjtnQkFFQSxJQUFJRSxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ0ssdUNBQXVDO3dCQUMxQ1Asa0NBQWtDO29CQUNwQztnQkFDRjtZQUNGLE9BQU8sSUFBSUksaUJBQWlCLE1BQU07Z0JBQ2hDLElBQU1LLFdBQVdyQixhQUFhc0IsMEJBQTBCLENBQUNOLGVBQ25ETyxrQkFBa0J2QixhQUFhd0IsaUJBQWlCLENBQUNIO2dCQUV2RCxJQUFJLENBQUNQLGtCQUFrQjtvQkFDckIsSUFBSVMsaUJBQWlCO3dCQUNuQlgsa0NBQWtDO29CQUNwQztnQkFDRjtnQkFFQSxJQUFJRSxrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ1MsaUJBQWlCO3dCQUNwQlgsa0NBQWtDO29CQUNwQztnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSxpQ0FBaUM7WUFDbkNaLGFBQWFXLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2QlQsd0JBQXVCLGlDQUErQkw7UUFDL0Y7SUFDRjtJQUVBLE9BQU9lO0FBQ1Q7QUFFQSxTQUFTaEIsNkJBQTZCQyxvQkFBb0IsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDM0YsSUFBSXlCO0lBRUosSUFBSTFCLFFBQVE7UUFDVixJQUFNRyx5QkFBeUJGLGFBQWFHLFlBQVksQ0FBQ047UUFFekRHLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2Qkgsd0JBQXVCLGtDQUFnQ0w7UUFFNUY0QixpQ0FBaUM7UUFFakMsSUFBSUEsZ0NBQWdDO1lBQ2xDekIsYUFBYVcsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCVCx3QkFBdUIsZ0NBQThCTDtRQUM5RjtJQUNGO0lBRUEsT0FBTzRCO0FBQ1QifQ==