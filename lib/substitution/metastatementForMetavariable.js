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
var _metaproof = require("../utilities/metaproof");
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
var MetastatementForMetavariableSubstitution = /*#__PURE__*/ function() {
    function MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode) {
        _class_call_check(this, MetastatementForMetavariableSubstitution);
        this.metavariableNode = metavariableNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetastatementForMetavariableSubstitution, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var metastatementNodeMatches;
                metastatementNodeMatches = this.metastatementNode.match(metastatementNode);
                if (!metastatementNodeMatches) {
                    var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                    if (bracketedMetastatementChildNode !== null) {
                        var _$metastatementNode = bracketedMetastatementChildNode; ///
                        metastatementNodeMatches = this.metastatementNode.match(_$metastatementNode);
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndMetastatementNode",
            value: function fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
                var metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);
                var bracketedMetastatementChildNode = (0, _metaproof.bracketedMetastatementChildNodeFromMetastatementNode)(metastatementNode);
                if (bracketedMetastatementChildNode !== null) {
                    var _$metastatementNode = bracketedMetastatementChildNode; ///
                    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, _$metastatementNode);
                }
                return metastatementForMetavariableSubstitution;
            }
        }
    ]);
    return MetastatementForMetavariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZUZyb21NZXRhc3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKVxuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELElBQUEsQUFBTUEseURBQUQsQUFBTDthQUFNQSx5Q0FDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQ0FENUJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkosZ0JBQWdCO2dCQUNwQyxJQUFNSywwQkFBMEIsSUFBSSxDQUFDTCxnQkFBZ0IsQ0FBQ00sS0FBSyxDQUFDTjtnQkFFNUQsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJOLGlCQUFpQjtnQkFDdEMsSUFBSU87Z0JBRUpBLDJCQUEyQixJQUFJLENBQUNQLGlCQUFpQixDQUFDSyxLQUFLLENBQUNMO2dCQUV4RCxJQUFJLENBQUNPLDBCQUEwQjtvQkFDN0IsSUFBTUMsa0NBQWtDQyxJQUFBQSwrREFBb0QsRUFBQ1Q7b0JBRTdGLElBQUlRLG9DQUFvQyxNQUFNO3dCQUM1QyxJQUFNUixzQkFBb0JRLGlDQUFpQyxHQUFHO3dCQUU5REQsMkJBQTJCLElBQUksQ0FBQ1AsaUJBQWlCLENBQUNLLEtBQUssQ0FBQ0w7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9PO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDWCxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dCQUNqRixJQUFJVywyQ0FBMkMsSUF2QzlCYix5Q0F1QzJFQyxrQkFBa0JDO2dCQUU5RyxJQUFNUSxrQ0FBa0NDLElBQUFBLCtEQUFvRCxFQUFDVDtnQkFFN0YsSUFBSVEsb0NBQW9DLE1BQU07b0JBQzVDLElBQU1SLHNCQUFvQlEsaUNBQWlDLEdBQUc7b0JBRTlERywyQ0FBMkMsSUE5QzVCYix5Q0E4Q3lFQyxrQkFBa0JDO2dCQUM1RztnQkFFQSxPQUFPVztZQUNUOzs7V0FsRG1CYiJ9