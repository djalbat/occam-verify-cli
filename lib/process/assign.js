"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignAssignments", {
    enumerable: true,
    get: function() {
        return assignAssignments;
    }
});
function assignAssignments(assignments, context) {
    var assignmentsAssigned = assignments.every(function(assigment) {
        var assignmentAssigned = assigment.assign(context);
        return assignmentAssigned;
    });
    return assignmentsAssigned;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25tZW50cy5ldmVyeSgoYXNzaWdtZW50KSA9PiB7XG4gICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWdtZW50LmFzc2lnbihjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50QXNzaWduZWRcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnRzQXNzaWduZWQ7XG59XG4iXSwibmFtZXMiOlsiYXNzaWduQXNzaWdubWVudHMiLCJhc3NpZ25tZW50cyIsImNvbnRleHQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiZXZlcnkiLCJhc3NpZ21lbnQiLCJhc3NpZ25tZW50QXNzaWduZWQiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0Esa0JBQWtCQyxXQUFXLEVBQUVDLE9BQU87SUFDcEQsSUFBTUMsc0JBQXNCRixZQUFZRyxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTUMscUJBQXFCRCxVQUFVRSxNQUFNLENBQUNMO1FBRTVDLE9BQU9JO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUIn0=