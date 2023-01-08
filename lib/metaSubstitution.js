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
var _ruleNames = require("./ruleNames");
var _node = require("./utilities/node");
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
                    metastatementNode = (0, _node.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
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
                metastatementNode = (0, _node.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (metastatementNode !== null) {
                    metaSubstitution = new MetaSubstitution(metavariableName, metastatementNode);
                }
                return metaSubstitution;
            }
        }
    ]);
    return MetaSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbWF0Y2hOb2RlLCBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YVN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgbm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsImJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSG1CO29CQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjs4QkFENUJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztpQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGlCQUFpQixFQUFFO2dCQUN4QyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxRQUFRTixtQkFDUk8sY0FBY0MsSUFBQUEsZUFBUyxFQUFDSCxPQUFPQztnQkFFckNGLDJCQUEyQkcsYUFBYyxHQUFHO2dCQUU1QyxJQUFJLENBQUNILDBCQUEwQjtvQkFDN0IsSUFBTUssa0JBQWtCVCxtQkFDbEJVLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsV0FBV0Msa0NBQXVCO29CQUV4Q2Isb0JBQW9CYyxJQUFBQSxpREFBMkMsRUFBQ0osWUFBWUUsV0FBWSxHQUFHO29CQUUzRixJQUFJWixzQkFBc0IsSUFBSSxFQUFFO3dCQUM5QixJQUFNSyxTQUFRLElBQUksQ0FBQ0wsaUJBQWlCLEVBQzlCTSxTQUFRTixtQkFDUk8sZUFBY0MsSUFBQUEsZUFBUyxFQUFDSCxRQUFPQzt3QkFFckNGLDJCQUEyQkcsY0FBYyxHQUFHO29CQUM5QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNoQixnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUU7Z0JBQ25GLElBQUlnQixtQkFBbUIsSUEzQ05sQixpQkEyQzJCQyxrQkFBa0JDO2dCQUU5RCxJQUFNUyxrQkFBa0JULG1CQUNsQlUsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxXQUFXQyxrQ0FBdUI7Z0JBRXhDYixvQkFBb0JjLElBQUFBLGlEQUEyQyxFQUFDSixZQUFZRSxXQUFZLEdBQUc7Z0JBRTNGLElBQUlaLHNCQUFzQixJQUFJLEVBQUU7b0JBQzlCZ0IsbUJBQW1CLElBcERKbEIsaUJBb0R5QkMsa0JBQWtCQztnQkFDNUQsQ0FBQztnQkFFRCxPQUFPZ0I7WUFDVDs7O1dBeERtQmxCIn0=