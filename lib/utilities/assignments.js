"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignAssignment", {
    enumerable: true,
    get: function() {
        return assignAssignment;
    }
});
var _array = require("../utilities/array");
function assignAssignment(assignments, localContext) {
    var assignmentAssigned = true;
    var assignmentsLength = assignments.length;
    if (assignmentsLength === 1) {
        var firstAssignment = (0, _array.first)(assignments), assignment = firstAssignment;
        assignmentAssigned = assignment.assign(localContext);
    }
    return assignmentAssigned;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXNzaWdubWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBhc3NpZ25tZW50QXNzaWduZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGFzc2lnbm1lbnRzTGVuZ3RoID0gYXNzaWdubWVudHMubGVuZ3RoO1xuXG4gIGlmIChhc3NpZ25tZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXNzaWdubWVudCA9IGZpcnN0KGFzc2lnbm1lbnRzKSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gZmlyc3RBc3NpZ25tZW50O1xuXG4gICAgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWdubWVudC5hc3NpZ24obG9jYWxDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ25tZW50QXNzaWduZWQ7XG59XG4iXSwibmFtZXMiOlsiYXNzaWduQXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwibG9jYWxDb250ZXh0IiwiYXNzaWdubWVudEFzc2lnbmVkIiwiYXNzaWdubWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEFzc2lnbm1lbnQiLCJmaXJzdCIsImFzc2lnbm1lbnQiLCJhc3NpZ24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7cUJBRk07QUFFZixTQUFTQSxpQkFBaUJDLFdBQVcsRUFBRUMsWUFBWTtJQUN4RCxJQUFJQyxxQkFBcUI7SUFFekIsSUFBTUMsb0JBQW9CSCxZQUFZSSxNQUFNO0lBRTVDLElBQUlELHNCQUFzQixHQUFHO1FBQzNCLElBQU1FLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUY7UUFFbkJILHFCQUFxQkssV0FBV0MsTUFBTSxDQUFDUDtJQUN6QztJQUVBLE9BQU9DO0FBQ1QifQ==