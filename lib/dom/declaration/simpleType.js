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
                var typeName = this.type.getName(), typePresent = this.context.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.context.trace("The '".concat(typeString, "' type is already present."), this.node);
                } else {
                    typeVerifies = true;
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
                var typeName = this.type.getName(), superTypeName = superTypeString, typeNameMatches = typeName === superTypeName;
                if (typeNameMatches) {
                    this.context.trace("The super-type's name matches the ".concat(typeName, "' simple type's name."), this.node);
                } else {
                    var oldSuperType = superType; ///
                    superType = this.context.findTypeByTypeName(superTypeName);
                    var superTypePresent = superType !== null;
                    if (superTypePresent) {
                        var newSuperType = superType; ///
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
                this.context.trace("Verifying the super-types of the '".concat(typeString, "' simple type..."), this.node);
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
                    this.context.debug("...verified the super-types of the '".concat(typeString, "' simple type."), this.node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNpbXBsZVR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSwgcHJlZml4ZWQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByZWZpeGVkID0gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhlZDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2ltcGxlVHlwZURlY2xhcmF0aW9uU3RyaW5nfScgc2ltcGxlIHR5cGUgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMucHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBzaW1wbGUgdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gKHR5cGVOYW1lID09PSBzdXBlclR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlIHN1cGVyLXR5cGUncyBuYW1lIG1hdGNoZXMgdGhlICR7dHlwZU5hbWV9JyBzaW1wbGUgdHlwZSdzIG5hbWUuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlOyAvLy9cblxuICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJlc2VudCA9IChzdXBlclR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBuZXdTdXBlclR5cGUgPSBzdXBlclR5cGU7IC8vL1xuXG4gICAgICAgIHRoaXMudHlwZS5yZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMgb2YgdGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZSBpcyBiYXNpYy5gLCB0aGlzLm5vZGUpXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcyBvZiB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2ltcGxlVHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZShzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgcHJlZml4ZWQgPSBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb24gPSBuZXcgU2ltcGxlVHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSwgcHJlZml4ZWQpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInR5cGUiLCJwcmVmaXhlZCIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzUHJlZml4ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJvbGRTdXBlclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsImV2ZXJ5IiwiZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUQsV0FBZUEsSUFBQUEsZ0JBQVcsMENBQUM7YUFBTUMsc0JBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGxCTDtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNs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