"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifySuppositions;
    }
});
var _supposition = /*#__PURE__*/ _interop_require_default(require("../verify/supposition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifySuppositions(suppositionNodes, suppositions, localContext) {
    var suppositionsVerified;
    var assignments = [];
    suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
        var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, assignments, localContext);
        if (suppositionVerified) {
            return true;
        }
    });
    if (suppositionsVerified) {
        suppositionsVerified = assignments.every(function(assignment) {
            var assigned = assignment.assign(localContext);
            if (assigned) {
                return true;
            }
        });
    }
    return suppositionsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3VwcG9zaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25Ob2Rlcywgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmaWVkO1xuXG4gIGNvbnN0IGFzc2lnbm1lbnRzID0gW107XG5cbiAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBhc3NpZ25tZW50cy5ldmVyeSgoYXNzaWdubWVudCkgPT4geyAgLy8vXG4gICAgICBjb25zdCBhc3NpZ25lZCA9IGFzc2lnbm1lbnQuYXNzaWduKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJhc3NpZ25tZW50cyIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiYXNzaWdubWVudCIsImFzc2lnbmVkIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O2tFQUZNOzs7Ozs7QUFFZixTQUFTQSxtQkFBbUJDLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFlBQVk7SUFDckYsSUFBSUM7SUFFSixJQUFNQyxjQUFjLEVBQUU7SUFFdEJELHVCQUF1QkgsaUJBQWlCSyxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCTCxjQUFjRyxhQUFhRjtRQUUxRixJQUFJSyxxQkFBcUI7WUFDdkIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJSixzQkFBc0I7UUFDeEJBLHVCQUF1QkMsWUFBWUMsS0FBSyxDQUFDLFNBQUNJO1lBQ3hDLElBQU1DLFdBQVdELFdBQVdFLE1BQU0sQ0FBQ1Q7WUFFbkMsSUFBSVEsVUFBVTtnQkFDWixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVCJ9