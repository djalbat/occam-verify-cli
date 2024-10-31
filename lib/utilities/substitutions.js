"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    frameFromFrameAndSubstitutions: function() {
        return frameFromFrameAndSubstitutions;
    },
    statementFromStatementAndSubstitutions: function() {
        return statementFromStatementAndSubstitutions;
    },
    termFromTermAndSubstitutions: function() {
        return termFromTermAndSubstitutions;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _term = /*#__PURE__*/ _interop_require_default(require("../substitution/term"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../substitution/frame"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromTermAndSubstitutions(term, substitutions, context) {
    if (term !== null) {
        var Variable = _shim.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context);
        if (variable !== null) {
            var substitution = substitutions.findSubstitutionByVariable(variable);
            if (substitution !== null) {
                term = substitution.getTerm();
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, substitutions, context) {
    if (frame !== null) {
        var Metavariable = _shim.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context);
        if (metavariable !== null) {
            var substitution = substitutions.findSubstitutionByMetavariable(metavariable);
            if (substitution !== null) {
                frame = substitution.getFrame();
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, substitutions, context) {
    if (statement !== null) {
        var Metavariable = _shim.default.Metavariable, statementNode = statement.getNode(), metavariable = Metavariable.fromStatementNode(statementNode, context);
        statement = null; ///
        if (metavariable !== null) {
            var substitution;
            var termSubstitution = _term.default.fromStatementNode(statementNode, context), frameSubstitution = _frame.default.fromStatementNode(statementNode, context);
            substitution = termSubstitution || frameSubstitution;
            substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybVwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9uO1xuXG4gICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9ICh0ZXJtU3Vic3RpdHV0aW9uIHx8IGZyYW1lU3Vic3RpdHV0aW9uKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJWYXJpYWJsZSIsInNoaW0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZSIsImZyb21UZXJtTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwiZ2V0VGVybSIsImZyYW1lIiwiTWV0YXZhcmlhYmxlIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbUZyYW1lTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3QmdCQSw4QkFBOEI7ZUFBOUJBOztJQWtCQUMsc0NBQXNDO2VBQXRDQTs7SUFwQ0FDLDRCQUE0QjtlQUE1QkE7OzsyREFKQzsyREFDWTs0REFDQzs7Ozs7O0FBRXZCLFNBQVNBLDZCQUE2QkMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDdkUsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLElBQU0sQUFBRUcsV0FBYUMsYUFBSSxDQUFqQkQsVUFDRkUsV0FBV0wsS0FBS00sT0FBTyxJQUN2QkMsV0FBV0osU0FBU0ssWUFBWSxDQUFDSCxVQUFVSDtRQUVqRCxJQUFJSyxhQUFhLE1BQU07WUFDckIsSUFBTUUsZUFBZVIsY0FBY1MsMEJBQTBCLENBQUNIO1lBRTlELElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlQsT0FBT1MsYUFBYUUsT0FBTztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRU8sU0FBU0gsK0JBQStCZSxLQUFLLEVBQUVYLGFBQWEsRUFBRUMsT0FBTztJQUMxRSxJQUFJVSxVQUFVLE1BQU07UUFDbEIsSUFBTSxBQUFFQyxlQUFpQlQsYUFBSSxDQUFyQlMsY0FDRkMsWUFBWUYsTUFBTU4sT0FBTyxJQUN6QlMsZUFBZUYsYUFBYUcsYUFBYSxDQUFDRixXQUFXWjtRQUUzRCxJQUFJYSxpQkFBaUIsTUFBTTtZQUN6QixJQUFNTixlQUFlUixjQUFjZ0IsOEJBQThCLENBQUNGO1lBRWxFLElBQUlOLGlCQUFpQixNQUFNO2dCQUN6QkcsUUFBUUgsYUFBYVMsUUFBUTtZQUMvQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU2QsdUNBQXVDcUIsU0FBUyxFQUFFbEIsYUFBYSxFQUFFQyxPQUFPO0lBQ3RGLElBQUlpQixjQUFjLE1BQU07UUFDdEIsSUFBTSxBQUFFTixlQUFpQlQsYUFBSSxDQUFyQlMsY0FDRk8sZ0JBQWdCRCxVQUFVYixPQUFPLElBQ2pDUyxlQUFlRixhQUFhUSxpQkFBaUIsQ0FBQ0QsZUFBZWxCO1FBRW5FaUIsWUFBWSxNQUFNLEdBQUc7UUFFckIsSUFBSUosaUJBQWlCLE1BQU07WUFDekIsSUFBSU47WUFFSixJQUFNYSxtQkFBbUJDLGFBQWdCLENBQUNGLGlCQUFpQixDQUFDRCxlQUFlbEIsVUFDckVzQixvQkFBb0JDLGNBQWlCLENBQUNKLGlCQUFpQixDQUFDRCxlQUFlbEI7WUFFN0VPLGVBQWdCYSxvQkFBb0JFO1lBRXBDZixlQUFlUixjQUFjeUIsNkNBQTZDLENBQUNYLGNBQWNOLGVBQWUsR0FBRztZQUUzRyxJQUFJQSxpQkFBaUIsTUFBTTtnQkFDekJVLFlBQVlWLGFBQWFrQixZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9SO0FBQ1QifQ==