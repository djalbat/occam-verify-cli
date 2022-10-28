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
        },
        {
            key: "trace",
            value: function trace(message, node) {
                this.context.trace(message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message, node) {
                this.context.debug(message, node);
            }
        },
        {
            key: "info",
            value: function info(message, node) {
                this.context.info(message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message, node) {
                this.context.warning(message, node);
            }
        },
        {
            key: "error",
            value: function error(message, node) {
                this.context.error(message, node);
            }
        },
        {
            key: "fatal",
            value: function fatal(message, node) {
                this.context.fatal(message, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKTsgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnQobGFiZWwpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudChsYWJlbCk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGVzLnB1c2goc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5mYXRhbChtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJ2YXJpYWJsZXMiLCJzdGF0ZW1lbnROb2RlcyIsImdldENvbnRleHQiLCJpc0Rlcml2ZWQiLCJnZXRWYXJpYWJsZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImdldFJ1bGVzIiwiZ2V0VHlwZXMiLCJnZXRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwidmFyaWFibGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzTGFiZWxQcmVzZW50IiwibGFiZWwiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJzZXREZXJpdmVkIiwicG9wIiwiYWRkQXhpb20iLCJheGlvbSIsImFkZFZhcmlhYmxlIiwicHVzaCIsImFkZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwiZnJvbUNvbnRleHQiLCJwcm9vZkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMs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