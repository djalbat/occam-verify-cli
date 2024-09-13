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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodesQuery = (0, _query.nodesQuery)("/equality/term");
var verifyEqualityFunctions = [
    verifyDerivedEquality,
    verifyStatedEquality
];
function verifyEquality(equalityNode, assignments, derived, localContext) {
    var equalityVerified;
    var equalityString = localContext.nodeAsString(equalityNode);
    localContext.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    equalityVerified = verifyEqualityFunctions.some(function(verifyEqualityFunction) {
        var equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, localContext);
        if (equalityVerified) {
            return true;
        }
    });
    if (equalityVerified) {
        localContext.debug("...verified the '".concat(equalityString, "' equality."), equalityNode);
    }
    return equalityVerified;
}
function verifyDerivedEquality(equalityNode, assignments, derived, localContext) {
    var derivedEqualityVerified = false;
    if (derived) {
        var equalityString = localContext.nodeAsString(equalityNode);
        localContext.trace("Verifying the '".concat(equalityString, "' derived equality..."), equalityNode);
        var terms = [], termNodes = termNodesQuery(equalityNode), termsVerified = (0, _terms.default)(termNodes, terms, localContext, function() {
            var verifiedAhead = false;
            var equality = _equality.default.fromTermsAndEqualityNode(terms, equalityNode);
            if (equality !== null) {
                var equalityEqual = equality.isEqual(localContext);
                if (equalityEqual) {
                    var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                    assignments.push(assignment);
                    verifiedAhead = true;
                }
            }
            return verifiedAhead;
        });
        derivedEqualityVerified = termsVerified; ///
        if (derivedEqualityVerified) {
            localContext.debug("...verified the '".concat(equalityString, "' derived equality."), equalityNode);
        }
    }
    return derivedEqualityVerified;
}
function verifyStatedEquality(equalityNode, assignments, derived, localContext) {
    var statedEqualityVerified = false;
    if (!derived) {
        var equalityString = localContext.nodeAsString(equalityNode);
        localContext.trace("Verifying the '".concat(equalityString, "' stated equality..."), equalityNode);
        var terms = [], termNodes = termNodesQuery(equalityNode), termsVerified = (0, _terms.default)(termNodes, terms, localContext, function() {
            var verifiedAhead = false;
            var equality = _equality.default.fromTermsAndEqualityNode(terms, equalityNode);
            if (equality !== null) {
                var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                assignments.push(assignment);
                verifiedAhead = true;
            }
            return verifiedAhead;
        });
        statedEqualityVerified = termsVerified; ///
        if (statedEqualityVerified) {
            localContext.debug("...verified the '".concat(equalityString, "' stated equality."), equalityNode);
        }
    }
    return statedEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9lcXVhbGl0eS90ZXJtXCIpO1xuXG5jb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEVxdWFsaXR5LFxuICB2ZXJpZnlTdGF0ZWRFcXVhbGl0eVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkO1xuXG4gIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RXF1YWxpdHlGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGVzID0gdGVybU5vZGVzUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSh0ZXJtcywgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtTm9kZXNRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlKHRlcm1zLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJ0ZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRFcXVhbGl0eSIsInZlcmlmeVN0YXRlZEVxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsInRlcm1Ob2RlcyIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkQWhlYWQiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCIsInN0YXRlZEVxdWFsaXR5VmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBd0JBOzs7K0RBYkg7NERBQ0c7Z0VBQ087cUJBRUo7Ozs7OztBQUUzQixJQUFNQyxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsSUFBTUMsMEJBQTBCO0lBQzlCQztJQUNBQztDQUNEO0FBRWMsU0FBU0wsZUFBZU0sWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUNyRixJQUFJQztJQUVKLElBQU1DLGlCQUFpQkYsYUFBYUcsWUFBWSxDQUFDTjtJQUVqREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQkw7SUFFcEVJLG1CQUFtQlAsd0JBQXdCVyxJQUFJLENBQUMsU0FBQ0M7UUFDL0MsSUFBTUwsbUJBQW1CSyx1QkFBdUJULGNBQWNDLGFBQWFDLFNBQVNDO1FBRXBGLElBQUlDLGtCQUFrQjtZQUNwQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQkQsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZMLGdCQUFlLGdCQUFjTDtJQUN0RTtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTTixzQkFBc0JFLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0UsSUFBSVEsMEJBQTBCO0lBRTlCLElBQUlULFNBQVM7UUFDWCxJQUFNRyxpQkFBaUJGLGFBQWFHLFlBQVksQ0FBQ047UUFFakRHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSwwQkFBd0JMO1FBRTVFLElBQU1ZLFFBQVEsRUFBRSxFQUNWQyxZQUFZbEIsZUFBZUssZUFDM0JjLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRixXQUFXRCxPQUFPVCxjQUFjO1lBQzFELElBQUlhLGdCQUFnQjtZQUVwQixJQUFNQyxXQUFXQyxpQkFBUSxDQUFDQyx3QkFBd0IsQ0FBQ1AsT0FBT1o7WUFFMUQsSUFBSWlCLGFBQWEsTUFBTTtnQkFDckIsSUFBTUcsZ0JBQWdCSCxTQUFTSSxPQUFPLENBQUNsQjtnQkFFdkMsSUFBSWlCLGVBQWU7b0JBQ2pCLElBQU1FLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1AsV0FDckRRLGFBQWFILG9CQUFvQixHQUFHO29CQUUxQ3JCLFlBQVl5QixJQUFJLENBQUNEO29CQUVqQlQsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtRQUVOTCwwQkFBMEJHLGVBQWUsR0FBRztRQUU1QyxJQUFJSCx5QkFBeUI7WUFDM0JSLGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmTCxnQkFBZSx3QkFBc0JMO1FBQzlFO0lBQ0Y7SUFFQSxPQUFPVztBQUNUO0FBRUEsU0FBU1oscUJBQXFCQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzVFLElBQUl3Qix5QkFBeUI7SUFFN0IsSUFBSSxDQUFDekIsU0FBUztRQUNaLElBQU1HLGlCQUFpQkYsYUFBYUcsWUFBWSxDQUFDTjtRQUVqREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLHlCQUF1Qkw7UUFFM0UsSUFBTVksUUFBUSxFQUFFLEVBQ1ZDLFlBQVlsQixlQUFlSyxlQUMzQmMsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNGLFdBQVdELE9BQU9ULGNBQWM7WUFDMUQsSUFBSWEsZ0JBQWdCO1lBRXBCLElBQU1DLFdBQVdDLGlCQUFRLENBQUNDLHdCQUF3QixDQUFDUCxPQUFPWjtZQUUxRCxJQUFJaUIsYUFBYSxNQUFNO2dCQUNyQixJQUFNSyxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNQLFdBQ3JEUSxhQUFhSCxvQkFBb0IsR0FBRztnQkFFMUNyQixZQUFZeUIsSUFBSSxDQUFDRDtnQkFFakJULGdCQUFnQjtZQUNsQjtZQUVBLE9BQU9BO1FBQ1Q7UUFFTlcseUJBQXlCYixlQUFlLEdBQUc7UUFFM0MsSUFBSWEsd0JBQXdCO1lBQzFCeEIsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZMLGdCQUFlLHVCQUFxQkw7UUFDN0U7SUFDRjtJQUVBLE9BQU8yQjtBQUNUIn0=