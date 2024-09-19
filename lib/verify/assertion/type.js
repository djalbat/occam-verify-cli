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
function verifyTypeAssertion(typeAssertionNode, assignments, stated, localContext) {
    var typeAssertionVerified;
    var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
    localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    typeAssertionVerified = verifyTypeAssertionFunctions.some(function(verifyTypeAssertionFunction) {
        var typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, stated, localContext);
        if (typeAssertionVerified) {
            return true;
        }
    });
    if (typeAssertionVerified) {
        localContext.debug("...verified the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyDerivedTypeAssertion(typeAssertionNode, assignments, stated, localContext) {
    var derivedTypeAssertionVerified = false;
    if (!stated) {
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
function verifyStatedTypeAssertion(typeAssertionNode, assignments, stated, localContext) {
    var statedTypeAssertionVerified = false;
    if (stated) {
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
                        if (assignments !== null) {
                            var variable = _variable.default.fromVariableNodeAndType(variableNode, type), variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
                            assignments.push(assignment);
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICB2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGxvY2FsQ29udGV4dC5nZXRUZXJtVHlwZSh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVTdHJpbmciLCJ0ZXJtcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwic3RhdGVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OytEQWhCSDsyREFDRTtnRUFDUTtxQkFFVDtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFNRywrQkFBK0I7SUFDbkNDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTUCxvQkFBb0JRLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUM5RixJQUFJQztJQUVKLElBQU1DLHNCQUFzQkYsYUFBYUcsWUFBWSxDQUFDTjtJQUV0REcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTDtJQUUvRUksd0JBQXdCUCw2QkFBNkJXLElBQUksQ0FBQyxTQUFDQztRQUN6RCxJQUFNTCx3QkFBd0JLLDRCQUE0QlQsbUJBQW1CQyxhQUFh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