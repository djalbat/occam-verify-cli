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
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable");
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
        var variableA = localContextA.findVariableByVariableNode(variableNode);
        if (variableA !== null) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContextB, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), termB = firstTerm, variableB = variableFromTerm(termB, localContextB);
                if (variableA === variableB) {
                    verifiedAhead = verifyAhead();
                } else {
                    var term = termB, variable = variableA, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                    if (variableTypeEqualToOrSuperTypeOfTermType) {
                        var termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode), substitution = termForVariableSubstitution; ///
                        substitutions.push(substitution);
                        verifiedAhead = verifyAhead();
                        if (!verifiedAhead) {
                            substitutions.pop();
                        }
                    }
                }
                return verifiedAhead;
            });
            variableVerifiedAgainstTerm = termVerified; ///
        }
    }
    return variableVerifiedAgainstTerm;
}
function variableFromTerm(term, localContext) {
    var variable = null;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        variable = localContext.findVariableByVariableNode(variableNode);
    }
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGVBZ2FpbnN0VGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFyaWFibGVBID0gbG9jYWxDb250ZXh0QS5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtQiA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQiA9IHZhcmlhYmxlRnJvbVRlcm0odGVybUIsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZUEgPT09IHZhcmlhYmxlQikge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm07XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm0odGVybSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwidmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlQSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtQiIsInZhcmlhYmxlQiIsInZhcmlhYmxlRnJvbVRlcm0iLCJ0ZXJtIiwidmFyaWFibGUiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsInB1c2giLCJwb3AiLCJsb2NhbENvbnRleHQiLCJnZXROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJEO3NFQUNpQjtxQkFFbEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0YsMEJBQTBCRyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztJQUNoSSxJQUFJQyw4QkFBOEI7SUFFbEMsSUFBTUMsZUFBZUwsY0FBY00sSUFBSSxDQUFDLFNBQUNEO1FBQ3ZDLElBQU1FLG1DQUFtQ0YsYUFBYUcsaUJBQWlCLENBQUNWO1FBRXhFLElBQUlTLGtDQUFrQztZQUNwQyxPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRU4sSUFBSUYsaUJBQWlCLE1BQU07UUFDekIsSUFBTUksa0JBQWtCSixhQUFhSyxhQUFhLENBQUNYO1FBRW5ELElBQUlVLGlCQUFpQjtZQUNuQixJQUFNRSxnQkFBZ0JSO1lBRXRCQyw4QkFBOEJPLGVBQWdCLEdBQUc7UUFDbkQ7SUFDRixPQUFPO1FBQ0wsSUFBTUMsWUFBWVgsY0FBY1ksMEJBQTBCLENBQUNmO1FBRTNELElBQUljLGNBQWMsTUFBTTtZQUN0QixJQUFNRSxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDakIsVUFBVWUsT0FBT1osZUFBZTtnQkFDeEQsSUFBSVMsZ0JBQWdCO2dCQUVwQixJQUFNTSxZQUFZQyxJQUFBQSxZQUFLLEVBQUNKLFFBQ2xCSyxRQUFRRixXQUNSRyxZQUFZQyxpQkFBaUJGLE9BQU9qQjtnQkFFMUMsSUFBSVUsY0FBY1EsV0FBVztvQkFDM0JULGdCQUFnQlI7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBTW1CLE9BQU9ILE9BQ1BJLFdBQVdYLFdBQ1hZLFdBQVdGLEtBQUtHLE9BQU8sSUFDdkJDLGVBQWVILFNBQVNFLE9BQU8sSUFDL0JFLDJDQUEyQ0QsYUFBYUUsc0JBQXNCLENBQUNKO29CQUVyRixJQUFJRywwQ0FBMEM7d0JBQzVDLElBQU1FLDhCQUE4QkMsd0JBQTJCLENBQUNDLDJCQUEyQixDQUFDakMsY0FBY0MsV0FDcEdNLGVBQWV3Qiw2QkFBOEIsR0FBRzt3QkFFdEQ3QixjQUFjZ0MsSUFBSSxDQUFDM0I7d0JBRW5CTSxnQkFBZ0JSO3dCQUVoQixJQUFJLENBQUNRLGVBQWU7NEJBQ2xCWCxjQUFjaUMsR0FBRzt3QkFDbkI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT3RCO1lBQ1Q7WUFFTlAsOEJBQThCVyxjQUFlLEdBQUc7UUFDbEQ7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFQSxTQUFTaUIsaUJBQWlCQyxJQUFJLEVBQUVZLFlBQVk7SUFDMUMsSUFBSVgsV0FBVztJQUVmLElBQU14QixXQUFXdUIsS0FBS2EsT0FBTyxJQUN2QnJDLGVBQWVGLGtCQUFrQkc7SUFFdkMsSUFBSUQsaUJBQWlCLE1BQU07UUFDekJ5QixXQUFXVyxhQUFhckIsMEJBQTBCLENBQUNmO0lBQ3JEO0lBRUEsT0FBT3lCO0FBQ1QifQ==