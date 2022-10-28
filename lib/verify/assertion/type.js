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
var _termAsVariable = /*#__PURE__*/ _interopRequireDefault(require("../../verify/termAsVariable"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, context) {
    var typeAssertionVerified = false;
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The ".concat(typeName, " type is not present."), typeAssertionNode);
    } else {
        var derived = context.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], names = [], values = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _termAsVariable.default)(termNode, types, names, values, context);
            if (termVerified) {
                var firstName = (0, _array.first)(names), firstValue = (0, _array.first)(values), variableName = firstName, value = firstValue;
                if (value !== undefined) {
                    context.error("The value of the ".concat(variableName, " variable is not undefined."), typeAssertionNode);
                } else {
                    var type = context.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeSubTypeOfVariableType = type.isSubTypeOf(variableType);
                    if (!typeSubTypeOfVariableType) {
                        context.error("The asserted type of the ".concat(variableName, " variable is not a sub-type of its declared type."), typeAssertionNode);
                    } else {
                        var name = variableName, variable = _variable.default.fromTypeAndName(type, name);
                        context.addVariable(variable);
                        typeAssertionVerified = true;
                    }
                }
            }
        }
    }
    return typeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQXNWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1Bc1ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXJpdmVkID0gY29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgbmFtZXMgPSBbXSxcbiAgICAgICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB0eXBlcywgbmFtZXMsIHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gZmlyc3QobmFtZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhbHVlID0gZmlyc3QodmFsdWVzKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gZmlyc3ROYW1lLCAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBmaXJzdFZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIHZhbHVlIG9mIHRoZSAke3ZhcmlhYmxlTmFtZX0gdmFyaWFibGUgaXMgbm90IHVuZGVmaW5lZC5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdHlwZS5pc1N1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKCF0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgYXNzZXJ0ZWQgdHlwZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCBhIHN1Yi10eXBlIG9mIGl0cyBkZWNsYXJlZCB0eXBlLmAsIHR5cGVBc3NlcnRpb25Ob2RlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsInR5cGVzIiwibmFtZXMiLCJ2YWx1ZXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3ROYW1lIiwiZmlyc3QiLCJmaXJzdFZhbHVlIiwidmFyaWFibGVOYW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RUeXBlIiwidmFyaWFibGVUeXBlIiwidHlwZVN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzU3ViVHlwZU9mIiwibmFtZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJhZGRWYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs2REFUSDttRUFDWTtxQkFFWDtxQkFDMEI7Ozs7OztBQUVoRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysb0JBQW9CSSxpQkFBaUIsRUFBRUMsT0FBTyxFQUFFO0lBQ3RFLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDLElBQU1DLFdBQVdKLGNBQWNDLG9CQUN6QkksV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjTCxRQUFRTSx1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxPQUFlLE9BQVRKLFVBQVMsMEJBQXdCSjtJQUN4RCxPQUFPO1FBQ0wsSUFBTVMsVUFBVVIsUUFBUVMsU0FBUztRQUVqQyxJQUFJRCxTQUFTO1lBQ1gsUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFNRSxRQUFRLEVBQUUsRUFDVkMsUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxXQUFXakIsY0FBY0csb0JBQ3pCZSxlQUFlQyxJQUFBQSx1QkFBb0IsRUFBQ0YsVUFBVUgsT0FBT0MsT0FBT0MsUUFBUVo7WUFFMUUsSUFBSWMsY0FBYztnQkFDaEIsSUFBTUUsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTixRQUNsQk8sYUFBYUQsSUFBQUEsWUFBSyxFQUFDTCxTQUNuQk8sZUFBZUgsV0FDZkksUUFBUUY7Z0JBRWQsSUFBSUUsVUFBVUMsV0FBVztvQkFDdkJyQixRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYlksY0FBYSxnQ0FBOEJwQjtnQkFDL0UsT0FBTztvQkFDTCxJQUFNdUIsT0FBT3RCLFFBQVF1QixrQkFBa0IsQ0FBQ3BCLFdBQ2xDcUIsWUFBWVAsSUFBQUEsWUFBSyxFQUFDUCxRQUNsQmUsZUFBZUQsV0FDZkUsNEJBQTRCSixLQUFLSyxXQUFXLENBQUNGO29CQUVuRCxJQUFJLENBQUNDLDJCQUEyQjt3QkFDOUIxQixRQUFRTyxLQUFLLENBQUMsQUFBQyw0QkFBd0MsT0FBYlksY0FBYSxzREFBb0RwQjtvQkFDN0csT0FBTzt3QkFDTCxJQUFNNkIsT0FBT1QsY0FDUFUsV0FBV0MsaUJBQVEsQ0FBQ0MsZUFBZSxDQUFDVCxNQUFNTTt3QkFFaEQ1QixRQUFRZ0MsV0FBVyxDQUFDSDt3QkFFcEI1Qix3QkFBd0IsSUFBSTtvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9