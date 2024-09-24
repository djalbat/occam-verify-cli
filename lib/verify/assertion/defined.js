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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lL21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHNhdmVkU3RhdGVkID0gc3RhdGVkOyAvLy87XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBjb25zdCB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICBzdGF0ZWQgPSBzYXZlZFN0YXRlZDsgLy8vXG5cbiAgaWYgKHZlcmlmaWVkKSB7XG4gICAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUgPSBsb2NhbENvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICAgIGlmICghbWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0aW9uTmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NlcnRpb25OZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInNhdmVkU3RhdGVkIiwidHJhY2UiLCJ2ZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwic29tZSIsInZlcmlmeURlZmluZWRBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJhc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7O2dFQWRNO3FCQUVKO3lCQUNTO29CQUNrQjs7Ozs7O0FBRXJELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDOUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFNRSxrQ0FBa0M7SUFDdENDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTTix1QkFBdUJPLG9CQUFvQixFQUFFQyxXQUFXLEVB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