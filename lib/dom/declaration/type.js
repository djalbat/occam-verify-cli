"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get superTypesStringFromSuperTypes () {
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
                var typeName = this.type.getName(), typeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (!typePresent) {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified;
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerified = true;
                } else {
                    var superTypes = this.type.getSuperTypes(), typeString = this.type.getString(), superTypesString = superTypesStringFromSuperTypes(superTypes);
                    this.fileContext.trace("Verifying the '".concat(typeString, "' type's ").concat(superTypesString, " super-types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeVerified = _this.verifySuperType(superType);
                        if (superTypeVerified) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        this.fileContext.debug("...verified the '".concat(typeString, "' type's ").concat(superTypesString, " super-types."));
                    }
                }
                return superTypesVerified;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerified;
                var superTypeObjectType = superType === _type.objectType;
                if (superTypeObjectType) {
                    superTypeVerified = true;
                } else {
                    var typeString = this.type.getString(), superTypeString = superType.getString();
                    this.fileContext.trace("Verifying the '".concat(typeString, "' type's '").concat(superTypeString, "' super-type..."));
                    var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                    superTypeVerified = superTypePresent; ///
                    if (superTypeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeString, "' type's '").concat(superTypeString, "' super-type."));
                    }
                }
                return superTypeVerified;
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
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        var superTypeString = superType.getString();
        superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUncyAke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyLXR5cGVzLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlT2JqZWN0VHlwZSA9IChzdXBlclR5cGUgPT09IG9iamVjdFR5cGUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZU9iamVjdFR5cGUpIHtcbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSBzdXBlclR5cGVQcmVzZW50OyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3VwZXJUeXBlc1N0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICcke3N1cGVyVHlwZVN0cmluZ30nYDtcblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImRvbUFzc2lnbmVkIiwiVHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ0eXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZpZWQiLCJ2ZXJpZnlTdXBlclR5cGVzIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJtYXAiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZXNTdHJpbmciLCJldmVyeSIsInN1cGVyVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlT2JqZWN0VHlwZSIsIm9iamVjdFR5cGUiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVQcmVzZW50IiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0eXBlRGVjbGFyYXRpb24iLCJuYW1lIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFPQTtlQUFBOztRQXFKZ0JBO2VBQUFBOzs7MkRBMUpBO29CQUVXOzs7Ozs7Ozs7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