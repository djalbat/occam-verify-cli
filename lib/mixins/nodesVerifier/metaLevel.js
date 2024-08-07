"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/metastatementForMetavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    var metavariableNodeVerified;
    var substitution = substitutions.find(function(substitution) {
        var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
        if (substitutionMatchesMetavariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var metastatementNode = metastatementNodeB, metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);
        metavariableNodeVerified = metastatementNodeMatches; ///
    } else {
        var metavariableNode = metavariableNodeA, metastatementNode1 = metastatementNodeB, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode1), substitution1 = metastatementForMetavariableSubstitution; ///
        substitutions.push(substitution1);
        metavariableNodeVerified = true;
    }
    return metavariableNodeVerified;
}
var metaLevelNodesVerifierMixins = {
    verifyMetavariableNode: verifyMetavariableNode
};
var _default = metaLevelNodesVerifierMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvbm9kZXNWZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG59XG5cbmNvbnN0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgPSB7XG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnM7XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0QSIsImxvY2FsTWV0YUNvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsInB1c2giLCJtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7bUZBcENxRDs7Ozs7O0FBRXJELFNBQVNBLHVCQUF1QkMsaUJBQWlCLEVBQUVDLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsaUJBQWlCLEVBQUVDLFdBQVc7SUFDaEksSUFBSUM7SUFFSixJQUFNQyxlQUFlTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0Q7UUFDdkMsSUFBTUUsdUNBQXVDRixhQUFhRyxxQkFBcUIsQ0FBQ1Y7UUFFaEYsSUFBSVMsc0NBQXNDO1lBQ3hDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixJQUFJRixpQkFBaUIsTUFBTTtRQUN6QixJQUFNSSxvQkFBb0JWLG9CQUNwQlcsMkJBQTJCTCxhQUFhTSxzQkFBc0IsQ0FBQ0Y7UUFFckVMLDJCQUEyQk0sMEJBQTJCLEdBQUc7SUFDM0QsT0FBTztRQUNMLElBQU1FLG1CQUFtQmQsbUJBQ25CVyxxQkFBb0JWLG9CQUNwQmMsMkNBQTJDQyxxQ0FBd0MsQ0FBQ0Msd0NBQXdDLENBQUNILGtCQUFrQkgscUJBQy9JSixnQkFBZVEsMENBQTJDLEdBQUc7UUFFbkViLGNBQWNnQixJQUFJLENBQUNYO1FBRW5CRCwyQkFBMkI7SUFDN0I7SUFFQSxPQUFPQTtBQUNUO0FBRUEsSUFBTWEsK0JBQStCO0lBQ25DcEIsd0JBQUFBO0FBQ0Y7SUFFQSxXQUFlb0IifQ==