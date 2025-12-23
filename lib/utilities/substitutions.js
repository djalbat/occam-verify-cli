"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get frameFromFrameAndSubstitutions () {
        return frameFromFrameAndSubstitutions;
    },
    get statementFromStatementAndSubstitutions () {
        return statementFromStatementAndSubstitutions;
    },
    get termFromTermAndSubstitutions () {
        return termFromTermAndSubstitutions;
    }
});
var _query = require("../utilities/query");
var _frame = require("../utilities/frame");
var _variable = require("../utilities/variable");
var _statement = require("../utilities/statement");
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/termSubstitution|frameSubstitution!");
function termFromTermAndSubstitutions(term, substitutions, generalContext, specificContext) {
    if (term !== null) {
        var termNode = term.getNode(), termSimple = term.isSimple();
        term = null; ///
        if (termSimple) {
            var termVariableIdentifier = (0, _variable.termVariableIdentifierFromTermNode)(termNode), variableIdentifier = termVariableIdentifier, variable = generalContext.findVariableByVariableIdentifier(variableIdentifier);
            if (variable !== null) {
                var substitution = substitutions.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    var termSubstitution = substitution; ///
                    term = termSubstitution.getTerm();
                }
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, substitutions, generalContext, specificContext) {
    if (frame !== null) {
        var frameNode = frame.getNode(), frameSimple = frame.isSimple();
        frame = null; ///
        if (frameSimple) {
            var frameMetavariableName = (0, _frame.frameMetavariableNameFromFrameNode)(frameNode), metavariableName = frameMetavariableName, metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                var substitution = null;
                substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);
                if (substitution !== null) {
                    var frameSubstitution = substitution; ///
                    frame = frameSubstitution.getFrame();
                }
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, substitutions, generalContext, specificContext) {
    if (statement !== null) {
        var statementNode = statement.getNode(), statementSimple = statement.isSimple();
        if (statementSimple) {
            statement = null;
            var substitution = null;
            var substitutionNode = substitutionNodeQuery(statementNode);
            if (substitutionNode !== null) {
                substitution = generalContext.findSubstitutionBySubstitutionNode(substitutionNode);
            }
            var statementMetavariableName = (0, _statement.statementMetavariableNameFromFrameNode)(statementNode), metavariableName = statementMetavariableName, metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);
                if (substitution !== null) {
                    var statementSubstitution = substitution; ///
                    statement = statementSubstitution.getStatement();
                }
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZnJhbWVNZXRhdmFyaWFibGVOYW1lRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZnJhbWVcIjtcbmltcG9ydCB7IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhcmlhYmxlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybVN1YnN0aXR1dGlvbnxmcmFtZVN1YnN0aXR1dGlvbiFcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TaW1wbGUgPSB0ZXJtLmlzU2ltcGxlKCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHRlcm1TaW1wbGUpIHtcbiAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICB0ZXJtID0gdGVybVN1YnN0aXR1dGlvbi5nZXRUZXJtKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTaW1wbGUgPSBmcmFtZS5pc1NpbXBsZSgpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAgLy8vXG5cbiAgICBpZiAoZnJhbWVTaW1wbGUpIHtcbiAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTWV0YXZhcmlhYmxlTmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgIGZyYW1lID0gZnJhbWVTdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2ltcGxlID0gc3RhdGVtZW50LmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50U2ltcGxlKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWVGcm9tRnJhbWVOb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2ltcGxlIiwiaXNTaW1wbGUiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb24iLCJnZXRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZVNpbXBsZSIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZUZyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZ2V0RnJhbWUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U2ltcGxlIiwic3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZUZyb21GcmFtZU5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9DZ0JBO2VBQUFBOztRQTZCQUM7ZUFBQUE7O1FBeERBQztlQUFBQTs7O3FCQVBVO3FCQUN5Qjt3QkFDQTt5QkFDSTtBQUV2RCxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsNkJBQTZCRyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO0lBQy9GLElBQUlILFNBQVMsTUFBTTtRQUNqQixJQUFNSSxXQUFXSixLQUFLSyxPQUFPLElBQ3ZCQyxhQUFhTixLQUFLTyxRQUFRO1FBRWhDUCxPQUFPLE1BQU8sR0FBRztRQUVqQixJQUFJTSxZQUFZO1lBQ2QsSUFBTUUseUJBQXlCQyxJQUFBQSw0Q0FBa0MsRUFBQ0wsV0FDNURNLHFCQUFxQkYsd0JBQ3JCRyxXQUFXVCxlQUFlVSxnQ0FBZ0MsQ0FBQ0Y7WUFFakUsSUFBSUMsYUFBYSxNQUFNO2dCQUNyQixJQUFNRSxlQUFlWixjQUFjYSwwQkFBMEIsQ0FBQ0g7Z0JBRTlELElBQUlFLGlCQUFpQixNQUFNO29CQUN6QixJQUFNRSxtQkFBbUJGLGNBQWUsR0FBRztvQkFFM0NiLE9BQU9lLGlCQUFpQkMsT0FBTztnQkFDakM7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPaEI7QUFDVDtBQUVPLFNBQVNMLCtCQUErQnNCLEtBQUssRUFBRWhCLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO0lBQ2xHLElBQUljLFVBQVUsTUFBTTtRQUNsQixJQUFNQyxZQUFZRCxNQUFNWixPQUFPLElBQ3pCYyxjQUFjRixNQUFNVixRQUFRO1FBRWxDVSxRQUFRLE1BQU8sR0FBRztRQUVsQixJQUFJRSxhQUFhO1lBQ2YsSUFBTUMsd0JBQXdCQyxJQUFBQSx5Q0FBa0MsRUFBQ0gsWUFDM0RJLG1CQUFtQkYsdUJBQ25CRyxlQUFlckIsZUFBZXNCLGtDQUFrQyxDQUFDRjtZQUV2RSxJQUFJQyxpQkFBaUIsTUFBTTtnQkFDekIsSUFBSVYsZUFBZTtnQkFFbkJBLGVBQWVaLGNBQWN3Qiw2Q0FBNkMsQ0FBQ0YsY0FBY1Y7Z0JBRXpGLElBQUlBLGlCQUFpQixNQUFNO29CQUN6QixJQUFNYSxvQkFBb0JiLGNBQWMsR0FBRztvQkFFM0NJLFFBQVFTLGtCQUFrQkMsUUFBUTtnQkFDcEM7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPVjtBQUNUO0FBRU8sU0FBU3JCLHVDQUF1Q2dDLFNBQVMsRUFBRTNCLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO0lBQzlHLElBQUl5QixjQUFjLE1BQU07UUFDdEIsSUFBTUMsZ0JBQWdCRCxVQUFVdkIsT0FBTyxJQUNqQ3lCLGtCQUFrQkYsVUFBVXJCLFFBQVE7UUFFMUMsSUFBSXVCLGlCQUFpQjtZQUNuQkYsWUFBWTtZQUVaLElBQUlmLGVBQWU7WUFFbkIsSUFBTWtCLG1CQUFtQmpDLHNCQUFzQitCO1lBRS9DLElBQUlFLHFCQUFxQixNQUFNO2dCQUM3QmxCLGVBQWVYLGVBQWU4QixrQ0FBa0MsQ0FBQ0Q7WUFDbkU7WUFFQSxJQUFNRSw0QkFBNEJDLElBQUFBLGlEQUFzQyxFQUFDTCxnQkFDbkVQLG1CQUFtQlcsMkJBQ25CVixlQUFlckIsZUFBZXNCLGtDQUFrQyxDQUFDRjtZQUV2RSxJQUFJQyxpQkFBaUIsTUFBTTtnQkFDekJWLGVBQWVaLGNBQWN3Qiw2Q0FBNkMsQ0FBQ0YsY0FBY1Y7Z0JBRXpGLElBQUlBLGlCQUFpQixNQUFNO29CQUN6QixJQUFNc0Isd0JBQXdCdEIsY0FBYyxHQUFHO29CQUUvQ2UsWUFBWU8sc0JBQXNCQyxZQUFZO2dCQUNoRDtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9SO0FBQ1QifQ==