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
function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, metaproofContext) {
    var unqualifiedMetastatementVerified = false;
    var metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var metastatementString = metaproofContext.nodeAsString(metastatementNode);
        metaproofContext.trace("Verifying the '".concat(metastatementString, "' unqualified metastatement..."), unqualifiedMetastatementNode);
        if (derived) {
            var metastatementMatches = metaproofContext.matchMetastatement(metastatementNode);
            unqualifiedMetastatementVerified = metastatementMatches; ///
        }
        if (!unqualifiedMetastatementVerified) {
            var metastatementVerified = (0, _metastatement.default)(metastatementNode, derived, metaproofContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            unqualifiedMetastatementVerified = metastatementVerified; ///
        }
        if (unqualifiedMetastatementVerified) {
            metaproofContext.debug("...verified the '".concat(metastatementString, "' unqualified metastatement."), unqualifiedMetastatementNode);
        }
    }
    return unqualifiedMetastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YXByb29mQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgbWV0YXN0YXRlbWVudC4uLmAsIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YXByb29mQ29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5TWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgbWV0YXByb29mQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBtZXRhcHJvb2ZDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIG1ldGFzdGF0ZW1lbnQuYCwgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwiZGVyaXZlZCIsIm1ldGFwcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50IiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O29FQU5RO3FCQUVOOzs7Ozs7QUFFMUIsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLCtCQUErQkcsNEJBQTRCLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQzVHLElBQUlDLG1DQUFtQztJQUV2QyxJQUFNQyxvQkFBb0JOLHVCQUF1QkU7SUFFakQsSUFBSUksc0JBQXNCLE1BQU07UUFDOUIsSUFBTUMsc0JBQXNCSCxpQkFBaUJJLFlBQVksQ0FBQ0Y7UUFFMURGLGlCQUFpQkssS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0IsbUNBQWlDTDtRQUU5RixJQUFJQyxTQUFTO1lBQ1gsSUFBTU8sdUJBQXVCTixpQkFBaUJPLGtCQUFrQixDQUFDTDtZQUVqRUQsbUNBQW1DSyxzQkFBdUIsR0FBRztRQUMvRDtRQUVBLElBQUksQ0FBQ0wsa0NBQWtDO1lBQ3JDLElBQU1PLHdCQUF3QkMsSUFBQUEsc0JBQW1CLEVBQUNQLG1CQUFtQkgsU0FBU0Msa0JBQWtCO2dCQUM5RixJQUFNVSxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFQVQsbUNBQW1DTyx1QkFBdUIsR0FBRztRQUMvRDtRQUVBLElBQUlQLGtDQUFrQztZQUNwQ0QsaUJBQWlCVyxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJSLHFCQUFvQixpQ0FBK0JMO1FBQ2hHO0lBQ0Y7SUFFQSxPQUFPRztBQUNUIn0=