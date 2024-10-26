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
        var metavariableNode = metavariableNodeQuery(frameNode), substitutionNode = substitutionNodeQuery(frameNode);
        if (metavariableNode !== null) {
            var substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zdWJzdGl0dXRpb24hXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0ZXJtLCBzdWJzdGl0dXRpb25zKSB7XG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucykge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCk7XG5cbiAgICBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOYW1lIiwiZ2V0VGVybSIsImZyYW1lIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBOEJnQkEsOEJBQThCO2VBQTlCQTs7SUFxQkFDLHNDQUFzQztlQUF0Q0E7O0lBMUNBQyw0QkFBNEI7ZUFBNUJBOzs7cUJBUFU7b0JBQ21CO0FBRTdDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDbENFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxTQUFTRiw2QkFBNkJLLElBQUksRUFBRUMsYUFBYTtJQUM5RCxJQUFJRCxTQUFTLE1BQU07UUFDakIsSUFBTUUsV0FBV0YsS0FBS0csT0FBTztRQUU3QkgsT0FBTztRQUVQLElBQU1JLGVBQWVSLGtCQUFrQk07UUFFdkMsSUFBSUUsaUJBQWlCLE1BQU07WUFDekIsSUFBTUMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDRyxlQUFlTixjQUFjTyw4QkFBOEIsQ0FBQ0g7WUFFbEUsSUFBSUUsaUJBQWlCLE1BQU07Z0JBQ3pCUCxPQUFPTyxhQUFhRSxPQUFPO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTUCwrQkFBK0JpQixLQUFLLEVBQUVULGFBQWE7SUFDakUsSUFBSVMsVUFBVSxNQUFNO1FBQ2xCLElBQU1DLFlBQVlELE1BQU1QLE9BQU87UUFFL0JPLFFBQVE7UUFFUixJQUFNRSxtQkFBbUJkLHNCQUFzQmEsWUFDekNFLG1CQUFtQmQsc0JBQXNCWTtRQUUvQyxJQUFJQyxxQkFBcUIsTUFBTTtZQUM3QixJQUFNTCxlQUFlTixjQUFjYSxxREFBcUQsQ0FBQ0Ysa0JBQWtCQztZQUUzRyxJQUFJTixpQkFBaUIsTUFBTTtnQkFDekJHLFFBQVFILGFBQWFRLFFBQVE7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVNoQix1Q0FBdUNzQixTQUFTLEVBQUVmLGFBQWE7SUFDN0UsSUFBSWUsY0FBYyxNQUFNO1FBQ3RCLElBQU1DLGdCQUFnQkQsVUFBVWIsT0FBTztRQUV2Q2EsWUFBWTtRQUVaLElBQU1KLG1CQUFtQmQsc0JBQXNCbUIsZ0JBQ3pDSixtQkFBbUJkLHNCQUFzQmtCO1FBRS9DLElBQUlMLHFCQUFxQixNQUFNO1lBQzdCLElBQU1MLGVBQWVOLGNBQWNhLHFEQUFxRCxDQUFDRixrQkFBa0JDO1lBRTNHLElBQUlOLGlCQUFpQixNQUFNO2dCQUN6QlMsWUFBWVQsYUFBYVcsWUFBWTtZQUN2QztRQUNGO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUIn0=