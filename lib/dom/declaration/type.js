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
                var verifies = false;
                var typeDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        this.fileContext.addType(this.type);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.fileContext.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var typeName = this.type.getName(), typeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.fileContext.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies;
                var superTypeString = superType.getString();
                this.fileContext.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                superTypeVerifies = superTypePresent; ///
                if (superTypeVerifies) {
                    this.fileContext.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                } else {
                    var superTypes;
                    superTypes = this.type.getSuperTypes();
                    var superTypesString = (0, _type.superTypesStringFromSuperTypes)(superTypes);
                    this.fileContext.trace("Verifying the ".concat(superTypesString, " super-types..."));
                    superTypesVerify = superTypes.every(function(superType) {
                        var superTypeVerifies = _this.verifySuperType(superType);
                        if (superTypeVerifies) {
                            return true;
                        }
                    });
                    if (superTypesVerify) {
                        superTypes = superTypes.map(function(superType) {
                            var superTypeName = superType.getName();
                            superType = _this.fileContext.findTypeByTypeName(superTypeName);
                            return superType;
                        });
                        this.type.setSuperTypes(superTypes);
                        this.fileContext.debug("...verified the ".concat(superTypesString, " super-types."));
                    }
                }
                return superTypesVerify;
            }
        }
    ], [
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), typeDeclaration = new TypeDeclaration(fileContext, string, type);
                return typeDeclaration;
            }
        }
    ]);
    return TypeDeclaration;
}(), _define_property(_TypeDeclaration, "name", "TypeDeclaration"), _TypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcztcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBzdXBlclR5cGVWZXJpZmllcyA9IHN1cGVyVHlwZVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyLXR5cGVzLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgdHlwZURlY2xhcmF0aW9uID0gbmV3IFR5cGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiB0eXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVTdHJpbmciLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJldmVyeSIsIm1hcCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwic3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMiLCJ0eXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHL0MsV0FBZUEsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyx3QkFBd0IsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFbkQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUF1QyxPQUF0QkQsdUJBQXNCO2dCQUUvRCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVTtnQkFFcEMsSUFBSUQsY0FBYztvQkFDaEIsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsZ0JBQWdCO29CQUU5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