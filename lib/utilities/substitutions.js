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
    get metavariableNamesFromSubstitutions () {
        return metavariableNamesFromSubstitutions;
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
function metavariableNamesFromSubstitutions(substitutions) {
    var metavariableNames = [];
    substitutions.forEach(function(substitution) {
        var metavariableName = substitution.getMetavariableName();
        if (metavariableName !== null) {
            metavariableNames.push(metavariableName);
        }
    });
    compress(metavariableNames, function(metavariableNameA, metavariableNameB) {
        if (metavariableNameB !== metavariableNameB) {
            return true;
        }
    });
    return metavariableNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCk7XG5cbiAgICAgICAgICB0ZXJtID0gcmVwbGFjZW1lbnRUZXJtOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAgLy8vXG5cbiAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKTtcblxuICAgICAgICAgIGZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3BlY2lmaWNDb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVzID0gW107XG5cbiAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lcy5wdXNoKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MobWV0YXZhcmlhYmxlTmFtZXMsIChtZXRhdmFyaWFibGVOYW1lQSwgbWV0YXZhcmlhYmxlTmFtZUIpID0+IHtcbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUIgIT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybVN1YnN0aXR1dGlvbiIsInJlcGxhY2VtZW50VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVTaW5ndWxhciIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJjb250ZXh0IiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZU5hbWVzIiwiZm9yRWFjaCIsInB1c2giLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQ2dCQTtlQUFBQTs7UUE0RUFDO2VBQUFBOztRQWpEQUM7ZUFBQUE7O1FBdERBQztlQUFBQTs7O3lCQUplO0FBRS9CLElBQU0sQUFBRUMsV0FBYUMseUJBQWMsQ0FBM0JEO0FBRUQsU0FBU0QsNkJBQTZCRyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtJQUNoRixJQUFJRixTQUFTLE1BQU07UUFDakIsSUFBTUcsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsZUFBZUwsS0FBS00sVUFBVTtRQUVwQ04sT0FBTyxNQUFPLEdBQUc7UUFFakIsSUFBSUssY0FBYztZQUNoQixJQUFNRSxxQkFBcUJKLFNBQVNLLHFCQUFxQixJQUNuREMsV0FBV1IsZUFBZVMsZ0NBQWdDLENBQUNIO1lBRWpFLElBQUlFLGFBQWEsTUFBTTtnQkFDckIsSUFBTUUsZUFBZVQsZ0JBQWdCVSxvQ0FBb0MsQ0FB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