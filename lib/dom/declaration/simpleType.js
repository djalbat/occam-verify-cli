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
    function SimpleTypeDeclaration(context, node, string, type) {
        _class_call_check(this, SimpleTypeDeclaration);
        this.context = context;
        this.node = node;
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
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                this.context.trace("Verifying the '".concat(typeDeclarationString, "' simple type declaration..."), this.node);
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        this.context.addType(this.type);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(typeDeclarationString, "' simple type declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' simple type..."), this.node);
                var typeName = this.type.getName(), typePresent = this.context.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is already present."), this.node);
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' simple type."), this.node);
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var superTypeString = superType.getString();
                this.context.trace("Verifying the '".concat(superTypeString, "' super-type..."), this.node);
                var superTypeName = superType.getName(), superTypePresent = this.context.isTypePresentByTypeName(superTypeName);
                if (superTypePresent) {
                    superTypeVerifies = true;
                }
                if (superTypeVerifies) {
                    this.context.debug("...verified the '".concat(superTypeString, "' super-type."), this.node);
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify = false;
                this.context.trace("Verifying the super-types...", this.node);
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
                    this.context.trace("The '".concat(typeString, "' simple type is basic."), this.node);
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.context.trace("The '".concat(typeName, "' simple type cannot be a super-type "), this.node);
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
                    this.context.debug("...verified the super-types.", this.node);
                }
                return superTypesVerify;
            }
        }
    ], [
        {
            key: "fromSimpleTypeDeclarationNode",
            value: function fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
                var Type = _dom.default.Type, node = simpleTypeDeclarationNode, type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), simpleTypeDeclaration = new SimpleTypeDeclaration(context, node, string, type);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return SimpleTypeDeclaration;
}(), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZSBpcyBiYXNpYy5gLCB0aGlzLm5vZGUpXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZU5hbWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSA9IHN1cGVyVHlwZU5hbWVzLmluY2x1ZGVzKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlTmFtZX0nIHNpbXBsZSB0eXBlIGNhbm5vdCBiZSBhIHN1cGVyLXR5cGUgYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gc2ltcGxlVHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidHlwZSIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJvYmplY3RUeXBlIiwicHVzaCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVOYW1lcyIsIm1hcCIsInN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSIsImluY2x1ZGVzIiwiZXZlcnkiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyIsInNldFN0cmluZyIsInNldFN1cGVyVHlwZXMiLCJmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29CQUVXO3FCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBELFdBQWVBLElBQUFBLGdCQUFXLDBDQUFDO2FBQU1DLHNCQUNuQkMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEUko7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FB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