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
var _metastatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metastatement"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metastatementNodeQuery = (0, _query.nodeQuery)("/unqualifiedMetastatement/metastatement!");
function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext) {
    var unqualifiedMetastatementVerified = false;
    var metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var metastatementString = localMetaContext.nodeAsString(metastatementNode);
        localMetaContext.trace("Verifying the '".concat(metastatementString, "' unqualified metastatement..."), unqualifiedMetastatementNode);
        if (derived) {
            var metastatementMatches = localMetaContext.matchMetastatement(metastatementNode);
            unqualifiedMetastatementVerified = metastatementMatches; ///
        }
        if (!unqualifiedMetastatementVerified) {
            var metastatementVerified = (0, _metastatement.default)(metastatementNode, derived, localMetaContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            unqualifiedMetastatementVerified = metastatementVerified; ///
        }
        if (unqualifiedMetastatementVerified) {
            localMetaContext.debug("...verified the '".concat(metastatementString, "' unqualified metastatement."), unqualifiedMetastatementNode);
        }
    }
    return unqualifiedMetastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGxvY2FsTWV0YUNvbnRleHQubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeU1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBtZXRhc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50IiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O29FQU5RO3FCQUVOOzs7Ozs7QUFFMUIsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLCtCQUErQkcsNEJBQTRCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDekgsSUFBSUMsbUNBQW1DO0lBRXZDLElBQU1DLG9CQUFvQlAsdUJBQXVCRTtJQUVqRCxJQUFJSyxzQkFBc0IsTUFBTTtRQUM5QixJQUFNQyxzQkFBc0JILGlCQUFpQkksWUFBWSxDQUFDRjtRQUUxREYsaUJBQWlCSyxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQixtQ0FBaUNOO1FBRTlGLElBQUlFLFNBQVM7WUFDWCxJQUFNTyx1QkFBdUJOLGlCQUFpQk8sa0JBQWtCLENBQUNMO1lBRWpFRCxtQ0FBbUNLLHNCQUF1QixHQUFHO1FBQy9EO1FBRUEsSUFBSSxDQUFDTCxrQ0FBa0M7WUFDckMsSUFBTU8sd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ1AsbUJBQW1CSCxTQUFTQyxrQkFBa0I7Z0JBQzlGLElBQU1VLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDtZQUVBVCxtQ0FBbUNPLHVCQUF1QixHQUFHO1FBQy9EO1FBRUEsSUFBSVAsa0NBQWtDO1lBQ3BDRCxpQkFBaUJXLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQlIscUJBQW9CLGlDQUErQk47UUFDaEc7SUFDRjtJQUVBLE9BQU9JO0FBQ1QifQ==