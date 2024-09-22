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
    function Declaration(reference, statementNode) {
        _class_call_check(this, Declaration);
        this.reference = reference;
        this.statementNode = statementNode;
    }
    _create_class(Declaration, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.reference.getMetavariableNode();
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
            key: "unifySubstitution",
            value: function unifySubstitution(substitution) {
                var statementNode = substitution.getStatementNode(), metavariableNode = substitution.getMetavariableNode(), statementUnified = this.unifyStatement(statementNode), metavariableUnified = this.unifyMetavariable(metavariableNode), substitutionUnified = metavariableUnified && statementUnified;
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable) {
                var metavariableNodeMatches = this.reference.matchMetavariableNode(metavariable);
                return metavariableNodeMatches;
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
            key: "fromReferenceAndStatementNode",
            value: function fromReferenceAndStatementNode(reference, statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var declaration = new Declaration(reference, statementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gKG1ldGF2YXJpYWJsZVVuaWZpZWQgJiYgc3RhdGVtZW50VW5pZmllZCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5yZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgICBjb25zdCBjb25zZXF1ZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29uc2VxdWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50LmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZFN0YXRlbWVudE5vZGUocmVmZXJlbmNlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHJlZmVyZW5jZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsInJlZmVyZW5jZSIsInN0YXRlbWVudE5vZGUiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiY29uc2VxdWVudCIsImdldENvbnNlcXVlbnQiLCJtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCIsImZyb21SZWZlcmVuY2VBbmRTdGF0ZW1lbnROb2RlIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGpCRjtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXdCLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLG1CQUFtQjtZQUFJOzs7WUFFckVDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixhQUFhO2dCQUMxQkEsZ0JBQWdCSyxJQUFBQSxvQ0FBMEIsRUFBQ0wsZ0JBQWdCLEdBQUc7Z0JBRTlELElBQU1NLHVCQUF1QixJQUFJLENBQUNOLGFBQWEsQ0FBQ08sS0FBSyxDQUFDUCxnQkFDaERRLG1CQUFtQkYsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNVixnQkFBZ0JVLGFBQWFSLGdCQUFnQixJQUM3Q1MsbUJBQW1CRCxhQUFhUCxtQkFBbUIsSUFDbkRLLG1CQUFtQixJQUFJLENBQUNKLGNBQWMsQ0FBQ0osZ0JBQ3ZDWSxzQkFBc0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0YsbUJBQzdDRyxzQkFBdUJGLHVCQUF1Qko7Z0JBRXBELE9BQU9NO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCRSxZQUFZO2dCQUM1QixJQUFNQywwQkFBMEIsSUFBSSxDQUFDakIsU0FBUyxDQUFDa0IscUJBQXFCLENBQUNGO2dCQUVyRSxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsb0JBQW9CO2dCQUM5QyxJQUFNQyxhQUFhRCxxQkFBcUJFLGFBQWEsSUFDL0NyQixnQkFBZ0JvQixXQUFXbEIsZ0JBQWdCLElBQzNDSSx1QkFBdUIsSUFBSSxDQUFDTixhQUFhLENBQUNPLEtBQUssQ0FBQ1AsZ0JBQ2hEc0IsZ0NBQWdDaEIsc0JBQXVCLEdBQUc7Z0JBRWhFLE9BQU9nQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QnhCLFNBQVMsRUFBRUMsYUFBYTtnQkFDM0RBLGdCQUFnQkssSUFBQUEsb0NBQTBCLEVBQUNMLGdCQUFnQixHQUFHO2dCQUU5RCxJQUFNd0IsY0FBYyxJQXJESDFCLFlBcURtQkMsV0FBV0M7Z0JBRS9DLE9BQU93QjtZQUNUOzs7V0F4RG1CMUIifQ==