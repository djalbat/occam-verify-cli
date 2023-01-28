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
var _type = /*#__PURE__*/ _interopRequireDefault(require("../../assertion/type"));
var _array = require("../../utilities/array");
var _term = require("../../verify/term");
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, assertions, derived, proofContext) {
    var typeAssertionVerified = false;
    var typeAssertionString = proofContext.nodeAsString(typeAssertionNode);
    proofContext.debug(typeAssertionNode, "Verifying the '".concat(typeAssertionString, "' type assertion..."));
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = proofContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        proofContext.error(typeAssertionNode, "The ".concat(typeName, " type is not present."));
    } else {
        if (!typeAssertionVerified) {
            var variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, proofContext);
            typeAssertionVerified = variableTypeAssertionVerified; ///
        }
    // if (!typeAssertionVerified) {
    //   const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, assertions, proofContext);
    //
    //   typeAssertionVerified = termTypeAssertionVerified;  ///
    // }
    }
    if (typeAssertionVerified) {
        proofContext.info(typeAssertionNode, "Verified the '".concat(typeAssertionString, "' statement type assertion."));
    }
    return typeAssertionVerified;
}
function verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, proofContext) {
    var variableTypeAssertionVerified = false;
    var context = proofContext, variables = [], termNode = termNodeQuery(typeAssertionNode), termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context);
    if (termVerifiedAsVariable) {
        var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), assertedTypeName = typeName, assertedType = proofContext.findTypeByTypeName(assertedTypeName), firstVariable = (0, _array.first)(variables), variable = firstVariable, variableName = variable.getName(), variableType = variable.getType();
        if (derived) {
            var variableTypeEqualToOrSubTypeOfAssertedType = variableType.isEqualToOrSubTypeOf(assertedType);
            if (!variableTypeEqualToOrSubTypeOfAssertedType) {
                var assertedTypeName1 = assertedType.getName(), variableTypeName = variableType.getName();
                proofContext.error(typeAssertionNode, "The '".concat(variableName, "' variable's '").concat(variableTypeName, "' type is not equal to or a sub-type of the '").concat(assertedTypeName1, "' asserted type."));
            } else {
                variableTypeAssertionVerified = true;
            }
        } else {
            var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
            if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                var assertedTypeName2 = assertedType.getName(), variableTypeName1 = variableType.getName();
                proofContext.error(typeAssertionNode, "The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."));
            } else {
                var type = assertedType, name = variableName, variable1 = _variable.default.fromTypeAndName(type, name), typeAssertion = _type.default.fromVariable(variable1), assertion = typeAssertion; ///
                assertions.push(assertion);
                variableTypeAssertionVerified = true;
            }
        }
    }
    return variableTypeAssertionVerified;
} // function verifyTermTypeAssertion(typeAssertionNode, assertions, proofContext) {
 //   let termTypeAssertionVerified = false;
 //
 //   const types = [],
 //         context = proofContext, ///
 //         termNode = termNodeQuery(typeAssertionNode),
 //         termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);
 //
 //   if (termVerifiedAgainstConstructors) {
 //     const typeNode = typeNodeQuery(typeAssertionNode),
 //           typeName = typeNameFromTypeNode(typeNode),
 //           assertedTypeName = typeName,  ///
 //           assertedType = proofContext.findTypeByTypeName(assertedTypeName),
 //           firstType = first(types),
 //           termType = firstType,
 //           termString = proofContext.nodeAsString(termNode),
 //           termTypeEqualToOrSubTypeOfAssertedType = termType.isEqualToOrSubTypeOf(assertedType);
 //
 //     if (!termTypeEqualToOrSubTypeOfAssertedType) {
 //       const termTypeName = termType.getName(),
 //             assertedTypeName = assertedType.getName();
 //
 //       proofContext.error(`The '${termString}' term's '${termTypeName}' type is not equal to or a sub-type of the '${assertedTypeName}' asserted type.`);
 //     } else {
 //       const type = assertedType,  ///
 //             typeAssertion = TypeAssertion.fromTypeAndTermNode(type, termNode),
 //             assertion = typeAssertion;  ///
 //
 //       assertions.push(assertion);
 //
 //       termTypeAssertionVerified = true;
 //     }
 //   }
 //
 //   return termTypeAssertionVerified;
 // }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi8uLi9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICBwcm9vZkNvbnRleHQuZGVidWcodHlwZUFzc2VydGlvbk5vZGUsIGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IHByb29mQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIHByb29mQ29udGV4dC5lcnJvcih0eXBlQXNzZXJ0aW9uTm9kZSwgYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICAvLyBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIC8vICAgY29uc3QgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBwcm9vZkNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgLy8gfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKHR5cGVBc3NlcnRpb25Ob2RlLCBgVmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgdHlwZSBhc3NlcnRpb24uYCk7XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIHByb29mQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAvLy9cbiAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgYXNzZXJ0ZWRUeXBlID0gcHJvb2ZDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKSxcbiAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgdmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlID0gdmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGFzc2VydGVkVHlwZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IodHlwZUFzc2VydGlvbk5vZGUsIGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKHR5cGVBc3NlcnRpb25Ob2RlLCBgVGhlICcke2Fzc2VydGVkVHlwZU5hbWV9JyBhc3NlcnRlZCB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGFzc2VydGVkVHlwZSwgIC8vL1xuICAgICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpLFxuICAgICAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICBhc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG5cbiAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuLy8gZnVuY3Rpb24gdmVyaWZ5VGVybVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIHByb29mQ29udGV4dCkge1xuLy8gICBsZXQgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuLy9cbi8vICAgY29uc3QgdHlwZXMgPSBbXSxcbi8vICAgICAgICAgY29udGV4dCA9IHByb29mQ29udGV4dCwgLy8vXG4vLyAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4vLyAgICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbi8vICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuLy8gICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuLy8gICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuLy8gICAgICAgICAgIGFzc2VydGVkVHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSksXG4vLyAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuLy8gICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLFxuLy8gICAgICAgICAgIHRlcm1TdHJpbmcgPSBwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbi8vICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGFzc2VydGVkVHlwZSk7XG4vL1xuLy8gICAgIGlmICghdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUpIHtcbi8vICAgICAgIGNvbnN0IHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbi8vICAgICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSBhc3NlcnRlZFR5cGUuZ2V0TmFtZSgpO1xuLy9cbi8vICAgICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUuYCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNvbnN0IHR5cGUgPSBhc3NlcnRlZFR5cGUsICAvLy9cbi8vICAgICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21UeXBlQW5kVGVybU5vZGUodHlwZSwgdGVybU5vZGUpLFxuLy8gICAgICAgICAgICAgYXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbjsgIC8vL1xuLy9cbi8vICAgICAgIGFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuLy9cbi8vICAgICAgIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHRlcm1UeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG4vLyB9XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbnMiLCJkZXJpdmVkIiwicHJvb2ZDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJpbmZvIiwiY29udGV4dCIsInZhcmlhYmxlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiYXNzZXJ0ZWRUeXBlTmFtZSIsImFzc2VydGVkVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJ0eXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwidHlwZUFzc2VydGlvbiIsIlR5cGVBc3NlcnRpb24iLCJmcm9tVmFyaWFibGUiLCJhc3NlcnRpb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzZEQVZIO3lEQUNLO3FCQUVKO29CQUNlO3FCQUNXOzs7Ozs7QUFFaEQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLG9CQUFvQkksaUJBQWlCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUU7SUFDaEcsSUFBSUMsd0JBQXdCLEtBQUs7SUFFakMsSUFBTUMsc0JBQXNCRixhQUFhRyxZQUFZLENBQUNOO0lBRXRERyxhQUFhSSxLQUFLLENBQUNQLG1CQUFtQixBQUFDLGtCQUFxQyxPQUFwQksscUJBQW9CO0lBRTVFLElBQU1HLFdBQVdULGNBQWNDLG9CQUN6QlMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjUixhQUFhUyx1QkFBdUIsQ0FBQ0g7SUFFekQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCUixhQUFhVSxLQUFLLENBQUNiLG1CQUFtQixBQUFDLE9BQWUsT0FBVFMsVUFBUztJQUN4RCxPQUFPO1FBQ0wsSUFBSSxDQUFDTCx1QkFBdUI7WUFDMUIsSUFBTVUsZ0NBQWdDQyw0QkFBNEJmLG1CQUFtQkMsWUFBWUMsU0FBU0M7WUFFMUdDLHdCQUF3QlUsK0JBQWdDLEdBQUc7UUFDN0QsQ0FBQztJQUVELGdDQUFnQztJQUNoQyw0R0FBNEc7SUFDNUcsRUFBRTtJQUNGLDREQUE0RDtJQUM1RCxJQUFJO0lBQ04sQ0FBQztJQUVELElBQUlWLHVCQUF1QjtRQUN6QkQsYUFBYWEsSUFBSSxDQUFDaEIsbUJBQW1CLEFBQUMsaUJBQW9DLE9BQXBCSyxxQkFBb0I7SUFDNUUsQ0FBQztJQUVELE9BQU9EO0FBQ1Q7QUFFQSxTQUFTVyw0QkFBNEJmLGlCQUFpQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQ3pGLElBQUlXLGdDQUFnQyxLQUFLO0lBRXpDLElBQU1HLFVBQVVkLGNBQ1ZlLFlBQVksRUFBRSxFQUNkQyxXQUFXdEIsY0FBY0csb0JBQ3pCb0IseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVUQsV0FBV0Q7SUFFekUsSUFBSUcsd0JBQXdCO1FBQzFCLElBQU1aLFdBQVdULGNBQWNDLG9CQUN6QlMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDYyxtQkFBbUJiLFVBQ25CYyxlQUFlcEIsYUFBYXFCLGtCQUFrQixDQUFDRixtQkFDL0NHLGdCQUFnQkMsSUFBQUEsWUFBSyxFQUFDUixZQUN0QlMsV0FBV0YsZUFDWEcsZUFBZUQsU0FBU0UsT0FBTyxJQUMvQkMsZUFBZUgsU0FBU0ksT0FBTztRQUVyQyxJQUFJN0IsU0FBUztZQUNYLElBQU04Qiw2Q0FBNkNGLGFBQWFHLG9CQUFvQixDQUFDVjtZQUVyRixJQUFJLENBQUNTLDRDQUE0QztnQkFDL0MsSUFBTVYsb0JBQW1CQyxhQUFhTSxPQUFPLElBQ3ZDSyxtQkFBbUJKLGFBQWFELE9BQU87Z0JBRTdDMUIsYUFBYVUsS0FBSyxDQUFDYixtQkFBbUIsQUFBQyxRQUFvQ2tDLE9BQTdCTixjQUFhLGtCQUFnRk4sT0FBaEVZLGtCQUFpQixpREFBZ0UsT0FBakJaLG1CQUFpQjtZQUM5SixPQUFPO2dCQUNMUixnQ0FBZ0MsSUFBSTtZQUN0QyxDQUFDO1FBQ0gsT0FBTztZQUNMLElBQU1xQiw2Q0FBNkNaLGFBQWFVLG9CQUFvQixDQUFDSDtZQUVyRixJQUFJLENBQUNLLDRDQUE0QztnQkFDL0MsSUFBTWIsb0JBQW1CQyxhQUFhTSxPQUFPLElBQ3ZDSyxvQkFBbUJKLGFBQWFELE9BQU87Z0JBRTdDMUIsYUFBYVUsS0FBSyxDQUFDYixtQkFBbUIsQUFBQyxRQUFnRjRCLE9BQXpFTixtQkFBaUIsMERBQXFGWSxPQUE3Qk4sY0FBYSxrQkFBaUMsT0FBakJNLG1CQUFpQjtZQUN2SyxPQUFPO2dCQUNMLElBQU1FLE9BQU9iLGNBQ1BjLE9BQU9ULGNBQ1BELFlBQVdXLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsTUFBTUMsT0FDMUNHLGdCQUFnQkMsYUFBYSxDQUFDQyxZQUFZLENBQUNmLFlBQzNDZ0IsWUFBWUgsZUFBZ0IsR0FBRztnQkFFckN2QyxXQUFXMkMsSUFBSSxDQUFDRDtnQkFFaEI3QixnQ0FBZ0MsSUFBSTtZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNULEVBRUEsa0ZBQWtGO0NBQ2xGLDJDQUEyQztDQUMzQyxFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLHNDQUFzQztDQUN0Qyx1REFBdUQ7Q0FDdkQscUdBQXFHO0NBQ3JHLEVBQUU7Q0FDRiwyQ0FBMkM7Q0FDM0MseURBQXlEO0NBQ3pELHVEQUF1RDtDQUN2RCw4Q0FBOEM7Q0FDOUMsOEVBQThFO0NBQzlFLHNDQUFzQztDQUN0QyxrQ0FBa0M7Q0FDbEMsOERBQThEO0NBQzlELGtHQUFrRztDQUNsRyxFQUFFO0NBQ0YscURBQXFEO0NBQ3JELGlEQUFpRDtDQUNqRCx5REFBeUQ7Q0FDekQsRUFBRTtDQUNGLDJKQUEySjtDQUMzSixlQUFlO0NBQ2Ysd0NBQXdDO0NBQ3hDLGlGQUFpRjtDQUNqRiw4Q0FBOEM7Q0FDOUMsRUFBRTtDQUNGLG9DQUFvQztDQUNwQyxFQUFFO0NBQ0YsMENBQTBDO0NBQzFDLFFBQVE7Q0FDUixNQUFNO0NBQ04sRUFBRTtDQUNGLHNDQUFzQztDQUN0QyxJQUFJIn0=