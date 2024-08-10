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
function verifyTerms(termNodes, terms, localContext, verifyAhead) {
    var termsVerified;
    var firstTermNode = (0, _array.first)(termNodes), secondTermNode = (0, _array.second)(termNodes), firstTermString = localContext.nodeAsString(firstTermNode), secondTermString = localContext.nodeAsString(secondTermNode);
    localContext.trace("Verifying the '".concat(firstTermString, "' and '").concat(secondTermString, "' terms..."), firstTermNode);
    var firstTermVerified = (0, _term.default)(firstTermNode, terms, localContext, function() {
        var verifiedAhead;
        var secondTermVerified = (0, _term.default)(secondTermNode, terms, localContext, function() {
            var verifiedAhead;
            verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
        verifiedAhead = secondTermVerified; ///
        return verifiedAhead;
    });
    termsVerified = firstTermVerified; ///
    if (termsVerified) {
        localContext.debug("...verified the '".concat(firstTermString, "' and '").concat(secondTermString, "' terms."), firstTermNode);
    }
    return termsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gIGNvbnN0IGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpLFxuICAgICAgICBzZWNvbmRUZXJtTm9kZSA9IHNlY29uZCh0ZXJtTm9kZXMpLFxuICAgICAgICBmaXJzdFRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZpcnN0VGVybU5vZGUpLFxuICAgICAgICBzZWNvbmRUZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzZWNvbmRUZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZpcnN0VGVybVN0cmluZ30nIGFuZCAnJHtzZWNvbmRUZXJtU3RyaW5nfScgdGVybXMuLi5gLCBmaXJzdFRlcm1Ob2RlKTtcblxuICBjb25zdCBmaXJzdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0oZmlyc3RUZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3Qgc2Vjb25kVGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShzZWNvbmRUZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBzZWNvbmRUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtc1ZlcmlmaWVkID0gZmlyc3RUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Zmlyc3RUZXJtU3RyaW5nfScgYW5kICcke3NlY29uZFRlcm1TdHJpbmd9JyB0ZXJtcy5gLCBmaXJzdFRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtc1ZlcmlmaWVkXG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybXMiLCJ0ZXJtTm9kZXMiLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybXNWZXJpZmllZCIsImZpcnN0VGVybU5vZGUiLCJmaXJzdCIsInNlY29uZFRlcm1Ob2RlIiwic2Vjb25kIiwiZmlyc3RUZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic2Vjb25kVGVybVN0cmluZyIsInRyYWNlIiwiZmlyc3RUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsInNlY29uZFRlcm1WZXJpZmllZCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpEO3FCQUVPOzs7Ozs7QUFFZixTQUFTQSxZQUFZQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzdFLElBQUlDO0lBRUosSUFBTUMsZ0JBQWdCQyxJQUFBQSxZQUFLLEVBQUNOLFlBQ3RCTyxpQkFBaUJDLElBQUFBLGFBQU0sRUFBQ1IsWUFDeEJTLGtCQUFrQlAsYUFBYVEsWUFBWSxDQUFDTCxnQkFDNUNNLG1CQUFtQlQsYUFBYVEsWUFBWSxDQUFDSDtJQUVuREwsYUFBYVUsS0FBSyxDQUFDLEFBQUMsa0JBQTBDRCxPQUF6QkYsaUJBQWdCLFdBQTBCLE9BQWpCRSxrQkFBaUIsZUFBYU47SUFFNUYsSUFBTVEsb0JBQW9CQyxJQUFBQSxhQUFVLEVBQUNULGVBQWVKLE9BQU9DLGNBQWM7UUFDakUsSUFBSWE7UUFFSixJQUFNQyxxQkFBcUJGLElBQUFBLGFBQVUsRUFBQ1AsZ0JBQWdCTixPQUFPQyxjQUFjO1lBQ3pFLElBQUlhO1lBRUpBLGdCQUFnQlo7WUFFaEIsT0FBT1k7UUFDVDtRQUVBQSxnQkFBZ0JDLG9CQUFxQixHQUFHO1FBRXhDLE9BQU9EO0lBQ1Q7SUFFTlgsZ0JBQWdCUyxtQkFBbUIsR0FBRztJQUV0QyxJQUFJVCxlQUFlO1FBQ2pCRixhQUFhZSxLQUFLLENBQUMsQUFBQyxvQkFBNENOLE9BQXpCRixpQkFBZ0IsV0FBMEIsT0FBakJFLGtCQUFpQixhQUFXTjtJQUM5RjtJQUVBLE9BQU9EO0FBQ1QifQ==