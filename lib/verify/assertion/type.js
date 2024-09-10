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
                        assignments.pop();
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
                        assignments.pop();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGxvY2FsQ29udGV4dC5nZXRUZXJtVHlwZSh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb24iLCJzb21lIiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidGVybXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwidHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZUFuZFR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsInBvcCIsInN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsImdldFR5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