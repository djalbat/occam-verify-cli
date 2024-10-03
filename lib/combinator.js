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
var _statement = /*#__PURE__*/ _interop_require_default(require("./statement"));
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
                var verified;
                var combinatorString = this.string; ///
                fileContext.trace("Verifying the '".concat(combinatorString, "' combinator..."));
                var statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext);
                verified = statementVerifiedAsCombinator; ///
                if (verified) {
                    fileContext.debug("...verified the '".concat(combinatorString, "' combinator."));
                }
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
                var statement = json.statement;
                var string = statement; ///
                json = {
                    string: string
                };
                statement = _statement.default.fromJSON(json, fileContext);
                var combinator = new Combinator(statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5QXNDb21iaW5hdG9yKGZpbGVDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgc3RhdGVtZW50IH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICBqc29uID0geyAgLy8vXG4gICAgICBzdHJpbmdcbiAgICB9O1xuXG4gICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsImNvbWJpbmF0b3JTdHJpbmciLCJzdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwiZGVidWciLCJ0b0pTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJTdGF0ZW1lbnQiLCJjb21iaW5hdG9yIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwic2hpbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjtnRUFDSzs0REFDRztxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiwyQkFBTjthQUFNQSxXQUNQRyxTQUFTO2dDQURGSDtRQUVqQixJQUFJLENBQUNHLFNBQVMsR0FBR0E7O2tCQUZBSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDRSxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssT0FBTztnQkFFNUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFJQztnQkFFSixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRztnQkFFekNILFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQkYsa0JBQWlCO2dCQUVyRCxJQUFNRyxnQ0FBZ0MsSUFBSSxDQUFDWixTQUFTLENBQUNhLGtCQUFrQixDQUFDTjtnQkFFeEVDLFdBQVdJLCtCQUErQixHQUFHO2dCQUU3QyxJQUFJSixVQUFVO29CQUNaRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJMLGtCQUFpQjtnQkFDekQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0IsSUFBSSxDQUFDaEIsU0FBUyxDQUFDRSxTQUFTLElBQzFDRixZQUFZZ0IsaUJBQ1pDLE9BQU87b0JBQ0xqQixXQUFBQTtnQkFDRjtnQkFFTixPQUFPaUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVWLFdBQVc7Z0JBQy9CLElBQUksQUFBRVAsWUFBY2lCLEtBQWRqQjtnQkFFTixJQUFNVSxTQUFTVixXQUFZLEdBQUc7Z0JBRTlCaUIsT0FBTztvQkFDTFAsUUFBQUE7Z0JBQ0Y7Z0JBRUFWLFlBQVltQixrQkFBUyxDQUFDRCxRQUFRLENBQUNELE1BQU1WO2dCQUVyQyxJQUFNYSxhQUFhLElBeERGdkIsV0F3RGlCRztnQkFFbEMsT0FBT29CO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFZixXQUFXO2dCQUN6RSxJQUFNLEFBQUVZLFlBQWNJLGFBQUksQ0FBbEJKLFdBQ0ZmLGdCQUFnQk4sbUJBQW1Cd0IsNEJBQ25DRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ25CLGNBQzVDUCxZQUFZbUIsVUFBVVEsaUJBQWlCLENBQUN2QixlQUFlb0IsZUFDdkRKLGFBQWEsSUFsRUZ2QixXQWtFaUJHO2dCQUVsQyxPQUFPb0I7WUFDVDs7O1dBckVtQnZCIn0=