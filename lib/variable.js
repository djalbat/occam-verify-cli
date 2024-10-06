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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(localContext) {
                var verifiedAtTopLevel;
                var variableString = this.string; ///
                localContext.trace("Verifying the '".concat(variableString, "' variable at top level..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = localContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    localContext.debug("The '".concat(variableString, "' variable is already present."));
                } else {
                    verifiedAtTopLevel = true;
                }
                if (verifiedAtTopLevel) {
                    localContext.debug("...verified the '".concat(variableString, "' variable at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = this.type !== null ? this.type.toJSON() : null, string = this.string, type = typeJSON, json = {
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
                var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, type = null, variable = new Variable(string, node, name, type);
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
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = typeNode === null ? _type.objectType : Type.fromTypeNode(typeNode, localContext), variable = new Variable(string, node, name, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGV9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gKHR5cGVOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdHlwZSxcbiAgICAgICAgdHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJtYXRjaE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsInR5cGVGcm9tSlNPTiIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsInNoaW0iLCJ0eXBlTm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIm9iamVjdFR5cGUiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7NERBQ1E7cUJBRUM7b0JBQ0M7b0JBQ2lCO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRGpCUDtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7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