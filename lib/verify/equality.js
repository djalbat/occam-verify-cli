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
var leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
                    assignments.pop();
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
                assignments.pop();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5RGVyaXZlZEVxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlZEVxdWFsaXR5XG4gIF07XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gZXF1YWxpdHkuaXNFcXVhbChsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVkRXF1YWxpdHlWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRXF1YWxpdHlWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJlcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEVxdWFsaXR5IiwidmVyaWZ5U3RhdGVkRXF1YWxpdHkiLCJzb21lIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJ0ZXJtcyIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtTm9kZXMiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJzZWNvbmRUZXJtIiwic2Vjb25kIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCIsInBvcCIsInN0YXRlZEVxdWFsaXR5VmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7K0RBVkg7NERBQ0c7Z0VBQ087cUJBRUw7cUJBQ0k7Ozs7OztBQUU5QixJQUFN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