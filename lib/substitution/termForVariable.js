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
                    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                    termNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
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
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.STATEMENT_RULE_NAME;
                termNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (termNode !== null) {
                    termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
                }
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOYW1lLCB0ZXJtTm9kZSkge1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1Rlcm1Ob2RlO1xuXG4gICAgY29uc3Qgbm9kZUEgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSB0ZXJtTm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBtYXRjaGVzVGVybU5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy50ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IHRlcm1Ob2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgbWF0Y2hlc1Rlcm1Ob2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1Rlcm1Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSh2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKSB7XG4gICAgbGV0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOYW1lLCB0ZXJtTm9kZSk7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOYW1lIiwiZ2V0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwibWF0Y2hlc1Rlcm1Ob2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hlciIsIm1hdGNoTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwiYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyIsImZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dUJBSkc7eUJBQ1k7NEJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLDRDQUFOO2FBQU1BLDRCQUNQQyxZQUFZLEVBQUVDLFFBQVE7OEJBRGZGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUhDRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsUUFBUSxFQUFFO2dCQUN0QixJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsUUFBUSxFQUNyQk0sUUFBUU4sVUFDUk8sY0FBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFN0NGLGtCQUFrQkcsYUFBYyxHQUFHO2dCQUVuQyxJQUFJLENBQUNILGlCQUFpQjtvQkFDcEIsSUFBTU0sa0JBQWtCVixVQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7b0JBRXBDZCxXQUFXZSxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUVsRixJQUFJYixhQUFhLElBQUksRUFBRTt3QkFDckIsSUFBTUssU0FBUSxJQUFJLENBQUNMLFFBQVEsRUFDckJNLFNBQVFOLFVBQ1JPLGVBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osUUFBT0M7d0JBRTdDRixrQkFBa0JHLGNBQWMsR0FBRztvQkFDckMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCakIsWUFBWSxFQUFFQyxRQUFRLEVBQUU7Z0JBQ3pELElBQUlpQiw4QkFBOEIsSUEzQ2pCbkIsNEJBMkNpREMsY0FBY0M7Z0JBRWhGLElBQU1VLGtCQUFrQlYsVUFDbEJXLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0MsOEJBQW1CO2dCQUVwQ2QsV0FBV2UsSUFBQUEseURBQTJDLEVBQUNKLFlBQVlFLFdBQVksR0FBRztnQkFFbEYsSUFBSWIsYUFBYSxJQUFJLEVBQUU7b0JBQ3JCaUIsOEJBQThCLElBcERmbkIsNEJBb0QrQ0MsY0FBY0M7Z0JBQzlFLENBQUM7Z0JBRUQsT0FBT2lCO1lBQ1Q7OztXQXhEbUJuQiJ9