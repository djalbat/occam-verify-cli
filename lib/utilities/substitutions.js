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
    get areSubstitutionsResolved () {
        return areSubstitutionsResolved;
    },
    get frameFromFrameAndSubstitutions () {
        return frameFromFrameAndSubstitutions;
    },
    get resolveSubstitutions () {
        return resolveSubstitutions;
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
function resolveSubstitutions(substitutions) {
    var _this = this;
    var metavariables = metavariablesFromSubstitutions(substitutions);
    metavariables.forEach(function(metavariable) {
        var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
            var resolved;
            var substitution = complexSubstitution; ///
            resolved = substitution.isResolved();
            if (!resolved) {
                substitution.resolve(substitutions, context);
            }
        });
        if (complexSubstitutionsResolved) {
            return true;
        }
    });
}
function areSubstitutionsResolved(substitutions) {
    var _this = this;
    var metavariables = metavariablesFromSubstitutions(substitutions), resolved = metavariables.every(function(metavariable) {
        var complexSubstitutions = _this.findComplexSubstitutionsByMetavariable(metavariable), complexSubstitutionsResolved = complexSubstitutions.everySubstitution(function(complexSubstitution) {
            var complexSubstitutionResolved = complexSubstitution.isResolved();
            if (complexSubstitutionResolved) {
                return true;
            }
        });
        if (complexSubstitutionsResolved) {
            return true;
        }
    });
    return resolved;
}
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
function metavariablesFromSubstitutions(substitutions) {
    var metavariables = [];
    substitutions.forEach(function(substitution) {
        var metavariable = substitution.getMetavariable();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IGNvbXBsZXhTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgICAgICByZXNvbHZlZCA9IHN1YnN0aXR1dGlvbi5pc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLnJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZChzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIHJlc29sdmVkID0gbWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbnMgPSB0aGlzLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbXBsZXhTdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChjb21wbGV4U3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmlzUmVzb2x2ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXhTdWJzdGl0dXRpb25SZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVNpbmd1bGFyID0gdGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHRlcm1TaW5ndWxhcikge1xuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgdGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0VGVybSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7ICAvLy9cblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gZ2VuZXJhbENvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKG1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGVBLCBtZXRhdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlQi5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZUFFcXVhbFRvTWV0YXZhcmlhYmxlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXNGcm9tU3Vic3RpdHV0aW9ucyIsImZvckVhY2giLCJtZXRhdmFyaWFibGUiLCJjb21wbGV4U3Vic3RpdHV0aW9ucyIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlIiwiY29tcGxleFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwiaXNSZXNvbHZlZCIsInJlc29sdmUiLCJjb250ZXh0IiwiZXZlcnkiLCJjb21wbGV4U3Vic3RpdHV0aW9uUmVzb2x2ZWQiLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbiIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwicHVzaCIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQUVxdWFsVG9NZXRhdmFyaWFibGVCIiwiaXNFcXVhbFRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2QmdCQTtlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQXJFQUM7ZUFBQUE7O1FBaUdBQztlQUFBQTs7UUF0REFDO2VBQUFBOzs7eUJBL0NlO0FBRS9CLElBQU0sQUFBRUMsV0FBYUMseUJBQWMsQ0FBM0JEO0FBRUQsU0FBU0gscUJBQXFCSyxhQUFhOztJQUNoRCxJQUFNQyxnQkFBZ0JDLCtCQUErQkY7SUFFckRDLGNBQWNFLE9B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