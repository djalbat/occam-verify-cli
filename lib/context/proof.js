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
var _file = /*#__PURE__*/ _interopRequireDefault(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _callbacks = /*#__PURE__*/ _interopRequireDefault(require("../mixins/callbacks"));
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
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, derived = false, variables = [], statementNodes = [], proofContext = new ProofContext(context, derived, variables, statementNodes);
                return proofContext;
            }
        }
    ]);
    return ProofContext;
}();
Object.assign(ProofContext.prototype, _file.default);
Object.assign(ProofContext.prototype, _logging.default);
Object.assign(ProofContext.prototype, _callbacks.default);
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGVzO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdGhpcy52YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IHRoaXMuY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7IHRoaXMuY29udGV4dC5hZGRBeGlvbShheGlvbSk7IH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wdXNoKHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBjYWxsYmFja3NNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJ2YXJpYWJsZXMiLCJzdGF0ZW1lbnROb2RlcyIsImdldENvbnRleHQiLCJpc0Rlcml2ZWQiLCJnZXRWYXJpYWJsZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsInZhcmlhYmxlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50Iiwic2V0RGVyaXZlZCIsInBvcCIsImFkZEF4aW9tIiwiYXhpb20iLCJhZGRWYXJpYWJsZSIsInB1c2giLCJhZGRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwicHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiLCJjYWxsYmFja3NNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1GQTs7O2VBQUE7Ozt5REFqRnVCOzREQUNHOzhEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsNkJB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