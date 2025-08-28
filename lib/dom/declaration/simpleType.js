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
var _type = require("../type");
var _type1 = require("../../utilities/type");
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
var _SimpleTypeDeclaration;
var _default = (0, _dom.domAssigned)((_SimpleTypeDeclaration = /*#__PURE__*/ function() {
    function SimpleTypeDeclaration(context, string, type) {
        _class_call_check(this, SimpleTypeDeclaration);
        this.context = context;
        this.string = string;
        this.type = type;
    }
    _create_class(SimpleTypeDeclaration, [
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
                this.context.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        this.context.addType(this.type);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' type..."));
                var typeName = this.type.getName(), typePresent = this.context.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.context.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var superTypeString = superType.getString();
                this.context.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.context.isTypePresentByTypeName(superTypeName);
                if (superTypePresent) {
                    superTypeVerifies = true;
                }
                if (superTypeVerifies) {
                    this.context.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify = false;
                this.context.trace("Verifying the super-types...");
                var superTypes;
                superTypes = this.type.getSuperTypes();
                var superTypesLength = superTypes.length;
                if (superTypesLength === 0) {
                    var superType = _type.objectType; ///
                    superTypes.push(superType);
                }
                var typeName = this.type.getName(), typeBasic = this.type.isBasic(), typeString = this.type.getString();
                if (typeBasic) {
                    superTypesVerify = true;
                    this.context.trace("The '".concat(typeString, "' type is basic."));
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.context.trace("The '".concat(typeName, "' type cannot be a super-type "));
                    } else {
                        superTypesVerify = superTypes.every(function(superType) {
                            var superTypeVerifies = _this.verifySuperType(superType);
                            if (superTypeVerifies) {
                                return true;
                            }
                        });
                        if (superTypesVerify) {
                            superTypes = superTypes.map(function(superType) {
                                var superTypeName = superType.getName();
                                superType = _this.context.findTypeByTypeName(superTypeName);
                                return superType;
                            });
                            var string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes);
                            this.type.setString(string);
                            this.type.setSuperTypes(superTypes);
                        }
                    }
                }
                if (superTypesVerify) {
                    this.context.debug("...verified the super-types.");
                }
                return superTypesVerify;
            }
        }
    ], [
        {
            key: "fromSimpleTypeDeclarationNode",
            value: function fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
                var Type = _dom.default.Type, type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, type);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return SimpleTypeDeclaration;
}(), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gb2JqZWN0VHlwZTsgLy8vXG5cbiAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lID0gc3VwZXJUeXBlTmFtZXMuaW5jbHVkZXModHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVOYW1lfScgdHlwZSBjYW5ub3QgYmUgYSBzdXBlci10eXBlIGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJvYmplY3RUeXBlIiwicHVzaCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVOYW1lcyIsIm1hcCIsInN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSIsImluY2x1ZGVzIiwiZXZlcnkiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyIsInNldFN0cmluZyIsInNldFN1cGVyVHlwZXMiLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29CQUVXO3FCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBELFdBQWVBLElBQUFBLGdCQUFXLDBDQUFDO2FBQU1DLHNCQUNuQkMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBREZIO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyx3QkFBd0IsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFbkQsSUFBSSxDQUFDSixPQUFPLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUF1QyxPQUF0QkQsdUJBQXNCO2dCQUUzRCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVTtnQkFFcEMsSUFBSUQsY0FBYztvQkFDaEIsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsZ0JBQWdCO29CQUU5QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElB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