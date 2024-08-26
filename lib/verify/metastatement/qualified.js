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
var metavariableNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement/reference!/metavariable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement/metastatement!");
function verifyQualifiedMetastatement(qualifiedMetastatementNode, substitutions, assignments, derived, localMetaContext) {
    var qualifiedMetastatementVerified = false;
    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var metastatementString = localMetaContext.nodeAsString(metastatementNode), metastatementLocalMetaContext = localMetaContext; ///
        localMetaContext.trace("Verifying the '".concat(metastatementString, "' qualified metastatement..."), qualifiedMetastatementNode);
        var metavariableNode = metavariableNodeQuery(qualifiedMetastatementNode);
        if (!qualifiedMetastatementVerified) {
            var rule = localMetaContext.findRuleByMetavariableNode(metavariableNode);
            if (rule !== null) {
                var ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metastatementLocalMetaContext);
                qualifiedMetastatementVerified = ruleMatchesMetastatement; ///
            }
        }
        if (!qualifiedMetastatementVerified) {
            if (substitutions !== null) {
                var metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlNZXRhc3RhdGVtZW50IGZyb20gXCIuLi9tZXRhc3RhdGVtZW50XCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50L3JlZmVyZW5jZSEvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQ7IC8vL1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuLi5gLCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmICghcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBydWxlID0gbG9jYWxNZXRhQ29udGV4dC5maW5kUnVsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNNZXRhc3RhdGVtZW50ID0gcnVsZS5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBydWxlTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgaWYgKHN1YnN0aXR1dGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsTWV0YUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5TWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChtZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50OyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBtZXRhc3RhdGVtZW50LmAsIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxNZXRhQ29udGV4dCIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0IiwidHJhY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwicnVsZSIsImZpbmRSdWxlQnlNZXRhdmFyaWFibGVOb2RlIiwicnVsZU1hdGNoZXNNZXRhc3RhdGVtZW50IiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnQiLCJ2ZXJpZmllZEFoZWFkIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudCIsInZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RNZXRhc3RhdGVtZW50IiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7b0VBUlE7dUZBQ21CO3FCQUV6Qjs7Ozs7O0FBRTFCLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxxREFDbENDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRiw2QkFBNkJJLDBCQUEwQixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDcEksSUFBSUMsaUNBQWlDO0lBRXJDLElBQU1DLG9CQUFvQlAsdUJBQXVCQztJQUVqRCxJQUFJTSxzQkFBc0IsTUFBTTtRQUM5QixJQUFNQyxzQkFBc0JILGlCQUFpQkksWUFBWSxDQUFDRixvQkFDcERHLGdDQUFnQ0wsa0JBQWtCLEdBQUc7UUFFM0RBLGlCQUFpQk0sS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCSCxxQkFBb0IsaUNBQStCUDtRQUU1RixJQUFNVyxtQkFBbUJkLHNCQUFzQkc7UUFFL0MsSUFBSSxDQUFDSyxnQ0FBZ0M7WUFDbkMsSUFBTU8sT0FBT1IsaUJBQWlCUywwQkFBMEIsQ0FBQ0Y7WUFFekQsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQixJQUFNRSwyQkFBMkJGLEtBQUtHLGtCQUFrQixDQUFDVCxtQkFBbUJHO2dCQUU1RUosaUNBQWlDUywwQkFBMkIsR0FBRztZQUNqRTtRQUNGO1FBRUEsSUFBSSxDQUFDVCxnQ0FBZ0M7WUFDbkMsSUFBSUosa0JBQWtCLE1BQU07Z0JBQzFCLElBQU1lLHNCQUFzQlosaUJBQWlCYSx1Q0FBdUMsQ0FBQ04sa0JBQWtCUDtnQkFFdkcsSUFBSVkscUJBQXFCO29CQUN2QixJQUFNRSx3QkFBd0JDLElBQUFBLHNCQUFtQixFQUFDYixtQkFBbUJKLGFBQWFDLFNBQVNDLGtCQUFrQjt3QkFDM0csSUFBTWdCLGdCQUFnQjt3QkFFdEIsT0FBT0E7b0JBQ1Q7b0JBRUEsSUFBSUYsdUJBQXVCO3dCQUN6QixJQUFNRywyQ0FBMkNDLElBQUFBLHlDQUFzQyxFQUFDWCxrQkFBa0JMLG1CQUFtQkwsZUFBZTs0QkFDMUksSUFBTW1CLGdCQUFnQjs0QkFFdEIsT0FBT0E7d0JBQ1Q7d0JBRUFmLGlDQUFpQ2dCLDBDQUEwQyxHQUFHO29CQUNoRjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxJQUFJaEIsZ0NBQWdDO1lBQ2xDRCxpQkFBaUJtQixLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJoQixxQkFBb0IsK0JBQTZCUDtRQUM5RjtJQUNGO0lBRUEsT0FBT0s7QUFDVCJ9