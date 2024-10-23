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
    function Variable(localContext, string, node, name, type) {
        _class_call_check(this, Variable);
        this.localContext = localContext; ///
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
    }
    _create_class(Variable, [
        {
            key: "getLocalContext",
            value: function getLocalContext() {
                return this.localContext;
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
            value: function verify(localContext) {
                var verified;
                var variableString = this.string; ///
                localContext.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName);
                if (variable !== null) {
                    var type = variable.getType();
                    this.type = type;
                    verified = true;
                } else {
                    localContext.debug("The '".concat(variableString, "' variable is not present."));
                }
                if (verified) {
                    var typeName = this.type.getName();
                    localContext.debug("...verified the '".concat(variableString, ":").concat(typeName, "' variable."));
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
            value: function unifyTerm(term, substitutions, localContext) {
                var termUnified = false;
                var termString = term.getString(), variableString = this.string; ///
                localContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var termNode = term.getNode(), variableName = this.name, substitution = substitutions.findSubstitutionByVariableName(variableName);
                if (substitution !== null) {
                    var termNodeMatches = substitution.matchTermNode(termNode);
                    if (termNodeMatches) {
                        termUnified = true;
                    }
                } else {
                    var variableNode = this.node, variable = variableFromVariableNode(variableNode, localContext), termVariable = termVariableFromTermNode(termNode, localContext);
                    if (variable !== null && variable === termVariable) {
                        termUnified = true;
                    } else {
                        var variable1 = this, termForVariableSubstitution = _termForVariable.default.fromTernAndVariable(term, variable1, localContext), substitution1 = termForVariableSubstitution; ///
                        substitutions.addSubstitution(substitution1, localContext);
                        termUnified = true;
                    }
                }
                if (termUnified) {
                    localContext.trace("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = string, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), node = variableNode, name = variableName, type = (0, _json.typeFromJSON)(json, fileContext), variable = new Variable(localContext, string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, localContext) {
                var variable = null;
                var termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var variableNode = termVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, string = localContext.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(localContext, string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, localContext) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(localContext, string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, localContext) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName; ///
                    variable = new Variable(localContext, string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, localContext), variable = new Variable(localContext, string, node, name, type);
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
function termVariableFromTermNode(termNode, localContext) {
    var termVariable = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var termVariableName = (0, _name.variableNameFromVariableNode)(termVariableNode);
        termVariable = localContext.findVariableByVariableName(termVariableName);
    }
    return termVariable;
}
function variableFromVariableNode(variableNode, localContext) {
    var variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName);
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGVcIik7XG5cbmNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLmxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlTmFtZX0nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGUgPSB0ZXJtVmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICgodmFyaWFibGUgIT09IG51bGwpICYmICh2YXJpYWJsZSA9PT0gdGVybVZhcmlhYmxlKSkge1xuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZTtcblxuZnVuY3Rpb24gdGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHRlcm1WYXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgIHRlcm1WYXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh0ZXJtVmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufSJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJWYXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsImdldExvY2FsQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ0eXBlTmFtZSIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInRlcm1TdHJpbmciLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGUiLCJ0ZXJtVmFyaWFibGVGcm9tVGVybU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0eXBlRnJvbUpTT04iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwic2hpbSIsInR5cGVOb2RlIiwiZnJvbVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwidGVybVZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1JBOzs7ZUFBQTs7OzJEQTdSaUI7NERBQ1E7c0VBQ2U7cUJBRWQ7b0JBQ0M7b0JBQ2lCO29CQUNDO29CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1HLHlCQUFOO2FBQU1BLFNBQ1FDLFlBQVksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEOUNMO1FBRUYsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLGNBQWMsR0FBRztRQUNyQyxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FB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