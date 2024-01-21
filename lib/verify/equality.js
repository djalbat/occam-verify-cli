"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyEquality;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _terms = /*#__PURE__*/ _interop_require_default(require("../verify/terms"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../assignment/equality"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/equality/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/argument[1]/term!");
function verifyEquality(equalityNode, assignments, derived, context, verifyAhead) {
    var equalityVerified;
    var equalityString = context.nodeAsString(equalityNode);
    context.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    var verifyEqualityFunctions = [
        verifyDerivedEquality,
        verifyGivenEquality
    ];
    equalityVerified = verifyEqualityFunctions.some(function(verifyEqualityFunction) {
        var equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, context, verifyAhead);
        if (equalityVerified) {
            return true;
        }
    });
    if (equalityVerified) {
        context.debug("...verified the '".concat(equalityString, "' equality."), equalityNode);
    }
    return equalityVerified;
}
function verifyDerivedEquality(equalityNode, assignments, derived, context, verifyAhead) {
    var derivedEqualityVerified = false;
    if (derived) {
        var equalityString = context.nodeAsString(equalityNode);
        context.trace("Verifying the '".concat(equalityString, "' derived equality..."), equalityNode);
        var terms = [], leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), termNodes = [
            leftTermNode,
            rightTermNode
        ], termsVerified = (0, _terms.default)(termNodes, terms, context, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);
            if (equality !== null) {
                var equalityEqual = equality.isEqual(context);
                if (equalityEqual) {
                    verifiedAhead = verifyAhead();
                }
            }
            return verifiedAhead;
        });
        derivedEqualityVerified = termsVerified; ///
        if (derivedEqualityVerified) {
            context.trace("...verified the '".concat(equalityString, "' derived equality."), equalityNode);
        }
    }
    return derivedEqualityVerified;
}
function verifyGivenEquality(equalityNode, assignments, derived, context, verifyAhead) {
    var givenEqualityVerified = false;
    if (!derived) {
        var equalityString = context.nodeAsString(equalityNode);
        context.trace("Verifying the '".concat(equalityString, "' given equality..."), equalityNode);
        var terms = [], leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), termNodes = [
            leftTermNode,
            rightTermNode
        ], termsVerified = (0, _terms.default)(termNodes, terms, context, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);
            if (equality !== null) {
                var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                assignments.push(assignment);
                verifiedAhead = verifyAhead();
                if (!verifiedAhead) {
                    assignments.pop();
                }
            }
            return verifiedAhead;
        });
        givenEqualityVerified = termsVerified; ///
        if (givenEqualityVerified) {
            context.trace("...verified the '".concat(equalityString, "' given equality."), equalityNode);
        }
    }
    return givenEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5R2l2ZW5FcXVhbGl0eVxuICBdO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZShsZWZ0VGVybSwgcmlnaHRUZXJtLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUdpdmVuRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGdpdmVuRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBnaXZlbiBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUZXJtID0gc2Vjb25kKHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybSA9IHNlY29uZFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBnaXZlbiBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnaXZlbkVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlHaXZlbkVxdWFsaXR5Iiwic29tZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkIiwidGVybXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0Iiwic2Vjb25kVGVybSIsInNlY29uZCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwiZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7K0RBVkg7NERBQ0c7Z0VBQ087cUJBRUw7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzdGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTVDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTjtJQUUvRCxJQUFNUywwQkFBMEI7UUFDOUJD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