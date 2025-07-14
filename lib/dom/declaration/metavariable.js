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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _type = require("../type");
var _query = require("../../utilities/query");
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
var _MetavariableDeclaration;
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType");
var _default = (0, _dom.domAssigned)((_MetavariableDeclaration = /*#__PURE__*/ function() {
    function MetavariableDeclaration(fileContext, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metavariableDeclarationString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."));
                var metavariableVerified = this.verifyMetavariable(this.metavariable);
                if (metavariableVerified) {
                    this.fileContext.addMetavariable(this.metavariable);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified;
                if (type === null) {
                    typeVerified = true;
                } else {
                    if (type === _type.objectType) {
                        typeVerified = true;
                    } else {
                        var typeName = type.getName(), typeString = type.getString();
                        this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                        var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                        if (!typePresent) {
                            this.fileContext.debug("The '".concat(typeString, "' type is not present."));
                        } else {
                            typeVerified = true;
                        }
                        if (typeVerified) {
                            this.fileContext.debug("...verified the '".concat(typeString, "' type."));
                        }
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerified = false;
                var metavariableString = metavariable.getString();
                this.fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
                var metavariableNode = metavariable.getNode(), termNode = termNodeQuery(metavariableNode);
                if (termNode !== null) {
                    this.fileContext.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = this.fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.fileContext.debug("The '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var type = metavariable.getType(), typeVerified = this.verifyType(type);
                        metavariableVerified = typeVerified; ///
                    }
                }
                if (metavariableVerified) {
                    this.fileContext.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
                }
                return metavariableVerified;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var Metavariable = _dom.default.Metavariable, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(fileContext, string, metavariable);
                return metavariableDeclaration;
            }
        }
    ]);
    return MetavariableDeclaration;
}(), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));
function stringFromMetavariableAndMetaType(metavariable, metaType) {
    var string;
    var metavariableString = metavariable.getString();
    if (metaType === null) {
        string = metavariableString; ///
    } else {
        var metaTypeString = metaType.getString();
        string = "".concat(metavariableString, ":").concat(metaTypeString);
    }
    return string;
}
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    var MetaType = _dom.default.MetaType, metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGFUeXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7bWV0YXZhcmlhYmxlU3RyaW5nfToke21ldGFUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRUeXBlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZSIsImRvbSIsIm1ldGFUeXBlIiwibWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwic3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIiwibWV0YVR5cGVTdHJpbmciLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsImZyb21NZXRhVHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtvQkFFVztxQkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUVwQyxXQUFlRSxJQUFBQSxnQkFBVyw0Q0FBQzthQUFNQyx3QkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dDQURkSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOzs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsZ0NBQWdDLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRXRELElBQUksQ0FBQ0QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBK0MsT0FBOUJELCtCQUE4QjtnQkFFdkUsSUFBTUUsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDVCxZQUFZO2dCQUV0RSxJQUFJUSxzQkFBc0I7b0JBQ3hCLElBQUksQ0FBQ1YsV0FBVyxDQUFDWSxlQUFlLENBQUMsSUFBSSxDQUFDVixZQUFZO29CQUVsREssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1AsV0FBVyxDQUFDYSxLQUFLLENBQUMsQUFBQyxvQkFBaUQsT0FBOUJMLCtCQUE4QjtnQkFDM0U7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUlDO2dCQUVKLElBQUlELFNBQVMsTUFBTTtvQkFDakJDLGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBSUQsU0FBU0UsZ0JBQVUsRUFBRTt3QkFDdkJELGVBQWU7b0JBQ2pCLE9BQU87d0JBQ0wsSUFBTUUsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsYUFBYUwsS0FBS1gsU0FBUzt3QkFFakMsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYVyxZQUFXO3dCQUVwRCxJQUFNQyxjQUFjLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ3NCLHVCQUF1QixDQUFDSjt3QkFFN0QsSUFBSSxDQUFDRyxhQUFhOzRCQUNoQixJQUFJLENBQUNyQixXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhPLFlBQVc7d0JBQzVDLE9BQU87NEJBQ0xKLGVBQWU7d0JBQ2pCO3dCQUVBLElBQUlBLGNBQWM7NEJBQ2hCLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQ2EsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhPLFlBQVc7d0JBQ3hEO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVCxZQUFZO2dCQUM3QixJQUFJUSx1QkFBdUI7Z0JBRTNCLElBQU1hLHFCQUFxQnJCLGFBQWFFLFNBQVM7Z0JBRWpELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJjLG9CQUFtQjtnQkFFNUQsSUFBTUMsbUJBQW1CdEIsYUFBYXVCLE9BQU8sSUFDdkNDLFdBQVcvQixjQUFjNkI7Z0JBRS9CLElBQUlFLGFBQWEsTUFBTTtvQkFDckIsSUFBSSxDQUFDMUIsV0FBVyxDQUFDYSxLQUFLLENBQUMsQUFBQyw0QkFBOEMsT0FBbkJVLG9CQUFtQjtnQkFDeEUsT0FBTztvQkFDTCxJQUFNSSxtQkFBbUJ6QixhQUFhaUIsT0FBTyxJQUN2Q1Msc0JBQXNCLElBQUksQ0FBQzVCLFdBQVcsQ0FBQzZCLHVDQUF1QyxDQUFDRjtvQkFFckYsSUFBSUMscUJBQXFCO3dCQUN2QixJQUFJLENBQUM1QixXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLFFBQXdCLE9BQWpCYyxrQkFBaUI7b0JBQ2xELE9BQU87d0JBQ0wsSUFBTVosT0FBT2IsYUFBYTRCLE9BQU8sSUFDM0JkLGVBQWUsSUFBSSxDQUFDRixVQUFVLENBQUNDO3dCQUVyQ0wsdUJBQXVCTSxjQUFlLEdBQUc7b0JBQzNDO2dCQUNGO2dCQUVBLElBQUlOLHNCQUFzQjtvQkFDeEIsSUFBSSxDQUFDVixXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQlUsb0JBQW1CO2dCQUNoRTtnQkFFQSxPQUFPYjtZQUNUOzs7O1lBSU9xQixLQUFBQTttQkFBUCxTQUFPQSxnQ0FBZ0NDLDJCQUEyQixFQUFFaEMsV0FBVztnQkFDN0UsSUFBTSxBQUFFaUMsZUFBaUJDLFlBQUcsQ0FBcEJELGNBQ0ZFLFdBQVdDLHdDQUF3Q0osNkJBQTZCaEMsY0FDaEZFLGVBQWUrQixhQUFhRiwrQkFBK0IsQ0FBQ0MsNkJBQTZCaEMsY0FDekZDLFNBQVNvQyxrQ0FBa0NuQyxjQUFjaUMsV0FDekRHLDBCQUEwQixJQUFJdkMsd0JBQXdCQyxhQUFhQyxRQUFRQztnQkFFakYsT0FBT29DO1lBQ1Q7Ozs7S0FWQSwyQ0FBT0MsUUFBTztBQWFoQixTQUFTRixrQ0FBa0NuQyxZQUFZLEVBQUVpQyxRQUFRO0lBQy9ELElBQUlsQztJQUVKLElBQU1zQixxQkFBcUJyQixhQUFhRSxTQUFTO0lBRWpELElBQUkrQixhQUFhLE1BQU07UUFDckJsQyxTQUFTc0Isb0JBQW9CLEdBQUc7SUFDbEMsT0FBTztRQUNMLElBQU1pQixpQkFBaUJMLFNBQVMvQixTQUFTO1FBRXpDSCxTQUFTLEFBQUMsR0FBd0J1QyxPQUF0QmpCLG9CQUFtQixLQUFrQixPQUFmaUI7SUFDcEM7SUFFQSxPQUFPdkM7QUFDVDtBQUVBLFNBQVNtQyx3Q0FBd0NKLDJCQUEyQixFQUFFaEMsV0FBVztJQUN2RixJQUFNLEFBQUV5QyxXQUFhUCxZQUFHLENBQWhCTyxVQUNGQyxlQUFlN0Msa0JBQWtCbUMsOEJBQ2pDRyxXQUFXTSxTQUFTRSxnQkFBZ0IsQ0FBQ0QsY0FBYzFDO0lBRXpELE9BQU9tQztBQUNUIn0=