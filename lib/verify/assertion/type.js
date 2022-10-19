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
var _necessary = require("necessary");
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../../variable"));
var _termAsVariable = /*#__PURE__*/ _interopRequireDefault(require("../../verify/termAsVariable"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var log = _necessary.loggingUtilities.log;
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, context) {
    var typeAssertionVerified = false;
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        log.error("The ".concat(typeName, " type is not present."));
    } else {
        var derived = context.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], names = [], values = [], termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _termAsVariable.default)(termNode, types, names, values, context);
            if (termVerified) {
                var firstName = (0, _array.first)(names), firstValue = (0, _array.first)(values), variableName = firstName, value = firstValue;
                if (value !== undefined) {
                    log.error("The value of the ".concat(variableName, " variable is not undefined."));
                } else {
                    var type = context.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeSubTypeOfVariableType = type.isSubTypeOf(variableType);
                    if (!typeSubTypeOfVariableType) {
                        log.error("The asserted type of the ".concat(variableName, " variable is not a sub-type of its declared type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvZ2dpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQXNWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1Bc1ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBsb2cgfSA9IGxvZ2dpbmdVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBsb2cuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBjb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICBuYW1lcyA9IFtdLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBuYW1lcywgdmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBmaXJzdChuYW1lcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFsdWUgPSBmaXJzdCh2YWx1ZXMpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSBmaXJzdE5hbWUsIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGZpcnN0VmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdHlwZS5pc1N1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKCF0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoYFRoZSBhc3NlcnRlZCB0eXBlIG9mIHRoZSAke3ZhcmlhYmxlTmFtZX0gdmFyaWFibGUgaXMgbm90IGEgc3ViLXR5cGUgb2YgaXRzIGRlY2xhcmVkIHR5cGUuYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImNvbnRleHQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwidHlwZXMiLCJuYW1lcyIsInZhbHVlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJmaXJzdE5hbWUiLCJmaXJzdCIsImZpcnN0VmFsdWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNTdWJUeXBlT2YiLCJuYW1lIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImFkZFZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQXdCQTs7O3lCQWJTOzZEQUVaO21FQUNZO3FCQUVYO3FCQUMwQjs7Ozs7O0FBRWhELElBQU0sQUFBRUMsTUFBUUMsMkJBQWdCLENBQXhCRDtBQUVSLElBQU1FLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTSixvQkFBb0JNLGlCQUFpQixFQUFFQyxPQUFPLEVBQUU7SUFDdEUsSUFBSUMsd0JBQXdCLEtBQUs7SUFFakMsSUFBTUMsV0FBV0osY0FBY0Msb0JBQ3pCSSxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ0YsV0FDaENHLGNBQWNMLFFBQVFNLHVCQUF1QixDQUFDSDtJQUVwRCxJQUFJLENBQUNFLGFBQWE7UUFDaEJYLElBQUlhLEtBQUssQ0FBQyxBQUFDLE9BQWUsT0FBVEosVUFBUztJQUM1QixPQUFPO1FBQ0wsSUFBTUssVUFBVVIsUUFBUVMsU0FBUztRQUVqQyxJQUFJRCxTQUFTO1lBQ1gsUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFNRSxRQUFRLEVBQUUsRUFDVkMsUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxXQUFXakIsY0FBY0csb0JBQ3pCZSxlQUFlQyxJQUFBQSx1QkFBb0IsRUFBQ0YsVUFBVUgsT0FBT0MsT0FBT0MsUUFBUVo7WUFFMUUsSUFBSWMsY0FBYztnQkFDaEIsSUFBTUUsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTixRQUNsQk8sYUFBYUQsSUFBQUEsWUFBSyxFQUFDTCxTQUNuQk8sZUFBZUgsV0FDZkksUUFBUUY7Z0JBRWQsSUFBSUUsVUFBVUMsV0FBVztvQkFDdkIzQixJQUFJYSxLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYlksY0FBYTtnQkFDN0MsT0FBTztvQkFDTCxJQUFNRyxPQUFPdEIsUUFBUXVCLGtCQUFrQixDQUFDcEIsV0FDbENxQixZQUFZUCxJQUFBQSxZQUFLLEVBQUNQLFFBQ2xCZSxlQUFlRCxXQUNmRSw0QkFBNEJKLEtBQUtLLFdBQVcsQ0FBQ0Y7b0JBRW5ELElBQUksQ0FBQ0MsMkJBQTJCO3dCQUM5QmhDLElBQUlhLEtBQUssQ0FBQyxBQUFDLDRCQUF3QyxPQUFiWSxjQUFhO29CQUNyRCxPQUFPO3dCQUNMLElBQU1TLE9BQU9ULGNBQ1BVLFdBQVdDLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ1QsTUFBTU07d0JBRWhENUIsUUFBUWdDLFdBQVcsQ0FBQ0g7d0JBRXBCNUIsd0JBQXdCLElBQUk7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9BO0FBQ1QifQ==