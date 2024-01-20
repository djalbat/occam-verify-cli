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
function verifyTermAndGivenType(termNode, typeNode, terms, types, context, verifyAhead) {
    var termAndGivenTypeVerified;
    var termString = context.nodeAsString(termNode), typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the '".concat(termString, "' term and the given '").concat(typeString, "' type..."), termNode);
    var termVerified = (0, _term.default)(termNode, terms, context, function() {
        var verifiedAhead;
        var givenTypeVerified = (0, _givenType.default)(typeNode, types, context, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = givenTypeVerified; ///
        return verifiedAhead;
    });
    termAndGivenTypeVerified = termVerified; ///
    if (termAndGivenTypeVerified) {
        context.debug("...verified the '".concat(termString, "' term and the given '").concat(typeString, "' type."), termNode);
    }
    return termAndGivenTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFuZEdpdmVuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgdmVyaWZ5R2l2ZW5UeXBlIGZyb20gXCIuLi92ZXJpZnkvZ2l2ZW5UeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BbmRHaXZlblR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCB0ZXJtcywgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCB0aGUgZ2l2ZW4gJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IGdpdmVuVHlwZVZlcmlmaWVkID0gdmVyaWZ5R2l2ZW5UeXBlKHR5cGVOb2RlLCB0eXBlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBnaXZlblR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgaWYgKHRlcm1BbmRHaXZlblR5cGVWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhbmQgdGhlIGdpdmVuICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWRcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQW5kR2l2ZW5UeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInRlcm1zIiwidHlwZXMiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtQW5kR2l2ZW5UeXBlVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZVN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJnaXZlblR5cGVWZXJpZmllZCIsInZlcmlmeUdpdmVuVHlwZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7OzJEQUhEO2dFQUNLOzs7Ozs7QUFFYixTQUFTQSx1QkFBdUJDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ25HLElBQUlDO0lBRUosSUFBTUMsYUFBYUgsUUFBUUksWUFBWSxDQUFDUixXQUNsQ1MsYUFBYUwsUUFBUUksWUFBWSxDQUFDUDtJQUV4Q0csUUFBUU0sS0FBSyxDQUFDLEFBQUMsa0JBQW9ERCxPQUFuQ0YsWUFBVywwQkFBbUMsT0FBWEUsWUFBVyxjQUFZVDtJQUUxRixJQUFNVyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNaLFVBQVVFLE9BQU9FLFNBQVM7UUFDbEQsSUFBSVM7UUFFSixJQUFNQyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNkLFVBQVVFLE9BQU9DLFNBQVM7WUFDbEUsSUFBSVM7WUFFSkEsZ0JBQWdCUjtZQUVoQixPQUFPUTtRQUNUO1FBRUFBLGdCQUFnQkMsbUJBQW9CLEdBQUc7UUFFdkMsT0FBT0Q7SUFDVDtJQUVOUCwyQkFBMkJLLGNBQWMsR0FBRztJQUU1QyxJQUFJTCwwQkFBMEI7UUFDNUJGLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUFzRFAsT0FBbkNGLFlBQVcsMEJBQW1DLE9BQVhFLFlBQVcsWUFBVVQ7SUFDNUY7SUFFQSxPQUFPTTtBQUNUIn0=