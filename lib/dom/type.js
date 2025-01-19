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
var _necessary = require("necessary");
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
var push = _necessary.arrayUtilities.push;
var typeDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[0]"), propertyDeclarationNodesQuery = (0, _query.nodesQuery)("/complexTypeDeclaration/propertyDeclaration"), propertyDeclarationTypeNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/type"), typeDeclarationSuperTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration|complexTypeDeclaration/type[1]");
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
                var includeSuperType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var properties = [];
                push(properties, this.properties);
                if (includeSuperType) {
                    var superTypeProperties = this.superType.getProperties();
                    push(properties, superTypeProperties);
                }
                return properties;
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
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var type;
                var propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode);
                if (propertyDeclarationTypeNode === null) {
                    type = objectType;
                } else {
                    var typeNode = propertyDeclarationTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, properties = null;
                    type = new Type(string, name, superType, properties);
                }
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
            key: "getProperties",
            value: function getProperties() {
                var properties = [];
                return properties;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OLCBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVbMF1cIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvbi9wcm9wZXJ0eURlY2xhcmF0aW9uXCIpLFxuICAgICAgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbnxjb21wbGV4VHlwZURlY2xhcmF0aW9uL3R5cGVbMV1cIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGUgPSBzdXBlclR5cGU7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gdGhpcy5zdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZShzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTih0aGlzLnN1cGVyVHlwZSksXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgaWYgKHByb3BlcnR5RGVjbGFyYXRpb25UeXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSwgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoVHlwZSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gIGxldCBzdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIGlmICgoc3VwZXJUeXBlICE9PSBudWxsKSAmJiAoc3VwZXJUeXBlICE9PSBvYmplY3RUeXBlKSkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9OiR7c3VwZXJUeXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZU5hbWVGcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gdHlwZU5hbWVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVEZWNsYXJhdGlvblR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZURlY2xhcmF0aW9uVHlwZU5vZGUsIC8vL1xuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgdHlwZURlY2xhcmF0aW9uU3VwZXJUeXBlTm9kZSA9IHR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSB0eXBlRGVjbGFyYXRpb25TdXBlclR5cGVOb2RlLCAvLy9cbiAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydGllc0Zyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzUXVlcnkoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLm1hcCgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInR5cGVEZWNsYXJhdGlvblR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGVRdWVyeSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlIiwicHJvcGVydGllcyIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJzZXRTdHJpbmciLCJzZXROYW1lIiwic2V0U3VwZXJUeXBlIiwic2V0UHJvcGVydGllcyIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwicHJvcGVydGllc0Zyb21KU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlRnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uVHlwZU5vZGUiLCJmcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnRpZXNGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVGcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlTmFtZUZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImRvbUFzc2lnbmVkIiwidHlwZVN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlRGVjbGFyYXRpb25UeXBlTm9kZSIsInR5cGVEZWNsYXJhdGlvblN1cGVyVHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiUHJvcGVydHkiLCJkb20iLCJwcm9wZXJ0eSIsIk9iamVjdFR5cGUiLCJmcm9tTm90aGluZyIsIk9CSkVDVF9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWlPQSxPQUFpQztlQUFqQzs7SUF1RmFBLFVBQVU7ZUFBVkE7Ozt5QkF0VGtCOzJEQUVmO3lCQUdpQjtvQkFDSTtxQkFDQztvQkFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVHLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsK0JBQStCQyxJQUFBQSxnQkFBUyxFQUFDLG9EQUN6Q0MsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDLGdEQUMzQ0MsbUNBQW1DSCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q0ksb0NBQW9DSixJQUFBQSxnQkFBUyxFQUFDO0FBRXBELElBQUEsQUFBTUsscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEM0NKO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTGhCSjs7WUFRSkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjQyxtQkFBQUEsaUVBQW1CO2dCQUMvQixJQUFNTCxhQUFhLEVBQUU7Z0JBRXJCWixLQUFLWSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtnQkFFaEMsSUFBSUssa0JBQWtCO29CQUNwQixJQUFNQyxzQkFBc0IsSUFBSSxDQUFDUCxTQUFTLENBQUNLLGFBQWE7b0JBRXhEaEIsS0FBS1ksWUFBWU07Z0JBQ25CO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVYsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVYsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhVixTQUFTO2dCQUNwQixJQUFJLENBQUNBLFNBQVMsR0FBR0E7WUFDbkI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY1YsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQ1osSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlGLElBQUk7Z0JBQ2QsSUFBSUc7Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksS0FBSzVCLFlBQVk7b0JBQzlCNEIsWUFBWTtnQkFDZCxPQUFPLElBQUksSUFBSSxDQUFDaEIsU0FBUyxLQUFLYSxNQUFNO29CQUNsQ0csWUFBWTtnQkFDZCxPQUFPO29CQUNMQSxZQUFZLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ2UsV0FBVyxDQUFDRjtnQkFDekM7Z0JBRUEsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSixJQUFJO2dCQUNoQixJQUFNRyxZQUFZSCxLQUFLRSxXQUFXLENBQUMsSUFBSSxHQUNqQ0csY0FBY0YsV0FBWSxHQUFHO2dCQUVuQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLElBQUk7Z0JBQ2pCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QkssY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0osT0FDakNPLGVBQWdCTixXQUFXRSxhQUFhRTtnQkFFOUMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJSLElBQUk7Z0JBQ3ZCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QlMscUJBQXNCUixXQUFXRTtnQkFFdkMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJWLElBQUk7Z0JBQ3pCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCSyxjQUFjLElBQUksQ0FBQ0QsYUFBYSxDQUFDSixPQUNqQ1csdUJBQXdCVixXQUFXSTtnQkFFekMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVMUIsSUFBSTtnQkFDWixJQUFNMkIsY0FBZSxJQUFJLENBQUMzQixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPMkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRO2dCQUNwQixJQUFNQyxrQkFBbUIsSUFBSSxDQUFDOUIsSUFBSSxLQUFLNkI7Z0JBRXZDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUMvQixVQUFVLEdBQzNEZ0MsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUNsQyxTQUFTLEdBQ3ZEQyxhQUFhOEIsZ0JBQ2IvQixZQUFZaUMsZUFDWmxDLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCb0MsT0FBTztvQkFDTHBDLE1BQUFBO29CQUNBQyxXQUFBQTtvQkFDQUMsWUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2tDO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUV0QyxPQUFTb0MsS0FBVHBDLE1BQ0Y2QixXQUFXN0IsTUFDWEUsYUFBYXFDLElBQUFBLHdCQUFrQixFQUFDSCxNQUFNRSxjQUN0Q3JDLFlBQVl1QyxJQUFBQSx1QkFBaUIsRUFBQ0osTUFBTUUsY0FDcEN2QyxTQUFTMEMsK0JBQStCWixVQUFVNUIsWUFDbERhLE9BQU8sSUEzSVhoQixLQTJJb0JDLFFBQVFDLE1BQU1DLFdBQVdDO2dCQUUvQyxPQUFPWTtZQUNUOzs7WUFFTzRCLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQUk3QjtnQkFFSixJQUFJNkIsYUFBYSxNQUFNO29CQUNyQjdCLE9BQU96QjtnQkFDVCxPQUFPO29CQUNMLElBQU13QyxXQUFXZSxJQUFBQSwwQkFBb0IsRUFBQ0QsV0FDaEMzQyxPQUFPNkIsVUFDUDlCLFNBQVNDLE1BQ1RDLFlBQVksTUFDWkMsYUFBYTtvQkFFbkJZLE9BQU8sSUE1SlBoQixLQTRKZ0JDLFFBQVFDLE1BQU1DLFdBQVdDO2dCQUMzQztnQkFFQSxPQUFPWTtZQUNUOzs7WUFFTytCLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QkMsbUJBQW1CLEVBQUVSLFdBQVc7Z0JBQzdELElBQU1yQyxZQUFZOEMsaUNBQWlDRCxxQkFBcUJSLGNBQ2xFVCxXQUFXbUIsZ0NBQWdDRixxQkFBcUJSLGNBQ2hFdkMsU0FBUzBDLCtCQUErQlosVUFBVTVCLFlBQ2xERCxPQUFPNkIsVUFDUDNCLGFBQWEsRUFBRSxFQUNmWSxPQUFPLElBeEtYaEIsS0F3S29CQyxRQUFRQyxNQUFNQyxXQUFXQztnQkFFL0MsT0FBT1k7WUFDVDs7O1lBRU9tQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFWixXQUFXO2dCQUNyRSxJQUFJeEI7Z0JBRUosSUFBTXFDLDhCQUE4QnZELGlDQUFpQ3NEO2dCQUVyRSxJQUFJQyxnQ0FBZ0MsTUFBTTtvQkFDeENyQyxPQUFPekI7Z0JBQ1QsT0FBTztvQkFDTCxJQUFNc0QsV0FBV1EsNkJBQ1h0QixXQUFXZSxJQUFBQSwwQkFBb0IsRUFBQ0QsV0FDaEMzQyxPQUFPNkIsVUFDUDlCLFNBQVNDLE1BQ1RDLFlBQVksTUFDWkMsYUFBYTtvQkFFbkJZLE9BQU8sSUE1TFBoQixLQTRMZ0JDLFFBQVFDLE1BQU1DLFdBQVdDO2dCQUMzQztnQkFFQSxPQUFPWTtZQUNUOzs7WUFFT3NDLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUVmLFdBQVc7Z0JBQzNFLElBQU1wQyxhQUFhb0QseUNBQXlDRCw0QkFBNEJmLGNBQ2xGckMsWUFBWXNELHdDQUF3Q0YsNEJBQTRCZixjQUNoRlQsV0FBVzJCLHVDQUF1Q0gsNEJBQTRCZixjQUM5RXZDLFNBQVMwQywrQkFBK0JaLFVBQVU1QixZQUNsREQsT0FBTzZCLFVBQ1BmLE9BQU8sSUF4TVhoQixLQXdNb0JDLFFBQVFDLE1BQU1DLFdBQVdDO2dCQUUvQyxPQUFPWTtZQUNUOzs7V0EzTUloQjs7QUFtSUosaUJBbklJQSxNQW1JR0UsUUFBTztJQTJFaEIsV0FBZXlELElBQUFBLGdCQUFXLEVBQUMzRDtBQUUzQixTQUFTMkMsK0JBQStCWixRQUFRLEVBQUU1QixTQUFTO0lBQ3pELElBQUlGLFNBQVM4QixVQUFXLEdBQUc7SUFFM0IsSUFBSSxBQUFDNUIsY0FBYyxRQUFVQSxjQUFjWixZQUFhO1FBQ3RELElBQU1xRSxhQUFhM0QsUUFDYjRELGdCQUFnQjFELFVBQVVHLE9BQU87UUFFdkNMLFNBQVMsQUFBQyxHQUFnQjRELE9BQWRELFlBQVcsS0FBaUIsT0FBZEM7SUFDNUI7SUFFQSxPQUFPNUQ7QUFDVDtBQUVBLFNBQVNpRCxnQ0FBZ0NGLG1CQUFtQixFQUFFUixXQUFXO0lBQ3ZFLElBQU1zQiwwQkFBMEJwRSw2QkFBNkJzRCxzQkFDdkRILFdBQVdpQix5QkFDWC9CLFdBQVdlLElBQUFBLDBCQUFvQixFQUFDRDtJQUV0QyxPQUFPZDtBQUNUO0FBRUEsU0FBU2tCLGlDQUFpQ0QsbUJBQW1CLEVBQUVSLFdBQVc7SUFDeEUsSUFBTXVCLCtCQUErQmhFLGtDQUFrQ2lELHNCQUNqRWdCLGdCQUFnQkQsOEJBQ2hCNUQsWUFBWUgsS0FBSzRDLFlBQVksQ0FBQ29CO0lBRXBDLE9BQU83RDtBQUNUO0FBRUEsU0FBU3VELHVDQUF1Q0gsMEJBQTBCLEVBQUVmLFdBQVc7SUFDckYsSUFBTXNCLDBCQUEwQnBFLDZCQUE2QjZELDZCQUN2RFYsV0FBV2lCLHlCQUNYL0IsV0FBV2UsSUFBQUEsMEJBQW9CLEVBQUNEO0lBRXRDLE9BQU9kO0FBQ1Q7QUFFQSxTQUFTMEIsd0NBQXdDRiwwQkFBMEIsRUFBRWYsV0FBVztJQUN0RixJQUFNdUIsK0JBQStCaEUsa0NBQWtDd0QsNkJBQ2pFUyxnQkFBZ0JELDhCQUNoQjVELFlBQVlILEtBQUs0QyxZQUFZLENBQUNvQjtJQUVwQyxPQUFPN0Q7QUFDVDtBQUVBLFNBQVNxRCx5Q0FBeUNELDBCQUEwQixFQUFFZixXQUFXO0lBQ3ZGLElBQU15QiwyQkFBMkJyRSw4QkFBOEIyRCw2QkFDekRuRCxhQUFhNkQseUJBQXlCQyxHQUFHLENBQUMsU0FBQ2Q7UUFDekMsSUFBTSxBQUFFZSxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxXQUFXRixTQUFTaEIsMkJBQTJCLENBQUNDLHlCQUF5Qlo7UUFFL0UsT0FBTzZCO0lBQ1Q7SUFFTixPQUFPakU7QUFDVDtBQUVBLElBQUEsQUFBTWtFLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKOUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGFBQWEsRUFBRTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUE2QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTlCLFlBQVksTUFDWkQsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJvQyxPQUFPO29CQUNMcEMsTUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9tQztZQUNUOzs7O1lBRU9pQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNckUsT0FBT3NFLDJCQUFnQixFQUN2QnZFLFNBQVNDLE1BQ1RDLFlBQVksTUFDWlosYUFBYSxJQXRCakIrRSxXQXNCZ0NyRSxRQUFRQyxNQUFNQztnQkFFaEQsT0FBT1o7WUFDVDs7O1dBekJJK0U7RUFBbUJ0RTtBQTRCbEIsSUFBTVQsYUFBYStFLFdBQVdDLFdBQVcifQ==