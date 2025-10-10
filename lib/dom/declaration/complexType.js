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
                var complexTypeDeclarationString = this.getString();
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
                var typeName = this.type.getName(), includeDependencies = false, typePresent = this.context.isTypePresentByTypeName(typeName, includeDependencies);
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
                    var typeName = this.type.getName(), typeNameMatches = property.matchTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhY2thZ2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgc3VwZXJUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdXBlci10eXBlcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBsZXQgc3VwZXJUeXBlcztcblxuICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUgaXMgYmFzaWMuYCwgdGhpcy5ub2RlKVxuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUgPSBzdXBlclR5cGVOYW1lcy5pbmNsdWRlcyh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZU5hbWV9JyBjb21wbGV4IHR5cGUgY2Fubm90IGJlIGEgc3VwZXItdHlwZSBgLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN1cGVyLXR5cGVzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlci10eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHRoaXMudHlwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgdmVyaWZpZXMgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKClcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpIHtcbiAgICBsZXQgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUbyhwcm9wZXJ0eVR5cGUpO1xuXG4gICAgaWYgKHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsIm9iamVjdFR5cGUiLCJwdXNoIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZU5hbWVzIiwibWFwIiwic3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lIiwiaW5jbHVkZXMiLCJldmVyeSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwic2V0U3RyaW5nIiwic2V0U3VwZXJUeXBlcyIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRVc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQURSSjtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7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