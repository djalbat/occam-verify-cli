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
var _query = require("../../utilities/query");
var _type = require("../type");
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
                        var typeName = type.getName();
                        this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                        var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                        if (!typePresent) {
                            this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                        } else {
                            typeVerified = true;
                        }
                        if (typeVerified) {
                            this.fileContext.debug("...verified the '".concat(typeName, "' type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQge29iamVjdFR5cGV9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHR5cGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7bWV0YXZhcmlhYmxlU3RyaW5nfToke21ldGFUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImdldFR5cGUiLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwiZG9tIiwibWV0YVR5cGUiLCJtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJzdHJpbmdGcm9tTWV0YXZhcmlhYmxlQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiLCJtZXRhVHlwZVN0cmluZyIsIk1ldGFUeXBlIiwibWV0YVR5cGVOb2RlIiwiZnJvbU1ldGFUeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUVVO29CQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXBDLFdBQWVFLElBQUFBLGdCQUFXLDRDQUFDO2FBQU1DLHdCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0NBRGRIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxnQ0FBZ0MsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFdEQsSUFBSSxDQUFDRCxXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUErQyxPQUE5QkQsK0JBQThCO2dCQUV2RSxJQUFNRSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNULFlBQVk7Z0JBRXRFLElBQUlRLHNCQUFzQjtvQkFDeEIsSUFBSSxDQUFDVixXQUFXLENBQUNZLGVBQWUsQ0FBQyxJQUFJLENBQUNWLFlBQVk7b0JBRWxESyxXQUFXO2dC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