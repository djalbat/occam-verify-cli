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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromTermAndSubstitutions(term, substitutions, context) {
    if (term !== null) {
        var Variable = _ontology.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context);
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
        var Metavariable = _ontology.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context);
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
        var Metavariable = _ontology.default.Metavariable, statementNode = statement.getNode(), metavariable = Metavariable.fromStatementNode(statementNode, context);
        statement = null; ///
        if (metavariable !== null) {
            var substitution;
            var TermSubstitution = _ontology.default.TermSubstitution, FrameSubstitution = _ontology.default.FrameSubstitution;
            substitution = TermSubstitution.fromStatement(statement, context) || FrameSubstitution.fromStatement(statement, context);
            substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICBmcmFtZSA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbjtcblxuICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uLCBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3k7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHx8IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJWYXJpYWJsZSIsIm9udG9sb2d5IiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsImdldFRlcm0iLCJmcmFtZSIsIk1ldGF2YXJpYWJsZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJnZXRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdCZ0JBO2VBQUFBOztRQXNCQUM7ZUFBQUE7O1FBMUNBQztlQUFBQTs7OytEQUZLOzs7Ozs7QUFFZCxTQUFTQSw2QkFBNkJDLElBQUksRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ3ZFLElBQUlGLFNBQVMsTUFBTTtRQUNqQixJQUFNLEFBQUVHLFdBQWFDLGlCQUFRLENBQXJCRCxVQUNGRSxXQUFXTCxLQUFLTSxPQUFPLElBQ3ZCQyxXQUFXSixTQUFTSyxZQUFZLENBQUNILFVBQVVIO1FBRWpERixPQUFPLE1BQU8sR0FBRztRQUVqQixJQUFJTyxhQUFhLE1BQU07WUFDckIsSUFBTUUsZUFBZVIsY0FBY1MsMEJBQTBCLENBQUNIO1lBRTlELElBQUlFLGlCQUFpQixNQUFNO2dCQUN6QlQsT0FBT1MsYUFBYUUsT0FBTztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRU8sU0FBU0gsK0JBQStCZSxLQUFLLEVBQUVYLGFBQWEsRUFBRUMsT0FBTztJQUMxRSxJQUFJVSxVQUFVLE1BQU07UUFDbEIsSUFBTSxBQUFFQyxlQUFpQlQsaUJBQVEsQ0FBekJTLGNBQ0ZDLFlBQVlGLE1BQU1OLE9BQU8sSUFDekJTLGVBQWVGLGFBQWFHLGFBQWEsQ0FBQ0YsV0FBV1o7UUFFM0RVLFFBQVEsTUFBTSxHQUFHO1FBRWpCLElBQUlHLGlCQUFpQixNQUFNO1lBQ3pCLElBQUlOLGVBQWU7WUFFbkJBLGVBQWVSLGNBQWNnQiw2Q0FBNkMsQ0FBQ0YsY0FBY047WUFFekYsSUFBSUEsaUJBQWlCLE1BQU07Z0JBQ3pCRyxRQUFRSCxhQUFhUyxRQUFRO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTZCx1Q0FBdUNxQixTQUFTLEVBQUVsQixhQUFhLEVBQUVDLE9BQU87SUFDdEYsSUFBSWlCLGNBQWMsTUFBTTtRQUN0QixJQUFNLEFBQUVOLGVBQWlCVCxpQkFBUSxDQUF6QlMsY0FDRk8sZ0JBQWdCRCxVQUFVYixPQUFPLElBQ2pDUyxlQUFlRixhQUFhUSxpQkFBaUIsQ0FBQ0QsZUFBZWxCO1FBRW5FaUIsWUFBWSxNQUFNLEdBQUc7UUFFckIsSUFBSUosaUJBQWlCLE1BQU07WUFDekIsSUFBSU47WUFFSixJQUFRYSxtQkFBd0NsQixpQkFBUSxDQUFoRGtCLGtCQUFrQkMsb0JBQXNCbkIsaUJBQVEsQ0FBOUJtQjtZQUUxQmQsZUFBZWEsaUJBQWlCRSxhQUFhLENBQUNMLFdBQVdqQixZQUFZcUIsa0JBQWtCQyxhQUFhLENBQUNMLFdBQVdqQjtZQUVoSE8sZUFBZVIsY0FBY2dCLDZDQUE2QyxDQUFDRixjQUFjTixlQUFlLEdBQUc7WUFFM0csSUFBSUEsaUJBQWlCLE1BQU07Z0JBQ3pCVSxZQUFZVixhQUFhZ0IsWUFBWTtZQUN2QztRQUNGO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUIn0=