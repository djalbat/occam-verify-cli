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
    get metavariablesFromSubstitutions () {
        return metavariablesFromSubstitutions;
    },
    get statementFromStatementAndSubstitutions () {
        return statementFromStatementAndSubstitutions;
    },
    get termFromTermAndSubstitutions () {
        return termFromTermAndSubstitutions;
    }
});
var _necessary = require("necessary");
var compress = _necessary.arrayUtilities.compress;
function termFromTermAndSubstitutions(term, generalContext, specificContext) {
    if (term !== null) {
        var termNode = term.getNode(), termSingular = term.isSingular();
        term = null; ///
        if (termSingular) {
            var variableIdentifier = termNode.getVariableIdentifier(), variable = generalContext.findVariableByVariableIdentifier(variableIdentifier);
            if (variable !== null) {
                var substitution = specificContext.findSubstitutionByVariableIdentifier(variableIdentifier);
                if (substitution !== null) {
                    var termSubstitution = substitution, replacementTerm = termSubstitution.getReplacementTerm();
                    term = replacementTerm; ///
                }
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, generalContext, specificContext) {
    if (frame !== null) {
        var frameNode = frame.getNode(), frameSingular = frame.isSingular();
        frame = null; ///
        if (frameSingular) {
            var metavariableName = frameNode.getMetavariableName(), metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                var substitution = specificContext.findSubstitutionByMetavariableName(metavariableName);
                if (substitution !== null) {
                    var frameSubstitution = substitution, replacementFrame = frameSubstitution.getReplacementFrame();
                    frame = replacementFrame; ///
                }
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, generalContext, specificContext) {
    if (statement !== null) {
        var statementNode = statement.getNode(), statementSingular = statement.isSingular();
        statement = null;
        if (statementSingular) {
            var substitution = null;
            var substitutionNode = statementNode.getSubstitutionNode();
            if (substitutionNode !== null) {
                var context = generalContext; ///
                generalContext = specificContext; ///
                specificContext = context; ///
                substitution = specificContext.findSubstitutionBySubstitutionNode(substitutionNode);
                context = generalContext; ///
                generalContext = specificContext; ///
                specificContext = context; ///
            }
            var metavariableName = statementNode.getMetavariableName(), metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                substitution = substitution !== null ? specificContext.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) : specificContext.findSubstitutionByMetavariableName(metavariableName);
                if (substitution !== null) {
                    var statementSubstitution = substitution, replacementStatement = statementSubstitution.getReplacementStatement();
                    statement = replacementStatement; ///
                }
            }
        }
    }
    return statement;
}
function metavariablesFromSubstitutions(substitutions, generalContext, specificContext) {
    var metavariables = [];
    substitutions.forEach(function(substitution) {
        var context = generalContext, metavariableName = substitution.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
        if (metavariable !== null) {
            metavariables.push(metavariable);
        }
    });
    compress(metavariables, function(metavariableA, metavariableB) {
        var metavariableComparesToMetavariableB = metavariableB.compare(metavariableA);
        if (!metavariableComparesToMetavariableB) {
            return true;
        }
    });
    return metavariables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCk7XG5cbiAgICAgICAgICB0ZXJtID0gcmVwbGFjZW1lbnRUZXJtOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAgLy8vXG5cbiAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKTtcblxuICAgICAgICAgIGZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3BlY2lmaWNDb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gIHN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVCLmNvbXBhcmUobWV0YXZhcmlhYmxlQSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm1TdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTaW5ndWxhciIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dCIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZm9yRWFjaCIsInB1c2giLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVCIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBaUNnQkE7ZUFBQUE7O1FBNEVBQztlQUFBQTs7UUFqREFDO2VBQUFBOztRQXREQUM7ZUFBQUE7Ozt5QkFKZTtBQUUvQixJQUFNLEFBQUVDLFdBQWFDLHlCQUFjLENBQTNCRDtBQUVELFNBQVNELDZCQUE2QkcsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7SUFDaEYsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLElBQU1HLFdBQVdILEtBQUtJLE9BQU8sSUFDdkJDLGVBQWVMLEtBQUtNLFVBQVU7UUFFcENOLE9BQU8sTUFBTyxHQUFHO1FBRWpCLElBQUlLLGNBQWM7WUFDaEIsSUFBTUUscUJBQXFCSixTQUFTSyxxQkFBcUIsSUFDbkRDLFdBQVdSLGVBQWVTLGdDQUFnQyxDQUFDSDtZQUVqRSxJQUFJRSxhQUFhLE1BQU07Z0JBQ3JCLElBQU1FLGVBQWVULGdCQUFnQlUsb0NBQW9DLENBQUNMO2dCQUUxRSxJQUFJSSxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUUsbUJBQW1CRixjQUNuQkcsa0JBQWtCRCxpQkFBaUJFLGtCQUFrQjtvQkFFM0RmLE9BQU9jLGlCQUFpQixHQUFHO2dCQUM3QjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9kO0FBQ1Q7QUFFTyxTQUFTTiwrQkFBK0JzQixLQUFLLEVBQUVmLGNBQWMsRUFBRUMsZUFBZTtJQUNuRixJQUFJYyxVQUFVLE1BQU07UUFDbEIsSUFBTUMsWUFBWUQsTUFBTVosT0FBTyxJQUN6QmMsZ0JBQWdCRixNQUFNVixVQUFVO1FBRXRDVSxRQUFRLE1BQU8sR0FBRztRQUVsQixJQUFJRSxlQUFlO1lBQ2pCLElBQU1DLG1CQUFtQkYsVUFBVUcsbUJBQW1CLElBQ2hEQyxlQUFlcEIsZUFBZXFCLGtDQUFrQyxDQUFDSDtZQUV2RSxJQUFJRSxpQkFBaUIsTUFBTTtnQkFDekIsSUFBTVYsZUFBZVQsZ0JBQWdCcUIsa0NBQWtDLENBQUNKO2dCQUV4RSxJQUFJUixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTWEsb0JBQW9CYixjQUNwQmMsbUJBQW1CRCxrQkFBa0JFLG1CQUFtQjtvQkFFOURWLFFBQVFTLGtCQUFrQixHQUFHO2dCQUMvQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTcEIsdUNBQXVDK0IsU0FBUyxFQUFFMUIsY0FBYyxFQUFFQyxlQUFlO0lBQy9GLElBQUl5QixjQUFjLE1BQU07UUFDdEIsSUFBTUMsZ0JBQWdCRCxVQUFVdkIsT0FBTyxJQUNqQ3lCLG9CQUFvQkYsVUFBVXJCLFVBQVU7UUFFOUNxQixZQUFZO1FBRVosSUFBSUUsbUJBQW1CO1lBQ3JCLElBQUlsQixlQUFlO1lBRW5CLElBQU1tQixtQkFBbUJGLGNBQWNHLG1CQUFtQjtZQUUxRCxJQUFJRCxxQkFBcUIsTUFBTTtnQkFDN0IsSUFBSUUsVUFBVS9CLGdCQUFnQixHQUFHO2dCQUVqQ0EsaUJBQWlCQyxpQkFBaUIsR0FBRztnQkFFckNBLGtCQUFrQjhCLFNBQVUsR0FBRztnQkFFL0JyQixlQUFlVCxnQkFBZ0IrQixrQ0FBa0MsQ0FBQ0g7Z0JBRWxFRSxVQUFVL0IsZ0JBQWdCLEdBQUc7Z0JBRTdCQSxpQkFBaUJDLGlCQUFpQixHQUFHO2dCQUVyQ0Esa0JBQWtCOEIsU0FBVSxHQUFHO1lBQ2pDO1lBRUEsSUFBTWIsbUJBQW1CUyxjQUFjUixtQkFBbUIsSUFDcERDLGVBQWVwQixlQUFlcUIsa0NBQWtDLENBQUNIO1lBRXZFLElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlYsZUFBZSxBQUFDQSxpQkFBaUIsT0FDaEJULGdCQUFnQmdDLGlEQUFpRCxDQUFDZixrQkFBa0JSLGdCQUNsRlQsZ0JBQWdCcUIsa0NBQWtDLENBQUNKO2dCQUV0RSxJQUFJUixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTXdCLHdCQUF3QnhCLGNBQ3hCeUIsdUJBQXVCRCxzQkFBc0JFLHVCQUF1QjtvQkFFMUVWLFlBQVlTLHNCQUFzQixHQUFHO2dCQUN2QztZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTaEMsK0JBQStCMkMsYUFBYSxFQUFFckMsY0FBYyxFQUFFQyxlQUFlO0lBQzNGLElBQU1xQyxnQkFBZ0IsRUFBRTtJQUV4QkQsY0FBY0UsT0FBTyxDQUFDLFNBQUM3QjtRQUNyQixJQUFNcUIsVUFBVS9CLGdCQUNWa0IsbUJBQW1CUixhQUFhUyxtQkFBbUIsSUFDbkRDLGVBQWVXLFFBQVFWLGtDQUFrQyxDQUFDSDtRQUVoRSxJQUFJRSxpQkFBaUIsTUFBTTtZQUN6QmtCLGNBQWNFLElBQUksQ0FBQ3BCO1FBQ3JCO0lBQ0Y7SUFFQXZCLFNBQVN5QyxlQUFlLFNBQUNHLGVBQWVDO1FBQ3RDLElBQU1DLHNDQUFzQ0QsY0FBY0UsT0FBTyxDQUFDSDtRQUVsRSxJQUFJLENBQUNFLHFDQUFxQztZQUN4QyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9MO0FBQ1QifQ==