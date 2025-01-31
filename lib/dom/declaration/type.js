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
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified = true;
                var superTypes = this.type.getSuperTypes(), superTypesString = superTypesStringFromSuperTypes(superTypes);
                if (superTypesString !== null) {
                    var typeName = this.type.getString();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type's ").concat(superTypesString, " super types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeName = superType.getName(), superTypePresent = _this.fileContext.isTypePresentByTypeName(superTypeName);
                        if (superTypePresent) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type's ").concat(superTypesString, " super types."));
                    }
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
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        if (superType !== _type.objectType) {
            var superTypeName = superType.getName();
            superTypesString = superTypesString === null ? "'".concat(superTypeName, "'") : "".concat(superTypesString, ", '").concat(superTypeName, "'");
        }
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHtvYmplY3RUeXBlfSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgIGlmIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyIHR5cGVzLi4uYCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZSdzICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXIgdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlRGVjbGFyYXRpb24gPSBuZXcgVHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGlmIChzdXBlclR5cGUgIT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke3N1cGVyVHlwZU5hbWV9J2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVOYW1lfSdgO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsImRvbUFzc2lnbmVkIiwiVHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ0eXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZpZWQiLCJ2ZXJpZnlTdXBlclR5cGVzIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJtYXAiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJzdXBlclR5cGVzU3RyaW5nIiwiZXZlcnkiLCJzdXBlclR5cGVQcmVzZW50IiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0eXBlRGVjbGFyYXRpb24iLCJuYW1lIiwicmVkdWNlIiwib2JqZWN0VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7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