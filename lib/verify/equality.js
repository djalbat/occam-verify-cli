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
function verifyEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
    var equalityVerified;
    var equalityString = localContext.nodeAsString(equalityNode);
    localContext.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    var verifyEqualityFunctions = [
        verifyDerivedEquality,
        verifyGivenEquality
    ];
    equalityVerified = verifyEqualityFunctions.some(function(verifyEqualityFunction) {
        var equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, localContext, verifyAhead);
        if (equalityVerified) {
            return true;
        }
    });
    if (equalityVerified) {
        localContext.debug("...verified the '".concat(equalityString, "' equality."), equalityNode);
    }
    return equalityVerified;
}
function verifyDerivedEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
    var derivedEqualityVerified = false;
    if (derived) {
        var equalityString = localContext.nodeAsString(equalityNode);
        localContext.trace("Verifying the '".concat(equalityString, "' derived equality..."), equalityNode);
        var terms = [], leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), termNodes = [
            leftTermNode,
            rightTermNode
        ], termsVerified = (0, _terms.default)(termNodes, terms, localContext, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, equality = _equality.default.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);
            if (equality !== null) {
                var equalityEqual = equality.isEqual(localContext);
                if (equalityEqual) {
                    var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                    assignments.push(assignment);
                    verifiedAhead = verifyAhead();
                    if (!verifiedAhead) {
                        assignments.pop();
                    }
                }
            }
            return verifiedAhead;
        });
        derivedEqualityVerified = termsVerified; ///
        if (derivedEqualityVerified) {
            localContext.trace("...verified the '".concat(equalityString, "' derived equality."), equalityNode);
        }
    }
    return derivedEqualityVerified;
}
function verifyGivenEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
    var givenEqualityVerified = false;
    if (!derived) {
        var equalityString = localContext.nodeAsString(equalityNode);
        localContext.trace("Verifying the '".concat(equalityString, "' given equality..."), equalityNode);
        var terms = [], leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), termNodes = [
            leftTermNode,
            rightTermNode
        ], termsVerified = (0, _terms.default)(termNodes, terms, localContext, function() {
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
            localContext.trace("...verified the '".concat(equalityString, "' given equality."), equalityNode);
        }
    }
    return givenEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkO1xuXG4gIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5R2l2ZW5FcXVhbGl0eVxuICBdO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZShsZWZ0VGVybSwgcmlnaHRUZXJtLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUdpdmVuRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBnaXZlbiBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZShsZWZ0VGVybSwgcmlnaHRUZXJtLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBnaXZlbkVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChnaXZlbkVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZ2l2ZW4gZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2l2ZW5FcXVhbGl0eVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJlcXVhbGl0eU5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlHaXZlbkVxdWFsaXR5Iiwic29tZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkIiwidGVybXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0Iiwic2Vjb25kVGVybSIsInNlY29uZCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiLCJnaXZlbkVxdWFsaXR5VmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7K0RBVkg7NERBQ0c7Z0VBQ087cUJBRUw7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ2xHLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCSCxhQUFhSSxZQUFZLENBQUNQO0lBRWpERyxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTjtJQUVwRSxJQUFNUywwQkFBMEI7UUFDOUJDO1FBQ0FDO0tBQ0Q7SUFFRE4sbUJBQW1CSSx3QkFBd0JHLElBQUksQ0FBQyxTQUFDQztRQUMvQyxJQUFNUixtQkFBbUJRLHVCQUF1QmIsY0FBY0MsYUFBYUMsU0FBU0MsY0FBY0M7UUFFbEcsSUFBSUMsa0JBQWtCO1lBQ3BCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRixhQUFhVyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlIsZ0JBQWUsZ0JBQWNOO0lBQ3RFO0lBRUEsT0FBT0s7QUFDVDtBQUVBLFNBQVNLLHNCQUFzQlYsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzFGLElBQUlXLDBCQUEwQjtJQUU5QixJQUFJYixTQUFTO1FBQ1gsSUFBTUksaUJBQWlCSCxhQUFhSSxZQUFZLENBQUNQO1FBRWpERyxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsMEJBQXdCTjtRQUU1RSxJQUFNZ0IsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVwQixrQkFBa0JHLGVBQ2pDa0IsZ0JBQWdCbkIsbUJBQW1CQyxlQUNuQ21CLFlBQVk7WUFDVkY7WUFDQUM7U0FDRCxFQUNERSxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0gsT0FBT2IsY0FBYztZQUMxRCxJQUFJbUIsZ0JBQWdCO1lBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ1IsUUFDbEJTLGFBQWFDLElBQUFBLGFBQU0sRUFBQ1YsUUFDcEJXLFdBQVdKLFdBQ1hLLFlBQVlILFlBQ1pJLFdBQVdDLGlCQUFRLENBQUNDLG9DQUFvQyxDQUFDSixVQUFVQyxXQUFXNUI7WUFFcEYsSUFBSTZCLGFBQWEsTUFBTTtnQkFDckIsSUFBTUcsZ0JBQWdCSCxTQUFTSSxPQUFPLENBQUM5QjtnQkFFdkMsSUFBSTZCLGVBQWU7b0JBQ2pCLElBQU1FLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1AsV0FDckRRLGFBQWFILG9CQUFvQixHQUFHO29CQUUxQ2pDLFlBQVlxQyxJQUFJLENBQUNEO29CQUVqQmYsZ0JBQWdCbEI7b0JBRWhCLElBQUksQ0FBQ2tCLGVBQWU7d0JBQ2xCckIsWUFBWXNDLEdBQUc7b0JBQ2pCO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPakI7UUFDVDtRQUVOUCwwQkFBMEJLLGVBQWUsR0FBRztRQUU1QyxJQUFJTCx5QkFBeUI7WUFDM0JaLGFBQWFLLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmRixnQkFBZSx3QkFBc0JOO1FBQzlFO0lBQ0Y7SUFFQSxPQUFPZTtBQUNUO0FBRUEsU0FBU0osb0JBQW9CWCxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDeEYsSUFBSW9DLHdCQUF3QjtJQUU1QixJQUFJLENBQUN0QyxTQUFTO1FBQ1osSUFBTUksaUJBQWlCSCxhQUFhSSxZQUFZLENBQUNQO1FBRWpERyxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsd0JBQXNCTjtRQUUxRSxJQUFNZ0IsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVwQixrQkFBa0JHLGVBQ2pDa0IsZ0JBQWdCbkIsbUJBQW1CQyxlQUNuQ21CLFlBQVk7WUFDVkY7WUFDQUM7U0FDRCxFQUNERSxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0gsT0FBT2IsY0FBYztZQUMxRCxJQUFJbUIsZ0JBQWdCO1lBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ1IsUUFDbEJTLGFBQWFDLElBQUFBLGFBQU0sRUFBQ1YsUUFDcEJXLFdBQVdKLFdBQ1hLLFlBQVlILFlBQ1pJLFdBQVdDLGlCQUFRLENBQUNDLG9DQUFvQyxDQUFDSixVQUFVQyxXQUFXNUI7WUFFcEYsSUFBSTZCLGFBQWEsTUFBTTtnQkFDckIsSUFBTUsscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDUCxXQUNyRFEsYUFBYUgsb0JBQW9CLEdBQUc7Z0JBRTFDakMsWUFBWXFDLElBQUksQ0FBQ0Q7Z0JBRWpCZixnQkFBZ0JsQjtnQkFFaEIsSUFBSSxDQUFDa0IsZUFBZTtvQkFDbEJyQixZQUFZc0MsR0FBRztnQkFDakI7WUFDRjtZQUVBLE9BQU9qQjtRQUNUO1FBRU5rQix3QkFBd0JwQixlQUFlLEdBQUc7UUFFMUMsSUFBSW9CLHVCQUF1QjtZQUN6QnJDLGFBQWFLLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmRixnQkFBZSxzQkFBb0JOO1FBQzVFO0lBQ0Y7SUFFQSxPQUFPd0M7QUFDVCJ9