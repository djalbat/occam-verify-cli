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
var verifyTypeAssertionFunctions = [
    verifyDerivedTypeAssertion,
    verifyStatedTypeAssertion
];
function verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
    var typeAssertionVerified;
    var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
    localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
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
                        var variable = _variable.default.fromVariableNodeAndType(variableNode, type), variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGxvY2FsQ29udGV4dC5nZXRUZXJtVHlwZSh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVTdHJpbmciLCJ0ZXJtcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwic3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OytEQWhCSDsyREFDRTtnRUFDUTtxQkFFVDtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFNRywrQkFBK0I7SUFDbkNDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTUCxvQkFBb0JRLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUMvRixJQUFJQztJQUVKLElBQU1DLHNCQUFzQkYsYUFBYUcsWUFBWSxDQUFDTjtJQUV0REcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTDtJQUUvRUksd0JBQXdCUCw2QkFBNkJXLElBQUksQ0FBQyxTQUFDQztRQUN6RCxJQUFNTCx3QkFBd0JLLDRCQUE0QlQsbUJBQW1CQyxhQUFhQyxTQUFTQztRQUVuRyxJQUFJQyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSx1QkFBdUI7UUFDekJELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQkwscUJBQW9CLHNCQUFvQkw7SUFDakY7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU04sMkJBQTJCRSxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDdkYsSUFBSVEsK0JBQStCO0lBRW5DLElBQUlULFNBQVM7UUFDWCxJQUFNRyxzQkFBc0JGLGFBQWFHLFlBQVksQ0FBQ047UUFFdERHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkYscUJBQW9CLGdDQUE4Qkw7UUFFdkYsSUFBTVksV0FBV2pCLGNBQWNLLG9CQUN6QmEsT0FBT1YsYUFBYVcsa0JBQWtCLENBQUNGO1FBRTdDLElBQUlDLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhWixhQUFhRyxZQUFZLENBQUNNO1lBRTdDVCxhQUFhTyxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYSyxZQUFXLDJCQUF5Qkg7UUFDakU7UUFFQSxJQUFNSSxRQUFRLEVBQUUsRUFDVkMsV0FBV3hCLGNBQWNPLG9CQUN6QmtCLGVBQWVDLElBQUFBLGFBQVUsRUFBQ0YsVUFBVUQsT0FBT2IsY0FBYztZQUN2RCxJQUFJaUIsZ0JBQWdCO1lBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ04sUUFDbEJPLE9BQU9GLFdBQ1BHLFdBQVdyQixhQUFhc0IsV0FBVyxDQUFDRixPQUNwQ0csbUNBQW1DYixLQUFLYyxzQkFBc0IsQ0FBQ0g7WUFFckUsSUFBSUUsa0NBQWtDO2dCQUNwQ04sZ0JBQWdCO1lBQ2xCO1lBRUEsT0FBT0E7UUFDVDtRQUVOVCwrQkFBK0JPLGNBQWMsR0FBRztRQUVoRCxJQUFJUCw4QkFBOEI7WUFDaENSLGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQkwscUJBQW9CLDhCQUE0Qkw7UUFDekY7SUFDRjtJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxTQUFTWiwwQkFBMEJDLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUN0RixJQUFJeUIsOEJBQThCO0lBRWxDLElBQUksQ0FBQzFCLFNBQVM7UUFDWixJQUFNRyxzQkFBc0JGLGFBQWFHLFlBQVksQ0FBQ047UUFFdERHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkYscUJBQW9CLCtCQUE2Qkw7UUFFdEYsSUFBTVksV0FBV2pCLGNBQWNLLG9CQUN6QmEsT0FBT1YsYUFBYVcsa0JBQWtCLENBQUNGO1FBRTdDLElBQUlDLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhWixhQUFhRyxZQUFZLENBQUNNO1lBRTdDVCxhQUFhTyxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYSyxZQUFXLDJCQUF5Qkg7UUFDakUsT0FBTztZQUNMLElBQU1JLFFBQVEsRUFBRSxFQUNWQyxXQUFXeEIsY0FBY08sb0JBQ3pCa0IsZUFBZUMsSUFBQUEsYUFBVSxFQUFDRixVQUFVRCxPQUFPYixjQUFjO2dCQUN2RCxJQUFJaUIsZ0JBQWdCO2dCQUVwQixJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNOLFFBQ2xCTyxPQUFPRixXQUNQRyxXQUFXRCxLQUFLTSxPQUFPLElBQ3ZCQyxpQ0FBaUNqQixLQUFLa0Isb0JBQW9CLENBQUNQO2dCQUVqRSxJQUFJTSxnQ0FBZ0M7b0JBQ2xDLElBQU1FLGVBQWVwQyxrQkFBa0JxQjtvQkFFdkMsSUFBSWUsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1DLFdBQVdDLGlCQUFRLENBQUNDLHVCQUF1QixDQUFDSCxjQUFjbkIsT0FDMUR1QixxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNMLFdBQ3JETSxhQUFhSCxvQkFBcUIsR0FBRzt3QkFFM0NuQyxZQUFZdUMsSUFBSSxDQUFDRDtvQkFDbkI7b0JBRUFuQixnQkFBZ0I7Z0JBQ2xCO2dCQUVBLE9BQU9BO1lBQ1Q7WUFFTlEsOEJBQThCVixjQUFjLEdBQUc7UUFDakQ7UUFFQSxJQUFJVSw2QkFBNkI7WUFDL0J6QixhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJMLHFCQUFvQiw2QkFBMkJMO1FBQ3hGO0lBQ0Y7SUFFQSxPQUFPNEI7QUFDVCJ9