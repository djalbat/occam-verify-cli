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
                var combinatorString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnlBc0NvbWJpbmF0b3IoZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgIGpzb24gPSB7ICAvLy9cbiAgICAgIHN0cmluZ1xuICAgIH07XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwiY29tYmluYXRvclN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJ2ZXJpZnlBc0NvbWJpbmF0b3IiLCJkZWJ1ZyIsInRvSlNPTiIsInN0YXRlbWVudFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsInN0cmluZyIsIlN0YXRlbWVudCIsImNvbWJpbmF0b3IiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJzaGltIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJKO2dFQUNLOzREQUNHO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLDJCQUFOO2FBQU1BLFdBQ1BHLFNBQVM7Z0NBREZIO1FBRWpCLElBQUksQ0FBQ0csU0FBUyxHQUFHQTs7a0JBRkFIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNFLFNBQVM7WUFBSTs7O1lBRWpEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxPQUFPO2dCQUU1QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFNBQVMsSUFBSSxHQUFHO2dCQUU5Q0ssWUFBWUcsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRCxrQkFBaUI7Z0JBRXJELElBQU1FLGdDQUFnQyxJQUFJLENBQUNYLFNBQVMsQ0FBQ1ksa0JBQWtCLENBQUNMO2dCQUV4RUMsV0FBV0csK0JBQStCLEdBQUc7Z0JBRTdDLElBQUlILFVBQVU7b0JBQ1pELFlBQVlNLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQkosa0JBQWlCO2dCQUN6RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNmLFNBQVMsQ0FBQ0UsU0FBUyxJQUMxQ0YsWUFBWWUsaUJBQ1pDLE9BQU87b0JBQ0xoQixXQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVULFdBQVc7Z0JBQy9CLElBQUksQUFBRVAsWUFBY2dCLEtBQWRoQjtnQkFFTixJQUFNa0IsU0FBU2xCLFdBQVksR0FBRztnQkFFOUJnQixPQUFPO29CQUNMRSxRQUFBQTtnQkFDRjtnQkFFQWxCLFlBQVltQixrQkFBUyxDQUFDRixRQUFRLENBQUNELE1BQU1UO2dCQUVyQyxJQUFNYSxhQUFhLElBeERGdkIsV0F3RGlCRztnQkFFbEMsT0FBT29CO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFZixXQUFXO2dCQUN6RSxJQUFNLEFBQUVZLFlBQWNJLGFBQUksQ0FBbEJKLFdBQ0ZmLGdCQUFnQk4sbUJBQW1Cd0IsNEJBQ25DRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ25CLGNBQzVDUCxZQUFZbUIsVUFBVVEsaUJBQWlCLENBQUN2QixlQUFlb0IsZUFDdkRKLGFBQWEsSUFsRUZ2QixXQWtFaUJHO2dCQUVsQyxPQUFPb0I7WUFDVDs7O1dBckVtQnZCIn0=