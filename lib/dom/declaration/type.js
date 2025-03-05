"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    superTypeStringFromSuperType: function() {
        return superTypeStringFromSuperType;
    },
    superTypesStringFromSuperTypes: function() {
        return superTypesStringFromSuperTypes;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
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
var _TypeDeclaration;
var _default = (0, _dom.domAssigned)((_TypeDeclaration = /*#__PURE__*/ function() {
    function TypeDeclaration(fileContext, string, type) {
        _class_call_check(this, TypeDeclaration);
        this.fileContext = fileContext;
        this.string = string;
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
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var typeDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerified = this.verifyType();
                if (typeVerified) {
                    var superTypesVerified = this.verifySuperTypes();
                    if (superTypesVerified) {
                        var superTypes;
                        superTypes = this.type.getSuperTypes();
                        superTypes = superTypes.map(function(superType) {
                            var superTypeName = superType.getName();
                            superType = _this.fileContext.findTypeByTypeName(superTypeName);
                            return superType;
                        });
                        this.type.setSuperTypes(superTypes);
                        this.fileContext.addType(this.type);
                        verified = true;
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerified = false;
                var typeName = this.type.getName();
                this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(typeName, "' is already present."));
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerified;
                var typeName = this.type.getString(), superTypeString = superTypeStringFromSuperType(superType);
                this.fileContext.trace("Verifying the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                superTypeVerified = superTypePresent; ///
                if (superTypeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type."));
                }
                return superTypeVerified;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified = true;
                var typeName = this.type.getString(), superTypes = this.type.getSuperTypes(), superTypesString = superTypesStringFromSuperTypes(superTypes);
                this.fileContext.trace("Verifying the '".concat(typeName, "' type's ").concat(superTypesString, " super-types..."));
                superTypesVerified = superTypes.every(function(superType) {
                    var superTypeVerified = _this.verifySuperType(superType);
                    if (superTypeVerified) {
                        return true;
                    }
                });
                if (superTypesVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type's ").concat(superTypesString, " super-types."));
                }
                return superTypesVerified;
            }
        }
    ], [
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext), node = typeDeclarationNode, string = fileContext.nodeAsString(node), typeDeclaration = new TypeDeclaration(fileContext, string, type);
                return typeDeclaration;
            }
        }
    ]);
    return TypeDeclaration;
}(), _define_property(_TypeDeclaration, "name", "TypeDeclaration"), _TypeDeclaration));
function superTypeStringFromSuperType(superType) {
    var superTypeName = superType.getName(), superTypeString = superTypeName; ///
    return superTypeString;
}
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        var superTypeString = superTypeStringFromSuperType(superType);
        superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgc3VwZXJUeXBlVmVyaWZpZWQgPSBzdXBlclR5cGVQcmVzZW50OyAvLy9cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGVOYW1lOyAgLy8vXG5cbiAgcmV0dXJuIHN1cGVyVHlwZVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlU3RyaW5nRnJvbVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgc3VwZXJUeXBlc1N0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICcke3N1cGVyVHlwZVN0cmluZ30nYDtcblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbInN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUiLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJkb21Bc3NpZ25lZCIsIlR5cGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVkIiwidHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmaWVkIiwidmVyaWZ5U3VwZXJUeXBlcyIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwibWFwIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzZXRTdXBlclR5cGVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZWQiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVQcmVzZW50Iiwic3VwZXJUeXBlc1N0cmluZyIsImV2ZXJ5IiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0eXBlRGVjbGFyYXRpb24iLCJuYW1lIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFPQSxPQXdJRztlQXhJSDs7SUEwSWdCQSw0QkFBNEI7ZUFBNUJBOztJQU9BQyw4QkFBOEI7ZUFBOUJBOzs7MkRBdEpBO29CQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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