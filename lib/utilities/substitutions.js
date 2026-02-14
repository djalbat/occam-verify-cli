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
                var substitution = specificContext.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    var termSubstitution = substitution; ///
                    term = termSubstitution.getTerm();
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
                var substitution = null;
                substitution = specificContext.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);
                if (substitution !== null) {
                    var frameSubstitution = substitution; ///
                    frame = frameSubstitution.getFrame();
                }
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, generalContext, specificContext) {
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
                substitution = specificContext.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);
                if (substitution !== null) {
                    var statementSubstitution = substitution; ///
                    statement = statementSubstitution.getStatement();
                }
            }
        }
    }
    return statement;
}
function metavariablesFromSubstitutions(substitutions, generalContext, specificContext) {
    var metavariables = [];
    substitutions.forEach(function(substitution) {
        var context = generalContext, metavariable = substitution.getMetavariable(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAgLy8vXG5cbiAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVCLmNvbXBhcmUobWV0YXZhcmlhYmxlQSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbiIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJmb3JFYWNoIiwiY29udGV4dCIsImdldE1ldGF2YXJpYWJsZSIsInB1c2giLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVCIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0NnQkE7ZUFBQUE7O1FBOERBQztlQUFBQTs7UUFsQ0FDO2VBQUFBOztRQXREQUM7ZUFBQUE7Ozt5QkFKZTtB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