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
    function Declaration(metavariableNode, statementNode) {
        _class_call_check(this, Declaration);
        this.metavariableNode = metavariableNode;
        this.statementNode = statementNode;
    }
    _create_class(Declaration, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution) {
                var statementNode = substitution.getStatementNode(), metavariableNode = substitution.getMetavariableNode(), matchesStatementNode = this.matchStatementNode(statementNode), matchesMetavariableNode = this.matchMetavariableNode(metavariableNode), matchesSubstitution = matchesMetavariableNode && matchesStatementNode;
                return matchesSubstitution;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeA = statementNode, statementNodeB = this.statementNode, statementMatches = (0, _match.matchStatementModuloBrackets)(statementNodeA, statementNodeB), matchesStatementNode = statementMatches; ///
                return matchesStatementNode;
            }
        },
        {
            key: "matchMetaLemmaOrMetaTheorem",
            value: function matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
                var consequent = metaLemmaMetatheorem.getConsequent(), statementNode = consequent.getStatementNode(), matches = this.statementNode.match(statementNode), matchesMetaLemmaOrMetaTheorem = matches; ///
                return matchesMetaLemmaOrMetaTheorem;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndStatementNode",
            value: function fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
                var declaration = new Declaration(metavariableNode, statementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9tYXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWF0Y2hlc1N1YnN0aXR1dGlvbiA9IChtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSAmJiBtYXRjaGVzU3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyhzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIpLFxuICAgICAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50TWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gICAgY29uc3QgY29uc2VxdWVudCA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldENvbnNlcXVlbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudC5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtYXRjaGVzTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YUxlbW1hT3JNZXRhVGhlb3JlbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc1N1YnN0aXR1dGlvbiIsIm1hdGNoIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIiwibWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJjb25zZXF1ZW50IiwiZ2V0Q29uc2VxdWVudCIsIm1hdGNoZXMiLCJtYXRjaGVzTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsNEJBQUQsQUFBTDthQUFNQSxZQUNQQyxnQkFBZ0IsRUFBRUMsYUFBYTtnQ0FEeEJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSEpGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNSixnQkFBZ0JJLGFBQWFGLGdCQUFnQixJQUM3Q0gsbUJBQW1CSyxhQUFhSCxtQkFBbUIsSUFDbkRJLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTixnQkFDL0NPLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDVCxtQkFDckRVLHNCQUF1QkYsMkJBQTJCRjtnQkFFeEQsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JULGdCQUFnQjtnQkFDcEMsSUFBTVEsMEJBQTBCLElBQUksQ0FBQ1IsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1g7Z0JBRTVELE9BQU9RO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CTixhQUFhO2dCQUM5QixJQUFNVyxpQkFBaUJYLGVBQ2pCWSxpQkFBaUIsSUFBSSxDQUFDWixhQUFhLEVBQ25DYSxtQkFBbUJDLElBQUFBLG1DQUE0QixFQUFDSCxnQkFBZ0JDLGlCQUNoRVAsdUJBQXVCUSxrQkFBbUIsR0FBRztnQkFFbkQsT0FBT1I7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG9CQUFvQjtnQkFDOUMsSUFBTUMsYUFBYUQscUJBQXFCRSxhQUFhLElBQy9DbEIsZ0JBQWdCaUIsV0FBV2YsZ0JBQWdCLElBQzNDaUIsVUFBVSxJQUFJLENBQUNuQixhQUFhLENBQUNVLEtBQUssQ0FBQ1YsZ0JBQ25Db0IsZ0NBQWdDRCxTQUFVLEdBQUc7Z0JBRW5ELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDdEIsZ0JBQWdCLEVBQUVDLGFBQWE7Z0JBQ3pFLElBQU1zQixjQUFjLElBakRIeEIsWUFpRG1CQyxrQkFBa0JDO2dCQUV0RCxPQUFPc0I7WUFDVDs7O1dBcERtQnhCIn0=