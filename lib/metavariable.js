"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metavariable;
    }
});
var _argument = /*#__PURE__*/ _interop_require_default(require("./argument"));
var _metaType = /*#__PURE__*/ _interop_require_default(require("./metaType"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
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
var argumentNodeQuery = (0, _query.nodeQuery)("/metavariable/argument"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable");
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(string, node, name, metaType) {
        _class_call_check(this, Metavariable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
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
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "getMetaTypeName",
            value: function getMetaTypeName() {
                var metaTypeName = this.metaType.getName();
                return metaTypeName;
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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.node.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var metavariableString = this.string; ///
                fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
                debugger;
                if (verified) {
                    fileContext.debug("...verified the '".concat(metavariableString, "' metavariable."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared = false;
                var metavariableString = this.string; ///
                fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
                var metavariableNode = this.node, metavariablePresent = fileContext.isMetavariablePresentByMetavariableNode(metavariableNode);
                if (metavariablePresent) {
                    fileContext.debug("The metavariable '".concat(metavariableString, "' is already present."));
                } else {
                    var argumentNode = argumentNodeQuery(metavariableNode), argument = _argument.default.fromArgumentNode(argumentNode, fileContext);
                    if (argument === null) {
                        verifiedWhenDeclared = true;
                    } else {
                        var argumentVerified = argument.verify(fileContext);
                        if (argumentVerified) {
                            verifiedWhenDeclared = true;
                        }
                    }
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
                }
                return verifiedWhenDeclared;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metaTypeJSON = this.metaType !== null ? this.metaType.toJSON() : null, string = this.string, metaType = metaTypeJSON, json = {
                    string: string,
                    metaType: metaType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariableString = string, metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), node = metavariableNode; ///
                var metaType = json.metaType;
                if (metaType !== null) {
                    json = metaType; ///
                    metaType = _metaType.default.fromJSON(json, fileContext);
                }
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, fileContext) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, string = fileContext.nodeAsString(node), metaType = null, metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNodeAndMetaType",
            value: function fromMetavariableNodeAndMetaType(metavariableNode, metaType, fileContext) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, string = fileContext.nodeAsString(node), metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metavariableNode = metavariableNodeQuery(metavariableDeclarationNode), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), localContext = _local.default.fromFileContext(fileContext), metavariableString = fileContext.nodeAsString(metavariableNode), string = metavariableString, node = metavariableNode, name = metavariableName, metaType = _metaType.default.fromMetaTypeNode(metaTypeNode, localContext), metavariable = new Metavariable(string, node, name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IE1ldGFUeXBlIGZyb20gXCIuL21ldGFUeXBlXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnRcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgZGVidWdnZXJcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXJndW1lbnRWZXJpZmllZCA9IGFyZ3VtZW50LnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9ICh0aGlzLm1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICAgIGpzb24gPSBtZXRhVHlwZTsgIC8vL1xuXG4gICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YVR5cGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwiYXJndW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwidmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnQiLCJBcmd1bWVudCIsImZyb21Bcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwiTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFUeXBlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGFUeXBlTm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhVHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OytEQVpBOytEQUNBOzREQUNJO3FCQUVDO29CQUMyQjtvQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsMkJBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRiw2QkFBTjthQUFNQSxhQUNQSyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQURyQlI7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFMQ1I7O1lBUW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTtt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