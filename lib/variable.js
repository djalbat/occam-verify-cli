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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _term = /*#__PURE__*/ _interop_require_default(require("./substitution/term"));
var _query = require("./utilities/query");
var _type = require("./type");
var _name = require("./utilities/name");
var _json = require("./utilities/json");
var _variable = require("./nodeAndTokens/variable");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable");
var Variable = /*#__PURE__*/ function() {
    function Variable(string, node, name, type) {
        _class_call_check(this, Variable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
    }
    _create_class(Variable, [
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = variableName === this.name;
                return nameMatches;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(variable) {
                var equalTo = false;
                if (variable !== null) {
                    var variableString = variable.getString();
                    equalTo = variableString === this.string;
                }
                return equalTo;
            }
        },
        {
            key: "isEssentiallyEqualToTerm",
            value: function isEssentiallyEqualToTerm(frame, generalContext, specificContext) {
                var essentiallyEqualToTerm = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var frameString = frame.getString();
                    if (frameString === this.string) {
                        essentiallyEqualToTerm = true;
                    }
                }
                return essentiallyEqualToTerm;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified;
                var variableString = this.string; ///
                context.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableName = this.name, variable = context.findVariableByVariableName(variableName);
                if (variable !== null) {
                    var type = variable.getType();
                    this.type = type;
                    verified = true;
                } else {
                    context.debug("The '".concat(variableString, "' variable is not present."));
                }
                if (verified) {
                    var typeName = this.type.getName();
                    context.debug("...verified the '".concat(variableString, ":").concat(typeName, "' variable."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified;
                if (this.type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = fileContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        fileContext.debug("The '".concat(typeName, "' type is missing."));
                    } else {
                        this.type = type; ///
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared;
                var variableString = this.string; ///
                fileContext.trace("Verifying the '".concat(variableString, "' variable when declared..."));
                var variableName = this.name, variablePresent = fileContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    fileContext.debug("The '".concat(variableName, "' variable is already present."));
                } else {
                    var metavariableName = this.name, metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        fileContext.debug("A '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var typeVerified = this.verifyType(fileContext);
                        verifiedWhenDeclared = typeVerified; ///
                    }
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(variableString, "' variable when declared."));
                }
                return verifiedWhenDeclared;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, substitutions, generalContext, specificContext) {
                var contextsReversed = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
                var termUnified = false;
                var context = contextsReversed ? generalContext : specificContext;
                var termString = term.getString(), variableString = this.string; ///
                specificContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var essentiallyEqualToTerm = this.isEssentiallyEqualToTerm(term, generalContext, specificContext);
                if (essentiallyEqualToTerm) {
                    termUnified = true;
                } else {
                    var variable = this, substitution = substitutions.findSubstitutionByVariable(variable);
                    if (substitution !== null) {
                        var substitutionTermEqualToTerm = substitution.isTermEqualTo(term);
                        if (substitutionTermEqualToTerm) {
                            termUnified = true;
                        }
                    } else {
                        var variable1 = this, termVariable = termVariableFromTerm(term, specificContext);
                        if (variable1 !== null && variable1 === termVariable) {
                            termUnified = true;
                        } else {
                            var variable2 = this, termSubstitution = _term.default.fromTernAndVariable(term, variable2, context), substitution1 = termSubstitution; ///
                            context = specificContext; ///
                            substitutions.addSubstitution(substitution1, context);
                            termUnified = true;
                        }
                    }
                }
                if (termUnified) {
                    specificContext.trace("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
                }
                return termUnified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.string, type = typeJSON, json = {
                    type: type,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, localContext = _local.default.fromFileContext(fileContext), context = localContext, variableString = string, variableNode = (0, _variable.variableNodeFromVariableString)(variableString, context), variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), variable = new Variable(string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, context) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName; ///
                    variable = new Variable(string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), context = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, context), variable = new Variable(string, node, name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();
Object.assign(_shim.default, {
    Variable: Variable
});
var _default = Variable;
function termVariableFromTerm(term, specificContext) {
    var termVariable;
    var Variable = _shim.default.Variable, context = specificContext, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context);
    termVariable = variable; //.
    return termVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKTtcblxuY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhcmlhYmxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9ICh2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNFc3NlbnRpYWxseUVxdWFsVG9UZXJtKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGVzc2VudGlhbGx5RXF1YWxUb1Rlcm0gPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpIHtcbiAgICAgICAgZXNzZW50aWFsbHlFcXVhbFRvVGVybSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzc2VudGlhbGx5RXF1YWxUb1Rlcm07XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlTmFtZX0nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgQSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0eXBlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0c1JldmVyc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCBjb250ZXh0ID0gY29udGV4dHNSZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0IDpcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGVzc2VudGlhbGx5RXF1YWxUb1Rlcm0gPSB0aGlzLmlzRXNzZW50aWFsbHlFcXVhbFRvVGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChlc3NlbnRpYWxseUVxdWFsVG9UZXJtKSB7XG4gICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0gPSBzdWJzdGl0dXRpb24uaXNUZXJtRXF1YWxUbyh0ZXJtKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhcmlhYmxlID0gdGVybVZhcmlhYmxlRnJvbVRlcm0odGVybSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoKHZhcmlhYmxlICE9PSBudWxsKSAmJiAodmFyaWFibGUgPT09IHRlcm1WYXJpYWJsZSkpIHtcbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZTtcblxuZnVuY3Rpb24gdGVybVZhcmlhYmxlRnJvbVRlcm0odGVybSwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFyaWFibGU7XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgdGVybVZhcmlhYmxlID0gdmFyaWFibGU7ICAvLy5cblxuICByZXR1cm4gdGVybVZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZSIsImVxdWFsVG8iLCJ2YXJpYWJsZVN0cmluZyIsImlzRXNzZW50aWFsbHlFcXVhbFRvVGVybSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJlc3NlbnRpYWxseUVxdWFsVG9UZXJtIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJmcmFtZVN0cmluZyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0c1JldmVyc2VkIiwidGVybVVuaWZpZWQiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGUiLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc1Rlcm1FcXVhbFRvIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRnJvbVRlcm0iLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiVGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInR5cGVGcm9tSlNPTiIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInNoaW0iLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyU0E7OztlQUFBOzs7MkRBelNpQjs0REFDUTsyREFDSTtxQkFFSDtvQkFDQztvQkFDaUI7b0JBQ0M7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLElBQUEsQUFBTUUseUJBQU47YUFBTUEsU0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEaENKO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFMVko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFB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