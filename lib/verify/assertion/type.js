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
function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
    var typeAssertionVerified = false;
    var typeAssertionString = context.nodeAsString(typeAssertionNode);
    context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."), typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = context.findTypeByTypeName(assertedTypeName);
    if (assertedType === null) {
        context.info("The '".concat(typeName, "' asserted type is not present."), typeAssertionNode);
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
                context.info("The '".concat(assertedTypeName, "' asserted type is not equal to or a super-type of the '").concat(variableName, "' variable's '").concat(variableTypeName, "' type."), typeAssertionNode);
            } else {
                verifiedAhead = verifyAhead();
            }
        } else {
            var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
            if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                var assertedTypeName1 = assertedType.getName(), variableTypeName1 = variableType.getName();
                context.info("The '".concat(assertedTypeName1, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."), typeAssertionNode);
            } else {
                var name = variableName, type = assertedType, variable1 = _variable.default.fromNameAndType(name, type), assignment = _assignment.default.fromVariable(variable1);
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
                context.info("The '".concat(assertedTypeName, "' asserted type is not equal to or a super-type of the '").concat(termString, "' term's '").concat(termTypeName, "' type."), typeAssertionNode);
            } else {
                verifiedAhead = verifyAhead();
            }
        } else {
            var assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);
            if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
                var termString1 = context.nodeAsString(termNode), termTypeName1 = termType.getName(), assertedTypeName1 = assertedType.getName();
                context.info("The '".concat(assertedTypeName1, "' asserted type is not equal to or a sub-type of the '").concat(termString1, "' term's '").concat(termTypeName1, "' type."), typeAssertionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLCB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgIGFzc2VydGVkVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGFzc2VydGVkVHlwZU5hbWUpO1xuXG4gIGlmIChhc3NlcnRlZFR5cGUgPT09IG51bGwpIHtcbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHt0eXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gICAgICB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24sXG4gICAgICB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvblxuICAgIF07XG5cbiAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRlZFR5cGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0ZWRUeXBlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdmFyaWFibGUgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYXNzZXJ0ZWRUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlOyAvLy9cblxuICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHZhcmlhYmxlIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGVkVHlwZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdGVybSB0eXBlIGFzc2VydGlvbi4uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZTsgLy8vXG5cbiAgICAgICAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gYXNzZXJ0ZWRUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoIWFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzOyAgLy8vXG5cbiAgaWYgKHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHRlcm0gdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJhc3NlcnRlZFR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiaW5mbyIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbiIsInNvbWUiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm5hbWUiLCJ0eXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJwb3AiLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJ0ZXJtVHlwZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQWtDQztlQWxDdUJBOztJQW9DUkMsMkJBQTJCO2VBQTNCQTs7OytEQTlDSztpRUFDRTtxQkFFRDtxQkFDMEI7b0JBQ29COzs7Ozs7QUFFcEUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FB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