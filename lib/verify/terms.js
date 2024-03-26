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
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTerms(termNodes, terms, context, verifyAhead) {
    var termsVerified;
    var firstTermNode = (0, _array.first)(termNodes), secondTermNode = (0, _array.second)(termNodes), firstTermString = context.nodeAsString(firstTermNode), secondTermString = context.nodeAsString(secondTermNode);
    context.trace("Verifying the '".concat(firstTermString, "' and '").concat(secondTermString, "' terms..."), firstTermNode);
    var firstTermVerified = (0, _term.default)(firstTermNode, terms, context, function() {
        var verifiedAhead;
        var secondTermVerified = (0, _term.default)(secondTermNode, terms, context, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = secondTermVerified; ///
        return verifiedAhead;
    });
    termsVerified = firstTermVerified; ///
    if (termsVerified) {
        context.debug("...verified the '".concat(firstTermString, "' and '").concat(secondTermString, "' terms."), firstTermNode);
    }
    return termsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybXNWZXJpZmllZDtcblxuICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gZmlyc3QodGVybU5vZGVzKSxcbiAgICAgICAgc2Vjb25kVGVybU5vZGUgPSBzZWNvbmQodGVybU5vZGVzKSxcbiAgICAgICAgZmlyc3RUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZmlyc3RUZXJtTm9kZSksXG4gICAgICAgIHNlY29uZFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzZWNvbmRUZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmaXJzdFRlcm1TdHJpbmd9JyBhbmQgJyR7c2Vjb25kVGVybVN0cmluZ30nIHRlcm1zLi4uYCwgZmlyc3RUZXJtTm9kZSk7XG5cbiAgY29uc3QgZmlyc3RUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKGZpcnN0VGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBzZWNvbmRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHNlY29uZFRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBzZWNvbmRUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtc1ZlcmlmaWVkID0gZmlyc3RUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZpcnN0VGVybVN0cmluZ30nIGFuZCAnJHtzZWNvbmRUZXJtU3RyaW5nfScgdGVybXMuYCwgZmlyc3RUZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybXNWZXJpZmllZFxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1zIiwidGVybU5vZGVzIiwidGVybXMiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtc1ZlcmlmaWVkIiwiZmlyc3RUZXJtTm9kZSIsImZpcnN0Iiwic2Vjb25kVGVybU5vZGUiLCJzZWNvbmQiLCJmaXJzdFRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzZWNvbmRUZXJtU3RyaW5nIiwidHJhY2UiLCJmaXJzdFRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwic2Vjb25kVGVybVZlcmlmaWVkIiwiZGVidWciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpEO3FCQUVPOzs7Ozs7QUFFZixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ3hFLElBQUlDO0lBRUosSUFBTUMsZ0JBQWdCQyxJQUFBQSxZQUFLLEVBQUNOLFlBQ3RCTyxpQkFBaUJDLElBQUFBLGFBQU0sRUFBQ1IsWUFDeEJTLGtCQUFrQlAsUUFBUVEsWUFBWSxDQUFDTCxnQkFDdkNNLG1CQUFtQlQsUUFBUVEsWUFBWSxDQUFDSDtJQUU5Q0wsUUFBUVUsS0FBSyxDQUFDLEFBQUMsa0JBQTBDRCxPQUF6QkYsaUJBQWdCLFdBQTBCLE9BQWpCRSxrQkFBaUIsZUFBYU47SUFFdkYsSUFBTVEsb0JBQW9CQyxJQUFBQSxhQUFVLEVBQUNULGVBQWVKLE9BQU9DLFNBQVM7UUFDNUQsSUFBSWE7UUFFSixJQUFNQyxxQkFBcUJGLElBQUFBLGFBQVUsRUFBQ1AsZ0JBQWdCTixPQUFPQyxTQUFTO1lBQ3BFLElBQUlhO1lBRUpBLGdCQUFnQlo7WUFFaEIsT0FBT1k7UUFDVDtRQUVBQSxnQkFBZ0JDLG9CQUFxQixHQUFHO1FBRXhDLE9BQU9EO0lBQ1Q7SUFFTlgsZ0JBQWdCUyxtQkFBbUIsR0FBRztJQUV0QyxJQUFJVCxlQUFlO1FBQ2pCRixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBNENOLE9BQXpCRixpQkFBZ0IsV0FBMEIsT0FBakJFLGtCQUFpQixhQUFXTjtJQUN6RjtJQUVBLE9BQU9EO0FBQ1QifQ==