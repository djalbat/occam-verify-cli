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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5XG4gIF07XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGNvbnRleHQuaXNFcXVhbGl0eUVxdWFsKGVxdWFsaXR5KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGFuZGFsb25lIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhbmRhbG9uZSBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwiZXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRFcXVhbGl0eSIsInZlcmlmeVN0YW5kYWxvbmVFcXVhbGl0eSIsInNvbWUiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCIsInRlcm1zIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1Ob2RlcyIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInNlY29uZFRlcm0iLCJzZWNvbmQiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbGl0eUVxdWFsIiwic3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsrREFWSDs0REFDRztnRUFDTztxQkFFTDtxQkFDSTs7Ozs7O0FBRTlCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRixlQUFlSSxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDN0YsSUFBSUM7SUFFSixJQUFNQyxpQkFBaUJILFFBQVFJLFlBQVksQ0FBQ1A7SUFFNUNHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JOO0lBRS9ELElBQU1TLDBCQUEwQjtRQUM5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