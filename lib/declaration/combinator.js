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
                var statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext);
                combinatorDeclarationVerified = statementVerifiedAsCombinator; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvckRlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeUFzQ29tYmluYXRvcihmaWxlQ29udGV4dCk7XG5cbiAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yOyAvLy9cblxuICAgIGlmIChjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xuICB9XG59Il0sIm5hbWVzIjpbIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwiZGVidWciLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O2dFQU5DO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHNDQUFOO2FBQU1BLHNCQUNQRyxTQUFTO2dDQURGSDtRQUVqQixJQUFJLENBQUNHLFNBQVMsR0FBR0E7O2tCQUZBSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDTCxTQUFTLENBQUNNLFNBQVM7Z0JBRWhESCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQjtnQkFFcEQsSUFBTUcsZ0NBQWdDLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxrQkFBa0IsQ0FBQ047Z0JBRXhFQyxnQ0FBZ0NJLCtCQUErQixHQUFHO2dCQUVsRSxJQUFJSiwrQkFBK0I7b0JBQ2pDRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJMLGlCQUFnQjtnQkFDeEQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFVCxXQUFXO2dCQUN6RSxJQUFNVSxnQkFBZ0JmLG1CQUFtQmMsNEJBQ25DWixZQUFZYyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0YsZUFBZVYsY0FDdkRhLHdCQUF3QixJQTlCYm5CLHNCQThCdUNHO2dCQUV4RCxPQUFPZ0I7WUFDVDs7O1dBakNtQm5CIn0=