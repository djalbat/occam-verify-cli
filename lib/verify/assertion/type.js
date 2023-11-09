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
    context.debug("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The '".concat(typeName, "' type is not present."), typeAssertionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVtZW50IHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAoYXNzZXJ0ZWRUeXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJ2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbiIsImluZm8iLCJ2YXJpYWJsZXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsImFzc2VydGVkVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwiYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidmFyaWFibGVUeXBlTmFtZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwibmFtZSIsInR5cGUiLCJWYXJpYWJsZSIsImZyb21OYW1lQW5kVHlwZSIsImFzc2lnbm1lbnQiLCJBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwicHVzaCIsInR5cGVzIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwiZmlyc3RUeXBlIiwidGVybVR5cGUiLCJhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJ0ZXJtU3RyaW5nIiwidGVybVR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBWUEsT0FnQ0M7ZUFoQ3VCQTs7SUFrQ1JDLDJCQUEyQjtlQUEzQkE7OzsrREE1Q0s7aUVBQ0U7cUJBRUQ7cUJBQzBCO29CQUNvQjs7Ozs7O0FBRXBFLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTSCxvQkFBb0JLLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTztJQUMxRixJQUFJQyx3QkFBd0I7SUFFNUIsSUFBTUMsc0JBQXNCRixRQUFRRyxZQUFZLENBQUNOO0lBRWpERyxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQix3QkFBc0JMO0lBRTFFLElBQU1RLFdBQVdULGNBQWNDLG9CQUN6QlMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjUixRQUFRUyx1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCUixRQUFRVSxLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUSixVQUFTLDJCQUF5QlQ7SUFDMUQsT0FBTztRQUNMLElBQUksQ0FBQ0ksdUJBQXVCO1lBQzFCLElBQU1VLGdDQUFnQ2xCLDRCQUE0QkksbUJBQW1CQyxhQUFhQyxTQUFTQztZQUUzR0Msd0JBQXdCVSwrQkFBZ0MsR0FBRztRQUM3RDtRQUVBLElBQUksQ0FBQ1YsdUJBQXVCO1lBQzFCLElBQU1XLDRCQUE0QkMsd0JBQXdCaEIsbUJBQW1CRSxTQUFTQztZQUV0RkMsd0JBQXdCVywyQkFBNEIsR0FBRztRQUN6RDtJQUNGO0lBRUEsSUFBSVgsdUJBQXVCO1FBQ3pCRCxRQUFRYyxJQUFJ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