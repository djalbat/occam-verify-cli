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
            var termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, context);
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
                    var type = assertedType, name = variableName, variable1 = _variable.default.fromTypeAndName(type, name), assignment = _assignment.default.fromVariable(variable1);
                    assignments.push(assignment);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlICR7dHlwZU5hbWV9IHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlID0gdmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGFzc2VydGVkVHlwZSk7XG5cbiAgICAgICAgaWYgKCF2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUpIHtcbiAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gYXNzZXJ0ZWRUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgIHRlcm1UeXBlSXNFcXVhbFRvQXNzZXJ0ZWRUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvKGFzc2VydGVkVHlwZSk7XG5cbiAgICAgIGlmICghdGVybVR5cGVJc0VxdWFsVG9Bc3NlcnRlZFR5cGUpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJ2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbiIsInRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbiIsImluZm8iLCJ2YXJpYWJsZXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsImFzc2VydGVkVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2YXJpYWJsZVR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwidHlwZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImFzc2lnbm1lbnQiLCJBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwicHVzaCIsInR5cGVzIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwiZmlyc3RUeXBlIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUlzRXF1YWxUb0Fzc2VydGVkVHlwZSIsImlzRXF1YWxUbyIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NkRBVkg7K0RBQ0U7cUJBRUQ7cUJBQzBCO29CQUNvQjs7Ozs7O0FBRXBFLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixvQkFBb0JJLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQzVGLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDLElBQU1DLHNCQUFzQkYsUUFBUUcsWUFBWSxDQUFDTjtJQUVqREcsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCTDtJQUUxRSxJQUFNUSxXQUFXVCxjQUFjQyxvQkFDekJTLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY1IsUUFBUVMsdUJBQXVCLENBQUNIO0lBRXBELElBQUksQ0FBQ0UsYUFBYTtRQUNoQlIsUUFBUVUsS0FBSyxDQUFDLEFBQUMsT0FBZSxPQUFUSixVQUFTLDBCQUF3QlQ7SUFDeEQsT0FBTztRQUNMLElBQUksQ0FBQ0ksdUJBQXVCO1lBQzFCLElBQU1VLGdDQUFnQ0MsNEJBQTRCZixtQkFBbUJDLGFBQWFDLFNBQVNDO1lBRTNHQyx3QkFBd0JVLCtCQUFnQyxHQUFHO1FBQzdELENBQUM7UUFFRCxJQUFJLENBQUNWLHVCQUF1QjtZQUMxQixJQUFNWSw0QkFBNEJDLHdCQUF3QmpCLG1CQUFtQkc7WUFFN0VDLHdCQUF3QlksMkJB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