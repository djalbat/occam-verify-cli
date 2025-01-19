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
    function ComplexTypeDeclaration(fileContext, type) {
        _class_call_check(this, ComplexTypeDeclaration);
        this.fileContext = fileContext;
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
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.type.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var complexTypeDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(complexTypeDeclarationString, "' complex type declaration..."));
                var typeVerified = this.verifyType(this.type);
                if (typeVerified) {
                    var includeSuperType = false, properties = this.type.getProperties(includeSuperType), propertiesVerified = this.verifyProperties(properties, this.type);
                    if (propertiesVerified) {
                        this.fileContext.addType(this.type);
                        verified = true;
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
            value: function verifyType(type) {
                var typeVerified = false;
                var typeString = type.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typeName = type.getName(), typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    var typeString1 = type.getString();
                    this.fileContext.debug("The '".concat(typeString1, "' type is already present."));
                } else {
                    var superType;
                    superType = type.getSuperType();
                    var superTypeName = superType.getName();
                    superType = this.fileContext.findTypeByTypeName(superTypeName);
                    if (superType === null) {
                        var superTypeString = superType.getString();
                        this.fileContext.debug("The super-type '".concat(superTypeString, "' is not present."));
                    } else {
                        type.setSuperType(superType);
                        typeVerified = true;
                    }
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(typeString, "' type."));
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
            value: function verifyProperties(properties, type) {
                var _this = this;
                var propertiesVerified;
                var superType = type.getSuperType(), superTypeProperties = superType.getProperties();
                propertiesVerified = properties.every(function(property) {
                    var propertyVerified = _this.verifyProperty(property, properties, superTypeProperties);
                    if (propertyVerified) {
                        return true;
                    }
                });
                return propertiesVerified;
            }
        },
        {
            key: "verifyPropertyType",
            value: function verifyPropertyType(propertyType) {
                var propertyTypeVerified = false;
                if (propertyType === _type.objectType) {
                    propertyTypeVerified = true;
                } else {
                    var propertyTypeString = propertyType.getString(); ///
                    this.fileContext.trace("Verifying the '".concat(propertyTypeString, "' property type..."));
                    var propertyTypeName = propertyType.getName(), propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);
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
                return propertyTypeVerified;
            }
        }
    ], [
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, type);
                return complexTypeDeclaration;
            }
        }
    ]);
    return ComplexTypeDeclaration;
}(), _define_property(_ComplexTypeDeclaration, "name", "ComplexTypeDeclaration"), _ComplexTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZSA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGUpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHRoaXMudHlwZSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHN1cGVyVHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUuc2V0U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBwcm9wZXJ0eS5nZXROYW1lcygpLFxuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lc01hdGNoID0gcHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lc01hdGNoKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5ID0gc3VwZXJUeXBlUHJvcGVydGllcy5maW5kKChzdXBlclR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gc3VwZXJUeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyA9IHN1cGVyVHlwZVByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IG1hdGNoZXMgdGhlIHN1cGVyIHR5cGUncyAnJHtzdXBlclR5cGVQcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb3BlcnR5VHlwZTtcblxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgcHJvcGVydHlUeXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcGVydHlUeXBlOyAgLy8vXG5cbiAgICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgcHJvcGVydHlWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgdmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHR5cGUpIHtcbiAgICBsZXQgcHJvcGVydGllc1ZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKSxcbiAgICAgICAgICBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIHByb3BlcnRpZXNWZXJpZmllZCA9IHByb3BlcnRpZXMuZXZlcnkoKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5VHlwZShwcm9wZXJ0eVR5cGUpIHtcbiAgICBsZXQgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvcGVydHlUeXBlU3RyaW5nID0gcHJvcGVydHlUeXBlLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUocHJvcGVydHlUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghcHJvcGVydHlUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eVR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlUeXBlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGxleFR5cGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29tcGxleFR5cGVEZWNsYXJhdGlvbiA9IG5ldyBDb21wbGV4VHlwZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCB0eXBlKTtcblxuICAgIHJldHVybiBjb21wbGV4VHlwZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJpbmNsdWRlU3VwZXJUeXBlIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0aWVzIiwiYWRkVHlwZSIsImRlYnVnIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJzdXBlclR5cGUiLCJnZXRTdXBlclR5cGUiLCJzdXBlclR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3VwZXJUeXBlU3RyaW5nIiwic2V0U3VwZXJUeXBlIiwidmVyaWZ5UHJvcGVydHkiLCJwcm9wZXJ0eSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJwcm9wZXJ0eVZlcmlmaWVkIiwicHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eU5hbWVzIiwiZ2V0TmFtZXMiLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5TmFtZXNNYXRjaCIsIm1hdGNoUHJvcGVydHlOYW1lcyIsInN1cGVyVHlwZVByb3BlcnR5IiwiZmluZCIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJzdXBlclR5cGVQcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZVZlcmlmaWVkIiwidmVyaWZ5UHJvcGVydHlUeXBlIiwicHJvcGVydHlUeXBlTmFtZSIsInNldFR5cGUiLCJldmVyeSIsIm9iamVjdFR5cGUiLCJwcm9wZXJ0eVR5cGVTdHJpbmciLCJwcm9wZXJ0eVR5cGVQcmVzZW50IiwiZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzNCLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxJQUFJO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIs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