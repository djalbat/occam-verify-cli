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
var _default = (0, _dom.domAssigned)((_MetavariableDeclaration = /*#__PURE__*/ function() {
    function MetavariableDeclaration(context, node, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                var verifies;
                var metavariableDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."), this.node);
                var metavariableVerifies = this.verifyMetavariable(this.metavariable);
                if (metavariableVerifies) {
                    this.context.addMetavariable(this.metavariable);
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerifies;
                if (type === null) {
                    typeVerifies = true;
                } else {
                    var typeName = type.getName(), typeString = type.getString();
                    this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                    var typePresent = this.context.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        this.context.debug("...verified the '".concat(typeString, "' type."), this.node);
                    }
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerifies = false;
                var metavariableString = metavariable.getString();
                this.context.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."), this.node);
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    this.context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."), this.node);
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = this.context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.context.debug("The '".concat(metavariableName, "' metavariable is already present."), this.node);
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    this.context.debug("...verified the '".concat(metavariableString, "' metavariable when declared."), this.node);
                }
                return metavariableVerifies;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var Metavariable = _dom.default.Metavariable, node = metavariableDeclarationNode, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavariable);
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
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var MetaType = _dom.default.MetaType, metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmFkZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0eXBlVmVyaWZpZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke21ldGF2YXJpYWJsZVN0cmluZ306JHttZXRhVHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlIiwidHlwZVZlcmlmaWVzIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVN0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZ2V0VHlwZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJtZXRhVHlwZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJmcm9tTWV0YVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlo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