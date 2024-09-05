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
                    if (!verifiedAhead) {
                        assignments.pop();
                    }
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
                if (!verifiedAhead) {
                    assignments.pop();
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZXF1YWxpdHlWZXJpZmllZDtcblxuICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5RGVyaXZlZEVxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlZEVxdWFsaXR5XG4gIF07XG5cbiAgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUVxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gZXF1YWxpdHkuaXNFcXVhbChsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVkRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhlcXVhbGl0eU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKHRlcm1Ob2RlcywgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVGVybSA9IHNlY29uZCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YXRlZEVxdWFsaXR5VmVyaWZpZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRFcXVhbGl0eVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJlcXVhbGl0eU5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImVxdWFsaXR5VmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZWRFcXVhbGl0eSIsInNvbWUiLCJ2ZXJpZnlFcXVhbGl0eUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRXF1YWxpdHlWZXJpZmllZCIsInRlcm1zIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1Ob2RlcyIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInNlY29uZFRlcm0iLCJzZWNvbmQiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJwdXNo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