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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBwYWNrYWdlLmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSBzdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cblxuICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlU3RyaW5nfScgY29tcGxleCB0eXBlIGlzIGJhc2ljLmAsIHRoaXMubm9kZSlcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwZXJUeXBlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lID0gc3VwZXJUeXBlTmFtZXMuaW5jbHVkZXModHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVGhlICcke3R5cGVOYW1lfScgY29tcGxleCB0eXBlIGNhbm5vdCBiZSBhIHN1cGVyLXR5cGUgYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHkgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLmZpbmQoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgbWF0Y2hlcyB0aGUgc3VwZXItdHlwZSdzICcke3N1cGVyVHlwZVByb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0aGlzLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYHZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpXG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKSB7XG4gICAgbGV0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG8ocHJvcGVydHlUeXBlKTtcblxuICAgIGlmICh0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSkge1xuICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidHlwZSIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFJlbGVhc2VDb250ZXh0IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsIm9iamVjdFR5cGUiLCJwdXNoIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInN1cGVyVHlwZU5hbWVzIiwibWFwIiwic3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lIiwiaW5jbHVkZXMiLCJldmVyeSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwic2V0U3RyaW5nIiwic2V0U3VwZXJUeXBlcyIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRVc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQURSSjtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JC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