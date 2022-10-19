"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofContext;
    }
});
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ProofContext = /*#__PURE__*/ function() {
    function ProofContext(context, derived, variables, statementNodes) {
        _classCallCheck(this, ProofContext);
        this.context = context;
        this.derived = derived;
        this.variables = variables;
        this.statementNodes = statementNodes;
    }
    _createClass(ProofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "isDerived",
            value: function isDerived() {
                return this.derived;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getStatementNodes",
            value: function getStatementNodes() {
                return this.statementNodes;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                return this.context.getRules();
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                return this.context.getTypes();
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                return this.context.getAxioms();
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                return this.context.getCombinators();
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                return this.context.getConstructors();
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                return this.context.findRuleByReferenceName(referenceName);
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variable = this.variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || this.context.findVariableByVariableName(variableName); ///
                return variable;
            }
        },
        {
            key: "isLabelPresent",
            value: function isLabelPresent(label) {
                return this.context.isLabelPresent(label);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                if (derived) {
                    this.statementNodes.pop();
                }
                this.derived = derived;
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.context.addAxiom(axiom);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addStatementNode",
            value: function addStatementNode(statementNode) {
                this.statementNodes.push(statementNode);
            }
        }
    ], [
        {
            key: "fromContext",
            value: function fromContext(context) {
                var derived = false, variables = [], statementNodes = [], proofContext = new ProofContext(context, derived, variables, statementNodes);
                return proofContext;
            }
        }
    ]);
    return ProofContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKTsgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnQobGFiZWwpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudChsYWJlbCk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGVzLnB1c2goc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwidmFyaWFibGVzIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0VmFyaWFibGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRSdWxlcyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsInZhcmlhYmxlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc0xhYmVsUHJlc2VudCIsImxhYmVsIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50Iiwic2V0RGVyaXZlZCIsInBvcCIsImFkZEF4aW9tIiwiYXhpb20iLCJhZGRWYXJpYWJsZSIsInB1c2giLCJhZGRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyb21Db250ZXh0IiwicHJvb2ZDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLGNBQWM7OEJBRHBDSjtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFMTEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQ2IsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFDUixPQUFPLENBQUNR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