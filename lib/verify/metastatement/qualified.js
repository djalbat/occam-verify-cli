"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyQualifiedMetastatement;
    }
});
var _metastatement = /*#__PURE__*/ _interop_require_default(require("../metastatement"));
var _metavariableAgainstMetastatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metavariableAgainstMetastatement"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement/metastatement!"), referenceMetavariableNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement/reference!/metavariable!");
function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, derived, localMetaContext) {
    var qualifiedMetastatementVerified = false;
    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var metastatementString = localMetaContext.nodeAsString(metastatementNode), metastatementLocalMetaContext = localMetaContext; ///
        localMetaContext.trace("Verifying the '".concat(metastatementString, "' qualified metastatement..."), qualifiedMetastatementNode);
        var referenceMetavariableNode = referenceMetavariableNodeQuery(qualifiedMetastatementNode), labelMetavariableNode = referenceMetavariableNode, rule = localMetaContext.findRuleByLabelMetavariableNode(labelMetavariableNode);
        if (rule !== null) {
            var ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metastatementLocalMetaContext);
            qualifiedMetastatementVerified = ruleMatchesMetastatement; ///
        } else {
            if (substitutions !== null) {
                var metavariableNode = referenceMetavariableNode, metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);
                if (metavariablePresent) {
                    var metastatementVerified = (0, _metastatement.default)(metastatementNode, assignments, derived, localMetaContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    if (metastatementVerified) {
                        var metavariableVerifiedAgainstMetastatement = (0, _metavariableAgainstMetastatement.default)(metavariableNode, metastatementNode, substitutions, function() {
                            var verifiedAhead = true;
                            return verifiedAhead;
                        });
                        qualifiedMetastatementVerified = metavariableVerifiedAgainstMetastatement; ///
                    }
                }
            }
        }
        if (qualifiedMetastatementVerified) {
            localMetaContext.debug("...verified the '".concat(metastatementString, "' qualified metastatement."), qualifiedMetastatementNode);
        }
    }
    return qualifiedMetastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlNZXRhc3RhdGVtZW50IGZyb20gXCIuLi9tZXRhc3RhdGVtZW50XCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50L3JlZmVyZW5jZSEvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQ7IC8vL1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuLi5gLCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBsYWJlbE1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZFJ1bGVCeUxhYmVsTWV0YXZhcmlhYmxlTm9kZShsYWJlbE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTWV0YXN0YXRlbWVudCA9IHJ1bGUubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHJ1bGVNYXRjaGVzTWV0YXN0YXRlbWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic3RpdHV0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBsb2NhbE1ldGFDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeU1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdE1ldGFzdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudDsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgbWV0YXN0YXRlbWVudC5gLCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCIsInRyYWNlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsInJ1bGUiLCJmaW5kUnVsZUJ5TGFiZWxNZXRhdmFyaWFibGVOb2RlIiwicnVsZU1hdGNoZXNNZXRhc3RhdGVtZW50IiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50IiwidmVyaWZpZWRBaGVhZCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O29FQVJRO3VGQUNtQjtxQkFFekI7Ozs7OztBQUUxQixJQUFNQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsMkNBQ25DQyxpQ0FBaUNELElBQUFBLGdCQUFTLEVBQUM7QUFFbEMsU0FBU0YsNkJBQTZCSSwwQkFBMEIsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQ3BJLElBQUlDLGlDQUFpQztJQUVyQyxJQUFNQyxvQkFBb0JULHVCQUF1Qkc7SUFFakQsSUFBSU0sc0JBQXNCLE1BQU07UUFDOUIsSUFBTUMsc0JBQXNCSCxpQkFBaUJJLFlBQVksQ0FBQ0Ysb0JBQ3BERyxnQ0FBZ0NMLGtCQUFrQixHQUFHO1FBRTNEQSxpQkFBaUJNLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkgscUJBQW9CLGlDQUErQlA7UUFFNUYsSUFBTVcsNEJBQTRCWiwrQkFBK0JDLDZCQUMzRFksd0JBQXdCRCwyQkFDeEJFLE9BQU9ULGlCQUFpQlUsK0JBQStCLENBQUNGO1FBRTlELElBQUlDLFNBQVMsTUFBTTtZQUNqQixJQUFNRSwyQkFBMkJGLEtBQUtHLGtCQUFrQixDQUFDVixtQkFBbUJHO1lBRTVFSixpQ0FBaUNVLDBCQUEyQixHQUFHO1FBQ2pFLE9BQU87WUFDTCxJQUFJZCxrQkFBa0IsTUFBTTtnQkFDMUIsSUFBTWdCLG1CQUFtQk4sMkJBQ25CTyxzQkFBc0JkLGlCQUFpQmUsdUNBQXVDLENBQUNGLGtCQUFrQmI7Z0JBRXZHLElBQUljLHFCQUFxQjtvQkFDdkIsSUFBTUUsd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ2YsbUJBQW1CSixhQUFhQyxTQUFTQyxrQkFBa0I7d0JBQzNHLElBQU1rQixnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVBLElBQUlGLHVCQUF1Qjt3QkFDekIsSUFBTUcsMkNBQTJDQyxJQUFBQSx5Q0FBc0MsRUFBQ1Asa0JBQWtCWCxtQkFBbUJMLGVBQWU7NEJBQzFJLElBQU1xQixnQkFBZ0I7NEJBRXRCLE9BQU9BO3dCQUNUO3dCQUVBakIsaUNBQWlDa0IsMENBQTBDLEdBQUc7b0JBQ2hGO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBLElBQUlsQixnQ0FBZ0M7WUFDbENELGlCQUFpQnFCLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQmxCLHFCQUFvQiwrQkFBNkJQO1FBQzlGO0lBQ0Y7SUFFQSxPQUFPSztBQUNUIn0=