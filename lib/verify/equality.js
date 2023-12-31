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
        verifyStandaloneEquality
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
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromLeftTermAndRightTerm(leftTerm, rightTerm);
            if (equality !== null) {
                var equalityEqual = context.isEqualityEqual(equality);
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
function verifyStandaloneEquality(equalityNode, assignments, derived, context, verifyAhead) {
    var standaloneEqualityVerified = false;
    if (!derived) {
        var equalityString = context.nodeAsString(equalityNode);
        context.trace("Verifying the '".concat(equalityString, "' standalone equality..."), equalityNode);
        var terms = [], leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), termNodes = [
            leftTermNode,
            rightTermNode
        ], termsVerified = (0, _terms.default)(termNodes, terms, context, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromLeftTermAndRightTerm(leftTerm, rightTerm);
            if (equality !== null) {
                var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                assignments.push(assignment);
                verifiedAhead = verifyAhead();
            }
            return verifiedAhead;
        });
        standaloneEqualityVerified = termsVerified; ///
        if (standaloneEqualityVerified) {
            context.trace("...verified the '".concat(equalityString, "' standalone equality."), equalityNode);
        }
    }
    return standaloneEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5XG4gIF07XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGNvbnRleHQuaXNFcXVhbGl0eUVxdWFsKGVxdWFsaXR5KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGFuZGFsb25lIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YW5kYWxvbmUgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGFuZGFsb25lRXF1YWxpdHkiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXMiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJzZWNvbmRUZXJtIiwic2Vjb25kIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWxpdHlFcXVhbCIsInN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7K0RBVkg7NERBQ0c7Z0VBQ087cUJBRUw7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzdGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTVDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTjtJQUUvRCxJQUFNUywwQkFBMEI7UUFDOUJDO1FBQ0FDO0tBQ0Q7SUFFRE4sbUJBQW1CSSx3QkFBd0JHLElBQUksQ0FBQyxTQUFDQztRQUMvQyxJQUFNUixtQkFBbUJRLHVCQUF1QmIsY0FBY0MsYUFBYUMsU0FBU0Ms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