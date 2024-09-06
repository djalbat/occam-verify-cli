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
                        substitutions.push(substitution);
                        verifiedAhead = verifyAhead();
                        if (!verifiedAhead) {
                            substitutions.pop();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQiA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlQik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1Rlcm1Ob2RlQikge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YXJpYWJsZUEgPSBsb2NhbENvbnRleHRBLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgIHRlcm1VbmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZUIsIHRlcm1zLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtQiA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQiA9IHZhcmlhYmxlRnJvbVRlcm0odGVybUIsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZUEgPT09IHZhcmlhYmxlQikge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMucG9wKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmFyaWFibGVVbmlmaWVkQWdhaW5zdFRlcm0gPSB0ZXJtVW5pZmllZDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybTtcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybSh0ZXJtLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59Il0sIm5hbWVzIjpbInVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwidmFyaWFibGVVbmlmaWVkQWdhaW5zdFRlcm0iLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNUZXJtTm9kZUIiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlQSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidGVybXMiLCJ0ZXJtVW5pZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm1CIiwidmFyaWFibGVCIiwidmFyaWFibGVGcm9tVGVybSIsInRlcm0iLCJ2YXJpYWJsZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZSIsInZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJwdXNoIiwicG9wIiwibG9jYWxDb250ZXh0IiwiZ2V0Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSRDtzRUFDaUI7cUJBRWxCO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLHlCQUF5QkcsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7SUFDakksSUFBSUMsNkJBQTZCO0lBRWpDLElBQU1DLGVBQWVMLGNBQWNNLElBQUksQ0FBQyxTQUFDRDtRQUN2QyxJQUFNRSxtQ0FBbUNGLGFBQWFHLGlCQUFpQixDQUFDVjtRQUV4RSxJQUFJUyxrQ0FBa0M7WUFDcEMsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLElBQUlGLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1JLCtCQUErQkosYUFBYUssYUFBYSxDQUFDWDtRQUVoRSxJQUFJVSw4QkFBOEI7WUFDaEMsSUFBTUUsZ0JBQWdCUjtZQUV0QkMsNkJBQTZCTyxlQUFnQixHQUFHO1FBQ2xEO0lBQ0YsT0FBTztRQUNMLElBQU1DLFlBQVlYLGNBQWNZLDBCQUEwQixDQUFDZjtRQUUzRCxJQUFJYyxjQUFjLE1BQU07WUFDdEIsSUFBTUUsUUFBUSxFQUFFLEVBQ1ZDLGNBQWNDLElBQUFBLGFBQVUsRUFBQ2pCLFdBQVdlLE9BQU9aLGVBQWU7Z0JBQ3hELElBQUlTLGdCQUFnQjtnQkFFcEIsSUFBTU0sWUFBWUMsSUFBQUEsWUFBSyxFQUFDSixRQUNsQkssUUFBUUYsV0FDUkcsWUFBWUMsaUJBQWlCRixPQUFPakI7Z0JBRTFDLElBQUlVLGNBQWNRLFdBQVc7b0JBQzNCVCxnQkFBZ0JSO2dCQUNsQixPQUFPO29CQUNMLElBQU1tQixPQUFPSCxPQUNQSSxXQUFXWCxXQUNYWSxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyxlQUFlSCxTQUFTRSxPQUFPLElBQy9CRSwyQ0FBMkNELGFBQWFFLHNCQUFzQixDQUFDSjtvQkFFckYsSUFBSUcsMENBQTBDO3dCQUM1QyxJQUFNRSxXQUFXOUIsV0FDWCtCLGVBQWVoQyxlQUNmaUMsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNILGNBQWNELFdBQ3BHeEIsZUFBZTBCLDZCQUE4QixHQUFHO3dCQUV0RC9CLGNBQWNrQyxJQUFJLENBQUM3Qjt3QkFFbkJNLGdCQUFnQlI7d0JBRWhCLElBQUksQ0FBQ1EsZUFBZTs0QkFDbEJYLGNBQWNtQyxHQUFHO3dCQUNuQjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPeEI7WUFDVDtZQUVOUCw2QkFBNkJXLGFBQWMsR0FBRztRQUNoRDtJQUNGO0lBRUEsT0FBT1g7QUFDVDtBQUVBLFNBQVNpQixpQkFBaUJDLElBQUksRUFBRWMsWUFBWTtJQUMxQyxJQUFJYixXQUFXO0lBRWYsSUFBTU0sV0FBV1AsS0FBS2UsT0FBTyxJQUN2QlAsZUFBZWxDLGtCQUFrQmlDO0lBRXZDLElBQUlDLGlCQUFpQixNQUFNO1FBQ3pCUCxXQUFXYSxhQUFhdkIsMEJBQTBCLENBQUNpQjtJQUNyRDtJQUVBLE9BQU9QO0FBQ1QifQ==