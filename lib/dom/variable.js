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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _term = /*#__PURE__*/ _interop_require_default(require("../substitution/term"));
var _query = require("../utilities/query");
var _type = require("./type");
var _name = require("../utilities/name");
var _json = require("../utilities/json");
var _variable = require("../nodeAndTokens/variable");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Variable;
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableDeclarationVariableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
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
                var variableString = variable.getString(), equalTo = variableString === this.string;
                return equalTo;
            }
        },
        {
            key: "isEffectivelyEqualToTerm",
            value: function isEffectivelyEqualToTerm(term, generalContext, specificContext) {
                var effectivelyEqualToTerm = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var termString = term.getString();
                    if (termString === this.string) {
                        effectivelyEqualToTerm = true;
                    }
                }
                return effectivelyEqualToTerm;
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
                    context.debug("...verified the '".concat(variableString, "' variable."));
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
                var effectivelyEqualToTerm = this.isEffectivelyEqualToTerm(term, generalContext, specificContext);
                if (effectivelyEqualToTerm) {
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
                var Type = _dom.default.Type, variableDeclarationTypeNode = variableDeclarationTypeNodeQuery(variableDeclarationNode), variableDeclarationVariableNode = variableDeclarationVariableNodeQuery(variableDeclarationNode), typeNode = variableDeclarationTypeNode, variableNode = variableDeclarationVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), context = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, context), variable = new Variable(string, node, name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGV9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4uL25vZGVBbmRUb2tlbnMvdmFyaWFibGVcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9ICh2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0VmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBlZmZlY3RpdmVseUVxdWFsVG9UZXJtID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKHRlcm1TdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIGVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZmZlY3RpdmVseUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBBICcke21ldGF2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCwgY29udGV4dHNSZXZlcnNlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0gPSB0aGlzLmlzRWZmZWN0aXZlbHlFcXVhbFRvVGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChlZmZlY3RpdmVseUVxdWFsVG9UZXJtKSB7XG4gICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvbi5pc1Rlcm1FcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY29udGV4dHNSZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dDtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmFyaWFibGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZSIsInZhcmlhYmxlU3RyaW5nIiwiZXF1YWxUbyIsImlzRWZmZWN0aXZlbHlFcXVhbFRvVGVybSIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImVmZmVjdGl2ZWx5RXF1YWxUb1Rlcm0iLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsInRlcm1TdHJpbmciLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0cmFjZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInVuaWZ5VGVybSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0c1JldmVyc2VkIiwidGVybVVuaWZpZWQiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlWYXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNUZXJtRXF1YWxUbyIsInRlcm1TdWJzdGl0dXRpb24iLCJUZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidHlwZUZyb21KU09OIiwiZnJvbVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwidmFyaWFibGVEZWNsYXJhdGlvblR5cGVOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZnJvbVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7MkRBZmdCOzREQUNTOzJEQUNJO3FCQUVIO29CQUNDO29CQUVpQjtvQkFDQzt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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