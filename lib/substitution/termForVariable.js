"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableSubstitution;
    }
});
var _matcher = require("../matcher");
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
var TermForVariableSubstitution = /*#__PURE__*/ function() {
    function TermForVariableSubstitution(variableName, termNode) {
        _classCallCheck(this, TermForVariableSubstitution);
        this.variableName = variableName;
        this.termNode = termNode;
    }
    _createClass(TermForVariableSubstitution, [
        {
            key: "getVariableName",
            value: function getVariableName() {
                return this.variableName;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var matchesTermNode;
                var nodeA = this.termNode, nodeB = termNode, nodeMatches = _matcher.matcher.matchNode(nodeA, nodeB);
                matchesTermNode = nodeMatches; ///
                if (!matchesTermNode) {
                    var ruleName = _ruleNames.STATEMENT_RULE_NAME, nonTerminalNode = termNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName);
                    termNode = bracketedNonTerminalNode; ///
                    if (termNode !== null) {
                        var nodeA1 = this.termNode, nodeB1 = termNode, nodeMatches1 = _matcher.matcher.matchNode(nodeA1, nodeB1);
                        matchesTermNode = nodeMatches1; ///
                    }
                }
                return matchesTermNode;
            }
        }
    ], [
        {
            key: "fromVariableNameAndTermNode",
            value: function fromVariableNameAndTermNode(variableName, termNode) {
                var termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
                var ruleName = _ruleNames.STATEMENT_RULE_NAME, nonTerminalNode = termNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName);
                termNode = bracketedNonTerminalNode; ///
                if (termNode !== null) {
                    termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
                }
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWROb25UZXJtaW5hbE5vZGVGcm9tTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub25UZXJtaW5hbE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOYW1lLCB0ZXJtTm9kZSkge1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1Rlcm1Ob2RlO1xuXG4gICAgY29uc3Qgbm9kZUEgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSB0ZXJtTm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBtYXRjaGVzVGVybU5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWROb25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbE5vZGVGcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgcnVsZU5hbWUpO1xuXG4gICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gdGVybU5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBtYXRjaGVzVGVybU5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZUZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBydWxlTmFtZSk7XG5cbiAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidmFyaWFibGVOYW1lIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5hbWUiLCJnZXRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwicnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlRnJvbU5vblRlcm1pbmFsTm9kZSIsImZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dUJBSkc7eUJBQ1k7K0JBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLDRDQUFOO2FBQU1BLDRCQUNQQyxZQUFZLEVBQUVDLFFBQVE7OEJBRGZGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUhDRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsUUFBUSxFQUFFO2dCQUN0QixJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsUUFBUSxFQUNyQk0sUUFBUU4sVUFDUk8sY0FBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFN0NGLGtCQUFrQkcsYUFBYyxHQUFHO2dCQUVuQyxJQUFJLENBQUNILGlCQUFpQjtvQkFDcEIsSUFBTU0sV0FBV0MsOEJBQW1CLEVBQzlCQyxrQkFBa0JaLFVBQ2xCYSwyQkFBMkJDLElBQUFBLDREQUEyQyxFQUFDRixpQkFBaUJGO29CQUU5RlYsV0FBV2EsMEJBQTJCLEdBQUc7b0JBRXpDLElBQUliLGFBQWEsSUFBSSxFQUFFO3dCQUNyQixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsUUFBUSxFQUNyQk0sU0FBUU4sVUFDUk8sZUFBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixRQUFPQzt3QkFFN0NGLGtCQUFrQkcsY0FBYyxHQUFHO29CQUNyQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJoQixZQUFZLEVBQUVDLFFBQVEsRUFBRTtnQkFDekQsSUFBSWdCLDhCQUE4QixJQTNDakJsQiw0QkEyQ2lEQyxjQUFjQztnQkFFaEYsSUFBTVUsV0FBV0MsOEJBQW1CLEVBQzlCQyxrQkFBa0JaLFVBQ2xCYSwyQkFBMkJDLElBQUFBLDREQUEyQyxFQUFDRixpQkFBaUJGO2dCQUU5RlYsV0FBV2EsMEJBQTJCLEdBQUc7Z0JBRXpDLElBQUliLGFBQWEsSUFBSSxFQUFFO29CQUNyQmdCLDhCQUE4QixJQXBEZmxCLDRCQW9EK0NDLGNBQWNDO2dCQUM5RSxDQUFDO2dCQUVELE9BQU9nQjtZQUNUOzs7V0F4RG1CbEIifQ==