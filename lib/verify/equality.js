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
                    if (assignments !== null) {
                        var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                        assignments.push(assignment);
                    }
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
                if (assignments !== null) {
                    var equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                    assignments.push(assignment);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9lcXVhbGl0eS90ZXJtXCIpO1xuXG5jb25zdCB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEVxdWFsaXR5LFxuICB2ZXJpZnlTdGF0ZWRFcXVhbGl0eVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5VmVyaWZpZWQ7XG5cbiAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gIGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24oZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGVzID0gdGVybU5vZGVzUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSh0ZXJtcywgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybU5vZGVzID0gdGVybU5vZGVzUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXModGVybU5vZGVzLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSh0ZXJtcywgZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUVxdWFsaXR5IiwidGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZWRFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZXF1YWxpdHlWZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsInRlcm1Ob2RlcyIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkQWhlYWQiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCIsInN0YXRlZEVxdWFsaXR5VmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBd0JBOzs7K0RBYkg7NERBQ0c7Z0VBQ087cUJBRUo7Ozs7OztBQUUzQixJQUFNQyxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsSUFBTUMsMEJBQTBCO0lBQzlCQztJQUNBQztDQUNEO0FBRWMsU0FBU0wsZUFBZU0sWUFBWSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUNwRixJQUFJQztJQUVKLElBQU1D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