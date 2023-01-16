"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForVariableSubstitution;
    }
});
var _matcher = require("../matcher");
var _ruleNames = require("../ruleNames");
var _substitution = require("../utilities/substitution");
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
var StatementForVariableSubstitution = /*#__PURE__*/ function() {
    function StatementForVariableSubstitution(variableName, statementNode) {
        _classCallCheck(this, StatementForVariableSubstitution);
        this.variableName = variableName;
        this.statementNode = statementNode;
    }
    _createClass(StatementForVariableSubstitution, [
        {
            key: "getVariableName",
            value: function getVariableName() {
                return this.variableName;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var matchesStatementNode;
                var nodeA = this.statementNode, nodeB = statementNode, nodeMatches = _matcher.matcher.matchNode(nodeA, nodeB);
                matchesStatementNode = nodeMatches; ///
                if (!matchesStatementNode) {
                    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                    statementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (statementNode !== null) {
                        var nodeA1 = this.statementNode, nodeB1 = statementNode, nodeMatches1 = matchNode(nodeA1, nodeB1);
                        matchesStatementNode = nodeMatches1; ///
                    }
                }
                return matchesStatementNode;
            }
        }
    ], [
        {
            key: "fromVariableNameAndStatementNode",
            value: function fromVariableNameAndStatementNode(variableName, statementNode) {
                var statementForVariableSubstitution = new StatementForVariableSubstitution(variableName, statementNode);
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                statementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (statementNode !== null) {
                    statementForVariableSubstitution = new StatementForVariableSubstitution(variableName, statementNode);
                }
                return statementForVariableSubstitution;
            }
        }
    ]);
    return StatementForVariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yVmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoZXIgfSBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNTdGF0ZW1lbnROb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZSh2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5hbWUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwiZnJvbVZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dUJBSkc7eUJBQ1k7NEJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLGlEQUFOO2FBQU1BLGlDQUNQQyxZQUFZLEVBQUVDLGFBQWE7OEJBRHBCRjtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFO2dCQUNoQyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sUUFBUU4sZUFDUk8sY0FBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFN0NGLHVCQUF1QkcsYUFBYyxHQUFHO2dCQUV4QyxJQUFJLENBQUNILHNCQUFzQjtvQkFDekIsSUFBTU0sa0JBQWtCVixlQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7b0JBRXBDZCxnQkFBZ0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7b0JBRXZGLElBQUliLGtCQUFrQixJQUFJLEVBQUU7d0JBQzFCLElBQU1LLFNBQVEsSUFBSSxDQUFDTCxhQUFhLEVBQzFCTSxTQUFRTixlQUNSTyxlQUFjRSxVQUFVSixRQUFPQzt3QkFFckNGLHVCQUF1QkcsY0FBYyxHQUFHO29CQUMxQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNqQixZQUFZLEVBQUVDLGFBQWEsRUFBRTtnQkFDbkUsSUFBSWlCLG1DQUFtQyxJQTNDdEJuQixpQ0EyQzJEQyxjQUFjQztnQkFFMUYsSUFBTVUsa0JBQWtCVixlQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7Z0JBRXBDZCxnQkFBZ0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRXZGLElBQUliLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCaUIsbUNBQW1DLElBcERwQm5CLGlDQW9EeURDLGNBQWNDO2dCQUN4RixDQUFDO2dCQUVELE9BQU9pQjtZQUNUOzs7V0F4RG1CbkIifQ==