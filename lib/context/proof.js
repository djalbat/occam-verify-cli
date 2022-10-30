"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../mixins/context/proof"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
        },
        {
            key: "halt",
            value: function halt(node) {
                this.context.halt(node);
            }
        },
        {
            key: "begin",
            value: function begin(node) {
                this.context.begin(node);
            }
        },
        {
            key: "complete",
            value: function complete(node) {
                this.context.complete(node);
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
Object.assign(ProofContext.prototype, _logging.default);
Object.assign(ProofContext.prototype, _proof.default);
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBwcm9vZkNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0L3Byb29mXCI7XG5cbmNsYXNzIFByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIHZhcmlhYmxlcywgc3RhdGVtZW50Tm9kZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgaXNEZXJpdmVkKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2ZWQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRSdWxlcygpOyB9XG5cbiAgZ2V0VHlwZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdGhpcy52YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudChsYWJlbCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50KGxhYmVsKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHNldERlcml2ZWQoZGVyaXZlZCkge1xuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICB0aGlzLnN0YXRlbWVudE5vZGVzLnBvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMucHVzaChzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIGhhbHQobm9kZSkgeyB0aGlzLmNvbnRleHQuaGFsdChub2RlKTsgfVxuXG4gIGJlZ2luKG5vZGUpIHsgdGhpcy5jb250ZXh0LmJlZ2luKG5vZGUpOyB9XG5cbiAgY29tcGxldGUobm9kZSkgeyB0aGlzLmNvbnRleHQuY29tcGxldGUobm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIHByb29mQ29udGV4dE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJQcm9vZkNvbnRleHQiLCJjb250ZXh0IiwiZGVyaXZlZCIsInZhcmlhYmxlcyIsInN0YXRlbWVudE5vZGVzIiwiZ2V0Q29udGV4dCIsImlzRGVyaXZlZCIsImdldFZhcmlhYmxlcyIsImdldFN0YXRlbWVudE5vZGVzIiwiZ2V0UnVsZXMiLCJnZXRUeXBlcyIsImdldEF4aW9tcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWUiLCJ2YXJpYWJsZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNMYWJlbFByZXNlbnQiLCJsYWJlbCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsInNldERlcml2ZWQiLCJwb3AiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkVmFyaWFibGUiLCJwdXNoIiwiYWRkU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJoYWx0Iiwibm9kZSIsImJlZ2luIiwiY29tcGxldGUiLCJmcm9tQ29udGV4dCIsInByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImxvZ2dpbmdNaXhpbnMiLCJwcm9vZkNvbnRleHRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdHQTs7O2VBQUE7Ozs0REF0RzBCOzBEQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsNkJBZ0dILEFBaEdIO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsT0FBTyxF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