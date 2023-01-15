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
var _generic = require("./matcher/generic");
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
                var nodeA = this.statementNode, nodeB = statementNode, nodeMatches = _generic.genericMatcher.matchNode(nodeA, nodeB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGdlbmVyaWNNYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9nZW5lcmljXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IGdlbmVyaWNNYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzU3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbmV3IFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwiZ2VuZXJpY01hdGNoZXIiLCJtYXRjaE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsImJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3VCQUpVO3lCQUNLOzRCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxnQkFBZ0IsRUFBRUMsYUFBYTs4QkFEeEJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFO2dCQUNoQyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sUUFBUU4sZUFDUk8sY0FBY0MsdUJBQWMsQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFcERGLHVCQUF1QkcsYUFBYyxHQUFHO2dCQUV4QyxJQUFJLENBQUNILHNCQUFzQjtvQkFDekIsSUFBTU0sa0JBQWtCVixlQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7b0JBRXBDZCxnQkFBZ0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7b0JBRXZGLElBQUliLGtCQUFrQixJQUFJLEVBQUU7d0JBQzFCLElBQU1LLFNBQVEsSUFBSSxDQUFDTCxhQUFhLEVBQzFCTSxTQUFRTixlQUNSTyxlQUFjRSxVQUFVSixRQUFPQzt3QkFFckNGLHVCQUF1QkcsY0FBYyxHQUFHO29CQUMxQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNqQixnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUMzRSxJQUFJaUIsZUFBZSxJQTNDRm5CLGFBMkNtQkMsa0JBQWtCQztnQkFFdEQsSUFBTVUsa0JBQWtCVixlQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyw4QkFBbUI7Z0JBRXBDZCxnQkFBZ0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRXZGLElBQUliLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCaUIsZUFBZSxJQXBEQW5CLGFBb0RpQkMsa0JBQWtCQztnQkFDcEQsQ0FBQztnQkFFRCxPQUFPaUI7WUFDVDs7O1dBeERtQm5CIn0=