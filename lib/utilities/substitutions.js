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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
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
            var TermSubstitution = _dom.default.TermSubstitution, FrameSubstitution = _dom.default.FrameSubstitution, termSubstitution = TermSubstitution.fromStatementNode(statementNode, context), frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context);
            substitution = termSubstitution || frameSubstitution;
            substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgZnJhbWUgPSBudWxsOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9uO1xuXG4gICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9ICh0ZXJtU3Vic3RpdHV0aW9uIHx8IGZyYW1lU3Vic3RpdHV0aW9uKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJWYXJpYWJsZSIsImRvbSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJnZXRUZXJtIiwiZnJhbWUiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0RnJhbWUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdCZ0JBO2VBQUFBOztRQXNCQUM7ZUFBQUE7O1FBMUNBQztlQUFBQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSw2QkFBNkJDLElBQUksRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ3ZFLElBQUlGLFNBQVMsTUFBTTtRQUNqQixJQUFNLEFBQUVHLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLFdBQVdMLEtBQUtNLE9BQU8sSUFDdkJDLFdBQVdKLFNBQVNLLFlBQVksQ0FBQ0gsVUFBVUg7UUFFakRGLE9BQU8sTUFBTyxHQUFHO1FBRWpCLElBQUlPLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxlQUFlUixjQUFjUywwQkFBMEIsQ0FBQ0g7WUFFOUQsSUFBSUUsaUJBQWlCLE1BQU07Z0JBQ3pCVCxPQUFPUyxhQUFhRSxPQUFPO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTSCwrQkFBK0JlLEtBQUssRUFBRVgsYUFBYSxFQUFFQyxPQUFPO0lBQzFFLElBQUlVLFVBQVUsTUFBTTtRQUNsQixJQUFNLEFBQUVDLGVBQWlCVCxZQUFHLENBQXBCUyxjQUNGQyxZQUFZRixNQUFNTixPQUFPLElBQ3pCUyxlQUFlRixhQUFhRyxhQUFhLENBQUNGLFdBQVdaO1FBRTNEVSxRQUFRLE1BQU0sR0FBRztRQUVqQixJQUFJRyxpQkFBaUIsTUFBTTtZQUN6QixJQUFJTixlQUFlO1lBRW5CQSxlQUFlUixjQUFjZ0IsNkNBQTZDLENBQUNGLGNBQWNOO1lBRXpGLElBQUlBLGlCQUFpQixNQUFNO2dCQUN6QkcsUUFBUUgsYUFBYVMsUUFBUTtZQUMvQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU2QsdUNBQXVDcUIsU0FBUyxFQUFFbEIsYUFBYSxFQUFFQyxPQUFPO0lBQ3RGLElBQUlpQixjQUFjLE1BQU07UUFDdEIsSUFBTSxBQUFFTixlQUFpQlQsWUFBRyxDQUFwQlMsY0FDRk8sZ0JBQWdCRCxVQUFVYixPQUFPLElBQ2pDUyxlQUFlRixhQUFhUSxpQkFBaUIsQ0FBQ0QsZUFBZWxCO1FBRW5FaUIsWUFBWSxNQUFNLEdBQUc7UUFFckIsSUFBSUosaUJBQWlCLE1BQU07WUFDekIsSUFBSU47WUFFSixJQUFRYSxtQkFBd0NsQixZQUFHLENBQTNDa0Isa0JBQWtCQyxvQkFBc0JuQixZQUFHLENBQXpCbUIsbUJBQ3BCQyxtQkFBbUJGLGlCQUFpQkQsaUJBQWlCLENBQUNELGVBQWVsQixVQUNyRXVCLG9CQUFvQkYsa0JBQWtCRixpQkFBaUIsQ0FBQ0QsZUFBZWxCO1lBRTdFTyxlQUFnQmUsb0JBQW9CQztZQUVwQ2hCLGVBQWVSLGNBQWNnQiw2Q0FBNkMsQ0FBQ0YsY0FBY04sZUFBZSxHQUFHO1lBRTNHLElBQUlBLGlCQUFpQixNQUFNO2dCQUN6QlUsWUFBWVYsYUFBYWlCLFlBQVk7WUFDdkM7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVCJ9