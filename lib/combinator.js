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
var _query = require("./utilities/query");
var _string = require("./utilities/string");
var _kinds = require("./kinds");
var _ruleNames = require("./ruleNames");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var statementNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration/statement");
var Combinator = /*#__PURE__*/ function() {
    function Combinator(statementNode) {
        _classCallCheck(this, Combinator);
        this.statementNode = statementNode;
    }
    _createClass(Combinator, [
        {
            key: "asString",
            value: function asString() {
                var string;
                var statementString = (0, _string.nodeAsString)(this.statementNode);
                string = "".concat(statementString);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementString = (0, _string.nodeAsString)(this.statementNode), kind = _kinds.COMBINATOR_KIND, statement = statementString, json = {
                    kind: kind,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, callback) {
                var statement = json.statement, ruleName = _ruleNames.COMBINATOR_DECLARATION_RULE_NAME, content = "Combinator ".concat(statement, "\n"), combinatorDeclarationNode = callback(content, ruleName), statementNode = statementNodeQuery(combinatorDeclarationNode), combinator = new Combinator(statementNode);
                return combinator;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var combinator = new Combinator(statementNode);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTUJJTkFUT1JfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGtpbmQgPSBDT01CSU5BVE9SX0tJTkQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBydWxlTmFtZSA9IENPTUJJTkFUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRlbnQgPSBgQ29tYmluYXRvciAke3N0YXRlbWVudH1cbmAsXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImFzU3RyaW5nIiwic3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidG9KU09OIiwia2luZCIsIkNPTUJJTkFUT1JfS0lORCIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTiIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsImNvbnRlbnQiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvciIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztxQkFQSztzQkFDRztxQkFDRzt5QkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLDJCQUFOO2FBQU1BLFdBQ1BHLGFBQWE7OEJBRE5IO1FBRWpCLElBQUksQ0FBQ0csYUFBYSxHQUFHQTs7aUJBRkpIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ0osYUFBYTtnQkFFdkRFLFNBQVMsQUFBQyxHQUFrQixPQUFoQkM7Z0JBRVosT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1GLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNKLGFBQWEsR0FDakRNLE9BQU9DLHNCQUFlLEVBQ3RCQyxZQUFZTCxpQkFDWk0sT0FBTztvQkFDTEgsTUFBQUE7b0JBQ0FFLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxRQUFRLEVBQUU7Z0JBQzlCLElBQU0sQUFBRUgsWUFBY0MsS0FBZEQsV0FDRkksV0FBV0MsMkNBQWdDLEVBQzNDQyxVQUFVLEFBQUMsY0FBdUIsT0FBVk4sV0FBVSxPQUVsQ08sNEJBQTRCSixTQUFTRyxTQUFTRixXQUM5Q1osZ0JBQWdCRixtQkFBbUJpQiw0QkFDbkNDLGFBQWEsSUFsQ0ZuQixXQWtDaUJHO2dCQUVsQyxPQUFPZ0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmpCLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWdCLGFBQWEsSUF4Q0ZuQixXQXdDaUJHO2dCQUVsQyxPQUFPZ0I7WUFDVDs7O1dBM0NtQm5CIn0=