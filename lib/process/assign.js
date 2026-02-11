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
    get default () {
        return assignAssignments;
    },
    get equalityAssignmentFromEquality () {
        return equalityAssignmentFromEquality;
    },
    get judgementAssignmentFromJudgement () {
        return judgementAssignmentFromJudgement;
    },
    get variableAssignmentFromVariable () {
        return variableAssignmentFromVariable;
    }
});
function variableAssignmentFromVariable(variable) {
    return function(context) {
        var nested = false;
        context.addVariable(variable, nested);
        var variableTypeString = variable.getTypeString(), variableString = variable.getString(), assigned = true;
        assigned ? context.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'.")) : context.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'."));
        return assigned;
    };
}
function equalityAssignmentFromEquality(equality) {
    return function(context) {
        var equalityString = equality.getString(), equalityAdded = context.addEquality(equality), assigned = equalityAdded; ///
        assigned ? context.trace("Assigned the '".concat(equalityString, "' equality.")) : context.debug("Unable to assign the '".concat(equalityString, "' equality."));
        return assigned;
    };
}
function judgementAssignmentFromJudgement(judgement) {
    return function(context) {
        var judgementString = judgement.getString(), judgementAdded = context.addJudgement(judgement), assigned = judgementAdded; ///
        assigned ? context.trace("Assigned the '".concat(judgementString, "' judgement.")) : context.debug("Unable to assign the '".concat(judgementString, "' judgement."));
        return assigned;
    };
}
function assignAssignments(assignments, context) {
    var assignmentsAssigned = assignments.every(function(assigment) {
        var assigned = assigment(context);
        if (assigned) {
            return true;
        }
    });
    return assignmentsAssigned;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVR5cGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRUeXBlU3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3NpZ25lZCA9IHRydWU7XG5cbiAgICBhc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiBhc3NpZ25lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsaXR5QWRkZWQgPSBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICBhc3NpZ25lZCA9IGVxdWFsaXR5QWRkZWQ7IC8vL1xuXG4gICAgYXNzaWduZWQgP1xuICAgICAgY29udGV4dC50cmFjZShgQXNzaWduZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuXG4gICAgcmV0dXJuIGFzc2lnbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqdWRnZW1lbnRBZGRlZCA9IGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgYXNzaWduZWQgPSBqdWRnZW1lbnRBZGRlZDsgLy8vXG5cbiAgICBhc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApIDpcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuXG4gICAgcmV0dXJuIGFzc2lnbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCkge1xuICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWdubWVudHMuZXZlcnkoKGFzc2lnbWVudCkgPT4ge1xuICAgIGNvbnN0IGFzc2lnbmVkID0gYXNzaWdtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc2lnbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50c0Fzc2lnbmVkO1xufVxuIl0sIm5hbWVzIjpbImFzc2lnbkFzc2lnbm1lbnRzIiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUiLCJ2YXJpYWJsZSIsImNvbnRleHQiLCJuZXN0ZWQiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlVHlwZVN0cmluZyIsImdldFR5cGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsImFzc2lnbmVkIiwidHJhY2UiLCJkZWJ1ZyIsImVxdWFsaXR5IiwiZXF1YWxpdHlTdHJpbmciLCJlcXVhbGl0eUFkZGVkIiwiYWRkRXF1YWxpdHkiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTdHJpbmciLCJqdWRnZW1lbnRBZGRlZCIsImFkZEp1ZGdlbWVudCIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImV2ZXJ5IiwiYXNzaWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnREE7ZUFBd0JBOztRQTVCUkM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQWhDQUM7ZUFBQUE7OztBQUFULFNBQVNBLCtCQUErQkMsUUFBUTtJQUNyRCxPQUFPLFNBQVVDLE9BQU87UUFDdEIsSUFBTUMsU0FBUztRQUVmRCxRQUFRRSxXQUFXLENBQUNILFVBQVVFO1FBRTlCLElBQU1FLHFCQUFxQkosU0FBU0ssYUFBYSxJQUMzQ0MsaUJBQWlCTixTQUFTTyxTQUFTLElBQ25DQyxXQUFXO1FBRWpCQSxXQUNFUCxRQUFRUSxLQUFLLENBQUMsQUFBQyxpQkFBdURMLE9BQXZDRSxnQkFBZSwwQkFBMkMsT0FBbkJGLG9CQUFtQixTQUN2RkgsUUFBUVMsS0FBSyxDQUFDLEFBQUMseUJBQStETixPQUF2Q0UsZ0JBQWUsMEJBQTJDLE9BQW5CRixvQkFBbUI7UUFFckcsT0FBT0k7SUFDVDtBQUNGO0FBRU8sU0FBU1gsK0JBQStCYyxRQUFRO0lBQ3JELE9BQU8sU0FBVVYsT0FBTztRQUN0QixJQUFNVyxpQkFBaUJELFNBQVNKLFNBQVMsSUFDbkNNLGdCQUFnQlosUUFBUWEsV0FBVyxDQUFDSCxXQUNwQ0gsV0FBV0ssZUFBZSxHQUFHO1FBRW5DTCxXQUNFUCxRQUFRUSxLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZkcsZ0JBQWUsa0JBQzVDWCxRQUFRUyxLQUFLLENBQUMsQUFBQyx5QkFBdUMsT0FBZkUsZ0JBQWU7UUFFMUQsT0FBT0o7SUFDVDtBQUNGO0FBRU8sU0FBU1YsaUNBQWlDaUIsU0FBUztJQUN4RCxPQUFPLFNBQVVkLE9BQU87UUFDdEIsSUFBTWUsa0JBQWtCRCxVQUFVUixTQUFTLElBQ3JDVSxpQkFBaUJoQixRQUFRaUIsWUFBWSxDQUFDSCxZQUN0Q1AsV0FBV1MsZ0JBQWdCLEdBQUc7UUFFcENULFdBQ0VQLFFBQVFRLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQk8saUJBQWdCLG1CQUM3Q2YsUUFBUVMsS0FBSyxDQUFDLEFBQUMseUJBQXdDLE9BQWhCTSxpQkFBZ0I7UUFFM0QsT0FBT1I7SUFDVDtBQUNGO0FBRWUsU0FBU1osa0JBQWtCdUIsV0FBVyxFQUFFbEIsT0FBTztJQUM1RCxJQUFNbUIsc0JBQXNCRCxZQUFZRSxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTWQsV0FBV2MsVUFBVXJCO1FBRTNCLElBQUlPLFVBQVU7WUFDWixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9ZO0FBQ1QifQ==