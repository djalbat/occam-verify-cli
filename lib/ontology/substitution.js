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
                var substitutionString = substitution.getString(), equalTo = substitutionString === this.string;
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
            key: "isTermVariableEqualToTerm",
            value: function isTermVariableEqualToTerm(termVariable, context) {
                var termVariableEqualToTerm = false;
                return termVariableEqualToTerm;
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
            key: "resolve",
            value: function resolve(substitutions, context) {
                var resolved = true;
                return resolved;
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
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementNode = null;
                return replacementNode;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIGNvbnN0IHRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSBmYWxzZTtcblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHN1YnN0aXR1dGlvblN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lRXF1YWxUb0ZyYW1lID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZnJhbWVFcXVhbFRvRnJhbWU7XG4gIH1cblxuICBpc1Rlcm1WYXJpYWJsZUVxdWFsVG9UZXJtKHRlcm1WYXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlRXF1YWxUb1Rlcm07XG4gIH1cblxuICBpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2U7XG4gIH1cblxuICBpc1N0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJlcXVhbFRvIiwiaXNUZXJtRXF1YWxUb1Rlcm0iLCJ0ZXJtRXF1YWxUb1Rlcm0iLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwiZnJhbWVFcXVhbFRvRnJhbWUiLCJpc1Rlcm1WYXJpYWJsZUVxdWFsVG9UZXJtIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRXF1YWxUb1Rlcm0iLCJpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc1N1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwicGFyYW1ldGVyTWF0Y2hlcyIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQUR0Qko7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFMR0o7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTztnQkFFYixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVE7Z0JBRWQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXO2dCQUVqQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVk7Z0JBRWxCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWTtnQkFFbEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUI7Z0JBRXpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTO2dCQUVmLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsU0FBUyxJQUFJLENBQUNELFFBQVEsSUFDdEJHLFVBQVUsQ0FBQ0Y7Z0JBRWpCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVTtnQkFFaEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxZQUFZO2dCQUNwQixJQUFNUSxxQkFBcUJSLGFBQWFoQixTQUFTLElBQzNDeUIsVUFBV0QsdUJBQXVCLElBQUksQ0FBQzVCLE1BQU07Z0JBRW5ELE9BQU82QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQnRCLElBQUksRUFBRVQsT0FBTztnQkFDN0IsSUFBTWdDLGtCQUFrQjtnQkFFeEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0J0QixLQUFLO2dCQUN2QixJQUFNdUIsb0JBQW9CO2dCQUUxQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsWUFBWSxFQUFFcEMsT0FBTztnQkFDN0MsSUFBTXFDLDBCQUEwQjtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJ2QixTQUFTLEVBQUVmLE9BQU87Z0JBQzVDLElBQU11Qyw0QkFBNEI7Z0JBRWxDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCdkIsU0FBUyxFQUFFakIsT0FBTztnQkFDNUMsSUFBTXlDLDRCQUE0QjtnQkFFbEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NDLFlBQVk7Z0JBQzVDLElBQU1DLGtDQUFrQztnQkFFeEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0N4QixZQUFZO2dCQUM1QyxJQUFNeUIsa0NBQW1DekIsaUJBQWlCO2dCQUUxRCxPQUFPeUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxhQUFhLEVBQUVoRCxPQUFPO2dCQUM1QixJQUFNaUQsV0FBVztnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTO2dCQUN0QixJQUFNQyxtQkFBbUI7Z0JBRXpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCO2dCQUV4QixPQUFPQTtZQUNUOzs7V0F0Sm1CdkQifQ==