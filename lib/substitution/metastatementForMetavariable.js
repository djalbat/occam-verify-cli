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
                var metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
                var nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), ruleName = _ruleNames.METASTATEMENT_RULE_NAME;
                metastatementNode = (0, _substitution.bracketedNonTerminalChildNodeFromChildNodes)(childNodes, ruleName); ///
                if (metastatementNode !== null) {
                    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
                }
                return metastatementForMetavariableSubstitution;
            }
        }
    ]);
    return MetastatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hlciB9IGZyb20gXCIuLi9tYXRjaGVyXCI7XG5pbXBvcnQgeyBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGJyYWNrZXRlZE5vblRlcm1pbmFsQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLFxuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTm9uVGVybWluYWxDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSk7ICAvLy9cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoZXIiLCJtYXRjaE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJicmFja2V0ZWROb25UZXJtaW5hbENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3VCQUpHO3lCQUNnQjs0QkFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUEseURBQU47YUFBTUEseUNBQ1BDLGdCQUFnQixFQUFFQyxpQkFBaUI7OEJBRDVCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7aUJBSFJGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUI7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCSCxpQkFBaUIsRUFBRTtnQkFDeEMsSUFBSUk7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLENBQUNMLGlCQUFpQixFQUM5Qk0sUUFBUU4sbUJBQ1JPLGNBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osT0FBT0M7Z0JBRTdDRiwyQkFBMkJHLGFBQWMsR0FBRztnQkFFNUMsSUFBSSxDQUFDSCwwQkFBMEI7b0JBQzdCLElBQU1NLGtCQUFrQlYsbUJBQ2xCVyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFdBQVdDLGtDQUF1QjtvQkFFeENkLG9CQUFvQmUsSUFBQUEseURBQTJDLEVBQUNKLFlBQVlFLFdBQVksR0FBRztvQkFFM0YsSUFBSWIsc0JBQXNCLElBQUksRUFBRTt3QkFDOUIsSUFBTUssU0FBUSxJQUFJLENBQUNMLGlCQUFpQixFQUM5Qk0sU0FBUU4sbUJBQ1JPLGVBQWNDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0osUUFBT0M7d0JBRTdDRiwyQkFBMkJHLGNBQWMsR0FBRztvQkFDOUMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDakIsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUNuRixJQUFJaUIsMkNBQTJDLElBM0M5Qm5CLHlDQTJDMkVDLGtCQUFrQkM7Z0JBRTlHLElBQU1VLGtCQUFrQlYsbUJBQ2xCVyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLFdBQVdDLGtDQUF1QjtnQkFFeENkLG9CQUFvQmUsSUFBQUEseURBQTJDLEVBQUNKLFlBQVlFLFdBQVksR0FBRztnQkFFM0YsSUFBSWIsc0JBQXNCLElBQUksRUFBRTtvQkFDOUJpQiwyQ0FBMkMsSUFwRDVCbkIseUNBb0R5RUMsa0JBQWtCQztnQkFDNUcsQ0FBQztnQkFFRCxPQUFPaUI7WUFDVDs7O1dBeERtQm5CIn0=