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
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _termAndGivenType = /*#__PURE__*/ _interop_require_default(require("../verify/termAndGivenType"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _term = require("./term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term!"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type!"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
    var typeAssertionVerified;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var verifyTypeAssertionFunctions = [
        verifyDerivedTypeAssertion,
        verifyGivenTypeAssertion
    ];
    typeAssertionVerified = verifyTypeAssertionFunctions.some(function(verifyTypeAssertionFunction) {
        var typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, derived, context, verifyAhead);
        if (typeAssertionVerified) {
            return true;
        }
    });
    if (typeAssertionVerified) {
        context.debug("...verified the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyDerivedTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
    var derivedTypeAssertionVerified = false;
    if (derived) {
        var typeAssertionString = context.nodeAsString(typeAssertionNode);
        context.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."), typeAssertionNode);
        var terms = [], types = [], termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), termAndGivenTypeVerified = (0, _termAndGivenType.default)(termNode, typeNode, terms, types, context, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), firstType = (0, _array.first)(types), term = firstTerm, type = firstType, termType = context.getTermType(term), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
            if (typeEqualToOrSuperTypeOfTermType) {
                verifiedAhead = verifyAhead();
            }
            return verifiedAhead;
        });
        derivedTypeAssertionVerified = termAndGivenTypeVerified; ///
        if (derivedTypeAssertionVerified) {
            context.trace("...verified the '".concat(typeAssertionString, "' derived type assertion."), typeAssertionNode);
        }
    }
    return derivedTypeAssertionVerified;
}
function verifyGivenTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
    var givenTypeAssertionVerified = false;
    if (!derived) {
        var typeAssertionString = context.nodeAsString(typeAssertionNode);
        context.trace("Verifying the '".concat(typeAssertionString, "' given type assertion..."), typeAssertionNode);
        var terms = [], types = [], termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), termAndGivenTypeVerified = (0, _termAndGivenType.default)(termNode, typeNode, terms, types, context, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), firstType = (0, _array.first)(types), term = firstTerm, type = firstType, termType = term.getType(), typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
            if (typeEqualToOrSubTypeOfTermType) {
                var variableNode = variableNodeQuery(termNode);
                if (variableNode === null) {
                    verifiedAhead = verifyAhead();
                } else {
                    var variable = context.findVariableByVariableNode(variableNode);
                    variable = _variable.default.fromVariableAndType(variable, type);
                    var variableAssignment = _variable1.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                    verifiedAhead = verifyAhead();
                    if (!verifiedAhead) {
                        assignments.pop();
                    }
                }
            }
            return verifiedAhead;
        });
        givenTypeAssertionVerified = termAndGivenTypeVerified; ///
        if (givenTypeAssertionVerified) {
            context.trace("...verified the '".concat(typeAssertionString, "' given type assertion."), typeAssertionNode);
        }
    }
    return givenTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUgZnJvbSBcIi4uL3ZlcmlmeS90ZXJtQW5kR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSB9IGZyb20gXCIuL3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGNvbnRleHQuZ2V0VGVybVR5cGUodGVybSksXG4gICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZ2l2ZW4gdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZ2l2ZW4gdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5R2l2ZW5UeXBlQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInRlcm1zIiwidHlwZXMiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkIiwidmVyaWZ5VGVybUFuZEdpdmVuVHlwZSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsImZpcnN0VHlwZSIsInRlcm0iLCJ0eXBlIiwidGVybVR5cGUiLCJnZXRUZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQXdCQTs7OytEQVpIO2dFQUNVO3VFQUNJO3FCQUViO3FCQUNJO29CQUNnQjs7Ozs7O0FBRTFDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRixvQkFBb0JLLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ3ZHLElBQUlDO0lBRUosSUFBTUMsc0JBQXNCSCxRQUFRSSxZQUFZLENBQUNQO0lBRWpERyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQix3QkFBc0JOO0lBRTFFLElBQU1TLCtCQUErQjtRQUNuQ0M7UUFDQUM7S0FDRDtJQUVETix3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