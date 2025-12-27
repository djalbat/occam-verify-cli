"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
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
var Substitution = /*#__PURE__*/ function() {
    function Substitution(context, string, node, tokens) {
        _class_call_check(this, Substitution);
        this.context = context;
        this.string = string;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(Substitution, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                var term = null;
                return term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                var frame = null;
                return frame;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                var variable = null;
                return variable;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                var reference = null;
                return reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                return statement;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariableNode = null;
                return metavariableNode;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                var substitution = null;
                return substitution;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementNode = null;
                return replacementNode;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = true;
                return simple;
            }
        },
        {
            key: "isComplex",
            value: function isComplex() {
                var simple = this.isSimple(), complex = !simple;
                return complex;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var trivial = false;
                return trivial;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var substitutionNode = substitution.getNode(), matches = this.node.match(substitutionNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "isTermEqualToTerm",
            value: function isTermEqualToTerm(term, context) {
                var termEqualToTerm = false;
                return termEqualToTerm;
            }
        },
        {
            key: "isFrameEqualToFrame",
            value: function isFrameEqualToFrame(frame) {
                var frameEqualToFrame = false;
                return frameEqualToFrame;
            }
        },
        {
            key: "isReferenceEqualToReference",
            value: function isReferenceEqualToReference(reference, context) {
                var referenceEqualToReference = false;
                return referenceEqualToReference;
            }
        },
        {
            key: "isStatementEqualToStatement",
            value: function isStatementEqualToStatement(statement, context) {
                var statementEqualToStatement = false;
                return statementEqualToStatement;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                var metavariableEqualToMetavariable = false;
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "isSubstitutionEqualToSubstitution",
            value: function isSubstitutionEqualToSubstitution(substitution) {
                var substitutionEqualToSubstitution = substitution === null;
                return substitutionEqualToSubstitution;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                var parameterMatches = false;
                return parameterMatches;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                return this.node.match(substitutionNode);
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                var resolved = true;
                return resolved;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvc3Vic3RpdHV0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICBjb25zdCB0ZXJtID0gbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgY29uc3QgZnJhbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtRXF1YWxUb1Rlcm0gPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUb1Rlcm07XG4gIH1cblxuICBpc0ZyYW1lRXF1YWxUb0ZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvRnJhbWUgPSBmYWxzZTtcblxuICAgIHJldHVybiBmcmFtZUVxdWFsVG9GcmFtZTtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHBhcmFtZXRlck1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTsgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb25Ob2RlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVGVybUVxdWFsVG9UZXJtIiwidGVybUVxdWFsVG9UZXJtIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsImZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwicmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwicGFyYW1ldGVyTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwicmVzb2x2ZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FEdEJKO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBTEdKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU87Z0JBRWIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRO2dCQUVkLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVztnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZO2dCQUVsQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVk7Z0JBRWxCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CO2dCQUV6QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVM7Z0JBRWYsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxTQUFTLElBQUksQ0FBQ0QsUUFBUSxJQUN0QkcsVUFBVSxDQUFDRjtnQkFFakIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVO2dCQUVoQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULFlBQVk7Z0JBQ3BCLElBQU1VLG1CQUFtQlYsYUFBYWYsT0FBTyxJQUN2QzBCLFVBQVUsSUFBSSxDQUFDOUIsSUFBSSxDQUFDK0IsS0FBSyxDQUFDRixtQkFDMUJHLFVBQVVGLFNBQVUsR0FBRztnQkFFN0IsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0IxQixJQUFJLEVBQUVULE9BQU87Z0JBQzdCLElBQU1vQyxrQkFBa0I7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CMUIsS0FBSztnQkFDdkIsSUFBTTJCLG9CQUFvQjtnQkFFMUIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJ4QixTQUFTLEVBQUVmLE9BQU87Z0JBQzVDLElBQU13Qyw0QkFBNEI7Z0JBRWxDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCeEIsU0FBUyxFQUFFakIsT0FBTztnQkFDNUMsSUFBTTBDLDRCQUE0QjtnQkFFbEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NDLFlBQVk7Z0JBQzVDLElBQU1DLGtDQUFrQztnQkFFeEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0N6QixZQUFZO2dCQUM1QyxJQUFNMEIsa0NBQW1DMUIsaUJBQWlCO2dCQUUxRCxPQUFPMEI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTO2dCQUN0QixJQUFNQyxtQkFBbUI7Z0JBRXpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCcEIsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDN0IsSUFBSSxDQUFDK0IsS0FBSyxDQUFDRjtZQUFtQjs7O1lBRXBGcUIsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGFBQWEsRUFBRXJELE9BQU87Z0JBQzVCLElBQU1zRCxXQUFXO2dCQUVqQixPQUFPQTtZQUNUOzs7V0FuSm1CdkQifQ==