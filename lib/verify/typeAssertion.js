"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyTypeAssertion;
    },
    verifyVariableTypeAssertion: function() {
        return verifyVariableTypeAssertion;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _term = require("../verify/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term!"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type!");
function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
    var typeAssertionVerified = false;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
    if (assertedType === null) {
        context.debug("The '".concat(typeName, "' asserted type is not present."), typeAssertionNode);
    } else {
        var verifyTypeAssertionFunctions = [
            verifyVariableTypeAssertion,
            verifyTermTypeAssertion
        ];
        typeAssertionVerified = verifyTypeAssertionFunctions.some(function(verifyTypeAssertionFunction) {
            var typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead);
            if (typeAssertionVerified) {
                return true;
            }
        });
    }
    if (typeAssertionVerified) {
        context.debug("...verified the '".concat(typeAssertionString, "' statement type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyVariableTypeAssertion(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead) {
    var variableTypeAssertionVerified;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' variable type assertion..."), typeAssertionNode);
    var variables = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context, function() {
        var verifiedAhead = false;
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, variableName = variable.getName(), variableType = variable.getType();
        if (derived) {
            var assertedTypeEqualToOrSuperTypeOfVariableType = assertedType.isEqualToOrSuperTypeOf(variableType);
            if (!assertedTypeEqualToOrSuperTypeOfVariableType) {
                var assertedTypeName = assertedType.getName(), variableTypeName = variableType.getName();
                context.debug("The '".concat(assertedTypeName, "' asserted type is not equal to or a super-type of the '").concat(variableName, "' variable's '").concat(variableTypeName, "' type."), typeAssertionNode);
            } else {
                verifiedAhead = verifyAhead();
            }
        } else {
            var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
            if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                var assertedTypeName1 = assertedType.getName(), variableTypeName1 = variableType.getName();
                context.debug("The '".concat(assertedTypeName1, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."), typeAssertionNode);
            } else {
                var name = variableName, type = assertedType, variable1 = _variable.default.fromNameAndType(name, type), variableAssignment = _variable1.default.fromVariable(variable1), assignment = variableAssignment; ///
                assignments.push(assignment);
                verifiedAhead = verifyAhead();
                if (!verifiedAhead) {
                    assignments.pop();
                }
            }
        }
        return verifiedAhead;
    });
    variableTypeAssertionVerified = termVerifiedAsVariable; ///
    if (variableTypeAssertionVerified) {
        context.debug("...verified the '".concat(typeAssertionString, "' variable type assertion."), typeAssertionNode);
    }
    return variableTypeAssertionVerified;
}
function verifyTermTypeAssertion(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead) {
    var termTypeAssertionVerified;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' term type assertion..."), typeAssertionNode);
    var types = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context, function() {
        var verifiedAhead = false;
        var firstType = (0, _array.first)(types), termType = firstType; ///
        if (derived) {
            var assertedTypeIsEqualToOrSuperTypeOfTermType = assertedType.isEqualToOrSuperTypeOf(termType);
            if (!assertedTypeIsEqualToOrSuperTypeOfTermType) {
                var termString = context.nodeAsString(termNode), termTypeName = termType.getName(), assertedTypeName = assertedType.getName();
                context.debug("The '".concat(assertedTypeName, "' asserted type is not equal to or a super-type of the '").concat(termString, "' term's '").concat(termTypeName, "' type."), typeAssertionNode);
            } else {
                verifiedAhead = verifyAhead();
            }
        } else {
            var assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);
            if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
                var termString1 = context.nodeAsString(termNode), termTypeName1 = termType.getName(), assertedTypeName1 = assertedType.getName();
                context.debug("The '".concat(assertedTypeName1, "' asserted type is not equal to or a sub-type of the '").concat(termString1, "' term's '").concat(termTypeName1, "' type."), typeAssertionNode);
            } else {
                verifiedAhead = verifyAhead();
            }
        }
        return verifiedAhead;
    });
    termTypeAssertionVerified = termVerifiedAgainstConstructors; ///
    if (termTypeAssertionVerified) {
        context.debug("...verified the '".concat(typeAssertionString, "' term type assertion."), typeAssertionNode);
    }
    return termTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSwgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMgfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICBpZiAoYXNzZXJ0ZWRUeXBlID09PSBudWxsKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICAgIHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbixcbiAgICAgIHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uXG4gICAgXTtcblxuICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgodmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGVkVHlwZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRlZFR5cGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB2YXJpYWJsZSB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGFzc2VydGVkVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlOyAvLy9cblxuICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHZhcmlhYmxlIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGVkVHlwZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdGVybSB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7ICAvLy9cblxuICBpZiAodGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdGVybSB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImFzc2VydGVkVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24iLCJ2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZhcmlhYmxlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ2YXJpYWJsZVR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJuYW1lIiwidHlwZSIsIlZhcmlhYmxlIiwiZnJvbU5hbWVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJ0ZXJtVHlwZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQWtDQztlQWxDdUJBOztJQW9DUkMsMkJBQTJCO2VBQTNCQTs7OytEQTlDSztnRUFD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