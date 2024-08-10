"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
var _array = require("../../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    var variableNodeVerified = false;
    var substitution = substitutions.find(function(substitution) {
        var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);
        if (substitutionMatchesVariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var termNode = termNodeB, termNodeMatches = substitution.matchTermNode(termNode);
        if (termNodeMatches) {
            var verifiedAhead = verifyAhead();
            variableNodeVerified = verifiedAhead; ///
        }
    } else {
        var variableNode = variableNodeA, localContext = localContextA, variable = localContext.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var terms = [], termNode1 = termNodeB, localContext1 = localContextB, termVerified = (0, _term.default)(termNode1, terms, localContext1, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                if (variableTypeEqualToOrSuperTypeOfTermType) {
                    var termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode1), substitution = termForVariableSubstitution; ///
                    substitutions.push(substitution);
                    verifiedAhead = verifyAhead();
                    if (!verifiedAhead) {
                        substitutions.pop();
                    }
                }
                return verifiedAhead;
            });
            variableNodeVerified = termVerified; ///
        }
    }
    return variableNodeVerified;
}
var intrinsicLevelNodesVerifierMixins = {
    verifyVariableNode: verifyVariableNode
};
var _default = intrinsicLevelNodesVerifierMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvbm9kZXNWZXJpZmllci9pbnRyaW5zaWNsZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEEsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZU5vZGVWZXJpZmllZDtcbn1cblxuY29uc3QgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zID0ge1xuICB2ZXJpZnlWYXJpYWJsZU5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllck1peGlucztcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlQSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsInB1c2giLCJwb3AiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdFQTs7O2VBQUE7OzsyREF0RXVCO3NFQUNpQjtxQkFFbEI7Ozs7OztBQUV0QixTQUFTQSxtQkFBbUJDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQzVHLElBQUlDLHVCQUF1QjtJQUUzQixJQUFNQyxlQUFlTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0Q7UUFDdkMsSUFBTUUsbUNBQW1DRixhQUFhRyxpQkFBaUIsQ0FBQ1Y7UUFFeEUsSUFBSVMsa0NBQWtDO1lBQ3BDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixJQUFJRixpQkFBaUIsTUFBTTtRQUN6QixJQUFNSSxXQUFXVixXQUNYVyxrQkFBa0JMLGFBQWFNLGFBQWEsQ0FBQ0Y7UUFFbkQsSUFBSUMsaUJBQWlCO1lBQ25CLElBQU1FLGdCQUFnQlQ7WUFFdEJDLHVCQUF1QlEsZUFBZ0IsR0FBRztRQUM1QztJQUNGLE9BQU87UUFDTCxJQUFNQyxlQUFlZixlQUNmZ0IsZUFBZWIsZUFDZmMsV0FBV0QsYUFBYUUsMEJBQTBCLENBQUNIO1FBRXpELElBQUlFLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxRQUFRLEVBQUUsRUFDVlIsWUFBV1YsV0FDWGUsZ0JBQWVaLGVBQ2ZnQixlQUFlQyxJQUFBQSxhQUFVLEVBQUNWLFdBQVVRLE9BQU9ILGVBQWM7Z0JBQ3ZELElBQUlGLGdCQUFnQjtnQkFFcEIsSUFBTVEsWUFBWUMsSUFBQUEsWUFBSyxFQUFDSixRQUNsQkssT0FBT0YsV0FDUEcsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsZUFBZVYsU0FBU1MsT0FBTyxJQUMvQkUsMkNBQTJDRCxhQUFhRSxzQkFBc0IsQ0FBQ0o7Z0JBRXJGLElBQUlHLDBDQUEwQztvQkFDNUMsSUFBTUUsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNqQixjQUFjSixZQUNwR0osZUFBZXVCLDZCQUE4QixHQUFHO29CQUV0RDVCLGNBQWMrQixJQUFJLENBQUMxQjtvQkFFbkJPLGdCQUFnQlQ7b0JBRWhCLElBQUksQ0FBQ1MsZUFBZTt3QkFDbEJaLGNBQWNnQyxHQUFHO29CQUNuQjtnQkFDRjtnQkFFQSxPQUFPcEI7WUFDVDtZQUVOUix1QkFBdUJjLGNBQWUsR0FBRztRQUMzQztJQUNGO0lBRUEsT0FBT2Q7QUFDVDtBQUVBLElBQU02QixvQ0FBb0M7SUFDeENwQyxvQkFBQUE7QUFDRjtJQUVBLFdBQWVvQyJ9