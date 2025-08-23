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
    function ComplexTypeDeclaration(fileContext, string, type) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.type = type;
    }
    _create_class(ComplexTypeDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
                return this.fileContext.getReleaseContext();
            }
        },
        {
            key: "getReleaseTypes",
            value: function getReleaseTypes() {
                var includeDependencies = false, includeRelease = false, releaseContext = this.getReleaseContext(), fileContextTypes = this.fileContext.getTypes(includeRelease), releaseContextTypes = releaseContext.getTypes(includeDependencies), releaseTypes = _to_consumable_array(fileContextTypes).concat(_to_consumable_array(releaseContextTypes));
                return releaseTypes;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var complexTypeDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
                var typeVerifies = this.verifyType();
                if (typeVerifies) {
                    var superTypesVerify = this.verifySuperTypes();
                    if (superTypesVerify) {
                        var propertiesVerify = this.verifyProperties();
                        if (propertiesVerify) {
                            this.fileContext.addType(this.type);
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    this.fileContext.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var complexTypeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeString, "' complex type..."));
                var typeName = this.type.getName(), releaseTypes = this.getReleaseTypes(), typePresent = releaseTypes.some(function(releaseType) {
                    var releaseTypeNameMatches = releaseType.matchTypeName(typeName);
                    if (releaseTypeNameMatches) {
                        return true;
                    }
                });
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(complexTypeString, "' is already present in the package."));
                } else {
                    typeVerifies = true;
                }
                if (typeVerifies) {
                    this.fileContext.debug("...verified the '".concat(complexTypeString, "' complex type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var superTypeString = superType.getString();
                this.fileContext.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                if (superTypePresent) {
                    superTypeVerifies = true;
                }
                if (superTypeVerifies) {
                    this.fileContext.debug("...verified the '".concat(superTypeString, "' super-type."));
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify = false;
                this.fileContext.trace("Verifying the super-types...");
                var superTypes;
                superTypes = this.type.getSuperTypes();
                var typeName = this.type.getName(), superTypesLength = superTypes.length;
                if (superTypesLength === 0) {
                    var type = this.fileContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        var superType = _type.objectType; ///
                        superTypes.push(superType);
                    }
                }
                var typeBasic = this.type.isBasic(), typeString = this.type.getString();
                if (typeBasic) {
                    superTypesVerify = true;
                    this.fileContext.trace("The '".concat(typeString, "' type is basic."));
                } else {
                    var superTypeNames = superTypes.map(function(superType) {
                        var superTypeName = superType.getName();
                        return superTypeName;
                    }), superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);
                    if (superTypeNamesIncludesTypeName) {
                        this.fileContext.trace("The '".concat(typeName, "' type cannot be a super-type "));
                    } else {
                        if (superTypesLength === 0) {
                            var type1 = this.fileContext.findTypeByTypeName(typeName), superType1 = type1; ///
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
                                superType = _this.fileContext.findTypeByTypeName(superTypeName);
                                return superType;
                            });
                            var typeName1 = this.type.getName(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName1, superTypes);
                            this.type.setString(string);
                            this.type.setSuperTypes(superTypes);
                        }
                    }
                }
                if (superTypesVerify) {
                    this.fileContext.debug("...verified the super-types.");
                }
                return superTypesVerify;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerifies = false;
                var propertyString = property.getString();
                this.fileContext.trace("Verifying the '".concat(propertyString, "' property..."));
                var propertyName = property.getName(), count = properties.reduce(function(count, property) {
                    var propertyNameMatches = property.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.fileContext.debug("The '".concat(propertyString, "' property appears more than once."));
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.fileContext.debug("The '".concat(propertyString, "' property matches the super-type's '").concat(superTypePropertyString, "' property."));
                    } else {
                        var propertyType;
                        propertyType = property.getType();
                        var propertyTypeVerifies = this.verifyPropertyType(propertyType);
                        if (propertyTypeVerifies) {
                            var propertyTypeName = propertyType.getName();
                            propertyType = this.fileContext.findTypeByTypeName(propertyTypeName);
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
                    this.fileContext.debug("verifies the '".concat(propertyString, "' property."));
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
                    this.fileContext.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);
                    if (!propertyTypePresent) {
                        var propertyTypeString1 = propertyType.getString();
                        this.fileContext.debug("The '".concat(propertyTypeString1, "' property type is not present."));
                    } else {
                        propertyTypeVerifies = true;
                    }
                    if (propertyTypeVerifies) {
                        this.fileContext.debug("...verified the '".concat(propertyTypeString, "' property type."));
                    }
                }
                return propertyTypeVerifies;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type1.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5maWxlQ29udGV4dC5nZXRSZWxlYXNlQ29udGV4dCgpOyB9XG5cbiAgZ2V0UmVsZWFzZVR5cGVzKCkge1xuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSB0aGlzLmZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgcmVsZWFzZVR5cGVzID0gW1xuICAgICAgICAgICAgLi4uZmlsZUNvbnRleHRUeXBlcyxcbiAgICAgICAgICAgIC4uLnJlbGVhc2VDb250ZXh0VHlwZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VUeXBlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZVR5cGVzID0gdGhpcy5nZXRSZWxlYXNlVHlwZXMoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHJlbGVhc2VUeXBlcy5zb21lKChyZWxlYXNlVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZVR5cGVOYW1lTWF0Y2hlcyA9IHJlbGVhc2VUeXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZVR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhY2thZ2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUgPSBzdXBlclR5cGVOYW1lcy5pbmNsdWRlcyh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVGhlICcke3R5cGVOYW1lfScgdHlwZSBjYW5ub3QgYmUgYSBzdXBlci10eXBlIGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgbWF0Y2hlcyB0aGUgc3VwZXItdHlwZSdzICcke3N1cGVyVHlwZVByb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvcGVydHlUeXBlO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHRoaXMudHlwZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYHZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcygpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmeTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKVxuXG4gICAgcHJvcGVydGllc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkocHJvcGVydHksIHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcGVydGllc1ZlcmlmeSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvKHByb3BlcnR5VHlwZSk7XG5cbiAgICBpZiAodHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXByb3BlcnR5VHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlVHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiaW5jbHVkZVJlbGVhc2UiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVDb250ZXh0VHlwZXMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJyZWxlYXNlVHlwZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwiY29tcGxleFR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsInNvbWUiLCJyZWxlYXNlVHlwZSIsInJlbGVhc2VUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInB1c2giLCJ0eXBlQmFzaWMiLCJpc0Jhc2ljIiwidHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWVzIiwibWFwIiwic3VwZXJUeXBlTmFtZXNJbmNsdWRlc1R5cGVOYW1lIiwiaW5jbHVkZXMiLCJldmVyeSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwic2V0U3RyaW5nIiwic2V0U3VwZXJUeXBlcyIsInZlcmlmeVByb3BlcnR5IiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHlwZUVxdWFsVG9Qcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtvQkFFVztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FETkg7UUFFN0IsSUFBSSxDQUFD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