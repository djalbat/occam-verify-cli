"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
var _matcher = require("./matcher");
var _ruleNames = require("./ruleNames");
var _substitution = require("./utilities/substitution");
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
var Substitution = /*#__PURE__*/ function() {
    function Substitution(metavariableName, statementNode) {
        _classCallCheck(this, Substitution);
        this.metavariableName = metavariableName;
        this.statementNode = statementNode;
    }
    _createClass(Substitution, [
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.metavariableName;
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
            key: "fromMetavariableNameAndStatementNode",
            value: function fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
                var substitution = new Substitution(metavariableName, statementNode);
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                statementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (statementNode !== null) {
                    substitution = new Substitution(metavariableName, statementNode);
                }
                return substitution;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoZXIgfSBmcm9tIFwiLi9tYXRjaGVyXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNTdGF0ZW1lbnROb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IG5ldyBTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1QkFKRzt5QkFDWTs0QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsZ0JBQWdCLEVBQUVDLGFBQWE7OEJBRHhCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGFBQWEsRUFBRTtnQkFDaEMsSUFBSUk7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLENBQUNMLGFBQWEsRUFDMUJNLFFBQVFOLGVBQ1JPLGNBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osT0FBT0M7Z0JBRTdDRix1QkFBdUJHLGFBQWMsR0FBRztnQkFFeEMsSUFBSSxDQUFDSCxzQkFBc0I7b0JBQ3pCLElBQU1NLGtCQUFrQlYsZUFDbEJXLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0MsOEJBQW1CO29CQUVwQ2QsZ0JBQWdCZSxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUV2RixJQUFJYixrQkFBa0IsSUFBSSxFQUFFO3dCQUMxQixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sU0FBUU4sZUFDUk8sZUFBY0UsVUFBVUosUUFBT0M7d0JBRXJDRix1QkFBdUJHLGNBQWMsR0FBRztvQkFDMUMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDakIsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRTtnQkFDM0UsSUFBSWlCLGVBQWUsSUEzQ0ZuQixhQTJDbUJDLGtCQUFrQkM7Z0JBRXRELElBQU1VLGtCQUFrQlYsZUFDbEJXLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0MsOEJBQW1CO2dCQUVwQ2QsZ0JBQWdCZSxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO2dCQUV2RixJQUFJYixrQkFBa0IsSUFBSSxFQUFFO29CQUMxQmlCLGVBQWUsSUFwREFuQixhQW9EaUJDLGtCQUFrQkM7Z0JBQ3BELENBQUM7Z0JBRUQsT0FBT2lCO1lBQ1Q7OztXQXhEbUJuQiJ9