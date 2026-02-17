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
                var substitution = specificContext.findSubstitutionByVariable(variable, generalContext, specificContext);
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
                var substitution = specificContext.findSubstitutionByMetavariable(metavariable, generalContext, specificContext);
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
                substitution = specificContext.findSubstitutionBySubstitutionNode(substitutionNode, generalContext, specificContext);
                context = generalContext; ///
                generalContext = specificContext; ///
                specificContext = context; ///
            }
            var metavariableName = statementNode.getMetavariableName(), metavariable = generalContext.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                substitution = substitution !== null ? specificContext.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution, generalContext, specificContext) : specificContext.findSubstitutionByMetavariable(metavariable, generalContext, specificContext);
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
        var context = generalContext, metavariable = substitution.getMetavariable(generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFRlcm0gPSB0ZXJtU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50VGVybSgpO1xuXG4gICAgICAgICAgdGVybSA9IHJlcGxhY2VtZW50VGVybTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGZyYW1lID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gZnJhbWVTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRGcmFtZSgpO1xuXG4gICAgICAgICAgZnJhbWUgPSByZXBsYWNlbWVudEZyYW1lOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICBzdWJzdGl0dXRpb25zLmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MobWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZUEsIG1ldGF2YXJpYWJsZUIpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUIuY29tcGFyZShtZXRhdmFyaWFibGVBKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZVNpbmd1bGFyIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTaW5ndWxhciIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dCIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJmb3JFYWNoIiwiZ2V0TWV0YXZhcmlhYmxlIiwicHVzaCIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZUIiLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQ2dCQTtlQUFBQTs7UUE0RUFDO2VBQUFBOztRQWpEQUM7ZUFBQUE7O1FBdERBQztlQUFBQTs7O3lCQUplO0FBRS9CLElBQU0sQUFBRUMsV0FB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