"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Variable;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _name = require("./utilities/name");
var _node = require("./utilities/node");
var _type = require("./type");
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = string, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser), variableName = (0, _name.variableNameFromVariableNode)(variableNode), node = variableNode, name = variableName, type = typeFromJSON(json, fileContext), variable = new Variable(string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, localContext) {
                var variable = null;
                if (variableNode !== null) {
                    var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, type = null;
                    variable = new Variable(string, node, name, type);
                }
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, localContext) {
                var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, variable = new Variable(string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = Type.fromTypeNode(typeNode, localContext), variable = new Variable(string, node, name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();
function typeFromJSON(json, fileContext) {
    var type = json.type;
    var name = type.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQge29iamVjdFR5cGV9IGZyb20gXCIuL3R5cGVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwidHlwZUZyb21KU09OIiwiZnJvbVZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwic2hpbSIsInR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjs0REFDUTtxQkFFQztvQkFDa0I7b0JBQ0c7b0JBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRGpCUDtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUxLUDs7WUFRbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lB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