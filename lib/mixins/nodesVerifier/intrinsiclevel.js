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
            var terms = [], context = localContextB, termNode1 = termNodeB, termVerified = (0, _term.default)(termNode1, terms, context, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvbm9kZXNWZXJpZmllci9pbnRyaW5zaWNsZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEEsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZVZlcmlmaWVkO1xufVxuXG5jb25zdCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgPSB7XG4gIHZlcmlmeVZhcmlhYmxlTm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zO1xuIl0sIm5hbWVzIjpbInZlcmlmeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsInZhcmlhYmxlTm9kZVZlcmlmaWVkIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwidmFyaWFibGVOb2RlIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm1zIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsInB1c2giLCJwb3AiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdFQTs7O2VBQUE7OzsyREF0RXVCO3NFQUNpQjtxQkFFbEI7Ozs7OztBQUV0QixTQUFTQSxtQkFBbUJDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQzVHLElBQUlDLHVCQUF1QjtJQUUzQixJQUFNQyxlQUFlTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0Q7UUFDdkMsSUFBTUUsbUNBQW1DRixhQUFhRyxpQkFBaUIsQ0FBQ1Y7UUFFeEUsSUFBSVMsa0NBQWtDO1lBQ3BDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixJQUFJRixpQkFBaUIsTUFBTTtRQUN6QixJQUFNSSxXQUFXVixXQUNYVyxrQkFBa0JMLGFBQWFNLGFBQWEsQ0FBQ0Y7UUFFbkQsSUFBSUMsaUJBQWlCO1lBQ25CLElBQU1FLGdCQUFnQlQ7WUFFdEJDLHVCQUF1QlEsZUFBZ0IsR0FBRztRQUM1QztJQUNGLE9BQU87UUFDTCxJQUFNQyxlQUFlZixlQUNmZ0IsZUFBZWIsZUFDZmMsV0FBV0QsYUFBYUUsMEJBQTBCLENBQUNIO1FBRXpELElBQUlFLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxRQUFRLEVBQUUsRUFDVkMsVUFBVWhCLGVBQ1ZPLFlBQVdWLFdBQ1hvQixlQUFlQyxJQUFBQSxhQUFVLEVBQUNYLFdBQVVRLE9BQU9DLFNBQVM7Z0JBQ2xELElBQUlOLGdCQUFnQjtnQkFFcEIsSUFBTVMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsZUFBZVgsU0FBU1UsT0FBTyxJQUMvQkUsMkNBQTJDRCxhQUFhRSxzQkFBc0IsQ0FBQ0o7Z0JBRXJGLElBQUlHLDBDQUEwQztvQkFDNUMsSUFBTUUsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNsQixjQUFjSixZQUNwR0osZUFBZXdCLDZCQUE4QixHQUFHO29CQUV0RDdCLGNBQWNnQyxJQUFJLENBQUMzQjtvQkFFbkJPLGdCQUFnQlQ7b0JBRWhCLElBQUksQ0FBQ1MsZUFBZTt3QkFDbEJaLGNBQWNpQyxHQUFHO29CQUNuQjtnQkFDRjtnQkFFQSxPQUFPckI7WUFDVDtZQUVOUix1QkFBdUJlLGNBQWUsR0FBRztRQUMzQztJQUNGO0lBRUEsT0FBT2Y7QUFDVDtBQUVBLElBQU04QixvQ0FBb0M7SUFDeENyQyxvQkFBQUE7QUFDRjtJQUVBLFdBQWVxQyJ9