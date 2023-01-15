"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaSubstitution;
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
var MetaSubstitution = /*#__PURE__*/ function() {
    function MetaSubstitution(metavariableName, metastatementNode) {
        _classCallCheck(this, MetaSubstitution);
        this.metavariableName = metavariableName;
        this.metastatementNode = metastatementNode;
    }
    _createClass(MetaSubstitution, [
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.metavariableName;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var matchesMetastatementNode;
                var nodeA = this.metastatementNode, nodeB = metastatementNode, nodeMatches = _matcher.matcher.matchNode(nodeA, nodeB);
                matchesMetastatementNode = nodeMatches; ///
                if (!matchesMetastatementNode) {
                    var nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.METASTATEMENT_RULE_NAME;
                    metastatementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (metastatementNode !== null) {
                        var nodeA1 = this.metastatementNode, nodeB1 = metastatementNode, nodeMatches1 = _matcher.matcher.matchNode(nodeA1, nodeB1);
                        matchesMetastatementNode = nodeMatches1; ///
                    }
                }
                return matchesMetastatementNode;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndMetastatementNode",
            value: function fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode) {
                var metaSubstitution = new MetaSubstitution(metavariableName, metastatementNode);
                var nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.METASTATEMENT_RULE_NAME;
                metastatementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (metastatementNode !== null) {
                    metaSubstitution = new MetaSubstitution(metavariableName, metastatementNode);
                }
                return metaSubstitution;
            }
        }
    ]);
    return MetaSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IHsgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FO1xuXG4gICAgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBtZXRhU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGFTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hlciIsIm1hdGNoTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsImJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dUJBSkc7eUJBQ2dCOzRCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjs4QkFENUJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztpQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGlCQUFpQixFQUFFO2dCQUN4QyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxRQUFRTixtQkFDUk8sY0FBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFN0NGLDJCQUEyQkcsYUFBYyxHQUFHO2dCQUU1QyxJQUFJLENBQUNILDBCQUEwQjtvQkFDN0IsSUFBTU0sa0JBQWtCVixtQkFDbEJXLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0Msa0NBQXVCO29CQUV4Q2Qsb0JBQW9CZSxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUUzRixJQUFJYixzQkFBc0IsSUFBSSxFQUFFO3dCQUM5QixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxTQUFRTixtQkFDUk8sZUFBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixRQUFPQzt3QkFFN0NGLDJCQUEyQkcsY0FBYyxHQUFHO29CQUM5QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNqQixnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUU7Z0JBQ25GLElBQUlpQixtQkFBbUIsSUEzQ05uQixpQkEyQzJCQyxrQkFBa0JDO2dCQUU5RCxJQUFNVSxrQkFBa0JWLG1CQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyxrQ0FBdUI7Z0JBRXhDZCxvQkFBb0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRTNGLElBQUliLHNCQUFzQixJQUFJLEVBQUU7b0JBQzlCaUIsbUJBQW1CLElBcERKbkIsaUJBb0R5QkMsa0JBQWtCQztnQkFDNUQsQ0FBQztnQkFFRCxPQUFPaUI7WUFDVDs7O1dBeERtQm5CIn0=