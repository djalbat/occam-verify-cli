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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZUZyb21NZXRhc3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpXG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaCIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3lCQUZnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBQSxBQUFNQSx5REFBTjthQUFNQSx5Q0FDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQ0FENUJGO1FBRWpCLElBQUksQ0FBQ0MsbUJBQW1CQTtRQUN4QixJQUFJLENBQUNDLG9CQUFvQkE7O2tCQUhSRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGlCQUFpQjtnQkFDdEMsSUFBSUk7Z0JBRUpBLDJCQUEyQixJQUFJLENBQUNKLGtCQUFrQkssTUFBTUw7Z0JBRXhELElBQUksQ0FBQ0ksMEJBQTBCO29CQUM3QixJQUFNRSxrQ0FBa0NDLElBQUFBLGlFQUFxRFA7b0JBRTdGLElBQUlNLG9DQUFvQyxNQUFNO3dCQUM1QyxJQUFNTixzQkFBb0JNLGlDQUFpQyxHQUFHO3dCQUU5REYsMkJBQTJCLElBQUksQ0FBQ0osa0JBQWtCSyxNQUFNTDtvQkFDMUQ7Z0JBQ0Y7Z0JBRUEsT0FBT0k7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNULGdCQUFnQixFQUFFQyxpQkFBaUI7Z0JBQ2pGLElBQUlTLDJDQUEyQyxJQWpDOUJYLHlDQWlDMkVDLGtCQUFrQkM7Z0JBRTlHLElBQU1NLGtDQUFrQ0MsSUFBQUEsaUVBQXFEUDtnQkFFN0YsSUFBSU0sb0NBQW9DLE1BQU07b0JBQzVDLElBQU1OLHNCQUFvQk0saUNBQWlDLEdBQUc7b0JBRTlERywyQ0FBMkMsSUF4QzVCWCx5Q0F3Q3lFQyxrQkFBa0JDO2dCQUM1RztnQkFFQSxPQUFPUztZQUNUOzs7V0E1Q21CWCJ9