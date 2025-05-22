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
    get superTypeStringFromSuperType () {
        return superTypeStringFromSuperType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZpZWQgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU9iamVjdFR5cGUgPSAoc3VwZXJUeXBlID09PSBvYmplY3RUeXBlKTtcblxuICAgIGlmIChzdXBlclR5cGVPYmplY3RUeXBlKSB7XG4gICAgICBzdXBlclR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlU3RyaW5nRnJvbVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlVmVyaWZpZWQgPSBzdXBlclR5cGVQcmVzZW50OyAvLy9cblxuICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlRGVjbGFyYXRpb24gPSBuZXcgVHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlTmFtZTsgIC8vL1xuXG4gIHJldHVybiBzdXBlclR5cGVTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZVN0cmluZ0Zyb21TdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgIHN1cGVyVHlwZXNTdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCcke3N1cGVyVHlwZVN0cmluZ30nYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVTdHJpbmd9J2A7XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJzdXBlclR5cGVTdHJpbmdGcm9tU3VwZXJUeXBlIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZG9tQXNzaWduZWQiLCJUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZXMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsIm1hcCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic2V0U3VwZXJUeXBlcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzU3RyaW5nIiwiZXZlcnkiLCJzdXBlclR5cGVWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZU9iamVjdFR5cGUiLCJvYmplY3RUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlUHJlc2VudCIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZURlY2xhcmF0aW9uIiwibmFtZSIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBT0E7ZUFBQTs7UUFvSmdCQTtlQUFBQTs7UUFPQUM7ZUFBQUE7OzsyREFoS0E7b0JBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUczQixXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyx3QkFBd0IsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFbkQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUF1QyxPQUF0QkQsdUJBQXNCO2dCQUUvRCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVTtnQkFFcEMsSUFBSUQsY0FBYztvQkFDaEIsSUFBTUUscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCO29CQUVoRCxJQUFJRCxvQkFBb0I7d0JBQ3RCLElBQUlFO3dCQUVKQSxhQUFhLElBQUksQ0FBQ1osSUFB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