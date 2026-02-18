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
        context.addVariable(variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZVN0cmluZyA9IHZhcmlhYmxlLmdldFR5cGVTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcblxuICAgIGFzc2lnbmVkID9cbiAgICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9Jy5gKSA6XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2l0aCB0eXBlICcke3ZhcmlhYmxlVHlwZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIGFzc2lnbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxpdHlBZGRlZCA9IGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgIGFzc2lnbmVkID0gZXF1YWxpdHlBZGRlZDsgLy8vXG5cbiAgICBhc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKSA6XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG5cbiAgICByZXR1cm4gYXNzaWduZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudEFkZGVkID0gY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICBhc3NpZ25lZCA9IGp1ZGdlbWVudEFkZGVkOyAvLy9cblxuICAgIGFzc2lnbmVkID9cbiAgICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG5cbiAgICByZXR1cm4gYXNzaWduZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25tZW50cy5ldmVyeSgoYXNzaWdtZW50KSA9PiB7XG4gICAgY29uc3QgYXNzaWduZWQgPSBhc3NpZ21lbnQoY29udGV4dCk7XG5cbiAgICBpZiAoYXNzaWduZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnRzQXNzaWduZWQ7XG59XG4iXSwibmFtZXMiOlsiYXNzaWduQXNzaWdubWVudHMiLCJlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSIsInZhcmlhYmxlIiwiY29udGV4dCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVUeXBlU3RyaW5nIiwiZ2V0VHlwZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiYXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZXF1YWxpdHkiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QWRkZWQiLCJhZGRFcXVhbGl0eSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudFN0cmluZyIsImp1ZGdlbWVudEFkZGVkIiwiYWRkSnVkZ2VtZW50IiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiZXZlcnkiLCJhc3NpZ21lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThDQTtlQUF3QkE7O1FBNUJSQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBOUJBQztlQUFBQTs7O0FBQVQsU0FBU0EsK0JBQStCQyxRQUFRO0lBQ3JELE9BQU8sU0FBVUMsT0FBTztRQUN0QkEsUUFBUUMsV0FBVyxDQUFDRjtRQUVwQixJQUFNRyxxQkFBcUJILFNBQVNJLGFBQWEsSUFDM0NDLGlCQUFpQkwsU0FBU00sU0FBUyxJQUNuQ0MsV0FBVztRQUVqQkEsV0FDRU4sUUFBUU8sS0FBSyxDQUFDLEFBQUMsaUJBQXVETCxPQUF2Q0UsZ0JBQWUsMEJBQTJDLE9BQW5CRixvQkFBbUIsU0FDdkZGLFFBQVFRLEtBQUssQ0FBQyxBQUFDLHlCQUErRE4sT0FBdkNFLGdCQUFlLDBCQUEyQyxPQUFuQkYsb0JBQW1CO1FBRXJHLE9BQU9JO0lBQ1Q7QUFDRjtBQUVPLFNBQVNWLCtCQUErQmEsUUFBUTtJQUNyRCxPQUFPLFNBQVVULE9BQU87UUFDdEIsSUFBTVUsaUJBQWlCRCxTQUFTSixTQUFTLElBQ25DTSxnQkFBZ0JYLFFBQVFZLFdBQVcsQ0FBQ0gsV0FDcENILFdBQVdLLGVBQWUsR0FBRztRQUVuQ0wsV0FDRU4sUUFBUU8sS0FBSyxDQUFDLEFBQUMsaUJBQStCLE9BQWZHLGdCQUFlLGtCQUM1Q1YsUUFBUVEsS0FBSyxDQUFDLEFBQUMseUJBQXVDLE9BQWZFLGdCQUFlO1FBRTFELE9BQU9KO0lBQ1Q7QUFDRjtBQUVPLFNBQVNULGlDQUFpQ2dCLFNBQVM7SUFDeEQsT0FBTyxTQUFVYixPQUFPO1FBQ3RCLElBQU1jLGtCQUFrQkQsVUFBVVIsU0FBUyxJQUNyQ1UsaUJBQWlCZixRQUFRZ0IsWUFBWSxDQUFDSCxZQUN0Q1AsV0FBV1MsZ0JBQWdCLEdBQUc7UUFFcENULFdBQ0VOLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQk8saUJBQWdCLG1CQUM3Q2QsUUFBUVEsS0FBSyxDQUFDLEFBQUMseUJBQXdDLE9BQWhCTSxpQkFBZ0I7UUFFM0QsT0FBT1I7SUFDVDtBQUNGO0FBRWUsU0FBU1gsa0JBQWtCc0IsV0FBVyxFQUFFakIsT0FBTztJQUM1RCxJQUFNa0Isc0JBQXNCRCxZQUFZRSxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTWQsV0FBV2MsVUFBVXBCO1FBRTNCLElBQUlNLFVBQVU7WUFDWixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9ZO0FBQ1QifQ==