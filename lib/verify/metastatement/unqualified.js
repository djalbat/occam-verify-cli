"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedMetastatement;
    }
});
var _metaAssertion = /*#__PURE__*/ _interopRequireDefault(require("../../metaAssertion"));
var _query = require("../../utilities/query");
var _string = require("../../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metastatementNodeQuery = (0, _query.nodeQuery)("/unqualifiedMetastatement/metastatement!");
function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
    var unqualifiedMetastatementVerified = false;
    var metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var derived = context.isDerived();
        if (derived) {
            var metaAssertion = _metaAssertion.default.fromMetastatementNode(metastatementNode), metaAssertionMatches = context.matchMetaAssertion(metaAssertion);
            unqualifiedMetastatementVerified = metaAssertionMatches; ///
        } else {
            unqualifiedMetastatementVerified = true;
        }
    }
    if (unqualifiedMetastatementVerified) {
        var metastatementString = (0, _string.nodeAsString)(metastatementNode);
        context.debug("Verified the '".concat(metastatementString, "' unqualified metastatement."));
    }
    return unqualifiedMetastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFBc3NlcnRpb24gZnJvbSBcIi4uLy4uL21ldGFBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gY29udGV4dC5pc0Rlcml2ZWQoKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBtZXRhQXNzZXJ0aW9uID0gTWV0YUFzc2VydGlvbi5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKTtcblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBtZXRhQXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuYCk7XG4gIH1cblxuICByZXR1cm4gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImRlcml2ZWQiLCJpc0Rlcml2ZWQiLCJtZXRhQXNzZXJ0aW9uIiwiTWV0YUFzc2VydGlvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hNZXRhQXNzZXJ0aW9uIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7O2tFQVBFO3FCQUVBO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLCtCQUErQkcsNEJBQTRCLEVBQUVDLE9BQU8sRUFBRTtJQUM1RixJQUFJQyxtQ0FBbUMsS0FBSztJQUU1QyxJQUFNQyxvQkFBb0JMLHVCQUF1QkU7SUFFakQsSUFBSUcsc0JBQXNCLElBQUksRUFBRTtRQUM5QixJQUFNQyxVQUFVSCxRQUFRSSxTQUFTO1FBRWpDLElBQUlELFNBQVM7WUFDWCxJQUFNRSxnQkFBZ0JDLHNCQUFhLENBQUNDLHFCQUFxQixDQUFDTCxvQkFDcERNLHVCQUF1QlIsUUFBUVMsa0JBQWtCLENBQUNKO1lBRXhESixtQ0FBbUNPLHNCQUF1QixHQUFHO1FBQy9ELE9BQU87WUFDTFAsbUNBQW1DLElBQUk7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxrQ0FBa0M7UUFDcEMsSUFBTVMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDVDtRQUV6Q0YsUUFBUVksS0FBSyxDQUFDLEFBQUMsaUJBQW9DLE9BQXBCRixxQkFBb0I7SUFDckQsQ0FBQztJQUVELE9BQU9UO0FBQ1QifQ==