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
function verifyEquality(equalityNode, assignments, stated, localContext) {
    var equalityVerified;
    var equalityString = localContext.nodeAsString(equalityNode);
    localContext.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    equalityVerified = verifyEqualityFunctions.some(function(verifyEqualityFunction) {
        var equalityVerified = verifyEqualityFunction(equalityNode, assignments, stated, localContext);
        if (equalityVerified) {
            return true;
        }
    });
    if (equalityVerified) {
        localContext.debug("...verified the '".concat(equalityString, "' equality."), equalityNode);
    }
    return equalityVerified;
}
function verifyDerivedEquality(equalityNode, assignments, stated, localContext) {
    var derivedEqualityVerified = false;
    if (!stated) {
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
function verifyStatedEquality(equalityNode, assignments, stated, localContext) {
    var statedEqualityVerified = false;
    if (stated) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9lcXVhbGl0eS90ZXJtXCIpO1xuXG5jb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEVxdWFsaXR5LFxuICB2ZXJpZnlTdGF0ZWRFcXVhbGl0eVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5VmVyaWZpZWQ7XG5cbiAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGVzID0gdGVybU5vZGVzUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSh0ZXJtcywgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtTm9kZXNRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHRlcm1zVmVyaWZpZWQgPSB2ZXJpZnlUZXJtcyh0ZXJtTm9kZXMsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlKHRlcm1zLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJ0ZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRFcXVhbGl0eSIsInZlcmlmeVN0YXRlZEVxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJlcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCIsInRlcm1zIiwidGVybU5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRBaGVhZCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tVGVybXNBbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJwdXNoIiwic3RhdGVkRXF1YWxpdHlWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7OzsrREFiSDs0REFDRztnRUFDTztxQkFFSjs7Ozs7O0FBRTNCLElBQU1DLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxJQUFNQywwQkFBMEI7SUFDOUJDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTTCxlQUFlTSxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ3BGLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCRixhQUFhRyxZQUFZLENBQUNOO0lBRWpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCTDtJQUVwRUksbUJBQW1CUCx3QkFBd0JXLElBQUksQ0FBQyxTQUFDQztRQUMvQyxJQUFNTCxtQkFBbUJLLHVCQUF1QlQsY0FBY0MsYUFBYUMsUUFBUUM7UUFFbkYsSUFBSUMsa0JBQWtCO1lBQ3BCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsZ0JBQWNMO0lBQ3RFO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNOLHNCQUFzQkUsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUM1RSxJQUFJUSwwQkFBMEI7SUFFOUIsSUFBSSxDQUFDVCxRQUFRO1FBQ1gsSUFBTUcsaUJBQWlCRixhQUFhRyxZQUFZLENBQUNOO1FBRWpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsMEJBQXdCTDtRQUU1RSxJQUFNWSxRQUFRLEVBQUUsRUFDVkMsWUFBWWxCLGVBQWVLLGVBQzNCYyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0QsT0FBT1QsY0FBYztZQUMxRCxJQUFJYSxnQkFBZ0I7WUFFcEIsSUFBTUMsV0FBV0MsaUJBQVEsQ0FBQ0Msd0JBQXdCLENBQUNQLE9BQU9aO1lBRTFELElBQUlpQixhQUFhLE1BQU07Z0JBQ3JCLElBQU1HLGdCQUFnQkgsU0FBU0ksT0FBTyxDQUFDbEI7Z0JBRXZDLElBQUlpQixlQUFlO29CQUNqQixJQUFNRSxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNQLFdBQ3JEUSxhQUFhSCxvQkFBb0IsR0FBRztvQkFFMUNyQixZQUFZeUIsSUFBSSxDQUFDRDtvQkFFakJULGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7UUFFTkwsMEJBQTBCRyxlQUFlLEdBQUc7UUFFNUMsSUFBSUgseUJBQXlCO1lBQzNCUixhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsd0JBQXNCTDtRQUM5RTtJQUNGO0lBRUEsT0FBT1c7QUFDVDtBQUVBLFNBQVNaLHFCQUFxQkMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUMzRSxJQUFJd0IseUJBQXlCO0lBRTdCLElBQUl6QixRQUFRO1FBQ1YsSUFBTUcsaUJBQWlCRixhQUFhRyxZQUFZLENBQUNOO1FBRWpERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUseUJBQXVCTDtRQUUzRSxJQUFNWSxRQUFRLEVBQUUsRUFDVkMsWUFBWWxCLGVBQWVLLGVBQzNCYyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0YsV0FBV0QsT0FBT1QsY0FBYztZQUMxRCxJQUFJYSxnQkFBZ0I7WUFFcEIsSUFBTUMsV0FBV0MsaUJBQVEsQ0FBQ0Msd0JBQXdCLENBQUNQLE9BQU9aO1lBRTFELElBQUlpQixhQUFhLE1BQU07Z0JBQ3JCLElBQU1LLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1AsV0FDckRRLGFBQWFILG9CQUFvQixHQUFHO2dCQUUxQ3JCLFlBQVl5QixJQUFJLENBQUNEO2dCQUVqQlQsZ0JBQWdCO1lBQ2xCO1lBRUEsT0FBT0E7UUFDVDtRQUVOVyx5QkFBeUJiLGVBQWUsR0FBRztRQUUzQyxJQUFJYSx3QkFBd0I7WUFDMUJ4QixhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsdUJBQXFCTDtRQUM3RTtJQUNGO0lBRUEsT0FBTzJCO0FBQ1QifQ==