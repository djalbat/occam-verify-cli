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
function verifyStatement(statementNode, assertions, proofContext) {
    var statementVerified = true; ///
    proofContext.begin(statementNode);
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assertions, proofContext);
        statementVerified = typeAssertionVerified; ///
    }
    statementVerified ? proofContext.complete(statementNode) : proofContext.halt(statementNode);
    return statementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShzdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NlcnRpb25zIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozt5REFOUTtxQkFFTjs7Ozs7O0FBRTFCLElBQU1DLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRixnQkFBZ0JHLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUU7SUFDL0UsSUFBSUMsb0JBQW9CLElBQUksRUFBRSxHQUFHO0lBRWpDRCxhQUFhRSxLQUFLLENBQUNKO0lBRW5CLElBQU1LLG9CQUFvQlAsdUJBQXVCRTtJQUVqRCxJQUFJSyxzQkFBc0IsSUFBSSxFQUFFO1FBQzlCLElBQU1DLHdCQUF3QkMsSUFBQUEsYUFBbUIsRUFBQ0YsbUJBQW1CSixZQUFZQztRQUVqRkMsb0JBQW9CRyx1QkFBdUIsR0FBRztJQUNoRCxDQUFDO0lBRURILG9CQUNFRCxhQUFhTSxRQUFRLENBQUNSLGlCQUNwQkUsYUFBYU8sSUFBSSxDQUFDVCxjQUFjO0lBRXBDLE9BQU9HO0FBQ1QifQ==