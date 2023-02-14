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
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term!"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type!");
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
                    var name = variableName, type = assertedType, variable1 = _variable.default.fromNameAndType(name, type), assignment = _assignment.default.fromVariable(variable1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJHt0eXBlTmFtZX0gdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gYXNzZXJ0ZWRUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VGVybVR5cGVBc3NlcnRpb24iLCJpbmZvIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJhc3NlcnRlZFR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm5hbWUiLCJ0eXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJ0eXBlcyIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsImZpcnN0VHlwZSIsInRlcm1UeXBlIiwiYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwidGVybVN0cmluZyIsInRlcm1UeXBlTmFtZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlBLE9BZ0NDO2VBaEN1QkE7O0lBa0NSQywyQkFBMkI7ZUFBM0JBOzs7NkRBNUNLOytEQUNFO3FCQUVEO3FCQUMwQjtvQkFDb0I7Ozs7OztBQUVwRSxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0gsb0JBQW9CSyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUM1RixJQUFJQyx3QkFBd0IsS0FBSztJQUVqQyxJQUFNQyxzQkFBc0JGLFFBQVFHLFlBQVksQ0FBQ047SUFFakRHLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkYscUJBQW9CLHdCQUFzQkw7SUFFMUUsSUFBTVEsV0FBV1QsY0FBY0Msb0JBQ3pCUyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ0YsV0FDaENHLGNBQWNSLFFBQVFTLHVCQUF1QixDQUFDSDtJQUVwRCxJQUFJLENBQUNFLGFBQWE7UUFDaEJSLFFBQVFVLEtBQUssQ0FBQyxBQUFDLE9BQWUsT0FBVEosVUFBUywwQkFBd0JUO0lBQ3hELE9BQU87UUFDTCxJQUFJLENBQUNJLHVCQUF1QjtZQUMxQixJQUFNVSxnQ0FBZ0NsQiw0QkFBNEJJLG1CQUFtQkMsYUFBYUMsU0FBU0M7WUFFM0dDLHdCQUF3QlUsK0JBQWdDLEdBQUc7UUFDN0QsQ0FBQztRQUVELElBQUksQ0FBQ1YsdUJBQXVCO1lBQzFCLElBQU1XLDRCQUE0QkMsd0JBQXdCaEIsbUJBQW1CRSxTQUFTQztZQUV0RkMsd0JBQXdCVywyQkFBNEIsR0FBRztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlYLHVC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