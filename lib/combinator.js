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
var _node = require("./utilities/node");
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
                var statement = json.statement;
                var lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementString = statement, statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), localContext = _local.default.fromFileContext(fileContext);
                statement = _statement.default.fromStatementNode(statementNode, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeUFzQ29tYmluYXRvcihsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgICBjb25zdCBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciIsInZlcmlmeUFzQ29tYmluYXRvciIsInZlcmlmaWVkIiwidG9KU09OIiwic3RhdGVtZW50U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwiU3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkRBVEo7Z0VBQ0s7NERBQ0c7cUJBRUM7b0JBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLDJCQUFOO2FBQU1BLFdBQ1BHLFNBQVM7Z0NBREZIO1FBRWpCLElBQUksQ0FBQ0csU0FBUyxHQUFHQTs7a0JBRkFIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNFLFNBQVM7WUFBSTs7O1lBRWpEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxPQUFPO2dCQUU1QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQU1DLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxjQUM1Q0ksZ0NBQWdDLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxrQkFBa0IsQ0FBQ0osZUFDbEVLLFdBQVdGLCtCQUErQixHQUFHO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNmLFNBQVMsQ0FBQ0UsU0FBUyxJQUMxQ0YsWUFBWWUsaUJBQ1pDLE9BQU87b0JBQ0xoQixXQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVULFdBQVc7Z0JBQy9CLElBQUksQUFBRVAsWUFBY2dCLEtBQWRoQjtnQkFFTixJQUFNa0IsUUFBUVgsWUFBWVksUUFBUSxJQUM1QkMsU0FBU2IsWUFBWWMsU0FBUyxJQUM5Qk4sa0JBQWtCZixXQUNsQkksZ0JBQWdCa0IsSUFBQUEsc0NBQWdDLEVBQUNQLGlCQUFpQkcsT0FBT0UsU0FDekVaLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSDtnQkFFbERQLFlBQVl1QixrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ3BCLGVBQWVJO2dCQUV2RCxJQUFNaUIsYUFBYSxJQTlDRjVCLFdBOENpQkc7Z0JBRWxDLE9BQU95QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRXBCLFdBQVc7Z0JBQ3pFLElBQU0sQUFBRWdCLFlBQWNLLGFBQUksQ0FBbEJMLFdBQ0ZuQixnQkFBZ0JOLG1CQUFtQjZCLDRCQUNuQ25CLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxjQUM1Q1AsWUFBWXVCLFVBQVVDLGlCQUFpQixDQUFDcEIsZUFBZUksZUFDdkRpQixhQUFhLElBeERGNUIsV0F3RGlCRztnQkFFbEMsT0FBT3lCO1lBQ1Q7OztXQTNEbUI1QiJ9