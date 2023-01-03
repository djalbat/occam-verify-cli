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
var _metastatement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/metastatement"));
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metastatementNodeQuery = (0, _query.nodeQuery)("/unqualifiedMetastatement/metastatement!");
function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext) {
    var unqualifiedMetastatementVerified = false;
    metaproofContext.begin(unqualifiedMetastatementNode);
    var metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);
    if (metastatementNode !== null) {
        var metastatementVerified = (0, _metastatement.default)(metastatementNode, metaproofContext);
        if (metastatementVerified) {
            var derived = metaproofContext.isDerived();
            if (derived) {
                var metaAssertionMatches = metaproofContext.matchMetastatement(metastatementNode);
                unqualifiedMetastatementVerified = metaAssertionMatches; ///
            } else {
                unqualifiedMetastatementVerified = true;
            }
        }
    }
    unqualifiedMetastatementVerified ? metaproofContext.complete(unqualifiedMetastatementNode) : metaproofContext.halt(unqualifiedMetastatementNode);
    return unqualifiedMetastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeU1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIG1ldGFwcm9vZkNvbnRleHQuYmVnaW4odW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeU1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IG1ldGFwcm9vZkNvbnRleHQuaXNEZXJpdmVkKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25NYXRjaGVzID0gbWV0YXByb29mQ29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gbWV0YUFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgbWV0YXByb29mQ29udGV4dC5jb21wbGV0ZSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBtZXRhcHJvb2ZDb250ZXh0LmhhbHQodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mQ29udGV4dCIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnQiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwibWV0YUFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7a0VBTlE7cUJBRU47Ozs7OztBQUUxQixJQUFNQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsU0FBU0YsK0JBQStCRyw0QkFBNEIsRUFBRUMsZ0JBQWdCLEVBQUU7SUFDckcsSUFBSUMsbUNBQW1DLEtBQUs7SUFFNUNELGlCQUFpQkUsS0FBSyxDQUFDSDtJQUV2QixJQUFNSSxvQkFBb0JOLHVCQUF1QkU7SUFFakQsSUFBSUksc0JBQXNCLElBQUksRUFBRTtRQUM5QixJQUFNQyx3QkFBd0JDLElBQUFBLHNCQUFtQixFQUFDRixtQkFBbUJIO1FBRXJFLElBQUlJLHVCQUF1QjtZQUN6QixJQUFNRSxVQUFVTixpQkFBaUJPLFNBQVM7WUFFMUMsSUFBSUQsU0FBUztnQkFDWCxJQUFNRSx1QkFBdUJSLGlCQUFpQlMsa0JBQWtCLENBQUNOO2dCQUVqRUYsbUNBQW1DTyxzQkFBdUIsR0FBRztZQUMvRCxPQUFPO2dCQUNMUCxtQ0FBbUMsSUFBSTtZQUN6QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFREEsbUNBQ0VELGlCQUFpQlUsUUFBUSxDQUFDWCxnQ0FDeEJDLGlCQUFpQlcsSUFBSSxDQUFDWiw2QkFBNkI7SUFFdkQsT0FBT0U7QUFDVCJ9