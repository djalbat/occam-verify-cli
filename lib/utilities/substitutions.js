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
var _query = require("../utilities/query");
var _name = require("../utilities/name");
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/*/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/*/substitution!");
function termFromTermAndSubstitutions(term, substitutions) {
    if (term !== null) {
        var termNode = term.getNode();
        term = null;
        var variableNode = variableNodeQuery(termNode);
        if (variableNode !== null) {
            var variableName = (0, _name.variableNameFromVariableNode)(variableNode), substitution = substitutions.findSubstitutionByVariableName(variableName);
            if (substitution !== null) {
                term = substitution.getTerm();
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, substitutions) {
    if (frame !== null) {
        var frameNode = frame.getNode();
        frame = null;
        var metavariableNode = metavariableNodeQuery(frameNode);
        if (metavariableNode !== null) {
            var substitution = substitutions.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                frame = substitution.getFrame();
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, substitutions) {
    if (statement !== null) {
        var statementNode = statement.getNode();
        statement = null;
        var metavariableNode = metavariableNodeQuery(statementNode), substitutionNode = substitutionNodeQuery(statementNode);
        if (metavariableNode !== null) {
            var substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zdWJzdGl0dXRpb24hXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBzdWJzdGl0dXRpb25zKSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucykge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGZyYW1lID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zKSB7XG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZ2V0RnJhbWUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4QmdCQSw4QkFBOEI7ZUFBOUJBOztJQW9CQUMsc0NBQXNDO2VBQXRDQTs7SUF6Q0FDLDRCQUE0QjtlQUE1QkE7OztxQkFQVTtvQkFDbUI7QUFFN0MsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNsQ0Usd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLFNBQVNGLDZCQUE2QkssSUFBSSxFQUFFQyxhQUFhO0lBQzlELElBQUlELFNBQVMsTUFBTTtRQUNqQixJQUFNRSxXQUFXRixLQUFLRyxPQUFPO1FBRTdCSCxPQUFPO1FBRVAsSUFBTUksZUFBZVIsa0JBQWtCTTtRQUV2QyxJQUFJRSxpQkFBaUIsTUFBTTtZQUN6QixJQUFNQyxlQUFlQyxJQUFBQSxrQ0FBNEIsRUFBQ0YsZUFDNUNHLGVBQWVOLGNBQWNPLDhCQUE4QixDQUFDSDtZQUVsRSxJQUFJRSxpQkFBaUIsTUFBTTtnQkFDekJQLE9BQU9PLGFBQWFFLE9BQU87WUFDN0I7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLFNBQVNQLCtCQUErQmlCLEtBQUssRUFBRVQsYUFBYTtJQUNqRSxJQUFJUyxVQUFVLE1BQU07UUFDbEIsSUFBTUMsWUFBWUQsTUFBTVAsT0FBTztRQUUvQk8sUUFBUTtRQUVSLElBQU1FLG1CQUFtQmQsc0JBQXNCYTtRQUUvQyxJQUFJQyxxQkFBcUIsTUFBTTtZQUM3QixJQUFNTCxlQUFlTixjQUFjWSxrQ0FBa0MsQ0FBQ0Q7WUFFdEUsSUFBSUwsaUJBQWlCLE1BQU07Z0JBQ3pCRyxRQUFRSCxhQUFhTyxRQUFRO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTaEIsdUNBQXVDcUIsU0FBUyxFQUFFZCxhQUFhO0lBQzdFLElBQUljLGNBQWMsTUFBTTtRQUN0QixJQUFNQyxnQkFBZ0JELFVBQVVaLE9BQU87UUFFdkNZLFlBQVk7UUFFWixJQUFNSCxtQkFBbUJkLHNCQUFzQmtCLGdCQUN6Q0MsbUJBQW1CbEIsc0JBQXNCaUI7UUFFL0MsSUFBSUoscUJBQXFCLE1BQU07WUFDN0IsSUFBTUwsZUFBZU4sY0FBY2lCLHFEQUFxRCxDQUFDTixrQkFBa0JLO1lBRTNHLElBQUlWLGlCQUFpQixNQUFNO2dCQUN6QlEsWUFBWVIsYUFBYVksWUFBWTtZQUN2QztRQUNGO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=