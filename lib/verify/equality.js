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
        standaloneEqualityVerified = termsVerified; ///
        if (standaloneEqualityVerified) {
            context.trace("...verified the '".concat(equalityString, "' standalone equality."), equalityNode);
        }
    }
    return standaloneEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5XG4gIF07XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUVxdWFsaXR5Tm9kZUxlZnRUZXJtQW5kUmlnaHRUZXJtKGVxdWFsaXR5Tm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gY29udGV4dC5pc0VxdWFsaXR5RXF1YWwoZXF1YWxpdHkpO1xuXG4gICAgICAgICAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YW5kYWxvbmUgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUVxdWFsaXR5Tm9kZUxlZnRUZXJtQW5kUmlnaHRUZXJtKGVxdWFsaXR5Tm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YW5kYWxvbmUgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGFuZGFsb25lRXF1YWxpdHkiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXMiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJzZWNvbmRUZXJtIiwic2Vjb25kIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUVxdWFsaXR5Tm9kZUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWxpdHlFcXVhbCIsInN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7K0RBVkg7NERBQ0c7Z0VBQ087cUJBRUw7cUJBQ0k7Ozs7OztBQUU5QixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsZUFBZUksWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzdGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTVDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTjtJQUUvRCxJQUFNUywwQkFBMEI7UUFDOUJDO1FBQ0FDO0tBQ0Q7SUFFRE4sbUJBQW1CSSx3QkFBd0JHLElBQUksQ0FBQyxTQUFDQztRQUMvQyxJQUFNUixtQkFBbUJRLHVCQUF1QmIsY0FBY0MsYUFBYUMsU0FBU0MsU0FBU0M7UUFFN0YsSUFBSUMsa0JBQWtCO1lBQ3BCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRixRQUFRVyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlIsZ0JBQWUsZ0JBQWNOO0lBQ2pFO0lBRUEsT0FBT0s7QUFDVDtBQUVBLFNBQVNLLHNCQUFzQlYsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ3JGLElBQUlXLDBCQUEwQjtJQUU5QixJQUFJYixTQUFTO1FBQ1gsSUFBTUksaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQO1FBRTVDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsMEJBQXdCTjtRQUV2RSxJQUFNZ0IsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVwQixrQkFBa0JHLGVBQ2pDa0IsZ0JBQWdCbkIsbUJBQW1CQyxlQUNuQ21CLFlBQVk7WUFDVkY7WUFDQUM7U0FDRCxFQUNERSxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0gsT0FBT2IsU0FBUztZQUNyRCxJQUFJbUIsZ0JBQWdCO1lBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ1IsUUFDbEJTLGFBQWFDLElBQUFBLGFBQU0sRUFBQ1YsUUFDcEJXLFdBQVdKLFdBQ1hLLFlBQVlILFlBQ1pJLFdBQVdDLGlCQUFRLENBQUNDLG9DQUFvQyxDQUFDL0IsY0FBYzJCLFVBQVVDO1lBRXZGLElBQUlDLGFBQWEsTUFBTTtnQkFDckIsSUFBTUcsZ0JBQWdCN0IsUUFBUThCLGVBQWUsQ0FBQ0o7Z0JBRTlDLElBQUlHLGVBQWU7b0JBQ2pCVixnQkFBZ0JsQjtnQkFDbEI7WUFDRjtZQUVBLE9BQU9rQjtRQUNUO1FBRU5QLDBCQUEwQkssZUFBZSxHQUFHO1FBRTVDLElBQUlMLHlCQUF5QjtZQUMzQlosUUFBUUssS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZGLGdCQUFlLHdCQUFzQk47UUFDekU7SUFDRjtJQUVBLE9BQU9lO0FBQ1Q7QUFFQSxTQUFTSix5QkFBeUJYLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUN4RixJQUFJOEIsNkJBQTZCO0lBRWpDLElBQUksQ0FBQ2hDLFNBQVM7UUFDWixJQUFNSSxpQkFBaUJILFFBQVFJLFlBQVksQ0FBQ1A7UUFFNUNHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSw2QkFBMkJOO1FBRTFFLElBQU1nQixRQUFRLEVBQUUsRUFDVkMsZUFBZXBCLGtCQUFrQkcsZUFDakNrQixnQkFBZ0JuQixtQkFBbUJDLGVBQ25DbUIsWUFBWTtZQUNWRjtZQUNBQztTQUNELEVBQ0RFLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRixXQUFXSCxPQUFPYixTQUFTO1lBQ3JELElBQUltQixnQkFBZ0I7WUFFcEIsSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDUixRQUNsQlMsYUFBYUMsSUFBQUEsYUFBTSxFQUFDVixRQUNwQlcsV0FBV0osV0FDWEssWUFBWUgsWUFDWkksV0FBV0MsaUJBQVEsQ0FBQ0Msb0NBQW9DLENBQUMvQixjQUFjMkIsVUFBVUM7WUFFdkYsSUFBSUMsYUFBYSxNQUFNO2dCQUNyQixJQUFNTSxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNSLFdBQ3JEUyxhQUFhSCxvQkFBb0IsR0FBRztnQkFFMUNsQyxZQUFZc0MsSUFBSSxDQUFDRDtnQkFFakJoQixnQkFBZ0JsQjtnQkFFaEIsSUFBSSxDQUFDa0IsZUFBZTtvQkFDbEJyQixZQUFZdUMsR0FBRztnQkFDakI7WUFDRjtZQUVBLE9BQU9sQjtRQUNUO1FBRU5ZLDZCQUE2QmQsZUFBZSxHQUFHO1FBRS9DLElBQUljLDRCQUE0QjtZQUM5Qi9CLFFBQVFLLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmRixnQkFBZSwyQkFBeUJOO1FBQzVFO0lBQ0Y7SUFFQSxPQUFPa0M7QUFDVCJ9