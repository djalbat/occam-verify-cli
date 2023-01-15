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
                var nodeA = this.metastatementNode, nodeB = metastatementNode, nodeMatches = _generic.genericMatcher.matchNode(nodeA, nodeB);
                matchesMetastatementNode = nodeMatches; ///
                if (!matchesMetastatementNode) {
                    var nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.METASTATEMENT_RULE_NAME;
                    metastatementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                    if (metastatementNode !== null) {
                        var nodeA1 = this.metastatementNode, nodeB1 = metastatementNode, nodeMatches1 = _generic.genericMatcher.matchNode(nodeA1, nodeB1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBnZW5lcmljTWF0Y2hlciB9IGZyb20gXCIuL21hdGNoZXIvZ2VuZXJpY1wiO1xuaW1wb3J0IHsgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBnZW5lcmljTWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IGdlbmVyaWNNYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgTWV0YVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcnVsZU5hbWUpOyAgLy8vXG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgTWV0YVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJnZW5lcmljTWF0Y2hlciIsIm1hdGNoTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsImJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7dUJBSlU7eUJBQ1M7NEJBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLGlDQUFOO2FBQU1BLGlCQUNQQyxnQkFBZ0IsRUFBRUMsaUJBQWlCOzhCQUQ1QkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUhSRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkgsaUJBQWlCLEVBQUU7Z0JBQ3hDLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxpQkFBaUIsRUFDOUJNLFFBQVFOLG1CQUNSTyxjQUFjQyx1QkFBYyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUVwREYsMkJBQTJCRyxhQUFjLEdBQUc7Z0JBRTVDLElBQUksQ0FBQ0gsMEJBQTBCO29CQUM3QixJQUFNTSxrQkFBa0JWLG1CQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyxrQ0FBdUI7b0JBRXhDZCxvQkFBb0JlLElBQUFBLHlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7b0JBRTNGLElBQUliLHNCQUFzQixJQUFJLEVBQUU7d0JBQzlCLElBQU1LLFNBQVEsSUFBSSxDQUFDTCxpQkFBaUIsRUFDOUJNLFNBQVFOLG1CQUNSTyxlQUFjQyx1QkFBYyxDQUFDQyxTQUFTLENBQUNKLFFBQU9DO3dCQUVwREYsMkJBQTJCRyxjQUFjLEdBQUc7b0JBQzlDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Q2pCLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRTtnQkFDbkYsSUFBSWlCLG1CQUFtQixJQTNDTm5CLGlCQTJDMkJDLGtCQUFrQkM7Z0JBRTlELElBQU1VLGtCQUFrQlYsbUJBQ2xCVyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFdBQVdDLGtDQUF1QjtnQkFFeENkLG9CQUFvQmUsSUFBQUEseURBQTJDLEVBQUNKLFlBQVlFLFdBQVksR0FBRztnQkFFM0YsSUFBSWIsc0JBQXNCLElBQUksRUFBRTtvQkFDOUJpQixtQkFBbUIsSUFwREpuQixpQkFvRHlCQyxrQkFBa0JDO2dCQUM1RCxDQUFDO2dCQUVELE9BQU9pQjtZQUNUOzs7V0F4RG1CbkIifQ==