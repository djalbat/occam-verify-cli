"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyQualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interop_require_default(require("../../verify/statement"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../../unify/statement/qualified"));
var _query = require("../../utilities/query");
var _assignments = require("../../utilities/assignments");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement!");
function verifyQualifiedStatement(qualifiedStatementNode, substitutions, localContext) {
    var qualifiedStatementVerified = false;
    var qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);
    localContext.trace("Verifying the '".concat(qualifiedStatementString, "' qualified statement..."), qualifiedStatementNode);
    if (!qualifiedStatementVerified) {
        var stated = true, assignments = [], statementNode = statementNodeQuery(qualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, stated, localContext);
        if (statementVerified) {
            var qualifiedStatementUnified = (0, _qualified.default)(qualifiedStatementNode, substitutions, localContext);
            if (qualifiedStatementUnified) {
                var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                qualifiedStatementVerified = assignmentsAssigned; ///
            }
        }
    }
    if (qualifiedStatementVerified) {
        localContext.debug("...verified the '".concat(qualifiedStatementString, "' qualified statement."), qualifiedStatementNode);
    }
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHVuaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi8uLi91bmlmeS9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC4uLmAsIHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC5gLCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInF1YWxpZmllZFN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVF1YWxpZmllZFN0YXRlbWVudCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O2dFQVJJO2dFQUNRO3FCQUVWOzJCQUNROzs7Ozs7QUFFbEMsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLHlCQUF5Qkcsc0JBQXNCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNsRyxJQUFJQyw2QkFBNkI7SUFFakMsSUFBTUMsMkJBQTJCRixhQUFhRyxZQUFZLENBQUNMO0lBRTNERSxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJGLDBCQUF5Qiw2QkFBMkJKO0lBRXpGLElBQUksQ0FBQ0csNEJBQTRCO1FBQy9CLElBQU1JLFNBQVMsTUFDVEMsY0FBYyxFQUFFLEVBQ2hCQyxnQkFBZ0JYLG1CQUFtQkUseUJBQ25DVSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNGLGVBQWVELGFBQWFELFFBQVFMO1FBRTlFLElBQUlRLG1CQUFtQjtZQUNyQixJQUFNRSw0QkFBNEJDLElBQUFBLGtCQUF1QixFQUFDYix3QkFBd0JDLGVBQWVDO1lBRWpHLElBQUlVLDJCQUEyQjtnQkFDN0IsSUFBTUUsc0JBQXNCQyxJQUFBQSw4QkFBaUIsRUFBQ1AsYUFBYU47Z0JBRTNEQyw2QkFBNkJXLHFCQUFxQixHQUFHO1lBQ3ZEO1FBQ0Y7SUFDRjtJQUVBLElBQUlYLDRCQUE0QjtRQUM5QkQsYUFBYWMsS0FBSyxDQUFDLEFBQUMsb0JBQTRDLE9BQXpCWiwwQkFBeUIsMkJBQXlCSjtJQUMzRjtJQUVBLE9BQU9HO0FBQ1QifQ==