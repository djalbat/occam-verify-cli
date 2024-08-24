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
            var metastatementVerified = (0, _metastatement.default)(metastatementNode, assignments, derived, localMetaContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGxvY2FsTWV0YUNvbnRleHQubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIGlmICghdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeU1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gbWV0YXN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgbWV0YXN0YXRlbWVudC5gLCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbE1ldGFDb250ZXh0IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudCIsInZlcmlmaWVkQWhlYWQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztvRUFOUTtxQkFFTjs7Ozs7O0FBRTFCLElBQU1DLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRiwrQkFBK0JHLDRCQUE0QixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQ3pILElBQUlDLG1DQUFtQztJQUV2QyxJQUFNQyxvQkFBb0JQLHVCQUF1QkU7SUFFakQsSUFBSUssc0JBQXNCLE1BQU07UUFDOUIsSUFBTUMsc0JBQXNCSCxpQkFBaUJJLFlBQVksQ0FBQ0Y7UUFFMURGLGlCQUFpQkssS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0IsbUNBQWlDTjtRQUU5RixJQUFJRSxTQUFTO1lBQ1gsSUFBTU8sdUJBQXVCTixpQkFBaUJPLGtCQUFrQixDQUFDTDtZQUVqRUQsbUNBQW1DSyxzQkFBdUIsR0FBRztRQUMvRDtRQUVBLElBQUksQ0FBQ0wsa0NBQWtDO1lBQ3JDLElBQU1PLHdCQUF3QkMsSUFBQUEsc0JBQW1CLEVBQUNQLG1CQUFtQkosYUFBYUMsU0FBU0Msa0JBQWtCO2dCQUNyRyxJQUFNVSxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFTlQsbUNBQW1DTyx1QkFBdUIsR0FBRztRQUMvRDtRQUVBLElBQUlQLGtDQUFrQztZQUNwQ0QsaUJBQWlCVyxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJSLHFCQUFvQixpQ0FBK0JOO1FBQ2hHO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUIn0=