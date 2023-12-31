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
    function MetastatementForMetavariableSubstitution(metavariableName, metastatementNode) {
        _class_call_check(this, MetastatementForMetavariableSubstitution);
        this.metavariableName = metavariableName;
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetastatementForMetavariableSubstitution, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZUZyb21NZXRhc3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpXG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRmdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLHlEQUFELEFBQUw7YUFBTUEseUNBQ1BDLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0NBRDVCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBSFJGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGlCQUFpQjtnQkFDdEMsSUFBSUk7Z0JBRUpBLDJCQUEyQixJQUFJLENBQUNKLGlCQUFpQixDQUFDSyxLQUFLLENBQUNMO2dCQUV4RCxJQUFJLENBQUNJLDBCQUEwQjtvQkFDN0IsSUFBTUUsa0NBQWtDQyxJQUFBQSwrREFBb0QsRUFBQ1A7b0JBRTdGLElBQUlNLG9DQUFvQyxNQUFNO3dCQUM1QyxJQUFNTixzQkFBb0JNLGlDQUFpQyxHQUFHO3dCQUU5REYsMkJBQTJCLElBQUksQ0FBQ0osaUJBQWlCLENBQUNLLEtBQUssQ0FBQ0w7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDVCxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dCQUNqRixJQUFJUywyQ0FBMkMsSUFqQzlCWCx5Q0FpQzJFQyxrQkFBa0JDO2dCQUU5RyxJQUFNTSxrQ0FBa0NDLElBQUFBLCtEQUFvRCxFQUFDUDtnQkFFN0YsSUFBSU0sb0NBQW9DLE1BQU07b0JBQzVDLElBQU1OLHNCQUFvQk0saUNBQWlDLEdBQUc7b0JBRTlERywyQ0FBMkMsSUF4QzVCWCx5Q0F3Q3lFQyxrQkFBa0JDO2dCQUM1RztnQkFFQSxPQUFPUztZQUNUOzs7V0E1Q21CWCJ9