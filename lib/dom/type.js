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
                var name = json.name, typeName = name, properties = propertiesFromJSON(json, fileContext), superType = (0, _json.superTypeFromJSON)(json, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType, properties);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVGcm9tSlNPTiwgc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OLCBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVbMF1cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvbi9wcm9wZXJ0eURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVbMV1cIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGUgPSBzdXBlclR5cGU7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVOb2RlTWF0Y2hlcyA9IHR5cGVOYW1lTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTih0aGlzLnN1cGVyVHlwZSksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gIGxldCBzdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIGlmICgoc3VwZXJUeXBlICE9PSBudWxsKSAmJiAoc3VwZXJUeXBlICE9PSBvYmplY3RUeXBlKSkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9OiR7c3VwZXJUeXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZU5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gdHlwZU5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwidHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlIiwicHJvcGVydGllcyIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJnZXRQcm9wZXJ0aWVzIiwic2V0U3RyaW5nIiwic2V0TmFtZSIsInNldFN1cGVyVHlwZSIsInNldFByb3BlcnRpZXMiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlTmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRvbUFzc2lnbmVkIiwidHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJQcm9wZXJ0eSIsImRvbSIsInByb3BlcnR5IiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBcU1BLE9BQWlDO2VBQWpDOztJQWlGYUEsVUFBVTtlQUFWQTs7OzJEQXBSRzt5QkFHaUI7b0JBQ0k7cUJBQ0M7b0JBQ2tEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RixJQUFNQywrQkFBK0JDLElBQUFBLGdCQUFTLEVBQUMsb0RBQ3pDQyxnQ0FBZ0NDLElBQUFBLGlCQUFVLEVBQUMsZ0RBQzNDQyxvQ0FBb0NILElBQUFBLGdCQUFTLEVBQUM7QUFFcEQsSUFBQSxBQUFNSSxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQUQzQ0o7UUFFRixJQUFJLENBQUNDLE1B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