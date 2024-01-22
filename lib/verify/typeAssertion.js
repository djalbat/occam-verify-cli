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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUgZnJvbSBcIi4uL3ZlcmlmeS90ZXJtQW5kR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSB9IGZyb20gXCIuL3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGNvbnRleHQuZ2V0VGVybVR5cGUodGVybSksXG4gICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUdpdmVuVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBnaXZlbiB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkID0gdmVyaWZ5VGVybUFuZEdpdmVuVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIHRlcm1zLCB0eXBlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBnaXZlbiB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24iLCJ2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb24iLCJzb21lIiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidGVybXMiLCJ0eXBlcyIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtQW5kR2l2ZW5UeXBlIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwiZmlyc3RUeXBlIiwidGVybSIsInR5cGUiLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwicG9wIiwiZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJnZXRUeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7K0RBWkg7Z0VBQ1U7dUVBQ0k7cUJBRWI7cUJBQ0k7b0JBQ2dCOzs7Ozs7QUFFMUMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLG9CQUFvQkssaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkcsSUFBSUM7SUFFSixJQUFNQyxzQkFBc0JILFFBQVFJLFlBQVksQ0FBQ1A7SUFFakRHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkYscUJBQW9CLHdCQUFzQk47SUFFMUUsSUFBTVMsK0JBQStCO1FBQ25DQztRQUNBQztLQUNEO0lBRUROLHdCQUF3QkksNkJBQTZCRyxJQUFJLENBQUMsU0FBQ0M7UUFDekQsSUFBTVIsd0JBQXdCUSw0QkFBNEJiLG1CQUFtQkMsYUFBYUMsU0FBU0MsU0FBU0M7UUFFNUcsSUFBSUMsdUJBQXVCO1lBQ3pCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsdUJBQXVCO1FBQ3pCRixRQUFRVyxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJSLHFCQUFvQixzQkFBb0JOO0lBQzVFO0lBRUEsT0FBT0s7QUFDVDtBQUVBLFNBQVNLLDJCQUEyQlYs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