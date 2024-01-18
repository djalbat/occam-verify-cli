"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAndStandaloneType;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _standaloneType = /*#__PURE__*/ _interop_require_default(require("../verify/standaloneType"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAndStandaloneType(termNode, typeNode, terms, types, context, verifyAhead) {
    var termAndStandaloneTypeVerified;
    var termString = context.nodeAsString(termNode), typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the '".concat(termString, "' term and the standalone '").concat(typeString, "' type..."), termNode);
    var termVerified = (0, _term.default)(termNode, terms, context, function() {
        var verifiedAhead;
        var standaloneTypeVerified = (0, _standaloneType.default)(typeNode, types, context, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = standaloneTypeVerified; ///
        return verifiedAhead;
    });
    termAndStandaloneTypeVerified = termVerified; ///
    if (termAndStandaloneTypeVerified) {
        context.debug("...verified the '".concat(termString, "' term and the standalone '").concat(typeString, "' type."), termNode);
    }
    return termAndStandaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFuZFN0YW5kYWxvbmVUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB2ZXJpZnlTdGFuZGFsb25lVHlwZSBmcm9tIFwiLi4vdmVyaWZ5L3N0YW5kYWxvbmVUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BbmRTdGFuZGFsb25lVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIHRlcm1zLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1BbmRTdGFuZGFsb25lVHlwZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIHR5cGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhbmQgdGhlIHN0YW5kYWxvbmUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1BbmRTdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAvLy9cblxuICBpZiAodGVybUFuZFN0YW5kYWxvbmVUeXBlVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kIHRoZSBzdGFuZGFsb25lICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtQW5kU3RhbmRhbG9uZVR5cGVWZXJpZmllZFxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1BbmRTdGFuZGFsb25lVHlwZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0ZXJtcyIsInR5cGVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybUFuZFN0YW5kYWxvbmVUeXBlVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZVN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7OzsyREFIRDtxRUFDVTs7Ozs7O0FBRWxCLFNBQVNBLDRCQUE0QkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDeEcsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNSLFdBQ2xDUyxhQUFhTCxRQUFRSSxZQUFZLENBQUNQO0lBRXhDRyxRQUFRTSxLQUFLLENBQUMsQUFBQyxrQkFBeURELE9BQXhDRixZQUFXLCtCQUF3QyxPQUFYRSxZQUFXLGNBQVlUO0lBRS9GLElBQU1XLGVBQWVDLElBQUFBLGFBQVUsRUFBQ1osVUFBVUUsT0FBT0UsU0FBUztRQUNsRCxJQUFJUztRQUVKLElBQU1DLHlCQUF5QkMsSUFBQUEsdUJBQW9CLEVBQUNkLFVBQVVFLE9BQU9DLFNBQVM7WUFDNUUsSUFBSVM7WUFFSkEsZ0JBQWdCUjtZQUVoQixPQUFPUTtRQUNUO1FBRUFBLGdCQUFnQkMsd0JBQXlCLEdBQUc7UUFFNUMsT0FBT0Q7SUFDVDtJQUVOUCxnQ0FBZ0NLLGNBQWMsR0FBRztJQUVqRCxJQUFJTCwrQkFBK0I7UUFDakNGLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUEyRFAsT0FBeENGLFlBQVcsK0JBQXdDLE9BQVhFLFlBQVcsWUFBVVQ7SUFDakc7SUFFQSxPQUFPTTtBQUNUIn0=