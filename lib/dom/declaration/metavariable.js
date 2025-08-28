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
    function MetavariableDeclaration(context, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.context = context;
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
                this.context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."));
                var metavariableVerifies = this.verifyMetavariable(this.metavariable);
                if (metavariableVerifies) {
                    this.context.addMetavariable(this.metavariable);
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."));
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
                    this.context.trace("Verifying the '".concat(typeString, "' type..."));
                    var typePresent = this.context.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.context.debug("The '".concat(typeString, "' type is not present."));
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        this.context.debug("...verified the '".concat(typeString, "' type."));
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
                this.context.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    this.context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = this.context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.context.debug("The '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    this.context.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
                }
                return metavariableVerifies;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var Metavariable = _dom.default.Metavariable, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(context, string, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0eXBlVmVyaWZpZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTWV0YXZhcmlhYmxlQW5kTWV0YVR5cGUobWV0YXZhcmlhYmxlLCBtZXRhVHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAobWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmc7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHttZXRhdmFyaWFibGVTdHJpbmd9OiR7bWV0YVR5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZG9tLFxuICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlU3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZ2V0VHlwZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJtZXRhVHlwZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJmcm9tTWV0YVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyw0Q0FBQzthQUFNQyx3QkFDbkJDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dDQURWSDtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFB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