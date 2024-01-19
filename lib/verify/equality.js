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
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromEqualityNodeLeftTermAndRightTerm(equalityNode, leftTerm, rightTerm);
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
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromEqualityNodeLeftTermAndRightTerm(equalityNode, leftTerm, rightTerm);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5R2l2ZW5FcXVhbGl0eVxuICBdO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21FcXVhbGl0eU5vZGVMZWZ0VGVybUFuZFJpZ2h0VGVybShlcXVhbGl0eU5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGNvbnRleHQuaXNFcXVhbGl0eUVxdWFsKGVxdWFsaXR5KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5R2l2ZW5FcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGdpdmVuIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21FcXVhbGl0eU5vZGVMZWZ0VGVybUFuZFJpZ2h0VGVybShlcXVhbGl0eU5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBnaXZlbkVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChnaXZlbkVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGdpdmVuIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdpdmVuRXF1YWxpdHlWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwiZXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRFcXVhbGl0eSIsInZlcmlmeUdpdmVuRXF1YWxpdHkiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXMiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJzZWNvbmRUZXJtIiwic2Vjb25kIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUVxdWFsaXR5Tm9kZUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWxpdHlFcXVhbCIsImdpdmVuRXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJwdXNoIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OytEQVZIOzREQUNHO2dFQUNPO3FCQUVMO3FCQUNJOzs7Ozs7QUFFOUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLGVBQWVJLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUM3RixJQUFJQztJQUVKLElBQU1DLGlCQUFpQkgsUUFBUUksWUFBWSxDQUFDUDtJQUU1Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQk47SUFFL0QsSUFB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