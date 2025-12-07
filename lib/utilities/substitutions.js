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
            var TermSubstitution = _ontology.default.TermSubstitution, FrameSubstitution = _ontology.default.FrameSubstitution, termSubstitution = TermSubstitution.fromStatementNode(statementNode, context), frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context);
            substitution = termSubstitution || frameSubstitution;
            substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICB0ZXJtID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICBmcmFtZSA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbjtcblxuICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uLCBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9ICh0ZXJtU3Vic3RpdHV0aW9uIHx8IGZyYW1lU3Vic3RpdHV0aW9uKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJWYXJpYWJsZSIsIm9udG9sb2d5IiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsImdldFRlcm0iLCJmcmFtZSIsIk1ldGF2YXJpYWJsZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJnZXRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImdldFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0JnQkE7ZUFBQUE7O1FBc0JBQztlQUFBQTs7UUExQ0FDO2VBQUFBOzs7K0RBRks7Ozs7OztBQUVkLFNBQVNBLDZCQUE2QkMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDdkUsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLElBQU0sQUFBRUcsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLFdBQVdMLEtBQUtNLE9BQU8sSUFDdkJDLFdBQVdKLFNBQVNLLFlBQVksQ0FBQ0gsVUFBVUg7UUFFakRGLE9BQU8sTUFBTyxHQUFHO1FBRWpCLElBQUlPLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxlQUFlUixjQUFjUywwQkFBMEIsQ0FBQ0g7WUFFOUQsSUFBSUUsaUJBQWlCLE1BQU07Z0JBQ3pCVCxPQUFPUyxhQUFhRSxPQUFPO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTSCwrQkFBK0JlLEtBQUssRUFBRVgsYUFBYSxFQUFFQyxPQUFPO0lBQzFFLElBQUlVLFVBQVUsTUFBTTtRQUNsQixJQUFNLEFBQUVDLGVBQWlCVCxpQkFBUSxDQUF6QlMsY0FDRkMsWUFBWUYsTUFBTU4sT0FBTyxJQUN6QlMsZUFBZUYsYUFBYUcsYUFBYSxDQUFDRixXQUFXWjtRQUUzRFUsUUFBUSxNQUFNLEdBQUc7UUFFakIsSUFBSUcsaUJBQWlCLE1BQU07WUFDekIsSUFBSU4sZUFBZTtZQUVuQkEsZUFBZVIsY0FBY2dCLDZDQUE2QyxDQUFDRixjQUFjTjtZQUV6RixJQUFJQSxpQkFBaUIsTUFBTTtnQkFDekJHLFFBQVFILGFBQWFTLFFBQVE7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNkLHVDQUF1Q3FCLFNBQVMsRUFBRWxCLGFBQWEsRUFBRUMsT0FBTztJQUN0RixJQUFJaUIsY0FBYyxNQUFNO1FBQ3RCLElBQU0sQUFBRU4sZUFBaUJULGlCQUFRLENBQXpCUyxjQUNGTyxnQkFBZ0JELFVBQVViLE9BQU8sSUFDakNTLGVBQWVGLGFBQWFRLGlCQUFpQixDQUFDRCxlQUFlbEI7UUFFbkVpQixZQUFZLE1BQU0sR0FBRztRQUVyQixJQUFJSixpQkFBaUIsTUFBTTtZQUN6QixJQUFJTjtZQUVKLElBQVFhLG1CQUF3Q2xCLGlCQUFRLENBQWhEa0Isa0JBQWtCQyxvQkFBc0JuQixpQkFBUSxDQUE5Qm1CLG1CQUNwQkMsbUJBQW1CRixpQkFBaUJELGlCQUFpQixDQUFDRCxlQUFlbEIsVUFDckV1QixvQkFBb0JGLGtCQUFrQkYsaUJBQWlCLENBQUNELGVBQWVsQjtZQUU3RU8sZUFBZ0JlLG9CQUFvQkM7WUFFcENoQixlQUFlUixjQUFjZ0IsNkNBQTZDLENBQUNGLGNBQWNOLGVBQWUsR0FBRztZQUUzRyxJQUFJQSxpQkFBaUIsTUFBTTtnQkFDekJVLFlBQVlWLGFBQWFpQixZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9QO0FBQ1QifQ==