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
            var variableIdentifier = termNode.getVariableIdentifier(), substitution = specificContext.findSubstitutionByVariableIdentifier(variableIdentifier);
            if (substitution !== null) {
                var termSubstitution = substitution, replacementTerm = termSubstitution.getReplacementTerm();
                term = replacementTerm; ///
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
            var metavariableName = frameNode.getMetavariableName(), substitution = specificContext.findSubstitutionByMetavariableName(metavariableName);
            if (substitution !== null) {
                var frameSubstitution = substitution, replacementFrame = frameSubstitution.getReplacementFrame();
                frame = replacementFrame; ///
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
            var metavariableName = statementNode.getMetavariableName();
            substitution = substitution !== null ? specificContext.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) : specificContext.findSubstitutionByMetavariableName(metavariableName);
            if (substitution !== null) {
                var statementSubstitution = substitution, replacementStatement = statementSubstitution.getReplacementStatement();
                statement = replacementStatement; ///
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
        if (metavariableNameA !== metavariableNameB) {
            return true;
        }
    });
    return metavariableNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCk7XG5cbiAgICAgICAgdGVybSA9IHJlcGxhY2VtZW50VGVybTsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7ICAvLy9cblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKTtcblxuICAgICAgICBmcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlTmFtZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVzID0gW107XG5cbiAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lcy5wdXNoKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MobWV0YXZhcmlhYmxlTmFtZXMsIChtZXRhdmFyaWFibGVOYW1lQSwgbWV0YXZhcmlhYmxlTmFtZUIpID0+IHtcbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUEgIT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVOYW1lc0Zyb21TdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZVNpbmd1bGFyIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTaW5ndWxhciIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dCIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVOYW1lcyIsImZvckVhY2giLCJwdXNoIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkJnQkE7ZUFBQUE7O1FBcUVBQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztR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