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
                frame = substitution.getFrame();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyhmcmFtZSwgc3Vic3RpdHV0aW9ucykge1xuICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb24iLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJnZXRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdDZ0JBLDhCQUE4QjtlQUE5QkE7O0lBdUJBQyxzQ0FBc0M7ZUFBdENBOztJQS9DQUMsNEJBQTRCO2VBQTVCQTs7O3FCQU5VO29CQUNtQjtBQUU3QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsNkJBQTZCSSxJQUFJLEVBQUVDLGFBQWE7SUFDOUQsSUFBSUQsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLFdBQVdGLEtBQUtHLE9BQU8sSUFDdkJDLGVBQWVQLGtCQUFrQks7UUFFdkMsSUFBSUUsaUJBQWlCLE1BQU07WUFDekIsSUFBTUMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDRyxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDN0MsSUFBTUUsc0JBQXNCRixhQUFhRyxpQkFBaUIsQ0FBQ0w7Z0JBRTNELElBQUlJLHFCQUFxQjtvQkFDdkIsT0FBTztnQkFDVDtZQUNGO1lBRU4sSUFBSUYsaUJBQWlCLE1BQU07Z0JBQ3pCUCxPQUFPTyxhQUFhSSxPQUFPO1lBQzdCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTTiwrQkFBK0JrQixLQUFLLEVBQUVYLGFBQWE7SUFDakUsSUFBSVcsVUFBVSxNQUFNO1FBQ2xCLElBQU1DLFlBQVlELE1BQU1ULE9BQU8sSUFDekJXLG1CQUFtQmYsc0JBQXNCYztRQUUvQyxJQUFJQyxxQkFBcUIsTUFBTTtZQUM3QixJQUFNUCxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDbkQsSUFBTVEsMEJBQTBCUixhQUFhUyxxQkFBcUIsQ0FBQ0Y7Z0JBRW5FLElBQUlDLHlCQUF5QjtvQkFDM0IsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIsaUJBQWlCLE1BQU07Z0JBQ3pCSyxRQUFRTCxhQUFhVSxRQUFRO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTakIsdUNBQXVDdUIsU0FBUyxFQUFFakIsYUFBYTtJQUM3RSxJQUFJaUIsY0FBYyxNQUFNO1FBQ3RCLElBQU1DLGdCQUFnQkQsVUFBVWYsT0FBTyxJQUNqQ1csbUJBQW1CZixzQkFBc0JvQjtRQUUvQyxJQUFJTCxxQkFBcUIsTUFBTTtZQUM3QixJQUFNUCxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDbkQsSUFBTVEsMEJBQTBCUixhQUFhUyxxQkFBcUIsQ0FBQ0Y7Z0JBRW5FLElBQUlDLHlCQUF5QjtvQkFDM0IsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIsaUJBQWlCLE1BQU07Z0JBQ3pCVyxZQUFZWCxhQUFhYSxZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==