"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declaration;
    }
});
var _match = require("./utilities/match");
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
var Declaration = /*#__PURE__*/ function() {
    function Declaration(metavariableNode, metastatementNode) {
        _class_call_check(this, Declaration);
        this.metavariableNode = metavariableNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(Declaration, [
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
            key: "matchSubstitution",
            value: function matchSubstitution(substitution) {
                var metavariableNode = substitution.getMetavariableNode(), metastatementNode = substitution.getMetastatementNode(), metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), metastatementNodeMatches = this.matchMetastatementNode(metastatementNode), substitutionMatches = metavariableNodeMatches && metastatementNodeMatches;
                return substitutionMatches;
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
                var metastatementNodeA = metastatementNode, metastatementNodeB = this.metastatementNode, metastatementMatches = (0, _match.matchMetastatementModuloBrackets)(metastatementNodeA, metastatementNodeB), metastatementNodeMatches = metastatementMatches; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "matchMetaLemmaOrMetaTheorem",
            value: function matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
                var metaConsequent = metaLemmaMetatheorem.getMetaConsequent(), metastatementNode = metaConsequent.getMetastatementNode(), matches = this.metastatementNode.match(metastatementNode), metaLemmaOrMetaTheoremMatches = matches; ///
                return metaLemmaOrMetaTheoremMatches;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndMetastatementNode",
            value: function fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
                var declaration = new Declaration(metavariableNode, metastatementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWF0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzICYmIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0TWV0YUNvbnNlcXVlbnQoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFDb25zZXF1ZW50LmdldE1ldGFzdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1NYXRjaGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1NYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsIm1hdGNoIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVCIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUNvbnNlcXVlbnQiLCJnZXRNZXRhQ29uc2VxdWVudCIsIm1hdGNoZXMiLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtTWF0Y2hlcyIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDRCQUFELEFBQUw7YUFBTUEsWUFDUEMsZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQ0FENUJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUwsbUJBQW1CSyxhQUFhSCxtQkFBbUIsSUFDbkRELG9CQUFvQkksYUFBYUYsb0JBQW9CLElBQ3JERywwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ1AsbUJBQ3JEUSwyQkFBMkIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ1Isb0JBQ3ZEUyxzQkFBdUJKLDJCQUEyQkU7Z0JBRXhELE9BQU9FO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCUCxnQkFBZ0I7Z0JBQ3BDLElBQU1NLDBCQUEwQixJQUFJLENBQUNOLGdCQUFnQixDQUFDVyxLQUFLLENBQUNYO2dCQUU1RCxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QlIsaUJBQWlCO2dCQUN0QyxJQUFNVyxxQkFBcUJYLG1CQUNyQlkscUJBQXFCLElBQUksQ0FBQ1osaUJBQWlCLEVBQzNDYSx1QkFBdUJDLElBQUFBLHVDQUFnQyxFQUFDSCxvQkFBb0JDLHFCQUM1RUwsMkJBQTJCTSxzQkFBdUIsR0FBRztnQkFFM0QsT0FBT047WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG9CQUFvQjtnQkFDOUMsSUFBTUMsaUJBQWlCRCxxQkFBcUJFLGlCQUFpQixJQUN2RGxCLG9CQUFvQmlCLGVBQWVmLG9CQUFvQixJQUN2RGlCLFVBQVUsSUFBSSxDQUFDbkIsaUJBQWlCLENBQUNVLEtBQUssQ0FBQ1Ysb0JBQ3ZDb0IsZ0NBQWdDRCxTQUFVLEdBQUc7Z0JBRW5ELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDdEIsZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQkFDakYsSUFBTXNCLGNBQWMsSUFqREh4QixZQWlEbUJDLGtCQUFrQkM7Z0JBRXRELE9BQU9zQjtZQUNUOzs7V0FwRG1CeEIifQ==