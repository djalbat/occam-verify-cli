"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTypeAssertion;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../../variable"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term!"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type!"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
    var typeAssertionVerified;
    var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
    localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var verifyTypeAssertionFunctions = [
        verifyDerivedTypeAssertion,
        verifyStatedTypeAssertion
    ];
    typeAssertionVerified = verifyTypeAssertionFunctions.some(function(verifyTypeAssertionFunction) {
        var typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, derived, localContext);
        if (typeAssertionVerified) {
            return true;
        }
    });
    if (typeAssertionVerified) {
        localContext.debug("...verified the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyDerivedTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
    var derivedTypeAssertionVerified = false;
    if (derived) {
        var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
        localContext.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."), typeAssertionNode);
        var terms = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead = false;
            var typeNode = typeNodeQuery(typeAssertionNode), type = localContext.findTypeByTypeNode(typeNode);
            if (type !== null) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = localContext.getTermType(term), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
                if (typeEqualToOrSuperTypeOfTermType) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode === null) {
                        verifiedAhead = true;
                    } else {
                        var variable = localContext.findVariableByVariableNode(variableNode);
                        variable = _variable.default.fromVariableAndType(variable, type);
                        var variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
                        assignments.push(assignment);
                        verifiedAhead = true;
                        if (!verifiedAhead) {
                            assignments.pop();
                        }
                    }
                }
            }
            return verifiedAhead;
        });
        derivedTypeAssertionVerified = termVerified; ///
        if (derivedTypeAssertionVerified) {
            localContext.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."), typeAssertionNode);
        }
    }
    return derivedTypeAssertionVerified;
}
function verifyStatedTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
    var statedTypeAssertionVerified = false;
    if (!derived) {
        var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
        localContext.trace("Verifying the '".concat(typeAssertionString, "' stated type assertion..."), typeAssertionNode);
        var terms = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead = false;
            var typeNode = typeNodeQuery(typeAssertionNode), type = localContext.findTypeByTypeNode(typeNode);
            if (type !== null) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
                if (typeEqualToOrSubTypeOfTermType) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode === null) {
                        verifiedAhead = true;
                    } else {
                        var variable = localContext.findVariableByVariableNode(variableNode);
                        variable = _variable.default.fromVariableAndType(variable, type);
                        var variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
                        assignments.push(assignment);
                        verifiedAhead = true;
                        if (!verifiedAhead) {
                            assignments.pop();
                        }
                    }
                }
            }
            return verifiedAhead;
        });
        statedTypeAssertionVerified = termVerified; ///
        if (statedTypeAssertionVerified) {
            localContext.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."), typeAssertionNode);
        }
    }
    return statedTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGxvY2FsQ29udGV4dC5nZXRUZXJtVHlwZSh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkVHlwZUFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwicG9wIiwic3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7OytEQVhIOzJEQUNFO2dFQUNRO3FCQUVUO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLG9CQUFvQkssaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQy9GLElBQUlDO0lBRUosSUFBTUMsc0JBQXNCRixhQUFhRyxZQUFZLENBQUNOO0lBRXRERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQix3QkFBc0JMO0lBRS9FLElBQU1RLCtCQUErQjtRQUNuQ0M7UUFDQUM7S0FDRDtJQUVETix3QkFBd0JJLDZCQUE2QkcsSUFBSSxDQUFDLFNBQUNDO1FBQ3pELElBQU1SLHdCQUF3QlEsNEJBQTRCWixtQkFBbUJDLGFBQWFDLFNBQVNDO1FBRW5HLElBQUlDLHVCQUF1QjtZQUN6QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLHVCQUF1QjtRQUN6QkQsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQXVDLE9BQXBCUixxQkFBb0Isc0JBQW9CTDtJQUNqRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTSywyQkFBMkJULGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUN2RixJQUFJVywrQkFBK0I7SUFFbkMsSUFBSVosU0FBUztRQUNYLElBQU1HLHNCQUFz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