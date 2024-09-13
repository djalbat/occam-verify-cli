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
        var typeNode = typeNodeQuery(typeAssertionNode), type = localContext.findTypeByTypeNode(typeNode);
        if (type === null) {
            var typeString = localContext.nodeAsString(typeNode);
            localContext.debug("The '".concat(typeString, "' type is not present."), typeNode);
        }
        var terms = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = localContext.getTermType(term), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
            if (typeEqualToOrSuperTypeOfTermType) {
                verifiedAhead = true;
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
        var typeNode = typeNodeQuery(typeAssertionNode), type = localContext.findTypeByTypeNode(typeNode);
        if (type === null) {
            var typeString = localContext.nodeAsString(typeNode);
            localContext.debug("The '".concat(typeString, "' type is not present."), typeNode);
        } else {
            var terms = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _term.default)(termNode, terms, localContext, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
                if (typeEqualToOrSubTypeOfTermType) {
                    var variableNode = variableNodeQuery(termNode);
                    if (variableNode !== null) {
                        var variable;
                        variable = localContext.findVariableByVariableNode(variableNode);
                        variable = _variable.default.fromVariableAndType(variable, type); ///
                        var variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
                        assignments.push(assignment);
                    }
                    verifiedAhead = true;
                }
                return verifiedAhead;
            });
            statedTypeAssertionVerified = termVerified; ///
        }
        if (statedTypeAssertionVerified) {
            localContext.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."), typeAssertionNode);
        }
    }
    return statedTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gbG9jYWxDb250ZXh0LmdldFRlcm1UeXBlKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpOyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVTdHJpbmciLCJ0ZXJtcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwic3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7OytEQVhIOzJEQUNFO2dFQUNRO3FCQUVUO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLG9CQUFvQkssaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQy9GLElBQUlDO0lBRUosSUFBTUMsc0JBQXNCRixhQUFhRyxZQUFZLENBQUNOO0lBRXRERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQix3QkFBc0JMO0lBRS9FLElBQU1RLCtCQUErQjtRQUNuQ0M7UUFDQUM7S0FDRDtJ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