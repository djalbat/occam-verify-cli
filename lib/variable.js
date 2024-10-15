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
                if (variable === null) {
                    localContext.debug("The '".concat(variableString, "' variable is not present."));
                } else {
                    var type = variable.getType();
                    this.type = type;
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(variableString, "' variable."));
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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var variableString = this.string; ///
                fileContext.trace("Verifying the '".concat(variableString, "' variable at top level..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    fileContext.debug("The '".concat(variableString, "' variable is already present."));
                } else {
                    var typeVerified = this.verifyType(fileContext);
                    verifiedAtTopLevel = typeVerified; ///
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(variableString, "' variable at top level."));
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
                var termNode = term.getNode(), variableNode = this.node, substitution = substitutions.findSubstitutionByVariableNode(variableNode);
                if (substitution !== null) {
                    var termNodeMatches = substitution.matchTermNode(termNode);
                    if (termNodeMatches) {
                        termUnified = true;
                    }
                } else {
                    var variable = this, termVariable = termVariableFromTermNode(termNode, localContext);
                    if (termVariable === variable) {
                        termUnified = true;
                    } else {
                        var termForVariableSubstitution = _termForVariable.default.fromTernAndVariable(term, variable, localContext), substitution1 = termForVariableSubstitution; ///
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
                var typeJSON = this.type.toJSON(), string = this.string, type = typeJSON, json = {
                    string: string,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = string, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), node = variableNode, name = variableName, type = typeFromJSON(json, fileContext), variable = new Variable(localContext, string, node, name, type);
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
                var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, variable = new Variable(localContext, string, node, name, type);
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
function typeFromJSON(json, fileContext) {
    var type = json.type;
    var name = type.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
    return type;
}
function termVariableFromTermNode(termNode, localContext) {
    var termVariable = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var termVariableName = (0, _name.variableNameFromVariableNode)(termVariableNode);
        termVariable = localContext.findVariableByVariableName(termVariableName);
    }
    return termVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5sb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TG9jYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgdGVybVZhcmlhYmxlID0gdGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0aGlzLnR5cGUudG9KU09OKCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFibGU7XG5cbmZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICB0ZXJtVmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodGVybVZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZhcmlhYmxlO1xufSJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJWYXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsImdldExvY2FsQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInVuaWZ5VGVybSIsInRlcm0iLCJzdWJzdGl0dXRpb25zIiwidGVybVVuaWZpZWQiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInR5cGVGcm9tSlNPTiIsImZyb21UZXJtTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJzaGltIiwidHlwZU5vZGUiLCJmcm9tVHlwZU5vZGUi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