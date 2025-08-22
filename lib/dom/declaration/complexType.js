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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5maWxlQ29udGV4dC5nZXRSZWxlYXNlQ29udGV4dCgpOyB9XG5cbiAgZ2V0UmVsZWFzZVR5cGVzKCkge1xuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSB0aGlzLmZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgcmVsZWFzZVR5cGVzID0gW1xuICAgICAgICAgICAgLi4uZmlsZUNvbnRleHRUeXBlcyxcbiAgICAgICAgICAgIC4uLnJlbGVhc2VDb250ZXh0VHlwZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VUeXBlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZVR5cGVzID0gdGhpcy5nZXRSZWxlYXNlVHlwZXMoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHJlbGVhc2VUeXBlcy5zb21lKChyZWxlYXNlVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZVR5cGVOYW1lTWF0Y2hlcyA9IHJlbGVhc2VUeXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZVR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhY2thZ2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnkgPSBmYWxzZTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3VwZXItdHlwZXMuLi5gKTtcblxuICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlc0xlbmd0aCA9IHN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuXG4gICAgICAgIHN1cGVyVHlwZXMucHVzaChzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHR5cGVCYXNpYyA9IHRoaXMudHlwZS5pc0Jhc2ljKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYmFzaWMuYClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUgPSBzdXBlclR5cGVOYW1lcy5pbmNsdWRlcyh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lc0luY2x1ZGVzVHlwZU5hbWUpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVGhlICcke3R5cGVOYW1lfScgdHlwZSBjYW5ub3QgYmUgYSBzdXBlci10eXBlIGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIHN1cGVyVHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgc3VwZXJUeXBlcy5wdXNoKHN1cGVyVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZShzdXBlclR5cGUpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXMubWFwKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCBzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdHJpbmcoc3RyaW5nKTtcblxuICAgICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdXBlci10eXBlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgbWF0Y2hlcyB0aGUgc3VwZXItdHlwZSdzICcke3N1cGVyVHlwZVByb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvcGVydHlUeXBlO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGB2ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMoKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZnk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJUeXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKClcblxuICAgIHByb3BlcnRpZXNWZXJpZnkgPSBzdXBlclR5cGVzLmV2ZXJ5KChzdXBlclR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmeSA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZnkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpIHtcbiAgICBsZXQgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUbyhwcm9wZXJ0eVR5cGUpO1xuXG4gICAgaWYgKHR5cGVFcXVhbFRvUHJvcGVydHlUeXBlKSB7XG4gICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0eXBlLmdldFN1cGVyVHlwZXMoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgc3VwZXJUeXBlcyksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZVR5cGVzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImluY2x1ZGVSZWxlYXNlIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlQ29udGV4dFR5cGVzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwicmVsZWFzZVR5cGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmeSIsInZlcmlmeVN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzVmVyaWZ5IiwidmVyaWZ5UHJvcGVydGllcyIsImFkZFR5cGUiLCJkZWJ1ZyIsImNvbXBsZXhUeXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVByZXNlbnQiLCJzb21lIiwicmVsZWFzZVR5cGUiLCJyZWxlYXNlVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInN1cGVyVHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInN1cGVyVHlwZXMiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm9iamVjdFR5cGUiLCJwdXNoIiwidHlwZUJhc2ljIiwiaXNCYXNpYyIsInR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lcyIsIm1hcCIsInN1cGVyVHlwZU5hbWVzSW5jbHVkZXNUeXBlTmFtZSIsImluY2x1ZGVzIiwiZXZlcnkiLCJzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyIsInNldFN0cmluZyIsInNldFN1cGVyVHlwZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWUiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwic2V0VHlwZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0JBRVc7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBELFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE5IO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFB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