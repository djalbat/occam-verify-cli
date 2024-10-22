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
                    localContext.debug("...verified the '".concat(variableString, "' variable, giving it the '").concat(typeName, "' type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGVcIik7XG5cbmNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLmxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLCBnaXZpbmcgaXQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0eXBlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlID0gdGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoKHZhcmlhYmxlICE9PSBudWxsKSAmJiAodmFyaWFibGUgPT09IHRlcm1WYXJpYWJsZSkpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFibGU7XG5cbmZ1bmN0aW9uIHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICB0ZXJtVmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodGVybVZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn0iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiVmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJnZXRMb2NhbENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidHlwZU5hbWUiLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwidmVyaWZpZWRBdFRvcExldmVsIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInVuaWZ5VGVybSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwidGVybVVuaWZpZWQiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInNoaW0iLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1WYXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStSQTs7O2VBQUE7OzsyREE3UmlCOzREQUNRO3NFQUNlO3FCQUVkO29CQUNDO29CQUNpQjtvQkFDQztvQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsOEJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsa0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNRyx5QkFBTjthQUFNQSxTQUNRQyxZQUFZLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDlDTDtRQUVGLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxjQUFjLEdBQUc7UUFDckMsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FB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