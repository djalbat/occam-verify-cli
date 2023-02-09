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
var _assignment = /*#__PURE__*/ _interopRequireDefault(require("../../assignment"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
var _term = require("../../verify/term");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, assignments, derived, context) {
    var typeAssertionVerified = false;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.debug("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The ".concat(typeName, " type is not present."), typeAssertionNode);
    } else {
        if (!typeAssertionVerified) {
            var variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context);
            typeAssertionVerified = variableTypeAssertionVerified; ///
        }
        if (!typeAssertionVerified) {
            var termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, derived, context);
            typeAssertionVerified = termTypeAssertionVerified; ///
        }
    }
    if (typeAssertionVerified) {
        context.info("Verified the '".concat(typeAssertionString, "' statement type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context) {
    var variableTypeAssertionVerified = false;
    var variables = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context);
    if (termVerifiedAsVariable) {
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.error("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, variableName = variable.getName(), variableType = variable.getType();
            if (derived) {
                var assertedTypeEqualToOrSuperTypeOfVariableType = assertedType.isEqualToOrSuperTypeOf(variableType);
                if (!assertedTypeEqualToOrSuperTypeOfVariableType) {
                    var assertedTypeName1 = assertedType.getName(), variableTypeName = variableType.getName();
                    context.error("The '".concat(assertedTypeName1, "' asserted type is not equal to or a super-type of the '").concat(variableName, "' variable's '").concat(variableTypeName, "' type."), typeAssertionNode);
                } else {
                    variableTypeAssertionVerified = true;
                }
            } else {
                var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
                if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                    var assertedTypeName2 = assertedType.getName(), variableTypeName1 = variableType.getName();
                    context.error("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."), typeAssertionNode);
                } else {
                    var type = assertedType, name = variableName, variable1 = _variable.default.fromTypeAndName(type, name), assignment = _assignment.default.fromVariable(variable1);
                    assignments.push(assignment);
                    variableTypeAssertionVerified = true;
                }
            }
        }
    }
    return variableTypeAssertionVerified;
}
function verifyTermTypeAssertion(typeAssertionNode, derived, context) {
    var termTypeAssertionVerified = false;
    var types = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context);
    if (termVerifiedAgainstConstructors) {
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.error("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstType = (0, _array.first)(types), termType = firstType; ///
            if (derived) {
                var assertedTypeIsEqualToOrSuperTypeOfTermType = assertedType.isEqualToOrSuperTypeOf(termType);
                if (!assertedTypeIsEqualToOrSuperTypeOfTermType) {
                    var termString = context.nodeAsString(termNode), termTypeName = termType.getName(), assertedTypeName1 = assertedType.getName();
                    context.error("The '".concat(assertedTypeName1, "' asserted type is not equal to or a super-type of the '").concat(termString, "' term's '").concat(termTypeName, "' type."), typeAssertionNode);
                } else {
                    termTypeAssertionVerified = true;
                }
            } else {
                var assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);
                if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
                    var termString1 = context.nodeAsString(termNode), termTypeName1 = termType.getName(), assertedTypeName2 = assertedType.getName();
                    context.error("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(termString1, "' term's '").concat(termTypeName1, "' type."), typeAssertionNode);
                } else {
                    termTypeAssertionVerified = true;
                }
            }
        }
    }
    return termTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlICR7dHlwZU5hbWV9IHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VGVybVR5cGVBc3NlcnRpb24iLCJpbmZvIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJhc3NlcnRlZFR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInR5cGUiLCJuYW1lIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJ0eXBlcyIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsImZpcnN0VHlwZSIsInRlcm1UeXBlIiwiYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwidGVybVN0cmluZyIsInRlcm1UeXBlTmFtZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NkRBVkg7K0RBQ0U7cUJBRUQ7cUJBQzBCO29CQUNvQjs7Ozs7O0FBRXBFLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixvQkFBb0JJLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQzVGLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDLElBQU1DLHNCQUFzQkYsUUFBUUcsWUFBWSxDQUFDTjtJQUVqREcsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTDtJQUUxRSxJQUFNUSxXQUFXVCxjQUFjQyxvQkFDekJTLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY1IsUUFBUVMsdUJBQXVCLENBQUNIO0lBRXBELElBQUksQ0FBQ0UsYUFBYTtRQUNoQlIsUUFBUVUsS0FBSyxDQUFDLEFBQUMsT0FBZSxPQUFUSixVQUFTLDBCQUF3QlQ7SUFDeEQsT0FBTztRQUNMLElBQUksQ0FBQ0ksdUJBQXVCO1lBQzFCLElBQU1VLGdDQUFnQ0MsNEJBQTRCZixtQkFBbUJDLGFBQWFDLFNBQVNDO1lBRTNHQyx3QkFBd0JVLCtCQUFnQyxHQUFHO1FBQzdELENBQUM7UUFFRCxJQUFJLENBQUNWLHVCQUF1QjtZQUMxQixJQUFNWSw0QkFBNEJDLHdCQUF3QmpCLG1CQUFtQkUsU0FBU0M7WUFFdEZDLHdCQUF3QlksMkJBQTRCLEdBQUc7UUFDekQsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJWix1QkFBdUI7UUFDekJELFFBQVFlLElBQUksQ0FBQyxBQUFDLGlCQUFvQyxPQUFw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