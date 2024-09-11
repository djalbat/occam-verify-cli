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
                var statementNodeA = statementNode, statementNodeB = this.statementNode, statementMatches = (0, _match.matchStatementModuloBrackets)(statementNodeA, statementNodeB), matchesStatementNode = statementMatches; ///
                return matchesStatementNode;
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
                var consequent = metaLemmaMetatheorem.getConsequent(), statementNode = consequent.getStatementNode(), matches = this.statementNode.match(statementNode), metaLemmaOrMetaTheoremUnified = matches; ///
                return metaLemmaOrMetaTheoremUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9tYXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gKG1ldGF2YXJpYWJsZVVuaWZpZWQgJiYgc3RhdGVtZW50VW5pZmllZCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IG1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IGNvbnNlcXVlbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb25zZXF1ZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudE5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwibWV0YXZhcmlhYmxlVW5pZmllZCIsInVuaWZ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2giLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMiLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiY29uc2VxdWVudCIsImdldENvbnNlcXVlbnQiLCJtYXRjaGVzIiwibWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLGdCQUFnQixFQUFFQyxhQUFhO2dDQUR4QkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1KLGdCQUFnQkksYUFBYUYsZ0JBQWdCLElBQzdDSCxtQkFBbUJLLGFBQWFILG1CQUFtQixJQUNuREksbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDTixnQkFDdkNPLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDVCxtQkFDN0NVLHNCQUF1QkYsdUJBQXVCRjtnQkFFcEQsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JULGdCQUFnQjtnQkFDaEMsSUFBTVcsMEJBQTBCLElBQUksQ0FBQ1gsZ0JBQWdCLENBQUNZLEtBQUssQ0FBQ1o7Z0JBRTVELE9BQU9XO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZU4sYUFBYTtnQkFDMUIsSUFBTVksaUJBQWlCWixlQUNqQmEsaUJBQWlCLElBQUksQ0FBQ2IsYUFBYSxFQUNuQ2MsbUJBQW1CQyxJQUFBQSxtQ0FBNEIsRUFBQ0gsZ0JBQWdCQyxpQkFDaEVHLHVCQUF1QkYsa0JBQW1CLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQzlDLElBQU1DLGFBQWFELHFCQUFxQkUsYUFBYSxJQUMvQ3BCLGdCQUFnQm1CLFdBQVdqQixnQkFBZ0IsSUFDM0NtQixVQUFVLElBQUksQ0FBQ3JCLGFBQWEsQ0FBQ1csS0FBSyxDQUFDWCxnQkFDbkNzQixnQ0FBZ0NELFNBQVUsR0FBRztnQkFFbkQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUN4QixnQkFBZ0IsRUFBRUMsYUFBYTtnQkFDekUsSUFBTXdCLGNBQWMsSUFqREgxQixZQWlEbUJDLGtCQUFrQkM7Z0JBRXRELE9BQU93QjtZQUNUOzs7V0FwRG1CMUIifQ==