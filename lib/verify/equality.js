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
function verifyEquality(equalityNode, assignments, derived, localContext) {
    var equalityVerified;
    var equalityString = localContext.nodeAsString(equalityNode);
    localContext.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    var verifyEqualityFunctions = [
        verifyDerivedEquality,
        verifyStatedEquality
    ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9lcXVhbGl0eS90ZXJtXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5VmVyaWZpZWQ7XG5cbiAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZWRFcXVhbGl0eVxuICBdO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtTm9kZXNRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlKHRlcm1zLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1Ob2Rlc1F1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tVGVybXNBbmRFcXVhbGl0eU5vZGUodGVybXMsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRXF1YWxpdHlWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsInRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZWRFcXVhbGl0eSIsInNvbWUiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCIsInRlcm1zIiwidGVybU5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRBaGVhZCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tVGVybXNBbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsInN0YXRlZEVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsrREFSSDs0REFDRztnRUFDTztxQkFFSjs7Ozs7O0FBRTNCLElBQU1DLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQztBQUVuQixTQUFTRixlQUFlRyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQ3JGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCRixhQUFhRyxZQUFZLENBQUNOO0lBRWpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTDtJQUVwRSxJQUFNUSwwQkFBMEI7UUFDOUJDO1FBQ0FDO0tBQ0Q7SUFFRE4sbUJBQW1CSSx3QkFBd0JHLElBQUksQ0FBQyxTQUFDQztRQUMvQyxJQUFNUixtQkFBbUJRLHVCQUF1QlosY0FBY0MsYUFBYUMsU0FBU0M7UUFFcEYsSUFBSUMsa0JBQWtCO1lBQ3BCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlIsZ0JBQWUsZ0JBQWNMO0lBQ3RFO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNLLHNCQUFzQlQsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUM3RSxJQUFJVywwQkFBMEI7SUFFOUIsSUFBSVosU0FBUztRQUNYLElBQU1HLGlCQUFpQkYsYUFBYUcsWUFBWSxDQUFDTjtRQUVqREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLDBCQUF3Qkw7UUFFNUUsSUFBTWUsUUFBUSxFQUFFLEVBQ1ZDLFlBQVlsQixlQUFlRSxlQUMzQmlCLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRixXQUFXRCxPQUFPWixjQUFjO1lBQzFELElBQUlnQixnQkFBZ0I7WUFFcEIsSUFBTUMsV0FBV0MsaUJBQVEsQ0FBQ0Msd0JBQXdCLENBQUNQLE9BQU9mO1lBRTFELElBQUlvQixhQUFhLE1BQU07Z0JBQ3JCLElBQU1HLGdCQUFnQkgsU0FBU0ksT0FBTyxDQUFDckI7Z0JBRXZDLElBQUlvQixlQUFlO29CQUNqQkosZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtRQUVOTCwwQkFBMEJHLGVBQWUsR0FBRztRQUU1QyxJQUFJSCx5QkFBeUI7WUFDM0JYLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmUixnQkFBZSx3QkFBc0JMO1FBQzlFO0lBQ0Y7SUFFQSxPQUFPYztBQUNUO0FBRUEsU0FBU0oscUJBQXFCVixZQUFZLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzVFLElBQUlzQix5QkFBeUI7SUFFN0IsSUFBSSxDQUFDdkIsU0FBUztRQUNaLElBQU1HLGlCQUFpQkYsYUFBYUcsWUFBWSxDQUFDTjtRQUVqREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLHlCQUF1Qkw7UUFFM0UsSUFBTWUsUUFBUSxFQUFFLEVBQ1ZDLFlBQVlsQixlQUFlRSxlQUMzQmlCLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRixXQUFXRCxPQUFPWixjQUFjO1lBQzFELElBQUlnQixnQkFBZ0I7WUFFcEIsSUFBTUMsV0FBV0MsaUJBQVEsQ0FBQ0Msd0JBQXdCLENBQUNQLE9BQU9mO1lBRTFELElBQUlvQixhQUFhLE1BQU07Z0JBQ3JCLElBQU1NLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1IsV0FDckRTLGFBQWFILG9CQUFvQixHQUFHO2dCQUUxQ3pCLFlBQVk2QixJQUFJLENBQUNEO2dCQUVqQlYsZ0JBQWdCO1lBQ2xCO1lBRUEsT0FBT0E7UUFDVDtRQUVOTSx5QkFBeUJSLGVBQWUsR0FBRztRQUUzQyxJQUFJUSx3QkFBd0I7WUFDMUJ0QixhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlIsZ0JBQWUsdUJBQXFCTDtRQUM3RTtJQUNGO0lBRUEsT0FBT3lCO0FBQ1QifQ==