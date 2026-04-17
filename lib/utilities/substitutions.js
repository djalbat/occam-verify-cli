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
function termFromTermAndSubstitutions(term, context) {
    if (term !== null) {
        const termNode = term.getNode(), termSingular = term.isSingular();
        term = null; ///
        if (termSingular) {
            const variableNode = termNode.getVariableNode(), derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
            if (derivedSubstitution !== null) {
                const replacementTerm = derivedSubstitution.getReplacementTerm();
                term = replacementTerm; ///
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, context) {
    if (frame !== null) {
        const frameNode = frame.getNode(), frameSingular = frame.isSingular();
        frame = null; ///
        if (frameSingular) {
            const metavariableNode = frameNode.getMetavariableNode(), derivedSubstitution = context.findDerivedSubstitutionByMetavariableNode(metavariableNode);
            if (derivedSubstitution !== null) {
                const replacementFrame = derivedSubstitution.getReplacementFrame();
                frame = replacementFrame; ///
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, context) {
    if (statement !== null) {
        const statementNode = statement.getNode(), statementSingular = statement.isSingular();
        statement = null; ///
        if (statementSingular) {
            const metavariableNode = statementNode.getMetavariableNode(), derivedSubstitution = context.findDerivedSubstitutionByMetavariableNode(metavariableNode);
            if (derivedSubstitution !== null) {
                const replacementStatement = derivedSubstitution.getReplacementStatement();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBjb250ZXh0KSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU2luZ3VsYXIgPSB0ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIHRlcm0gPSBudWxsOyAgLy8vXG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIGRlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFRlcm0oKTtcblxuICAgICAgICB0ZXJtID0gcmVwbGFjZW1lbnRUZXJtOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgY29udGV4dCkge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGZyYW1lID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWUgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKTtcblxuICAgICAgICBmcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgY29udGV4dCkge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCk7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhdmFyaWFibGVOb2Rlc0Zyb21EZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IFtdO1xuXG4gIGRlcml2ZWRTdWJzdGl0dXRpb25zLmZvckVhY2goKGRlcml2ZWRTdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlTm9kZXMucHVzaChtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKG1ldGF2YXJpYWJsZU5vZGVzLCAobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGF2YXJpYWJsZU5vZGVCKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzZXRhdmFyaWFibGVOb2RlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibWV0YXZhcmlhYmxlTm9kZXNGcm9tRGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwidGVybSIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJtZXRhdmFyaWFibGVOb2RlcyIsImZvckVhY2giLCJwdXNoIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc2V0YXZhcmlhYmxlTm9kZUIiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNEJnQkE7ZUFBQUE7O1FBNENBQztlQUFBQTs7UUF0QkFDO2VBQUFBOztRQTVDQUM7ZUFBQUE7OzsyQkFKZTtBQUUvQixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyx5QkFBYztBQUU1QixTQUFTRiw2QkFBNkJHLElBQUksRUFBRUMsT0FBTztJQUN4RCxJQUFJRCxTQUFTLE1BQU07UUFDakIsTUFBTUUsV0FBV0YsS0FBS0csT0FBTyxJQUN2QkMsZUFBZUosS0FBS0ssVUFBVTtRQUVwQ0wsT0FBTyxNQUFPLEdBQUc7UUFFakIsSUFBSUksY0FBYztZQUNoQixNQUFNRSxlQUFlSixTQUFTSyxlQUFlLElBQ3ZDQyxzQkFBc0JQLFFBQVFRLHFDQUFxQyxDQUFDSDtZQUUxRSxJQUFJRSx3QkFBd0IsTUFBTTtnQkFDaEMsTUFBTUUsa0JBQWtCRixvQkFBb0JHLGtCQUFrQjtnQkFFOURYLE9BQU9VLGlCQUFpQixHQUFHO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9WO0FBQ1Q7QUFFTyxTQUFTTiwrQkFBK0JrQixLQUFLLEVBQUVYLE9BQU87SUFDM0QsSUFBSVcsVUFBVSxNQUFNO1FBQ2xCLE1BQU1DLFlBQVlELE1BQU1ULE9BQU8sSUFDekJXLGdCQUFnQkYsTUFBTVAsVUFBVTtRQUV0Q08sUUFBUSxNQUFPLEdBQUc7UUFFbEIsSUFBSUUsZUFBZTtZQUNqQixNQUFNQyxtQkFBbUJGLFVBQVVHLG1CQUFtQixJQUNoRFIsc0JBQXNCUCxRQUFRZ0IseUNBQXlDLENBQUNGO1lBRTlFLElBQUlQLHdCQUF3QixNQUFNO2dCQUNoQyxNQUFNVSxtQkFBbUJWLG9CQUFvQlcsbUJBQW1CO2dCQUVoRVAsUUFBUU0sa0JBQWtCLEdBQUc7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNoQix1Q0FBdUN3QixTQUFTLEVBQUVuQixPQUFPO0lBQ3ZFLElBQUltQixjQUFjLE1BQU07UUFDdEIsTUFBTUMsZ0JBQWdCRCxVQUFVakIsT0FBTyxJQUNqQ21CLG9CQUFvQkYsVUFBVWYsVUFBVTtRQUU5Q2UsWUFBWSxNQUFPLEdBQUc7UUFFdEIsSUFBSUUsbUJBQW1CO1lBQ3JCLE1BQU1QLG1CQUFtQk0sY0FBY0wsbUJBQW1CLElBQ3BEUixzQkFBc0JQLFFBQVFnQix5Q0FBeUMsQ0FBQ0Y7WUFFOUUsSUFBSVAsd0JBQXdCLE1BQU07Z0JBQ2hDLE1BQU1lLHVCQUF1QmYsb0JBQW9CZ0IsdUJBQXVCO2dCQUV4RUosWUFBWUcsc0JBQXNCLEdBQUc7WUFDdkM7UUFDRjtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVN6QiwwQ0FBMEM4QixvQkFBb0I7SUFDNUUsTUFBTUMsb0JBQW9CLEVBQUU7SUFFNUJELHFCQUFxQkUsT0FBTyxDQUFDLENBQUNuQjtRQUM1QixNQUFNTyxtQkFBbUJQLG9CQUFvQlEsbUJBQW1CO1FBRWhFLElBQUlELHFCQUFxQixNQUFNO1lBQzdCVyxrQkFBa0JFLElBQUksQ0FBQ2I7UUFDekI7SUFDRjtJQUVBakIsU0FBUzRCLG1CQUFtQixDQUFDRyxtQkFBbUJDO1FBQzlDLE1BQU1DLDJDQUEyQ0Ysa0JBQWtCRyxLQUFLLENBQUNGO1FBRXpFLElBQUksQ0FBQ0MsMENBQTBDO1lBQzdDLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVCJ9