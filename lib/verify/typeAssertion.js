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
            var firstTerm = (0, _array.first)(terms), firstType = (0, _array.first)(types), term = firstTerm, type = firstType, termType = term.getType(), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUgZnJvbSBcIi4uL3ZlcmlmeS90ZXJtQW5kR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSB9IGZyb20gXCIuL3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5R2l2ZW5UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGdpdmVuIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtQW5kR2l2ZW5UeXBlKHRlcm1Ob2RlLCB0eXBlTm9kZSwgdGVybXMsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGdpdmVuIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbiIsInZlcmlmeUdpdmVuVHlwZUFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtcyIsInR5cGVzIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCIsInZlcmlmeVRlcm1BbmRHaXZlblR5cGUiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJmaXJzdFR5cGUiLCJ0ZXJtIiwidHlwZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7K0RBWkg7Z0VBQ1U7dUVBQ0k7cUJBRWI7cUJBQ0k7b0JBQ2dCOzs7Ozs7QUFFMUMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLG9CQUFvQkssaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkcsSUFBSUM7SUFFSixJQUFNQyxzQkFBc0JILFFBQVFJLFlBQVksQ0FBQ1A7SUFFakRHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkYscUJBQW9CLHdCQUFzQk47SUFFMUUsSUFBTVMsK0JBQStCO1FBQ25DQztRQUNBQztLQUNEO0lBRUROLHdCQUF3QkksNkJBQTZCRyxJQUFJLENBQUMs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