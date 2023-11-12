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
    context.debug("Verifying the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
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
    }
    return variableTypeAssertionVerified;
}
function verifyTermTypeAssertion(typeAssertionNode, derived, context) {
    var termTypeAssertionVerified = false;
    var types = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context);
    if (termVerifiedAgainstConstructors) {
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
    }
    return termTypeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgY29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVtZW50IHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAoYXNzZXJ0ZWRUeXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiaW5mbyIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJhc3NlcnRlZFR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm5hbWUiLCJ0eXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJ0eXBlcyIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsImZpcnN0VHlwZSIsInRlcm1UeXBlIiwiYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwidGVybVN0cmluZyIsInRlcm1UeXBlTmFtZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlBLE9BZ0NDO2VBaEN1QkE7O0lBa0NSQywyQkFBMkI7ZUFBM0JBOzs7K0RBNUNLO2lFQUNFO3FCQUVEO3FCQUMwQjtvQkFDb0I7Ozs7OztBQUVwRSxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0gsb0JBQW9CSyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU87SUFDMUYsSUFBSUMsd0JBQXdCO0lBRTVCLElBQU1DLHNCQUFzQkYsUUFBUUcsWUFBWSxDQUFDTjtJQUVqREcsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isc0JBQW9CTDtJQUV4RSxJQUFNUSxXQUFXVCxjQUFjQyxvQkFDekJTLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY1IsUUFBUVMsdUJBQXVCLENBQUNIO0lBRXBELElBQUksQ0FBQ0UsYUFBYTtRQUNoQlIsUUFBUVUsSUFBSSxDQUFDLEFBQUMsUUFBZ0IsT0FBVEosVUFBUywyQkFBeUJUO0lBQ3pELE9BQU87UUFDTCxJQUFJLENBQUNJLHVCQUF1QjtZQUMxQixJQUFNVSxnQ0FBZ0NsQiw0QkFBNEJJLG1CQUFtQkMsYUFBYUMsU0FBU0M7WUFFM0dDLHdCQUF3QlUsK0JBQWdDLEdBQUc7UUFDN0Q7UUFFQSxJQUFJLENBQUNWLHVCQUF1QjtZQUMxQixJQUFNVyw0QkFBNEJDLHdCQUF3QmhCLG1CQUFtQkUsU0FBU0M7WUFFdEZDLHdCQUF3QlcsMkJBQTRCLEdBQUc7UUFDekQ7SUFDRjtJQUVBLElBQUlYLHVCQUF1QjtRQUN6QkQsUUFBUVUsSUFBSSxDQUFDLEFBQUMsaUJBQW9DLE9BQXBCUixxQkFBb0IsZ0NBQThCTDtJQUNsRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTUiw0QkFBNEJJLGlCQUFpQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTztJQUMxRixJQUFJVyxnQ0FBZ0M7SUFFcEMsSUFBTUcsWUFBWSxFQUFFLEVBQ2RDLFdBQVdyQixjQUFjRyxvQkFDekJtQix5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDRixVQUFVRCxXQUFXZDtJQUV6RSxJQUFJZ0Isd0JBQXdCO1FBQzFCLElBQU1YLFdBQVdULGNBQWNDLG9CQUN6QlMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDYSxtQkFBbUJaLFVBQ25CYSxlQUFlbkIsUUFBUW9CLGtCQUFrQixDQUFDRjtRQUVoRCxJQUFJQyxpQkFBaUIsTUFBTTtZQUN6Qm5CLFFBQVFVLElBQUksQ0FBQyxBQUFDLFFBQXdCLE9BQWpCUSxrQkFBaUIsb0NBQWtDckI7UUFDMUUsT0FBTztZQUNMLElBQU13QixnQkFBZ0JDLElBQUFBLFlBQUssRUFBQ1IsWUFDdEJTLFdBQVdGLGVBQ1hHLGVBQWVELFNBQVNFLE9BQU8sSUFDL0JDLGVBQWVILFNBQVNJLE9BQU87WUFFckMsSUFBSTVCLFNBQVM7Z0JBQ1gsSUFBTTZCLCtDQUErQ1QsYUFBYVUsc0JBQXNCLENBQUNIO2dCQUV6RixJQUFJLENBQUNFLDhDQUE4QztvQkFDakQsSUFBTVYsb0JBQW1CQyxhQUFhTSxPQUFPLElBQ3ZDSyxtQkFBbUJKLGFBQWFELE9BQU87b0JBRTdDekIsUUFBUVUsSUFBSSxDQUFDLEFBQUMsUUFBa0ZjLE9BQTNFTixtQkFBaUIsNERBQXVGWSxPQUE3Qk4sY0FBYSxrQkFBaUMsT0FBakJNLGtCQUFpQixZQUFVakM7Z0JBQzFKLE9BQU87b0JBQ0xjLGdDQUFnQztnQkFDbEM7WUFDRixPQUFPO2dCQUNMLElBQU1vQiw2Q0FBNkNaLGFBQWFhLG9CQUFvQixDQUFDTjtnQkFFckYsSUFBSSxDQUFDSyw0Q0FBNEM7b0JBQy9DLElBQU1iLG9CQUFtQkMsYUFBYU0sT0FBTyxJQUN2Q0ssb0JBQW1CSixhQUFhRCxPQUFPO29CQUU3Q3pCLFFBQVFVLElBQUksQ0FBQyxBQUFDLFFBQWdGYyxPQUF6RU4sbUJBQWlCLDBEQUFxRlksT0FBN0JOLGNBQWEsa0JBQWlDLE9BQWpCTSxtQkFBaUIsWUFBVWpDO2dCQUN4SixPQUFPO29CQUNMLElBQU1vQyxPQUFPVCxjQUNQVSxPQUFPZixjQUNQSSxZQUFXWSxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE1BQU1DLE9BQzFDRyxhQUFhQyxtQkFBVSxDQUFDQyxZQUFZLENBQUNoQjtvQkFFM0N6QixZQUFZMEMsSUFBSSxDQUFDSDtvQkFFakIxQixnQ0FBZ0M7Z0JBQ2xDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNFLHdCQUF3QmhCLGlCQUFpQixFQUFFRSxPQUFPLEVBQUVDLE9BQU87SUFDbEUsSUFBSVksNEJBQTRCO0lBRWhDLElBQU02QixRQUFRLEVBQUUsRUFDVjFCLFdBQVdyQixjQUFjRyxvQkFDekI2QyxrQ0FBa0NDLElBQUFBLG1DQUE2QixFQUFDNUIsVUFBVTBCLE9BQU96QztJQUV2RixJQUFJMEMsaUNBQWlDO1FBQ25DLElBQU1yQyxXQUFXVCxjQUFjQyxvQkFDekJTLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ2EsbUJBQW1CWixVQUNuQmEsZUFBZW5CLFFBQVFvQixrQkFBa0IsQ0FBQ0Y7UUFFaEQsSUFBSUMsaUJBQWlCLE1BQU07WUFDekJuQixRQUFRVSxJQUFJLENBQUMsQUFBQyxRQUF3QixPQUFqQlEsa0JBQWlCLG9DQUFrQ3JCO1FBQzFFLE9BQU87WUFDTCxJQUFNK0MsWUFBWXRCLElBQUFBLFlBQUssRUFBQ21CLFFBQ2xCSSxXQUFXRCxXQUFXLEdBQUc7WUFFL0IsSUFBSTdDLFNBQVM7Z0JBQ1gsSUFBTStDLDZDQUE2QzNCLGFBQWFVLHNCQUFzQixDQUFDZ0I7Z0JBRXZGLElBQUksQ0FBQ0MsNENBQTRDO29CQUMvQyxJQUFNQyxhQUFhL0MsUUFBUUcsWUFBWSxDQUFDWSxXQUNsQ2lDLGVBQWVILFNBQVNwQixPQUFPLElBQy9CUCxvQkFBbUJDLGFBQWFNLE9BQU87b0JBRTdDekIsUUFBUVUsSUFBSSxDQUFDLEFBQUMsUUFBa0ZxQyxPQUEzRTdCLG1CQUFpQiw0REFBaUY4QixPQUF2QkQsWUFBVyxjQUF5QixPQUFiQyxjQUFhLFlBQVVuRDtnQkFDaEosT0FBTztvQkFDTGUsNEJBQTRCO2dCQUM5QjtZQUNGLE9BQU87Z0JBQ0wsSUFBTXFDLDJDQUEyQzlCLGFBQWFhLG9CQUFvQixDQUFDYTtnQkFFbkYsSUFBSSxDQUFDSSwwQ0FBMEM7b0JBQzdDLElBQU1GLGNBQWEvQyxRQUFRRyxZQUFZLENBQUNZLFdBQ2xDaUMsZ0JBQWVILFNBQVNwQixPQUFPLElBQy9CUCxvQkFBbUJDLGFBQWFNLE9BQU87b0JBRTdDekIsUUFBUVUsSUFBSSxDQUFDLEFBQUMsUUFBZ0ZxQyxPQUF6RTdCLG1CQUFpQiwwREFBK0U4QixPQUF2QkQsYUFBVyxjQUF5QixPQUFiQyxlQUFhLFlBQVVuRDtnQkFDOUksT0FBTztvQkFDTGUsNEJBQTRCO2dCQUM5QjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==