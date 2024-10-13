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
var variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/frame/metavariable!");
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
    var verifiedAtMetaLevel = _metaLevel.default.verify(definedAssertionNode, assignments, stated, localContext);
    stated = savedStated; ///
    if (verifiedAtMetaLevel) {
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
            var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName), variableDefined = localContext.isVariableDefined(variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lL21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHNhdmVkU3RhdGVkID0gc3RhdGVkOyAvLy87XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBjb25zdCB2ZXJpZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gIHN0YXRlZCA9IHNhdmVkU3RhdGVkOyAvLy9cblxuICBpZiAodmVyaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICBpZiAobWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmICghbWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWFzc2VydGlvbk5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzYXZlZFN0YXRlZCIsInRyYWNlIiwidmVyaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwic3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OztnRUFkTTtxQkFFSjt5QkFDUztvQkFDZ0Q7Ozs7OztBQUVuRixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMscUNBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7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