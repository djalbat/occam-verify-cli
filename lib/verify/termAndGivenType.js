"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAndGivenType;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _givenType = /*#__PURE__*/ _interop_require_default(require("../verify/givenType"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAndGivenType(termNode, typeNode, terms, types, localContext, verifyAhead) {
    var termAndGivenTypeVerified;
    var termString = localContext.nodeAsString(termNode), typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the '".concat(termString, "' term and the given '").concat(typeString, "' type..."), termNode);
    var termVerified = (0, _term.default)(termNode, terms, localContext, function() {
        var verifiedAhead;
        var givenTypeVerified = (0, _givenType.default)(typeNode, types, localContext, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = givenTypeVerified; ///
        return verifiedAhead;
    });
    termAndGivenTypeVerified = termVerified; ///
    if (termAndGivenTypeVerified) {
        localContext.debug("...verified the '".concat(termString, "' term and the given '").concat(typeString, "' type."), termNode);
    }
    return termAndGivenTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFuZEdpdmVuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgdmVyaWZ5R2l2ZW5UeXBlIGZyb20gXCIuLi92ZXJpZnkvZ2l2ZW5UeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kIHRoZSBnaXZlbiAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBnaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeUdpdmVuVHlwZSh0eXBlTm9kZSwgdHlwZXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBnaXZlblR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgaWYgKHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCB0aGUgZ2l2ZW4gJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZFxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1BbmRHaXZlblR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidGVybXMiLCJ0eXBlcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybUFuZEdpdmVuVHlwZVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZ2l2ZW5UeXBlVmVyaWZpZWQiLCJ2ZXJpZnlHaXZlblR5cGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7OzsyREFIRDtnRUFDSzs7Ozs7O0FBRWIsU0FBU0EsdUJBQXVCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUN4RyxJQUFJQztJQUVKLElBQU1DLGFBQWFILGFBQWFJLFlBQVksQ0FBQ1IsV0FDdkNTLGFBQWFMLGFBQWFJLFlBQVksQ0FBQ1A7SUFFN0NHLGFBQWFNLEtBQUssQ0FBQyxBQUFDLGtCQUFvREQsT0FBbkNGLFlBQVcsMEJBQW1DLE9BQVhFLFlBQVcsY0FBWVQ7SUFFL0YsSUFBTVcsZUFBZUMsSUFBQUEsYUFBVSxFQUFDWixVQUFVRSxPQUFPRSxjQUFjO1FBQ3ZELElBQUlTO1FBRUosSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDZCxVQUFVRSxPQUFPQyxjQUFjO1lBQ3ZFLElBQUlTO1lBRUpBLGdCQUFnQlI7WUFFaEIsT0FBT1E7UUFDVDtRQUVBQSxnQkFBZ0JDLG1CQUFvQixHQUFHO1FBRXZDLE9BQU9EO0lBQ1Q7SUFFTlAsMkJBQTJCSyxjQUFjLEdBQUc7SUFFNUMsSUFBSUwsMEJBQTBCO1FBQzVCRixhQUFhWSxLQUFLLENBQUMsQUFBQyxvQkFBc0RQLE9BQW5DRixZQUFXLDBCQUFtQyxPQUFYRSxZQUFXLFlBQVVUO0lBQ2pHO0lBRUEsT0FBT007QUFDVCJ9