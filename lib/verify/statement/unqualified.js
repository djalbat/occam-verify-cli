"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _assertion = /*#__PURE__*/ _interopRequireDefault(require("../../assertion"));
var _query = require("../../utilities/query");
var _string = require("../../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
    var unqualifiedStatementVerified = false;
    proofContext.begin(unqualifiedStatementNode);
    var unqualifiedStatementString = (0, _string.nodeAsString)(unqualifiedStatementNode);
    proofContext.debug("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementVerified = (0, _statement.default)(statementNode, proofContext);
        if (statementVerified) {
            var derived = proofContext.isDerived();
            if (derived) {
                var assertion = _assertion.default.fromStatementNode(statementNode), assertionMatches = proofContext.matchAssertion(assertion);
                unqualifiedStatementVerified = assertionMatches; ///
            } else {
                unqualifiedStatementVerified = true;
            }
        }
    }
    if (unqualifiedStatementVerified) {
        proofContext.info("Verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uLy4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4odW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBwcm9vZkNvbnRleHQuaXNEZXJpdmVkKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTWF0Y2hlcyA9IHByb29mQ29udGV4dC5tYXRjaEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NlcnRpb25NYXRjaGVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gIH1cblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImRlcml2ZWQiLCJpc0Rlcml2ZWQiLCJhc3NlcnRpb24iLCJBc3NlcnRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsImFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbiIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7OERBVEk7OERBRU47cUJBRUk7c0JBQ0c7Ozs7OztBQUU3QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsWUFBWSxFQUFFO0lBQ3pGLElBQUlDLCtCQUErQixLQUFLO0lBRXhDRCxhQUFhRSxLQUFLLENBQUNIO0lBRW5CLElBQU1JLDZCQUE2QkMsSUFBQUEsb0JBQVksRUFBQ0w7SUFFaERDLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkYsNEJBQTJCO0lBRWhFLElBQU1HLGdCQUFnQlQsbUJBQW1CRTtJQUV6QyxJQUFJTyxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU1DLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZUFBZU47UUFFekQsSUFBSU8sbUJBQW1CO1lBQ3JCLElBQU1FLFVBQVVULGFBQWFVLFNBQVM7WUFFdEMsSUFBSUQsU0FBUztnQkFDWCxJQUFNRSxZQUFZQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ1AsZ0JBQ3hDUSxtQkFBbUJkLGFBQWFlLGNBQWMsQ0FBQ0o7Z0JBRXJEViwrQkFBK0JhLGtCQUFtQixHQUFHO1lBQ3ZELE9BQU87Z0JBQ0xiLCtCQUErQixJQUFJO1lBQ3JDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLDhCQUE4QjtRQUNoQ0QsYUFBYWdCLElBQUksQ0FBQyxBQUFDLGlCQUEyQyxPQUEzQmIsNEJBQTJCO0lBQ2hFLENBQUM7SUFFREYsK0JBQ0VELGFBQWFpQixRQUFRLENBQUNsQiw0QkFDcEJDLGFBQWFrQixJQUFJLENBQUNuQix5QkFBeUI7SUFFL0MsT0FBT0U7QUFDVCJ9