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
var _assignment = /*#__PURE__*/ _interop_require_default(require("../assignment"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IEFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnRcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUsIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICBhc3NlcnRlZFR5cGVOYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgYXNzZXJ0ZWRUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSk7XG5cbiAgaWYgKGFzc2VydGVkVHlwZSA9PT0gbnVsbCkge1xuICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbnMgPSBbXG4gICAgICB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24sXG4gICAgICB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvblxuICAgIF07XG5cbiAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRlZFR5cGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0eXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0ZWRUeXBlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdmFyaWFibGUgdHlwZSBhc3NlcnRpb24uLi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgaWYgKCFhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRlcm1WZXJpZmllZEFzVmFyaWFibGU7IC8vL1xuXG4gIGlmICh2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdmFyaWFibGUgdHlwZSBhc3NlcnRpb24uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0ZWRUeXBlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0ZXJtIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSBhc3NlcnRlZFR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZS5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghYXNzZXJ0ZWRUeXBlSXNFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yczsgIC8vL1xuXG4gIGlmICh0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0ZXJtIHR5cGUgYXNzZXJ0aW9uLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiYXNzZXJ0ZWRUeXBlTmFtZSIsImFzc2VydGVkVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImRlYnVnIiwidmVyaWZ5VHlwZUFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeVR5cGVBc3NlcnRpb25GdW5jdGlvbiIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmFyaWFibGVzIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsImFzc2VydGVkVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm5hbWUiLCJ0eXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJwb3AiLCJ0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJ0ZXJtVHlwZSIsImFzc2VydGVkVHlwZUlzRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVJc0VxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQWtDQztlQWxDdUJBOztJQW9DUkMsMkJBQTJCO2VBQTNCQTs7OytEQTlDSztpRUFDRTtxQkFFRDtxQkFDMEI7b0JBQ29COzs7Ozs7QUFFcEUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNILG9CQUFvQkssaUJB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