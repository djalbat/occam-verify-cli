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
            value: function trace(message) {
                this.context.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.context.fatal(message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKTsgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCB0aGlzLmNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnQobGFiZWwpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudChsYWJlbCk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGVzLnB1c2goc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5mYXRhbChtZXNzYWdlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHN0YXRlbWVudE5vZGVzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJ2YXJpYWJsZXMiLCJzdGF0ZW1lbnROb2RlcyIsImdldENvbnRleHQiLCJpc0Rlcml2ZWQiLCJnZXRWYXJpYWJsZXMiLCJnZXRTdGF0ZW1lbnROb2RlcyIsImdldFJ1bGVzIiwiZ2V0VHlwZXMiLCJnZXRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwidmFyaWFibGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzTGFiZWxQcmVzZW50IiwibGFiZWwiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJzZXREZXJpdmVkIiwicG9wIiwiYWRkQXhpb20iLCJheGlvbSIsImFkZFZhcmlhYmxlIiwicHVzaCIsImFkZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJmcm9tQ29udGV4dCIsInByb29mQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxjQUFjOzhCQURwQ0o7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxD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