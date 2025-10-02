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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
            key: "getReleaseTypes",
            value: function getReleaseTypes() {
                var includeDependencies = false, includeRelease = false, releaseContext = this.getReleaseContext(), contextTypes = this.context.getTypes(includeRelease), releaseContextTypes = releaseContext.getTypes(includeDependencies), releaseTypes = _to_consumable_array(contextTypes).concat(_to_consumable_array(releaseContextTypes));
                return releaseTypes;
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
                var complexTypeString = this.type.getString();
                this.context.trace("Verifying the '".concat(complexTypeString, "' complex type..."), this.node);
                var typeName = this.type.getName(), releaseTypes = this.getReleaseTypes(), typePresent = releaseTypes.some(function(releaseType) {
                    var releaseTypeNameMatches = releaseType.matchTypeName(typeName);
                    if (releaseTypeNameMatches) {
                        return true;
                    }
                });
                if (typePresent) {
                    this.context.debug("The type '".concat(complexTypeString, "' is already present in the package."), this.node);
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(complexTypeString, "' complex type."), this.node);
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
                var typeName = this.type.getName(), superTypesLength = superTypes.length;
                if (superTypesLength === 0) {
                    var type = this.context.findTypeByTypeName(typeName);
                    if (type === null) {
                        var superType = _type.objectType; ///
                        superTypes.push(superType);
                    }
                }
                var typeBasic = this.type.isBasic(), typeString = this.type.getString();
                if (typeBasic) {
                    superTypesVerify = true;
                    this.context.trace("The '".concat(typeString, "' type is basic., this.node"));
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.context.trace("The '".concat(typeName, "' type cannot be a super-type "), this.node);
                    } else {
                        if (superTypesLength === 0) {
                            var type1 = this.context.findTypeByTypeName(typeName), superType1 = type1; ///
                            superTypes.push(superType1);
                        }
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
                            var typeName1 = this.type.getName(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName1, superTypes);
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
                var propertyIdentifier = property.getIdentifier(), count = properties.reduce(function(count, property) {
                    var propertyIdentifierMatches = property.matchPropertyIdentifier(propertyIdentifier);
                    if (propertyIdentifierMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.context.debug("The '".concat(propertyString, "' property appears more than once."), this.node);
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyIdentifierMatches = superTypeProperty.matchPropertyIdentifier(propertyIdentifier);
                        if (propertyIdentifierMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICBnZXRSZWxlYXNlVHlwZXMoKSB7XG4gICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dFR5cGVzID0gdGhpcy5jb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgcmVsZWFzZVR5cGVzID0gW1xuICAgICAgICAgICAgLi4uY29udGV4dFR5cGVzLFxuICAgICAgICAgICAgLi4ucmVsZWFzZUNvbnRleHRUeXBlc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gcmVsZWFzZVR5cGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VUeXBlcyA9IHRoaXMuZ2V0UmVsZWFzZVR5cGVzKCksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSByZWxlYXNlVHlwZXMuc29tZSgocmVsZWFzZVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VUeXBlTmFtZU1hdGNoZXMgPSByZWxlYXNlVHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJlbGVhc2VUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhY2thZ2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5ID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYmFzaWMuLCB0aGlzLm5vZGVgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZU5hbWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSA9IHN1cGVyVHlwZU5hbWVzLmluY2x1ZGVzKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgY2Fubm90IGJlIGEgc3VwZXItdHlwZSBgLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICAgICAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlcy5tYXAoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3RyaW5nKHN0cmluZyk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcy5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHByb3BlcnR5SWRlbnRpZmllciA9IHByb3BlcnR5LmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFByb3BlcnR5SWRlbnRpZmllcihwcm9wZXJ0eUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlJZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHkgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLmZpbmQoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5SWRlbnRpZmllcihwcm9wZXJ0eUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUlkZW50aWZpZXJNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgbWF0Y2hlcyB0aGUgc3VwZXItdHlwZSdzICcke3N1cGVyVHlwZVByb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0aGlzLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYHZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpXG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKSB7XG4gICAgbGV0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG8ocHJvcGVydHlUeXBlKTtcblxuICAgIGlmICh0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSkge1xuICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidHlwZSIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZVR5cGVzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImluY2x1ZGVSZWxlYXNlIiwicmVsZWFzZUNvbnRleHQiLCJjb250ZXh0VHlwZXMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJyZWxlYXNlVHlwZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwiY29tcGxleFR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsInNvbWUiLCJyZWxlYXNlVHlwZSIsInJlbGVhc2VUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInB1c2giLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwidHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWVzIiwibWFwIiwic3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lIiwiaW5jbHVkZXMiLCJldmVyeSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwic2V0U3RyaW5nIiwic2V0U3VwZXJUeXBlcyIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5SWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaFByb3BlcnR5SWRlbnRpZmllciIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwic2V0VHlwZSIsInR5cGVOYW1lTWF0Y2hlcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIs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