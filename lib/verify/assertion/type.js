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
var _variable = /*#__PURE__*/ _interop_require_default(require("../../variable"));
var _assignment = /*#__PURE__*/ _interop_require_default(require("../../assignment"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
var _term = require("../../verify/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term!"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type!");
function verifyTypeAssertion(typeAssertionNode, assignments, derived, context) {
    var typeAssertionVerified = false;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.info("The '".concat(typeName, "' type is not present."), typeAssertionNode);
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
        context.debug("...verified the '".concat(typeAssertionString, "' statement type assertion."), typeAssertionNode);
    }
    return typeAssertionVerified;
}
function verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context) {
    var variableTypeAssertionVerified = false;
    var variables = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context);
    if (termVerifiedAsVariable) {
        var typeAssertionString = context.nodeAsString(typeAssertionNode);
        context.trace("Verifying the '".concat(typeAssertionString, "' variable type assertion..."), typeAssertionNode);
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.info("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, variableName = variable.getName(), variableType = variable.getType();
            if (derived) {
                var assertedTypeEqualToOrSuperTypeOfVariableType = assertedType.isEqualToOrSuperTypeOf(variableType);
                if (!assertedTypeEqualToOrSuperTypeOfVariableType) {
                    var assertedTypeName1 = assertedType.getName(), variableTypeName = variableType.getName();
                    context.info("The '".concat(assertedTypeName1, "' asserted type is not equal to or a super-type of the '").concat(variableName, "' variable's '").concat(variableTypeName, "' type."), typeAssertionNode);
                } else {
                    variableTypeAssertionVerified = true;
                }
            } else {
                var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
                if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                    var assertedTypeName2 = assertedType.getName(), variableTypeName1 = variableType.getName();
                    context.info("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."), typeAssertionNode);
                } else {
                    var name = variableName, type = assertedType, variable1 = _variable.default.fromNameAndType(name, type), assignment = _assignment.default.fromVariable(variable1);
                    assignments.push(assignment);
                    variableTypeAssertionVerified = true;
                }
            }
        }
        if (variableTypeAssertionVerified) {
            context.debug("...verified the '".concat(typeAssertionString, "' variable type assertion."), typeAssertionNode);
        }
    }
    return variableTypeAssertionVerified;
}
function verifyTermTypeAssertion(typeAssertionNode, derived, context) {
    var termTypeAssertionVerified = false;
    var types = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context);
    if (termVerifiedAgainstConstructors) {
        var typeAssertionString = context.nodeAsString(typeAssertionNode);
        context.trace("Verifying the '".concat(typeAssertionString, "' term type assertion..."), typeAssertionNode);
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
        if (assertedType === null) {
            context.info("The '".concat(assertedTypeName, "' asserted type is not present."), typeAssertionNode);
        } else {
            var firstType = (0, _array.first)(types), termType = firstType; ///
            if (derived) {
                var assertedTypeIsEqualToOrSuperTypeOfTermType = assertedType.isEqualToOrSuperTypeOf(termType);
                if (!assertedTypeIsEqualToOrSuperTypeOfTermType) {
                    var termString = context.nodeAsString(termNode), termTypeName = termType.getName(), assertedTypeName1 = assertedType.getName();
                    context.info("The '".concat(assertedTypeName1, "' asserted type is not equal to or a super-type of the '").concat(termString, "' term's '").concat(termTypeName, "' type."), typeAssertionNode);
                } else {
                    termTypeAssertionVerified = true;
                }
            } else {
                var assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);
                if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
                    var termString1 = context.nodeAsString(termNode), termTypeName1 = termType.getName(), assertedTypeName2 = assertedType.getName();
                    context.info("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(termString1, "' term's '").concat(termTypeName1, "' type."), typeAssertionNode);
                } else {
                    termTypeAssertionVerified = true;
                }
            }
        }
        if (termTypeAssertionVerified) {
            context.debug("...verified the '".concat(typeAssertionString, "' term type assertion."), typeAssertionNode);
        }
    }
    return termTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVtZW50IHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdmFyaWFibGUgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB2YXJpYWJsZSB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHRlcm0gdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHRlcm0gdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImluZm8iLCJ2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbiIsImRlYnVnIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJhc3NlcnRlZFR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm5hbWUiLCJ0eXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJ0eXBlcyIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsImZpcnN0VHlwZSIsInRlcm1UeXBlIiwiYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwidGVybVN0cmluZyIsInRlcm1UeXBlTmFtZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlBLE9BZ0NDO2VBaEN1QkE7O0lBa0NSQywyQkFBMkI7ZUFBM0JBOzs7K0RBNUNLO2lFQUNFO3FCQUVEO3FC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