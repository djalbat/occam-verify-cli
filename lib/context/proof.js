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
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuY2xhc3MgUHJvb2ZDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBzdGF0ZW1lbnROb2Rlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBpc0Rlcml2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZlZDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJ1bGVzKCk7IH1cblxuICBnZXRUeXBlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlcygpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50KGxhYmVsKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnQobGFiZWwpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7IHRoaXMuY29udGV4dC5hZGRBeGlvbShheGlvbSk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wdXNoKHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgaGFsdChub2RlKSB7IHRoaXMuY29udGV4dC5oYWx0KG5vZGUpOyB9XG5cbiAgYmVnaW4obm9kZSkgeyB0aGlzLmNvbnRleHQuYmVnaW4obm9kZSk7IH1cblxuICBjb21wbGV0ZShub2RlKSB7IHRoaXMuY29udGV4dC5jb21wbGV0ZShub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwidmFyaWFibGVzIiwic3RhdGVtZW50Tm9kZXMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0VmFyaWFibGVzIiwiZ2V0U3RhdGVtZW50Tm9kZXMiLCJnZXRSdWxlcyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsInZhcmlhYmxlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc0xhYmVsUHJlc2VudCIsImxhYmVsIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50Iiwic2V0RGVyaXZlZCIsInBvcCIsImFkZEF4aW9tIiwiYXhpb20iLCJhZGRWYXJpYWJsZSIsInB1c2giLCJhZGRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImhhbHQiLCJub2RlIiwiYmVnaW4iLCJjb21wbGV0ZSIsImZyb21Db250ZXh0IiwicHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibG9nZ2luZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0dBOzs7ZUFBQTs7OzREQXBHMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSw2QkFnR0gsQUFoR0g7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsY0FBYzs4QkFEbkRKO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7aUJBTHBCSjs7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