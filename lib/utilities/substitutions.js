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
        term = null; ///
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
        frame = null; ///
        if (metavariable !== null) {
            var substitution = null;
            substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9uO1xuXG4gICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9ICh0ZXJtU3Vic3RpdHV0aW9uIHx8IGZyYW1lU3Vic3RpdHV0aW9uKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJWYXJpYWJsZSIsImRvbSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJnZXRUZXJtIiwiZnJhbWUiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0RnJhbWUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiVGVybVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBCZ0JBLDhCQUE4QjtlQUE5QkE7O0lBc0JBQyxzQ0FBc0M7ZUFBdENBOztJQTFDQUMsNEJBQTRCO2VBQTVCQTs7OzBEQUpBOzJEQUNhOzREQUNDOzs7Ozs7QUFFdkIsU0FBU0EsNkJBQTZCQyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUN2RSxJQUFJRixTQUFTLE1BQU07UUFDakIsSUFBTSxBQUFFRyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxXQUFXTCxLQUFLTSxPQUFPLElBQ3ZCQyxXQUFXSixTQUFTSyxZQUFZLENBQUNILFVBQVVIO1FBRWpERixPQUFPLE1BQU8sR0FBRztRQUVqQixJQUFJTyxhQUFhLE1BQU07WUFDckIsSUFBTUUsZUFBZVIsY0FBY1MsMEJBQTBCLENBQUNIO1lBRTlELElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlQsT0FBT1MsYUFBYUUsT0FBTztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRU8sU0FBU0gsK0JBQStCZSxLQUFLLEVBQUVYLGFBQWEsRUFBRUMsT0FBTztJQUMxRSxJQUFJVSxVQUFVLE1BQU07UUFDbEIsSUFBTSxBQUFFQyxlQUFpQlQsWUFBRyxDQUFwQlMsY0FDRkMsWUFBWUYsTUFBTU4sT0FBTyxJQUN6QlMsZUFBZUYsYUFBYUcsYUFBYSxDQUFDRixXQUFXWjtRQUUzRFUsUUFBUSxNQUFNLEdBQUc7UUFFakIsSUFBSUcsaUJBQWlCLE1BQU07WUFDekIsSUFBSU4sZUFBZTtZQUVuQkEsZUFBZVIsY0FBY2dCLDZDQUE2QyxDQUFDRixjQUFjTjtZQUV6RixJQUFJQSxpQkFBaUIsTUFBTTtnQkFDekJHLFFBQVFILGFBQWFTLFFBQVE7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNkLHVDQUF1Q3FCLFNBQVMsRUFBRWxCLGFBQWEsRUFBRUMsT0FBTztJQUN0RixJQUFJaUIsY0FBYyxNQUFNO1FBQ3RCLElBQU0sQUFBRU4sZUFBaUJULFlBQUcsQ0FBcEJTLGNBQ0ZPLGdCQUFnQkQsVUFBVWIsT0FBTyxJQUNqQ1MsZUFBZUYsYUFBYVEsaUJBQWlCLENBQUNELGVBQWVsQjtRQUVuRWlCLFlBQVksTUFBTSxHQUFHO1FBRXJCLElBQUlKLGlCQUFpQixNQUFNO1lBQ3pCLElBQUlOO1lBRUosSUFBTWEsbUJBQW1CQyxhQUFnQixDQUFDRixpQkFBaUIsQ0FBQ0QsZUFBZWxCLFVBQ3JFc0Isb0JBQW9CQyxjQUFpQixDQUFDSixpQkFBaUIsQ0FBQ0QsZUFBZWxCO1lBRTdFTyxlQUFnQmEsb0JBQW9CRTtZQUVwQ2YsZUFBZVIsY0FBY2dCLDZDQUE2QyxDQUFDRixjQUFjTixlQUFlLEdBQUc7WUFFM0csSUFBSUEsaUJBQWlCLE1BQU07Z0JBQ3pCVSxZQUFZVixhQUFhaUIsWUFBWTtZQUN2QztRQUNGO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUIn0=