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
function termFromTermAndSubstitutions(term, substitutions, generalContext, specificContext) {
    if (term !== null) {
        var termNode = term.getNode(), termSingular = term.isSingular();
        term = null; ///
        if (termSingular) {
            var variableIdentifier = termNode.getVariableIdentifier(), variable = generalContext.findVariableByVariableIdentifier(variableIdentifier);
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
        var frameNode = frame.getNode(), frameSingular = frame.isSingular();
        frame = null; ///
        if (frameSingular) {
            var metavariableName = frameNode.getMetavariableName(), metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
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
        var statementNode = statement.getNode(), statementSingular = statement.isSingular();
        if (statementSingular) {
            statement = null;
            var substitution = null;
            var substitutionNode = statementNode.getSubstitutionNode();
            if (substitutionNode !== null) {
                substitution = generalContext.findSubstitutionBySubstitutionNode(substitutionNode);
            }
            var metavariableName = statementNode.getMetavariableName(), metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVNpbmd1bGFyID0gdGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHRlcm1TaW5ndWxhcikge1xuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgdGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0VGVybSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7ICAvLy9cblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbiIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE0QmdCQTtlQUFBQTs7UUE0QkFDO2VBQUFBOztRQXREQUM7ZUFBQUE7OztBQUFULFNBQVNBLDZCQUE2QkMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtJQUMvRixJQUFJSCxTQUFTLE1BQU07UUFDakIsSUFBTUksV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsZUFBZU4sS0FBS08sVUFBVTtRQUVwQ1AsT0FBTyxNQUFPLEdBQUc7UUFFakIsSUFBSU0sY0FBYztZQUNoQixJQUFNRSxxQkFBcUJKLFNBQVNLLHFCQUFxQixJQUNuREMsV0FBV1IsZUFBZVMsZ0NBQWdDLENBQUNIO1lBRWpFLElBQUlFLGFBQWEsTUFBTTtnQkFDckIsSUFBTUUsZUFBZVgsY0FBY1ksMEJBQTBCLENBQUNIO2dCQUU5RCxJQUFJRSxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUUsbUJBQW1CRixjQUFlLEdBQUc7b0JBRTNDWixPQUFPYyxpQkFBaUJDLE9BQU87Z0JBQ2pDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT2Y7QUFDVDtBQUVPLFNBQVNILCtCQUErQm1CLEtBQUssRUFBRWYsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7SUFDbEcsSUFBSWEsVUFBVSxNQUFNO1FBQ2xCLElBQU1DLFlBQVlELE1BQU1YLE9BQU8sSUFDekJhLGdCQUFnQkYsTUFBTVQsVUFBVTtRQUV0Q1MsUUFBUSxNQUFPLEdBQUc7UUFFbEIsSUFBSUUsZUFBZTtZQUNqQixJQUFNQyxtQkFBbUJGLFVBQVVHLG1CQUFtQixJQUNoREMsZUFBZW5CLGVBQWVvQixrQ0FBa0MsQ0FBQ0g7WUFFdkUsSUFBSUUsaUJBQWlCLE1BQU07Z0JBQ3pCLElBQUlULGVBQWU7Z0JBRW5CQSxlQUFlWCxjQUFjc0IsNkNBQTZDLENBQUNGLGNBQWNUO2dCQUV6RixJQUFJQSxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTVksb0JBQW9CWixjQUFjLEdBQUc7b0JBRTNDSSxRQUFRUSxrQkFBa0JDLFFBQVE7Z0JBQ3BDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVNsQix1Q0FBdUM0QixTQUFTLEVBQUV6QixhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtJQUM5RyxJQUFJdUIsY0FBYyxNQUFNO1FBQ3RCLElBQU1DLGdCQUFnQkQsVUFBVXJCLE9BQU8sSUFDakN1QixvQkFBb0JGLFVBQVVuQixVQUFVO1FBRTlDLElBQUlxQixtQkFBbUI7WUFDckJGLFlBQVk7WUFFWixJQUFJZCxlQUFlO1lBRW5CLElBQU1pQixtQkFBbUJGLGNBQWNHLG1CQUFtQjtZQUUxRCxJQUFJRCxxQkFBcUIsTUFBTTtnQkFDN0JqQixlQUFlVixlQUFlNkIsa0NBQWtDLENBQUNGO1lBQ25FO1lBRUEsSUFBTVYsbUJBQW1CUSxjQUFjUCxtQkFBbUIsSUFDcERDLGVBQWVuQixlQUFlb0Isa0NBQWtDLENBQUNIO1lBRXZFLElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlQsZUFBZVgsY0FBY3NCLDZDQUE2QyxDQUFDRixjQUFjVDtnQkFFekYsSUFBSUEsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1vQix3QkFBd0JwQixjQUFjLEdBQUc7b0JBRS9DYyxZQUFZTSxzQkFBc0JDLFlBQVk7Z0JBQ2hEO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVCJ9