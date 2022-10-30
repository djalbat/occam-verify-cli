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
        context.error("The ".concat(typeName, " type is not present."));
    } else {
        var derived = context.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], names = [], values = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _termAsVariable.default)(termNode, types, names, values, context);
            if (termVerified) {
                var firstName = (0, _array.first)(names), firstValue = (0, _array.first)(values), variableName = firstName, value = firstValue;
                if (value !== undefined) {
                    context.error("The value of the ".concat(variableName, " variable is not undefined."));
                } else {
                    var type = context.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeSubTypeOfVariableType = type.isSubTypeOf(variableType);
                    if (!typeSubTypeOfVariableType) {
                        context.error("The asserted type of the ".concat(variableName, " variable is not a sub-type of its declared type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQXNWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1Bc1ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBjb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICBuYW1lcyA9IFtdLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBuYW1lcywgdmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBmaXJzdChuYW1lcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFsdWUgPSBmaXJzdCh2YWx1ZXMpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSBmaXJzdE5hbWUsIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGZpcnN0VmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgdmFsdWUgb2YgdGhlICR7dmFyaWFibGVOYW1lfSB2YXJpYWJsZSBpcyBub3QgdW5kZWZpbmVkLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZVN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHR5cGUuaXNTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgIGlmICghdHlwZVN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGFzc2VydGVkIHR5cGUgb2YgdGhlICR7dmFyaWFibGVOYW1lfSB2YXJpYWJsZSBpcyBub3QgYSBzdWItdHlwZSBvZiBpdHMgZGVjbGFyZWQgdHlwZS5gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsInR5cGVzIiwibmFtZXMiLCJ2YWx1ZXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3ROYW1lIiwiZmlyc3QiLCJmaXJzdFZhbHVlIiwidmFyaWFibGVOYW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RUeXBlIiwidmFyaWFibGVUeXBlIiwidHlwZVN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzU3ViVHlwZU9mIiwibmFtZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJhZGRWYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs2REFUSDttRUFDWTtxQkFFWDtxQkFDMEI7Ozs7OztBQUVoRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysb0JBQW9CSSxpQkFBaUIsRUFBRUMsT0FBTyxFQUFFO0lBQ3RFLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDLElBQU1DLFdBQVdKLGNBQWNDLG9CQUN6QkksV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjTCxRQUFRTSx1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxPQUFlLE9BQVRKLFVBQVM7SUFDaEMsT0FBTztRQUNMLElBQU1LLFVBQVVSLFFBQVFTLFNBQVM7UUFFakMsSUFBSUQsU0FBUztZQUNYLFFBQVE7UUFDVixPQUFPO1lBQ0wsSUFBTUUsUUFBUSxFQUFFLEVBQ1ZDLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsV0FBV2pCLGNBQWNHLG9CQUN6QmUsZUFBZUMsSUFBQUEsdUJBQW9CLEVBQUNGLFVBQVVILE9BQU9DLE9BQU9DLFFBQVFaO1lBRTFFLElBQUljLGNBQWM7Z0JBQ2hCLElBQU1FLFlBQVlDLElBQUFBLFlBQUssRUFBQ04sUUFDbEJPLGFBQWFELElBQUFBLFlBQUssRUFBQ0wsU0FDbkJPLGVBQWVILFdBQ2ZJLFFBQVFGO2dCQUVkLElBQUlFLFVBQVVDLFdBQVc7b0JBQ3ZCckIsUUFBUU8sS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWJZLGNBQWE7Z0JBQ2pELE9BQU87b0JBQ0wsSUFBTUcsT0FBT3RCLFFBQVF1QixrQkFBa0IsQ0FBQ3BCLFdBQ2xDcUIsWUFBWVAsSUFBQUEsWUFBSyxFQUFDUCxRQUNsQmUsZUFBZUQsV0FDZkUsNEJBQTRCSixLQUFLSyxXQUFXLENBQUNGO29CQUVuRCxJQUFJLENBQUNDLDJCQUEyQjt3QkFDOUIxQixRQUFRTyxLQUFLLENBQUMsQUFBQyw0QkFBd0MsT0FBYlksY0FBYTtvQkFDekQsT0FBTzt3QkFDTCxJQUFNUyxPQUFPVCxjQUNQVSxXQUFXQyxpQkFBUSxDQUFDQyxlQUFlLENBQUNULE1BQU1NO3dCQUVoRDVCLFFBQVFnQyxXQUFXLENBQUNIO3dCQUVwQjVCLHdCQUF3QixJQUFJO29CQUM5QixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNUIn0=