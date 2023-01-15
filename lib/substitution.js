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
var _node = require("./utilities/node");
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
                var nodeA = this.statementNode, nodeB = statementNode, nodeMatches = (0, _node.matchNode)(nodeA, nodeB);
                matchesStatementNode = nodeMatches; ///
                if (!matchesStatementNode) {
                    var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                    statementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (statementNode !== null) {
                        var nodeA1 = this.statementNode, nodeB1 = statementNode, nodeMatches1 = (0, _node.matchNode)(nodeA1, nodeB1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbmV3IFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztvQkFKSzt5QkFDVTs0QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsZ0JBQWdCLEVBQUVDLGFBQWE7OEJBRHhCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGFBQWEsRUFBRTtnQkFDaEMsSUFBSUk7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLENBQUNMLGFBQWEsRUFDMUJNLFFBQVFOLGVBQ1JPLGNBQWNDLElBQUFBLGVBQVMsRUFBQ0gsT0FBT0M7Z0JBRXJDRix1QkFBdUJHLGFBQWMsR0FBRztnQkFFeEMsSUFBSSxDQUFDSCxzQkFBc0I7b0JBQ3pCLElBQU1LLGtCQUFrQlQsZUFDbEJVLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0MsOEJBQW1CO29CQUVwQ2IsZ0JBQWdCYyxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUV2RixJQUFJWixrQkFBa0IsSUFBSSxFQUFFO3dCQUMxQixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sU0FBUU4sZUFDUk8sZUFBY0MsSUFBQUEsZUFBUyxFQUFDSCxRQUFPQzt3QkFFckNGLHVCQUF1QkcsY0FBYyxHQUFHO29CQUMxQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNoQixnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUMzRSxJQUFJZ0IsZUFBZSxJQTNDRmxCLGFBMkNtQkMsa0JBQWtCQztnQkFFdEQsSUFBTVMsa0JBQWtCVCxlQUNsQlUsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7Z0JBRXBDYixnQkFBZ0JjLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRXZGLElBQUlaLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCZ0IsZUFBZSxJQXBEQWxCLGFBb0RpQkMsa0JBQWtCQztnQkFDcEQsQ0FBQztnQkFFRCxPQUFPZ0I7WUFDVDs7O1dBeERtQmxCIn0=