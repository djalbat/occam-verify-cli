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
    function ComplexTypeDeclaration(context, string, type) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.context = context;
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
                this.context.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
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
                    this.context.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var complexTypeString = this.type.getString();
                this.context.trace("Verifying the '".concat(complexTypeString, "' complex type..."));
                var typeName = this.type.getName(), releaseTypes = this.getReleaseTypes(), typePresent = releaseTypes.some(function(releaseType) {
                    var releaseTypeNameMatches = releaseType.matchTypeName(typeName);
                    if (releaseTypeNameMatches) {
                        return true;
                    }
                });
                if (typePresent) {
                    this.context.debug("The type '".concat(complexTypeString, "' is already present in the package."));
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.context.debug("...verified the '".concat(complexTypeString, "' complex type."));
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
                    this.context.trace("The '".concat(typeString, "' type is basic."));
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.context.trace("The '".concat(typeName, "' type cannot be a super-type "));
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
                    this.context.debug("...verified the super-types.");
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerifies = false;
                var propertyString = property.getString();
                this.context.trace("Verifying the '".concat(propertyString, "' property..."));
                var propertyIdentifier = property.getIdentifier(), count = properties.reduce(function(count, property) {
                    var propertyIdentifierMatches = property.matchPropertyIdentifier(propertyIdentifier);
                    if (propertyIdentifierMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.context.debug("The '".concat(propertyString, "' property appears more than once."));
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyIdentifierMatches = superTypeProperty.matchPropertyIdentifier(propertyIdentifier);
                        if (propertyIdentifierMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.context.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."));
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
                    this.context.debug("verifies the '".concat(propertyString, "' property."));
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
                    this.context.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.context.isTypePresentByTypeName(propertyTypeName);
                    if (!propertyTypePresent) {
                        var propertyTypeString1 = propertyType.getString();
                        this.context.debug("The '".concat(propertyTypeString1, "' property type is not present."));
                    } else {
                        propertyTypeVerifies = true;
                    }
                    if (propertyTypeVerifies) {
                        this.context.debug("...verified the '".concat(propertyTypeString, "' property type."));
                    }
                }
                return propertyTypeVerifies;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
                var Type = _dom.default.Type, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), complexTypeDeclaration = new ComplexTypeDeclaration(context, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgdHlwZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRSZWxlYXNlQ29udGV4dCgpOyB9XG5cbiAgZ2V0UmVsZWFzZVR5cGVzKCkge1xuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpLFxuICAgICAgICAgIGNvbnRleHRUeXBlcyA9IHRoaXMuY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHJlbGVhc2VUeXBlcyA9IFtcbiAgICAgICAgICAgIC4uLmNvbnRleHRUeXBlcyxcbiAgICAgICAgICAgIC4uLnJlbGVhc2VDb250ZXh0VHlwZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VUeXBlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBjb21wbGV4IHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlVHlwZXMgPSB0aGlzLmdldFJlbGVhc2VUeXBlcygpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gcmVsZWFzZVR5cGVzLnNvbWUoKHJlbGVhc2VUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWxlYXNlVHlwZU5hbWVNYXRjaGVzID0gcmVsZWFzZVR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBwYWNrYWdlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzTGVuZ3RoID0gc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cblxuICAgICAgICBzdXBlclR5cGVzLnB1c2goc3VwZXJUeXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBpZiAodHlwZUJhc2ljKSB7XG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUgPSBzdXBlclR5cGVOYW1lcy5pbmNsdWRlcyh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGNhbm5vdCBiZSBhIHN1cGVyLXR5cGUgYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICBzdXBlclR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmeSkge1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN1cGVyLXR5cGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUlkZW50aWZpZXIgPSBwcm9wZXJ0eS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUlkZW50aWZpZXJNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eUlkZW50aWZpZXIocHJvcGVydHlJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlJZGVudGlmaWVyTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlJZGVudGlmaWVyKHByb3BlcnR5SWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlci10eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0aGlzLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYHZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKVxuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvKHByb3BlcnR5VHlwZSk7XG5cbiAgICBpZiAodHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwidHlwZSIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlVHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiaW5jbHVkZVJlbGVhc2UiLCJyZWxlYXNlQ29udGV4dCIsImNvbnRleHRUeXBlcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsInJlbGVhc2VUeXBlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInN1cGVyVHlwZXNWZXJpZnkiLCJ2ZXJpZnlTdXBlclR5cGVzIiwicHJvcGVydGllc1ZlcmlmeSIsInZlcmlmeVByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJjb21wbGV4VHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50Iiwic29tZSIsInJlbGVhc2VUeXBlIiwicmVsZWFzZVR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ2ZXJpZnlTdXBlclR5cGUiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVWZXJpZmllcyIsInN1cGVyVHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJvYmplY3RUeXBlIiwicHVzaCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJ0eXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZXMiLCJtYXAiLCJzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUiLCJpbmNsdWRlcyIsImV2ZXJ5Iiwic3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMiLCJzZXRTdHJpbmciLCJzZXRTdXBlclR5cGVzIiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwicHJvcGVydHlWZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlJZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlJZGVudGlmaWVyIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtvQkFFVztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FERkg7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdB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