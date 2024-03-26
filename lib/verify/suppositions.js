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
    suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
        var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, localContext);
        if (suppositionVerified) {
            return true;
        }
    });
    return suppositionsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3VwcG9zaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25Ob2Rlcywgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmaWVkO1xuXG4gIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uTm9kZSwgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7a0VBRk07Ozs7OztBQUVmLFNBQVNBLG1CQUFtQkMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtJQUNyRixJQUFJQztJQUVKQSx1QkFBdUJILGlCQUFpQkksS0FBSyxDQUFDLFNBQUNDO1FBQzdDLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkosY0FBY0M7UUFFN0UsSUFBSUkscUJBQXFCO1lBQ3ZCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9