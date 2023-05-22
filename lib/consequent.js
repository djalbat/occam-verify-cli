"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequent;
    }
});
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _consequent = require("./verifier/termForVariable/consequent");
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
var Consequent = /*#__PURE__*/ function() {
    function Consequent(statementNode) {
        _class_call_check(this, Consequent);
        this.statementNode = statementNode;
    }
    _create_class(Consequent, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, proofContext) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, nonTerminalNodeVerified = _consequent.consequentTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext), statementNodeMatches = nonTerminalNodeVerified; ///
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequent = new Consequent(statementNode);
                return consequent;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), consequent = new Consequent(statementNode);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBjb25zZXF1ZW50VGVybUZvclZhcmlhYmxlVmVyaWZpZXIgfSBmcm9tIFwiLi92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUvY29uc2VxdWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjb25zZXF1ZW50VGVybUZvclZhcmlhYmxlVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBuZXcgQ29uc2VxdWVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnNlcXVlbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJwcm9vZkNvbnRleHQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW50IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzQkFKUTtvQkFDb0I7MEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsYUFBYTtnQ0FETkQ7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0JBOztrQkFGSkQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNEO1lBQ2Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRixhQUFhLEVBQUVHLGFBQWEsRUFBRUMsWUFBWTtnQkFDM0QsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsZUFDeEJNLG1CQUFtQk4sZUFDbkJPLDBCQUEwQkMsOENBQWtDQyxzQkFBc0JKLGtCQUFrQkMsa0JBQWtCSCxlQUFlQyxlQUNySU0sdUJBQXVCSCx5QkFBeUIsR0FBRztnQkFFekQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLGtCQUFrQkMsSUFBQUEsc0JBQWEsSUFBSSxDQUFDZCxlQUFlWSxTQUNuREcsWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCakIsYUFBYTtnQkFDcEMsSUFBTWtCLGFBQWEsSUE3QkZuQixXQTZCaUJDO2dCQUVsQyxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFSSxXQUFXO2dCQUM3QyxJQUFNLEFBQUVMLFlBQWNDLEtBQWRELFdBQ0ZGLGtCQUFrQkUsV0FDbEJNLFFBQVFELFlBQVlFLFlBQ3BCQyxTQUFTSCxZQUFZSSxhQUNyQnhCLGdCQUFnQnlCLElBQUFBLHdDQUFpQ1osaUJBQWlCUSxPQUFPRSxTQUN6RUwsYUFBYSxJQXhDRm5CLFdBd0NpQkM7Z0JBRWxDLE9BQU9rQjtZQUNUOzs7V0EzQ21CbkIifQ==