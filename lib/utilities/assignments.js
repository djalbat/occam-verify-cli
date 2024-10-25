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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXNzaWdubWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCkge1xuICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWdubWVudHMuZXZlcnkoKGFzc2lnbWVudCkgPT4ge1xuICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbWVudC5hc3NpZ24oY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudEFzc2lnbmVkXG4gIH0pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50c0Fzc2lnbmVkO1xufVxuIl0sIm5hbWVzIjpbImFzc2lnbkFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHMiLCJjb250ZXh0IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImV2ZXJ5IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudEFzc2lnbmVkIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGtCQUFrQkMsV0FBVyxFQUFFQyxPQUFPO0lBQ3BELElBQU1DLHNCQUFzQkYsWUFBWUcsS0FBSyxDQUFDLFNBQUNDO1FBQzdDLElBQU1DLHFCQUFxQkQsVUFBVUUsTUFBTSxDQUFDTDtRQUU1QyxPQUFPSTtJQUNUO0lBRUEsT0FBT0g7QUFDVCJ9