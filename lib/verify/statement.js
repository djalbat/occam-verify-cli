"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatement;
    }
});
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, qualified, proofContext) {
    var statementVerified = false;
    proofContext.begin(statementNode);
    if (!statementVerified) {
        var typeAssertionNode = typeAssertionNodeQuery(statementNode);
        if (typeAssertionNode !== null) {
            var typeAssertionVerified = (0, _type.default)(typeAssertionNode, qualified, proofContext);
            statementVerified = typeAssertionVerified; ///
        }
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBxdWFsaWZpZWQsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4oc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgcXVhbGlmaWVkLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWQiLCJwcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O3lEQU5RO3FCQUVOOzs7Ozs7QUFFMUIsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLGdCQUFnQkcsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRTtJQUM5RSxJQUFJQyxvQkFBb0IsS0FBSztJQUU3QkQsYUFBYUUsS0FBSyxDQUFDSjtJQUVuQixJQUFJLENBQUNHLG1CQUFtQjtRQUN0QixJQUFNRSxvQkFBb0JQLHVCQUF1QkU7UUFFakQsSUFBSUssc0JBQXNCLElBQUksRUFBRTtZQUM5QixJQUFNQyx3QkFBd0JDLElBQUFBLGFBQW1CLEVBQUNGLG1CQUFtQkosV0FBV0M7WUFFaEZDLG9CQUFvQkcsdUJBQXVCLEdBQUc7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFREgsb0JBQ0VELGFBQWFNLFFBQVEsQ0FBQ1IsaUJBQ3BCRSxhQUFhTyxJQUFJLENBQUNULGNBQWM7SUFFcEMsT0FBT0c7QUFDVCJ9