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
                var nodeA = this.metastatementNode, nodeB = metastatementNode, nodeMatches = (0, _node.matchNode)(nodeA, nodeB);
                matchesMetastatementNode = nodeMatches; ///
                if (!matchesMetastatementNode) {
                    var nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.METASTATEMENT_RULE_NAME;
                    metastatementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (metastatementNode !== null) {
                        var nodeA1 = this.metastatementNode, nodeB1 = metastatementNode, nodeMatches1 = (0, _node.matchNode)(nodeA1, nodeB1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgTWV0YVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcnVsZU5hbWUpOyAgLy8vXG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgTWV0YVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O29CQUpLO3lCQUNjOzRCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjs4QkFENUJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztpQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGlCQUFpQixFQUFFO2dCQUN4QyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxRQUFRTixtQkFDUk8sY0FBY0MsSUFBQUEsZUFBUyxFQUFDSCxPQUFPQztnQkFFckNGLDJCQUEyQkcsYUFBYyxHQUFHO2dCQUU1QyxJQUFJLENBQUNILDBCQUEwQjtvQkFDN0IsSUFBTUssa0JBQWtCVCxtQkFDbEJVLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0Msa0NBQXVCO29CQUV4Q2Isb0JBQW9CYyxJQUFBQSx5REFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUUzRixJQUFJWixzQkFBc0IsSUFBSSxFQUFFO3dCQUM5QixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxTQUFRTixtQkFDUk8sZUFBY0MsSUFBQUEsZUFBUyxFQUFDSCxRQUFPQzt3QkFFckNGLDJCQUEyQkcsY0FBYyxHQUFHO29CQUM5QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNoQixnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUU7Z0JBQ25GLElBQUlnQixtQkFBbUIsSUEzQ05sQixpQkEyQzJCQyxrQkFBa0JDO2dCQUU5RCxJQUFNUyxrQkFBa0JULG1CQUNsQlUsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyxrQ0FBdUI7Z0JBRXhDYixvQkFBb0JjLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRTNGLElBQUlaLHNCQUFzQixJQUFJLEVBQUU7b0JBQzlCZ0IsbUJBQW1CLElBcERKbEIsaUJBb0R5QkMsa0JBQWtCQztnQkFDNUQsQ0FBQztnQkFFRCxPQUFPZ0I7WUFDVDs7O1dBeERtQmxCIn0=