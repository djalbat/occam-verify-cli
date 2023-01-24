"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForMetavariableSubstitution;
    }
});
var _matcher = require("../matcher");
var _query = require("../utilities/query");
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
var statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!");
var StatementForMetavariableSubstitution = /*#__PURE__*/ function() {
    function StatementForMetavariableSubstitution(metavariableName, statementNode) {
        _classCallCheck(this, StatementForMetavariableSubstitution);
        this.metavariableName = metavariableName;
        this.statementNode = statementNode;
    }
    _createClass(StatementForMetavariableSubstitution, [
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
                    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, metaArgumentNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (metaArgumentNode !== null) {
                        var _$statementNode = statementNodeQuery(metaArgumentNode);
                        if (_$statementNode !== null) {
                            var nodeA1 = this.statementNode, nodeB1 = _$statementNode, nodeMatches1 = _matcher.matcher.matchNode(nodeA1, nodeB1);
                            matchesStatementNode = nodeMatches1; ///
                        }
                    }
                }
                return matchesStatementNode;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndStatementNode",
            value: function fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
                var statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, metaArgumentNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                statementNode = statementNodeQuery(metaArgumentNode);
                if (statementNode !== null) {
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
                }
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlc1N0YXRlbWVudE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFBcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcnVsZU5hbWUpOyAgLy8vXG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3VCQVBHO3FCQUNFO3lCQUNjOzRCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYscURBQU47YUFBTUEscUNBQ1BHLGdCQUFnQixFQUFFQyxhQUFhOzhCQUR4Qko7UUFFakIsSUFBSSxDQUFDRyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISko7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSCxhQUFhLEVBQUU7Z0JBQ2hDLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxhQUFhLEVBQzFCTSxRQUFRTixlQUNSTyxjQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUU3Q0YsdUJBQXVCRyxhQUFjLEdBQUc7Z0JBRXhDLElBQUksQ0FBQ0gsc0JBQXNCO29CQUN6QixJQUFNTSxrQkFBa0JWLGVBQ2xCVyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFdBQVdDLGtDQUF1QixFQUNsQ0MsbUJBQW1CQyxJQUFBQSx5REFBMkMsRUFBQ0wsWUFBWUUsV0FBWSxHQUFHO29CQUVoRyxJQUFJRSxxQkFBcUIsSUFBSSxFQUFFO3dCQUM3QixJQUFNZixrQkFBZ0JILG1CQUFtQmtCO3dCQUV6QyxJQUFJZixvQkFBa0IsSUFBSSxFQUFFOzRCQUMxQixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sU0FBUU4saUJBQ1JPLGVBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osUUFBT0M7NEJBRTdDRix1QkFBdUJHLGNBQWMsR0FBRzt3QkFDMUMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPYSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNsQixnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUMzRSxJQUFJa0IsdUNBQXVDLElBOUMxQnRCLHFDQThDbUVHLGtCQUFrQkM7Z0JBRXRHLElBQU1VLGtCQUFrQlYsZUFDbEJXLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0Msa0NBQXVCLEVBQ2xDQyxtQkFBbUJDLElBQUFBLHlEQUEyQyxFQUFDTCxZQUFZRSxXQUFZLEdBQUc7Z0JBRWhHYixnQkFBZ0JILG1CQUFtQmtCO2dCQUVuQyxJQUFJZixrQkFBa0IsSUFBSSxFQUFFO29CQUMxQmtCLHVDQUF1QyxJQXhEeEJ0QixxQ0F3RGlFRyxrQkFBa0JDO2dCQUNwRyxDQUFDO2dCQUVELE9BQU9rQjtZQUNUOzs7V0E1RG1CdEIifQ==