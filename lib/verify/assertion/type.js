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
    proofContext.begin(typeAssertionNode);
    var typeAssertionString = proofContext.nodeAsString(typeAssertionNode);
    proofContext.debug("Verifying the '".concat(typeAssertionString, "' type assertion..."));
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = proofContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        proofContext.error("The ".concat(typeName, " type is not present."));
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
        proofContext.info("Verified the '".concat(typeAssertionString, "' statement type assertion."));
    }
    typeAssertionVerified ? proofContext.complete(typeAssertionNode) : proofContext.halt(typeAssertionNode);
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
                proofContext.error("The '".concat(variableName, "' variable's '").concat(variableTypeName, "' type is not equal to or a sub-type of the '").concat(assertedTypeName1, "' asserted type."));
            } else {
                variableTypeAssertionVerified = true;
            }
        } else {
            var assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);
            if (!assertedTypeEqualToOrSubTypeOfVariableType) {
                var assertedTypeName2 = assertedType.getName(), variableTypeName1 = variableType.getName();
                proofContext.error("The '".concat(assertedTypeName2, "' asserted type is not equal to or a sub-type of the '").concat(variableName, "' variable's '").concat(variableTypeName1, "' type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi8uLi9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbih0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBwcm9vZkNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGlmICghdHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICAvLyBpZiAoIXR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIC8vICAgY29uc3QgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVRlcm1UeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBwcm9vZkNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkOyAgLy8vXG4gICAgLy8gfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlbWVudCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgfVxuXG4gIHR5cGVBc3NlcnRpb25WZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHR5cGVBc3NlcnRpb25Ob2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHR5cGVBc3NlcnRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgLy8vXG4gICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIGFzc2VydGVkVHlwZU5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2VydGVkVHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoYXNzZXJ0ZWRUeXBlTmFtZSksXG4gICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihhc3NlcnRlZFR5cGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IGFzc2VydGVkVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAoIWFzc2VydGVkVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCBhc3NlcnRlZFR5cGVOYW1lID0gYXNzZXJ0ZWRUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgJyR7YXNzZXJ0ZWRUeXBlTmFtZX0nIGFzc2VydGVkIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gYXNzZXJ0ZWRUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSksXG4gICAgICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb247ICAvLy9cblxuICAgICAgICBhc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcblxuICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuXG4vLyBmdW5jdGlvbiB2ZXJpZnlUZXJtVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzZXJ0aW9ucywgcHJvb2ZDb250ZXh0KSB7XG4vLyAgIGxldCB0ZXJtVHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG4vL1xuLy8gICBjb25zdCB0eXBlcyA9IFtdLFxuLy8gICAgICAgICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAvLy9cbi8vICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbi8vICAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG4vL1xuLy8gICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuLy8gICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4vLyAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4vLyAgICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4vLyAgICAgICAgICAgYXNzZXJ0ZWRUeXBlID0gcHJvb2ZDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShhc3NlcnRlZFR5cGVOYW1lKSxcbi8vICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4vLyAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsXG4vLyAgICAgICAgICAgdGVybVN0cmluZyA9IHByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuLy8gICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YoYXNzZXJ0ZWRUeXBlKTtcbi8vXG4vLyAgICAgaWYgKCF0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSkge1xuLy8gICAgICAgY29uc3QgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuLy8gICAgICAgICAgICAgYXNzZXJ0ZWRUeXBlTmFtZSA9IGFzc2VydGVkVHlwZS5nZXROYW1lKCk7XG4vL1xuLy8gICAgICAgcHJvb2ZDb250ZXh0LmVycm9yKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHthc3NlcnRlZFR5cGVOYW1lfScgYXNzZXJ0ZWQgdHlwZS5gKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgY29uc3QgdHlwZSA9IGFzc2VydGVkVHlwZSwgIC8vL1xuLy8gICAgICAgICAgICAgdHlwZUFzc2VydGlvbiA9IFR5cGVBc3NlcnRpb24uZnJvbVR5cGVBbmRUZXJtTm9kZSh0eXBlLCB0ZXJtTm9kZSksXG4vLyAgICAgICAgICAgICBhc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uOyAgLy8vXG4vL1xuLy8gICAgICAgYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4vL1xuLy8gICAgICAgdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gdGVybVR5cGVBc3NlcnRpb25WZXJpZmllZDtcbi8vIH1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJiZWdpbiIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwiaW5mbyIsImNvbXBsZXRlIiwiaGFsdCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsImFzc2VydGVkVHlwZU5hbWUiLCJhc3NlcnRlZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mQXNzZXJ0ZWRUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ2YXJpYWJsZVR5cGVOYW1lIiwiYXNzZXJ0ZWRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwidHlwZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsInR5cGVBc3NlcnRpb24iLCJUeXBlQXNzZXJ0aW9uIiwiZnJvbVZhcmlhYmxlIiwiYXNzZXJ0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozs2REFWSDt5REFDSztxQkFFSjtvQkFDZTtxQkFDVzs7Ozs7O0FBRWhELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixvQkFBb0JJLGlCQUFpQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQ2hHLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDRCxhQUFhRSxLQUFLLENBQUNMO0lBRW5CLElBQU1NLHNCQUFzQkgsYUFBYUksWUFBWSxDQUFDUDtJQUV0REcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0I7SUFFekQsSUFBTUcsV0FBV1YsY0FBY0Msb0JBQ3pCVSxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ0YsV0FDaENHLGNBQWNULGFBQWFVLHVCQUF1QixDQUFDSDtJQUV6RCxJQUFJLENBQUNFLGFBQWE7UUFDaEJULGFBQWFXLEtBQUssQ0FBQyxBQUFDLE9BQWUsT0FBVEosVUFBUztJQUNyQyxPQUFPO1FBQ0wsSUFBSSxDQUFDTix1QkFBdUI7WUFDMUIsSUFBTVcsZ0NBQWdDQyw0QkFBNEJoQixtQkFBbUJDLFlBQVlDLFNBQVNDO1lBRTFHQyx3QkFBd0JXLCtCQUFnQyxHQUFHO1FBQzdELENBQUM7SUFFRCxnQ0FBZ0M7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