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
            key: "matchNode",
            value: function matchNode(node) {
                var nodeMatches = this.node.match(node);
                return nodeMatches;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5sb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TG9jYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBWYXJpYWJsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFZhcmlhYmxlO1xuXG5mdW5jdGlvbiB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICBjb25zdCB7IG5hbWUgfSA9IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiB0ZXJtVmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpO1xuXG4gICAgdGVybVZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHRlcm1WYXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WYXJpYWJsZTtcbn0iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiVmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJnZXRMb2NhbENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJ0ZXJtVW5pZmllZCIsInRlcm1TdHJpbmciLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGUiLCJ0ZXJtVmFyaWFibGVGcm9tVGVybU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInNoaW0iLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1WYXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFSQTs7O2VBQUE7OzsyREFuUmlCOzREQUNRO3NFQUNlO3FCQUVkO29CQUNDO29CQUNpQjtvQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsOEJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsa0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNRyx5QkFBTjthQUFNQSxTQUNRQyxZQUFZLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRDlDTDtRQUVGLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxjQUFjLEdBQUc7UUFDckMsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFOVkw7O1lBU0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsWUFBWTtZQUMxQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULElBQUk7Z0JBQ1osSUFBTVUsY0FBYyxJQUFJLENBQUNWLElBQUksQ0FBQ1csS0FBSyxDQUFDWDtnQkFFcEMsT0FBT1U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVWCxJQUFJO2dCQUNaLElBQU1ZLGNBQWUsSUFBSSxDQUFDWixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPWTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9oQixZQUFZO2dCQUNqQixJQUFJaUI7Z0JBRUosSUFBTUMsaUJBQWlCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUV2Q0QsYUFBYW1CLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRCxnQkFBZTtnQkFFcEQsSUFBTUUsZUFBZSxJQUFJLENBQUNsQixJQUFJLEVBQ3hCbUIsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDRyxXQUFXdkIsYUFBYXdCLDBCQUEwQixDQUFDSDtnQkFFekQsSUFBSUUsYUFBYSxNQUFNO29CQUNyQnZCLGFBQWF5QixLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmUCxnQkFBZTtnQkFDNUMsT0FBTztvQkFDTCxJQUFNZCxPQUFPbUIsU0FBU2QsT0FBTztvQkFFN0IsSUFBSSxDQUFDTCxJQUFJLEdBQUdBO29CQUVaYSxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pqQixhQUFheUIsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZQLGdCQUFlO2dCQUN4RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFdBQVc7Z0JBQ3BCLElBQUlDO2dCQUVKLElBQUksSUFBSSxDQUFDeEIsSUFBSSxLQUFLeUIsZ0JBQVUsRUFBRTtvQkFDNUJELGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBTUUsV0FBVyxJQUFJLENBQUMxQixJQUFJLENBQUNJLE9BQU87b0JBRWxDbUIsWUFBWVIsS0FBSyxDQUFDLEFBQUMsa0JBQTBCLE9BQVRXLFVBQVM7b0JBRTdDLElBQU0xQixPQUFPdUIsWUFBWUksa0JBQWtCLENBQUNEO29CQUU1QyxJQUFJMUIsU0FBUyxNQUFNO3dCQUNqQnVCLFlBQVlGLEtBQUssQ0FBQyxBQUFDLFFBQWdCLE9BQVRLLFVBQVM7b0JBQ3JDLE9BQU87d0JBQ0wsSUFBSSxDQUFDMUIsSUFBSSxHQUFHQSxNQUFNLEdBQUc7d0JBRXJCd0IsZUFBZTtvQkFDakI7b0JBRUEsSUFBSUEsY0FBYzt3QkFDaEJELFlBQVlGLEtBQUssQ0FBQyxBQUFDLG9CQUE0QixPQUFUSyxVQUFTO29CQUNqRDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkwsV0FBVztnQkFDMUIsSUFBSU07Z0JBRUosSUFBTWYsaUJBQWlCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUV2QzBCLFlBQVlSLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRCxnQkFBZTtnQkFFbkQsSUFBTUUsZUFBZSxJQUFJLENBQUNsQixJQUFJLEVBQ3hCbUIsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDYyxrQkFBa0JQLFlBQVlRLCtCQUErQixDQUFDZDtnQkFFcEUsSUFBSWEsaUJBQWlCO29CQUNuQlAsWUFBWUYsS0FBSyxDQUFDLEFBQUMsUUFBc0IsT0FBZlAsZ0JBQWU7Z0JBQzNDLE9BQU87b0JBQ0wsSUFBTVUsZUFBZSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0M7b0JBRXJDTSxxQkFBcUJMLGNBQWUsR0FBRztnQkFDekM7Z0JBRUEsSUFBSUssb0JBQW9CO29CQUN0Qk4sWUFBWUYsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZQLGdCQUFlO2dCQUN2RDtnQkFFQSxPQUFPZTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRUMsYUFBYSxFQUFFdEMsWUFBWTtnQkFDekMsSUFBSXVDLGNBQWM7Z0JBRWxCLElBQU1DLGFBQWFILEtBQUsvQixTQUFTLElBQzNCWSxpQkFBaUIsSUFBSSxDQUFDakIsTUFBTSxFQUFFLEdBQUc7Z0JBRXZDRCxhQUFhbUIsS0FBSyxDQUFDLEFBQUMsaUJBQThDRCxPQUE5QnNCLFlBQVcscUJBQWtDLE9BQWZ0QixnQkFBZTtnQkFFakYsSUFBTXVCLFdBQVdKLEtBQUs5QixPQUFPLElBQ3ZCYSxlQUFlLElBQUksQ0FBQ2xCLElBQUksRUFDeEJ3QyxlQUFlSixjQUFjSyw4QkFBOEIsQ0FBQ3ZCO2dCQUVsRSxJQUFJc0IsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1FLGtCQUFrQkYsYUFBYUcsYUFBYSxDQUFDSjtvQkFFbkQsSUFBSUcsaUJBQWlCO3dCQUNuQkwsY0FBYztvQkFDaEI7Z0JBQ0YsT0FBTztvQkFDTCxJQUFNaEIsV0FBVyxJQUFJLEVBQ2Z1QixlQUFlQyx5QkFBeUJOLFVBQVV6QztvQkFFeEQsSUFBSThDLGlCQUFpQnZCLFVBQVU7d0JBQzdCZ0IsY0FBYztvQkFDaEIsT0FBTzt3QkFDTCxJQUFNUyw4QkFBOEJDLHdCQUEyQixDQUFDQyxtQkFBbUIsQ0FBQ2IsTUFBTWQsVUFBVXZCLGVBQzlGMEMsZ0JBQWVNLDZCQUE4QixHQUFHO3dCQUV0RFYsY0FBY2EsZUFBZSxDQUFDVCxlQUFjMUM7d0JBRTVDdUMsY0FBYztvQkFDaEI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsYUFBYTtvQkFDZnZDLGFBQWFtQixLQUFLLENBQUMsQUFBQyxtQkFBZ0RELE9BQTlCc0IsWUFBVyxxQkFBa0MsT0FBZnRCLGdCQUFlO2dCQUNyRjtnQkFFQSxPQUFPcUI7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ2pELElBQUksQ0FBQ2dELE1BQU0sSUFDM0JuRCxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQkcsT0FBT2lELFVBQ1BDLE9BQU87b0JBQ0xyRCxRQUFBQTtvQkFDQUcsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2tEO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFM0IsV0FBVztnQkFDL0IsSUFBTSxBQUFFMUIsU0FBV3FELEtBQVhyRCxRQUNGdUQsUUFBUzdCLFlBQVk4QixRQUFRLElBQzdCQyxTQUFTL0IsWUFBWWdDLFNBQVMsSUFDOUJ6QyxpQkFBaUJqQixRQUNqQm1CLGVBQWV3QyxJQUFBQSxvQ0FBOEIsRUFBQzFDLGdCQUFnQnNDLE9BQU9FLFNBQ3JFckMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDcEIsZUFBZTZELGNBQVksQ0FBQ0MsZUFBZSxDQUFDbkMsY0FDNUN6QixPQUFPa0IsY0FDUGpCLE9BQU9rQixjQUNQakIsT0FBTzJELGFBQWFULE1BQU0zQixjQUMxQkosV0FBVyxJQS9MZnhCLFNBK0w0QkMsY0FBY0MsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRWhFLE9BQU9tQjtZQUNUOzs7WUFFT3lDLEtBQUFBO21CQUFQLFNBQU9BLGFBQWF2QixRQUFRLEVBQUV6QyxZQUFZO2dCQUN4QyxJQUFJdUIsV0FBVztnQkFFZixJQUFNMEMsbUJBQW1CbkUsc0JBQXNCMkM7Z0JBRS9DLElBQUl3QixxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTTdDLGVBQWU2QyxrQkFDZjVDLGVBQWVDLElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q2xCLE9BQU9rQixjQUNQbkIsU0FBU0QsYUFBYWtFLFlBQVksQ0FBQ2hFLE9BQ25DQyxPQUFPa0IsY0FDUGpCLE9BQU87b0JBRWJtQixXQUFXLElBak5YeEIsU0FpTndCQyxjQUFjQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFDNUQ7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVPNEMsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCL0MsWUFBWSxFQUFFcEIsWUFBWTtnQkFDaEQsSUFBSXVCLFdBQVc7Z0JBRWYsSUFBSUgsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1sQixPQUFPa0IsY0FDUEMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDbkIsU0FBU0QsYUFBYWtFLFlBQVksQ0FBQ2hFLE9BQ25DQyxPQUFPa0IsY0FDUGpCLE9BQU87b0JBRWJtQixXQUFXLElBak9YeEIsU0FpT3dCQyxjQUFjQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFDNUQ7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVPNkMsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCaEQsWUFBWSxFQUFFaEIsSUFBSSxFQUFFSixZQUFZO2dCQUM3RCxJQUFNRSxPQUFPa0IsY0FDUEMsZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDbkIsU0FBU0QsYUFBYWtFLFlBQVksQ0FBQ2hFLE9BQ25DQyxPQUFPa0IsY0FDUEUsV0FBVyxJQTVPZnhCLFNBNE80QkMsY0FBY0MsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRWhFLE9BQU9tQjtZQUNUOzs7WUFFTzhDLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUUzQyxXQUFXO2dCQUNyRSxJQUFNLEFBQUU0QyxPQUFTQyxhQUFJLENBQWJELE1BQ0ZFLFdBQVc5RSxjQUFjMkUsMEJBQ3pCbEQsZUFBZXZCLGtCQUFrQnlFLDBCQUNqQ2pELGVBQWVDLElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q3BCLGVBQWU2RCxjQUFZLENBQUNDLGVBQWUsQ0FBQ25DLGNBQzVDVCxpQkFBaUJTLFlBQVl1QyxZQUFZLENBQUM5QyxlQUMxQ25CLFNBQVNpQixnQkFDVGhCLE9BQU9rQixjQUNQakIsT0FBT2tCLGNBQ1BqQixPQUFPbUUsS0FBS0csWUFBWSxDQUFDRCxVQUFVekUsZUFDbkN1QixXQUFXLElBNVBmeEIsU0E0UDRCQyxjQUFjQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFFaEUsT0FBT21CO1lBQ1Q7OztXQS9QSXhCOztBQWtRTjRFLE9BQU9DLE1BQU0sQ0FBQ0osYUFBSSxFQUFFO0lBQ2xCekUsVUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU2dFLGFBQWFULElBQUksRUFBRTNCLFdBQVc7SUFDckMsSUFBSSxBQUFFdkIsT0FBU2tELEtBQVRsRDtJQUVOLElBQU0sQUFBRUQsT0FBU0MsS0FBVEQsTUFDRjJCLFdBQVczQixNQUFPLEdBQUc7SUFFM0JDLE9BQU91QixZQUFZSSxrQkFBa0IsQ0FBQ0Q7SUFFdEMsT0FBTzFCO0FBQ1Q7QUFFQSxTQUFTMkMseUJBQXlCTixRQUFRLEVBQUV6QyxZQUFZO0lBQ3RELElBQUk4QyxlQUFlO0lBRW5CLElBQU1tQixtQkFBbUJuRSxzQkFBc0IyQztJQUUvQyxJQUFJd0IscUJBQXFCLE1BQU07UUFDN0IsSUFBTVksbUJBQW1CdkQsSUFBQUEsa0NBQTRCLEVBQUMyQztRQUV0RG5CLGVBQWU5QyxhQUFhd0IsMEJBQTBCLENBQUNxRDtJQUN6RDtJQUVBLE9BQU8vQjtBQUNUIn0=