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
            value: function fromJSON(json, releaseContext) {
                var statement = json.statement, ruleName = _ruleNames.COMBINATOR_DECLARATION_RULE_NAME, content = "Combinator ".concat(statement, "\n"), node = releaseContext.nodeFromContentAndRuleName(content, ruleName), combinatorDeclarationNode = node, statementNode = statementNodeQuery(combinatorDeclarationNode), combinator = new Combinator(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTUJJTkFUT1JfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGtpbmQgPSBDT01CSU5BVE9SX0tJTkQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBydWxlTmFtZSA9IENPTUJJTkFUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRlbnQgPSBgQ29tYmluYXRvciAke3N0YXRlbWVudH1cbmAsXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0Lm5vZGVGcm9tQ29udGVudEFuZFJ1bGVOYW1lKGNvbnRlbnQsIHJ1bGVOYW1lKSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc1N0cmluZyIsInN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImtpbmQiLCJDT01CSU5BVE9SX0tJTkQiLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInJ1bGVOYW1lIiwiQ09NQklOQVRPUl9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJjb250ZW50Iiwibm9kZSIsIm5vZGVGcm9tQ29udGVudEFuZFJ1bGVOYW1lIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3IiLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7cUJBUEs7c0JBQ0c7cUJBQ0c7eUJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiwyQkFBTjthQUFNQSxXQUNQRyxhQUFhOzhCQUROSDtRQUVqQixJQUFJLENBQUNHLGFBQWEsR0FBR0E7O2lCQUZKSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNKLGFBQWE7Z0JBRXZERSxTQUFTLEFBQUMsR0FBa0IsT0FBaEJDO2dCQUVaLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNRixrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDSixhQUFhLEdBQ2pETSxPQUFPQyxzQkFBZSxFQUN0QkMsWUFBWUwsaUJBQ1pNLE9BQU87b0JBQ0xILE1BQUFBO29CQUNBRSxXQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVILFlBQWNDLEtBQWRELFdBQ0ZJLFdBQVdDLDJDQUFnQyxFQUMzQ0MsVUFBVSxBQUFDLGNBQXVCLE9BQVZOLFdBQVUsT0FFbENPLE9BQU9KLGVBQWVLLDBCQUEwQixDQUFDRixTQUFTRixXQUMxREssNEJBQTRCRixNQUM1QmYsZ0JBQWdCRixtQkFBbUJtQiw0QkFDbkNDLGFBQWEsSUFuQ0ZyQixXQW1DaUJHO2dCQUVsQyxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQm5CLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWtCLGFBQWEsSUF6Q0ZyQixXQXlDaUJHO2dCQUVsQyxPQUFPa0I7WUFDVDs7O1dBNUNtQnJCIn0=