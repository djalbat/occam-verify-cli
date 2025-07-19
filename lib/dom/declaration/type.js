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
var _type = require("../../utilities/type");
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
                var verified = false;
                var typeDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerified = this.verifyType();
                if (typeVerified) {
                    var superTypesVerified = this.verifySuperTypes();
                    if (superTypesVerified) {
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
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerified;
                var superTypeString = superType.getString();
                this.fileContext.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                superTypeVerified = superTypePresent; ///
                if (superTypeVerified) {
                    this.fileContext.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerified;
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
                    var superTypes;
                    superTypes = this.type.getSuperTypes();
                    var superTypesString = (0, _type.superTypesStringFromSuperTypes)(superTypes);
                    this.fileContext.trace("Verifying the ".concat(superTypesString, " super-types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeVerified = _this.verifySuperType(superType);
                        if (superTypeVerified) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        superTypes = superTypes.map(function(superType) {
                            var superTypeName = superType.getName();
                            superType = _this.fileContext.findTypeByTypeName(superTypeName);
                            return superType;
                        });
                        this.type.setSuperTypes(superTypes);
                        this.fileContext.debug("...verified the ".concat(superTypesString, " super-types."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBzdXBlclR5cGVWZXJpZmllZCA9IHN1cGVyVHlwZVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuLi5gKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmaWVkID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZpZWQpIHtcbiAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHN1cGVyVHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50eXBlLnNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlRGVjbGFyYXRpb24gPSBuZXcgVHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZmllZCIsInZlcmlmeVN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlU3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVkIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwiZXZlcnkiLCJtYXAiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzZXRTdXBlclR5cGVzIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJu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