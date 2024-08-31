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
function verifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    var variableVerifiedAgainstTerm = false;
    var substitution = substitutions.find(function(substitution) {
        var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);
        if (substitutionMatchesVariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionMatchesTermNodeB = substitution.matchTermNode(termNodeB);
        if (substitutionMatchesTermNodeB) {
            var verifiedAhead = verifyAhead();
            variableVerifiedAgainstTerm = verifiedAhead; ///
        }
    } else {
        var variableA = localContextA.findVariableByVariableNode(variableNodeA);
        if (variableA !== null) {
            var terms = [], termVerified = (0, _term.default)(termNodeB, terms, localContextB, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), termB = firstTerm, variableB = variableFromTerm(termB, localContextB);
                if (variableA === variableB) {
                    verifiedAhead = verifyAhead();
                } else {
                    var term = termB, variable = variableA, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                    if (variableTypeEqualToOrSuperTypeOfTermType) {
                        var termNode = termNodeB, variableNode = variableNodeA, termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode), substitution = termForVariableSubstitution; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGVBZ2FpbnN0VGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQiA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlQik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQikge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFyaWFibGVBID0gbG9jYWxDb250ZXh0QS5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBKTtcblxuICAgIGlmICh2YXJpYWJsZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlQiwgdGVybXMsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1CID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVCID0gdmFyaWFibGVGcm9tVGVybSh0ZXJtQiwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlQSA9PT0gdmFyaWFibGVCKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1CLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn0iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwidmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25NYXRjaGVzVGVybU5vZGVCIiwibWF0Y2hUZXJtTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJ2YXJpYWJsZUEiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybUIiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybSIsInZhcmlhYmxlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsInB1c2giLCJwb3AiLCJsb2NhbENvbnRleHQiLCJnZXROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJEO3NFQUNpQjtxQkFFbEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0YsMEJBQTBCRyxhQUFhLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztJQUNsSSxJQUFJQyw4QkFBOEI7SUFFbEMsSUFBTUMsZUFBZUwsY0FBY00sSUFBSSxDQUFDLFNBQUNEO1FBQ3ZDLElBQU1FLG1DQUFtQ0YsYUFBYUcsaUJBQWlCLENBQUNWO1FBRXhFLElBQUlTLGtDQUFrQztZQUNwQyxPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRU4sSUFBSUYsaUJBQWlCLE1BQU07UUFDekIsSUFBTUksK0JBQStCSixhQUFhSyxhQUFhLENBQUNYO1FBRWhFLElBQUlVLDhCQUE4QjtZQUNoQyxJQUFNRSxnQkFBZ0JSO1lBRXRCQyw4QkFBOEJPLGVBQWdCLEdBQUc7UUFDbkQ7SUFDRixPQUFPO1FBQ0wsSUFBTUMsWUFBWVgsY0FBY1ksMEJBQTBCLENBQUNmO1FBRTNELElBQUljLGNBQWMsTUFBTTtZQUN0QixJQUFNRSxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDakIsV0FBV2UsT0FBT1osZUFBZTtnQkFDekQsSUFBSVMsZ0JBQWdCO2dCQUVwQixJQUFNTSxZQUFZQyxJQUFBQSxZQUFLLEVBQUNKLFFBQ2xCSyxRQUFRRixXQUNSRyxZQUFZQyxpQkFBaUJGLE9BQU9qQjtnQkFFMUMsSUFBSVUsY0FBY1EsV0FBVztvQkFDM0JULGdCQUFnQlI7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBTW1CLE9BQU9ILE9BQ1BJLFdBQVdYLFdBQ1hZLFdBQVdGLEtBQUtHLE9BQU8sSUFDdkJDLGVBQWVILFNBQVNFLE9BQU8sSUFDL0JFLDJDQUEyQ0QsYUFBYUUsc0JBQXNCLENBQUNKO29CQUVyRixJQUFJRywwQ0FBMEM7d0JBQzVDLElBQU1FLFdBQVc5QixXQUNYK0IsZUFBZWhDLGVBQ2ZpQyw4QkFBOEJDLHdCQUEyQixDQUFDQywyQkFBMkIsQ0FBQ0gsY0FBY0QsV0FDcEd4QixlQUFlMEIsNkJBQThCLEdBQUc7d0JBRXREL0IsY0FBY2tDLElBQUksQ0FBQzdCO3dCQUVuQk0sZ0JBQWdCUjt3QkFFaEIsSUFBSSxDQUFDUSxlQUFlOzRCQUNsQlgsY0FBY21DLEdBQUc7d0JBQ25CO29CQUNGO2dCQUNGO2dCQUVBLE9BQU94QjtZQUNUO1lBRU5QLDhCQUE4QlcsY0FBZSxHQUFHO1FBQ2xEO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRUEsU0FBU2lCLGlCQUFpQkMsSUFBSSxFQUFFYyxZQUFZO0lBQzFDLElBQUliLFdBQVc7SUFFZixJQUFNTSxXQUFXUCxLQUFLZSxPQUFPLElBQ3ZCUCxlQUFlbEMsa0JBQWtCaUM7SUFFdkMsSUFBSUMsaUJBQWlCLE1BQU07UUFDekJQLFdBQVdhLGFBQWF2QiwwQkFBMEIsQ0FBQ2lCO0lBQ3JEO0lBRUEsT0FBT1A7QUFDVCJ9