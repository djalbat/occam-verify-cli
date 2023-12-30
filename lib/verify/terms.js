"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTerms;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTerms(leftTermNode, rightTermNode, types, context, verifyAhead) {
    var termsVerified;
    var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode);
    context.trace("Verifying the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms..."), leftTermNode);
    var leftTermVerified = (0, _term.default)(leftTermNode, types, context, function() {
        var verifiedAhead;
        var rightTermVerified = (0, _term.default)(rightTermNode, types, context, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = rightTermVerified; ///
        return verifiedAhead;
    });
    if (termsVerified) {
        context.debug("...verified the '".concat(leftTermString, "' and '").concat(rightTermString, "' terms."), leftTermNode);
    }
    termsVerified = leftTermVerified; ///
    return termsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybXNWZXJpZmllZDtcblxuICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBhbmQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybXMuLi5gLCBsZWZ0VGVybU5vZGUpO1xuXG4gIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSByaWdodFRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xlZnRUZXJtU3RyaW5nfScgYW5kICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm1zLmAsIGxlZnRUZXJtTm9kZSk7XG4gIH1cblxuICB0ZXJtc1ZlcmlmaWVkID0gbGVmdFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHRlcm1zVmVyaWZpZWRcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0eXBlcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1zVmVyaWZpZWQiLCJsZWZ0VGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzsyREFGRDs7Ozs7O0FBRVIsU0FBU0EsWUFBWUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzFGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQLGVBQ3RDUSxrQkFBa0JMLFFBQVFJLFlBQVksQ0FBQ047SUFFN0NFLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGtCQUF5Q0QsT0FBeEJGLGdCQUFlLFdBQXlCLE9BQWhCRSxpQkFBZ0IsZUFBYVI7SUFFckYsSUFBTVUsbUJBQW1CQyxJQUFBQSxhQUFVLEVBQUNYLGNBQWNFLE9BQU9DLFNBQVM7UUFDMUQsSUFBSVM7UUFFSixJQUFNQyxvQkFBb0JGLElBQUFBLGFBQVUsRUFBQ1YsZUFBZUMsT0FBT0MsU0FBUztZQUNsRSxJQUFJUztZQUVKQSxnQkFBZ0JSO1lBRWhCLE9BQU9RO1FBQ1Q7UUFFQUEsZ0JBQWdCQyxtQkFBb0IsR0FBRztRQUV2QyxPQUFPRDtJQUNUO0lBRU4sSUFBSVAsZUFBZTtRQUNqQkYsUUFBUVcsS0FBSyxDQUFDLEFBQUMsb0JBQTJDTixPQUF4QkYsZ0JBQWUsV0FBeUIsT0FBaEJFLGlCQUFnQixhQUFXUjtJQUN2RjtJQUVBSyxnQkFBZ0JLLGtCQUFrQixHQUFHO0lBRXJDLE9BQU9MO0FBQ1QifQ==