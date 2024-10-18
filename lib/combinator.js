"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var combinatorString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(combinatorString, "' combinator at top level..."));
                var statementVerifiedAtTopLevel = this.statement.verifyAtTopLevel(fileContext);
                verifiedAtTopLevel = statementVerifiedAtTopLevel; ///
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(combinatorString, "' combinator at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statement = (0, _json.statementFromJSON)(json, fileContext), combinator = new Combinator(statement);
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
Object.assign(_shim.default, {
    Combinator: Combinator
});
var _default = Combinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbWJpbmF0b3JEZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIENvbWJpbmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvciBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gc3RhdGVtZW50VmVyaWZpZWRBdFRvcExldmVsOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IgYXQgdG9wIGxldmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgQ29tYmluYXRvclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJpbmF0b3I7XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJDb21iaW5hdG9yIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwidmVyaWZ5QXRUb3BMZXZlbCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwiY29tYmluYXRvclN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWRBdFRvcExldmVsIiwiZGVidWciLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJjb21iaW5hdG9yIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21TdGF0ZW1lbnROb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2RUE7OztlQUFBOzs7MkRBM0VpQjs0REFDUTtxQkFFQztvQkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUMsMkJBQU47YUFBTUEsV0FDUUMsU0FBUztnQ0FEakJEO1FBRUYsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFGZkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDRSxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssT0FBTztnQkFFNUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVc7Z0JBQzFCLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFNBQVMsSUFBSSxHQUFHO2dCQUU5Q0ssWUFBWUcsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRCxrQkFBaUI7Z0JBRXJELElBQU1FLDhCQUE4QixJQUFJLENBQUNYLFNBQVMsQ0FBQ00sZ0JBQWdCLENBQUNDO2dCQUVwRUMscUJBQXFCRyw2QkFBNkIsR0FBRztnQkFFckQsSUFBSUgsb0JBQW9CO29CQUN0QkQsWUFBWUssS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCSCxrQkFBaUI7Z0JBQ3pEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUNmLFNBQVMsR0FDdkRBLFlBQVljLGVBQ1pFLE9BQU87b0JBQ0xoQixXQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVULFdBQVc7Z0JBQy9CLElBQU1QLFlBQVlrQixJQUFBQSx1QkFBaUIsRUFBQ0YsTUFBTVQsY0FDcENZLGFBQWEsSUEvQ2pCcEIsV0ErQ2dDQztnQkFFbEMsT0FBT21CO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFZCxXQUFXO2dCQUN6RSxJQUFNLEFBQUVlLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZsQixnQkFBZ0JQLG1CQUFtQndCLDRCQUNuQ0csZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNuQixjQUM1Q1AsWUFBWXNCLFVBQVVLLGlCQUFpQixDQUFDdkIsZUFBZW9CLGVBQ3ZETCxhQUFhLElBekRqQnBCLFdBeURnQ0M7Z0JBRWxDLE9BQU9tQjtZQUNUOzs7V0E1RElwQjs7QUErRE42QixPQUFPQyxNQUFNLENBQUNOLGFBQUksRUFBRTtJQUNsQnhCLFlBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9