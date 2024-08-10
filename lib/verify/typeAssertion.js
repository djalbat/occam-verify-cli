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
function verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead) {
    var typeAssertionVerified;
    var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
    localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var verifyTypeAssertionFunctions = [
        verifyDerivedTypeAssertion,
        verifyGivenTypeAssertion
    ];
    typeAssertionVerified = verifyTypeAssertionFunctions.some(function(verifyTypeAssertionFunction) {
        var typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, derived, localContext, verifyAhead);
        if (typeAssertionVerified) {
            return true;
        }
    });
    if (typeAssertionVerified) {
        localContext.debug("...verified the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyDerivedTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead) {
    var derivedTypeAssertionVerified = false;
    if (derived) {
        var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
        localContext.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."), typeAssertionNode);
        var terms = [], types = [], termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), termAndGivenTypeVerified = (0, _termAndGivenType.default)(termNode, typeNode, terms, types, localContext, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), firstType = (0, _array.first)(types), term = firstTerm, type = firstType, termType = localContext.getTermType(term), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
            if (typeEqualToOrSuperTypeOfTermType) {
                var variableNode = variableNodeQuery(termNode);
                if (variableNode === null) {
                    verifiedAhead = verifyAhead();
                } else {
                    var variable = localContext.findVariableByVariableNode(variableNode);
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
            localContext.trace("...verified the '".concat(typeAssertionString, "' derived type assertion."), typeAssertionNode);
        }
    }
    return derivedTypeAssertionVerified;
}
function verifyGivenTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead) {
    var givenTypeAssertionVerified = false;
    if (!derived) {
        var typeAssertionString = localContext.nodeAsString(typeAssertionNode);
        localContext.trace("Verifying the '".concat(typeAssertionString, "' given type assertion..."), typeAssertionNode);
        var terms = [], types = [], termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), termAndGivenTypeVerified = (0, _termAndGivenType.default)(termNode, typeNode, terms, types, localContext, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), firstType = (0, _array.first)(types), term = firstTerm, type = firstType, termType = term.getType(), typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
            if (typeEqualToOrSubTypeOfTermType) {
                var variableNode = variableNodeQuery(termNode);
                if (variableNode === null) {
                    verifiedAhead = verifyAhead();
                } else {
                    var variable = localContext.findVariableByVariableNode(variableNode);
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
            localContext.trace("...verified the '".concat(typeAssertionString, "' given type assertion."), typeAssertionNode);
        }
    }
    return givenTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1BbmRHaXZlblR5cGUgZnJvbSBcIi4uL3ZlcmlmeS90ZXJtQW5kR2l2ZW5UeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzR2l2ZW5WYXJpYWJsZSB9IGZyb20gXCIuL3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlHaXZlblR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtQW5kR2l2ZW5UeXBlKHRlcm1Ob2RlLCB0eXBlTm9kZSwgdGVybXMsIHR5cGVzLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGxvY2FsQ29udGV4dC5nZXRUZXJtVHlwZSh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUdpdmVuVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBnaXZlbiB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkID0gdmVyaWZ5VGVybUFuZEdpdmVuVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIHRlcm1zLCB0eXBlcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZ2l2ZW5UeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBnaXZlbiB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdpdmVuVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkVHlwZUFzc2VydGlvbiIsInZlcmlmeUdpdmVuVHlwZUFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtcyIsInR5cGVzIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCIsInZlcmlmeVRlcm1BbmRHaXZlblR5cGUiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJmaXJzdFR5cGUiLCJ0ZXJtIiwidHlwZSIsInRlcm1UeXBlIiwiZ2V0VGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiLCJnaXZlblR5cGVBc3NlcnRpb25WZXJpZmllZCIsImdldFR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7OzsrREFaSDtnRUFDVTt1RUFDSTtxQkFFYjtxQkFDSTtvQkFDZ0I7Ozs7OztBQUUxQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMseUJBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0Ysb0JBQW9CSyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUM1RyxJQUFJQztJQUVKLElBQU1DLHNCQUFzQkgsYUFBYUksWUFBWSxDQUFDUDtJQUV0REcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTjtJQUUvRSxJQUFNUywrQkFBK0I7UUFDbkNDO1FBQ0FDO0tBQ0Q7SUFFRE4sd0JBQXdCSSw2QkFBNkJHLElBQUksQ0FBQyxTQUFDQztRQUN6RCxJQUFNUix3QkFBd0JRLDRCQUE0QmIsbUJBQW1CQyxhQUFhQyxTQUFTQyxjQUFjQztRQUVqSCxJQUFJQyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSx1QkFBdUI7UUFD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