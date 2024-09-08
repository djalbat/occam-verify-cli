"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyVariableAgainstTerm;
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
function unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    var variableUnifiedAgainstTerm = false;
    var substitution = substitutions.findSubstitution(function(substitution) {
        var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);
        if (substitutionMatchesVariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionMatchesTermNodeB = substitution.matchTermNode(termNodeB);
        if (substitutionMatchesTermNodeB) {
            var verifiedAhead = verifyAhead();
            variableUnifiedAgainstTerm = verifiedAhead; ///
        }
    } else {
        var variableA = localContextA.findVariableByVariableNode(variableNodeA);
        if (variableA !== null) {
            var terms = [], termUnified = (0, _term.default)(termNodeB, terms, localContextB, function() {
                var verifiedAhead = false;
                var firstTerm = (0, _array.first)(terms), termB = firstTerm, variableB = variableFromTerm(termB, localContextB);
                if (variableA === variableB) {
                    verifiedAhead = verifyAhead();
                } else {
                    var term = termB, variable = variableA, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                    if (variableTypeEqualToOrSuperTypeOfTermType) {
                        var termNode = termNodeB, variableNode = variableNodeA, termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode), substitution = termForVariableSubstitution; ///
                        substitutions.addSubstitution(substitution);
                        verifiedAhead = verifyAhead();
                        if (!verifiedAhead) {
                            substitutions.removeSubstitution(substitution);
                        }
                    }
                }
                return verifiedAhead;
            });
            variableUnifiedAgainstTerm = termUnified; ///
        }
    }
    return variableUnifiedAgainstTerm;
}
function variableFromTerm(term, localContext) {
    var variable = null;
    var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        variable = localContext.findVariableByVariableNode(variableNode);
    }
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQiA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlQik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQikge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YXJpYWJsZUEgPSBsb2NhbENvbnRleHRBLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1VbmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZUIsIHRlcm1zLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtQiA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQiA9IHZhcmlhYmxlRnJvbVRlcm0odGVybUIsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZUEgPT09IHZhcmlhYmxlQikge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSA9IHRlcm1VbmlmaWVkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn0iXSwibmFtZXMiOlsidW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJ2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlQSIsIm1hdGNoVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQiIsIm1hdGNoVGVybU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwidmFyaWFibGVBIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtcyIsInRlcm1VbmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybUIiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybSIsInZhcmlhYmxlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsImFkZFN1YnN0aXR1dGlvbiIsInJlbW92ZVN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsImdldE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkRBUkQ7c0VBQ2lCO3FCQUVsQjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRix5QkFBeUJHLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ2pJLElBQUlDLDZCQUE2QjtJQUVqQyxJQUFNQyxlQUFlTCxjQUFjTSxnQkFBZ0IsQ0FBQyxTQUFDRDtRQUNuRCxJQUFNRSxtQ0FBbUNGLGFBQWFHLGlCQUFpQixDQUFDVjtRQUV4RSxJQUFJUyxrQ0FBa0M7WUFDcEMsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLElBQUlGLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1JLCtCQUErQkosYUFBYUssYUFBYSxDQUFDWDtRQUVoRSxJQUFJVSw4QkFBOEI7WUFDaEMsSUFBTUUsZ0JBQWdCUjtZQUV0QkMsNkJBQTZCTyxlQUFnQixHQUFHO1FBQ2xEO0lBQ0YsT0FBTztRQUNMLElBQU1DLFlBQVlYLGNBQWNZLDBCQUEwQixDQUFDZjtRQUUzRCxJQUFJYyxjQUFjLE1BQU07WUFDdEIsSUFBTUUsUUFBUSxFQUFFLEVBQ1ZDLGNBQWNDLElBQUFBLGFBQVUsRUFBQ2pCLFdBQVdlLE9BQU9aLGVBQWU7Z0JBQ3hELElBQUlTLGdCQUFnQjtnQkFFcEIsSUFBTU0sWUFBWUMsSUFBQUEsWUFBSyxFQUFDSixRQUNsQkssUUFBUUYsV0FDUkcsWUFBWUMsaUJBQWlCRixPQUFPakI7Z0JBRTFDLElBQUlVLGNBQWNRLFdBQVc7b0JBQzNCVCxnQkFBZ0JSO2dCQUNsQixPQUFPO29CQUNMLElBQU1tQixPQUFPSCxPQUNQSSxXQUFXWCxXQUNYWSxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyxlQUFlSCxTQUFTRSxPQUFPLElBQy9CRSwyQ0FBMkNELGFBQWFFLHNCQUFzQixDQUFDSjtvQkFFckYsSUFBSUcsMENBQTBDO3dCQUM1QyxJQUFNRSxXQUFXOUIsV0FDWCtCLGVBQWVoQyxlQUNmaUMsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNILGNBQWNELFdBQ3BHeEIsZUFBZTBCLDZCQUE4QixHQUFHO3dCQUV0RC9CLGNBQWNrQyxlQUFlLENBQUM3Qjt3QkFFOUJNLGdCQUFnQlI7d0JBRWhCLElBQUksQ0FBQ1EsZUFBZTs0QkFDbEJYLGNBQWNtQyxrQkFBa0IsQ0FBQzlCO3dCQUNuQztvQkFDRjtnQkFDRjtnQkFFQSxPQUFPTTtZQUNUO1lBRU5QLDZCQUE2QlcsYUFBYyxHQUFHO1FBQ2hEO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRUEsU0FBU2lCLGlCQUFpQkMsSUFBSSxFQUFFYyxZQUFZO0lBQzFDLElBQUliLFdBQVc7SUFFZixJQUFNTSxXQUFXUCxLQUFLZSxPQUFPLElBQ3ZCUCxlQUFlbEMsa0JBQWtCaUM7SUFFdkMsSUFBSUMsaUJBQWlCLE1BQU07UUFDekJQLFdBQVdhLGFBQWF2QiwwQkFBMEIsQ0FBQ2lCO0lBQ3JEO0lBRUEsT0FBT1A7QUFDVCJ9