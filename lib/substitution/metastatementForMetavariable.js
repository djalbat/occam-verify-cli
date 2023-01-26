"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetastatementForMetavariableSubstitution;
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
var MetastatementForMetavariableSubstitution = /*#__PURE__*/ function() {
    function MetastatementForMetavariableSubstitution(metavariableName, metastatementNode) {
        _classCallCheck(this, MetastatementForMetavariableSubstitution);
        this.metavariableName = metavariableName;
        this.metastatementNode = metastatementNode;
    }
    _createClass(MetastatementForMetavariableSubstitution, [
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
                    var ruleName = _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNode = metastatementNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName);
                    metastatementNode = bracketedNonTerminalNode; ///
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
                var metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
                var ruleName = _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNode = metastatementNode, bracketedNonTerminalNode = (0, _nonTerminalNode.bracketedNonTerminalNodeFromNonTerminalNode)(nonTerminalNode, ruleName);
                metastatementNode = bracketedNonTerminalNode; ///
                if (metastatementNode !== null) {
                    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
                }
                return metastatementForMetavariableSubstitution;
            }
        }
    ]);
    return MetastatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hlciB9IGZyb20gXCIuLi9tYXRjaGVyXCI7XG5pbXBvcnQgeyBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZUZyb21Ob25UZXJtaW5hbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vblRlcm1pbmFsTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWROb25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWROb25UZXJtaW5hbE5vZGVGcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgcnVsZU5hbWUpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaGVyLm1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgYnJhY2tldGVkTm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxOb2RlRnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIHJ1bGVOYW1lKTtcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoZXIiLCJtYXRjaE5vZGUiLCJydWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlIiwiYnJhY2tldGVkTm9uVGVybWluYWxOb2RlRnJvbU5vblRlcm1pbmFsTm9kZSIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1QkFKRzt5QkFDZ0I7K0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1BLHlEQUFOO2FBQU1BLHlDQUNQQyxnQkFBZ0IsRUFBRUMsaUJBQWlCOzhCQUQ1QkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUhSRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkgsaUJBQWlCLEVBQUU7Z0JBQ3hDLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxpQkFBaUIsRUFDOUJNLFFBQVFOLG1CQUNSTyxjQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUU3Q0YsMkJBQTJCRyxhQUFjLEdBQUc7Z0JBRTVDLElBQUksQ0FBQ0gsMEJBQTBCO29CQUM3QixJQUFNTSxXQUFXQyxrQ0FBdUIsRUFDbENDLGtCQUFrQlosbUJBQ2xCYSwyQkFBMkJDLElBQUFBLDREQUEyQyxFQUFDRixpQkFBaUJGO29CQUU5RlYsb0JBQW9CYSwwQkFBMEIsR0FBRztvQkFFakQsSUFBSWIsc0JBQXNCLElBQUksRUFBRTt3QkFDOUIsSUFBTUssU0FBUSxJQUFJLENBQUNMLGlCQUFpQixFQUM5Qk0sU0FBUU4sbUJBQ1JPLGVBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osUUFBT0M7d0JBRTdDRiwyQkFBMkJHLGNBQWMsR0FBRztvQkFDOUMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDaEIsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUNuRixJQUFJZ0IsMkNBQTJDLElBM0M5QmxCLHlDQTJDMkVDLGtCQUFrQkM7Z0JBRTlHLElBQU1VLFdBQVdDLGtDQUF1QixFQUNsQ0Msa0JBQWtCWixtQkFDbEJhLDJCQUEyQkMsSUFBQUEsNERBQTJDLEVBQUNGLGlCQUFpQkY7Z0JBRTlGVixvQkFBb0JhLDBCQUEwQixHQUFHO2dCQUVqRCxJQUFJYixzQkFBc0IsSUFBSSxFQUFFO29CQUM5QmdCLDJDQUEyQyxJQXBENUJsQix5Q0FvRHlFQyxrQkFBa0JDO2dCQUM1RyxDQUFDO2dCQUVELE9BQU9nQjtZQUNUOzs7V0F4RG1CbEIifQ==