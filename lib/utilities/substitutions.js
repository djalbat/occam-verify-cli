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
function metavariablesFromSubstitutions(substitutions, context) {
    var metavariables = [];
    substitutions.forEach(function(substitution) {
        var metavariable = substitution.getMetavariable(context);
        if (metavariable !== null) {
            metavariables.push(metavariable);
        }
    });
    compress(metavariables, function(metavariableA, metavariableB) {
        var metavariableAEqualToMetavariableB = metavariableB.isEqualTo(metavariableA);
        if (!metavariableAEqualToMetavariableB) {
            return true;
        }
    });
    return metavariables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICB0ZXJtID0gdGVybVN1YnN0aXR1dGlvbi5nZXRUZXJtKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGZyYW1lID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgIGZyYW1lID0gZnJhbWVTdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBnZW5lcmFsQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhtZXRhdmFyaWFibGVzLCAobWV0YXZhcmlhYmxlQSwgbWV0YXZhcmlhYmxlQikgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUIuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUEpO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVBRXF1YWxUb01ldGF2YXJpYWJsZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbiIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50IiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJmb3JFYWNoIiwiZ2V0TWV0YXZhcmlhYmxlIiwicHVzaCIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCIiwiaXNFcXVhbFRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnQ2dCQTtlQUFBQTs7UUE4REFDO2VBQUFBOztRQWxDQUM7ZUFBQUE7O1FBdERBQztlQUFBQTs7O3lCQUplO0FBRS9CLElBQU0sQUFBRUMsV0FBYUMseUJBQWMs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