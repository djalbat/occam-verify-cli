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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcXVhbGlmaWVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIHF1YWxpZmllZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoc3RhdGVtZW50Tm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozt5REFKUTs7Ozs7O0FBRWhDLElBQU1DLHlCQUF5QkMsVUFBVTtBQUUxQixTQUFTRixnQkFBZ0JHLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUU7SUFDOUUsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0JELGFBQWFFLEtBQUssQ0FBQ0o7SUFFbkIsSUFBSSxDQUFDRyxtQkFBbUI7UUFDdEIsSUFBTUUsb0JBQW9CUCx1QkFBdUJFO1FBRWpELElBQUlLLHNCQUFzQixJQUFJLEVBQUU7WUFDOUIsSUFBTUMsd0JBQXdCQyxJQUFBQSxhQUFtQixFQUFDRixtQkFBbUJKLFdBQVdDO1lBRWhGQyxvQkFBb0JHLHVCQUF1QixHQUFHO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBRURILG9CQUNFRCxhQUFhTSxRQUFRLENBQUNSLGlCQUNwQkUsYUFBYU8sSUFBSSxDQUFDVCxjQUFjO0lBRXBDLE9BQU9HO0FBQ1QifQ==