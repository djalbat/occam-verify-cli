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
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable");
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
                var generalContext = context, variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = generalContext.findVariableByVariableName(variableName);
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
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), generalContext = fileContext, variablePresent = generalContext.isVariablePresentByVariableName(variableName);
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
            value: function unifyTerm(term, substitutions, generalContext, specificContext) {
                var contextsReversed = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
                var termUnified = false;
                var context = contextsReversed ? generalContext : specificContext;
                var termString = term.getString(), variableString = this.string; ///
                specificContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var termNode = term.getNode(), variableName = this.name, substitution = substitutions.findSubstitutionByVariableName(variableName);
                if (substitution !== null) {
                    var termNodeMatches = substitution.matchTermNode(termNode);
                    if (termNodeMatches) {
                        termUnified = true;
                    }
                } else {
                    var variableNode = this.node, variable = variableFromVariableNode(variableNode, generalContext), termVariable = termVariableFromTermNode(termNode, generalContext);
                    if (variable !== null && variable === termVariable) {
                        termUnified = true;
                    } else {
                        var variable1 = this, termSubstitution = _term.default.fromTernAndVariable(term, variable1, context), substitution1 = termSubstitution; ///
                        context = specificContext; ///
                        substitutions.addSubstitution(substitution1, context);
                        termUnified = true;
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
function variableFromVariableNode(variableNode, generalContext) {
    var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = generalContext.findVariableByVariableName(variableName);
    return variable;
}
function termVariableFromTermNode(termNode, generalContext) {
    var termVariable = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var termVariableName = (0, _name.variableNameFromVariableNode)(termVariableNode);
        termVariable = generalContext.findVariableByVariableName(termVariableName);
    }
    return termVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfToke3R5cGVOYW1lfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0c1JldmVyc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCBjb250ZXh0ID0gY29udGV4dHNSZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0IDpcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAoKHZhcmlhYmxlICE9PSBudWxsKSAmJiAodmFyaWFibGUgPT09IHRlcm1WYXJpYWJsZSkpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBjb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBWYXJpYWJsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFZhcmlhYmxlO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgbGV0IHRlcm1WYXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgIHRlcm1WYXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHRlcm1WYXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJWYXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJnZW5lcmFsQ29udGV4dCIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ0eXBlTmFtZSIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJzcGVjaWZpY0NvbnRleHQiLCJjb250ZXh0c1JldmVyc2VkIiwidGVybVVuaWZpZWQiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidGVybVN1YnN0aXR1dGlvbiIsIlRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsInR5cGVGcm9tSlNPTiIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInNoaW0iLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4UUE7OztlQUFBOzs7MkRBNVFpQjs0REFDUTsyREFDSTtxQkFFSDtvQkFDQztvQkFDaUI7b0JBQ0M7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFD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