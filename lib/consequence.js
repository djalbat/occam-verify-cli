"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequence;
    }
});
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _consequence = require("./matcher/termForVariable/consequence");
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
var Consequence = /*#__PURE__*/ function() {
    function Consequence(statementNode) {
        _classCallCheck(this, Consequence);
        this.statementNode = statementNode;
    }
    _createClass(Consequence, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _consequence.consequenceTermForVariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, lexer, parser) {
                var statement = json.statement, statementString = statement, statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), consequence = new Consequence(statementNode);
                return consequence;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequence = new Consequence(statementNode);
                return consequence;
            }
        }
    ]);
    return Consequence;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW5jZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgY29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVNYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci90ZXJtRm9yVmFyaWFibGUvY29uc2VxdWVuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGNvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlTWF0Y2hlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBuZXcgQ29uc2VxdWVuY2Uoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnNlcXVlbmNlID0gbmV3IENvbnNlcXVlbmNlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbmNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnNlcXVlbmNlIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwiY29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwicGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJjb25zZXF1ZW5jZSIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzQkFKUTtvQkFDb0I7MkJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsYUFBYTs4QkFETkQ7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFGSkQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLGFBQWEsRUFBRUcsYUFBYSxFQUFFO2dCQUMvQyxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDSixhQUFhLEVBQ3JDSyxtQkFBbUJMLGVBQ25CTSx5QkFBeUJDLDhDQUFpQyxDQUFDQyxvQkFBb0IsQ0FBQ0osa0JBQWtCQyxrQkFBa0JGLGdCQUNwSE0sdUJBQXVCSCx3QkFBd0IsR0FBRztnQkFFeEQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2IsYUFBYSxFQUFFVyxTQUNuREcsWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxLQUFLLEVBQUVDLE1BQU0sRUFBRTtnQkFDbkMsSUFBTSxBQUFFSixZQUFjQyxLQUFkRCxXQUNGRixrQkFBa0JFLFdBQ2xCZCxnQkFBZ0JtQixJQUFBQSxzQ0FBZ0MsRUFBQ1AsaUJBQWlCSyxPQUFPQyxTQUN6RUUsY0FBYyxJQWhDSHJCLFlBZ0NtQkM7Z0JBRXBDLE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCckIsYUFBYSxFQUFFO2dCQUN0QyxJQUFNb0IsY0FBYyxJQXRDSHJCLFlBc0NtQkM7Z0JBRXBDLE9BQU9vQjtZQUNUOzs7V0F6Q21CckIifQ==