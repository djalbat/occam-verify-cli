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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5sb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TG9jYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShsb2NhbENvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFibGU7XG5cbmZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICB0ZXJtVmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodGVybVZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZhcmlhYmxlO1xufSJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJWYXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsImdldExvY2FsQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwic3Vic3RpdHV0aW9ucyIsInRlcm1VbmlmaWVkIiwidGVybVN0cmluZyIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1WYXJpYWJsZSIsInRlcm1WYXJpYWJsZUZyb21UZXJtTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0eXBlRnJvbUpTT04iLCJmcm9tVmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJzaGltIiwidHlwZU5vZGUiLCJmcm9tVHlwZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa1FBOzs7ZUFBQTs7OzJEQWhRaUI7NERBQ1E7c0VBQ2U7cUJBRWQ7b0JBQ0M7b0JBQ2lCO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1HLHlCQUFOO2FBQU1BLFNBQ1FDLFlBQVksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEOUNMO1FBRUYsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLGNBQWMsR0FBRztRQUNyQyxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQU5WTDs7WUFTSk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dC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