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
            var verifiedAhead = verifyAhead();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gIGNvbnN0IGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpLFxuICAgICAgICBzZWNvbmRUZXJtTm9kZSA9IHNlY29uZCh0ZXJtTm9kZXMpLFxuICAgICAgICBmaXJzdFRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZpcnN0VGVybU5vZGUpLFxuICAgICAgICBzZWNvbmRUZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzZWNvbmRUZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZpcnN0VGVybVN0cmluZ30nIGFuZCAnJHtzZWNvbmRUZXJtU3RyaW5nfScgdGVybXMuLi5gLCBmaXJzdFRlcm1Ob2RlKTtcblxuICBjb25zdCBmaXJzdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0oZmlyc3RUZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3Qgc2Vjb25kVGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShzZWNvbmRUZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHNlY29uZFRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1zVmVyaWZpZWQgPSBmaXJzdFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmaXJzdFRlcm1TdHJpbmd9JyBhbmQgJyR7c2Vjb25kVGVybVN0cmluZ30nIHRlcm1zLmAsIGZpcnN0VGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1zVmVyaWZpZWRcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtcyIsInRlcm1Ob2RlcyIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtc1ZlcmlmaWVkIiwiZmlyc3RUZXJtTm9kZSIsImZpcnN0Iiwic2Vjb25kVGVybU5vZGUiLCJzZWNvbmQiLCJmaXJzdFRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJzZWNvbmRUZXJtU3RyaW5nIiwidHJhY2UiLCJmaXJzdFRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwic2Vjb25kVGVybVZlcmlmaWVkIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSkQ7cUJBRU87Ozs7OztBQUVmLFNBQVNBLFlBQVlDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUM7SUFFSixJQUFNQyxnQkFBZ0JDLElBQUFBLFlBQUssRUFBQ04sWUFDdEJPLGlCQUFpQkMsSUFBQUEsYUFBTSxFQUFDUixZQUN4QlMsa0JBQWtCUCxhQUFhUSxZQUFZLENBQUNMLGdCQUM1Q00sbUJBQW1CVCxhQUFhUSxZQUFZLENBQUNIO0lBRW5ETCxhQUFhVSxLQUFLLENBQUMsQUFBQyxrQkFBMENELE9BQXpCRixpQkFBZ0IsV0FBMEIsT0FBakJFLGtCQUFpQixlQUFhTjtJQUU1RixJQUFNUSxvQkFBb0JDLElBQUFBLGFBQVUsRUFBQ1QsZUFBZUosT0FBT0MsY0FBYztRQUNqRSxJQUFJYTtRQUVKLElBQU1DLHFCQUFxQkYsSUFBQUEsYUFBVSxFQUFDUCxnQkFBZ0JOLE9BQU9DLGNBQWM7WUFDekUsSUFBTWEsZ0JBQWdCWjtZQUV0QixPQUFPWTtRQUNUO1FBRUFBLGdCQUFnQkMsb0JBQXFCLEdBQUc7UUFFeEMsT0FBT0Q7SUFDVDtJQUVOWCxnQkFBZ0JTLG1CQUFtQixHQUFHO0lBRXRDLElBQUlULGVBQWU7UUFDakJGLGFBQWFlLEtBQUssQ0FBQyxBQUFDLG9CQUE0Q04sT0FBekJGLGlCQUFnQixXQUEwQixPQUFqQkUsa0JBQWlCLGFBQVdOO0lBQzlGO0lBRUEsT0FBT0Q7QUFDVCJ9