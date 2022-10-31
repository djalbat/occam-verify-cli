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
function verifyTypeAssertion(typeAssertionNode, proofContext) {
    var typeAssertionVerified = false;
    proofContext.begin(typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = proofContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        proofContext.error("The ".concat(typeName, " type is not present."));
    } else {
        var derived = proofContext.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], names = [], values = [], context = proofContext, termNode = termNodeQuery(typeAssertionNode), termVerified = (0, _termAsVariable.default)(termNode, types, names, values, context);
            if (termVerified) {
                var firstName = (0, _array.first)(names), firstValue = (0, _array.first)(values), variableName = firstName, value = firstValue;
                if (value !== undefined) {
                    proofContext.error("The value of the ".concat(variableName, " variable is not undefined."));
                } else {
                    var type = proofContext.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeSubTypeOfVariableType = type.isSubTypeOf(variableType);
                    if (!typeSubTypeOfVariableType) {
                        proofContext.error("The asserted type of the ".concat(variableName, " variable is not a sub-type of its declared type."));
                    } else {
                        var name = variableName, variable = _variable.default.fromTypeAndName(type, name);
                        proofContext.addVariable(variable);
                        typeAssertionVerified = true;
                    }
                }
            }
        }
    }
    typeAssertionVerified ? proofContext.complete(typeAssertionNode) : proofContext.halt(typeAssertionNode);
    return typeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQXNWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1Bc1ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4odHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IHByb29mQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlICR7dHlwZU5hbWV9IHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IHByb29mQ29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgbmFtZXMgPSBbXSxcbiAgICAgICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgY29udGV4dCA9IHByb29mQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBuYW1lcywgdmFsdWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBmaXJzdChuYW1lcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFsdWUgPSBmaXJzdCh2YWx1ZXMpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSBmaXJzdE5hbWUsIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGZpcnN0VmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGVTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0eXBlLmlzU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAoIXR5cGVTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlIGFzc2VydGVkIHR5cGUgb2YgdGhlICR7dmFyaWFibGVOYW1lfSB2YXJpYWJsZSBpcyBub3QgYSBzdWItdHlwZSBvZiBpdHMgZGVjbGFyZWQgdHlwZS5gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIHByb29mQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHlwZUFzc2VydGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodHlwZUFzc2VydGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwicHJvb2ZDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwidHlwZXMiLCJuYW1lcyIsInZhbHVlcyIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3ROYW1lIiwiZmlyc3QiLCJmaXJzdFZhbHVlIiwidmFyaWFibGVOYW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmlyc3RUeXBlIiwidmFyaWFibGVUeXBlIiwidHlwZVN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzU3ViVHlwZU9mIiwibmFtZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJhZGRWYXJpYWJsZSIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs2REFUSDttRUFDWTtxQkFFWDtxQkFDMEI7Ozs7OztBQUVoRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysb0JBQW9CSSxpQkFBaUIsRUFBRUMsWUFBWSxFQUFFO0lBQzNFLElBQUlDLHdCQUF3QixLQUFLO0lBRWpDRCxhQUFhRSxLQUFLLENBQUNIO0lBRW5CLElBQU1JLFdBQVdMLGNBQWNDLG9CQUN6QkssV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjTixhQUFhTyx1QkFBdUIsQ0FBQ0g7SUFFekQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCTixhQUFhUSxLQUFLLENBQUMsQUFBQyxPQUFlLE9BQVRKLFVBQVM7SUFDckMsT0FBTztRQUNMLElBQU1LLFVBQVVULGFBQWFVLFNBQVM7UUFFdEMsSUFBSUQsU0FBUztZQUNYLFFBQVE7UUFDVixPQUFPO1lBQ0wsSUFBTUUsUUFBUSxFQUFFLEVBQ1ZDLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsVUFBVWQsY0FDVmUsV0FBV25CLGNBQWNHLG9CQUN6QmlCLGVBQWVDLElBQUFBLHVCQUFvQixFQUFDRixVQUFVSixPQUFPQyxPQUFPQyxRQUFRQztZQUUxRSxJQUFJRSxjQUFjO2dCQUNoQixJQUFNRSxZQUFZQyxJQUFBQSxZQUFLLEVBQUNQLFFBQ2xCUSxhQUFhRCxJQUFBQSxZQUFLLEVBQUNOLFNBQ25CUSxlQUFlSCxXQUNmSSxRQUFRRjtnQkFFZCxJQUFJRSxVQUFVQyxXQUFXO29CQUN2QnZCLGFBQWFRLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiYSxjQUFhO2dCQUN0RCxPQUFPO29CQUNMLElBQU1HLE9BQU94QixhQUFheUIsa0JBQWtCLENBQUNyQixXQUN2Q3NCLFlBQVlQLElBQUFBLFlBQUssRUFBQ1IsUUFDbEJnQixlQUFlRCxXQUNmRSw0QkFBNEJKLEtBQUtLLFdBQVcsQ0FBQ0Y7b0JBRW5ELElBQUksQ0FBQ0MsMkJBQTJCO3dCQUM5QjVCLGFBQWFRLEtBQUssQ0FBQyxBQUFDLDRCQUF3QyxPQUFiYSxjQUFhO29CQUM5RCxPQUFPO3dCQUNMLElBQU1TLE9BQU9ULGNBQ1BVLFdBQVdDLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ1QsTUFBTU07d0JBRWhEOUIsYUFBYWtDLFdBQVcsQ0FBQ0g7d0JBRXpCOUIsd0JBQXdCLElBQUk7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEQSx3QkFDRUQsYUFBYW1DLFFBQVEsQ0FBQ3BDLHFCQUNwQkMsYUFBYW9DLElBQUksQ0FBQ3JDLGtCQUFrQjtJQUV4QyxPQUFPRTtBQUNUIn0=