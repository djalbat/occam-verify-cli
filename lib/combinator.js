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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementString = this.statement.getString(), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var combinator = null;
                debugger;
                return combinator;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb24vc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLnN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5QXNDb21iaW5hdG9yKGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjsgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBjb21iaW5hdG9yID0gbnVsbDtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwidmVyaWZpZWQiLCJ0b0pTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJjb21iaW5hdG9yIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjs0REFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiwyQkFBTjthQUFNQSxXQUNQRyxTQUFTO2dDQURGSDtRQUVqQixJQUFJLENBQUNHLFNBQVMsR0FBR0E7O2tCQUZBSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDRSxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssT0FBTztnQkFFNUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFNQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ0gsY0FDNUNJLGdDQUFnQyxJQUFJLENBQUNYLFNBQVMsQ0FBQ1ksa0JBQWtCLENBQUNKLGVBQ2xFSyxXQUFXRiwrQkFBK0IsR0FBRztnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0IsSUFBSSxDQUFDZixTQUFTLENBQUNFLFNBQVMsSUFDMUNGLFlBQVllLGlCQUNaQyxPQUFPO29CQUNMaEIsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2dCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFVCxXQUFXO2dCQUMvQixJQUFJVyxhQUFhO2dCQUVqQixRQUFRO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFYixXQUFXO2dCQUN6RSxJQUFNLEFBQUVjLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZqQixnQkFBZ0JOLG1CQUFtQnNCLDRCQUNuQ1osZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGNBQzVDUCxZQUFZcUIsVUFBVUUsaUJBQWlCLENBQUNuQixlQUFlSSxlQUN2RFUsYUFBYSxJQWhERnJCLFdBZ0RpQkc7Z0JBRWxDLE9BQU9rQjtZQUNUOzs7V0FuRG1CckIifQ==