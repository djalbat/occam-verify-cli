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
var _matcher = /*#__PURE__*/ _interop_require_default(require("../matcher"));
var _proof = require("../utilities/proof");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var StatementForMetavariableSubstitution = /*#__PURE__*/ function() {
    function StatementForMetavariableSubstitution(metavariableName, statementNode) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        this.metavariableName = metavariableName;
        this.statementNode = statementNode;
    }
    _create_class(StatementForMetavariableSubstitution, [
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
                var statementNodeMatches;
                var nodeA = this.statementNode, nodeB = statementNode, nodeMatches = _matcher.default.matchNode(nodeA, nodeB);
                statementNodeMatches = nodeMatches; ///
                if (!statementNodeMatches) {
                    var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                    if (bracketedStatementChildNode !== null) {
                        var _$statementNode = bracketedStatementChildNode, nodeA1 = this.statementNode, nodeB1 = _$statementNode, nodeMatches1 = _matcher.default.matchNode(nodeA1, nodeB1);
                        statementNodeMatches = nodeMatches1; ///
                    }
                }
                return statementNodeMatches;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndStatementNode",
            value: function fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
                var statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
                var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    var _$statementNode = bracketedStatementChildNode; ///
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, _$statementNode);
                }
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvb2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhEQUpEO3FCQUV5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLHFEQUFOO2FBQU1BLHFDQUNQQyxnQkFBZ0IsRUFBRUMsYUFBYTtnQ0FEeEJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSEpGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsYUFBYSxFQUFFO2dCQUNoQyxJQUFJSTtnQkFFSixJQUFNQyxRQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sUUFBUU4sZUFDUk8sY0FBY0MsZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPQztnQkFFN0NGLHVCQUF1QkcsYUFBYyxHQUFHO2dCQUV4QyxJQUFJLENBQUNILHNCQUFzQjtvQkFDekIsSUFBTU0sOEJBQThCQyxJQUFBQSxtREFBNEMsRUFBQ1g7b0JBRWpGLElBQUlVLGdDQUFnQyxJQUFJLEVBQUU7d0JBQ3hDLElBQU1WLGtCQUFnQlUsNkJBQ2hCTCxTQUFRLElBQUksQ0FBQ0wsYUFBYSxFQUMxQk0sU0FBUU4saUJBQ1JPLGVBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osUUFBT0M7d0JBRTdDRix1QkFBdUJHLGNBQWMsR0FBRztvQkFDMUMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDYixnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUMzRSxJQUFJYSx1Q0FBdUMsSUF4QzFCZixxQ0F3Q21FQyxrQkFBa0JDO2dCQUV0RyxJQUFNVSw4QkFBOEJDLElBQUFBLG1EQUE0QyxFQUFDWDtnQkFFakYsSUFBSVUsZ0NBQWdDLElBQUksRUFBRTtvQkFDeEMsSUFBTVYsa0JBQWdCVSw2QkFBNkIsR0FBRztvQkFFdERHLHVDQUF1QyxJQS9DeEJmLHFDQStDaUVDLGtCQUFrQkM7Z0JBQ3BHLENBQUM7Z0JBRUQsT0FBT2E7WUFDVDs7O1dBbkRtQmYifQ==