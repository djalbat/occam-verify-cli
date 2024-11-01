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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableDeclarationVariableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable");
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
            value: function isEssentiallyEqualToTerm(term, generalContext, specificContext) {
                var essentiallyEqualToTerm = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var termString = term.getString();
                    if (termString === this.string) {
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
                        fileContext.debug("A '".concat(metavariableName, "' variable is already present."));
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
                var termString = term.getString(), variableString = this.string; ///
                specificContext.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var essentiallyEqualToTerm = this.isEssentiallyEqualToTerm(term, generalContext, specificContext);
                if (essentiallyEqualToTerm) {
                    termUnified = true;
                } else {
                    var variable = this, substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);
                    if (substitutionPresent) {
                        var substitution = substitutions.findSubstitutionByVariable(variable), substitutionTermEqualToTerm = substitution.isTermEqualTo(term);
                        if (substitutionTermEqualToTerm) {
                            termUnified = true;
                        }
                    } else {
                        var context = contextsReversed ? generalContext : specificContext;
                        var variable1 = this, termSubstitution = _term.default.fromTernAndVariable(term, variable1, context), substitution1 = termSubstitution; ///
                        context = specificContext; ///
                        substitutions.addSubstitution(substitution1, context);
                        termUnified = true;
                    }
                }
                if (termUnified) {
                    specificContext.debug("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
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
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var variable = null;
                var termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var variableNode = termVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, string = context.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(string, node, name, type);
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
                var Type = _shim.default.Type, variableDeclarationTypeNode = variableDeclarationTypeNodeQuery(variableDeclarationNode), variableDeclarationVariableNode = variableDeclarationVariableNodeQuery(variableDeclarationNode), typeNode = variableDeclarationTypeNode, variableNode = variableDeclarationVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), context = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, context), variable = new Variable(string, node, name, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh2YXJpYWJsZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odmFyaWFibGUpIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHZhcmlhYmxlU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0Vzc2VudGlhbGx5RXF1YWxUb1Rlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBlc3NlbnRpYWxseUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKHRlcm1TdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIGVzc2VudGlhbGx5RXF1YWxUb1Rlcm0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlc3NlbnRpYWxseUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9OiR7dHlwZU5hbWV9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYEEgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0eXBlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0c1JldmVyc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZXNzZW50aWFsbHlFcXVhbFRvVGVybSA9IHRoaXMuaXNFc3NlbnRpYWxseUVxdWFsVG9UZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGVzc2VudGlhbGx5RXF1YWxUb1Rlcm0pIHtcbiAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5VmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uLmlzVGVybUVxdWFsVG8odGVybSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSkge1xuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjb250ZXh0c1JldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcodmFyaWFibGVTdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZTtcbiJdLCJuYW1lcyI6WyJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGVRdWVyeSIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZSIsImVxdWFsVG8iLCJ2YXJpYWJsZVN0cmluZyIsImlzRXNzZW50aWFsbHlFcXVhbFRvVGVybSIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImVzc2VudGlhbGx5RXF1YWxUb1Rlcm0iLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsInRlcm1TdHJpbmciLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0cmFjZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ0eXBlTmFtZSIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0c1JldmVyc2VkIiwidGVybVVuaWZpZWQiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNUZXJtRXF1YWxUbyIsInRlcm1TdWJzdGl0dXRpb24iLCJUZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwic2hpbSIsInZhcmlhYmxlRGVjbGFyYXRpb25UeXBlTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMlRBOzs7ZUFBQTs7OzJEQXpUaUI7NERBQ1E7MkRBQ0k7cUJBRUg7b0JBQ0M7b0JBQ2lCO29CQUNDO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENDLG1DQUFtQ0QsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NFLHVDQUF1Q0YsSUFBQUEsZ0JBQVMsRUFBQztBQUV2RCxJQUFBLEFBQU1HLHlCQUFOO2FBQU1BLFNBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRGhDSjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBTFZKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVk7Z0JBQzVCLElBQU1DLGNBQWVELGlCQUFpQixJQUFJLENBQUNSLElBQUk7Z0JBRS9DLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUTtnQkFDaEIsSUFBSUMsVUFBVTtnQkFFZCxJQUFJRCxhQUFhLE1BQU07b0JBQ3JCLElBQU1FLGlCQUFpQkYsU0FBU1QsU0FBUztvQkFFekNVLFVBQVdDLG1CQUFtQixJQUFJLENBQUNmLE1BQU07Z0JBQzNDO2dCQUVBLE9BQU9jO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDNUQsSUFBSUMseUJBQXlCO2dCQUU3QixJQUFNQyx5QkFBeUJILGVBQWVJLFdBQVcsSUFDbkRDLDBCQUEwQkosZ0JBQWdCRyxXQUFXO2dCQUUzRCxJQUFJRCwyQkFBMkJFLHlCQUF5QjtvQkFDdEQsSUFBTUMsYUFBYVAsS0FBS2IsU0FBUztvQkFFakMsSUFBSW9CLGVBQWUsSUFBSSxDQUFDeEIsTUFBTSxFQUFFO3dCQUM5Qm9CLHlCQUF5QjtvQkFDM0I7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQUlDO2dCQUVKLElBQU1aLGlCQUFpQixJQUFJLENBQUNmLE1BQU0sRUFBRSxHQUFHO2dCQUV2QzBCLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmYixnQkFBZTtnQkFFL0MsSUFBTUwsZUFBZSxJQUFJLENBQUNSLElBQUksRUFDeEJXLFdBQVdhLFFBQVFHLDBCQUEwQixDQUFDbkI7Z0JBRXBELElBQUlHLGFBQWEsTUFBTTtvQkFDckIsSUFBTVYsT0FBT1UsU0FBU04sT0FBTztvQkFFN0IsSUFBSSxDQUFDSixJQUFJLEdBQUdBO29CQUVad0IsV0FBVztnQkFDYixPQUFPO29CQUNMRCxRQUFRSSxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmZixnQkFBZTtnQkFDdkM7Z0JBRUEsSUFBSVksVUFBVTtvQkFDWixJQUFNSSxXQUFXLElBQUksQ0FBQzVCLElBQUksQ0FBQ0csT0FBTztvQkFFbENvQixRQUFRSSxLQUFLLENBQUMsQUFBQyxvQkFBcUNDLE9BQWxCaEIsZ0JBQWUsS0FBWSxPQUFUZ0IsVUFBUztnQkFDL0Q7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxXQUFXO2dCQUNwQixJQUFJQztnQkFFSixJQUFJLElBQUksQ0FBQy9CLElBQUksS0FBS2dDLGdCQUFVLEVBQUU7b0JBQzVCRCxlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU1ILFdBQVcsSUFBSSxDQUFDNUIsSUFBSSxDQUFDRyxPQUFPO29CQUVsQzJCLFlBQVlMLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFURyxVQUFTO29CQUU3QyxJQUFNNUIsT0FBTzhCLFlBQVlHLGtCQUFrQixDQUFDTDtvQkFFNUMsSUFBSTVCLFNBQVMsTUFBTTt3QkFDakI4QixZQUFZSCxLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUQyxVQUFTO29CQUNyQyxPQUFPO3dCQUNMLElBQUksQ0FBQzVCLElBQUksR0FBR0EsTUFBTSxHQUFHO3dCQUVyQitCLGVBQWU7b0JBQ2pCO29CQUVBLElBQUlBLGNBQWM7d0JBQ2hCRCxZQUFZSCxLQUFLLENBQUMsQUFBQyxvQkFBNEIsT0FBVEMsVUFBUztvQkFDakQ7Z0JBQ0Y7Z0JBRUEsT0FBT0c7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJKLFdBQVc7Z0JBQzVCLElBQUlLO2dCQUVKLElBQU12QixpQkFBaUIsSUFBSSxDQUFDZixNQUFNLEVBQUUsR0FBRztnQkFFdkNpQyxZQUFZTCxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZmIsZ0JBQWU7Z0JBRW5ELElBQU1MLGVBQWUsSUFBSSxDQUFDUixJQUFJLEVBQ3hCcUMsa0JBQWtCTixZQUFZTywrQkFBK0IsQ0FBQzlCO2dCQUVwRSxJQUFJNkIsaUJBQWlCO29CQUNuQk4sWUFBWUgsS0FBSyxDQUFDLEFBQUMsUUFBb0IsT0FBYnBCLGNBQWE7Z0JBQ3pDLE9BQU87b0JBQ0wsSUFBTStCLG1CQUFtQixJQUFJLENBQUN2QyxJQUFJLEVBQzVCd0Msc0JBQXNCVCxZQUFZVSx1Q0FBdUMsQ0FBQ0Y7b0JBRWhGLElBQUlDLHFCQUFxQjt3QkFDdkJULFlBQVlILEtBQUssQ0FBQyxBQUFDLE1BQXNCLE9BQWpCVyxrQkFBaUI7b0JBQzNDLE9BQU87d0JBQ0wsSUFBTVAsZUFBZSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0M7d0JBRXJDSyx1QkFBdUJKLGNBQWUsR0FBRztvQkFDM0M7Z0JBQ0Y7Z0JBRUEsSUFBSUksc0JBQXNCO29CQUN4QkwsWUFBWUgsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZmLGdCQUFlO2dCQUN2RDtnQkFFQSxPQUFPdUI7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVM0IsSUFBSSxFQUFFNEIsYUFBYSxFQUFFM0IsY0FBYyxFQUFFQyxlQUFlO29CQUFFMkIsbUJBQUFBLGlFQUFtQjtnQkFDakYsSUFBSUMsY0FBYztnQkFFbEIsSUFBTXZCLGFBQWFQLEtBQUtiLFNBQVMsSUFDM0JXLGlCQUFpQixJQUFJLENBQUNmLE1BQU0sRUFBRSxHQUFHO2dCQUV2Q21CLGdCQUFnQlMsS0FBSyxDQUFDLEFBQUMsaUJBQThDYixPQUE5QlMsWUFBVyxxQkFBa0MsT0FBZlQsZ0JBQWU7Z0JBRXBGLElBQU1LLHlCQUF5QixJQUFJLENBQUNKLHdCQUF3QixDQUFDQyxNQUFNQyxnQkFBZ0JDO2dCQUVuRixJQUFJQyx3QkFBd0I7b0JBQzFCMkIsY0FBYztnQkFDaEIsT0FBTztvQkFDTCxJQUFNbEMsV0FBVyxJQUFJLEVBQ2ZtQyxzQkFBc0JILGNBQWNJLCtCQUErQixDQUFDcEM7b0JBRTFFLElBQUltQyxxQkFBcUI7d0JBQ3ZCLElBQU1FLGVBQWVMLGNBQWNNLDBCQUEwQixDQUFDdEMsV0FDeER1Qyw4QkFBOEJGLGFBQWFHLGFBQWEsQ0FBQ3BDO3dCQUUvRCxJQUFJbUMsNkJBQTZCOzRCQUMvQkwsY0FBYzt3QkFDaEI7b0JBQ0YsT0FBTzt3QkFDTCxJQUFJckIsVUFBVW9CLG1CQUNFNUIsaUJBQ0VDO3dCQUVsQixJQUFNTixZQUFXLElBQUksRUFDZnlDLG1CQUFtQkMsYUFBZ0IsQ0FBQ0MsbUJBQW1CLENBQUN2QyxNQUFNSixXQUFVYSxVQUN4RXdCLGdCQUFlSSxrQkFBbUIsR0FBRzt3QkFFM0M1QixVQUFVUCxpQkFBa0IsR0FBRzt3QkFFL0IwQixjQUFjWSxlQUFlLENBQUNQLGVBQWN4Qjt3QkFFNUNxQixjQUFjO29CQUNoQjtnQkFDRjtnQkFFQSxJQUFJQSxhQUFhO29CQUNmNUIsZ0JBQWdCVyxLQUFLLENBQUMsQUFBQyxtQkFBZ0RmLE9BQTlCUyxZQUFXLHFCQUFrQyxPQUFmVCxnQkFBZTtnQkFDeEY7Z0JBRUEsT0FBT2dDO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUN6RCxJQUFJLEdBQ25DSCxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQkcsT0FBT3dELFVBQ1BFLE9BQU87b0JBQ0wxRCxNQUFBQTtvQkFDQUgsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzZEO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFNUIsV0FBVztnQkFDL0IsSUFBTSxBQUFFakMsU0FBVzZELEtBQVg3RCxRQUNGK0QsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNoQyxjQUM1Q1AsVUFBVXFDLGNBQ1ZoRCxpQkFBaUJmLFFBQ2pCa0UsZUFBZUMsSUFBQUEsd0NBQThCLEVBQUNwRCxnQkFBZ0JXLFVBQzlEaEIsZUFBZTBELElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q2pFLE9BQU9pRSxjQUNQaEUsT0FBT1EsY0FDUFAsT0FBT2tFLElBQUFBLGtCQUFZLEVBQUNSLE1BQU01QixjQUMxQnBCLFdBQVcsSUE3TmZkLFNBNk40QkMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRWxELE9BQU9VO1lBQ1Q7OztZQUVPeUQsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFN0MsT0FBTztnQkFDbkMsSUFBSWIsV0FBVztnQkFFZixJQUFNMkQsbUJBQW1CN0Usc0JBQXNCNEU7Z0JBRS9DLElBQUlDLHFCQUFxQixNQUFNO29CQUM3QixJQUFNTixlQUFlTSxrQkFDZjlELGVBQWUwRCxJQUFBQSxrQ0FBNEIsRUFBQ0YsZUFDNUNqRSxPQUFPaUUsY0FDUGxFLFNBQVMwQixRQUFRK0MsWUFBWSxDQUFDeEUsT0FDOUJDLE9BQU9RLGNBQ1BQLE9BQU87b0JBRWJVLFdBQVcsSUEvT1hkLFNBK093QkMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBQzlDO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPNkQsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCUixZQUFZLEVBQUV4QyxPQUFPO2dCQUMzQyxJQUFJYixXQUFXO2dCQUVmLElBQUlxRCxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTWpFLE9BQU9pRSxjQUNQeEQsZUFBZTBELElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q2xFLFNBQVMwQixRQUFRK0MsWUFBWSxDQUFDeEUsT0FDOUJDLE9BQU9RLGNBQ1BQLE9BQU87b0JBRWJVLFdBQVcsSUEvUFhkLFNBK1B3QkMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBQzlDO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPOEQsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCVCxZQUFZLEVBQUUvRCxJQUFJLEVBQUV1QixPQUFPO2dCQUN4RCxJQUFJYixXQUFXO2dCQUVmLElBQUlxRCxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTWpFLE9BQU9pRSxjQUNQeEQsZUFBZTBELElBQUFBLGtDQUE0QixFQUFDRixlQUM1Q2xFLFNBQVMwQixRQUFRK0MsWUFBWSxDQUFDeEUsT0FDOUJDLE9BQU9RLGNBQWUsR0FBRztvQkFFL0JHLFdBQVcsSUE5UVhkLFNBOFF3QkMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBQzlDO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPK0QsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRTVDLFdBQVc7Z0JBQ3JFLElBQU0sQUFBRTZDLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsOEJBQThCbkYsaUNBQWlDZ0YsMEJBQy9ESSxrQ0FBa0NuRixxQ0FBcUMrRSwwQkFDdkVLLFdBQVdGLDZCQUNYZCxlQUFlZSxpQ0FDZnZFLGVBQWUwRCxJQUFBQSxrQ0FBNEIsRUFBQ0YsZUFDNUN4QyxVQUFVc0MsY0FBWSxDQUFDQyxlQUFlLENBQUNoQyxjQUN2Q2xCLGlCQUFpQmtCLFlBQVl3QyxZQUFZLENBQUNQLGVBQzFDbEUsU0FBU2UsZ0JBQ1RkLE9BQU9pRSxjQUNQaEUsT0FBT1EsY0FDUFAsT0FBTzJFLEtBQUtLLFlBQVksQ0FBQ0QsVUFBVXhELFVBQ25DYixXQUFXLElBalNmZCxTQWlTNEJDLFFBQVFDLE1BQU1DLE1BQU1DO2dCQUVsRCxPQUFPVTtZQUNUOzs7V0FwU0lkOztBQXVTTnFGLE9BQU9DLE1BQU0sQ0FBQ04sYUFBSSxFQUFFO0lBQ2xCaEYsVUFBQUE7QUFDRjtJQUVBLFdBQWVBIn0=