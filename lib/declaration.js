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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudE5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkge1xuICAgIGNvbnN0IGNvbnNlcXVlbnQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRDb25zZXF1ZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlQW5kU3RhdGVtZW50Tm9kZShyZWZlcmVuY2UsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24ocmVmZXJlbmNlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwicmVmZXJlbmNlIiwic3RhdGVtZW50Tm9kZSIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudE5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwibWV0YXZhcmlhYmxlVW5pZmllZCIsInVuaWZ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJjb25zZXF1ZW50IiwiZ2V0Q29uc2VxdWVudCIsIm1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkIiwiZnJvbVJlZmVyZW5jZUFuZFN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7d0JBRnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEakJGO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1KLGdCQUFnQkksYUFBYUYsZ0JBQWdCLElBQzdDRyxtQkFBbUJELGFBQWFFLG1CQUFtQixJQUNuREMsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDUixnQkFDdkNTLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDTCxtQkFDN0NNLHNCQUF1QkYsdUJBQXVCRjtnQkFFcEQsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JFLFlBQVk7Z0JBQzVCLElBQU1DLDBCQUEwQixJQUFJLENBQUNkLFNBQVMsQ0FBQ2UscUJBQXFCLENBQUNGO2dCQUVyRSxPQUFPQztZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVSLGFBQWE7Z0JBQzFCQSxnQkFBZ0JlLElBQUFBLG9DQUEwQixFQUFDZixnQkFBZ0IsR0FBRztnQkFFOUQsSUFBTWdCLHVCQUF1QixJQUFJLENBQUNoQixhQUFhLENBQUNpQixLQUFLLENBQUNqQixnQkFDaERPLG1CQUFtQlMsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9UO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQzlDLElBQU1DLGFBQWFELHFCQUFxQkUsYUFBYSxJQUMvQ3JCLGdCQUFnQm9CLFdBQVdsQixnQkFBZ0IsSUFDM0NjLHVCQUF1QixJQUFJLENBQUNoQixhQUFhLENBQUNpQixLQUFLLENBQUNqQixnQkFDaERzQixnQ0FBZ0NOLHNCQUF1QixHQUFHO2dCQUVoRSxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QnhCLFNBQVMsRUFBRUMsYUFBYTtnQkFDM0RBLGdCQUFnQmUsSUFBQUEsb0NBQTBCLEVBQUNmLGdCQUFnQixHQUFHO2dCQUU5RCxJQUFNd0IsY0FBYyxJQW5ESDFCLFlBbURtQkMsV0FBV0M7Z0JBRS9DLE9BQU93QjtZQUNUOzs7V0F0RG1CMUIifQ==