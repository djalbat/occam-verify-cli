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
                var metavariableNode = substitution.getMetavariableNode(), metastatementNode = substitution.getMetastatementNode(), metavariableNodeMatches = this.metavariableNode.match(metavariableNode), metastatementNodeMatches = this.metastatementNode.match(metastatementNode), substitutionMatches = metavariableNodeMatches && metastatementNodeMatches;
                return substitutionMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgJiYgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7XG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRNZXRhQ29uc2VxdWVudCgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YUNvbnNlcXVlbnQuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZS5tYXRjaChtZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbU1hdGNoZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUNvbnNlcXVlbnQiLCJnZXRNZXRhQ29uc2VxdWVudCIsIm1hdGNoZXMiLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtTWF0Y2hlcyIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BDLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0NBRDVCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBSFJGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1MLG1CQUFtQkssYUFBYUgsbUJBQW1CLElBQ25ERCxvQkFBb0JJLGFBQWFGLG9CQUFvQixJQUNyREcsMEJBQTBCLElBQUksQ0FBQ04sZ0JBQWdCLENBQUNPLEtBQUssQ0FBQ1AsbUJBQ3REUSwyQkFBMkIsSUFBSSxDQUFDUCxpQkFBaUIsQ0FBQ00sS0FBSyxDQUFDTixvQkFDeERRLHNCQUF1QkgsMkJBQTJCRTtnQkFFeEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG9CQUFvQjtnQkFDOUMsSUFBTUMsaUJBQWlCRCxxQkFBcUJFLGlCQUFpQixJQUN2RFosb0JBQW9CVyxlQUFlVCxvQkFBb0IsSUFDdkRXLFVBQVUsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ00sS0FBSyxDQUFDTixvQkFDdkNjLGdDQUFnQ0QsU0FBVSxHQUFHO2dCQUVuRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Q2hCLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0JBQ2pGLElBQU1nQixjQUFjLElBbENIbEIsWUFrQ21CQyxrQkFBa0JDO2dCQUV0RCxPQUFPZ0I7WUFDVDs7O1dBckNtQmxCIn0=