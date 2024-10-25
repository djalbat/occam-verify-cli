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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("./substitution/termForVariable"));
var _query = require("./utilities/query");
var _type = require("./type");
var _name = require("./utilities/name");
var _json = require("./utilities/json");
var _node = require("./utilities/node");
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
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable");
var Variable = /*#__PURE__*/ function() {
    function Variable(context, string, node, name, type) {
        _class_call_check(this, Variable);
        this.context = context; ///
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
    }
    _create_class(Variable, [
        {
            key: "getLocalContext",
            value: function getLocalContext() {
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
                var variableNameMatches = this.name === variableName;
                return variableNameMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeMatches = this.node.match(variableNode);
                return variableNodeMatches;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified;
                var variableString = this.string; ///
                context.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = context.findVariableByVariableName(variableName);
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
                var verifiedAtTopLevel;
                var variableString = this.string; ///
                fileContext.trace("Verifying the '".concat(variableString, "' variable when declared..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    fileContext.debug("The '".concat(variableString, "' variable is already present."));
                } else {
                    var typeVerified = this.verifyType(fileContext);
                    verifiedAtTopLevel = typeVerified; ///
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(variableString, "' variable when declared."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, substitutions, context) {
                var termUnified = false;
                var termString = term.getString(), variableString = this.string; ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var termNode = term.getNode(), variableName = this.name, substitution = substitutions.findSubstitutionByVariableName(variableName);
                if (substitution !== null) {
                    var termNodeMatches = substitution.matchTermNode(termNode);
                    if (termNodeMatches) {
                        termUnified = true;
                    }
                } else {
                    var variableNode = this.node, variable = variableFromVariableNode(variableNode, context), termVariable = termVariableFromTermNode(termNode, context);
                    if (variable !== null && variable === termVariable) {
                        termUnified = true;
                    } else {
                        var variable1 = this, termForVariableSubstitution = _termForVariable.default.fromTernAndVariable(term, variable1, context), substitution1 = termForVariableSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        termUnified = true;
                    }
                }
                if (termUnified) {
                    context.trace("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = string, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser), variableName = (0, _name.variableNameFromVariableNode)(variableNode), context = _local.default.fromFileContext(fileContext), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), variable = new Variable(context, string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var variable = null;
                var termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var variableNode = termVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, string = context.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(context, string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, context) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = context.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(context, string, node, name, type);
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
                    variable = new Variable(context, string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), context = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, context), variable = new Variable(context, string, node, name, type);
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
function termVariableFromTermNode(termNode, context) {
    var termVariable = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var termVariableName = (0, _name.variableNameFromVariableNode)(termVariableNode);
        termVariable = context.findVariableByVariableName(termVariableName);
    }
    return termVariable;
}
function variableFromVariableNode(variableNode, context) {
    var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = context.findVariableByVariableName(variableName);
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGVcIik7XG5cbmNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8vXG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlTmFtZX0nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGUgPSB0ZXJtVmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoKHZhcmlhYmxlICE9PSBudWxsKSAmJiAodmFyaWFibGUgPT09IHRlcm1WYXJpYWJsZSkpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZTtcblxuZnVuY3Rpb24gdGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICB0ZXJtVmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHRlcm1WYXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn0iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiVmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0TG9jYWxDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsInRlcm1VbmlmaWVkIiwidGVybVN0cmluZyIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOYW1lIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInRlcm1WYXJpYWJsZSIsInRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJzaGltIiwidHlwZU5vZGUiLCJmcm9tVHlwZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtVmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErUkE7OztlQUFBOzs7MkRBN1JpQjs0REFDUTtzRUFDZTtxQkFFZDtvQkFDQztvQkFDaUI7b0JBQ0M7b0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLGtDQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUcseUJBQU47YUFBTUEsU0FDUUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQUR6Q0w7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0EsU0FBUyxHQUFHO1FBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBTlZMOztZQVNKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFB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