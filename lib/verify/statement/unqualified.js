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
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var unqualifiedStatementVerified = false;
    context.begin(unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementVerified = (0, _statement.default)(statementNode, context);
        if (statementVerified) {
            context.addStatementNode(statementNode);
            unqualifiedStatementVerified = true;
        }
    }
    unqualifiedStatementVerified ? context.complete(unqualifiedStatementNode) : context.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgY29udGV4dCA9IHRoaXMpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb250ZXh0LmJlZ2luKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuYWRkU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgY29udGV4dC5jb21wbGV0ZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsImFkZFN0YXRlbWVudE5vZGUiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7OERBTkk7cUJBRUY7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBa0I7UUFBaEJDLFVBQUFBLGlFQUFVLElBQUk7SUFDekYsSUFBSUMsK0JBQStCLEtBQUs7SUFFeENELFFBQVFFLEtBQUssQ0FBQ0g7SUFFZCxJQUFNSSxnQkFBZ0JOLG1CQUFtQkU7SUFFekMsSUFBSUksa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNGLGVBQWVIO1FBRXpELElBQUlJLG1CQUFtQjtZQUNyQkosUUFBUU0sZ0JBQWdCLENBQUNIO1lBRXpCRiwrQkFBK0IsSUFBSTtRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVEQSwrQkFDRUQsUUFBUU8sUUFBUSxDQUFDUiw0QkFDZkMsUUFBUVEsSUFBSSxDQUFDVCx5QkFBeUI7SUFFMUMsT0FBT0U7QUFDVCJ9