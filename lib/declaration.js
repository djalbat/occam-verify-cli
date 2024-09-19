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
var _brackets = require("./utilities/brackets");
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
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
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
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var declaration = new Declaration(metavariableNode, statementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IChtZXRhdmFyaWFibGVVbmlmaWVkICYmIHN0YXRlbWVudFVuaWZpZWQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgICBjb25zdCBjb25zZXF1ZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29uc2VxdWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50LmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiY29uc2VxdWVudCIsImdldENvbnNlcXVlbnQiLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsZ0JBQWdCLEVBQUVDLGFBQWE7Z0NBRHhCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTtnQkFDNUIsSUFBTUosZ0JBQWdCSSxhQUFhRixnQkFBZ0IsSUFDN0NILG1CQUFtQkssYUFBYUgsbUJBQW1CLElBQ25ESSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNOLGdCQUN2Q08sc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNULG1CQUM3Q1Usc0JBQXVCRix1QkFBdUJGO2dCQUVwRCxPQUFPSTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlQsZ0JBQWdCO2dCQUNoQyxJQUFNVywwQkFBMEIsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQ1ksS0FBSyxDQUFDWjtnQkFFNUQsT0FBT1c7WUFDVDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTixhQUFhO2dCQUMxQkEsZ0JBQWdCWSxJQUFBQSxvQ0FBMEIsRUFBQ1osZ0JBQWdCLEdBQUc7Z0JBRTlELElBQU1hLHVCQUF1QixJQUFJLENBQUNiLGFBQWEsQ0FBQ1csS0FBSyxDQUFDWCxnQkFDaERLLG1CQUFtQlEsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9SO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQzlDLElBQU1DLGFBQWFELHFCQUFxQkUsYUFBYSxJQUMvQ2pCLGdCQUFnQmdCLFdBQVdkLGdCQUFnQixJQUMzQ1csdUJBQXVCLElBQUksQ0FBQ2IsYUFBYSxDQUFDVyxLQUFLLENBQUNYLGdCQUNoRGtCLGdDQUFnQ0wsc0JBQXVCLEdBQUc7Z0JBRWhFLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDcEIsZ0JBQWdCLEVBQUVDLGFBQWE7Z0JBQ3pFQSxnQkFBZ0JZLElBQUFBLG9DQUEwQixFQUFDWixnQkFBZ0IsR0FBRztnQkFFOUQsSUFBTW9CLGNBQWMsSUFuREh0QixZQW1EbUJDLGtCQUFrQkM7Z0JBRXRELE9BQU9vQjtZQUNUOzs7V0F0RG1CdEIifQ==