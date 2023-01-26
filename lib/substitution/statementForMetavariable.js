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
var _nonTerminalNode = require("../utilities/nonTerminalNode");
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
                    var ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, nonTerminalNode = statementNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName), metaArgumentNode = bracketedNonTerminalNode; ///
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
                var ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, nonTerminalNode = statementNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName), metaArgumentNode = bracketedNonTerminalNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgYnJhY2tldGVkTm9uVGVybWluYWxOb2RlRnJvbU5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlc1N0YXRlbWVudE5vZGUpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWROb25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbE5vZGVGcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgcnVsZU5hbWUpLFxuICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICBpZiAobWV0YUFyZ3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBicmFja2V0ZWROb25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbE5vZGVGcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgcnVsZU5hbWUpLFxuICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoZXIiLCJtYXRjaE5vZGUiLCJydWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlRnJvbU5vblRlcm1pbmFsTm9kZSIsIm1ldGFBcmd1bWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3VCQVBHO3FCQUNFO3lCQUNjOytCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYscURBQU47YUFBTUEscUNBQ1BHLGdCQUFnQixFQUFFQyxhQUFhOzhCQUR4Qko7UUFFakIsSUFBSSxDQUFDRyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISko7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSCxhQUFhLEVBQUU7Z0JBQ2hDLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxhQUFhLEVBQzFCTSxRQUFRTixlQUNSTyxjQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUU3Q0YsdUJBQXVCRyxhQUFjLEdBQUc7Z0JBRXhDLElBQUksQ0FBQ0gsc0JBQXNCO29CQUN6QixJQUFNTSxXQUFXQyxrQ0FBdUIsRUFDbENDLGtCQUFrQlosZUFDbEJhLDJCQUEyQkMsSUFBQUEsNERBQTJDLEVBQUNGLGlCQUFpQkYsV0FDeEZLLG1CQUFtQkYsMEJBQTJCLEdBQUc7b0JBRXZELElBQUlFLHFCQUFxQixJQUFJLEVBQUU7d0JBQzdCLElBQU1mLGtCQUFnQkgsbUJBQW1Ca0I7d0JBRXpDLElBQUlmLG9CQUFrQixJQUFJLEVBQUU7NEJBQzFCLElBQU1LLFNBQVEsSUFBSSxDQUFDTCxhQUFhLEVBQzFCTSxTQUFRTixpQkFDUk8sZUFBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixRQUFPQzs0QkFFN0NGLHVCQUF1QkcsY0FBYyxHQUFHO3dCQUMxQyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ2pCLGdCQUFnQixFQUFFQyxhQUFhLEVBQUU7Z0JBQzNFLElBQUlpQix1Q0FBdUMsSUE5QzFCckIscUNBOENtRUcsa0JBQWtCQztnQkFFdEcsSUFBTVUsV0FBV0Msa0NBQXVCLEVBQ2xDQyxrQkFBa0JaLGVBQ2xCYSwyQkFBMkJDLElBQUFBLDREQUEyQyxFQUFDRixpQkFBaUJGLFdBQ3hGSyxtQkFBbUJGLDBCQUEyQixHQUFHO2dCQUV2RGIsZ0JBQWdCSCxtQkFBbUJrQjtnQkFFbkMsSUFBSWYsa0JBQWtCLElBQUksRUFBRTtvQkFDMUJpQix1Q0FBdUMsSUF4RHhCckIscUNBd0RpRUcsa0JBQWtCQztnQkFDcEcsQ0FBQztnQkFFRCxPQUFPaUI7WUFDVDs7O1dBNURtQnJCIn0=