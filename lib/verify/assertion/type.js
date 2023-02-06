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
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../../variable"));
var _assertion = /*#__PURE__*/ _interopRequireDefault(require("../../assertion"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
var _term = require("../../verify/term");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, assertions, derived, context) {
    var typeAssertionVerified = false;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.debug("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The ".concat(typeName, " type is not present."), typeAssertionNode);
    } else {
        if (!typeAssertionVerified) {
            var variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, context);
            typeAssertionVerified = variableTypeAssertionVerified; ///
        }
        if (!typeAssertionVerified) {
            var termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, context);
            typeAssertionVerified = termTypeAssertionVerified; ///
        }
    }
    if (typeAssertionVerified) {
        context.info("Verified the '".concat(typeAssertionString, "' statement type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, context) {
    var variableTypeAssertionVerified = false;
    var variables = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context);
    if (termVerifiedAsVariable) {
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.error("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, variableName = variable.getName(), variableType = variable.getType();
            if (derived) {
                var variableTypeEqualToOrSubTypeOfAssertedType = variableType.isEqualToOrSubTypeOf(assertedType);
                if (!variableTypeEqualToOrSubTypeOfAssertedType) {
                    var assertedTypeName1 = assertedType.getName(), variableTypeName = variableType.getName();
                    context.error("The '".concat(variableName, "' variable's '").concat(variableTypeName, "' type is not equal to or a sub-type of the '").concat(assertedTypeName1, "' asserted type."), typeAssertionNode);
                } else {
                    variableTypeAssertionVerified = true;
                }
            } else {
                var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
                if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                    var assertedTypeName2 = assertedType.getName(), variableTypeName1 = variableType.getName();
                    context.error("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."), typeAssertionNode);
                } else {
                    var type = assertedType, name = variableName, variable1 = _variable.default.fromTypeAndName(type, name), assertion = _assertion.default.fromVariable(variable1);
                    assertions.push(assertion);
                    variableTypeAssertionVerified = true;
                }
            }
        }
    }
    return variableTypeAssertionVerified;
}
function verifyTermTypeAssertion(typeAssertionNode, context) {
    var termTypeAssertionVerified = false;
    var types = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context);
    if (termVerifiedAgainstConstructors) {
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.error("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstType = (0, _array.first)(types), termType = firstType, termTypeIsEqualToAssertedType = termType.isEqualTo(assertedType);
            if (!termTypeIsEqualToAssertedType) {
                var termString = context.nodeAsString(termNode), termTypeName = termType.getName(), assertedTypeName1 = assertedType.getName();
                context.error("The '".concat(assertedTypeName1, "' asserted type is not equal to the '").concat(termString, "' term's '").concat(termTypeName, "' type."), typeAssertionNode);
            } else {
                termTypeAssertionVerified = true;
            }
        }
    }
    return termTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uLy4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSwgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlICR7dHlwZU5hbWV9IHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAoYXNzZXJ0ZWRUeXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihhc3NlcnRlZFR5cGUpO1xuXG4gICAgICAgIGlmICghdmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGFzc2VydGVkVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRpb24gPSBBc3NlcnRpb24uZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgIHRlcm1UeXBlSXNFcXVhbFRvQXNzZXJ0ZWRUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvKGFzc2VydGVkVHlwZSk7XG5cbiAgICAgIGlmICghdGVybVR5cGVJc0VxdWFsVG9Bc3NlcnRlZFR5cGUpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbnMiLCJkZXJpdmVkIiwiY29udGV4dCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwidGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uIiwiaW5mbyIsInZhcmlhYmxlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiYXNzZXJ0ZWRUeXBlTmFtZSIsImFzc2VydGVkVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJ0eXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiYXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiZnJvbVZhcmlhYmxlIiwicHVzaCIsInR5cGVzIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwiZmlyc3RUeXBlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUlzRXF1YWxUb0Fzc2VydGVkVHlwZSIsImlzRXF1YWxUbyIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NkRBVkg7OERBQ0M7cUJBRUE7cUJBQzBCO29CQUNvQjs7Ozs7O0FBRXBFLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixvQkFBb0JJLGlCQUFpQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQzNGLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDLElBQU1DLHNCQUFzQkYsUUFBUUcsWUFBWSxDQUFDTjtJQUVqREcsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTDtJQUUxRSxJQUFNUSxXQUFXVCxjQUFjQyxvQkFDekJTLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY1IsUUFBUVMsdUJBQXVCLENBQUNIO0lBRXBELElBQUksQ0FBQ0UsYUFBYTtRQUNoQlIsUUFBUVUsS0FBSyxDQUFDLEFBQUMsT0FBZSxPQUFUSixVQUFTLDBCQUF3QlQ7SUFDeEQsT0FBTztRQUNMLElBQUksQ0FBQ0ksdUJBQXVCO1lBQzFCLElBQU1VLGdDQUFnQ0MsNEJBQTRCZixtQkFBbUJDLFlBQVlDLFNBQVNDO1lBRTFHQyx3QkFBd0JVLCtCQUFnQyxHQUFHO1FBQzdELENBQUM7UUFFRCxJQUFJLENBQUNWLHVCQUF1QjtZQUMxQixJQUFNWSw0QkFBNEJDLHdCQUF3QmpCLG1CQUFtQkc7WUFFN0VDLHdCQUF3QlksMkJBQTRCLEdBQUc7UUFD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