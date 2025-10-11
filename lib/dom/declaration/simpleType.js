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
                var simpleTypeDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."), this.node);
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        this.context.addType(this.type);
                        verifies = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vc2ltcGxlVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBzaW1wbGUgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwZXJUeXBlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlc1ZlcmlmeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIHN1cGVyLXR5cGVzLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gb2JqZWN0VHlwZTsgLy8vXG5cbiAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlIGlzIGJhc2ljLmAsIHRoaXMubm9kZSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lID0gc3VwZXJUeXBlTmFtZXMuaW5jbHVkZXModHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVOYW1lfScgc2ltcGxlIHR5cGUgY2Fubm90IGJlIGEgc3VwZXItdHlwZSBgLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN1cGVyLXR5cGVzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2ltcGxlVHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBTaW1wbGVUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2ltcGxlVHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsIm9iamVjdFR5cGUiLCJwdXNoIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZU5hbWVzIiwibWFwIiwic3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lIiwiaW5jbHVkZXMiLCJldmVyeSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwic2V0U3RyaW5nIiwic2V0U3VwZXJUeXBlcyIsImZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJzaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRVc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQVcsMENBQUM7YUFBTUMsc0JBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQURSSjtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFB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