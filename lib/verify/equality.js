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
        verifyStatedEquality
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
function verifyStatedEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
    var statedEqualityVerified = false;
    if (!derived) {
        var equalityString = localContext.nodeAsString(equalityNode);
        localContext.trace("Verifying the '".concat(equalityString, "' stated equality..."), equalityNode);
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
        statedEqualityVerified = termsVerified; ///
        if (statedEqualityVerified) {
            localContext.trace("...verified the '".concat(equalityString, "' stated equality."), equalityNode);
        }
    }
    return statedEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkO1xuXG4gIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBjb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhdGVkRXF1YWxpdHlcbiAgXTtcblxuICBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RXF1YWxpdHlGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUZXJtID0gc2Vjb25kKHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybSA9IHNlY29uZFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUZXJtID0gc2Vjb25kKHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybSA9IHNlY29uZFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwiZXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRFcXVhbGl0eSIsInZlcmlmeVN0YXRlZEVxdWFsaXR5Iiwic29tZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkIiwidGVybXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0Iiwic2Vjb25kVGVybSIsInNlY29uZCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJwb3AiLCJzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OytEQVZIOzREQUNHO2dFQUNPO3FCQUVMO3FCQUNJOzs7Ozs7QUFFOUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLGVBQWVJLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUNsRyxJQUFJQztJQUVKLElBQU1DLGlCQUFpQkgsYUFBYUksWUFBWSxDQUFDUDtJQUVqREcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQk47SUFFcEUsSUFBTVMsMEJBQTBCO1FBQzlCQztRQUNBQztLQUNEO0lBRUROLG1CQUFtQkksd0JBQXdCRyxJQUFJLENBQUMsU0FBQ0M7UUFDL0MsSUFBTVIsbUJBQW1CUSx1QkFBdUJiLGNBQWNDLGFBQWFDLFNBQVNDLGNBQWNDO1FBRWxHLElBQUlDLGtCQUFrQjtZQUNwQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQkYsYUFBYVcsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZSLGdCQUFlLGdCQUFjTjtJQUN0RTtJQUVBLE9BQU9LO0FBQ1Q7QUFFQSxTQUFTSyxzQkFBc0JWLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUMxRixJQUFJVywwQkFBMEI7SUFFOUIsSUFBSWIsU0FBUztRQUNYLElBQU1JLGlCQUFpQkgsYUFBYUksWUFBWSxDQUFDUDtRQUVqREcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLDBCQUF3Qk47UUFFNUUsSUFBTWdCLFFBQVEsRUFBRSxFQUNWQyxlQUFlcEIsa0JBQWtCRyxlQUNqQ2tCLGdCQUFnQm5CLG1CQUFtQkMsZUFDbkNtQixZQUFZO1lBQ1ZGO1lBQ0FDO1NBQ0QsRUFDREUsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNGLFdBQVdILE9BQU9iLGNBQWM7WUFDMUQsSUFBSW1CLGdCQUFnQjtZQUVwQixJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNSLFFBQ2xCUyxhQUFhQyxJQUFBQSxhQUFNLEVBQUNWLFFBQ3BCVyxXQUFXSixXQUNYSyxZQUFZSCxZQUNaSSxXQUFXQyxpQkFBUSxDQUFDQyxvQ0FBb0MsQ0FBQ0osVUFBVUMsV0FBVzVCO1lBRXBGLElBQUk2QixhQUFhLE1BQU07Z0JBQ3JCLElBQU1HLGdCQUFnQkgsU0FBU0ksT0FBTyxDQUFDOUI7Z0JBRXZDLElBQUk2QixlQUFlO29CQUNqQixJQUFNRSxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNQLFdBQ3JEUSxhQUFhSCxvQkFBb0IsR0FBRztvQkFFMUNqQyxZQUFZcUMsSUFBSSxDQUFDRDtvQkFFakJmLGdCQUFnQmxCO29CQUVoQixJQUFJLENBQUNrQixlQUFlO3dCQUNsQnJCLFlBQVlzQyxHQUFHO29CQUNqQjtnQkFDRjtZQUNGO1lBRUEsT0FBT2pCO1FBQ1Q7UUFFTlAsMEJBQTBCSyxlQUFlLEdBQUc7UUFFNUMsSUFBSUwseUJBQXlCO1lBQzNCWixhQUFhSyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkYsZ0JBQWUsd0JBQXNCTjtRQUM5RTtJQUNGO0lBRUEsT0FBT2U7QUFDVDtBQUVBLFNBQVNKLHFCQUFxQlgsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ3pGLElBQUlvQyx5QkFBeUI7SUFFN0IsSUFBSSxDQUFDdEMsU0FBUztRQUNaLElBQU1JLGlCQUFpQkgsYUFBYUksWUFBWSxDQUFDUDtRQUVqREcsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLHlCQUF1Qk47UUFFM0UsSUFBTWdCLFFBQVEsRUFBRSxFQUNWQyxlQUFlcEIsa0JBQWtCRyxlQUNqQ2tCLGdCQUFnQm5CLG1CQUFtQkMsZUFDbkNtQixZQUFZO1lBQ1ZGO1lBQ0FDO1NBQ0QsRUFDREUsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNGLFdBQVdILE9BQU9iLGNBQWM7WUFDMUQsSUFBSW1CLGdCQUFnQjtZQUVwQixJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNSLFFBQ2xCUyxhQUFhQyxJQUFBQSxhQUFNLEVBQUNWLFFBQ3BCVyxXQUFXSixXQUNYSyxZQUFZSCxZQUNaSSxXQUFXQyxpQkFBUSxDQUFDQyxvQ0FBb0MsQ0FBQ0osVUFBVUMsV0FBVzVCO1lBRXBGLElBQUk2QixhQUFhLE1BQU07Z0JBQ3JCLElBQU1LLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1AsV0FDckRRLGFBQWFILG9CQUFvQixHQUFHO2dCQUUxQ2pDLFlBQVlxQyxJQUFJLENBQUNEO2dCQUVqQmYsZ0JBQWdCbEI7Z0JBRWhCLElBQUksQ0FBQ2tCLGVBQWU7b0JBQ2xCckIsWUFBWXNDLEdBQUc7Z0JBQ2pCO1lBQ0Y7WUFFQSxPQUFPakI7UUFDVDtRQUVOa0IseUJBQXlCcEIsZUFBZSxHQUFHO1FBRTNDLElBQUlvQix3QkFBd0I7WUFDMUJyQyxhQUFhSyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkYsZ0JBQWUsdUJBQXFCTjtRQUM3RTtJQUNGO0lBRUEsT0FBT3dDO0FBQ1QifQ==