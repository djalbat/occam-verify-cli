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
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement!");
function verifyQualifiedStatement(qualifiedStatementNode) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var qualifiedStatementVerified;
    context.begin(qualifiedStatementNode);
    var statementNode = statementNodeQuery(qualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, context);
    qualifiedStatementVerified = statementVerified; ///
    qualifiedStatementVerified ? context.complete(qualifiedStatementNode) : context.halt(qualifiedStatementNode);
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGNvbnRleHQgPSB0aGlzKSB7XG4gIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb250ZXh0LmJlZ2luKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzhEQU5JO3FCQUVGOzs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLHlCQUF5Qkcsc0JBQXNCLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJO0lBQ3JGLElBQUlDO0lBRUpELFFBQVFFLEtBQUssQ0FBQ0g7SUFFZCxJQUFNSSxnQkFBZ0JOLG1CQUFtQkUseUJBQ25DSyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNGLGVBQWVIO0lBRXpEQyw2QkFBNkJHLG1CQUFtQixHQUFHO0lBRW5ESCw2QkFDRUQsUUFBUU0sUUFBUSxDQUFDUCwwQkFDZkMsUUFBUU8sSUFBSSxDQUFDUix1QkFBdUI7SUFFeEMsT0FBT0U7QUFDVCJ9