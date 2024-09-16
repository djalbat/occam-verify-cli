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
var _statement = require("./utilities/statement");
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
            key: "unifySubstitution",
            value: function unifySubstitution(substitution) {
                var statementNode = substitution.getStatementNode(), metavariableNode = substitution.getMetavariableNode(), statementUnified = this.unifyStatement(statementNode), metavariableUnified = this.unifyMetavariable(metavariableNode), substitutionUnified = metavariableUnified && statementUnified;
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariableNode) {
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode) {
                statementNode = (0, _statement.stripBrackets)(statementNode); ///
                var statementNodeMatches = this.statementNode.match(statementNode), statementUnified = statementNodeMatches; ///
                return statementUnified;
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
                var consequent = metaLemmaMetatheorem.getConsequent(), statementNode = consequent.getStatementNode(), statementNodeMatches = this.statementNode.match(statementNode), metaLemmaOrMetaTheoremUnified = statementNodeMatches; ///
                return metaLemmaOrMetaTheoremUnified;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndStatementNode",
            value: function fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
                statementNode = (0, _statement.stripBrackets)(statementNode); ///
                var declaration = new Declaration(metavariableNode, statementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHMoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudE5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IGNvbnNlcXVlbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb25zZXF1ZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwidW5pZnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsInN0cmlwQnJhY2tldHMiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiY29uc2VxdWVudCIsImdldENvbnNlcXVlbnQiLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLGdCQUFnQixFQUFFQyxhQUFhO2dDQUR4QkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1KLGdCQUFnQkksYUFBYUYsZ0JBQWdCLElBQzdDSCxtQkFBbUJLLGFBQWFILG1CQUFtQixJQUNuREksbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDTixnQkFDdkNPLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDVCxtQkFDN0NVLHNCQUF1QkYsdUJBQXVCRjtnQkFFcEQsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JULGdCQUFnQjtnQkFDaEMsSUFBTVcsMEJBQTBCLElBQUksQ0FBQ1gsZ0JBQWdCLENBQUNZLEtBQUssQ0FBQ1o7Z0JBRTVELE9BQU9XO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZU4sYUFBYTtnQkFDMUJBLGdCQUFnQlksSUFBQUEsd0JBQWEsRUFBQ1osZ0JBQWdCLEdBQUc7Z0JBRWpELElBQU1hLHVCQUF1QixJQUFJLENBQUNiLGFBQWEsQ0FBQ1csS0FBSyxDQUFDWCxnQkFDaERLLG1CQUFtQlEsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9SO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQzlDLElBQU1DLGFBQWFELHFCQUFxQkUsYUFBYSxJQUMvQ2pCLGdCQUFnQmdCLFdBQVdkLGdCQUFnQixJQUMzQ1csdUJBQXVCLElBQUksQ0FBQ2IsYUFBYSxDQUFDVyxLQUFLLENBQUNYLGdCQUNoRGtCLGdDQUFnQ0wsc0JBQXVCLEdBQUc7Z0JBRWhFLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDcEIsZ0JBQWdCLEVBQUVDLGFBQWE7Z0JBQ3pFQSxnQkFBZ0JZLElBQUFBLHdCQUFhLEVBQUNaLGdCQUFnQixHQUFHO2dCQUVqRCxJQUFNb0IsY0FBYyxJQW5ESHRCLFlBbURtQkMsa0JBQWtCQztnQkFFdEQsT0FBT29CO1lBQ1Q7OztXQXREbUJ0QiJ9