"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinatorDeclaration;
    }
});
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _query = require("../utilities/query");
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
var CombinatorDeclaration = /*#__PURE__*/ function() {
    function CombinatorDeclaration(statement) {
        _class_call_check(this, CombinatorDeclaration);
        this.statement = statement;
    }
    _create_class(CombinatorDeclaration, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var combinatorDeclarationVerified;
                var statementString = this.statement.getString();
                fileContext.trace("Verifying the '".concat(statementString, "' combinator declaration..."));
                var combinator = _combinator.default.fromStatement(this.statement), combinatorVerified = combinator.verify(fileContext);
                if (combinatorVerified) {
                    fileContext.addCombinator(combinator);
                    combinatorDeclarationVerified = true;
                }
                if (combinatorDeclarationVerified) {
                    fileContext.debug("...verified the '".concat(statementString, "' combinator declaration."));
                }
                return combinatorDeclarationVerified;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var statementNode = statementNodeQuery(combinatorDeclarationNode), statement = _statement.default.fromStatementNode(statementNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(statement);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGxldCBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgY29tYmluYXRvclZlcmlmaWVkID0gY29tYmluYXRvci52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKTtcblxuICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xuICB9XG59Il0sIm5hbWVzIjpbIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwiZnJvbVN0YXRlbWVudCIsImNvbWJpbmF0b3JWZXJpZmllZCIsImFkZENvbWJpbmF0b3IiLCJkZWJ1ZyIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsInN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7Z0VBUEM7aUVBQ0M7cUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYsc0NBQU47YUFBTUEsc0JBQ1BHLFNBQVM7Z0NBREZIO1FBRWpCLElBQUksQ0FBQ0csU0FBUyxHQUFHQTs7a0JBRkFIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQixJQUFJLENBQUNMLFNBQVMsQ0FBQ00sU0FBUztnQkFFaERILFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCO2dCQUVwRCxJQUFNRyxhQUFhQyxtQkFBVSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDVixTQUFTLEdBQ3BEVyxxQkFBcUJILFdBQVdOLE1BQU0sQ0FBQ0M7Z0JBRTdDLElBQUlRLG9CQUFvQjtvQkFDdEJSLFlBQVlTLGFBQWEsQ0FBQ0o7b0JBRTFCSixnQ0FBZ0M7Z0JBQ2xDO2dCQUVBLElBQUlBLCtCQUErQjtvQkFDakNELFlBQVlVLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlIsaUJBQWdCO2dCQUN4RDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVaLFdBQVc7Z0JBQ3pFLElBQU1hLGdCQUFnQmxCLG1CQUFtQmlCLDRCQUNuQ2YsWUFBWWlCLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDRixlQUFlYixjQUN2RGdCLHdCQUF3QixJQW5DYnRCLHNCQW1DdUNHO2dCQUV4RCxPQUFPbUI7WUFDVDs7O1dBdENtQnRCIn0=