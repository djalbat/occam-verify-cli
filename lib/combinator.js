"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Combinator;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration/statement");
var Combinator = /*#__PURE__*/ function() {
    function Combinator(statement) {
        _class_call_check(this, Combinator);
        this.statement = statement;
    }
    _create_class(Combinator, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.statement.getString();
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.statement.getNode();
                return statementNode;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var localContext = _local.default.fromFileContext(fileContext), statementVerifiedAsCombinator = this.statement.verifyAsCombinator(localContext), verified = statementVerifiedAsCombinator; ///
                return verified;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var Statement = _shim.default.Statement, statementNode = statementNodeQuery(combinatorDeclarationNode), localContext = _local.default.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext), combinator = new Combinator(statement);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb24vc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLnN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5QXNDb21iaW5hdG9yKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjsgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciIsInZlcmlmeUFzQ29tYmluYXRvciIsInZlcmlmaWVkIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsImZyb21TdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEo7NERBQ1E7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYsMkJBQU47YUFBTUEsV0FDUEcsU0FBUztnQ0FERkg7UUFFakIsSUFBSSxDQUFDRyxTQUFTLEdBQUdBOztrQkFGQUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0UsU0FBUztZQUFJOzs7WUFFakRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDSixTQUFTLENBQUNLLE9BQU87Z0JBRTVDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVztnQkFDaEIsSUFBTUMsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGNBQzVDSSxnQ0FBZ0MsSUFBSSxDQUFDWCxTQUFTLENBQUNZLGtCQUFrQixDQUFDSixlQUNsRUssV0FBV0YsK0JBQStCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRVIsV0FBVztnQkFDekUsSUFBTSxBQUFFUyxZQUFjQyxhQUFJLENBQWxCRCxXQUNGWixnQkFBZ0JOLG1CQUFtQmlCLDRCQUNuQ1AsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGNBQzVDUCxZQUFZZ0IsVUFBVUUsaUJBQWlCLENBQUNkLGVBQWVJLGVBQ3ZEVyxhQUFhLElBOUJGdEIsV0E4QmlCRztnQkFFbEMsT0FBT21CO1lBQ1Q7OztXQWpDbUJ0QiJ9