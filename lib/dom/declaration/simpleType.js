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
var _SimpleTypeDeclaration;
var _default = (0, _dom.domAssigned)((_SimpleTypeDeclaration = /*#__PURE__*/ function() {
    function SimpleTypeDeclaration(context, node, string, type, prefixed) {
        _class_call_check(this, SimpleTypeDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.type = type;
        this.prefixed = prefixed;
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
            key: "isPrefixed",
            value: function isPrefixed() {
                return this.prefixed;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var simpleTypeDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."), this.node);
                if (this.prefixed) {
                    var typeString = this.type.getString();
                    this.context.trace("The '".concat(typeString, "' type is prefixed."));
                } else {
                    var typeVerifies = this.verifyType();
                    if (typeVerifies) {
                        var superTypesVerify = this.verifySuperTypes();
                        if (superTypesVerify) {
                            var typePrefix = this.context.getTypePrefix();
                            if (typePrefix !== null) {
                                var typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
                                this.type.setPrefixName(prefixName);
                            }
                            this.context.addType(this.type);
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration."), this.node);
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
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    this.context.trace("The '".concat(typeString, "' type is already present."), this.node);
                } else {
                    var prefixedTypeName = typeName, typePresent1 = this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        this.context.trace("The '".concat(typeString, "' type is already present."), this.node);
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    this.context.trace("...verified the '".concat(typeString, "' simple type."), this.node);
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
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeNameMatches = this.type.matchTypeName(typeName);
                if (typeNameMatches) {
                    this.context.trace("The super-type's name matches the ".concat(typeName, "' simple type's name."), this.node);
                } else {
                    var oldSuperType = superType;
                    superType = this.context.findTypeByNominalTypeName(nominalTypeName);
                    var superTypePresent = superType !== null;
                    if (superTypePresent) {
                        this.type.replaceSuperType(oldSuperType, newSuperType);
                        superTypeVerifies = true;
                    }
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
                var superTypesVerify;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' simple type's super-types..."), this.node);
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    this.context.trace("The '".concat(typeString, "' simple type is basic."), this.node);
                } else {
                    var superTypes = this.type.getSuperTypes();
                    superTypesVerify = superTypes.every(function(superType) {
                        var superTypeVerifies = _this.verifySuperType(superType);
                        if (superTypeVerifies) {
                            return true;
                        }
                    });
                }
                if (superTypesVerify) {
                    this.context.debug("...verified the '".concat(typeString, "' simple type's super-types."), this.node);
                }
                return superTypesVerify;
            }
        }
    ], [
        {
            key: "fromSimpleTypeDeclarationNode",
            value: function fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
                var Type = _dom.default.Type, type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context), node = simpleTypeDeclarationNode, prefixed = simpleTypeDeclarationNode.isPrefixed(), typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type.stringFromTypeNameTypePrefixNameAndSuperTypes)(typeName, typePrefixName, superTypes), simpleTypeDeclaration = new SimpleTypeDeclaration(context, node, string, type, prefixed);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return SimpleTypeDeclaration;
}(), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSwgcHJlZml4ZWQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByZWZpeGVkID0gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhlZDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMucHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcHJlZml4TmFtZSA9IHR5cGVQcmVmaXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMudHlwZS5zZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHR5cGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy50eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgbWF0Y2hlcyB0aGUgJHt0eXBlTmFtZX0nIHNpbXBsZSB0eXBlJ3MgbmFtZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRTdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgIHN1cGVyVHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByZXNlbnQgPSAoc3VwZXJUeXBlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy50eXBlLnJlcGxhY2VTdXBlclR5cGUob2xkU3VwZXJUeXBlLCBuZXdTdXBlclR5cGUpO1xuXG4gICAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUncyBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZSBpcyBiYXNpYy5gLCB0aGlzLm5vZGUpXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUncyBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpbXBsZVR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHByZWZpeGVkID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZS5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVQcmVmaXhOYW1lKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFNpbXBsZVR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUsIHByZWZpeGVkKTtcblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlIiwicHJlZml4ZWQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJpc1ByZWZpeGVkIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVTdHJpbmciLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInByZWZpeE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInJlcGxhY2VTdXBlclR5cGUiLCJuZXdTdXBlclR5cGUiLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJldmVyeSIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJnZXRUeXBlUHJlZml4TmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFHOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5RCxXQUFlQSxJQUFBQSxnQkFBVywwQ0FBQzthQUFNQyxzQkFDbkJDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEbEJMO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxRQUFRO1lBQ3RCOzs7WUFFQU0s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