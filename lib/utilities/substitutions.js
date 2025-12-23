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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _frame = require("../utilities/frame");
var _variable = require("../utilities/variable");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromTermAndSubstitutions(term, substitutions, context) {
    if (term !== null) {
        var termNode = term.getNode(), termSimple = term.isSimple();
        term = null; ///
        if (termSimple) {
            var termVariableIdentifier = (0, _variable.termVariableIdentifierFromTermNode)(termNode), variableIdentifier = termVariableIdentifier, variable = context.findVariableByVariableIdentifier(variableIdentifier);
            if (variable !== null) {
                var substitution = substitutions.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    term = substitution.getTerm();
                }
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, substitutions, context) {
    if (frame !== null) {
        var frameNode = frame.getNode(), frameSimple = frame.isSimple();
        frame = null; ///
        if (frameSimple) {
            var frameMetavariableName = (0, _frame.frameMetavariableNameFromFrameNode)(frameNode), metavariableName = frameMetavariableName, metavariable = context.findMetavariableByMetavariableName(metavariableName);
            if (metavariable !== null) {
                var substitution = substitutions.findSubstitutionByMetavariable(metavariable);
                if (substitution !== null) {
                    frame = substitution.getFrame();
                }
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, substitutions, context) {
    if (statement !== null) {
        var Metavariable = _ontology.default.Metavariable, statementNode = statement.getNode(), metavariable = Metavariable.fromStatementNode(statementNode, context);
        statement = null; ///
        if (metavariable !== null) {
            var substitution = context.getSubstitution();
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgeyBmcmFtZU1ldGF2YXJpYWJsZU5hbWVGcm9tRnJhbWVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mcmFtZVwiO1xuaW1wb3J0IHsgdGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFyaWFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVNpbXBsZSA9IHRlcm0uaXNTaW1wbGUoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbXBsZSkge1xuICAgICAgY29uc3QgdGVybVZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybVZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTaW1wbGUgPSBmcmFtZS5pc1NpbXBsZSgpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAgLy8vXG5cbiAgICBpZiAoZnJhbWVTaW1wbGUpIHtcbiAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTWV0YXZhcmlhYmxlTmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU1ldGF2YXJpYWJsZU5hbWUsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb24oKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2ltcGxlIiwiaXNTaW1wbGUiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2ltcGxlIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWUiLCJzdGF0ZW1lbnQiLCJNZXRhdmFyaWFibGUiLCJvbnRvbG9neSIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0NnQkE7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUFsREFDO2VBQUFBOzs7K0RBTEs7cUJBRThCO3dCQUNBOzs7Ozs7QUFFNUMsU0FBU0EsNkJBQTZCQyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUN2RSxJQUFJRixTQUFTLE1BQU07UUFDakIsSUFBTUcsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsYUFBYUwsS0FBS00sUUFBUTtRQUVoQ04sT0FBTyxNQUFPLEdBQUc7UUFFakIsSUFBSUssWUFBWTtZQUNkLElBQU1FLHlCQUF5QkMsSUFBQUEsNENBQWtDLEVBQUNMLFdBQzVETSxxQkFBcUJGLHdCQUNyQkcsV0FBV1IsUUFBUVMsZ0NBQWdDLENBQUNGO1lBRTFELElBQUlDLGFBQWEsTUFBTTtnQkFDckIsSUFBTUUsZUFBZVgsY0FBY1ksMEJBQTBCLENBQUNIO2dCQUU5RCxJQUFJRSxpQkFBaUIsTUFBTTtvQkFDekJaLE9BQU9ZLGFBQWFFLE9BQU87Z0JBQzdCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT2Q7QUFDVDtBQUVPLFNBQVNILCtCQUErQmtCLEtBQUssRUFBRWQsYUFBYSxFQUFFQyxPQUFPO0lBQzFFLElBQUlhLFVBQVUsTUFBTTtRQUNsQixJQUFNQyxZQUFZRCxNQUFNWCxPQUFPLElBQ3pCYSxjQUFjRixNQUFNVCxRQUFRO1FBRWxDUyxRQUFRLE1BQU8sR0FBRztRQUVsQixJQUFJRSxhQUFhO1lBQ2YsSUFBTUMsd0JBQXdCQyxJQUFBQSx5Q0FBa0MsRUFBQ0gsWUFDM0RJLG1CQUFtQkYsdUJBQ25CRyxlQUFlbkIsUUFBUW9CLGtDQUFrQyxDQUFDRjtZQUVoRSxJQUFJQyxpQkFBaUIsTUFBTTtnQkFDekIsSUFBTVQsZUFBZVgsY0FBY3NCLDhCQUE4QixDQUFDRjtnQkFFbEUsSUFBSVQsaUJBQWlCLE1BQU07b0JBQ3pCRyxRQUFRSCxhQUFhWSxRQUFRO2dCQUMvQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTakIsdUNBQXVDMkIsU0FBUyxFQUFFeEIsYUFBYSxFQUFFQyxPQUFPO0lBQ3RGLElBQUl1QixjQUFjLE1BQU07UUFDdEIsSUFBTSxBQUFFQyxlQUFpQkMsaUJBQVEsQ0FBekJELGNBQ0ZFLGdCQUFnQkgsVUFBVXJCLE9BQU8sSUFDakNpQixlQUFlSyxhQUFhRyxpQkFBaUIsQ0FBQ0QsZUFBZTFCO1FBRW5FdUIsWUFBWSxNQUFNLEdBQUc7UUFFckIsSUFBSUosaUJBQWlCLE1BQU07WUFDekIsSUFBTVQsZUFBZVYsUUFBUTRCLGVBQWU7WUFFNUMsSUFBSWxCLGlCQUFpQixNQUFNO2dCQUN6QmEsWUFBWWIsYUFBYW1CLFlBQVk7WUFDdkM7UUFDRjtJQUNGO0lBRUEsT0FBT047QUFDVCJ9