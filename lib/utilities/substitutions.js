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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/*/metavariable!");
function termFromTermAndSubstitutions(term, substitutions) {
    if (term !== null) {
        var termNode = term.getNode(), variableNode = variableNodeQuery(termNode);
        if (variableNode !== null) {
            var variableName = (0, _name.variableNameFromVariableNode)(variableNode), substitution = substitutions.findSubstitution(function(substitution) {
                var variableNameMatches = substitution.matchVariableName(variableName);
                if (variableNameMatches) {
                    return true;
                }
            });
            if (substitution !== null) {
                term = substitution.getTerm();
            }
        }
    }
    return term;
}
function frameFromFrameAndSubstitutions(frame, substitutions) {
    if (frame !== null) {
        var frameNode = frame.getNode(), metavariableNode = metavariableNodeQuery(frameNode);
        if (metavariableNode !== null) {
            var substitution = substitutions.findSubstitution(function(substitution) {
                var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                if (metavariableNodeMatches) {
                    return true;
                }
            });
            if (substitution !== null) {
                frame = substitution.getTerm();
            }
        }
    }
    return frame;
}
function statementFromStatementAndSubstitutions(statement, substitutions) {
    if (statement !== null) {
        var statementNode = statement.getNode(), metavariableNode = metavariableNodeQuery(statementNode);
        if (metavariableNode !== null) {
            var substitution = substitutions.findSubstitution(function(substitution) {
                var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
                if (metavariableNodeMatches) {
                    return true;
                }
            });
            if (substitution !== null) {
                statement = substitution.getStatement();
            }
        }
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucykge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucykge1xuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbiIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImdldFRlcm0iLCJmcmFtZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdDZ0JBLDhCQUE4QjtlQUE5QkE7O0lBdUJBQyxzQ0FBc0M7ZUFBdENBOztJQS9DQUMsNEJBQTRCO2VBQTVCQTs7O3FCQU5VO29CQUNtQjtBQUU3QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsNkJBQTZCSSxJQUFJLEVBQUVDLGFBQWE7SUFDOUQsSUFBSUQsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLFdBQVdGLEtBQUtHLE9BQU8sSUFDdkJDLGVBQWVQLGtCQUFrQks7UUFFdkMsSUFBSUUsaUJBQWlCLE1BQU07WUFDekIsSUFBTUMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDRyxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDN0MsSUFBTUUsc0JBQXNCRixhQUFhRyxpQkFBaUIsQ0FBQ0w7Z0JBRTNELElBQUlJLHFCQUFxQjtvQkFDdkIsT0FBTztnQkFDVDtZQUNGO1lBRU4sSUFBSUYsaUJBQWlCLE1BQU07Z0JBQ3pCUCxPQUFPTyxhQUFhSSxPQUFPO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTTiwrQkFBK0JrQixLQUFLLEVBQUVYLGFBQWE7SUFDakUsSUFBSVcsVUFBVSxNQUFNO1FBQ2xCLElBQU1DLFlBQVlELE1BQU1ULE9BQU8sSUFDekJXLG1CQUFtQmYsc0JBQXNCYztRQUUvQyxJQUFJQyxxQkFBcUIsTUFBTTtZQUM3QixJQUFNUCxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDbkQsSUFBTVEsMEJBQTBCUixhQUFhUyxxQkFBcUIsQ0FBQ0Y7Z0JBRW5FLElBQUlDLHlCQUF5QjtvQkFDM0IsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIsaUJBQWlCLE1BQU07Z0JBQ3pCSyxRQUFRTCxhQUFhSSxPQUFPO1lBQzlCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTakIsdUNBQXVDc0IsU0FBUyxFQUFFaEIsYUFBYTtJQUM3RSxJQUFJZ0IsY0FBYyxNQUFNO1FBQ3RCLElBQU1DLGdCQUFnQkQsVUFBVWQsT0FBTyxJQUNqQ1csbUJBQW1CZixzQkFBc0JtQjtRQUUvQyxJQUFJSixxQkFBcUIsTUFBTTtZQUM3QixJQUFNUCxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDbkQsSUFBTVEsMEJBQTBCUixhQUFhUyxxQkFBcUIsQ0FBQ0Y7Z0JBRW5FLElBQUlDLHlCQUF5QjtvQkFDM0IsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIsaUJBQWlCLE1BQU07Z0JBQ3pCVSxZQUFZVixhQUFhWSxZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==