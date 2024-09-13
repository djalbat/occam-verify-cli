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
function assignAssignments(assignments, localContext) {
    var assignmentsAssigned = assignments.every(function(assigment) {
        var assignmentAssigned = assigment.assign(localContext);
        return assignmentAssigned;
    });
    return assignmentsAssigned;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXNzaWdubWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25tZW50cy5ldmVyeSgoYXNzaWdtZW50KSA9PiB7XG4gICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWdtZW50LmFzc2lnbihsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnRBc3NpZ25lZFxuICB9KTtcblxuICByZXR1cm4gYXNzaWdubWVudHNBc3NpZ25lZDtcbn1cbiJdLCJuYW1lcyI6WyJhc3NpZ25Bc3NpZ25tZW50cyIsImFzc2lnbm1lbnRzIiwibG9jYWxDb250ZXh0IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImV2ZXJ5IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudEFzc2lnbmVkIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGtCQUFrQkMsV0FBVyxFQUFFQyxZQUFZO0lBQ3pELElBQU1DLHNCQUFzQkYsWUFBWUcsS0FBSyxDQUFDLFNBQUNDO1FBQzdDLElBQU1DLHFCQUFxQkQsVUFBVUUsTUFBTSxDQUFDTDtRQUU1QyxPQUFPSTtJQUNUO0lBRUEsT0FBT0g7QUFDVCJ9