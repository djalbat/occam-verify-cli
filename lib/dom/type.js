"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    objectType: function() {
        return objectType;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _typeNames = require("../typeNames");
var _name = require("../utilities/name");
var _query = require("../utilities/query");
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[0]"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), typeDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[1]");
var Type = /*#__PURE__*/ function() {
    function Type(string, name, superType, properties) {
        _class_call_check(this, Type);
        this.string = string;
        this.name = name;
        this.superType = superType;
        this.properties = properties;
    }
    _create_class(Type, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getSuperType",
            value: function getSuperType() {
                return this.superType;
            }
        },
        {
            key: "getProperties",
            value: function getProperties() {
                return this.properties;
            }
        },
        {
            key: "setString",
            value: function setString(string) {
                this.string = string;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setSuperType",
            value: function setSuperType(superType) {
                this.superType = superType;
            }
        },
        {
            key: "setProperties",
            value: function setProperties(properties) {
                this.properties = properties;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(type) {
                var equalTo = this === type;
                return equalTo;
            }
        },
        {
            key: "isSubTypeOf",
            value: function isSubTypeOf(type) {
                var subTypeOf;
                if (false) {
                ///
                } else if (this === objectType) {
                    subTypeOf = false;
                } else if (this.superType === type) {
                    subTypeOf = true;
                } else {
                    subTypeOf = this.superType.isSubTypeOf(type);
                }
                return subTypeOf;
            }
        },
        {
            key: "isSuperTypeOf",
            value: function isSuperTypeOf(type) {
                var subTypeOf = type.isSubTypeOf(this), superTypeOf = subTypeOf; ///
                return superTypeOf;
            }
        },
        {
            key: "isComparableTo",
            value: function isComparableTo(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), comparableTo = equalTo || subTypeOf || superTypeOf;
                return comparableTo;
            }
        },
        {
            key: "isEqualToOrSubTypeOf",
            value: function isEqualToOrSubTypeOf(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), equalToOrSubTypeOf = equalTo || subTypeOf;
                return equalToOrSubTypeOf;
            }
        },
        {
            key: "isEqualToOrSuperTypeOf",
            value: function isEqualToOrSuperTypeOf(type) {
                var equalTo = this.isEqualTo(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSuperTypeOf = equalTo || superTypeOf;
                return equalToOrSuperTypeOf;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nodeMatches = this.name === name;
                return nodeMatches;
            }
        },
        {
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                var typeNameMatches = this.name === typeName;
                return typeNameMatches;
            }
        },
        {
            key: "matchTypeNode",
            value: function matchTypeNode(typeNode) {
                var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typeNameMatches = this.matchTypeName(typeName), typeNodeMatches = typeNameMatches; ///
                return typeNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypeJSON = (0, _json.superTypeToSuperTypeJSON)(this.superType), properties = propertiesJSON, superType = superTypeJSON, name = this.name, json = {
                    name: name,
                    superType: superType,
                    properties: properties
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name, typeName = name, properties = (0, _json.propertiesFromJSON)(json, fileContext), superType = (0, _json.superTypeFromJSON)(json, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType, properties);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var type;
                if (typeNode === null) {
                    type = objectType;
                } else {
                    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, properties = null;
                    type = new Type(string, name, superType, properties);
                }
                return type;
            }
        },
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var superType = superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext), typeName = typeNameFromTypeDeclarationNode(typeDeclarationNode, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), name = typeName, properties = [], type = new Type(string, name, superType, properties);
                return type;
            }
        },
        {
            key: "fromComplexTypeDeclarationNode",
            value: function fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
                var properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), superType = superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), typeName = typeNameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), name = typeName, type = new Type(string, name, superType, properties);
                return type;
            }
        }
    ]);
    return Type;
}();
_define_property(Type, "name", "Type");
var _default = (0, _dom.domAssigned)(Type);
function stringFromTypeNameAndSuperType(typeName, superType) {
    var string = typeName; ///
    if (superType !== null && superType !== objectType) {
        var typeString = string, superTypeName = superType.getName();
        string = "".concat(typeString, ":").concat(superTypeName);
    }
    return string;
}
function typeNameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode);
    return typeName;
}
function superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(typeDeclarationNode), superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
    return superType;
}
function typeNameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode), typeNode = typeDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode);
    return typeName;
}
function superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(complexTypeDeclarationNode), superTypeNode = typeDeclarationSuperTypeNode, superType = Type.fromTypeNode(superTypeNode);
    return superType;
}
function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    var propertyDeclarationNodes = propertyDeclarationNodesQuery(complexTypeDeclarationNode), properties = propertyDeclarationNodes.map(function(propertyDeclarationNode) {
        var Property = _dom.default.Property, property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, fileContext);
        return property;
    });
    return properties;
}
var ObjectType = /*#__PURE__*/ function(Type) {
    _inherits(ObjectType, Type);
    function ObjectType() {
        _class_call_check(this, ObjectType);
        return _call_super(this, ObjectType, arguments);
    }
    _create_class(ObjectType, [
        {
            key: "toJSON",
            value: function toJSON() {
                var superType = null, name = this.name, json = {
                    name: name,
                    superType: superType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _typeNames.OBJECT_TYPE_NAME, string = name, superType = null, objectType = new ObjectType(string, name, superType);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVUb1N1cGVyVHlwZUpTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVswXVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb21wbGV4VHlwZURlY2xhcmF0aW9uL3Byb3BlcnR5RGVjbGFyYXRpb25cIiksXG4gICAgICB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9ufGNvbXBsZXhUeXBlRGVjbGFyYXRpb24vdHlwZVsxXVwiKTtcblxuY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlKHN1cGVyVHlwZSkge1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcyA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZU5vZGVNYXRjaGVzID0gdHlwZU5hbWVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHRoaXMuc3VwZXJUeXBlKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChUeXBlKTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpIHtcbiAgbGV0IHN0cmluZyA9IHR5cGVOYW1lOyAgLy8vXG5cbiAgaWYgKChzdXBlclR5cGUgIT09IG51bGwpICYmIChzdXBlclR5cGUgIT09IG9iamVjdFR5cGUpKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ306JHtzdXBlclR5cGVOYW1lfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlTmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gIHJldHVybiB0eXBlTmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgc3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsIC8vL1xuICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICByZXR1cm4gc3VwZXJUeXBlO1xufVxuXG5mdW5jdGlvbiB0eXBlTmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gIHJldHVybiB0eXBlTmFtZTtcbn1cblxuZnVuY3Rpb24gc3VwZXJUeXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5KGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgc3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUsIC8vL1xuICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICByZXR1cm4gc3VwZXJUeXBlO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMubWFwKChwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJzdXBlclR5cGUiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImdldFByb3BlcnRpZXMiLCJzZXRTdHJpbmciLCJzZXROYW1lIiwic2V0U3VwZXJUeXBlIiwic2V0UHJvcGVydGllcyIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVOb2RlTWF0Y2hlcyIsInRvSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVKU09OIiwic3VwZXJUeXBlVG9TdXBlclR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJzdXBlclR5cGVGcm9tSlNPTiIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsImZyb21UeXBlTm9kZSIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZU5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsImZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVOYW1lRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZG9tQXNzaWduZWQiLCJ0eXBlU3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlIiwidHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsIlByb3BlcnR5IiwiZG9tIiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFxTUEsT0FBaUM7ZUFBakM7O0lBaUZhQSxVQUFVO2VBQVZBOzs7MkRBcFJHO3lCQUdpQjtvQkFDSTtxQkFDQztvQkFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVHLElBQU1DLCtCQUErQkMsSUFBQUEsZ0JBQVMsRUFBQyxvREFDekNDLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQyxnREFDM0NDLG9DQUFvQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVwRCxJQUFBLEFBQU1JLHFCQUFOO2FBQU1BLEtBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRDND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