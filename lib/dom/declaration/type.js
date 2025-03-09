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
                if (!typePresent) {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type."));
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
                    var typeName = this.type.getName(), superTypes = this.type.getSuperTypes(), superTypesString = superTypesStringFromSuperTypes(superTypes);
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
                    var typeName = this.type.getString(), superTypeString = superTypeStringFromSuperType(superType);
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type..."));
                    var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                    superTypeVerified = superTypePresent; ///
                    if (superTypeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type's '").concat(superTypeString, "' super-type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU9iamVjdFR5cGUgPSAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKTtcblxuICAgIGlmIChzdXBlclR5cGVPYmplY3RUeXBlKSB7XG4gICAgICBzdXBlclR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlU3RyaW5nRnJvbVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSBzdXBlclR5cGVQcmVzZW50OyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlRGVjbGFyYXRpb24gPSBuZXcgVHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGVTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgIHN1cGVyVHlwZXNTdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCcke3N1cGVyVHlwZVN0cmluZ30nYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVTdHJpbmd9J2A7XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZG9tQXNzaWduZWQiLCJUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZXMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsIm1hcCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzU3RyaW5nIiwiZXZlcnkiLCJzdXBlclR5cGVWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZU9iamVjdFR5cGUiLCJvYmplY3RUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlUHJlc2VudCIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZURlY2xhcmF0aW9uIiwibmFtZSIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT0EsT0FrSkc7ZUFsSkg7O0lBb0pnQkEsNEJBQTRCO2VBQTVCQTs7SUFPQUMsOEJBQThCO2VBQTlCQTs7OzJEQWhLQTtvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzNCLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE5IO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLHdCQUF3QixJQUFJLENBQUNKLFNBQVMsSUFBSSxHQUFHO2dCQUVuRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQXVDLE9BQXRCRCx1QkFBc0I7Z0JBRS9ELElBQU1FLGVBQWUsSUFBSSxDQUFDQyxVQUFVO2dCQUVwQyxJQUFJRCxjQUFjO29CQUNoQixJQUFNRSxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0I7b0JBRWhELElBQUlELG9CQUFvQjt3QkFDdEIsSUFBSUU7d0JB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