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
var _type1 = require("../declaration/type");
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
                var _this = this;
                var verified = false;
                var complexTypeDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
                var typeVerified = this.verifyType();
                if (typeVerified) {
                    var superTypesVerified = this.verifySuperTypes();
                    if (superTypesVerified) {
                        var includeSuperTypes = false, properties = this.type.getProperties(includeSuperTypes), propertiesVerified = this.verifyProperties(properties);
                        if (propertiesVerified) {
                            var superTypes;
                            superTypes = this.type.getSuperTypes();
                            superTypes = superTypes.map(function(superType) {
                                var superTypeName = superType.getName();
                                superType = _this.fileContext.findTypeByTypeName(superTypeName);
                                return superType;
                            });
                            this.type.setSuperTypes(superTypes);
                            this.fileContext.addType(this.type);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(complexTypeDeclarationString, "' complex type declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerified = false;
                var typeName = this.type.getName();
                this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    this.fileContext.debug("The type '".concat(typeName, "' is already present."));
                } else {
                    typeVerified = true;
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                }
                return typeVerified;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(property, properties, superTypeProperties) {
                var propertyVerified = false;
                var propertyString = property.getString();
                this.fileContext.trace("Verifying the '".concat(propertyString, "' property..."));
                var propertyNames = property.getNames(), count = properties.reduce(function(count, property) {
                    var propertyNamesMatch = property.matchPropertyNames(propertyNames);
                    if (propertyNamesMatch) {
                        count++;
                    }
                    return count;
                }, 0);
                if (count > 1) {
                    this.fileContext.debug("The '".concat(propertyString, "' property appears more than once."));
                } else {
                    var superTypeProperty = superTypeProperties.find(function(superTypeProperty) {
                        var propertyNameMatches = superTypeProperty.matchPropertyNames(propertyNames);
                        if (propertyNameMatches) {
                            return true;
                        }
                    }) || null;
                    if (superTypeProperty !== null) {
                        var superTypePropertyString = superTypeProperty.getString();
                        this.fileContext.debug("The '".concat(propertyString, "' property matches the super type's '").concat(superTypePropertyString, "' property."));
                    } else {
                        var propertyType;
                        propertyType = property.getType();
                        var propertyTypeVerified = this.verifyPropertyType(propertyType);
                        if (propertyTypeVerified) {
                            var propertyTypeName = propertyType.getName();
                            propertyType = this.fileContext.findTypeByTypeName(propertyTypeName);
                            var type = propertyType; ///
                            property.setType(type);
                            propertyVerified = true;
                        }
                    }
                }
                if (propertyVerified) {
                    this.fileContext.debug("verified the '".concat(propertyString, "' property."));
                }
                return propertyVerified;
            }
        },
        {
            key: "verifyProperties",
            value: function verifyProperties(properties) {
                var _this = this;
                var propertiesVerified;
                var superTypes = this.type.getSuperTypes();
                propertiesVerified = superTypes.every(function(superType) {
                    var superTypeProperties = superType.getProperties(), propertiesVerified = properties.every(function(property) {
                        var propertyVerified = _this.verifyProperty(property, properties, superTypeProperties);
                        if (propertyVerified) {
                            return true;
                        }
                    });
                    if (propertiesVerified) {
                        return true;
                    }
                });
                return propertiesVerified;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerified = true;
                var superTypes = this.type.getSuperTypes(), superTypesString = (0, _type1.superTypesStringFromSuperTypes)(superTypes);
                if (superTypesString !== null) {
                    var typeName = this.type.getString();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type's ").concat(superTypesString, " super types..."));
                    superTypesVerified = superTypes.every(function(superType) {
                        var superTypeName = superType.getName(), superTypePresent = _this.fileContext.isTypePresentByTypeName(superTypeName);
                        if (superTypePresent) {
                            return true;
                        }
                    });
                    if (superTypesVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type's ").concat(superTypesString, " super types."));
                    }
                }
                return superTypesVerified;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(propertyType) {
                var propertyTypeVerified = false;
                if (propertyType === _type.objectType) {
                    propertyTypeVerified = true;
                } else {
                    var typeName = this.type.getName(), propertyTypeName = propertyType.getName();
                    if (typeName === propertyTypeName) {
                        propertyTypeVerified = true;
                    } else {
                        var propertyTypeString = propertyType.getString(); ///
                        this.fileContext.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                        var propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);
                        if (!propertyTypePresent) {
                            var propertyTypeString1 = propertyType.getString();
                            this.fileContext.debug("The '".concat(propertyTypeString1, "' property type is not present."));
                        } else {
                            propertyTypeVerified = true;
                        }
                        if (propertyTypeVerified) {
                            this.fileContext.debug("...verified the '".concat(propertyTypeString, "' property type."));
                        }
                    }
                }
                return propertyTypeVerified;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, node = complexTypeDeclarationNode, string = fileContext.nodeAsString(node), type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nfScgY29tcGxleCB0eXBlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlcygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVTdXBlclR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB0aGlzLnR5cGUuZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBpZiAocHJvcGVydGllc1ZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHN1cGVyVHlwZXM7XG5cbiAgICAgICAgICBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzLm1hcCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgc3VwZXJUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBlclR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnR5cGUuc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZ30nIGNvbXBsZXggdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcykge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gcHJvcGVydHkuZ2V0TmFtZXMoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZXNNYXRjaCA9IHByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZXNNYXRjaCkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lcyhwcm9wZXJ0eU5hbWVzKTtcblxuICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydHlTdHJpbmcgPSBzdXBlclR5cGVQcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBtYXRjaGVzIHRoZSBzdXBlciB0eXBlJ3MgJyR7c3VwZXJUeXBlUHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eVR5cGU7XG5cbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVR5cGUocHJvcGVydHlUeXBlKTtcblxuICAgICAgICBpZiAocHJvcGVydHlUeXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHByb3BlcnR5VHlwZTsgIC8vL1xuXG4gICAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYHZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnRpZXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmaWVkID0gc3VwZXJUeXBlcy5ldmVyeSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlcyA9IHRoaXMudHlwZS5nZXRTdXBlclR5cGVzKCksXG4gICAgICAgICAgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICAgIGlmIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUncyAke3N1cGVyVHlwZXNTdHJpbmd9IHN1cGVyIHR5cGVzLi4uYCk7XG5cbiAgICAgIHN1cGVyVHlwZXNWZXJpZmllZCA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlJ3MgJHtzdXBlclR5cGVzU3RyaW5nfSBzdXBlciB0eXBlcy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGVOYW1lID0gcHJvcGVydHlUeXBlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHR5cGVOYW1lID09PSBwcm9wZXJ0eVR5cGVOYW1lKSB7XG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHByb3BlcnR5VHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdHlwZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwic3VwZXJUeXBlc1ZlcmlmaWVkIiwidmVyaWZ5U3VwZXJUeXBlcyIsImluY2x1ZGVTdXBlclR5cGVzIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwic3VwZXJUeXBlcyIsImdldFN1cGVyVHlwZXMiLCJtYXAiLCJzdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFN1cGVyVHlwZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5Iiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZWQiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZXMiLCJnZXROYW1lcyIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lc01hdGNoIiwibWF0Y2hQcm9wZXJ0eU5hbWVzIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsInN1cGVyVHlwZVByb3BlcnR5U3RyaW5nIiwicHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwic2V0VHlwZSIsImV2ZXJ5Iiwic3VwZXJUeXBlc1N0cmluZyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInN1cGVyVHlwZVByZXNlbnQiLCJvYmplY3RUeXBlIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO29CQUVXO3FCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE5IO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJ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