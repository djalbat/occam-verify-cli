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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _term = /*#__PURE__*/ _interop_require_default(require("../substitution/term"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../substitution/frame"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromTermAndSubstitutions(term, substitutions, context) {
    if (term !== null) {
        var Variable = _dom.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context);
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
        var Metavariable = _dom.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context);
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
        var Metavariable = _dom.default.Metavariable, statementNode = statement.getNode(), metavariable = Metavariable.fromStatementNode(statementNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGZyYW1lID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbjtcblxuICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSAodGVybVN1YnN0aXR1dGlvbiB8fCBmcmFtZVN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwiVmFyaWFibGUiLCJkb20iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZSIsImZyb21UZXJtTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwiZ2V0VGVybSIsImZyYW1lIiwiTWV0YXZhcmlhYmxlIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbUZyYW1lTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3QmdCQSw4QkFBOEI7ZUFBOUJBOztJQWtCQUMsc0NBQXNDO2VBQXRDQTs7SUFwQ0FDLDRCQUE0QjtlQUE1QkE7OzswREFKQTsyREFDYTs0REFDQzs7Ozs7O0FBRXZCLFNBQVNBLDZCQUE2QkMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDdkUsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLElBQU0sQUFBRUcsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsV0FBV0wsS0FBS00sT0FBTyxJQUN2QkMsV0FBV0osU0FBU0ssWUFBWSxDQUFDSCxVQUFVSDtRQUVqRCxJQUFJSyxhQUFhLE1BQU07WUFDckIsSUFBTUUsZUFBZVIsY0FBY1MsMEJBQTBCLENBQUNIO1lBRTlELElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlQsT0FBT1MsYUFBYUUsT0FBTztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRU8sU0FBU0gsK0JBQStCZSxLQUFLLEVBQUVYLGFBQWEsRUFBRUMsT0FBTztJQUMxRSxJQUFJVSxVQUFVLE1BQU07UUFDbEIsSUFBTSxBQUFFQyxlQUFpQlQsWUFBRyxDQUFwQlMsY0FDRkMsWUFBWUYsTUFBTU4sT0FBTyxJQUN6QlMsZUFBZUYsYUFBYUcsYUFBYSxDQUFDRixXQUFXWjtRQUUzRCxJQUFJYSxpQkFBaUIsTUFBTTtZQUN6QixJQUFNTixlQUFlUixjQUFjZ0IsOEJBQThCLENBQUNGO1lBRWxFLElBQUlOLGlCQUFpQixNQUFNO2dCQUN6QkcsUUFBUUgsYUFBYVMsUUFBUTtZQUMvQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU2QsdUNBQXVDcUIsU0FBUyxFQUFFbEIsYUFBYSxFQUFFQyxPQUFPO0lBQ3RGLElBQUlpQixjQUFjLE1BQU07UUFDdEIsSUFBTSxBQUFFTixlQUFpQlQsWUFBRyxDQUFwQlMsY0FDRk8sZ0JBQWdCRCxVQUFVYixPQUFPLElBQ2pDUyxlQUFlRixhQUFhUSxpQkFBaUIsQ0FBQ0QsZUFBZWxCO1FBRW5FaUIsWUFBWSxNQUFNLEdBQUc7UUFFckIsSUFBSUosaUJBQWlCLE1BQU07WUFDekIsSUFBSU47WUFFSixJQUFNYSxtQkFBbUJDLGFBQWdCLENBQUNGLGlCQUFpQixDQUFDRCxlQUFlbEIsVUFDckVzQixvQkFBb0JDLGNBQWlCLENBQUNKLGlCQUFpQixDQUFDRCxlQUFlbEI7WUFFN0VPLGVBQWdCYSxvQkFBb0JFO1lBRXBDZixlQUFlUixjQUFjeUIsNkNBQTZDLENBQUNYLGNBQWNOLGVBQWUsR0FBRztZQUUzRyxJQUFJQSxpQkFBaUIsTUFBTTtnQkFDekJVLFlBQVlWLGFBQWFrQixZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9SO0FBQ1QifQ==