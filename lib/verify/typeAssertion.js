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
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
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
        verifyStatedTypeAssertion
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
        var terms = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead = false;
            var typeNode = typeNodeQuery(typeAssertionNode), type = localContext.findTypeByTypeNode(typeNode);
            if (type !== null) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = localContext.getTermType(term), typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);
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
            }
            return verifiedAhead;
        });
        derivedTypeAssertionVerified = termVerified; ///
        if (derivedTypeAssertionVerified) {
            localContext.trace("...verified the '".concat(typeAssertionString, "' derived type assertion."), typeAssertionNode);
        }
    }
    return derivedTypeAssertionVerified;
}
function verifyStatedTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead) {
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
            }
            return verifiedAhead;
        });
        statedTypeAssertionVerified = termVerified; ///
        if (statedTypeAssertionVerified) {
            localContext.trace("...verified the '".concat(typeAssertionString, "' stated type assertion."), typeAssertionNode);
        }
    }
    return statedTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb25cbiAgXTtcblxuICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gbG9jYWxDb250ZXh0LmdldFRlcm1UeXBlKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZFR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZFR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFR5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZWRUeXBlQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFR5cGVBc3NlcnRpb25WZXJpZmllZCIsInRlcm1zIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiLCJzdGF0ZWRUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJnZXRUeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7K0RBWEg7MkRBQ0U7Z0VBQ1E7cUJBRVQ7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMseUJBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0Ysb0JBQW9CSyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUM1RyxJQUFJQztJQUVKLElBQU1DLHNCQUFzQkgsYUFBYUksWUFBWSxDQUFDUDtJQUV0REcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTjtJQUUvRSxJQUFNUywrQkFBK0I7UUFDbkNDO1FBQ0FDO0tBQ0Q7SUFFRE4sd0JBQXdCSSw2QkFBNkJHLElBQUksQ0FBQyxTQUFDQztRQUN6RCxJQUFNUix3QkFBd0JRLDRCQUE0QmIsbUJBQW1CQyxhQUFhQyxTQUFTQyxjQUFjQztRQUVqSCxJQUFJQyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSx1QkFBdUI7UUFDekJGLGFBQWFXLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQlIscUJBQW9CLHNCQUFvQk47SUFDakY7SUFFQSxPQUFPSztBQUNUO0FBRUEsU0FBU0ss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