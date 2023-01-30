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
var _metaproof = require("../utilities/metaproof");
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
                    var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                    if (bracketedMetastatementChildNode !== null) {
                        var _$metastatementNode = bracketedMetastatementChildNode, nodeA1 = this.metastatementNode, nodeB1 = _$metastatementNode, nodeMatches1 = _matcher.matcher.matchNode(nodeA1, nodeB1);
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
                var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                if (bracketedMetastatementChildNode !== null) {
                    var _$metastatementNode = bracketedMetastatementChildNode; ///
                    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, _$metastatementNode);
                }
                return metastatementForMetavariableSubstitution;
            }
        }
    ]);
    return MetastatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hlciB9IGZyb20gXCIuLi9tYXRjaGVyXCI7XG5pbXBvcnQgeyBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhcHJvb2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgbm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7dUJBSEc7eUJBQzZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLHlEQUFOO2FBQU1BLHlDQUNQQyxnQkFBZ0IsRUFBRUMsaUJBQWlCOzhCQUQ1QkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUhSRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkgsaUJBQWlCLEVBQUU7Z0JBQ3hDLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxpQkFBaUIsRUFDOUJNLFFBQVFOLG1CQUNSTyxjQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUU3Q0YsMkJBQTJCRyxhQUFjLEdBQUc7Z0JBRTVDLElBQUksQ0FBQ0gsMEJBQTBCO29CQUM3QixJQUFNTSxrQ0FBa0NDLElBQUFBLCtEQUFvRCxFQUFDWDtvQkFFN0YsSUFBSVUsb0NBQW9DLElBQUksRUFBRTt3QkFDNUMsSUFBTVYsc0JBQW9CVSxpQ0FDcEJMLFNBQVEsSUFBSSxDQUFDTCxpQkFBaUIsRUFDOUJNLFNBQVFOLHFCQUNSTyxlQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLFFBQU9DO3dCQUU3Q0YsMkJBQTJCRyxjQUFjLEdBQUc7b0JBQzlDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Q2IsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUNuRixJQUFJYSwyQ0FBMkMsSUF4QzlCZix5Q0F3QzJFQyxrQkFBa0JDO2dCQUU5RyxJQUFNVSxrQ0FBa0NDLElBQUFBLCtEQUFvRCxFQUFDWDtnQkFFN0YsSUFBSVUsb0NBQW9DLElBQUksRUFBRTtvQkFDNUMsSUFBTVYsc0JBQW9CVSxpQ0FBaUMsR0FBRztvQkFFOURHLDJDQUEyQyxJQS9DNUJmLHlDQStDeUVDLGtCQUFrQkM7Z0JBQzVHLENBQUM7Z0JBRUQsT0FBT2E7WUFDVDs7O1dBbkRtQmYifQ==