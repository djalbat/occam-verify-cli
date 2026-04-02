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
    get metavariableNodesFromDerivedSubstitutions () {
        return metavariableNodesFromDerivedSubstitutions;
    },
    get statementFromStatementAndSubstitutions () {
        return statementFromStatementAndSubstitutions;
    },
    get termFromTermAndSubstitutions () {
        return termFromTermAndSubstitutions;
    }
});
const _necessary = require("necessary");
const { compress } = _necessary.arrayUtilities;
function termFromTermAndSubstitutions(term, generalContext, specificContext) {
    if (term !== null) {
        const termNode = term.getNode(), termSingular = term.isSingular();
        term = null; ///
        if (termSingular) {
            const variableNode = termNode.getVariableNode(), substitution = specificContext.findSubstitutionByVariableNode(variableNode);
            if (substitution !== null) {
                const termSubstitution = substitution, replacementTerm = termSubstitution.getReplacementTerm();
                term = replacementTerm; ///
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, generalContext, specificContext) {
    if (frame !== null) {
        const frameNode = frame.getNode(), frameSingular = frame.isSingular();
        frame = null; ///
        if (frameSingular) {
            const metavariableNode = frameNode.getMetavariableNode(), substitution = specificContext.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const frameSubstitution = substitution, replacementFrame = frameSubstitution.getReplacementFrame();
                frame = replacementFrame; ///
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, generalContext, specificContext) {
    if (statement !== null) {
        const statementNode = statement.getNode(), statementSingular = statement.isSingular();
        statement = null;
        if (statementSingular) {
            let substitution = null;
            const substitutionNode = statementNode.getSubstitutionNode();
            if (substitutionNode !== null) {
                let context = generalContext; ///
                generalContext = specificContext; ///
                specificContext = context; ///
                substitution = specificContext.findSubstitutionBySubstitutionNode(substitutionNode);
                context = generalContext; ///
                generalContext = specificContext; ///
                specificContext = context; ///
            }
            const metavariableNode = statementNode.getMetavariableNode();
            substitution = substitution !== null ? specificContext.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) : specificContext.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const statementSubstitution = substitution, replacementStatement = statementSubstitution.getReplacementStatement();
                statement = replacementStatement; ///
            }
        }
    }
    return statement;
}
function metavariableNodesFromDerivedSubstitutions(derivedSubstitutions) {
    const metavariableNodes = [];
    derivedSubstitutions.forEach((derivedSubstitution)=>{
        const metavariableNode = derivedSubstitution.getMetavariableNode();
        if (metavariableNode !== null) {
            metavariableNodes.push(metavariableNode);
        }
    });
    compress(metavariableNodes, (metavariableNodeA, metavariableNodeB)=>{
        const metavariableNodeAMatchesetavariableNodeB = metavariableNodeA.match(metavariableNodeB);
        if (!metavariableNodeAMatchesetavariableNodeB) {
            return true;
        }
    });
    return metavariableNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHRlcm1TdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCk7XG5cbiAgICAgICAgdGVybSA9IHJlcGxhY2VtZW50VGVybTsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7ICAvLy9cblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwZWNpZmljQ29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKTtcblxuICAgICAgICBmcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpO1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YXZhcmlhYmxlTm9kZXNGcm9tRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBbXTtcblxuICBkZXJpdmVkU3Vic3RpdHV0aW9ucy5mb3JFYWNoKChkZXJpdmVkU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGRlcml2ZWRTdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzLnB1c2gobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhtZXRhdmFyaWFibGVOb2RlcywgKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhdmFyaWFibGVOb2RlQikgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc2V0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQik7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc2V0YXZhcmlhYmxlTm9kZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVzO1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsIm1ldGF2YXJpYWJsZU5vZGVzRnJvbURlcml2ZWRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZVNpbmd1bGFyIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTaW5ndWxhciIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dCIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImRlcml2ZWRTdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwiZGVyaXZlZFN1YnN0aXR1dGlvbiIsInB1c2giLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2QmdCQTtlQUFBQTs7UUFxRUFDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBOUNBQztlQUFBQTs7OzJCQUplO0FBRS9CLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLHlCQUFjO0FBRTVCLFNBQVNGLDZCQUE2QkcsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7SUFDaEYsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLE1BQU1HLFdBQVdILEtBQUtJLE9BQU8sSUFDdkJDLGVBQWVMLEtBQUtNLFVBQVU7UUFFcENOLE9BQU8sTUFBTyxHQUFHO1FBRWpCLElBQUlLLGNBQWM7WUFDaEIsTUFBTUUsZUFBZUosU0FBU0ssZUFBZSxJQUN2Q0MsZUFBZVAsZ0JBQWdCUSw4QkFBOEIsQ0FBQ0g7WUFFcEUsSUFBSUUsaUJBQWlCLE1BQU07Z0JBQ3pCLE1BQU1FLG1CQUFtQkYsY0FDbkJHLGtCQUFrQkQsaUJBQWlCRSxrQkFBa0I7Z0JBRTNEYixPQUFPWSxpQkFBaUIsR0FBRztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWjtBQUNUO0FBRU8sU0FBU04sK0JBQStCb0IsS0FBSyxFQUFFYixjQUFjLEVBQUVDLGVBQWU7SUFDbkYsSUFBSVksVUFBVSxNQUFNO1FBQ2xCLE1BQU1DLFlBQVlELE1BQU1WLE9BQU8sSUFDekJZLGdCQUFnQkYsTUFBTVIsVUFBVTtRQUV0Q1EsUUFBUSxNQUFPLEdBQUc7UUFFbEIsSUFBSUUsZUFBZTtZQUNqQixNQUFNQyxtQkFBbUJGLFVBQVVHLG1CQUFtQixJQUNoRFQsZUFBZVAsZ0JBQWdCaUIsa0NBQWtDLENBQUNGO1lBRXhFLElBQUlSLGlCQUFpQixNQUFNO2dCQUN6QixNQUFNVyxvQkFBb0JYLGNBQ3BCWSxtQkFBbUJELGtCQUFrQkUsbUJBQW1CO2dCQUU5RFIsUUFBUU8sa0JBQWtCLEdBQUc7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNsQix1Q0FBdUMyQixTQUFTLEVBQUV0QixjQUFjLEVBQUVDLGVBQWU7SUFDL0YsSUFBSXFCLGNBQWMsTUFBTTtRQUN0QixNQUFNQyxnQkFBZ0JELFVBQVVuQixPQUFPLElBQ2pDcUIsb0JBQW9CRixVQUFVakIsVUFBVTtRQUU5Q2lCLFlBQVk7UUFFWixJQUFJRSxtQkFBbUI7WUFDckIsSUFBSWhCLGVBQWU7WUFFbkIsTUFBTWlCLG1CQUFtQkYsY0FBY0csbUJBQW1CO1lBRTFELElBQUlELHFCQUFxQixNQUFNO2dCQUM3QixJQUFJRSxVQUFVM0IsZ0JBQWdCLEdBQUc7Z0JBRWpDQSxpQkFBaUJDLGlCQUFpQixHQUFHO2dCQUVyQ0Esa0JBQWtCMEIsU0FBVSxHQUFHO2dCQUUvQm5CLGVBQWVQLGdCQUFnQjJCLGtDQUFrQyxDQUFDSDtnQkFFbEVFLFVBQVUzQixnQkFBZ0IsR0FBRztnQkFFN0JBLGlCQUFpQkMsaUJBQWlCLEdBQUc7Z0JBRXJDQSxrQkFBa0IwQixTQUFVLEdBQUc7WUFDakM7WUFFQSxNQUFNWCxtQkFBbUJPLGNBQWNOLG1CQUFtQjtZQUUxRFQsZUFBZSxBQUFDQSxpQkFBaUIsT0FDaEJQLGdCQUFnQjRCLGlEQUFpRCxDQUFDYixrQkFBa0JSLGdCQUNsRlAsZ0JBQWdCaUIsa0NBQWtDLENBQUNGO1lBRXRFLElBQUlSLGlCQUFpQixNQUFNO2dCQUN6QixNQUFNc0Isd0JBQXdCdEIsY0FDeEJ1Qix1QkFBdUJELHNCQUFzQkUsdUJBQXVCO2dCQUUxRVYsWUFBWVMsc0JBQXNCLEdBQUc7WUFDdkM7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVM1QiwwQ0FBMEN1QyxvQkFBb0I7SUFDNUUsTUFBTUMsb0JBQW9CLEVBQUU7SUFFNUJELHFCQUFxQkUsT0FBTyxDQUFDLENBQUNDO1FBQzVCLE1BQU1wQixtQkFBbUJvQixvQkFBb0JuQixtQkFBbUI7UUFFaEUsSUFBSUQscUJBQXFCLE1BQU07WUFDN0JrQixrQkFBa0JHLElBQUksQ0FBQ3JCO1FBQ3pCO0lBQ0Y7SUFFQW5CLFNBQVNxQyxtQkFBbUIsQ0FBQ0ksbUJBQW1CQztRQUM5QyxNQUFNQywyQ0FBMkNGLGtCQUFrQkcsS0FBSyxDQUFDRjtRQUV6RSxJQUFJLENBQUNDLDBDQUEwQztZQUM3QyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9OO0FBQ1QifQ==