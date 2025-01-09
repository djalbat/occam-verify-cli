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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tcGxleFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgaW5jbHVkZVN1cGVyVHlwZSA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHRoaXMudHlwZS5nZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGUpLFxuICAgICAgICAgICAgcHJvcGVydGllc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHRoaXMudHlwZSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbXBsZXhUeXBlRGVjbGFyYXRpb25TdHJpbmd9JyBjb21wbGV4IHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHN1cGVyVHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUuc2V0U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gcHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBjb3VudCA9IHByb3BlcnRpZXMucmVkdWNlKChjb3VudCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSBwcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuZmluZCgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHN1cGVyVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnR5U3RyaW5nID0gc3VwZXJUeXBlUHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgbWF0Y2hlcyB0aGUgc3VwZXIgdHlwZSdzICcke3N1cGVyVHlwZVByb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvcGVydHlUeXBlO1xuXG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wZXJ0eVR5cGU7ICAvLy9cblxuICAgICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGB2ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnRpZXMocHJvcGVydGllcywgdHlwZSkge1xuICAgIGxldCBwcm9wZXJ0aWVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBlclR5cGUgPSB0eXBlLmdldFN1cGVyVHlwZSgpLFxuICAgICAgICAgIHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgcHJvcGVydGllc1ZlcmlmaWVkID0gcHJvcGVydGllcy5ldmVyeSgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KHByb3BlcnR5LCBwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlUeXBlKHByb3BlcnR5VHlwZSkge1xuICAgIGxldCBwcm9wZXJ0eVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgcHJvcGVydHlUeXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVR5cGVTdHJpbmcgPSBwcm9wZXJ0eVR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5VHlwZVN0cmluZ30nIHByb3BlcnR5IHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShwcm9wZXJ0eVR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFwcm9wZXJ0eVR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VHlwZVN0cmluZyA9IHByb3BlcnR5VHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlUeXBlU3RyaW5nfScgcHJvcGVydHkgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5VHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5VHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVR5cGVTdHJpbmd9JyBwcm9wZXJ0eSB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wbGV4VHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gbmV3IENvbXBsZXhUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0IiwidHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0VHlwZSIsImdldFN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsImluY2x1ZGVTdXBlclR5cGUiLCJwcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnRpZXNWZXJpZmllZCIsInZlcmlmeVByb3BlcnRpZXMiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInN1cGVyVHlwZSIsImdldFN1cGVyVHlwZSIsInN1cGVyVHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdXBlclR5cGVTdHJpbmciLCJzZXRTdXBlclR5cGUiLCJ2ZXJpZnlQcm9wZXJ0eSIsInByb3BlcnR5Iiwic3VwZXJUeXBlUHJvcGVydGllcyIsInByb3BlcnR5VmVyaWZpZWQiLCJwcm9wZXJ0eVN0cmluZyIsInByb3BlcnR5TmFtZSIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwic3VwZXJUeXBlUHJvcGVydHkiLCJmaW5kIiwic3VwZXJUeXBlUHJvcGVydHlTdHJpbmciLCJwcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0eVR5cGVWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5VHlwZSIsInByb3BlcnR5VHlwZU5hbWUiLCJzZXRUeXBlIiwiZXZlcnkiLCJvYmplY3RUeXBlIiwicHJvcGVydHlUeXBlU3RyaW5nIiwicHJvcGVydHlUeXBlUHJlc2VudCIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUczQixXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLFdBQVcsRUFBRUMsSUFBSTtnQ0FERUY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTtt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