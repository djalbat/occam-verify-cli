"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyVariableAgainstTerm;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead) {
    var variableVerifiedAgainstTerm = false;
    var substitution = substitutions.find(function(substitution) {
        var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNode);
        if (substitutionMatchesVariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var termNodeMatches = substitution.matchTermNode(termNode);
        if (termNodeMatches) {
            var verifiedAhead = verifyAhead();
            variableVerifiedAgainstTerm = verifiedAhead; ///
        }
    } else {
        var localContext = localContextA, variable = localContext.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var terms = [], localContext1 = localContextB, termVerified = (0, _term.default)(termNode, terms, localContext1, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                if (variableTypeEqualToOrSuperTypeOfTermType) {
                    var termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode), substitution = termForVariableSubstitution; ///
                    substitutions.push(substitution);
                    verifiedAhead = verifyAhead();
                    if (!verifiedAhead) {
                        substitutions.pop();
                    }
                }
                return verifiedAhead;
            });
            variableVerifiedAgainstTerm = termVerified; ///
        }
    }
    return variableVerifiedAgainstTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGVBZ2FpbnN0VGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm07XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJ2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0iLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZSIsInZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OzsyREFMRDtzRUFDaUI7cUJBRWxCOzs7Ozs7QUFFUCxTQUFTQSwwQkFBMEJDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ2hJLElBQUlDLDhCQUE4QjtJQUVsQyxJQUFNQyxlQUFlTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0Q7UUFDdkMsSUFBTUUsbUNBQW1DRixhQUFhRyxpQkFBaUIsQ0FBQ1Y7UUFFeEUsSUFBSVMsa0NBQWtDO1lBQ3BDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixJQUFJRixpQkFBaUIsTUFBTTtRQUN6QixJQUFNSSxrQkFBa0JKLGFBQWFLLGFBQWEsQ0FBQ1g7UUFFbkQsSUFBSVUsaUJBQWlCO1lBQ25CLElBQU1FLGdCQUFnQlI7WUFFdEJDLDhCQUE4Qk8sZUFBZ0IsR0FBRztRQUNuRDtJQUNGLE9BQU87UUFDTCxJQUFNQyxlQUFlWCxlQUNmWSxXQUFXRCxhQUFhRSwwQkFBMEIsQ0FBQ2hCO1FBRXpELElBQUllLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxRQUFRLEVBQUUsRUFDVkgsZ0JBQWVWLGVBQ2ZjLGVBQWVDLElBQUFBLGFBQVUsRUFBQ2xCLFVBQVVnQixPQUFPSCxlQUFjO2dCQUN2RCxJQUFJRCxnQkFBZ0I7Z0JBRXBCLElBQU1PLFlBQVlDLElBQUFBLFlBQUssRUFBQ0osUUFDbEJLLE9BQU9GLFdBQ1BHLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLGVBQWVWLFNBQVNTLE9BQU8sSUFDL0JFLDJDQUEyQ0QsYUFBYUUsc0JBQXNCLENBQUNKO2dCQUVyRixJQUFJRywwQ0FBMEM7b0JBQzVDLElBQU1FLDhCQUE4QkMsd0JBQTJCLENBQUNDLDJCQUEyQixDQUFDOUIsY0FBY0MsV0FDcEdNLGVBQWVxQiw2QkFBOEIsR0FBRztvQkFFdEQxQixjQUFjNkIsSUFBSSxDQUFDeEI7b0JBRW5CTSxnQkFBZ0JSO29CQUVoQixJQUFJLENBQUNRLGVBQWU7d0JBQ2xCWCxjQUFjOEIsR0FBRztvQkFDbkI7Z0JBQ0Y7Z0JBRUEsT0FBT25CO1lBQ1Q7WUFFTlAsOEJBQThCWSxjQUFlLEdBQUc7UUFDbEQ7SUFDRjtJQUVBLE9BQU9aO0FBQ1QifQ==