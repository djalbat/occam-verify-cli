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
var _TypeDeclaration;
var _default = (0, _dom.domAssigned)((_TypeDeclaration = /*#__PURE__*/ function() {
    function TypeDeclaration(fileContext, type) {
        _class_call_check(this, TypeDeclaration);
        this.fileContext = fileContext;
        this.type = type;
    }
    _create_class(TypeDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.type.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var typeDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerified = this.verifyType(this.type);
                if (typeVerified) {
                    this.fileContext.addType(this.type);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified = false;
                var typeName = type.getName();
                this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(typeName, "' is not present."));
                } else {
                    var superType;
                    superType = type.getSuperType();
                    var superTypeName = superType.getName();
                    superType = this.fileContext.findTypeByTypeName(superTypeName);
                    if (superType === null) {
                        this.fileContext.debug("The super-type '".concat(superTypeName, "' is not present."));
                    } else {
                        type.setSuperType(superType);
                        typeVerified = true;
                    }
                }
                if (typeVerified) {
                    this.fileContext.debug("...typeVerified the '".concat(typeName, "' type."));
                }
                return typeVerified;
            }
        }
    ], [
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclaration = new TypeDeclaration(fileContext, type);
                return typeDeclaration;
            }
        }
    ]);
    return TypeDeclaration;
}(), _define_property(_TypeDeclaration, "name", "TypeDeclaration"), _TypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdHlwZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHRoaXMudHlwZSk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSB0eXBlLmdldFN1cGVyVHlwZSgpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3VwZXJUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlTmFtZX0nIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZS5zZXRTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnR5cGVWZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJzdXBlclR5cGUiLCJnZXRTdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsInR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7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