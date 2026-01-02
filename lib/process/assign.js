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
function judgementAssignmentFromJudgement(judgement) {
    return function(context) {
        var judgementString = judgement.getString(), judgementAdded = context.addJudgement(judgement), assigned = judgementAdded; ///
        assigned ? context.trace("Assigned the '".concat(judgementString, "' judgement.")) : context.debug("Unable to assign the '".concat(judgementString, "' judgement."));
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
function variableAssignmentFromVariable(variable) {
    return function(context) {
        var nested = false;
        context.addVariable(variable, nested);
        var variableTypeString = variable.getTypeString(), variableString = variable.getString(), assigned = true;
        assigned ? context.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'.")) : context.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50QWRkZWQgPSBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpLFxuICAgICAgICAgIGFzc2lnbmVkID0ganVkZ2VtZW50QWRkZWQ7IC8vL1xuXG4gICAgYXNzaWduZWQgP1xuICAgICAgY29udGV4dC50cmFjZShgQXNzaWduZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKSA6XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcblxuICAgIHJldHVybiBhc3NpZ25lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsaXR5QWRkZWQgPSBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICBhc3NpZ25lZCA9IGVxdWFsaXR5QWRkZWQ7IC8vL1xuXG4gICAgYXNzaWduZWQgP1xuICAgICAgY29udGV4dC50cmFjZShgQXNzaWduZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuXG4gICAgcmV0dXJuIGFzc2lnbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlO1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZVN0cmluZyA9IHZhcmlhYmxlLmdldFR5cGVTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc2lnbmVkID0gdHJ1ZTtcblxuICAgIGFzc2lnbmVkID9cbiAgICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9Jy5gKSA6XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2l0aCB0eXBlICcke3ZhcmlhYmxlVHlwZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIGFzc2lnbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCkge1xuICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWdubWVudHMuZXZlcnkoKGFzc2lnbWVudCkgPT4ge1xuICAgIGNvbnN0IGFzc2lnbmVkID0gYXNzaWdtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc2lnbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50c0Fzc2lnbmVkO1xufVxuIl0sIm5hbWVzIjpbImFzc2lnbkFzc2lnbm1lbnRzIiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUiLCJqdWRnZW1lbnQiLCJjb250ZXh0IiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwianVkZ2VtZW50QWRkZWQiLCJhZGRKdWRnZW1lbnQiLCJhc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJlcXVhbGl0eSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlBZGRlZCIsImFkZEVxdWFsaXR5IiwidmFyaWFibGUiLCJuZXN0ZWQiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlVHlwZVN0cmluZyIsImdldFR5cGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImV2ZXJ5IiwiYXNzaWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnREE7ZUFBd0JBOztRQWhDUkM7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQTRCQUM7ZUFBQUE7OztBQTVCVCxTQUFTRCxpQ0FBaUNFLFNBQVM7SUFDeEQsT0FBTyxTQUFVQyxPQUFPO1FBQ3RCLElBQU1DLGtCQUFrQkYsVUFBVUcsU0FBUyxJQUNyQ0MsaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNMLFlBQ3RDTSxXQUFXRixnQkFBZ0IsR0FBRztRQUVwQ0UsV0FDRUwsUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCTCxpQkFBZ0IsbUJBQzdDRCxRQUFRTyxLQUFLLENBQUMsQUFBQyx5QkFBd0MsT0FBaEJOLGlCQUFnQjtRQUUzRCxPQUFPSTtJQUNUO0FBQ0Y7QUFFTyxTQUFTVCwrQkFBK0JZLFFBQVE7SUFDckQsT0FBTyxTQUFVUixPQUFPO1FBQ3RCLElBQU1TLGlCQUFpQkQsU0FBU04sU0FBUyxJQUNuQ1EsZ0JBQWdCVixRQUFRVyxXQUFXLENBQUNILFdBQ3BDSCxXQUFXSyxlQUFlLEdBQUc7UUFFbkNMLFdBQ0VMLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFmRyxnQkFBZSxrQkFDNUNULFFBQVFPLEtBQUssQ0FBQyxBQUFDLHlCQUF1QyxPQUFmRSxnQkFBZTtRQUUxRCxPQUFPSjtJQUNUO0FBQ0Y7QUFFTyxTQUFTUCwrQkFBK0JjLFFBQVE7SUFDckQsT0FBTyxTQUFVWixPQUFPO1FBQ3RCLElBQU1hLFNBQVM7UUFFZmIsUUFBUWMsV0FBVyxDQUFDRixVQUFVQztRQUU5QixJQUFNRSxxQkFBcUJILFNBQVNJLGFBQWEsSUFDM0NDLGlCQUFpQkwsU0FBU1YsU0FBUyxJQUNuQ0csV0FBVztRQUVqQkEsV0FDRUwsUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQXVEUyxPQUF2Q0UsZ0JBQWUsMEJBQTJDLE9BQW5CRixvQkFBbUIsU0FDdkZmLFFBQVFPLEtBQUssQ0FBQyxBQUFDLHlCQUErRFEsT0FBdkNFLGdCQUFlLDBCQUEyQyxPQUFuQkYsb0JBQW1CO1FBRXJHLE9BQU9WO0lBQ1Q7QUFDRjtBQUVlLFNBQVNWLGtCQUFrQnVCLFdBQVcsRUFBRWxCLE9BQU87SUFDNUQsSUFBTW1CLHNCQUFzQkQsWUFBWUUsS0FBSyxDQUFDLFNBQUNDO1FBQzdDLElBQU1oQixXQUFXZ0IsVUFBVXJCO1FBRTNCLElBQUlLLFVBQVU7WUFDWixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9jO0FBQ1QifQ==