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
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyEquality(equalityNode, assignments, derived, context, verifyAhead) {
    var equalityVerified;
    var equalityString = context.nodeAsString(equalityNode);
    context.trace("Verifying the '".concat(equalityString, "' equality..."), equalityNode);
    var verifyEqualityFunctions = [
        verifyDerivedEquality,
        verifyStandaloneEquality
    ];
    equalityVerified = verifyEqualityFunctions.some(function(verifyEqualityFunction) {
        var statementVerified = verifyEqualityFunction(equalityNode, derived, context, verifyAhead);
        if (statementVerified) {
            return true;
        }
    });
    if (equalityVerified) {
        context.debug("...verified the '".concat(equalityString, "' equality."), equalityNode);
    }
    return equalityVerified;
}
function verifyDerivedEquality(equalityNode, derived, context, verifyAhead) {
    var derivedEqualityVerified = false;
    if (derived) {
        var equalityString = context.nodeAsString(equalityNode);
        context.trace("Verifying the '".concat(equalityString, "' derived equality..."), equalityNode);
        debugger;
        // const equality = Equality.fromEqualityNode(equalityNode),
        //       equalities = context.getEqualities(),
        //       equalityVerified = equality.verify(equalities, context, verifyAhead);
        //
        // derivedEqualityVerified = equalityVerified;  ///
        if (derivedEqualityVerified) {
            context.debug("...verified the '".concat(equalityString, "' derived equality."), equalityNode);
        }
    }
    return derivedEqualityVerified;
}
function verifyStandaloneEquality(equalityNode, derived, context, verifyAhead) {
    var standaloneEqualityVerified = false;
    if (!derived) {
        var equalityString = context.nodeAsString(equalityNode);
        context.trace("Verifying the '".concat(equalityString, "' standalone equality..."), equalityNode);
        var types = [], equality = _equality.default.fromEqualityNode(equalityNode), leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode(), termsVerified = (0, _terms.default)(leftTermNode, rightTermNode, types, context, function() {
            var verifiedAhead;
            var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftType = firstType, rightType = secondType, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
            if (leftTermNodeMatchesRightTermNode) {
                var termNode = leftTermNode, type = leftType;
                debugger;
            } else {}
            verifiedAhead = verifiedAhead();
            return verifiedAhead;
        });
        standaloneEqualityVerified = termsVerified; ///
        if (standaloneEqualityVerified) {
            context.trace("...verified the '".concat(equalityString, "' standalone equality."), equalityNode);
        }
    }
    return standaloneEqualityVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXF1YWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFcXVhbGl0eSBmcm9tIFwiLi4vZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlUZXJtcyBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1zXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBlcXVhbGl0eVZlcmlmaWVkO1xuXG4gIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGFuZGFsb25lRXF1YWxpdHlcbiAgXTtcblxuICBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RXF1YWxpdHlGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHlGdW5jdGlvbihlcXVhbGl0eU5vZGUsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZXF1YWxpdHlWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHlWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGRlcml2ZWRFcXVhbGl0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmAsIGVxdWFsaXR5Tm9kZSk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgLy8gY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgLy8gICAgICAgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgIC8vICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSBlcXVhbGl0eS52ZXJpZnkoZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuICAgIC8vXG4gICAgLy8gZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQgPSBlcXVhbGl0eVZlcmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGFuZGFsb25lIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtc1ZlcmlmaWVkID0gdmVyaWZ5VGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgICAgICAgbGVmdFR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRUeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VHlwZTtcblxuICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZpZWRBaGVhZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YW5kYWxvbmVFcXVhbGl0eVZlcmlmaWVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YW5kYWxvbmUgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZUVxdWFsaXR5VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJlcXVhbGl0eVZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEVxdWFsaXR5IiwidmVyaWZ5U3RhbmRhbG9uZUVxdWFsaXR5Iiwic29tZSIsInZlcmlmeUVxdWFsaXR5RnVuY3Rpb24iLCJzdGF0ZW1lbnRWZXJpZmllZCIsImRlYnVnIiwiZGVyaXZlZEVxdWFsaXR5VmVyaWZpZWQiLCJzdGFuZGFsb25lRXF1YWxpdHlWZXJpZmllZCIsInR5cGVzIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21FcXVhbGl0eU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInNlY29uZFR5cGUiLCJzZWNvbmQiLCJsZWZ0VHlwZSIsInJpZ2h0VHlwZSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJ0ZXJtTm9kZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7K0RBTEg7NERBQ0c7cUJBRU07Ozs7OztBQUVmLFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUM3RixJQUFJQztJQUVKLElBQU1DLGlCQUFpQkgsUUFBUUksWUFBWSxDQUFDUDtJQUU1Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQk47SUFFL0QsSUFBTVMsMEJBQTBCO1FBQzlCQztRQUNBQztLQUNEO0lBRUROLG1CQUFtQkksd0JBQXdCRyxJQUFJLENBQUMsU0FBQ0M7UUFDL0MsSUFBTUMsb0JBQW9CRCx1QkFBdUJiLGNBQWNFLFNBQVNDLFNBQVNDO1FBRWpGLElBQUlVLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlULGtCQUFrQjtRQUNwQkYsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZULGdCQUFlLGdCQUFjTjtJQUNqRTtJQUVBLE9BQU9LO0FBQ1Q7QUFFQSxTQUFTSyxzQkFBc0JWLFlBQVksRUFBRUUsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDeEUsSUFBSVksMEJBQTBCO0lBRTlCLElBQUlkLFNBQVM7UUFDWCxJQUFNSSxpQkFBaUJILFFBQVFJLFlBQVksQ0FBQ1A7UUFFNUNHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSwwQkFBd0JOO1FBRXZFLFFBQVE7UUFFUiw0REFBNEQ7UUFDNUQsOENBQThDO1FBQzlDLDhFQUE4RTtRQUM5RSxFQUFFO1FBQ0YsbURBQW1EO1FBRW5ELElBQUlnQix5QkFBeUI7WUFDM0JiLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmVCxnQkFBZSx3QkFBc0JOO1FBQ3pFO0lBQ0Y7SUFFQSxPQUFPZ0I7QUFDVDtBQUVBLFNBQVNMLHlCQUF5QlgsWUFBWSxFQUFFRSxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUMzRSxJQUFJYSw2QkFBNkI7SUFFakMsSUFBSSxDQUFDZixTQUFTO1FBQ1osSUFBTUksaUJBQWlCSCxRQUFRSSxZQUFZLENBQUNQO1FBRTVDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsNkJBQTJCTjtRQUUxRSxJQUFNa0IsUUFBUSxFQUFFLEVBQ1ZDLFdBQVdDLGlCQUFRLENBQUNDLGdCQUFnQixDQUFDckIsZUFDckNzQixlQUFlSCxTQUFTSSxlQUFlLElBQ3ZDQyxnQkFBZ0JMLFNBQVNNLGdCQUFnQixJQUN6Q0MsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLGNBQWNFLGVBQWVOLE9BQU9mLFNBQVM7WUFDdkUsSUFBSXlCO1lBRUosSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDWixRQUNsQmEsYUFBYUMsSUFBQUEsYUFBTSxFQUFDZCxRQUNwQmUsV0FBV0osV0FDWEssWUFBWUgsWUFDWkksbUNBQW1DYixhQUFhYyxLQUFLLENBQUNaO1lBRTVELElBQUlXLGtDQUFrQztnQkFDcEMsSUFBTUUsV0FBV2YsY0FDWGdCLE9BQU9MO2dCQUViLFFBQVE7WUFDVixPQUFPLENBRVA7WUFFQUwsZ0JBQWdCQTtZQUVoQixPQUFPQTtRQUNUO1FBRU5YLDZCQUE2QlMsZUFBZSxHQUFHO1FBRS9DLElBQUlULDRCQUE0QjtZQUM5QmQsUUFBUUssS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZGLGdCQUFlLDJCQUF5Qk47UUFDNUU7SUFDRjtJQUVBLE9BQU9pQjtBQUNUIn0=