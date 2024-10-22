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
        var termNode = term.getNode();
        term = null;
        var variableNode = variableNodeQuery(termNode);
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
        var frameNode = frame.getNode();
        frame = null;
        var metavariableNode = metavariableNodeQuery(frameNode);
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
        var statementNode = statement.getNode();
        statement = null;
        var metavariableNode = metavariableNodeQuery(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3Vic3RpdHV0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRlcm0sIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybSA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgdGVybSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMoZnJhbWUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpO1xuXG4gICAgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMpIHtcbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb24iLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJnZXRUZXJtIiwiZnJhbWUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRGcmFtZSIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1DZ0JBLDhCQUE4QjtlQUE5QkE7O0lBMEJBQyxzQ0FBc0M7ZUFBdENBOztJQXJEQUMsNEJBQTRCO2VBQTVCQTs7O3FCQU5VO29CQUNtQjtBQUU3QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakMsU0FBU0YsNkJBQTZCSSxJQUFJLEVBQUVDLGFBQWE7SUFDOUQsSUFBSUQsU0FBUyxNQUFNO1FBQ2pCLElBQU1FLFdBQVdGLEtBQUtHLE9BQU87UUFFN0JILE9BQU87UUFFUCxJQUFNSSxlQUFlUCxrQkFBa0JLO1FBRXZDLElBQUlFLGlCQUFpQixNQUFNO1lBQ3pCLElBQU1DLGVBQWVDLElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q0csZUFBZU4sY0FBY08sZ0JBQWdCLENBQUMsU0FBQ0Q7Z0JBQzdDLElBQU1FLHNCQUFzQkYsYUFBYUcsaUJBQWlCLENBQUNMO2dCQUUzRCxJQUFJSSxxQkFBcUI7b0JBQ3ZCLE9BQU87Z0JBQ1Q7WUFDRjtZQUVOLElBQUlGLGlCQUFpQixNQUFNO2dCQUN6QlAsT0FBT08sYUFBYUksT0FBTztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUO0FBRU8sU0FBU04sK0JBQStCa0IsS0FBSyxFQUFFWCxhQUFhO0lBQ2pFLElBQUlXLFVBQVUsTUFBTTtRQUNsQixJQUFNQyxZQUFZRCxNQUFNVCxPQUFPO1FBRS9CUyxRQUFRO1FBRVIsSUFBTUUsbUJBQW1CZixzQkFBc0JjO1FBRS9DLElBQUlDLHFCQUFxQixNQUFNO1lBQzdCLElBQU1QLGVBQWVOLGNBQWNPLGdCQUFnQixDQUFDLFNBQUNEO2dCQUNuRCxJQUFNUSwwQkFBMEJSLGFBQWFTLHFCQUFxQixDQUFDRjtnQkFFbkUsSUFBSUMseUJBQXlCO29CQUMzQixPQUFPO2dCQUNUO1lBQ0Y7WUFFQSxJQUFJUixpQkFBaUIsTUFBTTtnQkFDekJLLFFBQVFMLGFBQWFVLFFBQVE7WUFDL0I7UUFDRjtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVNqQix1Q0FBdUN1QixTQUFTLEVBQUVqQixhQUFhO0lBQzdFLElBQUlpQixjQUFjLE1BQU07UUFDdEIsSUFBTUMsZ0JBQWdCRCxVQUFVZixPQUFPO1FBRXZDZSxZQUFZO1FBRVosSUFBTUosbUJBQW1CZixzQkFBc0JvQjtRQUUvQyxJQUFJTCxxQkFBcUIsTUFBTTtZQUM3QixJQUFNUCxlQUFlTixjQUFjTyxnQkFBZ0IsQ0FBQyxTQUFDRDtnQkFDbkQsSUFBTVEsMEJBQTBCUixhQUFhUyxxQkFBcUIsQ0FBQ0Y7Z0JBRW5FLElBQUlDLHlCQUF5QjtvQkFDM0IsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIsaUJBQWlCLE1BQU07Z0JBQ3pCVyxZQUFZWCxhQUFhYSxZQUFZO1lBQ3ZDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==