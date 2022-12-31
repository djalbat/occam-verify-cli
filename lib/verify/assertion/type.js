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
var _array = require("../../utilities/array");
var _string = require("../../utilities/string");
var _query = require("../../utilities/query");
var _term = require("../../verify/term");
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode, proofContext) {
    var typeAssertionVerified = false;
    proofContext.begin(typeAssertionNode);
    var typeAssertionString = (0, _string.nodeAsString)(typeAssertionNode);
    proofContext.debug("Verifying the '".concat(typeAssertionString, "' type assertion..."));
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = proofContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        proofContext.error("The ".concat(typeName, " type is not present."));
    } else {
        var assertedType = null;
        var type = proofContext.findTypeByTypeName(typeName), context = proofContext, termNode = termNodeQuery(typeAssertionNode);
        var variables = [], termVerifiedAsVariable = (0, _term.verifyTermAsVariable)(termNode, variables, context);
        if (termVerifiedAsVariable) {
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, variableType = variable.getType();
            assertedType = variableType; ///
        } else {
            var types = [], termVerifiedAgainstConstructors = (0, _term.verifyTermAgainstConstructors)(termNode, types, context);
            if (termVerifiedAgainstConstructors) {
                var firstType = (0, _array.first)(types), termType = firstType; ///
                assertedType = termType; ///
            }
        }
        if (assertedType !== null) {
            var typeEqualToOrSubTypeOfAssertedType = type.isEqualToOrSubTypeOf(assertedType);
            if (!typeEqualToOrSubTypeOfAssertedType) {
                var termString = (0, _string.nodeAsString)(termNode);
                proofContext.error("The type of the '".concat(termString, "' term or variable is not equal to or a sub-type of the asserted type."));
            } else {
                typeAssertionVerified = true;
            }
        }
    }
    if (typeAssertionVerified) {
        proofContext.info("Verified the '".concat(typeAssertionString, "' type assertion."));
    }
    typeAssertionVerified ? proofContext.complete(typeAssertionNode) : proofContext.halt(typeAssertionNode);
    return typeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSwgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4odHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSBub2RlQXNTdHJpbmcodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBwcm9vZkNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGxldCBhc3NlcnRlZFR5cGUgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IHByb29mQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIGNvbnRleHQgPSBwcm9vZkNvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICBhc3NlcnRlZFR5cGUgPSB2YXJpYWJsZVR5cGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlOyAvLy9cblxuICAgICAgICBhc3NlcnRlZFR5cGUgPSB0ZXJtVHlwZTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhc3NlcnRlZFR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUgPSB0eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGFzc2VydGVkVHlwZSk7XG5cbiAgICAgIGlmICghdHlwZUVxdWFsVG9PclN1YlR5cGVPZkFzc2VydGVkVHlwZSkge1xuICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB0eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBvciB2YXJpYWJsZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgYXNzZXJ0ZWQgdHlwZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICB9XG5cbiAgdHlwZUFzc2VydGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodHlwZUFzc2VydGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHR5cGVBc3NlcnRpb25Ob2RlKTtcblxuICByZXR1cm4gdHlwZUFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlIiwicHJvb2ZDb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJhc3NlcnRlZFR5cGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiY29udGV4dCIsInRlcm1Ob2RlIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZBc3NlcnRlZFR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1TdHJpbmciLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3FCQVJGO3NCQUNPO3FCQUNtQjtvQkFDb0I7QUFFcEUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpCLFNBQVNGLG9CQUFvQkksaUJBQWlCLEVBQUVDLFlBQVksRUFBRTtJQUMzRSxJQUFJQyx3QkFBd0IsS0FBSztJQUVqQ0QsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxzQkFBc0JDLElBQUFBLG9CQUFZLEVBQUNMO0lBRXpDQyxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQjtJQUV6RCxJQUFNRyxXQUFXUixjQUFjQyxvQkFDekJRLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csY0FBY1QsYUFBYVUsdUJBQXVCLENBQUNIO0lBRXpELElBQUksQ0FBQ0UsYUFBYTtRQUNoQlQsYUFBYVcsS0FBSyxDQUFDLEFBQUMsT0FBZSxPQUFUSixVQUFTO0lBQ3JDLE9BQU87UUFDTCxJQUFJSyxlQUFlLElBQUk7UUFFdkIsSUFBTUMsT0FBT2IsYUFBYWMsa0JBQWtCLENBQUNQLFdBQ3ZDUSxVQUFVZixjQUNWZ0IsV0FBV3BCLGNBQWNHO1FBRS9CLElBQU1rQixZQUFZLEVBQUUsRUFDZEMseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0gsVUFBVUMsV0FBV0Y7UUFFekUsSUFBSUcsd0JBQXdCO1lBQzFCLElBQU1FLGdCQUFnQkMsSUFBQUEsWUFBSyxFQUFDSixZQUN0QkssV0FBV0YsZUFDWEcsZUFBZUQsU0FBU0UsT0FBTztZQUVyQ1osZUFBZVcsY0FBZSxHQUFHO1FBQ25DLE9BQU87WUFDTCxJQUFNRSxRQUFRLEVBQUUsRUFDVkMsa0NBQWtDQyxJQUFBQSxtQ0FBNkIsRUFBQ1gsVUFBVVMsT0FBT1Y7WUFFdkYsSUFBSVcsaUNBQWlDO2dCQUNuQyxJQUFNRSxZQUFZUCxJQUFBQSxZQUFLLEVBQUNJLFFBQ2xCSSxXQUFXRCxXQUFXLEdBQUc7Z0JBRS9CaEIsZUFBZWlCLFVBQVcsR0FBRztZQUMvQixDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUlqQixpQkFBaUIsSUFBSSxFQUFFO1lBQ3pCLElBQU1rQixxQ0FBcUNqQixLQUFLa0Isb0JBQW9CLENBQUNuQjtZQUVyRSxJQUFJLENBQUNrQixvQ0FBb0M7Z0JBQ3ZDLElBQU1FLGFBQWE1QixJQUFBQSxvQkFBWSxFQUFDWTtnQkFFaENoQixhQUFhVyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWHFCLFlBQVc7WUFDcEQsT0FBTztnQkFDTC9CLHdCQUF3QixJQUFJO1lBQzlCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLHVCQUF1QjtRQUN6QkQsYUFBYWlDLElBQUksQ0FBQyxBQUFDLGlCQUFvQyxPQUFwQjlCLHFCQUFvQjtJQUN6RCxDQUFDO0lBRURGLHdCQUNFRCxhQUFha0MsUUFBUSxDQUFDbkMscUJBQ3BCQyxhQUFhbUMsSUFBSSxDQUFDcEMsa0JBQWtCO0lBRXhDLE9BQU9FO0FBQ1QifQ==