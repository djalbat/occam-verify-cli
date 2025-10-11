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
var _ComplexTypeDeclaration;
var _default = (0, _dom.domAssigned)((_ComplexTypeDeclaration = /*#__PURE__*/ function() {
    function ComplexTypeDeclaration(context, node, string, type) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.type = type;
    }
    _create_class(ComplexTypeDeclaration, [
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
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.context.getReleaseContext();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var complexTypeDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."), this.node);
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        var propertiesVerify = this.verifyProperties();
                        if (propertiesVerify) {
                            this.context.addType(this.type);
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var typeString = this.type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' complex type..."), this.node);
                var typeName = this.type.getName(), typePresent = this.context.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is already present in the package."), this.node);
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' complex type."), this.node);
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
                    this.context.trace("The '".concat(typeString, "' complex type is basic."), this.node);
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.context.trace("The '".concat(typeName, "' complex type cannot be a super-type "), this.node);
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
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerifies = false;
                var propertyString = property.getString();
                this.context.trace("Verifying the '".concat(propertyString, "' property..."), this.node);
                var propertyName = property.getName(), count = properties.reduce(function(count, property) {
                    var propertyNameMatches = property.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.context.debug("The '".concat(propertyString, "' property appears more than once."), this.node);
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.context.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."), this.node);
                    } else {
                        var propertyType;
                        propertyType = property.getType();
                        var propertyTypeVerifies = this.verifyPropertyType(propertyType);
                        if (propertyTypeVerifies) {
                            var propertyTypeName = propertyType.getName();
                            propertyType = this.context.findTypeByTypeName(propertyTypeName);
                            var type = propertyType; ///
                            property.setType(type);
                            propertyVerifies = true;
                        }
                    }
                }
                if (propertyVerifies) {
                    var typeName = this.type.getName(), prefixed = true, typeNameMatches = property.matchTypeName(typeName, prefixed, this.context);
                    if (typeNameMatches) {
                        property.setType(this.type);
                    }
                    this.context.debug("verifies the '".concat(propertyString, "' property."), this.node);
                }
                return propertyVerifies;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties() {
                var _this = this;
                var propertiesVerify;
                var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes), superTypes = this.type.getSuperTypes();
                propertiesVerify = superTypes.every(function(superType) {
                    var superTypeProperties = superType.getProperties(), propertiesVerify = properties.every(function(property) {
                        var propertyVerifies = _this.verifyProperty(property, properties, superTypeProperties);
                        if (propertyVerifies) {
                            return true;
                        }
                    });
                    if (propertiesVerify) {
                        return true;
                    }
                });
                return propertiesVerify;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(propertyType) {
                var propertyTypeVerifies = false;
                var typeEqualToPropertyType = this.type.isEqualTo(propertyType);
                if (typeEqualToPropertyType) {
                    propertyTypeVerifies = true;
                } else {
                    var propertyTypeString = propertyType.getString(); ///
                    this.context.trace("Verifying the '".concat(propertyTypeString, "' property type..."), this.node);
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.context.isTypePresentByTypeName(propertyTypeName);
                    if (!propertyTypePresent) {
                        var propertyTypeString1 = propertyType.getString();
                        this.context.debug("The '".concat(propertyTypeString1, "' property type is not present."), this.node);
                    } else {
                        propertyTypeVerifies = true;
                    }
                    if (propertyTypeVerifies) {
                        this.context.debug("...verified the '".concat(propertyTypeString, "' property type."), this.node);
                    }
                }
                return propertyTypeVerifies;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var Type = _dom.default.Type, node = complexTypeDeclarationNode, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), complexTypeDeclaration = new ComplexTypeDeclaration(context, node, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhY2thZ2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgdGhpcy5ub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUgPSBzdXBlclR5cGVOYW1lcy5pbmNsdWRlcyh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUgY2Fubm90IGJlIGEgc3VwZXItdHlwZSBgLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN1cGVyLXR5cGVzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlci10eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBwcmVmaXhlZCA9IHRydWUsXG4gICAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lLCBwcmVmaXhlZCwgdGhpcy5jb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHRoaXMudHlwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgdmVyaWZpZXMgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKClcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpIHtcbiAgICBsZXQgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUbyhwcm9wZXJ0eVR5cGUpO1xuXG4gICAgaWYgKHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50Iiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwib2JqZWN0VHlwZSIsInB1c2giLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwic3VwZXJUeXBlTmFtZXMiLCJtYXAiLCJzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUiLCJpbmNsdWRlcyIsImV2ZXJ5IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMiLCJzZXRTdHJpbmciLCJzZXRTdXBlclR5cGVzIiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlOYW1lIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJzdXBlclR5cGVQcm9wZXJ0eSIsImZpbmQiLCJzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlTmFtZSIsInNldFR5cGUiLCJwcmVmaXhlZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImdldFByb3BlcnRpZXMiLCJ0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5VHlwZVN0cmluZyIsInByb3BlcnR5VHlwZVByZXNlbnQiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29CQUVXO3FCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBELFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEUko7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBc0IsT0FBTyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1EsaUJBQWlCO1lBQUk7OztZQUUvREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsK0JBQStCLElBQUksQ0FBQ1QsTUFBTSxFQUFFLEdBQUc7Z0JBRXJELElBQUksQ0FBQ0YsT0FBTyxDQUFDWSxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QixrQ0FBZ0MsSUFBSSxDQUFDVixJQUFJO2dCQUUzRyxJQUFNWSxlQUFlLElBQUksQ0FBQ0MsVUFBVTtnQkFFcEMsSUFBSUQsY0FBYztvQkFDaEIsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsZ0JBQWdCO29CQUU5QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQU1FLG1CQUFtQixJQUFJLENBQUNDLGdCQUFnQjt3QkFFOUMsSUFBSUQsa0JBQWtCOzRCQUNwQixJQUFJLENBQUNqQixPQUFPLENBQUNtQixPQUFPLENBQUMsSUFBSSxDQUFDaEIsSUFBSTs0QkFFOUJPLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNWLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QlQsOEJBQTZCLGdDQUE4QixJQUFJLENBQUNWLElBQUk7Z0JBQzdHO2dCQUVBLE9BQU9TO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQsZUFBZTtnQkFFbkIsSUFBTVEsYUFBYSxJQUFJLENBQUNsQixJQUFJLENBQUNHLFNBQVM7Z0JBRXRDLElBQUksQ0FBQ04sT0FBTyxDQUFDWSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWFMsWUFBVyxzQkFBb0IsSUFBSSxDQUFDcEIsSUFBSTtnQkFFN0UsSUFBTXFCLFdBQVcsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsT0FBTyxJQUM1QkMsY0FBYyxJQUFJLENBQUN4QixPQUFPLENBQUN5Qix1QkFBdUIsQ0FBQ0g7Z0JBRXpELElBQUlFLGFBQWE7b0JBQ2YsSUFBSSxDQUFDeEIsT0FBTyxDQUFDb0IsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEMsWUFBVyw4Q0FBNEMsSUFBSSxDQUFDcEIsSUFBSTtnQkFDN0YsT0FBTztvQkFDTFksZUFBZTtnQkFDakI7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEIsSUFBSSxDQUFDYixPQUFPLENBQUNvQixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEMsWUFBVyxvQkFBa0IsSUFBSSxDQUFDcEIsSUFBSTtnQkFDL0U7Z0JBRUEsT0FBT1k7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFNBQVM7Z0JBQ3ZCLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUMsa0JBQWtCRixVQUFVckIsU0FBUztnQkFFM0MsSUFBSSxDQUFDTixPQUFPLENBQUNZLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQmlCLGlCQUFnQixvQkFBa0IsSUFBSSxDQUFDNUIsSUFBSTtnQkFFaEYsSUFBTTZCLGdCQUFnQkgsVUFBVUosT0FBTyxJQUNqQ1EsbUJBQW1CLElBQUksQ0FBQy9CLE9BQU8sQ0FBQ3lCLHVCQUF1QixDQUFDSztnQkFFOUQsSUFBSUMsa0JBQWtCO29CQUNwQkgsb0JBQW9CO2dCQUN0QjtnQkFFQSxJQUFJQSxtQkFBbUI7b0JBQ3JCLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlMsaUJBQWdCLGtCQUFnQixJQUFJLENBQUM1QixJQUFJO2dCQUNsRjtnQkFFQSxPQUFPMkI7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUQsbUJBQW1CO2dCQUV2QixJQUFJLENBQUNmLE9BQU8sQ0FBQ1ksS0FBSyxDQUFFLGdDQUErQixJQUFJLENBQUNYLElBQUk7Z0JBRTVELElBQUkrQjtnQkFFSkEsYUFBYSxJQUFJLENBQUM3QixJQUFJLENBQUM4QixhQUFhO2dCQUVwQyxJQUFNQyxtQkFBbUJGLFdBQVdHLE1BQU07Z0JBRTFDLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNUCxZQUFZUyxnQkFBVSxFQUFFLEdBQUc7b0JBRWpDSixXQUFXSyxJQUFJLENBQUNWO2dCQUNsQjtnQkFFQSxJQUFNTCxXQUFXLElBQUksQ0FBQ25CLElBQUksQ0FBQ29CLE9BQU8sSUFDNUJlLFlBQVksSUFBSSxDQUFDbkMsSUFBSSxDQUFDb0MsT0FBTyxJQUM3QmxCLGFBQWEsSUFBSSxDQUFDbEIsSUFBSSxDQUFDRyxTQUFTO2dCQUV0QyxJQUFJZ0MsV0FBVztvQkFDYnZCLG1CQUFtQjtvQkFFbkIsSUFBSSxDQUFDZixPQUFPLENBQUNZLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhTLFlBQVcsNkJBQTJCLElBQUksQ0FBQ3BCLElBQUk7Z0JBQzVFLE9BQVE7b0JBQ04sSUFBTXVDLGlCQUFpQlIsV0FBV1MsR0FBRyxDQUFDLFNBQUNkO3dCQUMvQixJQUFNRyxnQkFBZ0JILFVBQVVKLE9BQU87d0JBRXZDLE9BQU9PO29CQUNULElBQ0FZLGlDQUFpQ0YsZUFBZUcsUUFBUSxDQUFDckI7b0JBRS9ELElBQUlvQixnQ0FBZ0M7d0JBQ2xDLElBQUksQ0FBQzFDLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsUUFBZ0IsT0FBVFUsVUFBUywyQ0FBeUMsSUFBSSxDQUFDckIsSUFBSTtvQkFDeEYsT0FBTzt3QkFDTGMsbUJBQW1CaUIsV0FBV1ksS0FBSyxDQUFDLFNBQUNqQjs0QkFDbkMsSUFBTUMsb0JBQW9CLE1BQUtGLGVBQWUsQ0FBQ0M7NEJBRS9DLElBQUlDLG1CQUFtQjtnQ0FDckIsT0FBTzs0QkFDVDt3QkFDRjt3QkFFQSxJQUFJYixrQkFBa0I7NEJBQ3BCaUIsYUFBYUEsV0FBV1MsR0FBRyxDQUFDLFNBQUNkO2dDQUMzQixJQUFNRyxnQkFBZ0JILFVBQVVKLE9BQU87Z0NBRXZDSSxZQUFZLE1BQUszQixPQUFPLENBQUM2QyxrQkFBa0IsQ0FBQ2Y7Z0NBRTVDLE9BQU9IOzRCQUNUOzRCQUVBLElBQU16QixTQUFTNEMsSUFBQUEsMENBQW1DLEVBQUN4QixVQUFVVTs0QkFFN0QsSUFBSSxDQUFDN0IsSUFBSSxDQUFDNEMsU0FBUyxDQUFDN0M7NEJBRXBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDNkMsYUFBYSxDQUFDaEI7d0JBQzFCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlqQixrQkFBa0I7b0JBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDb0IsS0FBSyxDQUFFLGdDQUErQixJQUFJLENBQUNuQixJQUFJO2dCQUM5RDtnQkFFQSxPQUFPYztZQUNUOzs7WUFFQWtDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsbUJBQW1CO2dCQUN0RCxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLGlCQUFpQkosU0FBUzVDLFNBQVM7Z0JBRXpDLElBQUksQ0FBQ04sT0FBTyxDQUFDWSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZjBDLGdCQUFlLGtCQUFnQixJQUFJLENBQUNyRCxJQUFJO2dCQUU3RSxJQUFNc0QsZUFBZUwsU0FBUzNCLE9BQU8sSUFDL0JpQyxRQUFRTCxXQUFXTSxNQUFNLENBQUMsU0FBQ0QsT0FBT047b0JBQ2hDLElBQU1RLHNCQUFzQlIsU0FBU1MsaUJBQWlCLENBQUNKO29CQUV2RCxJQUFJRyxxQkFBcUI7d0JBQ3ZCRjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHO2dCQUVULElBQUlBLFFBQVEsR0FBRztvQkFDYixJQUFJLENBQUN4RCxPQUFPLENBQUNvQixLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFma0MsZ0JBQWUsdUNBQXFDLElBQUksQ0FBQ3JELElBQUk7Z0JBQzFGLE9BQU87b0JBQ0wsSUFBTTJELG9CQUFvQlIsb0JBQW9CUyxJQUFJLENBQUMsU0FBQ0Q7d0JBQ2xELElBQU1GLHNCQUFzQkUsa0JBQWtCRCxpQkFBaUIsQ0FBQ0o7d0JBRWhFLElBQUlHLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRixNQUFNO29CQUVOLElBQUlFLHNCQUFzQixNQUFNO3dCQUM5QixJQUFNRSwwQkFBMEJGLGtCQUFrQnRELFNBQVM7d0JBRTNELElBQUksQ0FBQ04sT0FBTyxDQUFDb0IsS0FBSyxDQUFDLEFBQUMsUUFBNkQwQyxPQUF0RFIsZ0JBQWUseUNBQStELE9BQXhCUSx5QkFBd0IsZ0JBQWMsSUFBSSxDQUFDN0QsSUFBSTtvQkFDbEksT0FBTzt3QkFDTCxJQUFJOEQ7d0JBRUpBLGVBQWViLFNBQVMzQyxPQUFPO3dCQUUvQixJQUFNeUQsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGO3dCQUVyRCxJQUFJQyxzQkFBc0I7NEJBQ3hCLElBQU1FLG1CQUFtQkgsYUFBYXhDLE9BQU87NEJBRTdDd0MsZUFBZSxJQUFJLENBQUMvRCxPQUFPLENBQUM2QyxrQkFBa0IsQ0FBQ3FCOzRCQUUvQyxJQUFNL0QsT0FBTzRELGNBQWUsR0FBRzs0QkFFL0JiLFNBQVNpQixPQUFPLENBQUNoRTs0QkFFakJrRCxtQkFBbUI7d0JBQ3JCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLGtCQUFrQjtvQkFDcEIsSUFBTS9CLFdBQVcsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsT0FBTyxJQUM1QjZDLFdBQVcsTUFDWEMsa0JBQWtCbkIsU0FBU29CLGFBQWEsQ0FBQ2hELFVBQVU4QyxVQUFVLElBQUksQ0FBQ3BFLE9BQU87b0JBRS9FLElBQUlxRSxpQkFBaUI7d0JBQ25CbkIsU0FBU2lCLE9BQU8sQ0FBQyxJQUFJLENBQUNoRSxJQUFJO29CQUM1QjtvQkFFQSxJQUFJLENBQUNILE9BQU8sQ0FBQ29CLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFma0MsZ0JBQWUsZ0JBQWMsSUFBSSxDQUFDckQsSUFBSTtnQkFDNUU7Z0JBRUEsT0FBT29EO1lBQ1Q7OztZQUVBbkMsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJRDtnQkFFSixJQUFNc0Qsb0JBQW9CLE9BQ3BCcEIsYUFBYSxJQUFJLENBQUNoRCxJQUFJLENBQUNxRSxhQUFhLENBQUNELG9CQUNyQ3ZDLGFBQWEsSUFBSSxDQUFDN0IsSUFBSSxDQUFDOEIsYUFBYTtnQkFFMUNoQixtQkFBbUJlLFdBQVdZLEtBQUssQ0FBQyxTQUFDakI7b0JBQ25DLElBQU15QixzQkFBc0J6QixVQUFVNkMsYUFBYSxJQUM3Q3ZELG1CQUFtQmtDLFdBQVdQLEtBQUssQ0FBQyxTQUFDTTt3QkFDbkMsSUFBTUcsbUJBQW1CLE1BQUtKLGNBQWMsQ0FBQ0MsVUFBVUMsWUFBWUM7d0JBRW5FLElBQUlDLGtCQUFrQjs0QkFDcEIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFTixJQUFJcEMsa0JBQWtCO3dCQUNwQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBZ0QsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkYsWUFBWTtnQkFDN0IsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNUywwQkFBMEIsSUFBSSxDQUFDdEUsSUFBSSxDQUFDdUUsU0FBUyxDQUFDWDtnQkFFcEQsSUFBSVUseUJBQXlCO29CQUMzQlQsdUJBQXVCO2dCQUN6QixPQUFRO29CQUNOLElBQU1XLHFCQUFxQlosYUFBYXpELFNBQVMsSUFBSSxHQUFHO29CQUV4RCxJQUFJLENBQUNOLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CK0Qsb0JBQW1CLHVCQUFxQixJQUFJLENBQUMxRSxJQUFJO29CQUV0RixJQUFNaUUsbUJBQW1CSCxhQUFheEMsT0FBTyxJQUN2Q3FELHNCQUFzQixJQUFJLENBQUM1RSxPQUFPLENBQUN5Qix1QkFBdUIsQ0FBQ3lDO29CQUVqRSxJQUFJLENBQUNVLHFCQUFxQjt3QkFDeEIsSUFBTUQsc0JBQXFCWixhQUFhekQsU0FBUzt3QkFFakQsSUFBSSxDQUFDTixPQUFPLENBQUNvQixLQUFLLENBQUMsQUFBQyxRQUEwQixPQUFuQnVELHFCQUFtQixvQ0FBa0MsSUFBSSxDQUFDMUUsSUFBSTtvQkFDM0YsT0FBTzt3QkFDTCtELHVCQUF1QjtvQkFDekI7b0JBRUEsSUFBSUEsc0JBQXNCO3dCQUN4QixJQUFJLENBQUNoRSxPQUFPLENBQUNvQixLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJ1RCxvQkFBbUIscUJBQW1CLElBQUksQ0FBQzFFLElBQUk7b0JBQ3hGO2dCQUNGO2dCQUVBLE9BQU8rRDtZQUNUOzs7O1lBSU9hLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUU5RSxPQUFPO2dCQUN2RSxJQUFNLEFBQUUrRSxPQUFTQyxZQUFHLENBQVpELE1BQ0Y5RSxPQUFPNkUsNEJBQ1AzRSxPQUFPNEUsS0FBS0YsOEJBQThCLENBQUNDLDRCQUE0QjlFLFVBQ3ZFc0IsV0FBV25CLEtBQUtvQixPQUFPLElBQ3ZCUyxhQUFhN0IsS0FBSzhCLGFBQWEsSUFDL0IvQixTQUFTNEMsSUFBQUEsMENBQW1DLEVBQUN4QixVQUFVVSxhQUN2RGlELHlCQUF5QixJQUFJbEYsdUJBQXVCQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFakYsT0FBTzhFO1lBQ1Q7Ozs7S0FaQSwwQ0FBT0MsUUFBTyJ9