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
    context.trace("Verifying the '".concat(typeAssertionString, "' type assertion."), typeAssertionNode);
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
        context.debug("Verified the '".concat(typeAssertionString, "' statement type assertion."), typeAssertionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgY29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHZhcmlhYmxlIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gYXNzZXJ0ZWRUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdmFyaWFibGUgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0ZXJtIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBhc3NlcnRlZFR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKTtcblxuICAgIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGU7IC8vL1xuXG4gICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0ZXJtIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpbmZvIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VGVybVR5cGVBc3NlcnRpb24iLCJkZWJ1ZyIsInZhcmlhYmxlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiYXNzZXJ0ZWRUeXBlTmFtZSIsImFzc2VydGVkVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ2YXJpYWJsZVR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJuYW1lIiwidHlwZSIsIlZhcmlhYmxlIiwiZnJvbU5hbWVBbmRUeXBlIiwiYXNzaWdubWVudCIsIkFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJ0ZXJtVHlwZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQWdDQztlQWhDdUJBOztJQWtDUkMsMkJBQTJCO2VBQTNCQTs7OytEQTVDSztpRUFDRTtxQkFFRDtxQkFDMEI7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