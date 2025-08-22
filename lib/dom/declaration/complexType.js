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
                var typeName = this.type.getName(), complexTypeString = this.type.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeString, "' complex type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(complexTypeString, "' is already present."));
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
                var superTypeVerifies;
                var superTypeString = superType.getString();
                this.fileContext.trace("Verifying the '".concat(superTypeString, "' super-type..."));
                var superTypeName = superType.getName(), superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);
                superTypeVerifies = superTypePresent; ///
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
                var superTypesVerify;
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                } else {
                    var superTypes;
                    superTypes = this.type.getSuperTypes();
                    var superTypesString = (0, _type.superTypesStringFromSuperTypes)(superTypes);
                    this.fileContext.trace("Verifying the '".concat(superTypesString, " super-types..."));
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
                        this.type.setSuperTypes(superTypes);
                        this.fileContext.debug("...verified the' '".concat(superTypesString, " super-types."));
                    }
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
                var Type = _dom.default.Type, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), typeName = type.getName(), superTypes = type.getSuperTypes(), string = (0, _type.stringFromTypeNameNameAndSuperTypes)(typeName, superTypes), complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcywgc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cGVyVHlwZXMoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJvcGVydGllcygpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZVN0cmluZ30nIGNvbXBsZXggdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7Y29tcGxleFR5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlU3RyaW5nfScgY29tcGxleCB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgIHN1cGVyVHlwZVZlcmlmaWVzID0gc3VwZXJUeXBlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBzdXBlci10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cGVyVHlwZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZXNWZXJpZnk7XG5cbiAgICBjb25zdCB0eXBlQmFzaWMgPSB0aGlzLnR5cGUuaXNCYXNpYygpO1xuXG4gICAgaWYgKHR5cGVCYXNpYykge1xuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdXBlclR5cGVzO1xuXG4gICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlci10eXBlcy4uLmApO1xuXG4gICAgICBzdXBlclR5cGVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlVmVyaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBzdXBlclR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHlwZS5zZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZScgJyR7c3VwZXJUeXBlc1N0cmluZ30gc3VwZXItdHlwZXMuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHkgPSBzdXBlclR5cGVQcm9wZXJ0aWVzLmZpbmQoKHN1cGVyVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBzdXBlclR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyLXR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgdmVyaWZpZXMgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKCkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZ5O1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gdGhpcy50eXBlLmdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpXG5cbiAgICBwcm9wZXJ0aWVzVmVyaWZ5ID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZnkgPSBwcm9wZXJ0aWVzLmV2ZXJ5KChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZ5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKSB7XG4gICAgbGV0IHByb3BlcnR5VHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG8ocHJvcGVydHlUeXBlKTtcblxuICAgIGlmICh0eXBlRXF1YWxUb1Byb3BlcnR5VHlwZSkge1xuICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSAge1xuICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllcykge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gdHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpLFxuICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb24gPSBuZXcgQ29tcGxleFR5cGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCB0eXBlKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFR5cGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInByb3BlcnRpZXNWZXJpZnkiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiY29tcGxleFR5cGVTdHJpbmciLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5U3VwZXJUeXBlIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlVmVyaWZpZXMiLCJzdXBlclR5cGVTdHJpbmciLCJzdXBlclR5cGVOYW1lIiwic3VwZXJUeXBlUHJlc2VudCIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsInN1cGVyVHlwZXNTdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJldmVyeSIsIm1hcCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5IiwicHJvcGVydGllcyIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWUiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwic2V0VHlwZSIsImluY2x1ZGVTdXBlclR5cGVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVFcXVhbFRvUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsInN0cmluZ0Zyb21UeXBlTmFtZU5hbWVBbmRTdXBlclR5cGVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFHb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwRixXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLCtCQUErQixJQUFJLENBQUNKLFNBQVM7Z0JBRW5ELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QjtnQkFFdEUsSUFBTUUsZUFBZSxJQUFJLENBQUNDLFVBQVU7Z0JBRXBDLElBQUlELGNBQWM7b0JBQ2hCLElBQU1FLG1CQUFtQixJQUFJLENBQUNDLGdCQUFnQjtvQkFFOUMsSUFBSUQsa0JBQWtCO3dCQUNwQixJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0I7d0JBRTlDLElBQUlELGtCQUFrQjs0QkFDcEIsSUFBSSxDQUFDZCxXQUFXLENBQUNnQixPQUFPLENBQUMsSUFBSSxDQUFDZCxJQUFJOzRCQUVsQ0ssV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1AsV0FBVyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCVCw4QkFBNkI7Z0JBQzFFO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQsZUFBZTtnQkFFbkIsSUFBTVEsV0FBVyxJQUFJLENBQUNoQixJQUFJLENBQUNpQixPQUFPLElBQzVCQyxvQkFBb0IsSUFBSSxDQUFDbEIsSUFBSSxDQUFDRSxTQUFTO2dCQUU3QyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCVyxtQkFBa0I7Z0JBRTNELElBQU1DLGNBQWMsSUFBSSxDQUFDckIsV0FBVyxDQUFDc0IsdUJBQXVCLENBQUNKO2dCQUU3RCxJQUFJRyxhQUFhO29CQUNmLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLGFBQThCLE9BQWxCRyxtQkFBa0I7Z0JBQ3hELE9BQU87b0JBQ0xWLGVBQWU7Z0JBQ2pCO2dCQUVBLElBQUlBLGNBQWM7b0JBQ2hCLElBQUksQ0FBQ1YsV0FBVyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCRyxtQkFBa0I7Z0JBQy9EO2dCQUVBLE9BQU9WO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxTQUFTO2dCQUN2QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JGLFVBQVVwQixTQUFTO2dCQUUzQyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCaUIsaUJBQWdCO2dCQUV6RCxJQUFNQyxnQkFBZ0JILFVBQVVMLE9BQU8sSUFDakNTLG1CQUFtQixJQUFJLENBQUM1QixXQUFXLENBQUNzQix1QkFBdUIsQ0FBQ0s7Z0JBRWxFRixvQkFBb0JHLGtCQUFrQixHQUFHO2dCQUV6QyxJQUFJSCxtQkFBbUI7b0JBQ3JCLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlMsaUJBQWdCO2dCQUM3RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVosS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJRDtnQkFFSixJQUFNaUIsWUFBWSxJQUFJLENBQUMzQixJQUFJLENBQUM0QixPQUFPO2dCQUVuQyxJQUFJRCxXQUFXO29CQUNiakIsbUJBQW1CO2dCQUNyQixPQUFPO29CQUNMLElBQUltQjtvQkFFSkEsYUFBYSxJQUFJLENBQUM3QixJQUFJLENBQUM4QixhQUFhO29CQUVwQyxJQUFNQyxtQkFBbUJDLElBQUFBLG9DQUE4QixFQUFDSDtvQkFFeEQsSUFBSSxDQUFDL0IsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJ3QixrQkFBaUI7b0JBRTFEckIsbUJBQW1CbUIsV0FBV0ksS0FBSyxDQUFDLFNBQUNYO3dCQUNuQyxJQUFNQyxvQkFBb0IsTUFBS0YsZUFBZSxDQUFDQzt3QkFFL0MsSUFBSUMsbUJBQW1COzRCQUNyQixPQUFPO3dCQUNUO29CQUNGO29CQUVBLElBQUliLGtCQUFrQjt3QkFDcEJtQixhQUFhQSxXQUFXSyxHQUFHLENBQUMsU0FBQ1o7NEJBQzNCLElBQU1HLGdCQUFnQkgsVUFBVUwsT0FBTzs0QkFFdkNLLFlBQVksTUFBS3hCLFdBQVcsQ0FBQ3FDLGtCQUFrQixDQUFDVjs0QkFFaEQsT0FBT0g7d0JBQ1Q7d0JBRUEsSUFBSSxDQUFDdEIsSUFBSSxDQUFDb0MsYUFBYSxDQUFDUDt3QkFFeEIsSUFBSSxDQUFDL0IsV0FBVyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMscUJBQXFDLE9BQWpCZ0Isa0JBQWlCO29CQUMvRDtnQkFDRjtnQkFFQSxPQUFPckI7WUFDVDs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLG1CQUFtQjtnQkFDdEQsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxpQkFBaUJKLFNBQVNwQyxTQUFTO2dCQUV6QyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZtQyxnQkFBZTtnQkFFeEQsSUFBTUMsZUFBZUwsU0FBU3JCLE9BQU8sSUFDL0IyQixRQUFRTCxXQUFXTSxNQUFNLENBQUMsU0FBQ0QsT0FBT047b0JBQ2hDLElBQU1RLHNCQUFzQlIsU0FBU1MsaUJBQWlCLENBQUNKO29CQUV2RCxJQUFJRyxxQkFBcUI7d0JBQ3ZCRjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVCxHQUFHO2dCQUVULElBQUlBLFFBQVEsR0FBRztvQkFDYixJQUFJLENBQUM5QyxXQUFXLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmMkIsZ0JBQWU7Z0JBQ2hELE9BQU87b0JBQ0wsSUFBTU0sb0JBQW9CUixvQkFBb0JTLElBQUksQ0FBQyxTQUFDRDt3QkFDbEQsSUFBTUYsc0JBQXNCRSxrQkFBa0JELGlCQUFpQixDQUFDSjt3QkFFaEUsSUFBSUcscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGLE1BQU07b0JBRU4sSUFBSUUsc0JBQXNCLE1BQU07d0JBQzlCLElBQU1FLDBCQUEwQkYsa0JBQWtCOUMsU0FBUzt3QkFFM0QsSUFBSSxDQUFDSixXQUFXLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUE2RG1DLE9BQXREUixnQkFBZSx5Q0FBK0QsT0FBeEJRLHlCQUF3QjtvQkFDL0csT0FBTzt3QkFDTCxJQUFJQzt3QkFFSkEsZUFBZWIsU0FBU25DLE9BQU87d0JBRS9CLElBQU1pRCx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0Y7d0JBRXJELElBQUlDLHNCQUFzQjs0QkFDeEIsSUFBTUUsbUJBQW1CSCxhQUFhbEMsT0FBTzs0QkFFN0NrQyxlQUFlLElBQUksQ0FBQ3JELFdBQVcsQ0FBQ3FDLGtCQUFrQixDQUFDbUI7NEJBRW5ELElBQU10RCxPQUFPbUQsY0FBZSxHQUFHOzRCQUUvQmIsU0FBU2lCLE9BQU8sQ0FBQ3ZEOzRCQUVqQnlDLG1CQUFtQjt3QkFDckI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsa0JBQWtCO29CQUNwQixJQUFJLENBQUMzQyxXQUFXLENBQUNpQixLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZjJCLGdCQUFlO2dCQUN6RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQTVCLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUQ7Z0JBRUosSUFBTTRDLG9CQUFvQixPQUNwQmpCLGFBQWEsSUFBSSxDQUFDdkMsSUFBSSxDQUFDeUQsYUFBYSxDQUFDRCxvQkFDckMzQixhQUFhLElBQUksQ0FBQzdCLElBQUksQ0FBQzhCLGFBQWE7Z0JBRTFDbEIsbUJBQW1CaUIsV0FBV0ksS0FBSyxDQUFDLFNBQUNYO29CQUNuQyxJQUFNa0Isc0JBQXNCbEIsVUFBVW1DLGFBQWEsSUFDN0M3QyxtQkFBbUIyQixXQUFXTixLQUFLLENBQUMsU0FBQ0s7d0JBQ25DLElBQU1HLG1CQUFtQixNQUFLSixjQUFjLENBQUNDLFVBQVVDLFlBQVlDO3dCQUVuRSxJQUFJQyxrQkFBa0I7NEJBQ3BCLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRU4sSUFBSTdCLGtCQUFrQjt3QkFDcEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQXlDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLFlBQVk7Z0JBQzdCLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTU0sMEJBQTBCLElBQUksQ0FBQzFELElBQUksQ0FBQzJELFNBQVMsQ0FBQ1I7Z0JBRXBELElBQUlPLHlCQUF5QjtvQkFDM0JOLHVCQUF1QjtnQkFDekIsT0FBUTtvQkFDTixJQUFNUSxxQkFBcUJULGFBQWFqRCxTQUFTLElBQUksR0FBRztvQkFFeEQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQnFELG9CQUFtQjtvQkFFNUQsSUFBTU4sbUJBQW1CSCxhQUFhbEMsT0FBTyxJQUN2QzRDLHNCQUFzQixJQUFJLENBQUMvRCxXQUFXLENBQUNzQix1QkFBdUIsQ0FBQ2tDO29CQUVyRSxJQUFJLENBQUNPLHFCQUFxQjt3QkFDeEIsSUFBTUQsc0JBQXFCVCxhQUFhakQsU0FBUzt3QkFFakQsSUFBSSxDQUFDSixXQUFXLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUEwQixPQUFuQjZDLHFCQUFtQjtvQkFDcEQsT0FBTzt3QkFDTFIsdUJBQXVCO29CQUN6QjtvQkFFQSxJQUFJQSxzQkFBc0I7d0JBQ3hCLElBQUksQ0FBQ3RELFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQjZDLG9CQUFtQjtvQkFDaEU7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFakUsV0FBVztnQkFDM0UsSUFBTSxBQUFFa0UsT0FBU0MsWUFBRyxDQUFaRCxNQUNGaEUsT0FBT2dFLEtBQUtGLDhCQUE4QixDQUFDQyw0QkFBNEJqRSxjQUN2RWtCLFdBQVdoQixLQUFLaUIsT0FBTyxJQUN2QlksYUFBYTdCLEtBQUs4QixhQUFhLElBQy9CL0IsU0FBU21FLElBQUFBLHlDQUFtQyxFQUFDbEQsVUFBVWEsYUFDdkRzQyx5QkFBeUIsSUFBSXRFLHVCQUF1QkMsYUFBYUMsUUFBUUM7Z0JBRS9FLE9BQU9tRTtZQUNUOzs7O0tBWEEsMENBQU9DLFFBQU8ifQ==